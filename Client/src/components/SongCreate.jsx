import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled/macro';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { createSongAsync } from '../redux/actions/songActions';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';
import { PacmanLoader } from 'react-spinners';

const MAX_FILE_SIZE = 9 * 1024 * 1024; // 10MB size limit

// Styled Components
const FormContainer = styled.div`
  max-width: 500px;
  margin: 50px auto 10px auto;
  padding: 20px;
  background-color: #081730;
  border: 2px solid #3498db;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: orange;
  text-align: center;
`;

const StyledHeader = styled.h2`
  font-weight: bold;
`;

const FormField = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px; /* Increase margin for more space */
`;

const Input = styled(Field)`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  margin-bottom: 10px; /* Increase margin for more space */
  border-color: #3498db;
  transition: border-color 0.3s ease-in-out;
  &:focus {
    border-color: #2980b9;
  }
`;

const ErrorText = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 0;
`;

const Note = styled.div`
  color: #999;
  font-size: 12px;
  margin-top: 5px;
  text-align: center;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: ${({ disabled }) => (disabled ? '#ccc' : '#3498db')};
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: ${({ disabled }) => (disabled ? '#ccc' : '#2980b9')};
  }
`;

const AddIcon = styled(AiOutlinePlusCircle)`
  margin-right: 5px;
`;

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

// Validation Schema
const validationSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  artist: Yup.string().required('Artist is required'),
  genre: Yup.string().required('Genre is required'),
});

// Initial Form Values
const initialValues = {
  title: '',
  artist: '',
  genre: '',
};

const SongCreate = () => {
  const navigate = useNavigate();
  const successMessageDisplayed = useRef(false);
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (values, { resetForm }) => {
    const formData = new FormData();
    formData.append('title', values.title);
    formData.append('artist', values.artist);
    formData.append('genre', values.genre);
    formData.append('coverImage', coverImage);
    formData.append('file', file);

    try {
      dispatch(createSongAsync(formData));
      setIsSubmitting(true);
    } catch (error) {
      console.error('Error creating song:', error);
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setCoverImage(file);
  };

  const handleSongFileChange = (event) => {
    const File = event.target.files[0];
    setFile(File);
  };

  const status = useSelector((state) => state.songs.status);

  useEffect(() => {
    if (status === 201 && !successMessageDisplayed.current) {
      toast.success('Music created successfully!', { autoClose: 3000 });
      setTimeout(() => {
        setIsSubmitting(false);
        navigate('/');
      }, 4000);
    } else if (status === 500 && !successMessageDisplayed.current) {
      console.log("500 status.")
      toast.error(`Error creating music 😌`, { autoClose: 3000 });
      setIsSubmitting(false);
    }
    return () => {
      if (status === 201) {
        successMessageDisplayed.current = true;
      }
    };
  }, [status, navigate]);

  return (
    <div>
      <FormContainer>
        <StyledHeader className='pb-5'>Add New Song</StyledHeader>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isValid }) => (
            <Form>
              <FormField>
                <Label className='pr-3'>Title</Label>
                <Input type="text" name="title" />
                <ErrorMessage name="title" component={ErrorText} />
              </FormField>
              <FormField>
                <Label className='pr-3'>Artist</Label>
                <Input type="text" name="artist" />
                <ErrorMessage name="artist" component={ErrorText} />
              </FormField>
              <FormField>
                <Label className='pr-3'>Genre</Label>
                <Input type="text" name="genre" />
                <ErrorMessage name="genre" component={ErrorText} />
              </FormField>
              <FormField>
                <Label>Cover Image (PNG or JPG)</Label>
                <Input
                  type="file"
                  accept=".png, .jpg, .jpeg"
                  name="coverImage"
                  onChange={handleImageChange}
                />
                <ErrorText>
                  {coverImage && coverImage.size > MAX_FILE_SIZE && (
                    <>
                      <br />
                      <span>Maximum file size allowed is 10MB.</span>
                    </>
                  )}
                </ErrorText>
              </FormField>
              <FormField>
                <Label className='pr-3 pb-5'>Song File (MP3)</Label>
                <Input
                  type="file"
                  accept=".mp3"
                  name="file"
                  onChange={handleSongFileChange}
                />
                <ErrorText>
                  {file && file.size > MAX_FILE_SIZE && (
                    <>
                      <br />
                      <span>Maximum file size allowed is 10MB.</span>
                    </>
                  )}
                                </ErrorText>
                {file && (
                  <Note>
                    Uploading this music file might take approximately{' '}
                    {Math.ceil((file.size / 1000000) * 40)} seconds.
                    <br />
                    Optimize your experience by using smaller file sizes.
                  </Note>
                )}
              </FormField>
              <Button
                type="submit"
                disabled={!isValid || !coverImage || !file || isSubmitting}
              >
                {!isSubmitting ? (
                  <>
                    <AddIcon />
                    Create
                  </>
                ) : (
                  <PacmanLoader color="#fff" css={override} size={15} />
                )}
              </Button>
            </Form>
          )}
        </Formik>
      </FormContainer>
      <ToastContainer />
    </div>
  );
};

export default SongCreate;


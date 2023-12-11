import React from "react";
import Feature from "./Feature";

function Experience() {
  return (
    <div className="experience flex flex-col items-center justify-start px-[5rem] bg-[#020917] h-[50rem] pt-[18rem] mt-[-10rem] relative z-[2] rounded-t-[5rem]">
      {/* titld icon */}
      <img src={require("../img/Path 318.png")} alt="" className="w-[5rem]" />
      {/* heading */}
      <div className="headline mt-7 flex flex-col items-center text-[2rem]">
        <span>An Music App Can Change Your Daily Life</span>
        <span>
          <b>Music Experience</b>
        </span>
      </div>
      {/* features  */}
      <div className="feature flex items-center justify-around mt-[6rem] w-[100%]">
        <Feature icon="Group 2" title="For listening a Music" />
        <Feature icon="music icon" title="For Updating a Music" />
        <Feature icon="Group 4" title="For uploading a Music" />
      </div>
     
    </div>
  );
}

export default Experience;
import Image from "next/image";
import { skillsdata } from "./projectData";
import { DisplayData } from "./showData";

function Skills() {
 console.log(...skillsdata)
  return (
    <>
<DisplayData/>
      <h1 className=" text-4xl text-center m-5">I’m Familier with</h1>
      <div className="container flex justify-center w-3/4 md:w-2/3 lg:w-1/2">
  <div className="flex gap-4 md:grid-flow-row sm:grid-cols-1">
    {skillsdata.map((skill) => (
      <div className="hover:scale-125 transition-all duration-500 cursor-pointer" key={skill.id}>
        <div className="bg-sky-700 rounded-md flex grid-cols-4 items-center flex-col p-2">
          <Image alt="react" src={skill.image} height={40} width={40} />
        </div>
        <p className="p-3 text-m">{skill.name}</p>
      </div>
    ))}
  </div>
</div>
    </>
  );
}

export default Skills;

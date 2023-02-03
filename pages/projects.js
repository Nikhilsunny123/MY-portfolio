import React from "react";
import Image from "next/image";
import Link from "next/link";

import { projectList } from "../components/projectData";

const Projects = () => {
  console.log(...projectList);

  return (
    <div className="container p-20">
      <h1 className="text-center text-2xl underline">Projects</h1>
      <div className="mt-20">
        <div className="flex flex-wrap grid grid-cols-2 gap-4 place-content-around">
          {projectList.map((project, key) => (
            <div className="p-2" key={key}>
              <Image
                alt="project"
                src={project.image}
                height={400}
                width={400}
              />
              <h3 className="text-2xl font-bold">{project.name}</h3>
              <p>Developed using: {project.description}</p>
              <div className="flex gap-3 m-3 ">
                <button className="bg-sky-700 hover:bg-sky-300 text-white font-bold py-2 px-4 border border-blue-700 rounded-full scale-75 hover:scale-100 ease-in duration-500">
                  <Link href={project.liveLink}>Live Demo</Link>
                </button>
                <button className="bg-green-700 hover:bg-green-300 text-white font-bold py-2 px-4 border border-green-700 rounded-full scale-75 hover:scale-100 ease-in duration-500">
                  <Link href={project.projectLink}>Source Code</Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

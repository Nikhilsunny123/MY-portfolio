import React from "react";
import Image from "next/image";
import Link from "next/link";

import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebaseConfig/fireBaseConfiguration";

// import { projectList } from "../components/projectData";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, "projects"), (snapshot) => {
      setProjects(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <div className="container p-20">
      <h1 className="text-center text-2xl ">Projects</h1>
      <div className="mt-20 ">
        <div className="flex flex-wrap justify-around">
          {projects.map(({ data }, key) => (
            <div className="p-2 w-full sm:w-1/2" key={key}>
              <Image
                alt="project"
                src={data.image}
                height={400}
                width={400}
                className="max-h-48 max-w-full object-cover"
              />
              <h3 className="text-2xl font-bold sm:text-md">{data.name}</h3>
              <p className="text-sm ">Developed using : {data.description}</p>
              <div className="flex gap-3 m-3 ">
                <button className="bg-sky-700 hover:bg-sky-300 text-white font-bold py-2 px-4 border border-blue-700 rounded-full scale-75 hover:scale-100 ease-in duration-500">
                  <Link href={data.liveLink}>Live Demo</Link>
                </button>
                <button className="bg-green-700 hover:bg-green-300 text-white font-bold py-2 px-4 border border-green-700 rounded-full scale-75 hover:scale-100 ease-in duration-500">
                  <Link href={data.projectLink}>Source Code</Link>
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

import Image from "next/image";
import { skillsdata } from "./projectData";
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebaseConfig/fireBaseConfiguration";

function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, "skills"), (snapshot) => {
      setSkills(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <>
      {/* <DisplayData/> */}
      <h1 className=" text-4xl text-center m-5">I’m Familier with</h1>
      <div className="container flex justify-center w-3/4 md:w-2/3 lg:w-1/2">
        <div className="flex flex-col gap-4 sm:grid sm:grid-cols-2 md:grid md:grid-cols-4 xs:grid-cols-2">
          {skills.map(({ data, id }) => (
            <div
              className="hover:scale-125 transition-all duration-500 cursor-pointer"
              key={data.id}
            >
              <div className="bg-sky-700 rounded-md flex items-center flex-col p-2">
                <Image alt="react" src={data.image} height={40} width={40} />
                <p className="p-3 text-m">{data.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;

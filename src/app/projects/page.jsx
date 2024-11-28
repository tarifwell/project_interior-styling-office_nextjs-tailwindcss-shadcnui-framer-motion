import React from "react";
import Image from "next/image";

import projects from "../../assets/data/projects";

const page = () => {
  return (
    <div className=""> {/* container p-10 */}
      <div className="bg-[url('/images_projects/projects_background1.jpg')] bg-center bg-cover">
        <h1 className="container p-64 text-6xl font-semibold text-white tracking-widest"> {/* py-64 */}
          Our Projects
        </h1>
      </div>

      <div className="container grid lg:grid-cols-2 gap-8 p-8"> {/* py-8 py-10 gap-4 md:grid-cols-4 */}
        {
          projects.map((project) => (
            <div 
              key={`project-${project.id}`}
              className="relative overflow-hidden rounded-xl group"
            >
              <div>
                <Image
                  src={project.image}
                  width={480}
                  height={380}
                  alt={project.name}
                  className="w-full"
                />
              </div>
              <div className="absolute bottom-0 right-0 bg-white/90 dark:bg-black/40 flex-col items-center justify-end w-96 gap-32 p-12 text-xl transition duration-300 ease-in-out translate-y-full from-transparent to-black group-hover:translate-y-0">
                <h1 className="text-2xl font-semibold">{project.name}</h1>
                <p className="py-4">{project.description}</p>
              </div>
            </div>
          ))
        }
      </div>

    </div>
  );
};

export default page;


  import React from "react";
function PortapholioCard(){


const projects = [
  {
    title: "Login",
    link: "https://denisv2112.github.io/login/",
  },
];

  return (
    <div className="">
      <h2 className="">Project Catalog</h2>
      <div className="">
        {projects.map((project, index) => (
          <div
            key={index}
            className=""
          >
            <div className="p-4">
                <h3>{project.title}</h3>
              <a
                href={project.link}
                target=""
                rel=""
                className=""
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};




export default PortapholioCard;

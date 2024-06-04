import React, { useEffect, useState } from "react";
import { projectNav, projectsData } from "../data/projects-data";
import { Project } from "./Project";

export const Projects = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      const newProject = projectsData.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      setProjects(newProject);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <div>
      <nav className="mb-12 max-w-xl mx-auto">
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center text-cyan-200">
          {projectNav.map((item, index) => {
            return (
              <li
                key={index}
                onClick={(e) => {
                  handleClick(e, index);
                }}
                className={`${active === index ? "active" : ""}
                  cursor-pointer capitalize m-4`}
              >
                {item.name}
              </li>
            );
          })}
        </ul>
      </nav>

      <section className="grid lg:grid-cols-3 gap-y-12 lg:gap-x-8 lg:gap-y-8">
        {projects.map((item) => {
          return <Project item={item} key={item.id} />;
        })}
      </section>
    </div>
  );
};

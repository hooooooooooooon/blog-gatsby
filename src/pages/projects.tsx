import React, { useState } from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const projects = [
  {
    id: 1,
    title: "Project One",
    description: "Description for project one",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "Project Two",
    description: "Description for project two",
    imageUrl: "https://via.placeholder.com/150",
  },
];

export default function Projects() {
  const [view, setView] = useState("list"); // 'list' 또는 'tile'
  return (
    <Layout title="Projects">
      <div className="container mx-auto p-6">
        <div className="flex justify-end mb-4">
          <button
            className={`p-2 mr-2 ${view === "list" ? "bg-gray-800 text-white" : "bg-gray-200"
              }`}
            onClick={() => setView("list")}
          >
            List View
          </button>
          <button
            className={`p-2 ${view === "tile" ? "bg-gray-800 text-white" : "bg-gray-200"
              }`}
            onClick={() => setView("tile")}
          >
            Tile View
          </button>
        </div>
        <div
          className={`grid ${view === "tile"
            ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            : ""
            }`}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className={`border p-4 ${view === "list"
                ? "mb-4"
                : "flex flex-col items-center text-center"
                }`}
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className={`${view === "list" ? "w-24 h-24" : "w-full h-48"
                  } mb-4`}
              />
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export const Head = () => <Seo title="Projects" />;
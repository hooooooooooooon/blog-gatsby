import { HeadFC } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

export default function About() {
  return (
    <Layout title="Welcome">
      <div className="max-w-4xl mx-auto p-6 font-sans">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold">About Me</h1>
          <p className="text-xl mt-2">Hi, I'm [Your Name]</p>
        </header>
        <section className="flex flex-col md:flex-row items-center mb-8">
          <img
            src="your-photo.jpg"
            alt="Your Name"
            className="w-40 h-40 rounded-full mb-4 md:mb-0 md:mr-8"
          />
          <div className="text-center md:text-left">
            <p className="text-lg">
              I'm a [Your Job Title] with a passion for [Your Passion]. I have
              [X] years of experience in [Your Field] and specialize in [Your
              Specialty].
            </p>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Background</h2>
          <p className="text-lg mb-4">[Your Background Information]</p>
          <h2 className="text-2xl font-semibold mb-4">Experience & Skills</h2>
          <ul className="list-disc list-inside">
            <li className="text-lg">Skill 1</li>
            <li className="text-lg">Skill 2</li>
            <li className="text-lg">Skill 3</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Personal Story</h2>
          <p className="text-lg mb-4">[Your Personal Story]</p>
          <p className="text-lg">[Your Hobbies and Interests]</p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p className="text-lg">Email: [your-email@example.com]</p>
          <p className="text-lg">
            LinkedIn:{" "}
            <a href="[your-linkedin-url]" className="text-blue-500">
              [Your LinkedIn]
            </a>
          </p>
          <p className="text-lg">
            GitHub:{" "}
            <a href="[your-github-url]" className="text-blue-500">
              [Your GitHub]
            </a>
          </p>
        </section>
        <footer className="flex justify-around mt-8">
          <a
            href="/portfolio"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            View My Work
          </a>
          <a
            href="/contact"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Contact Me
          </a>
        </footer>
      </div>
    </Layout>
  );
}

export const Head = () => <Seo title="About" />;

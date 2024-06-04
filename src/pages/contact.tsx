import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

export default function Contact() {
  return (
    <Layout title="Contact">
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Me</h1>
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="mb-4">
              If you have any questions, feel free to reach out to me through
              email or phone. I'm always open to discussing new projects,
              creative ideas, or opportunities to be part of your visions.
            </p>
            <ul>
              <li className="mb-2">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:your-email@example.com"
                  className="text-blue-500"
                >
                  your-email@example.com
                </a>
              </li>
              <li className="mb-2">
                <strong>Phone:</strong> +1 234 567 890
              </li>
              <li className="mb-2">
                <strong>LinkedIn:</strong>{" "}
                <a
                  href="https://www.linkedin.com/in/yourprofile"
                  className="text-blue-500"
                >
                  yourprofile
                </a>
              </li>
              <li className="mb-2">
                <strong>GitHub:</strong>{" "}
                <a
                  href="https://github.com/yourusername"
                  className="text-blue-500"
                >
                  yourusername
                </a>
              </li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Send a Message</h2>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}


export const Head = () => <Seo title="Contact" />;
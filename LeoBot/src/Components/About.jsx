// src/About.js

import React, { useState } from 'react';
import logo from '../assets/lion.jfif'

const AccordionItem = ({ title, content, isOpen, toggle }) => (
  <div className="border-b">
    <button
      onClick={toggle}
      className="flex justify-between items-center w-full p-4 text-left bg-gray-200 hover:bg-gray-300"
    >
      <span>{title}</span>
      <span>{isOpen ? '-' : '+'}</span>
    </button>
    {isOpen && <div className="p-4">{content}</div>}
  </div>
);

const About = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sections = [
    { title: 'What is Leo-Chatbot ?', content: 'Leo chatbot is AI text generator, Its mean it take prompt by the user and generate result like chatgpt, meta ai.' },
    { title: 'Which api this chatbot use ?', content: 'This chatbot use the google gemini api to generate the result.' },
    { title: 'Why this made ?', content: 'This chatbot is only made for educational purpose. I made this only to improve my skill.' },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <div className="mb-8">
        <img src={logo} alt="Logo" className="h-16 rounded-full" />
      </div>
      <div className="w-full max-w-md bg-white rounded-lg shadow-md">
        {sections.map((section, index) => (
          <AccordionItem
            key={index}
            title={section.title}
            content={section.content}
            isOpen={openIndex === index}
            toggle={() => toggleAccordion(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default About;

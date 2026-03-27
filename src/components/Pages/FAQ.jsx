import React, { useState } from "react";
import { Link } from "react-router-dom";

// FAQ Data
const faqData = [
  {
    question: "What Shipping Methods Are Available?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde explicabo nam vel accusantium. Quasi voluptatibus excepturi fugit natus, quam officia cumque hic fuga impedit repellat, rem ratione ad distinctio aspernatur! Ipsam aperiam sunt dolor itaque maiores soluta illo at tempore adipisci necessitatibus id accusantium aut neque enim beatae ullam consequatur sapiente vero reprehenderit voluptatem, cum voluptatum odit? Cumque, vero odit.",
  },
  {
    question: "How Long Will it Take To Get My Package?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde explicabo nam vel accusantium. Quasi voluptatibus excepturi fugit natus, quam officia cumque hic fuga impedit repellat, rem ratione ad distinctio aspernatur! Ipsam aperiam sunt dolor itaque maiores soluta illo at tempore adipisci necessitatibus id accusantium aut neque enim beatae ullam consequatur sapiente vero reprehenderit voluptatem, cum voluptatum odit? Cumque, vero odit.",
  },
  {
    question: "How Do I Track My Order?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde explicabo nam vel accusantium. Quasi voluptatibus excepturi fugit natus, quam officia cumque hic fuga impedit repellat, rem ratione ad distinctio aspernatur! Ipsam aperiam sunt dolor itaque maiores soluta illo .",
  },
  {
    question: "Do I Need an Account To Place an Order?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde explicabo nam vel accusantium. Quasi voluptatibus excepturi fugit natus, quam officia cumque hic fuga impedit repellat, rem ratione ad distinctio aspernatur! Ipsam aperiam sunt dolor itaque maiores soluta illo .",
  },
  {
    question: "How Do I Place an Order?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde explicabo nam vel accusantium. Quasi voluptatibus excepturi fugit natus,",
  },
  {
    question: "How Should I Contact You if I Have Any Queries?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde explicabo nam vel accusantium. Quasi voluptatibus excepturi fugit natus,",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Breadcrumb */}
      <div className="w-full bg-yellow-100 py-4 px-[5%]">
        <div className="text-lg text-gray-600 flex justify-center item-center space-x-2">
          <Link to="/" className="hover:underline text-gray-700 font-medium">
            Home
          </Link>
          <span className="text-gray-500">&nbsp; / &nbsp;</span>
          <span className="text-yellow-700 font-semibold">FAQ</span>
        </div>
      </div>

      {/* Shipping Information Section */}
      <section className="w-full px-5 py-16 bg-white text-gray-800">
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-6xl font-extrabold mt-3 mb-2 text-gray-800 font-bricolage">
            Frequently Asked Questions
          </h1>
          <p className="text-sm text-gray-500">
            This Agreement was last modified 18th February 2025
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-semibold relative inline-block mb-10 after:content-[''] after:block after:w-24 after:h-[3px] after:bg-yellow-400 after:mt-1">
            Shipping Information
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {faqData.slice(0, 4).map((item, index) => (
              <div key={index} className="space-y-2">
                <h4 className="text-lg font-semibold text-gray-900">
                  {item.question}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="w-full px-[5%] py-16 bg-white text-gray-900">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-6xl font-extrabold mt-3 mb-2 text-gray-800 font-bricolage">
            FAQ Second Version
          </h1>
          <p className="text-sm text-gray-500">
            This Agreement was last modified on 18th February 2025
          </p>
        </div>

        <div className="mx-auto space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border border-gray-200 rounded-xl shadow-md overflow-hidden transition-all duration-300 ${isOpen ? "bg-yellow-50" : "bg-white"}`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none group transition duration-300"
                >
                  <h4
                    className={`text-lg font-medium transition-colors duration-300 ${isOpen ? "text-yellow-600" : "text-gray-800"} group-hover:text-yellow-600`}
                  >
                    {faq.question}
                  </h4>
                  <i
                    className={`ri-arrow-down-s-line text-2xl transition-transform duration-300 ${isOpen ? "rotate-180 text-yellow-600" : "text-gray-400"}`}
                  ></i>
                </button>

                <div
                  className={`px-6 bg-white overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-40 py-3 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default FAQ;

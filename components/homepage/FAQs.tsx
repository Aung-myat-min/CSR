"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I update my billing information?",
      answer:
        'To update your billing information, go to the settings page under "Billing" section.',
    },
    {
      question: "How can I contact customer support?",
      answer:
        'To contact customer support, look for a "Contact us" or "Help" button on the website.',
    },
    {
      question: "How do I update my profile information?",
      answer:
        "Navigate to the profile settings page to update your personal information.",
    },
    {
      question: "How do I find my purchase history?",
      answer:
        'Go to the "Order History" section in your account settings to view past purchases.',
    },
  ];

  return (
    <section className="py-24 ">
      <div className="mx-auto w-11/12">
        <div className="mb-16">
          <h6 className="text-lg text-indigo-600 font-medium text-center mb-2">
            FAQs
          </h6>
          <h2 className="text-4xl font-manrope text-center font-bold text-gray-900 dark:text-white leading-[3.25rem]">
            Frequently asked questions
          </h2>
        </div>

        <div className="accordion-group">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`accordion py-8 px-6 border-b border-solid transition-all duration-500 ease-linear
                border-gray-200 dark:border-neutral-700
                hover:bg-indigo-50 dark:hover:bg-neutral-800
                ${
                  activeIndex === index
                    ? "bg-indigo-50 dark:bg-neutral-800"
                    : ""
                }`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="accordion-toggle group inline-flex items-center justify-between leading-8 w-full transition duration-500 text-left text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400"
                aria-controls={`collapse-${index}`}
              >
                <h5>{faq.question}</h5>
                <svg
                  className={`text-gray-500 dark:text-gray-400 transition duration-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 ${
                    activeIndex === index
                      ? "rotate-180 text-indigo-600 dark:text-indigo-400"
                      : ""
                  }`}
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    id={`collapse-${index}`}
                    className="accordion-content w-full px-0 overflow-hidden"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <p className="text-base text-gray-900 dark:text-gray-300 leading-6">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

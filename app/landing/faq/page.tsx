"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";

const faqs = [
  {
    question: "What is your return policy?",
    answer:
      "We accept returns within 30 days of purchase. Items must be unused and in original packaging.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Shipping typically takes 3–7 business days within the continental US.",
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes! We ship to most countries worldwide. Rates and times vary.",
  },
  {
    question: "Is your packaging eco-friendly?",
    answer:
      "All of our packaging is recyclable and made from post-consumer materials.",
  },
  {
    question: "How can I track my order?",
    answer:
      "After your order ships, you will receive a tracking number via email.",
  },
  {
    question: "Can I change my order after placing it?",
    answer: "You can request changes within 24 hours of placing your order.",
  },
  {
    question: "Do you offer discounts for bulk orders?",
    answer: "Yes! Contact our sales team for wholesale pricing options.",
  },
  {
    question: "Are your products cruelty-free?",
    answer:
      "Absolutely. We never test on animals, and all our products are vegan.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept Visa, MasterCard, Amex, PayPal, and Apple Pay.",
  },
  {
    question: "How do I contact customer support?",
    answer:
      "You can reach us via email at support@example.com or through live chat.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="w-full px-4 py-10 bg-gray-50">
      <h2 className="text-2xl font-bold mb-6 text-center">FAQ</h2>
      <div className="space-y-4 m-auto max-w-xl w-full">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-md overflow-hidden"
          >
            <button
              onClick={() => toggle(index)}
              className="cursor-pointer w-full text-sm flex justify-between items-center text-left px-4 py-3 hover:bg-gray-100 transition"
            >
              <span className={clsx(openIndex === index && "opacity-40")}>
                {faq.question}
              </span>

              <ChevronDown
                className={clsx(
                  "h-5 w-5 transform transition-transform duration-300",
                  openIndex === index && "rotate-180"
                )}
              />
            </button>
            <div
              className={clsx(
                "px-4 pt-0 transition-all duration-300 ease-in-out overflow-hidden",
                openIndex === index
                  ? "max-h-[500px] py-2 opacity-100"
                  : "max-h-0 opacity-0"
              )}
            >
              <p className="text-sm text-gray-700">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

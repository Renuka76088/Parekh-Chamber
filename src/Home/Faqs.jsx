import React, { useState } from "react";
import { Layers, ChevronDown } from "lucide-react";

const FAQSection = () => {

  const [active, setActive] = useState(0);

  const faqs = [
    {
      title: "The curse of Fabric Products & Accessories !!",
      content:
        "We have built a strong alliance with industry tech giants to build efficient data analysis and processing."
    },
    {
      title: "Top Rayon Fabric Materials are made of ?",
      content:
        "We have recently launched the ability to shop fabrics online and shop poles & tracks online from our website."
    },
    {
      title: "The Global Fabrics Distributor must be professional !!",
      content:
        "Choose from many fabrics and design your product. Create and print only the fabric you need."
    }
  ];

  return (

    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">

        {/* LEFT SIDE */}

        <div>

          {/* IMAGE */}

          <img
            src="https://fabiflex.preyantechnosys.com/wp-content/uploads/2022/05/Untitled-33-1.jpg"
            className="w-full mb-8 shadow-lg"
          />

          {/* ICON TEXT */}

          <div className="flex items-start gap-4 mb-10">

            <div className="bg-red-500 text-white p-3">
              <Layers size={26} />
            </div>

            <h3 className="text-xl font-semibold leading-snug">
              We Bringing A Revolutionary Change In The Textile Industry Product
            </h3>

          </div>

          {/* 80% BLOCK */}

          <div className="flex items-start gap-6 mb-8">

            <h2 className="text-5xl font-bold text-red-500">
              80<span className="text-2xl align-top">%</span>
            </h2>

            <p className="text-gray-600 leading-relaxed">
              We are continually looking to improve all aspects of the
              manufacturing process from our entire cycle manufacturing
              to packaging and shipping.
            </p>

          </div>

          {/* BUTTON */}

          <button className="border border-red-500 text-red-500 px-6 py-3 font-semibold hover:bg-red-500 hover:text-white transition">

            VIEW MORE DETAILS

          </button>

        </div>

        {/* RIGHT SIDE */}

        <div>

          <p className="text-red-500 uppercase text-sm tracking-widest mb-2">
            Get informed
          </p>

          <h2 className="text-4xl font-bold mb-4">
            Popular Questions
          </h2>

          <p className="text-gray-600 mb-10">
            If you work in the fashion industry, chances are you work with
            textiles almost constantly. Whether you're shopping for or
            printing on fabrics.
          </p>

          {/* ACCORDION */}

          <div className="space-y-4">

            {faqs.map((faq, index) => (

              <div
                key={index}
                className="border border-gray-200"
              >

                <button
                  onClick={() => setActive(active === index ? null : index)}
                  className="w-full flex justify-between items-center px-6 py-4 text-left font-medium hover:bg-gray-50"
                >

                  {faq.title}

                  <ChevronDown
                    className={`transition ${
                      active === index ? "rotate-180" : ""
                    }`}
                  />

                </button>

                {active === index && (

                  <div className="px-6 pb-5 text-gray-600 leading-relaxed">

                    {faq.content}

                  </div>

                )}

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>

  );

};

export default FAQSection;

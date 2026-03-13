import React, { useEffect, useState } from "react";
import { Award } from "lucide-react";

const SafetySection = () => {

  const [progress, setProgress] = useState({
    lift: 0,
    design: 0,
    stitch: 0
  });

  const [count, setCount] = useState(0);

  useEffect(() => {

    setTimeout(() => {
      setProgress({
        lift: 95,
        design: 75,
        stitch: 55
      });
    }, 500);

    let start = 0;

    const counter = setInterval(() => {
      start += 10;

      if (start >= 580) {
        start = 580;
        clearInterval(counter);
      }

      setCount(start);

    }, 20);

    return () => clearInterval(counter);

  }, []);

  const Progress = ({ title, value }) => (

    <div className="mb-6">

      <div className="flex justify-between text-sm mb-2">
        <span>{title}</span>
        <span className="text-red-400">{value}%</span>
      </div>

      <div className="w-full h-[5px] bg-gray-600 overflow-hidden">

        <div
          className="h-full bg-red-500 transition-all duration-[1600ms]"
          style={{ width: `${value}%` }}
        />

      </div>

    </div>

  );

  return (

    <section className="relative py-24 text-white overflow-hidden">

      {/* SLIDING BACKGROUND IMAGE */}

      <div
        className="absolute inset-0 bg-cover bg-center animate-[bgmove_20s_linear_infinite]"
        style={{
          backgroundImage:
            "url(https://media.istockphoto.com/id/1792623909/photo/in-a-rotating-machinery-and-equipment-production-company.jpg?s=612x612&w=0&k=20&c=O4f889DT0PiufurnteJ6EdtOjAMCI4w-U9bbx4nTU5I=)"
        }}
      />

      {/* BLUE OVERLAY */}

      <div className="absolute inset-0 bg-[#0b2a44]/80"></div>

      {/* CONTENT */}

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-16 items-center">

        {/* LEFT TEXT */}

        <div>

          <p className="text-red-400 tracking-widest text-sm mb-3">
            SPECIAL SERVICES
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            WE TAKE SAFETY <br /> MEASUREMENTS
          </h2>

          <p className="text-gray-300">
            It can be very well produced using fiber, yarn,
            texture and dispatched safely.
          </p>

        </div>

        {/* PROGRESS */}

        <div>

          <Progress title="Weight Lifting" value={progress.lift} />
          <Progress title="Design" value={progress.design} />
          <Progress title="Stitching" value={progress.stitch} />

        </div>

        {/* RIGHT CARD */}

        <div>

          <div className="bg-red-600 px-12 py-8 shadow-xl flex items-center gap-6 hover:scale-105 transition">

            <div className="bg-white/20 p-4">
              <Award size={30} />
            </div>

            <div>
              <h3 className="text-4xl font-bold">{count}+</h3>
              <p className="text-sm">Happy Customer</p>
            </div>

          </div>

          <p className="mt-6 text-sm text-gray-300">
            The Largest Exporter of
            <span className="text-red-500 ml-2 font-semibold">
              PAREKH CHAMBER
            </span>
          </p>

        </div>

      </div>

    </section>
  );
};

export default SafetySection;

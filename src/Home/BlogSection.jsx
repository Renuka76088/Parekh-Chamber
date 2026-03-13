import React from "react";

const BlogSection = () => {

  const leftBlogs = [
    {
      img: "https://fabiflex.preyantechnosys.com/wp-content/uploads/2022/05/blog1232.png",
      date: "25 May, 2022",
      title: "Can textiles lead during the pandemic?"
    },
    {
      img: "https://fabiflex.preyantechnosys.com/wp-content/uploads/2022/05/09.jpg",
      date: "18 May, 2022",
      title: "The Story of a Silk Lends Cotton like Comfort Rayon"
    },
    {
      img: "https://fabiflex.preyantechnosys.com/wp-content/uploads/2022/05/08.jpg",
      date: "10 May, 2022",
      title: "Contactless Payments Time Come"
    }
  ];

  const rightBlogs = [
    {
      img: "https://fabiflex.preyantechnosys.com/wp-content/uploads/2022/05/05.jpg",
      category: "Traditional",
      title: "Textilegence Magazine & Digital Platform",
      author: "John Doe",
      date: "9 June, 2022"
    },
    {
      img: "https://fabiflex.preyantechnosys.com/wp-content/uploads/2022/05/Layer-24.png",
      category: "Industry Insight",
      title: "One made solution for textiles fabrics Avalaible!",
      author: "John Doe",
      date: "30 May, 2022"
    }
  ];

  return (

    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-10">

        {/* LEFT BLOG LIST */}

        <div className="bg-gray-100 p-8 space-y-8">

          {leftBlogs.map((blog, index) => (

            <div key={index} className="flex gap-4 group">

              <img
                src={blog.img}
                className="w-24 h-24 object-cover"
              />

              <div>

                <p className="text-sm text-gray-500 mb-1">
                  {blog.date}
                </p>

                <h4 className="font-semibold text-lg leading-snug group-hover:text-red-500 cursor-pointer transition">
                  {blog.title}
                </h4>

              </div>

            </div>

          ))}

        </div>

        {/* RIGHT BLOG CARDS */}

        <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">

          {rightBlogs.map((blog, index) => (

            <div
              key={index}
              className="relative h-[320px] overflow-hidden group"
            >

              {/* IMAGE */}

              <img
                src={blog.img}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />

              {/* OVERLAY */}

              <div className="absolute inset-0 bg-black/40"></div>

              {/* CONTENT */}

              <div className="absolute bottom-0 p-6 text-white">

                <span className="bg-red-500 text-xs px-3 py-1 mb-3 inline-block">
                  {blog.category}
                </span>

                <h3 className="text-xl font-semibold mb-4 leading-snug">
                  {blog.title}
                </h3>

                <p className="text-sm opacity-90">
                  By {blog.author} • {blog.date}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

};

export default BlogSection;

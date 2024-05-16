import React, { useEffect, useState } from "react";
import heroimg from "../../assets/Images/hero.png";
import { FaLinkedin } from "react-icons/fa";
import aboutusImg from "../../assets/Images/jason-goodman-vbxyFxlgpjM-unsplash 1.png";
import "../../Styles/home.css";
import appdeveolpment from "../../assets/Images/app-development.png";
import growth from "../../assets/Images/growth.png";
import featuresImg from "../../assets/Images/features 1 (1).png";
import ProjectList from "../../components/Ui/ProjectList";
import ProjectsData from "../../assets/Data/data";
import TestimonialCard from "../../components/Ui/TestimonialCard";

const Home = () => {
  console.log(ProjectsData);

  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProjects = ProjectsData.filter((project) => {
    if (selectedCategory === "All") {
      return true;
    } else {
      return project.category === selectedCategory;
    }
  });

  return (
    <div>
      <section className="bg-home mb-10">
        <div className="flex items-center justify-between p-36">
          <div>
            <img className="w-96" src={heroimg} alt="" />
          </div>

          <div>
            <h1 className="text-4xl font-bold text-white mb-6">
              delivering superior <br />
              <span className="text-herobtn">IT Solutions</span>
            </h1>

            <div className="flex text-white text-2xl gap-6">
              <FaLinkedin />
              <FaLinkedin />
              <FaLinkedin />
            </div>
          </div>
        </div>
      </section>

      {/* about-us */}

      <section className="mb-10">
        <div className="container mx-auto">
          <div className="text-center text-black mb-10">
            <h1 className="text-4xl font-bold">About us</h1>
          </div>
          <div className="flex flex-wrap items-center">
            <div className="w-1/2">
              <img
                className=" rounded-lg h-96 "
                src={aboutusImg}
                alt="About Us"
              />
            </div>

            <div className="w-1/2">
              <p>
                Webartistry, a dynamic subsidiary of Marbu Technologies, is a
                leading player in the realm of web and mobile application
                development. Nestled in the vibrant city of Koratty and in
                Chittillapilly, Thrissur, with a team of highly skilled
                professionals, we have successfully delivered a plethora of
                projects that have exceeded client expectations. We extend a
                valuable opportunity to aspiring professionals to kickstart
                their careers by benefiting from the extensive expertise of our
                seasoned developers, who bring over a decade of industry
                experience. Join us for transformative training that opens doors
                to a successful and fulfilling career journey.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* our services */}

      <section className="mb-10">
        <div className="container mx-auto">
          <div className="text-center text-black mb-10">
            <h1 className="text-4xl font-bold">Our services</h1>
          </div>

          <div>
            <div className="flex justify-between mb-10">
              <div className=" items-center justify-center shadow-2xl shadow-violet-600 boxShadow p-9 rounded-lg w-56 h-auto">
                <div className="text-center">
                  <img
                    className="w-32 mx-auto mb-5"
                    src={appdeveolpment}
                    alt="Web Development"
                  />
                  <h2 className="text-black font-bold">Web Development</h2>
                </div>
              </div>

              <div className=" items-center justify-center shadow-2xl shadow-violet-600 boxShadow p-9 rounded-lg w-56 h-auto">
                <div className="text-center">
                  <img
                    className="w-32 mx-auto mb-5"
                    src={appdeveolpment}
                    alt="Web Development"
                  />
                  <h2 className="text-black font-bold">App Development</h2>
                </div>
              </div>

              <div className=" items-center justify-center shadow-2xl shadow-violet-600 boxShadow p-9 rounded-lg w-56 h-auto">
                <div className="text-center">
                  <img
                    className="w-32 mx-auto mb-5"
                    src={appdeveolpment}
                    alt="Web Development"
                  />
                  <h2 className="text-black font-bold">Web Development</h2>
                </div>
              </div>

              <div className=" items-center justify-center shadow-2xl shadow-violet-600 boxShadow p-9 rounded-lg w-56 h-auto">
                <div className="text-center">
                  <img
                    className="w-32 mx-auto mb-5"
                    src={appdeveolpment}
                    alt="Web Development"
                  />
                  <h2 className="text-black font-bold">
                    Web hosting and cloud service
                  </h2>
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <div className=" items-center justify-center shadow-2xl shadow-violet-600 boxShadow p-9 rounded-lg w-56 h-auto">
                <div className="text-center">
                  <img
                    className="w-32 mx-auto mb-5"
                    src={appdeveolpment}
                    alt="Web Development"
                  />
                  <h2 className="text-black font-bold">Web Development</h2>
                </div>
              </div>

              <div className=" items-center justify-center shadow-2xl shadow-violet-600 boxShadow p-9 rounded-lg w-56 h-auto">
                <div className="text-center">
                  <img
                    className="w-32 mx-auto mb-5"
                    src={appdeveolpment}
                    alt="Web Development"
                  />
                  <h2 className="text-black font-bold">App Development</h2>
                </div>
              </div>

              <div className=" items-center justify-center shadow-2xl shadow-violet-600 boxShadow p-9 rounded-lg w-56 h-auto">
                <div className="text-center">
                  <img
                    className="w-32 mx-auto mb-5"
                    src={appdeveolpment}
                    alt="Web Development"
                  />
                  <h2 className="text-black font-bold">Web Development</h2>
                </div>
              </div>

              <div className=" items-center justify-center shadow-2xl shadow-violet-600 boxShadow p-9 rounded-lg w-56 h-auto">
                <div className="text-center">
                  <img
                    className="w-32 mx-auto mb-5"
                    src={appdeveolpment}
                    alt="Web Development"
                  />
                  <h2 className="text-black font-bold">
                    Web hosting and cloud service
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* whuchoose us  */}

      <section className="mb-10">
        <div className="container mx-auto">
          <div className="text-center text-black mb-10">
            <h1 className="text-4xl font-bold">Why choose us</h1>
          </div>

          <div className="flex justify-between">
            <div>
              <div className="mb-7">
                <div className="flex items-center gap-5 mb-4">
                  <h3 className="text-xl font-bold">Experience</h3>
                  <img className="w-7" src={growth} alt="" />
                </div>
                <div className="w-56">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium iusto, ipsam dolores officia facilis corporis
                    autem inci
                  </p>
                </div>
              </div>

              <div className="mb-7">
                <div className="flex items-center gap-5 mb-4">
                  <h3 className="text-xl font-bold">Experience</h3>
                  <img className="w-7" src={growth} alt="" />
                </div>
                <div className="w-56">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium iusto, ipsam dolores officia facilis corporis
                    autem inci
                  </p>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-5 mb-4">
                  <h3 className="text-xl font-bold">Experience</h3>
                  <img className="w-7" src={growth} alt="" />
                </div>
                <div className="w-56">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium iusto, ipsam dolores officia facilis corporis
                    autem inci
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div>
                <img src={featuresImg} alt="" />
              </div>
            </div>

            <div>
              <div className="mb-7">
                <div className="flex items-center gap-5 mb-4">
                  <h3 className="text-xl font-bold">Experience</h3>
                  <img className="w-7" src={growth} alt="" />
                </div>
                <div className="w-56">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium iusto, ipsam dolores officia facilis corporis
                    autem inci
                  </p>
                </div>
              </div>

              <div className="mb-7">
                <div className="flex items-center gap-5 mb-4">
                  <h3 className="text-xl font-bold">Experience</h3>
                  <img className="w-7" src={growth} alt="" />
                </div>
                <div className="w-56">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium iusto, ipsam dolores officia facilis corporis
                    autem inci
                  </p>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-5 mb-4">
                  <h3 className="text-xl font-bold">Experience</h3>
                  <img className="w-7" src={growth} alt="" />
                </div>
                <div className="w-56">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium iusto, ipsam dolores officia facilis corporis
                    autem inci
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* portfolio */}

      <section className="mb-10">
        <div className="container mx-auto">
          <div className="text-center text-black mb-10">
            <h1 className="text-4xl font-bold">Our Portfolio</h1>
          </div>

          <div className="container">
            <div className="flex justify-center gap-40 mb-10">
              <button
                className="bg-herobtn hover:bg-blue-300 text-white font-bold py-2 px-4 rounded-lg"
                onClick={() => handleCategoryClick("All")}
              >
                All
              </button>

              <button
                className="bg-herobtn hover:bg-blue-300 text-white font-bold py-2 px-4 rounded-lg"
                onClick={() => handleCategoryClick("Website")}
              >
                Website
              </button>
              <button
                className="bg-herobtn hover:bg-blue-300 text-white font-bold py-2 px-4 rounded-lg"
                onClick={() => handleCategoryClick("App")}
              >
                Mobile App
              </button>
              <button
                className="bg-herobtn hover:bg-blue-300 text-white font-bold py-2 px-4 rounded-lg"
                onClick={() => handleCategoryClick("Other")}
              >
                Other
              </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 ">
              {filteredProjects.length === 0 ? (
                <h1 className="text-center">No Projects Found</h1>
              ) : (
                <ProjectList projects={filteredProjects} />
              )}
            </div>
          </div>
        </div>
      </section>
      {/* testimotionel */}
      <section className="mb-10">
        <div className="container mx-auto">
          <div className="text-center text-black mb-10">
            <h1 className="text-4xl font-bold">Testimonials</h1>
          </div>
          <div className="">
            <TestimonialCard />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

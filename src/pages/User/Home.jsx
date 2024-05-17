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
import { motion } from "framer-motion";
import reactIcon from "../../assets/Images/reactimg.png";

import profile from "../../assets/Images/testimonial-4 1.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
          <div className="hidden  flex-1 lg:flex w-1/2 ">
            <img className="w-96" src={heroimg} alt="" />
          </div>

          <div>
            <h1 className="text-4xl font-bold text-white mb-6 ">
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

      {/* Technolgies */}

      <section className="mb-10">
        <div className="container mx-auto">
          <div className="text-center text-black mb-8">
            <h1 className="text-4xl font-bold">Technologies </h1>
          </div>
          <div className="slider">
            <div className="slide-track">
              <div className="slide">
                <motion.img
                  whileHover={{ scale: 1.3 }}
                  src={reactIcon}
                  alt=""
                />
              </div>

              <div className="slide">
                <motion.img
                  whileHover={{ scale: 1.3 }}
                  src={reactIcon}
                  alt=""
                />
              </div>

              <div className="slide">
                <motion.img
                  whileHover={{ scale: 1.3 }}
                  src={reactIcon}
                  alt=""
                />
              </div>

              <div className="slide">
                <motion.img
                  whileHover={{ scale: 1.3 }}
                  src={reactIcon}
                  alt=""
                />
              </div>

              <div className="slide">
                <motion.img
                  whileHover={{ scale: 1.3 }}
                  src={reactIcon}
                  alt=""
                />
              </div>

              <div className="slide">
                <motion.img
                  whileHover={{ scale: 1.3 }}
                  src={reactIcon}
                  alt=""
                />
              </div>

              <div className="slide">
                <motion.img
                  whileHover={{ scale: 1.3 }}
                  src={reactIcon}
                  alt=""
                />
              </div>

              <div className="slide">
                <motion.img
                  whileHover={{ scale: 1.3 }}
                  src={reactIcon}
                  alt=""
                />
              </div>

              <div className="slide">
                <motion.img
                  whileHover={{ scale: 1.3 }}
                  src={reactIcon}
                  alt=""
                />
              </div>

              <div className="slide">
                <motion.img
                  whileHover={{ scale: 1.3 }}
                  src={reactIcon}
                  alt=""
                />
              </div>

              <div className="slide">
                <motion.img
                  whileHover={{ scale: 1.3 }}
                  src={reactIcon}
                  alt=""
                />
              </div>

              <div className="slide">
                <motion.img
                  whileHover={{ scale: 1.3 }}
                  src={reactIcon}
                  alt=""
                />
              </div>
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

          <div>
            <TestimonialCard />
          </div>
        </div>
      </section>

      {/* contact section */}
      <section className="mb-10">
        <div className="container mx-auto">
          <div className="text-center text-black mb-10">
            <h1 className="text-4xl font-bold">Contact Us 😃 </h1>
          </div>

          <div>
            <div class="my-6">
              <div class="grid sm:grid-cols-2 items-center gap-16 p-8 mx-auto max-w-4xl bg-white shadow-[0_2px_18px_-3px_rgba(6,81,237,0.3)] rounded-md text-[#333] ">
                <div>
                  <h1 class="text-3xl font-extrabold">Let's Talk 📲 </h1>
                  <p class="text-sm text-gray-400 mt-3">
                    Have some big idea or brand to develop and need help? Then
                    reach out we'd love to hear about your project and provide
                    help.
                  </p>
                  <div class="mt-12">
                    <h2 class="text-lg font-extrabold">Email</h2>
                    <ul class="mt-3">
                      <li class="flex items-center">
                        <div class="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20px"
                            height="20px"
                            fill="#007bff"
                            viewBox="0 0 479.058 479.058"
                          >
                            <path
                              d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                              data-original="#000000"
                            />
                          </svg>
                        </div>
                        <a
                          href="javascript:void(0)"
                          class="text-[#007bff] text-sm ml-3"
                        >
                          <small class="block">Mail</small>
                          <strong>info@example.com</strong>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="mt-12">
                    <h2 class="text-lg font-extrabold">Socials</h2>
                    <ul class="flex mt-3 space-x-4">
                      <li class="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                        <a href="javascript:void(0)">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20px"
                            height="20px"
                            fill="#007bff"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M6.812 13.937H9.33v9.312c0 .414.335.75.75.75l4.007.001a.75.75 0 0 0 .75-.75v-9.312h2.387a.75.75 0 0 0 .744-.657l.498-4a.75.75 0 0 0-.744-.843h-2.885c.113-2.471-.435-3.202 1.172-3.202 1.088-.13 2.804.421 2.804-.75V.909a.75.75 0 0 0-.648-.743A26.926 26.926 0 0 0 15.071 0c-7.01 0-5.567 7.772-5.74 8.437H6.812a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75zm.75-3.999h2.518a.75.75 0 0 0 .75-.75V6.037c0-2.883 1.545-4.536 4.24-4.536.878 0 1.686.043 2.242.087v2.149c-.402.205-3.976-.884-3.976 2.697v2.755c0 .414.336.75.75.75h2.786l-.312 2.5h-2.474a.75.75 0 0 0-.75.75V22.5h-2.505v-9.312a.75.75 0 0 0-.75-.75H7.562z"
                              data-original="#000000"
                            />
                          </svg>
                        </a>
                      </li>
                      <li class="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                        <a href="javascript:void(0)">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20px"
                            height="20px"
                            fill="#007bff"
                            viewBox="0 0 511 512"
                          >
                            <path
                              d="M111.898 160.664H15.5c-8.285 0-15 6.719-15 15V497c0 8.285 6.715 15 15 15h96.398c8.286 0 15-6.715 15-15V175.664c0-8.281-6.714-15-15-15zM96.898 482H30.5V190.664h66.398zM63.703 0C28.852 0 .5 28.352.5 63.195c0 34.852 28.352 63.2 63.203 63.2 34.848 0 63.195-28.352 63.195-63.2C126.898 28.352 98.551 0 63.703 0zm0 96.395c-18.308 0-33.203-14.891-33.203-33.2C30.5 44.891 45.395 30 63.703 30c18.305 0 33.195 14.89 33.195 33.195 0 18.309-14.89 33.2-33.195 33.2zm289.207 62.148c-22.8 0-45.273 5.496-65.398 15.777-.684-7.652-7.11-13.656-14.942-13.656h-96.406c-8.281 0-15 6.719-15 15V497c0 8.285 6.719 15 15 15h96.406c8.285 0 15-6.715 15-15V320.266c0-22.735 18.5-41.23 41.235-41.23 22.734 0 41.226 18.495 41.226 41.23V497c0 8.285 6.719 15 15 15h96.403c8.285 0 15-6.715 15-15V302.066c0-79.14-64.383-143.523-143.524-143.523zM466.434 482h-66.399V320.266c0-39.278-31.953-71.23-71.226-71.23-39.282 0-71.239 31.952-71.239 71.23V482h-66.402V190.664h66.402v11.082c0 5.77 3.309 11.027 8.512 13.524a15.01 15.01 0 0 0 15.875-1.82c20.313-16.294 44.852-24.907 70.953-24.907 62.598 0 113.524 50.926 113.524 113.523zm0 0"
                              data-original="#000000"
                            />
                          </svg>
                        </a>
                      </li>
                      <li class="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                        <a href="javascript:void(0)">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20px"
                            height="20px"
                            fill="#007bff"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 9.3a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Zm0-1.8a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm5.85-.225a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0ZM12 4.8c-2.227 0-2.59.006-3.626.052-.706.034-1.18.128-1.618.299a2.59 2.59 0 0 0-.972.633 2.601 2.601 0 0 0-.634.972c-.17.44-.265.913-.298 1.618C4.805 9.367 4.8 9.714 4.8 12c0 2.227.006 2.59.052 3.626.034.705.128 1.18.298 1.617.153.392.333.674.632.972.303.303.585.484.972.633.445.172.918.267 1.62.3.993.047 1.34.052 3.626.052 2.227 0 2.59-.006 3.626-.052.704-.034 1.178-.128 1.617-.298.39-.152.674-.333.972-.632.304-.303.485-.585.634-.972.171-.444.266-.918.299-1.62.047-.993.052-1.34.052-3.626 0-2.227-.006-2.59-.052-3.626-.034-.704-.128-1.18-.299-1.618a2.619 2.619 0 0 0-.633-.972 2.595 2.595 0 0 0-.972-.634c-.44-.17-.914-.265-1.618-.298-.993-.047-1.34-.052-3.626-.052ZM12 3c2.445 0 2.75.009 3.71.054.958.045 1.61.195 2.185.419A4.388 4.388 0 0 1 19.49 4.51c.457.45.812.994 1.038 1.595.222.573.373 1.227.418 2.185.042.96.054 1.265.054 3.71 0 2.445-.009 2.75-.054 3.71-.045.958-.196 1.61-.419 2.185a4.395 4.395 0 0 1-1.037 1.595 4.44 4.44 0 0 1-1.595 1.038c-.573.222-1.227.373-2.185.418-.96.042-1.265.054-3.71.054-2.445 0-2.75-.009-3.71-.054-.958-.045-1.61-.196-2.185-.419A4.402 4.402 0 0 1 4.51 19.49a4.414 4.414 0 0 1-1.037-1.595c-.224-.573-.374-1.227-.419-2.185C3.012 14.75 3 14.445 3 12c0-2.445.009-2.75.054-3.71s.195-1.61.419-2.185A4.392 4.392 0 0 1 4.51 4.51c.45-.458.994-.812 1.595-1.037.574-.224 1.226-.374 2.185-.419C9.25 3.012 9.555 3 12 3Z"></path>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <form class="ml-auo space-y-4">
                  <input
                    type="text"
                    placeholder="Name"
                    class="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    class="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    class="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
                  />
                  <textarea
                    placeholder="Message"
                    rows="6"
                    class="w-full rounded-md px-4 border text-sm pt-2.5 outline-[#007bff]"
                  ></textarea>
                  <button
                    type="button"
                    class="text-white bg-[#007bff] hover:bg-blue-600 font-semibold rounded-md text-sm px-4 py-2.5 w-full"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

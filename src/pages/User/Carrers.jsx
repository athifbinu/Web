import React from "react";
import { FaChair } from "react-icons/fa";

const Carrers = () => {
  return (
    <div>
      <section>
        <div className="flex justify-center m-20 gap-12">
          <div className="m-32">
            <div className="font-semibold text-6xl mb-11">
              <h1 className=" text-black mb-3">Join Our Team @ </h1>
              <span className="text-orange-500 ">Omnifood</span>
            </div>

            <div>
              <p className="font-extrabold text-gray-500 text-xl mb-16">
                asflvjnojvn sfdovnsfovnfov{" "}
              </p>
              <button class=" p-1 rounded-full from-rose-400 via-fuchsia-500 to-indigo-500 bg-gradient-to-r">
                <span class="block text-black px-4 py-2 font-extrabold text-xl rounded-full bg-white hover:bg-transparent hover:text-white transition">
                  View Openings
                </span>
              </button>
            </div>
          </div>

          <div>
            <img src={hero} alt="" />
          </div>
        </div>
      </section>

      {/* perk-section */}
      <div className="container">
        <div className="flex container">
          <div className="flex gap-28">
            <div>
              <div className="bg-orange-200 border w-72 rounded-md mb-12">
                <div className="m-10">
                  <div className="mb-8">
                    <FaChair size={50} />
                  </div>

                  <div>
                    <h2 className="text-black font-extrabold text-xl mb-3">
                      Large Beautiful office
                    </h2>
                    <p className="text-black font-semibold text-lg">
                      hello wolcome to
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-orange-200 border w-72 rounded-md mb-12">
                <div className="m-10">
                  <div className="mb-8">
                    <FaChair size={50} />
                  </div>

                  <div>
                    <h2 className="text-black font-extrabold text-xl mb-3">
                      Large Beautiful office
                    </h2>
                    <p className="text-black font-semibold text-lg">
                      hello wolcome to
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-orange-200 border w-72 rounded-md">
                <div className="m-10">
                  <div className="mb-8">
                    <FaChair size={50} />
                  </div>

                  <div>
                    <h2 className="text-black font-extrabold text-xl mb-3">
                      Large Beautiful office
                    </h2>
                    <p className="text-black font-semibold text-lg">
                      hello wolcome to
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <div className="bg-orange-200 border w-72 rounded-md mb-12">
                <div className="m-10">
                  <div className="mb-8">
                    <FaChair size={50} />
                  </div>

                  <div>
                    <h2 className="text-black font-extrabold text-xl mb-3">
                      Large Beautiful office
                    </h2>
                    <p className="text-black font-semibold text-lg">
                      hello wolcome to
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-orange-200 border w-72 rounded-md mb-12">
                <div className="m-10">
                  <div className="mb-8">
                    <FaChair size={50} />
                  </div>

                  <div>
                    <h2 className="text-black font-extrabold text-xl mb-3">
                      Large Beautiful office
                    </h2>
                    <p className="text-black font-semibold text-lg">
                      hello wolcome to
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-orange-200 border w-72 rounded-md">
                <div className="m-10">
                  <div className="mb-8">
                    <FaChair size={50} />
                  </div>

                  <div>
                    <h2 className="text-black font-extrabold text-xl mb-3">
                      Large Beautiful office
                    </h2>
                    <p className="text-black font-semibold text-lg">
                      hello wolcome to
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-72">
            <div className="font-semibold text-5xl  flex gap-4 mb-11">
              <h1 className=" text-black">Your Life At</h1>
              <span className="text-orange-500 ">Omnifood</span>
            </div>
            <div>
              <p className="font-semibold text-lg mb-10  leading-8">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Numquam quia non laborum saepe mollitia enim esse nemo
                molestiae, vitae, consectetur ab provident Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Pariatur placeat, cumque eius
                reiciendis doloremque quibusdam quo qui ad maiores
                necessitatibus, delectus, iusto architecto! Neque itaque
                pariatur inventore officia commodi distinctio.
              </p>

              <button class=" p-1 rounded-full from-rose-400 via-fuchsia-500 to-indigo-500 bg-gradient-to-r">
                <span class="block text-black px-4 py-2 font-extrabold text-xl rounded-full bg-white hover:bg-transparent hover:text-white transition">
                  Learn More
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="container mb-20">
          <div
            className="px-[30px] py-6 max-w-[1170px]
      mx-auto flex flex-col lg:flex-row justify-between
      gap-4 lg:gap-x-3 relative lg:top-4 lg:shadow-1 bg-white 
      lg:bg-transparent lg:backdrop-blur rounded-lg mb-20"
          >
            <div>
              <input
                type="text"
                onChange={handleSearch}
                placeholder="Search jobs"
                className="p-2.5 w-full text-gray-500
          text-2xl
          bg-white border
          rounded-md shadow-sm outline-none appearance-none
          focus:border-orange-400
          font-bold"
              />
            </div>

            <div className="relative w-full lg:max-w-sm">
              <select
                className="w-full p-2.5 text-gray-500
          text-2xl
          bg-white border
          rounded-md shadow-sm outline-none appearance-none
          focus:border-orange-400"
              >
                <option>Filter By Category</option>
                <option className="text-2xl" value="Information technology">
                  Information technology
                </option>
                <option className="text-2xl" value="Business management">
                  Business management
                </option>

                <option className="text-2xl" value="Delivery">
                  Delivery
                </option>
                <option className="text-2xl" value="Cooking">
                  Cooking
                </option>
                <option className="text-2xl" value="HR">
                  HR
                </option>
                <option className="text-2xl" value="Finance">
                  Finance
                </option>
                <option className="text-2xl" value="cleaning">
                  cleaning
                </option>
              </select>
            </div>

            <div className="relative w-full lg:max-w-sm">
              <select
                className="w-full p-2.5 text-gray-500
          text-2xl
          bg-white border
          rounded-md shadow-sm outline-none appearance-none
          focus:border-orange-400"
              >
                <option>ReactJS Dropdown</option>
                <option>Laravel 9 with React</option>
                <option>React with Tailwind CSS</option>
                <option>React With Headless UI</option>
              </select>
            </div>
          </div>

          <div>
            <div className=" grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-14">
              {filteredJobs.length === 0 ? (
                <h1>No Jobs Found</h1>
              ) : (
                <CarrersList data={filteredJobs} />
              )}
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <button class=" p-3 rounded-full from-red-400 via-orange-500 to-indigo-500 bg-gradient-to-r">
            <span class="block text-black px-4 py-2 font-extrabold text-xl rounded-full bg-white hover:bg-transparent hover:text-white transition">
              View All Openings
            </span>
          </button>
        </div>

        <div className="container">
          <div className="bg-orange-400 rounded-lg border-none h-52 ">
            <div className=" flex justify-between p-14">
              <div className="text-white">
                <h1 className="text-center  text-6xl font-extrabold mb-4">
                  45+
                </h1>
                <p className="font-semibold">TEAM MEMBERS</p>
              </div>

              <div className="text-white">
                <h1 className="text-center  text-6xl font-extrabold mb-4">
                  45+
                </h1>
                <p className="font-semibold">TEAM MEMBERS</p>
              </div>

              <div className="text-white">
                <h1 className="text-center  text-6xl font-extrabold mb-4">
                  45+
                </h1>
                <p className="font-semibold">TEAM MEMBERS</p>
              </div>

              <div className="text-white">
                <h1 className="text-center  text-6xl font-extrabold mb-4">
                  45+
                </h1>
                <p className="font-semibold">TEAM MEMBERS</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="text-center mt-20">
            <h1 className="text-black text-5xl font-extrabold mb-20">
              Learn Our Recruitment Process
            </h1>
          </div>

          <div className="flex justify-between">
            <div className="bg-orange-200 border w-80 rounded-md mb-12">
              <div className="m-10">
                <img className="w-24 mb-8" src={resumeImg} alt="" />

                <div>
                  <h2 className="text-black text-3xl font-extrabold mb-4 ">
                    CV Submission
                  </h2>

                  <p className="text-black font-medium text-lg">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Eum aspern
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-orange-200 border w-80 rounded-md mb-12">
              <div className="m-10">
                <img className="w-24 mb-8" src={resumeImg} alt="" />

                <div>
                  <h2 className="text-black text-3xl font-extrabold mb-4 ">
                    CV Submission
                  </h2>

                  <p className="text-black font-medium text-lg">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Eum aspern
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-orange-200 border w-80 rounded-md mb-12">
              <div className="m-10">
                <img className="w-24 mb-8" src={resumeImg} alt="" />

                <div>
                  <h2 className="text-black text-3xl font-extrabold mb-4 ">
                    CV Submission
                  </h2>

                  <p className="text-black font-medium text-lg">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Eum aspern
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-orange-200 border w-80 rounded-md mb-12">
              <div className="m-10">
                <img className="w-24 mb-8" src={resumeImg} alt="" />

                <div>
                  <h2 className="text-black text-3xl font-extrabold mb-4 ">
                    CV Submission
                  </h2>

                  <p className="text-black font-medium text-lg">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Eum aspern
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrers;

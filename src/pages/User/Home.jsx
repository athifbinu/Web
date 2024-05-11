import React from "react";
import heroimg from "../../assets/Images/hero.png";
import { FaLinkedin } from "react-icons/fa";
import aboutusImg from "../../assets/Images/jason-goodman-vbxyFxlgpjM-unsplash 1.png";
import "../../Styles/home.css";
const Home = () => {
  return (
    <div>
      <section className="bg-home mb-16">
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

      <section>
        <div className="container">
          <div className="text-center text-black">
            <h1>About us</h1>
          </div>
          <div className="flex gap-6 items-center">
            <div>
              <img className="about-img rounded-lg" src={aboutusImg} alt="" />
            </div>

            <div>
              <p>
                Webartistry, a dynamic subsidiary of Marbu Technologies, is a
                leading player in the realm of web and mobile application
                development. Nestled in the vibrant city of Koratty and in
                Chittillapilly, Thrissur .with a team of highly skilled
                professionals, we have successfully delivered a plethora of
                projects that have exceeded client expectations.We extend a
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
    </div>
  );
};

export default Home;

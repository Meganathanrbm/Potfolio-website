import React, { useEffect } from "react";
import images from "../Constant/images";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const birthdate = new Date("2002-12-23");
  const currentDate = new Date();
  const age =
    currentDate.getFullYear() -
    birthdate.getFullYear() -
    (currentDate <
      new Date(
        currentDate.getFullYear(),
        birthdate.getMonth(),
        birthdate.getDate()
      ));

  return (
    <section className="app" id="About">
      <div className="flex flex-col lg:flex-row">
        <div className="flex-1">
          <div className="about-content">
            <h3 data-aos="fade-right" className="text-blue-500 h3 my-2">
              Discover
            </h3>
            <h1
              data-aos="fade-right"
              className="sm:text-4xl mb-4 text-3xl dark:text-white text-black"
            >
              About Me
            </h1>
            <div className="flex-1 center">
              <div
                data-aos="fade-up"
                className="md:max-h-[500px] sm:max-h-[400px] max-h-[350px]  max-w-[400px] my-4 rounded-2xl overflow-hidden border-2 border-slate-500 dark:shadow-sm shadow-md shadow-gray-50"
              >
                <img
                  src={images.profile02}
                  className="w-full h-full pb-[100px] object-cover object-center"
                  alt="profile picture"
                />
              </div>
            </div>
            <p data-aos="fade-up" className="para py-2">
              Hello! I'm Meganathan, a {age}-year-old web developer specializing
              in the captivating world of the MERN stack. Proficient in HTML,
              CSS, Bootstrap, JavaScript, React js, Tailwind CSS, Sass, Mongodb,
              ejs, Express, Redux, REST API, and DBMS, I create visually
              enticing user interfaces. Through the magic of React.js, I bring
              front-end dynamics to life, and with the strength of Node.js, I
              build robust back-end solutions. Let's join forces and transform
              your digital aspirations into an irresistibly engaging reality!
            </p>
          </div>
        </div>
        <div className="flex-1 center md:mt-0 mt-6">
          <div
            data-aos="fade-left"
            className="timeline-area sm:pr-[20px] pl-[30px] w-[95%] sm:w-[75%] border-l-[5px] border-[#ccc]"
          >
            <div data-aos="fade-left" className="before:bg-blue-500 rounded-sm">
              <h2 className="text-blue-500 m-0 text-xl font-medium">
                Higher Secondary
              </h2>
              <h3 className="text-lg font-medium text-black">
                St joseph's higher secondary school
              </h3>
              <h4 className="text-gray-500 text-base mt-1">2018 - 2020</h4>
            </div>
            <div data-aos="fade-left" className="before:bg-blue-500 rounded-sm">
              <h2 className="text-blue-500 m-0 text-xl font-medium">
                B.Sc. Computer Science
              </h2>
              <h3 className="text-lg font-medium text-black">
                Muthurangam Govt. Arts College - Vellore
              </h3>
              <h4 className="text-gray-500 text-base mt-1">2020 - 2023</h4>
            </div>
            <div data-aos="fade-left" className="before:bg-blue-500 rounded-sm">
              <h2 className="text-blue-500 m-0 text-xl font-medium">MCA</h2>
              <h3 className="text-lg font-medium text-black">
                Presidency College - Chennai
              </h3>
              <h4 className="text-gray-500 text-base mt-1">2023 - 2025</h4>
            </div>
            <div data-aos="fade-left" className="before:bg-blue-500 rounded-sm">
              <h2 className="text-blue-500 m-0 text-xl font-medium">
                Full Stack Developer (Intern)
              </h2>
              <h3 className="text-lg font-medium text-black">
                Grafixui - Chennai
              </h3>
              <h4 className="text-gray-500 text-base mt-1">
                Mar 2024 - Jun 2024
              </h4>
            </div>
            <div data-aos="fade-left" className="before:bg-blue-500 rounded-sm">
              <h2 className="text-blue-500 m-0 text-xl font-medium">
                Web Developer
              </h2>
              <h3 className="text-lg font-medium text-black">
                Growfin - Chennai
              </h3>
              <h4 className="text-gray-500 text-base mt-1">
                Sep 2024 - Current
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

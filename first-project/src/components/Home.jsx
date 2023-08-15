import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechForce</h1>
          <p>Solution of all your programming problems </p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="logo" />
        <div>
          <p>
            {" "}
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who We Are</h1>
          <p>
            Best is quite a relative term when talking about software
            development. Software developers own the whole process of
            development, as they transforms data into an organized structure for
            web and mobile applications. You need the right software developer
            to help you as you handle complex development projects. You can
            consider one or some of the following 5 top software developers from
            the list below. Check through the software developer’s description
            to find the one that fits your needs.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div style={{ animationDelay: "0.5s" }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div style={{ animationDelay: "0.7s" }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>

            <div style={{ animationDelay: "1s" }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;

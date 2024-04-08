import React, { useEffect } from "react";
import Navbar from "../component/navbar";
import Splide from "@splidejs/splide";
import "@splidejs/splide/css";
import water from "../assets/water1.jpg";
import pink from "../assets/pink1.jpg";
import rose from "../assets/rose.jpg";
import purple from "../assets/purple.jpg";

const Home = () => {
  useEffect(() => {
    const splide1 = new Splide("#splide1", {
      type: "loop",
      perMove: 1,
      drag: "free",
      focus: "center",
      autoplay: true,
      perPage: 1,
      // breakpoints: {
      //   640: {
      //     perPage: 1,
      //   },
      // },
    }).mount();

    return () => {
      // Destroy Splide instances on unmount to prevent memory leaks.
      splide1.destroy();
    };
  }, []);

  return (
    <>
      <Navbar />
      <div name="hero" id="splide1" className="splide">
        <div className="splide__track">
          <ul className="splide__list ">
            <li className="splide__slide">
              <div className="">
                <img
                  src={pink}
                  alt="Image 1"
                  className="h-screen w-screen relative"
                />
              </div>
            </li>
            <li className="splide__slide">
              <div className="">
                <img src={water} alt="Image 2" className="h-screen w-screen" />
              </div>
            </li>
            <li className="splide__slide">
              <div className="">
                <img src={rose} alt="Image 3" className=" h-screen w-screen" />
              </div>
            </li>
            <li className="splide__slide">
              <div className="">
                <img
                  src={purple}
                  alt="Image 3"
                  className=" h-screen w-screen"
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;

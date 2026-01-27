/* eslint-disable no-unused-vars */
import img1 from "../assets/Img/career-3478983_1920.jpg";
import img2 from "../assets/Img/dream-job-2904780_1920.jpg";
// import { motion } from "framer-motion";
import { easeIn, easeOut, motion } from "motion/react";
const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 justify-center mx-auto min-h-screen">
        <div className="hero-content justify-center items-center mx-auto flex-col lg:flex-row-reverse">
          <div className="flex-1">
            <motion.img
              animate={{ y: [0, 60, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: easeIn }}
              src={img2}
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <motion.img
              animate={{ x: [90, 150, 90] }}
              transition={{ duration: 8, repeat: Infinity, ease: easeOut }}
              src={img1}
              className="max-w-sm rounded-lg shadow-2xl my-8"
            />
          </div>
          {/****/}
          <div className="flex-1">
            {/* <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{ color: "#F54927" }}
            >
              Hello Motion
            </motion.div> */}
            <motion.h1 className="text-5xl font-bold">
              There Are
              <motion.span
                // initial={{ opacity: 0, y: 50 }}
                animate={{
                  color: ["#9C0707", "#051E70", "#4F09C8"],
                  transition: { duration: 2, repeat: Infinity },
                }}
              >
                {""} 93,178 {""}
              </motion.span>
              Postings Here For you!
            </motion.h1>

            <p className="py-4">
              <small>Find Jobs, Employment & Career Opportunities</small>
            </p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="btn btn-primary"
            >
              Get Started
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

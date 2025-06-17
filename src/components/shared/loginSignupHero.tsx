"use client";
import { loginHeroImageChange } from "@/animations/login-signup";
import { expandCircles } from "@/animations/shared";
import educationSketch from "@/assets/img/education-sketch.svg";
import learningSketch from "@/assets/img/learning-sketch.svg";
import professorSketch from "@/assets/img/professor-sketch.svg";
import studySketch from "@/assets/img/study-sketch.svg";
import { motion, useAnimate } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";

const LoginSignupHeroStyles = {
  asideContainer:
    "hidden md:flex flex-col items-center justify-center md:w-full h-full subtle-light-gradient gap-8",
  outerCircle: "w-2/5 aspect-square rounded-full bg-surface/30 p-16",
  middleCircle: "w-full aspect-square rounded-full bg-surface/50",
  innerCircle: "w-full h-full lg:p-16",
  image: "w-full h-full",
  textAndControlsContainer: "w-full flex flex-col gap-4",
  titleWrapper: "w-full flex items-center justify-center",
  titleBox:
    "bg-secondary px-8 py-2 rounded-md w-1/4 max-w-[500px] min-h-[80px] max-h-[200px] flex justify-center items-center",
  titleText: "text-center text-lg font-semibold text-accent",
  buttonsContainer: "flex items-center justify-center gap-4",
  carouselButton: {
    base: "w-[50px] h-[20px] rounded-md cursor-pointer",
    active: "bg-accent",
    inactive: "bg-secondary hover:bg-accent transition-bg duration-[.5s]",
  },
};

export default function LoginSignupHero() {
  const [activeCarousel, setActiveCarousel] = useState<number>(1);
  const [imageRef, animate] = useAnimate();
  const carousels = [
    {
      id: 1,
      title: "Engage with your tutor from anywhere",
      image: learningSketch,
    },
    {
      id: 2,
      title: "Unlock your potential with expert guidance",
      image: professorSketch,
    },
    {
      id: 3,
      title: "Follow a learning path tailored just for you",
      image: studySketch,
    },
    {
      id: 4,
      title: "Build a brighter future, one lesson at a time",
      image: educationSketch,
    },
  ];

  const findCarouselById = (id: number) => {
    return carousels.find((carousel) => carousel.id === id);
  };

  const pickCarousel = (id: number) => {
    if (activeCarousel === id) return;
    setActiveCarousel(id);
  };

  const isCarouselActive = (id: number) => {
    return activeCarousel === id;
  };

  useEffect(() => {
    animate(imageRef.current, loginHeroImageChange);
  }, [activeCarousel, animate, imageRef]);

  return (
    <motion.aside
      className={LoginSignupHeroStyles.asideContainer}
      variants={{
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.3,
          },
        },
      }}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className={LoginSignupHeroStyles.outerCircle}
        variants={expandCircles}
      >
        <motion.div
          className={LoginSignupHeroStyles.middleCircle}
          variants={expandCircles}
        >
          <motion.div className={LoginSignupHeroStyles.innerCircle}>
            <Image
              src={findCarouselById(activeCarousel)?.image}
              alt={`Hero sketch number ${activeCarousel}`}
              ref={imageRef}
              className={LoginSignupHeroStyles.image}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      <div className={LoginSignupHeroStyles.textAndControlsContainer}>
        <div className={LoginSignupHeroStyles.titleWrapper}>
          <div className={LoginSignupHeroStyles.titleBox}>
            <p className={LoginSignupHeroStyles.titleText}>
              {findCarouselById(activeCarousel)?.title}
            </p>
          </div>
        </div>
        <div className={LoginSignupHeroStyles.buttonsContainer}>
          {carousels.map((carousel) => (
            <button
              key={carousel.id}
              className={`${LoginSignupHeroStyles.carouselButton.base} ${
                isCarouselActive(carousel.id)
                  ? LoginSignupHeroStyles.carouselButton.active
                  : LoginSignupHeroStyles.carouselButton.inactive
              }`}
              onClick={() => pickCarousel(carousel.id)}
            ></button>
          ))}
        </div>
      </div>
    </motion.aside>
  );
}

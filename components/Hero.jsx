import { motion } from "framer-motion";
import { AiFillFacebook, AiFillInstagram, AiFillYoutube } from "react-icons/ai";

const Hero = ({ response }) => {
  return (
    <section
      id="intro"
      className="relative snap-start overflow-hidden w-full h-full flex items-center justify-center"
    >
      <img
        className="absolute brightness-75 -z-10 w-full h-full object-cover object-center"
        src={response.hero.fields.file.url}
        alt="hero-image"
      />

      <div className="main-hero p-5 mt-32 rounded-md flex flex-col gap-8 items-start justify-center md:w-1/2 lg:w-2/3 text-white">
        <div className="flex flex-col items-start justify-center gap-4">
          <motion.h1
            initial={{ x: "-100%" }}
            whileInView={{ x: 0 }}
            transition={{
              type: "spring",
              duration: 1,
              bounce: 0.3,
            }}
            className="text-4xl font-semibold md:text-5xl lg:text-7xl"
          >
            {response.heading}
          </motion.h1>
          <motion.h3
            initial={{ x: "100%" }}
            whileInView={{ x: 0 }}
            transition={{
              type: "spring",
              duration: 1,
              bounce: 0.3,
            }}
            className="text-xl md:text-2xl lg:text-3xl"
          >
            {response.description}
          </motion.h3>
        </div>

        <motion.div
          initial={{ y: "120%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            duration: 1,
            bounce: 0.3,
          }}
          className="socials rounded-md bg-black/25 p-2 mx-auto flex text-3xl gap-8 justify-center items-center [&>a]:cursor-pointer [&>a:hover]:opacity-50"
        >
          <a href={response.facebook}>
            <AiFillFacebook />
          </a>
          <a href={response.instagram}>
            <AiFillInstagram />
          </a>
          <a href={response.youtube}>
            <AiFillYoutube />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

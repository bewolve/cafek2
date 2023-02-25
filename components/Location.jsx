import { AiFillContacts, AiFillMail, AiFillPhone } from "react-icons/ai";
import { motion } from "framer-motion";

const Location = ({ response }) => {
  return (
    <section id="location" className="relative snap-start w-full h-full">
      <img
        className="absolute -z-30 object-cover blur-sm brightness-75 h-full w-full"
        src={response.locimg.fields.file.url}
        alt=""
      />

      <motion.div
        initial={{ x: "-100%" }}
        whileInView={{ x: 0 }}
        transition={{
          type: "spring",
          duration: 1,
        }}
        className="wrapper w-full h-full flex flex-col justify-center md:justify-between items-center md:flex-row"
      >
        <div className="locationflex flex-col gap-4 items-start justify-center md:flex-1 md:h-[400px] bg-black/25 p-4 rounded-md text-xl text-white">
          <h1 className="text-3xl">{response.location}</h1>
          <h1 className="flex justify-start items-center gap-2">
            <AiFillContacts /> {response.name}
          </h1>
          <h1 className="flex justify-start items-center gap-2">
            <AiFillPhone /> {response.phone}
          </h1>
          <h1 className="flex justify-start items-center gap-2">
            <AiFillMail /> {response.email}
          </h1>
        </div>

        <div className="map h-[400px] hidden flex-1 md:block">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1548.6370469528458!2d58.92180777177858!3d23.272646069263775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDE2JzIxLjUiTiA1OMKwNTUnMjEuOCJF!5e1!3m2!1sen!2som!4v1677354334210!5m2!1sen!2som"
            className="w-full h-full"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </motion.div>
    </section>
  );
};

export default Location;

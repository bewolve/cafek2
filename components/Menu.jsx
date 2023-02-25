import { motion } from "framer-motion";
const Menu = ({ response, items }) => {
  return (
    <section
      id="menu"
      className="relative w-full h-full snap-start overflow-hidden flex justify-center items-center"
    >
      <img
        className="absolute -z-50 blur-sm object-cover h-full w-full"
        src={response.menu.fields.file.url}
        alt="menu-image"
      />

      <div className="menu-container flex justify-between items-center">
        <motion.div
          initial={{ x: "-100%" }}
          whileInView={{ x: 0 }}
          transition={{
            type: "spring",
            duration: 1,
            bounce: 0.3,
          }}
          className="menu md:flex-1 text-white backdrop-blur-sm bg-black/25 p-3 md:p-6 rounded-md  md:rounded-none grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          {items.map((item) => (
            <div key={item.sys.id} className="item">
              <h1 className="text-base font-semibold md:text-xl">
                {item.fields.title}
              </h1>
              <div className="flavors flex flex-col mt-2 gap-1">
                {item.fields.flavors.map((flavor, index) => (
                  <p className="text-sm md:text-base" key={index}>
                    {flavor}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        <img
          className="hidden md:block h-screen w-1/4 object-cover"
          src={response.menu2.fields.file.url}
          alt=""
        />
      </div>
    </section>
  );
};

export default Menu;

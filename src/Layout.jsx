import senyawaLogo from "./assets/image/senyawa-putih.png";
import { motion as Motion } from "framer-motion";

export default function Layout() {
  return (
    <>
      <div className="relative pb-7">
        <div className="top-0 right-0 bottom-0 left-0 h-screen fixed bg-[url(/bg.jpg)] bg-cover bg-center bg-no-repeat"></div>

        <Motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative w-full"
        >
          <img
            src={senyawaLogo}
            alt="jumbotron-dij"
            className="w-80 xl:w-2xl m-auto mt-18 xl:mt-12 object-cover shadow-2xl shadow-slate-300 border border-slate-200/30 py-2"
          />
        </Motion.div>

        <div className="w-full relative text-center text-slate-100 mt-14">
          <Motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          >
            <h1 className="inline-block font-playwrite-au font-bold text-4xl xl:text-6xl bg-slate-700/15 shadow-2xl shadow-slate-300">
              Apaan sih?
            </h1>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
          >
            <p className="inline-block font-semibold w-86 xl:w-3/4 text-md xl:text-xl mt-6 xl:mt-14 px-3 tracking-wide bg-slate-700/25 shadow-2xl shadow-slate-300">
              Kami sekumpulan anak band Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Animi rerum non provident, consequuntur nam
              dolore numquam, ratione voluptatem exercitationem saepe veritatis
              at doloremque, voluptatibus laborum nisi officia! Ut quibusdam
              saepe ducimus suscipit aut totam maiores consequuntur corporis,
              perferendis optio velit nisi quod? Similique ab quam dolores?
              Eveniet, facere!
            </p>
          </Motion.div>
        </div>
      </div>
    </>
  );
}

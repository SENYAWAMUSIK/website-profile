import senyawa from "./assets/image/senyawa-vertical.png";
import { motion as Motion } from "framer-motion";

export default function Layout() {
  return (
    <>
      <div className="w-full relative">
        <div className="top-0 right-0 bottom-0 left-0 h-screen fixed bg-[url(/bg.jpg)] bg-cover bg-center bg-no-repeat"></div>

        <div className="relative w-full py-10">
          <div className="w-full grid grid-cols-1 gap-y-8 md:gap-y-14 xl:grid-cols-2 xl:px-18 2xl:px-32">
            <Motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="w-full"
            >
              <img
                src={senyawa}
                alt="jumbotron-dij"
                className="w-70 md:w-2/3 xl:w-md 2xl:w-lg m-auto object-cover shadow-2xl shadow-slate-300"
              />
            </Motion.div>

            <div className="w-full text-center m-auto text-slate-100">
              <Motion.div
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              >
                <h1 className="inline-block font-playwrite-au font-bold text-4xl md:text-6xl bg-slate-700/15 shadow-2xl shadow-slate-300">
                  Apaan sih?
                </h1>
              </Motion.div>

              <Motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
              >
                <p className="inline-block font-semibold w-80 md:w-3/4 text-md md:text-2xl mt-7 md:mt-12 p-3 tracking-wide bg-slate-700/25 shadow-2xl shadow-slate-300">
                  Kami sekumpulan anak band Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Animi rerum non provident,
                  consequuntur nam dolore numquam, ratione voluptatem
                  exercitationem saepe veritatis at doloremque, voluptatibus
                  laborum nisi officia! Ut quibusdam saepe ducimus suscipit aut
                  totam maiores consequuntur corporis, perferendis optio velit
                  nisi quod? Similique ab quam dolores? Eveniet, facere!
                </p>
              </Motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

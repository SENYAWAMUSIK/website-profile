import { motion as Motion } from "framer-motion";
import ScrollReveal from "./components/ScrollReveal";
import senyawa from "./assets/image/senyawa-vertical.png";
import chands from "./assets/image/chands.jpg";
import ale from "./assets/image/ale.jpg";
import guruh from "./assets/image/guruh.jpg";
import sukma from "./assets/image/sukma.jpg";
import facebook from "./assets/image/sosmed-icon/facebook.svg";
import instagram from "./assets/image/sosmed-icon/instagram.svg";
import youtube from "./assets/image/sosmed-icon/youtube.svg";
import tiktok from "./assets/image/sosmed-icon/tiktok.svg";
import spotify from "./assets/image/sosmed-icon/spotify.svg";

export default function Layout() {
  return (
    <>
      <div className="w-full relative pb-10">
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
                <h1 className="inline-block font-playwrite-au font-bold text-4xl md:text-6xl shadow-2xl shadow-slate-300 [text-shadow:_2px_2px_0_#000]">
                  Apaan sih?
                </h1>
              </Motion.div>

              <Motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
              >
                <p className="inline-block font-semibold w-80 md:w-3/4 text-md md:text-2xl mt-7 md:mt-12 p-3 2xl:px-5 tracking-wide shadow-2xl shadow-slate-300 [text-shadow:_2px_2px_0_#000]">
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

          {/* PERSONIL SECTION */}
          <div className="mt-14 md:mt-16 xl:mt-26">
            <div className="w-full font-playwrite-au font-bold text-slate-100 text-center">
              <ScrollReveal offset={650}>
                <h2 className="inline-block text-3xl md:text-5xl shadow-2xl shadow-slate-300 [text-shadow:_2px_2px_0_#000]">
                  Senyawa Personil
                </h2>
              </ScrollReveal>
            </div>

            <div className="2xl:mt-12">
              <ScrollReveal offset={650}>
                <div className="w-85 md:w-5/6 xl:w-[75%] 2xl:w-1/2 bg-stone-700/40 m-auto mt-8 md:mt-10 py-5 shadow-2xl shadow-slate-300 rounded-sm">
                  <div className="w-full grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-5 md:pl-5 xl:pl-10 2xl:pl-0">
                    <img
                      src={chands}
                      alt="chands"
                      className="w-58 2xl:w-68 m-auto md:order-2 border-1 border-slate-100/30 rounded-sm"
                    />

                    <div className="md:order-1 w-80 xl:w-90 m-auto text-left grid grid-cols-1 gap-y-2 md:gap-y-3 2xl:gap-y-4">
                      <h4 className="font-playwrite-au font-semibold text-xl md:text-2xl xl:text-3xl text-slate-100">
                        Chands
                      </h4>
                      <h4 className="font-playwrite-au font-semibold text-xl md:text-2xl xl:text-3xl text-slate-100">
                        Vocal Guitar
                      </h4>
                      <p className="font-playwrite-au font-semibold tracking-wide text-sm md:text-md xl:text-lg text-slate-100">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Alias dolorum possimus repudiandae, harum perspiciatis
                        voluptates incidunt aliquam sunt obcaecati iure debitis
                        eos veniam doloribus? Soluta corrupti eligendi quidem
                        explicabo sed!
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal offset={650}>
                <div className="w-85 md:w-5/6 xl:w-[75%] 2xl:w-1/2 bg-stone-700/40 m-auto mt-8 md:mt-10 py-5 shadow-2xl shadow-slate-300 rounded-sm">
                  <div className="w-full grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-5 md:pr-16 2xl:pr-0">
                    <img
                      src={ale}
                      alt="chands"
                      className="w-58 2xl:w-68 m-auto border-1 border-slate-100/30 rounded-sm"
                    />

                    <div className="w-80 xl:w-90 m-auto text-right grid grid-cols-1 gap-y-2 2xl:gap-y-4">
                      <h4 className="font-playwrite-au font-semibold text-xl md:text-2xl xl:text-3xl text-slate-100">
                        Ale
                      </h4>
                      <h4 className="font-playwrite-au font-semibold text-xl md:text-2xl xl:text-3xl text-slate-100">
                        Guitar Lead
                      </h4>
                      <p className="font-playwrite-au font-semibold tracking-wide text-sm md:text-md xl:text-lg text-slate-100">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Alias dolorum possimus repudiandae, harum perspiciatis
                        voluptates incidunt aliquam sunt obcaecati iure debitis
                        eos veniam doloribus? Soluta corrupti eligendi quidem
                        explicabo sed!
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal offset={650}>
                <div className="w-85 md:w-5/6 xl:w-[75%] 2xl:w-1/2 bg-stone-700/40 m-auto mt-8 md:mt-10 py-5 shadow-2xl shadow-slate-300 rounded-sm">
                  <div className="w-full grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-5 md:pl-5 xl:pl-10 2xl:pl-0">
                    <img
                      src={guruh}
                      alt="chands"
                      className="w-58 2xl:w-68 m-auto md:order-2 border-1 border-slate-100/30 rounded-sm"
                    />

                    <div className="md:order-1 w-80 xl:w-90 m-auto text-left grid grid-cols-1 gap-y-2 md:gap-y-3 2xl:gap-y-4">
                      <h4 className="font-playwrite-au font-semibold text-xl md:text-2xl xl:text-3xl text-slate-100">
                        Guruh
                      </h4>
                      <h4 className="font-playwrite-au font-semibold text-xl md:text-2xl xl:text-3xl text-slate-100">
                        Bass Guitar
                      </h4>
                      <p className="font-playwrite-au font-semibold tracking-wide text-sm md:text-md xl:text-lg text-slate-100">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Alias dolorum possimus repudiandae, harum perspiciatis
                        voluptates incidunt aliquam sunt obcaecati iure debitis
                        eos veniam doloribus? Soluta corrupti eligendi quidem
                        explicabo sed!
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal offset={650}>
                <div className="w-85 md:w-5/6 xl:w-[75%] 2xl:w-1/2 bg-stone-700/40 m-auto mt-8 md:mt-10 py-5 shadow-2xl shadow-slate-300 rounded-sm">
                  <div className="w-full grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-5 md:pr-16 2xl:pr-0">
                    <img
                      src={sukma}
                      alt="chands"
                      className="w-58 2xl:w-68 m-auto border-1 border-slate-100/30 rounded-sm"
                    />

                    <div className="w-80 xl:w-90 m-auto text-right grid grid-cols-1 gap-y-2 2xl:gap-y-4">
                      <h4 className="font-playwrite-au font-semibold text-xl md:text-2xl xl:text-3xl text-slate-100">
                        Sukma
                      </h4>
                      <h4 className="font-playwrite-au font-semibold text-xl md:text-2xl xl:text-3xl text-slate-100">
                        Drum
                      </h4>
                      <p className="font-playwrite-au font-semibold tracking-wide text-sm md:text-md xl:text-lg text-slate-100">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Alias dolorum possimus repudiandae, harum perspiciatis
                        voluptates incidunt aliquam sunt obcaecati iure debitis
                        eos veniam doloribus? Soluta corrupti eligendi quidem
                        explicabo sed!
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          <ScrollReveal offset={900}>
            <div className="w-85 md:w-lg xl:w-xl m-auto py-3 px-2 bg-slate-600/50 mt-18 shadow-2xl shadow-slate-300 rounded-sm">
              <h4 className="font-playwrite-au font-semibold tracking-wide text-center text-md md:text-xl xl:text-2xl text-slate-100">
                Kalian Bisa Dengarkan Karya Kami di
              </h4>

              <div className="w-full m-auto flex gap-x-3 items-center justify-center mt-5">
                <a href="#">
                  <img src={facebook} alt="facebook" className="w-12 h-12" />
                </a>
                <a href="#">
                  <img src={instagram} alt="facebook" className="w-12 h-12" />
                </a>
                <a href="#">
                  <img src={youtube} alt="facebook" className="w-16 h-16" />
                </a>
                <a href="#">
                  <img src={tiktok} alt="facebook" className="w-12 h-12" />
                </a>
                <a href="#">
                  <img src={spotify} alt="facebook" className="w-12 h-12" />
                </a>
              </div>

              <p className="text-sm text-center text-slate-100 mt-5">
                © 2025 Senyawa. All rights reserved.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </>
  );
}

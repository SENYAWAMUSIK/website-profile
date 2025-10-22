import senyawaLogo from "./assets/image/senyawa-putih.png";

export default function Layout() {
  return (
    <>
      <div className="relative">
        <div className="top-0 right-0 bottom-0 left-0 h-screen fixed bg-[url(/bg.jpg)] bg-cover bg-center bg-no-repeat"></div>

        <div className="absolute w-full">
          <img
            src={senyawaLogo}
            alt="jumbotron-dij"
            className="xl:w-3/5 m-auto mt-18 xl:mt-5 object-cover"
          />
        </div>
      </div>
    </>
  );
}

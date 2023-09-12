import bgImg from "../public/images/desktop.svg";
import smImg from "../public/images/mobile.svg";

function Banner() {
  return (
    <div className="banner rounded-2xl">
      <img src={bgImg} className="hidden md:block" />
      <img src={smImg} className="lg:hidden mr-0 p-0 bg-no-repeat w-full" />
    </div>
  );
}

export default Banner;

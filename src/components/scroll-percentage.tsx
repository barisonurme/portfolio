import { useEffect, useState } from "react";
import { portfolioSections } from "../sections/header";
import { TextUtils } from "../utils";
import HamburgerMenu from "./hamburger-menu";

const ScrollPercentage = ({
  navigationClickHandler,
}: {
  navigationClickHandler: (id: string) => void;
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 600);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`flex w-full justify-center items-center duration-500 z-50 ${
        visible ? "-translate-y-0" : "-translate-y-[320px]"
      }`}
    >
      <div className="absolute top-0 hidden md:flex w-full  px-4 py-4 md:px-44  z-50 justify-center gap-12 max-w-[1640px]">
        {["home", ...portfolioSections, "contact"].map((section) => (
          <div
            onClick={() => navigationClickHandler(section)}
            className="z-50 duration-500 opacity-80 cursor-pointer hover:opacity-100"
            key={`scroll-bottom-${section}`}
          >
            {TextUtils.formatStringToTitleCase(section)}
          </div>
        ))}
      </div>
      <div className="hidden md:flex z-40 absolute top-0 bg-gradient-to-b from-[#0e100f] to-[#0e100f00] h-44  w-full pointer-events-none" />

      <div className="flex justify-end w-full p-4">
        <HamburgerMenu
          portfolioSections={portfolioSections}
          navigationClickHandler={navigationClickHandler}
        />
      </div>
    </div>
  );
};

export default ScrollPercentage;

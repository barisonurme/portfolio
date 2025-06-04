/* Format Utils */
import HamburgerMenu from "../components/hamburger-menu";
import { TextUtils } from "../utils";

/* Constants */
export const portfolioSections = ["projects", "skills", "about"];

const Header = ({
  navigationClickHandler,
}: {
  navigationClickHandler: (id: string) => void;
}) => {
  return (
    <header className=" absolute z-40 flex flex-col h-dvh w-full justify-center items-center">
      <section className="max-w-[1640px] h-12 flex w-full flex-col px-4 md:px-24">
        <div className="flex w-full justify-between items-center p-4 gap-8">
          <button className="text-2xl font-black cursor-pointer hover:opacity-50 opacity-100 duration-500">
            BRSNRM
          </button>
          {/* Header Buttons */}
          <div className="md:flex justify-start grow gap-8 hidden">
            {portfolioSections.map((section) => (
              <button
                onClick={() => navigationClickHandler(section)}
                className="font-semibold opacity-50 hover:opacity-100 duration-500 cursor-pointer"
                key={section}
              >
                {TextUtils.formatStringToTitleCase(section)}
              </button>
            ))}
          </div>

          <button
            onClick={() => navigationClickHandler("contact")}
            className="border-1 p-2 px-4 rounded-2xl cursor-pointer md:block hidden"
          >
            Contact
          </button>

          <HamburgerMenu
            portfolioSections={portfolioSections}
            navigationClickHandler={navigationClickHandler}
          />
        </div>
        {/* Divider */}
        <div className="flex w-full border-b divider" />
      </section>

      <section className="flex flex-col justify-center items-start md:items-center grow p-4">
        <div className="headline primary text-5xl font-semibold">
          Building DOM Elements
        </div>
        <p className="headline  text-6xl lg:text-9xl font-semibold">
          with passion.
        </p>
        <p className="headlineDesc text text-2xl mt-8 opacity-50">
          Whether it's crafting structure or fine-tuning every byte.
        </p>
      </section>

      {/* Scroll Down Button */}
      <div className="z-40 h-44 flex w-full justify-center items-center">
        <button
          onClick={() => navigationClickHandler("projects")}
          className="cursor-pointer flex flex-col justify-center items-center"
        >
          <p>See More</p>
          <p className="rotate-90">➞</p>
        </button>
      </div>

      <div className="absolute bottom-0 bg-gradient-to-t from-[#0e100f] to-[#0e100f00] h-96 flex w-full" />
    </header>
  );
};

export default Header;

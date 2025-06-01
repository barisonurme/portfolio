/* Format Utils */
import { TextUtils } from "../utils";

/* Constants */
const portfolioSections = ["projects", "skills", "blog", "about"];

const Header = () => {
  return (
    <header className="flex flex-col h-full w-full justify-center items-center px-4 md:px-24">
      <section className="max-w-[1640px] h-12 flex w-full flex-col">
        <div className="flex w-full justify-between items-center p-4 gap-8">
          <button className="text-2xl font-black cursor-pointer hover:opacity-50 opacity-100 duration-500">
            BRSNRM
          </button>
          {/* Header Buttons */}
          <div className="md:flex justify-start grow gap-8 hidden">
            {portfolioSections.map((section) => (
              <button
                className="font-semibold opacity-50 hover:opacity-100 duration-500 cursor-pointer"
                key={section}
              >
                {TextUtils.formatStringToTitleCase(section)}
              </button>
            ))}
          </div>

          <button className="border-1 p-2 px-4 rounded-2xl cursor-pointer">
            Contact
          </button>
        </div>
        {/* Divider */}
        <div className="flex w-full border-b divider" />
      </section>

      <section className="flex flex-col justify-center items-start md:items-center grow">
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
      <div className="h-44 flex w-full justify-center items-center">
        <button className="cursor-pointer flex flex-col">
          <p>See More</p>
          <p className="rotate-90">➞</p>
        </button>
      </div>
    </header>
  );
};

export default Header;

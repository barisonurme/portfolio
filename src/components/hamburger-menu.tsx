import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { TextUtils } from "../utils";

const HamburgerMenu = ({
  portfolioSections,
  navigationClickHandler,
}: {
  portfolioSections: string[];
  navigationClickHandler: (id: string) => void;
}) => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (showMenu) {
      document.body.classList.add("lock-scroll");
    } else {
      document.body.classList.remove("lock-scroll");
    }

    return () => {
      document.body.classList.remove("lock-scroll");
    };
  }, [showMenu]);

  return (
    <>
      <div
        onClick={() => {
          setShowMenu(true);
        }}
        className="block md:hidden p-4 z-50 pointer-events-auto"
      >
        <Menu />
      </div>

      {/* Hamburger Menu Content */}
      <div
        className={` flex flex-col gap-4 w-full  justify-center items-start p-12 h-screen absolute top-0 left-0 z-50 bg-red duration-500 bg-zinc-800 ${
          showMenu ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <button className="text-4xl font-black cursor-pointer hover:opacity-50 opacity-100 duration-500 mb-12">
          BRSNRM
        </button>

        {portfolioSections.map((section) => {
          return (
            <div
              onClick={() => {
                navigationClickHandler(section);
                setShowMenu(false);
              }}
              className="flex flex-col gap-4 py-2 pr-4 text-xl"
              key={section}
            >
              {TextUtils.formatStringToTitleCase(section)}
            </div>
          );
        })}

        <button
          onClick={() => setShowMenu(false)}
          className="flex gap-2 border rounded-xl p-4 px-8 mt-4 cursor-pointer hover:opacity-50 opacity-100 duration-500 mb-12"
        >
          close <X />
        </button>
      </div>
    </>
  );
};

export default HamburgerMenu;

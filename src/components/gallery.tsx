import { ChevronLeft } from "lucide-react";
import { useState } from "react";

type Props = {
  imagePaths?: string[];
};

const Gallery = (props: Props) => {
  const { imagePaths } = props;

  const [currentSlide, setCurrentSlide] = useState(0);

  // Make sure gallery has images
  if (!imagePaths?.length) return <></>;

  // Cover image should be index 0 for now
  const currentImagePath = imagePaths[currentSlide];

  // Can user see controls
  const canUserSeeControls = imagePaths.length > 1;

  // Handle Navigation
  const handleNavigation = (direction: "left" | "right") => {
    // prevent going minus
    if (direction === "left" && currentSlide === 0) return;

    // prevent going more than gallery index
    if (direction === "right" && currentSlide === imagePaths.length - 1) return;

    setCurrentSlide((prev) => (direction === "left" ? prev - 1 : prev + 1));
  };

  return (
    <div className="flex flex-col">
      <div className="relative group">
        {/* Navigation */}
        {canUserSeeControls && (
          <>
            {/* prettier-ignore */}
            <div onClick={() => handleNavigation("left")} className={`flex h-full w-18 absolute left-0 items-center justify-center opacity-0 duration-500 group-hover:opacity-50 hover:opacity-100 cursor-pointer`}>
              <ChevronLeft />
            </div>
            {/* prettier-ignore */}
            <div onClick={() => handleNavigation("right")} className={`flex h-full w-18 absolute rotate-180 right-0 items-center justify-center opacity-0 duration-500 group-hover:opacity-50 hover:opacity-100 cursor-pointer`}>
              <ChevronLeft />
            </div>
          </>
        )}

        {/* Current Image */}
        {/* prettier-ignore */}
        <img className="duration-500 h-[420px] flex  w-full transition-all rounded-sm object-cover" src={currentImagePath || "https://ui.shadcn.com/placeholder.svg"}/>

        {/* Bottom Navigation */}
      </div>
      {/* prettier-ignore */}
      <div className="flex w-full justify-center translate-y-full mt-4 gap-2">
        {canUserSeeControls && imagePaths.map((_dot, index) => { return ( <div className={`w-2 h-2 rounded-full cursor-pointer bg-amber-50 ${currentSlide === index ? "opacity-100" : "opacity-50"}`}/>);})}
      </div>
    </div>
  );
};

export default Gallery;

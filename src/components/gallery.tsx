import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import YouTubeEmbed from "./molecuels/youtube-embed";

type Props = {
  mediaPaths?: { path: string; isYTVid?: boolean }[];
};

const Gallery = (props: Props) => {
  const { mediaPaths } = props;

  const [currentSlide, setCurrentSlide] = useState(0);

  // Make sure gallery has images
  if (!mediaPaths?.length) return <></>;

  // Cover image should be index 0 for now
  const currentMediaPath = mediaPaths[currentSlide];

  // Can user see controls
  const canUserSeeControls = mediaPaths.length > 1;

  // Handle Navigation
  const handleNavigation = (direction: "left" | "right") => {
    // prevent going minus
    if (direction === "left" && currentSlide === 0) return;

    // prevent going more than gallery index
    if (direction === "right" && currentSlide === mediaPaths.length - 1) return;

    setCurrentSlide((prev) => (direction === "left" ? prev - 1 : prev + 1));
  };

  return (
    <div className="flex flex-col">
      <div className="relative group">
        {/* Navigation */}
        {canUserSeeControls && !currentMediaPath.isYTVid && (
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
        {!currentMediaPath.isYTVid && (
          <img
            className="aspect-video duration-500  flex  w-full transition-all rounded-sm object-cover"
            src={
              currentMediaPath.path || "https://ui.shadcn.com/placeholder.svg"
            }
          />
        )}
        {currentMediaPath.isYTVid && (
          <YouTubeEmbed videoId={currentMediaPath.path} />
        )}

        {/* Bottom Navigation */}
      </div>
      {/* prettier-ignore */}
      <div className="flex w-full justify-center translate-y-full mt-4 gap-2">
        {canUserSeeControls && mediaPaths.map((_dot, index) => { return ( <div onClick={()=> setCurrentSlide(index)} className={`w-2 h-2 rounded-full cursor-pointer bg-amber-50 ${currentSlide === index ? "opacity-100" : "opacity-50"}`}/>);})}
      </div>
    </div>
  );
};

export default Gallery;

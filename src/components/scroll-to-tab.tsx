import { useEffect, useState } from "react";

export default function ScrollToTopButton({
  navigationClickHandler,
}: {
  navigationClickHandler: (id: string) => void;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 600);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => {
        navigationClickHandler("home");
      }}
      className="-rotate-90 -translate-y-full translate-x-[40px] z-50 fixed bottom-4 right-4 p-3 rounded-full shadow-lg hover:bg-gray-800 transition"
    >
      <p className="text-sm">scroll to top →</p>
    </button>
  );
}

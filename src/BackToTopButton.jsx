import { useEffect, useState } from "react";

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 990) {
        setShowButton(true);
      } else if (window.scrollY <= 990) {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (showButton) {
      document.getElementById("topbutton").classList.remove("hidden");
    } else {
      document.getElementById("topbutton").classList.add("hidden");
    }
  }, [showButton]);

  return (
    <div
      id="topbutton"
      onClick={goToTop}
      title="Go To Top"
      type="button"
      className="fixed z-40 flex items-center justify-center w-12 h-12 p-3 text-indigo-600 border border-indigo-600 rounded-full bottom-8 right-8 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
    >
      <span className="text-2xl text-center align-middle font-base">
        &uarr;
      </span>
    </div>
  );
};

export default BackToTopButton;

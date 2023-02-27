import { useEffect, useState } from "react";

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1000) {
        setShowButton(true);
      } else if (window.scrollY <= 1000) {
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
      className="fixed bottom-8 right-8 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-indigo-600 p-3 text-indigo-600 hover:bg-indigo-600  hover:text-white hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
    >
      <span className="font-base text-center align-middle text-2xl">
        &uarr;
      </span>
    </div>
  );
};

export default BackToTopButton;

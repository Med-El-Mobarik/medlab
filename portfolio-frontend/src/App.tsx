import React, { useState, useEffect, Suspense } from "react";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Contact,
  Navigation,
  Footer,
  Profile,
  Loading
} from "./components";
import { Toaster } from 'react-hot-toast';
import FadeIn from "./components/FadeIn";
import "./index.scss";

function App() {
  const [mode, setMode] = useState<string>("dark");

  const handleModeChange = () => {
    if (mode === "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      <div
        className={`main-container ${
          mode === "dark" ? "dark-mode" : "light-mode"
        }`}
      >
        <Toaster position="top-right" reverseOrder={false} />
        <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />
        <FadeIn transitionDuration={700}>
          <Main />
          <Profile />
          <Expertise />
          <Timeline />
          <Project />
          <Contact />
        </FadeIn>
        <Footer />
      </div>
    </Suspense>
  );
}

export default App;

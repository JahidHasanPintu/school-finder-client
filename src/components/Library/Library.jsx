import React from "react";
import AllCategories from "./AllCategories";
import ChildrenBooks from "./ChildrenBooks";
import IslamicBooks from "./IslamicBooks";
import HeroSection from "./HeroSection";
import StoryBooks from "./StoryBooks";
import ProgrammingBooks from "./ProgrammingBooks";
import CookBooks from "./Cookbooks";
import SportsBooks from "./SportsBooks";
import Poetry from "./Poetry";

const Library = () => {
  return (
    <div>
      <HeroSection />
      <AllCategories />
      <IslamicBooks />
      <ChildrenBooks />
      <StoryBooks />
      <ProgrammingBooks />
      <CookBooks />
      <SportsBooks />
      <Poetry />
    </div>
  );
};

export default Library;

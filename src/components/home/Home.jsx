import React, { useEffect, useState } from "react";
import HomeBanner from "./HomeBanner";
import HomeSection1 from "./HomeSection1";
import Recommended from "./Recommended";
import Loading from "../Loading/Loading";
import Map from "./Map";
import TopSchools from "./TopSchools";
import ExploreBoard from "./ExploreBoard";
import Education from "./Education";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set a timeout to hide the spinner after 10 seconds
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // Clean up the timeout when the component unmounts
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <HomeBanner></HomeBanner>
          <Map />
          <HomeSection1></HomeSection1>
          <TopSchools />
          <Recommended></Recommended>
          <ExploreBoard />
          <Education />
        </div>
      )}
    </div>
  );
};

export default Home;

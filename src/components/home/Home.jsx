import React, { useEffect, useState } from "react";
import HomeBanner from "./HomeBanner";
import HomeSection1 from "./HomeSection1";
import HomeSection2 from "./HomeSection2";
import HomeSection3 from "./HomeSection3";
import Loading from "../Loading/Loading";
import SchoolMap from "../SchoolMap/SchoolMap";
import MapDivider from "./MapDivider";

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
        <Loading/>
      ) : (
        <div>
          <HomeBanner></HomeBanner>
          <SchoolMap/>
          <MapDivider/>
          <HomeSection1></HomeSection1>
          <HomeSection2></HomeSection2>
          <HomeSection3></HomeSection3>
        </div>
      )}
    </div>
  );
};

export default Home;

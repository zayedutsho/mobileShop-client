import React from "react";
import AdvertisedItems from "../../AdvertisedItems/AdvertisedItems";
import Category from "../../Category/Category";
import Banner from "../Banner/Banner";
import DownloadApp from "../DownloadApp/DownloadApp";

const Home = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="mx-6">
        <Banner></Banner>
        <div className="mx-6">
          <AdvertisedItems></AdvertisedItems>
          <Category></Category>
        </div>
        <DownloadApp></DownloadApp>
      </div>
    </div>
  );
};

export default Home;

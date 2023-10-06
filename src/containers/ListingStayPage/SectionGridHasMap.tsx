import React, { FC, useState } from "react";
import AnyReactComponent from "components/AnyReactComponent/AnyReactComponent";
import StayCardH from "components/StayCardH/StayCardH";
import GoogleMapReact from "google-map-react";
import { DEMO_STAY_LISTINGS } from "data/listings";
import ButtonClose from "shared/ButtonClose/ButtonClose";
import Checkbox from "shared/Checkbox/Checkbox";
import Pagination from "shared/Pagination/Pagination";
import TabFilters from "./TabFilters";
import Heading2 from "components/Heading/Heading2";
import StayCard from "components/StayCard/StayCard";

const DEMO_STAYS = DEMO_STAY_LISTINGS.filter((_, i) => i < 12);

export interface SectionGridHasMapProps { }

const SectionGridHasMap: FC<SectionGridHasMapProps> = () => {
  const [currentHoverID, setCurrentHoverID] = useState<string | number>(-1);
  const [showFullMapFixed, setShowFullMapFixed] = useState(false);
  const [itemIndex, setItemIndex] = useState(0);

  return (
    <div>
      <div className="relative flex min-h-screen">
        {/* CARDSSSS */}
        <div className="min-h-screen w-full flex-shrink-0 ">
          <Heading2 />
          <div className="mb-8 lg:mb-11">
            <TabFilters />
          </div>
          <div className="grid grid-cols-1 gap-8">
            {DEMO_STAYS.map((item, index) => (
              <div
                key={item.id}
                onMouseEnter={() => { setCurrentHoverID((_) => item.id); setItemIndex(index) }}
                onMouseLeave={() => setCurrentHoverID((_) => -1)}
              >
                <StayCardH data={item} />
              </div>
            ))}
          </div>
          <div className="flex mt-16 justify-center items-center">
            <Pagination />
          </div>
        </div>

        {!showFullMapFixed && (
          <div
            className="flex items-center justify-center fixed bottom-8 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-neutral-900 text-white shadow-2xl rounded-full z-30  space-x-3 text-sm cursor-pointer"
            onClick={() => setShowFullMapFixed(true)}
          >
            <i className="text-lg las la-map"></i>
            <span>Show map</span>
          </div>
        )}

        {/* MAPPPPP */}
        <div
          className={`xl:flex-grow xl:block ${showFullMapFixed ? "fixed inset-0 z-50" : "hidden"
            }`}
        >
          {showFullMapFixed && (
            <>
              <ButtonClose
                onClick={() => setShowFullMapFixed(false)}
                className="bg-white absolute z-50 right-[55px] top-2.5 shadow-lg rounded-xl w-10 h-10"
              />
              <div className="hidden xl:block absolute z-50 left-[16px] top-[16px] bottom-[90px] xl:w-[420px] flex-shrink-0 bg-white">
                <h2 className="text-neutral-50 text-lg text-center font-medium" style={{ backgroundImage: "url(https://res.klook.com/image/upload/cities/pspsl4sadqxl2yfzckrv.jpg)" }}><div style={{ backgroundColor: "rgba(0,0,0,.38)", height: "100%" }}><div className="py-5">
                  Những hoạt động nổi bật ở Hà Nội
                </div></div></h2>
                <div className="grid grid-cols-1 max-h-full overflow-auto gap-3 px-2 py-2 bg-white">
                  {DEMO_STAYS.map((item, index) => (
                    <div
                      key={item.id}
                      onMouseEnter={() => { setCurrentHoverID((_) => item.id); setItemIndex(index) }}
                      onMouseLeave={() => setCurrentHoverID((_) => -1)}
                    >
                      <StayCard key={item.id} />
                    </div>

                  ))}
                </div>
              </div>
            </>
          )}

          <div className="fixed xl:sticky top-0  left-0 w-full h-full  rounded-md overflow-hidden">
            {/* <div className="absolute bottom-5 left-3 lg:bottom-auto lg:top-2.5 lg:left-1/2 transform lg:-translate-x-1/2 py-2 px-4 bg-white dark:bg-neutral-800 shadow-xl z-10 rounded-2xl min-w-max">
              <Checkbox
                className="text-xs xl:text-sm"
                name="xx"
                label="Search as I move the map"
              />
            </div> */}

            {/* BELLOW IS MY GOOGLE API KEY -- PLEASE DELETE AND TYPE YOUR API KEY */}
            <GoogleMapReact
              defaultZoom={14}
              defaultCenter={DEMO_STAYS[0].map}
              center={DEMO_STAYS[itemIndex].map}
              bootstrapURLKeys={{
                key: "AIzaSyCkryRJkNkCD_zt05BavQuk-YAWn8os_0A",
              }}
              yesIWantToUseGoogleMapApiInternals
            >
              {DEMO_STAYS.map((item) => (
                <AnyReactComponent
                  isSelected={currentHoverID === item.id}
                  key={item.id}
                  lat={item.map.lat}
                  lng={item.map.lng}
                  listing={item}
                />
              ))}
            </GoogleMapReact>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionGridHasMap;

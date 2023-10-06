import React, { FC, useState } from "react";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import BgGlassmorphism from "components/BgGlassmorphism/BgGlassmorphism";
import SectionGridAuthorBox from "components/SectionGridAuthorBox/SectionGridAuthorBox";
import SectionHeroArchivePage from "components/SectionHeroArchivePage/SectionHeroArchivePage";
import SectionSliderNewCategories from "components/SectionSliderNewCategories/SectionSliderNewCategories";
import SectionSubscribe2 from "components/SectionSubscribe2/SectionSubscribe2";
import SectionGridHasMap from "./SectionGridHasMap";
import { Helmet } from "react-helmet";
import NcImage from "shared/NcImage/NcImage";
import ModalPhotos from "containers/ListingDetailPage/ModalPhotos";

const PHOTOS: string[] = [
  "https://res.klook.com/image/upload/c_crop,w_2712,h_1020,x_1,y_0/q_85,w_1808,h_680/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/destination/lbnwgbgs4eqnzlvozlql.webp",
  "https://res.klook.com/image/upload/w_504,h_336,c_fill/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/destination/ehg84gmmaf7alpexyrgg.webp",
  "https://res.klook.com/image/upload/c_crop,w_2713,h_1020,x_0,y_0/q_85,w_1808,h_680/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/destination/d1ma9zw6xjcoeyb6wasj.jpg",
  "https://res.klook.com/image/upload/c_crop,w_2713,h_1020,x_0,y_0/q_85,w_1808,h_680/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/destination/eqmagiqwhgzrj3bpslzh.jpg",
  "https://lh5.googleusercontent.com/p/AF1QipPZ3bpiwQ7nPnEdqqd-unYLMINwVB3NrsG_THWT=w540-h312-n-k-no",
  "https://lh5.googleusercontent.com/p/AF1QipPFpBhC3_x9-iCqLYvxCAS7Zx5fk_T_9f85N83E=w540-h312-n-k-no",
  "https://lh5.googleusercontent.com/p/AF1QipOCl26ad64r-kpHcqMJFbRAoy8rt_OdM5hGDkaf=w540-h312-n-k-no",
  "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcR6-3kuqWMN3lYTEs8MGErUpOknu9CAoL7ilsoEn_1rpLSP0wYkYGrc69r2iF7M1acbLJOe3pEFbcWNlKaRZWjCI82ZBwxd",
  "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcR3tZ5orSeU472dgG741k0H4HZSTKOrNXGk9DrGGPaF37M9c5qkX42TyJSwzuP3qhJQfIf2gP4VDYJJYgrXBiEggjg8x7Sz",
];
export interface ListingStayMapPageProps {
  className?: string;
}

const ListingStayMapPage: FC<ListingStayMapPageProps> = ({
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openFocusIndex, setOpenFocusIndex] = useState(0);
  const handleOpenModal = (index: number) => {
    setIsOpen(true);
    setOpenFocusIndex(index);
  };
  const handleCloseModal = () => setIsOpen(false);
  return (
    <div
      className={`nc-ListingStayMapPage relative ${className}`}
      data-nc-id="ListingStayMapPage"
    >
      <Helmet>
        <title>Du lịch Hà Nội - Khám phá các điểm tham quan và hoạt động 2023</title>
      </Helmet>
      <BgGlassmorphism />

      <>
        <header className="container  rounded-md sm:rounded-xl">
          <div className="relative grid grid-cols-3 sm:grid-cols-5 gap-1 sm:gap-2">
            <div
              className="col-span-2 sm:col-span-4 row-span-3 sm:row-span-2 relative rounded-md sm:rounded-xl overflow-hidden cursor-pointer"
              onClick={() => handleOpenModal(0)}
            >
              <NcImage
                before={true}
                containerClassName="absolute inset-0"
                className="object-cover w-full h-full rounded-md sm:rounded-xl"
                src={PHOTOS[0]}
              />
              <div className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity"></div>
            </div>
            {PHOTOS.filter((_, i) => i >= 1 && i < 3).map((item, index) => (
              <div
                key={index}
                className={`relative rounded-md sm:rounded-xl overflow-hidden ${index >= 3 ? "hidden sm:block" : ""
                  }`}
              >
                <NcImage
                  containerClassName="aspect-w-4 aspect-h-3 sm:aspect-w-6 sm:aspect-h-5"
                  className="object-cover w-full h-full rounded-md sm:rounded-xl "
                  src={item || ""}
                />

                {/* OVERLAY */}
                <div
                  className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
                  onClick={() => handleOpenModal(index + 1)}
                />
              </div>
            ))}
            <div className="absolute hidden md:block left-10 top-10 px-4 py-2 rounded-xl text-neutral-50 z-10"><h1 className="font-medium text-4xl mb-3">Hà Nội</h1> <div>Khám phá điểm vui chơi, ưu đãi, kinh nghiệm du lịch Hà Nội</div></div>

            <div
              className="absolute hidden  md:flex md:items-center md:justify-center left-3 bottom-3 px-4 py-2 rounded-xl bg-neutral-100 text-neutral-500 cursor-pointer hover:bg-neutral-200 z-10"
              onClick={() => handleOpenModal(0)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
              <span className="ml-2 text-neutral-800 text-sm font-medium">
                Thư viện ảnh
              </span>
            </div>
          </div>
        </header>
        {/* MODAL PHOTOS */}
        <ModalPhotos
          imgs={PHOTOS}
          isOpen={isOpen}
          onClose={handleCloseModal}
          initFocus={openFocusIndex}
          uniqueClassName="nc-ListingStayDetailPage-modalPhotos"
        />
      </>

      {/* SECTION */}
      <div className="container pb-24 mt-11 lg:pb-28 ">
        <SectionGridHasMap />
      </div>

      <div className="container overflow-hidden">
        {/* SECTION 1 */}
        <div className="relative py-16">
          <BackgroundSection />
          <SectionSliderNewCategories
            heading="Explore by types of stays"
            subHeading="Explore houses based on 10 types of stays"
            categoryCardType="card5"
            itemPerRow={5}
            sliderStyle="style2"
            uniqueClassName="ListingStayMapPage"
          />
        </div>

        {/* SECTION */}
        <SectionSubscribe2 className="py-24 lg:py-28" />

        {/* SECTION */}
        <div className="relative py-16 mb-24 lg:mb-28">
          <BackgroundSection className="bg-orange-50 dark:bg-black dark:bg-opacity-20 " />
          <SectionGridAuthorBox />
        </div>
      </div>
    </div>
  );
};

export default ListingStayMapPage;

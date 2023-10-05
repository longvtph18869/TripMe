import SectionHero from "components/SectionHero/SectionHero";
import SectionSliderNewCategories from "components/SectionSliderNewCategories/SectionSliderNewCategories";
import React from "react";
import SectionSubscribe2 from "components/SectionSubscribe2/SectionSubscribe2";
import SectionOurFeatures from "components/SectionOurFeatures/SectionOurFeatures";
import SectionGridFeaturePlaces from "./SectionGridFeaturePlaces";
import SectionHowItWork from "components/SectionHowItWork/SectionHowItWork";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import BgGlassmorphism from "components/BgGlassmorphism/BgGlassmorphism";
import { TaxonomyType } from "data/types";
import SectionGridAuthorBox from "components/SectionGridAuthorBox/SectionGridAuthorBox";
import SectionGridCategoryBox from "components/SectionGridCategoryBox/SectionGridCategoryBox";
import SectionBecomeAnAuthor from "components/SectionBecomeAnAuthor/SectionBecomeAnAuthor";
import SectionVideos from "./SectionVideos";
import SectionClientSay from "components/SectionClientSay/SectionClientSay";

const DEMO_CATS: TaxonomyType[] = [
  {
    id: "1",
    href: "/city/hanoi",
    name: "Hà nội",
    taxonomy: "category",
    count: 245,
    thumbnail:
      "https://vcdn1-dulich.vnecdn.net/2022/05/11/hoan-kiem-lake-7673-1613972680-1508-1652253984.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=2wB1cBTUcNKuk68nrG6LMQ",
  },
  {
    id: "2",
    href: "/city/hanoi",
    name: "Đà lạt",
    taxonomy: "category",
    count: 20,
    thumbnail:
      "https://images2.thanhnien.vn/528068263637045248/2023/6/21/h2-1687347783328584450748.jpg",
  },
  {
    id: "3",
    href: "/city/hanoi",
    name: "Sapa",
    taxonomy: "category",
    count: 45,
    thumbnail:
      "https://vcdn1-dulich.vnecdn.net/2022/04/18/dulichSaPa-1650268886-1480-1650277620.png?w=0&h=0&q=100&dpr=2&fit=crop&s=JTUw8njZ_Glkqf1itzjObg",
  },
  {
    id: "4",
    href: "/city/hanoi",
    name: "Hạ Long",
    taxonomy: "category",
    count: 245,
    thumbnail:
      "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcRI8Gvcsg47HzJ627VmWJnWHLV_93PSs2xMcE2u9tI2fo4kkqjqROEd5yD861LXMTKUcw4mHCGxLSXN5xAj74BDHp0KeCqT",
  },
  {
    id: "5",
    href: "/city/hanoi",
    name: "Phú quốc",
    taxonomy: "category",
    count: 20,
    thumbnail:
      "https://lh5.googleusercontent.com/p/AF1QipPRSeurs7ihl5advBN4MRgMRGlDIlMYXoOIuP74=w548-h318-n-k-no",
  },
  {
    id: "6",
    href: "/city/hanoi",
    name: "Đà Nẵng",
    taxonomy: "category",
    count: 45,
    thumbnail:
      "https://lh5.googleusercontent.com/p/AF1QipOHiiMrNSKmt9A1JxBNQiJy3JNE8N19G0Ng5SFH=w548-h318-n-k-no",
  },
  {
    id: "7",
    href: "/city/hanoi",
    name: "Huế",
    taxonomy: "category",
    count: 45,
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRr36oa8IHhvrHUCkKF7Xm0OmSkup1nOGHKpixqLggT0vseabNAhSm6-ZtXc0OTlMj0TFZ3GmdqY90-meeoG_PqXUFvl2br",
  },
  {
    id: "8",
    href: "/city/hanoi",
    name: "Ninh Bình",
    taxonomy: "category",
    count: 45,
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRQm5ffdvMXJefkwTX_H0yjmE7wPZLhAbWXD0B6sCmtKhQD_GNazezM38gQcbHE9McQlt1wPrZApjtHz0IMJqgSBv2kreGg",
  },
];

const DEMO_CATS_2: TaxonomyType[] = [
  {
    id: "1",
    href: "/city/hanoi",
    name: "Enjoy the great cold",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/5764100/pexels-photo-5764100.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
  {
    id: "222",
    href: "/city/hanoi",
    name: "Sleep in a floating way",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/2869499/pexels-photo-2869499.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "3",
    href: "/city/hanoi",
    name: "In the billionaire's house",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/7031413/pexels-photo-7031413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "4",
    href: "/city/hanoi",
    name: "Cool in the deep forest",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/247532/pexels-photo-247532.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "5",
    href: "/city/hanoi",
    name: "In the billionaire's house",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/7031413/pexels-photo-7031413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
];

function PageHome() {
  return (
    <div className="nc-PageHome relative overflow-hidden">
      {/* GLASSMOPHIN */}
      <BgGlassmorphism />

      <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
        {/* SECTION HERO */}
        <SectionHero className="pt-10 lg:pt-16 lg:pb-8" />

        {/* SECTION 1 */}
        <SectionSliderNewCategories
          categories={DEMO_CATS}
          uniqueClassName="PageHome_s1"
        />

        {/* SECTION2 */}
        <SectionOurFeatures />

        {/* SECTION */}
        <div className="relative py-16">
          <BackgroundSection />
          <SectionGridFeaturePlaces />
        </div>

        {/* SECTION */}
        <SectionHowItWork />

        {/* SECTION 1 */}
        <div className="relative py-16">
          <BackgroundSection className="bg-orange-50 dark:bg-black dark:bg-opacity-20 " />
          <SectionSliderNewCategories
            categories={DEMO_CATS_2}
            categoryCardType="card4"
            itemPerRow={4}
            heading="Suggestions for discovery"
            subHeading="Popular places to stay that Chisfis recommends for you"
            sliderStyle="style2"
            uniqueClassName="PageHome_s2"
          />
        </div>

        {/* SECTION */}
        <SectionSubscribe2 />

        {/* SECTION */}
        <div className="relative py-16">
          <BackgroundSection className="bg-orange-50 dark:bg-black dark:bg-opacity-20 " />
          <SectionGridAuthorBox />
        </div>

        {/* SECTION */}
        <SectionGridCategoryBox />

        {/* SECTION */}
        <div className="relative py-16">
          <BackgroundSection />
          <SectionBecomeAnAuthor />
        </div>

        {/* SECTION 1 */}
        <SectionSliderNewCategories
          heading="Explore by types of stays"
          subHeading="Explore houses based on 10 types of stays"
          categoryCardType="card5"
          itemPerRow={5}
          uniqueClassName="PageHome_s3"
        />

        {/* SECTION */}
        <SectionVideos />

        {/* SECTION */}
        <div className="relative py-16">
          <BackgroundSection />
          <SectionClientSay uniqueClassName="PageHome_" />
        </div>
      </div>
    </div>
  );
}

export default PageHome;

import React, { FC } from "react";
import Logo from "shared/Logo/Logo";
import Navigation from "shared/Navigation/Navigation";
import SearchDropdown from "./SearchDropdown";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import MenuBar from "shared/MenuBar/MenuBar";
import SwitchDarkMode from "shared/SwitchDarkMode/SwitchDarkMode";
import HeroSearchForm2MobileFactory from "components/HeroSearchForm2Mobile/HeroSearchForm2MobileFactory";
import Button from "shared/Button/Button";
import LangDropdown from "./LangDropdown";
import CurrencyDropdown from "./CurrencyDropdown";

export interface MainNav1Props {
  className?: string;
}

const MainNav1: FC<MainNav1Props> = ({ className = "" }) => {
  return (
    <div className={`nc-MainNav1 relative z-10 ${className}`} style={{ "borderBottom": "1px solid #eee" }}>
      <div className="px-4 lg:container py-2 lg:py-2 relative flex justify-between items-center">
        <div className="hidden md:flex justify-start flex-1 items-center space-x-4 sm:space-x-10">
          <Logo />

          <form style={{width: "500px", marginLeft:"50px"}}>
            <div className="flex">
              <button className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-transparent dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-transparent dark:text-white dark:border-gray-600" type="button">All categories <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
              </svg></button>
              <div className="relative w-full">
                <input style={{borderRadius:"0", borderTopRightRadius:"10px", borderBottomRightRadius:"10px"}} type="search" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-orange-400 focus:border-orange-400 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-orange-400" placeholder="Tìm theo điểm đến, hoạt động..." />
                <button type="button" className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-orange-400 rounded-r-lg border border-orange-400 hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-transparent dark:ring-orange-400 dark:hover:ring-orange-400 dark:focus:ring-orange-400">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                  {/* <span className="sr-only">Search</span> */}
                </button>
              </div>
            </div>
          </form>

        </div>

        {/* <div className="lg:hidden flex-[3] max-w-lg !mx-auto md:px-3">
          <HeroSearchForm2MobileFactory />
        </div> */}

        <div className="hidden md:flex flex-shrink-0 items-center justify-end flex-1 lg:flex-none text-neutral-700 dark:text-neutral-100">
          <div className="hidden xl:flex items-center space-x-0.5">
            <SwitchDarkMode />
            {/* <SearchDropdown /> */}
            <LangDropdown />
            <CurrencyDropdown />
            <Button className="focus:ring-transparent" >Trợ giúp</Button>
            <Button className="focus:ring-transparent"  >Xem gần đây</Button>
            {/* <div className="px-1" /> */}
            <Button className="focus:ring-transparent" href="/login" >Đăng ký</Button>
            <ButtonPrimary href="/login">Đăng nhập</ButtonPrimary>
          </div>
          <div className="flex xl:hidden items-center">
            <SwitchDarkMode />
            <div className="px-0.5" />
            <MenuBar />
          </div>
        </div>
      </div>
      <div className="px-4 lg:container py-2 lg:py-2 relative flex justify-between items-center">
            <div className=" md:flex justify-start flex-1 items-center space-x-4 sm:space-x-10"><Navigation />
            </div></div>
    </div>
  );
};

export default MainNav1;

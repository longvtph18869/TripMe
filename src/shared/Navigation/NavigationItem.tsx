import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import React, { FC, Fragment, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import NcImage from "shared/NcImage/NcImage";

// <--- NavItemType --->
export interface MegamenuItem {
  id: string;
  image?: string;
  title: string;
  items: NavItemType[];
  icon?: string
}
export interface NavItemType {
  id: string;
  name: string;
  isNew?: boolean;
  href: string;
  targetBlank?: boolean;
  children?: NavItemType[];
  megaMenu?: MegamenuItem[];
  icon?: boolean;
  type?: "dropdown" | "megaMenu" | "none";
}

export interface NavigationItemProps {
  menuItem: NavItemType;
}

type NavigationItemWithRouterProps = NavigationItemProps;

const NavigationItem: FC<NavigationItemWithRouterProps> = ({ menuItem }) => {
  const [menuCurrentHovers, setMenuCurrentHovers] = useState<string[]>([]);

  // CLOSE ALL MENU OPENING WHEN CHANGE HISTORY
  const locationPathName = useLocation().pathname;
  useEffect(() => {
    setMenuCurrentHovers([]);
  }, [locationPathName]);

  const onMouseEnterMenu = (id: string) => {
    setMenuCurrentHovers((state) => [...state, id]);
  };

  const onMouseLeaveMenu = (id: string) => {
    setMenuCurrentHovers((state) => {
      return state.filter((item, index) => {
        return item !== id && index < state.indexOf(id);
      });
    });
  };

  // ===================== MENU MEGAMENU =====================
  const renderMegaMenu = (menu: NavItemType) => {
    const isHover = menuCurrentHovers.includes(menu.id);

    const isFull = menu.megaMenu && menu.megaMenu?.length > 3;
    const classPopover = isFull
      ? "menu-megamenu--large"
      : "menu-megamenu--small relative";
    const classPanel = isFull ? "left-0" : "-translate-x-1/2 left-1/2";

    return (
      <Popover
        as="li"
        className={`menu-item menu-megamenu ${classPopover}`}
        onMouseEnter={() => onMouseEnterMenu(menu.id)}
        onMouseLeave={() => onMouseLeaveMenu(menu.id)}
      >
        {() => (
          <>
            <div>{renderMainItem(menu)}</div>
            <Transition
              as={Fragment}
              show={isHover}
              enter="transition ease-out duration-150"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel
                static
                className={`nc-will-change-transform sub-menu absolute transform z-10 w-screen max-w-sm px-4 pt-3 sm:px-0 lg:max-w-max ${classPanel}`}
              >
                <div style={{ maxHeight: "340px" }} className="overflow-auto rounded-lg shadow-lg ring-1 ring-black dark:ring-white ring-opacity-5 dark:ring-opacity-10 text-sm">
                  <div
                    className={`relative bg-white dark:bg-neutral-900 px-3 py-6 grid gap-1 grid-cols-5`}
                  >
                    {menu.megaMenu?.map((item) => (
                      <> {item.image && <div key={item.id}>
                        <div className="px-2">
                          <NcImage
                            containerClassName="w-36 h-24 rounded-lg overflow-hidden relative flex"
                            src={item.image}
                          />
                        </div>
                        <p className="font-medium text-neutral-900 dark:text-neutral-200 px-2 my-1">
                          {item.title}
                        </p>
                        {/* <ul className="grid space-y-1">
                          {item.items.map(renderMegaMenuNavlink)}
                        </ul> */}
                      </div>}
                        {!item.image && <><div><NavLink
                          end
                          rel="noopener noreferrer"
                          className={({ isActive }) =>
                            `inline-flex text-base items-center py-1 px-2 rounded font-normal text-neutral-6000 dark:text-neutral-300 `
                          }
                          to={item.title || ""}
                        >
                          <img className="mr-2" width={16} height={16} src={item.icon} alt="" />
                          <p className="font-medium">{item.title}</p>
                        </NavLink>
                          <ul className="grid space-y-1" style={{maxWidth:"240px"}}>
                            <li className="ml-4 text-base items-center py-1 px-2 rounded font-normal text-neutral-6000 dark:text-neutral-300 ">{item.items.map(renderMegaMenuNavlink)}</li>
                          </ul> </div></>}
                      </>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    );
  };

  const renderMegaMenuNavlink = (item: NavItemType) => {
    return (
      <li key={item.id}>
        <NavLink
          end
          target={item.targetBlank ? "_blank" : undefined}
          rel="noopener noreferrer"
          className={({ isActive }) =>
            `inline-flex items-center py-1 px-2 rounded hover:text-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-200 font-normal text-neutral-6000 dark:text-neutral-300 `
          }
          to={item.href || ""}
        >
          {item.name}
        </NavLink>
      </li>
    );
  };

  // ===================== MENU DROPDOW =====================
  const renderDropdownMenu = (menuDropdown: NavItemType) => {
    const isHover = menuCurrentHovers.includes(menuDropdown.id);
    return (
      <Popover
        as="li"
        className={`menu-item menu-dropdown relative ${menuDropdown.isNew ? "menuIsNew_lv1" : ""
          }`}
        onMouseEnter={() => onMouseEnterMenu(menuDropdown.id)}
        onMouseLeave={() => onMouseLeaveMenu(menuDropdown.id)}
      >
        {() => (
          <>
            <div>{renderMainItem(menuDropdown)}</div>
            <Transition
              as={Fragment}
              show={isHover}
              enter="transition ease-out duration-150 "
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel
                static
                className="sub-menu nc-will-change-transform absolute transform z-10 w-56 pt-3 left-0"
              >
                <ul className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 dark:ring-white dark:ring-opacity-10 text-sm relative bg-white dark:bg-neutral-900 py-4 grid space-y-1">
                  {menuDropdown.children?.map((i) => {
                    if (i.type) {
                      return renderDropdownMenuNavlinkHasChild(i);
                    } else {
                      return (
                        <li
                          key={i.id}
                          className={`px-2 ${i.isNew ? "menuIsNew" : ""}`}
                        >
                          {renderDropdownMenuNavlink(i)}
                        </li>
                      );
                    }
                  })}
                </ul>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    );
  };

  const renderDropdownMenuNavlinkHasChild = (item: NavItemType) => {
    const isHover = menuCurrentHovers.includes(item.id);
    return (
      <Popover
        as="li"
        key={item.id}
        className="menu-item menu-dropdown relative px-2"
        onMouseEnter={() => onMouseEnterMenu(item.id)}
        onMouseLeave={() => onMouseLeaveMenu(item.id)}
      >
        {() => (
          <>
            <div>{renderDropdownMenuNavlink(item)}</div>
            <Transition
              as={Fragment}
              show={isHover}
              enter="transition ease-out duration-150"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel
                static
                className="sub-menu absolute z-10 w-56 left-full pl-2 top-0"
              >
                <ul className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 dark:ring-white dark:ring-opacity-10 text-sm relative bg-white dark:bg-neutral-900 py-4 grid space-y-1">
                  {item.children?.map((i) => {
                    if (i.type) {
                      return renderDropdownMenuNavlinkHasChild(i);
                    } else {
                      return (
                        <li key={i.id} className="px-2">
                          {renderDropdownMenuNavlink(i)}
                        </li>
                      );
                    }
                  })}
                </ul>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    );
  };

  const renderDropdownMenuNavlink = (item: NavItemType) => {
    return (
      <NavLink
        end
        target={item.targetBlank ? "_blank" : undefined}
        rel="noopener noreferrer"
        className={({ isActive }) =>
          `flex items-center font-normal text-neutral-6000 dark:text-neutral-300 py-2 px-4 rounded-md hover:text-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-200 ${isActive ? "!font-medium  dark:!text-neutral-100" : ""
          }`
        }
        to={item.href || ""}
      >
        <p className="inline-flex text-base items-center px-2 rounded font-normal text-neutral-6000 dark:text-neutral-300 ">{item.name}</p>
        {item.type && (
          <ChevronDownIcon
            className="ml-2 h-4 w-4 text-neutral-500"
            aria-hidden="true"
          />
        )}
      </NavLink>
    );
  };

  // ===================== MENU MAIN MENU =====================
  const renderMainItem = (item: NavItemType) => {
    return (
      <NavLink
        end
        target={item.targetBlank ? "_blank" : undefined}
        rel="noopener noreferrer"
        className={({ isActive }) =>
          `inline-flex items-center text-md xl:text-md font-medium text-neutral-700 dark:text-neutral-300 py-1 px-4 xl:px-5 rounded-full hover:text-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-200 
          `
          // ${
          //   isActive
          //     ? "!font-semibold !text-neutral-900 bg-neutral-100 dark:bg-neutral-800 dark:!text-neutral-100"
          //     : ""
          // }
        }
        to={item.href || "/"}
      >
        {item.icon && <svg className="mr-1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M12.51 8.935a2.507 2.507 0 11-5.014 0 2.507 2.507 0 015.013 0zm-1.4 0a1.107 1.107 0 11-2.214 0 1.107 1.107 0 012.213 0z" clip-rule="evenodd"></path> <path fill-rule="evenodd" d="M17 9c0 4.26-4.321 7.563-6.173 8.783a1.492 1.492 0 01-1.654 0C7.321 16.563 3 13.26 3 9a7 7 0 0114 0zm-1.4 0c0 1.65-.843 3.224-2.05 4.613-1.194 1.376-2.62 2.426-3.494 3a.1.1 0 01-.056.02.1.1 0 01-.056-.02c-.873-.574-2.3-1.624-3.495-3C5.243 12.224 4.4 10.65 4.4 9a5.6 5.6 0 0111.2 0z" clip-rule="evenodd"></path></svg>}
        {item.name}
        {/* {item.type && (
          <ChevronDownIcon
            className="ml-1 -mr-1 h-4 w-4 text-neutral-400"
            aria-hidden="true"
          />
        )} */}
      </NavLink>
    );
  };

  switch (menuItem.type) {
    case "megaMenu":
      return renderMegaMenu(menuItem);
    case "dropdown":
      return renderDropdownMenu(menuItem);
    default:
      return <li className="menu-item">{renderMainItem(menuItem)}</li>;
  }
};
// Your component own properties

export default NavigationItem;

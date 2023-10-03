import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { FC, Fragment } from "react";

export const headerLanguage = [
  {
    id: "English",
    name: "English",
    description: "United State",
    href: "##",
    active: true,
  },
  {
    id: "Vietnamese",
    name: "Tiếng việt",
    href: "",
  },
  {
    id: "Francais",
    name: "Francais",
    description: "Belgique",
    href: "##",
  },
  {
    id: "Francais",
    name: "Francais",
    description: "Canada",
    href: "",
  },
  {
    id: "Francais",
    name: "Francais",
    description: "Belgique",
    href: "##",
  },
  {
    id: "Francais",
    name: "Francais",
    description: "Canada",
    href: "##",
  },
  {
    id: "English",
    name: "English",
    description: "United State",
    href: "##",
    active: true,
  },
  {
    id: "Vietnamese",
    name: "Tiếng việt",
    href: "",
  },
  {
    id: "Francais",
    name: "Francais",
    description: "Belgique",
    href: "##",
  },
  {
    id: "Francais",
    name: "Francais",
    description: "Canada",
    href: "",
  },
  {
    id: "Francais",
    name: "Francais",
    description: "Belgique",
    href: "##",
  },
  {
    id: "Francais",
    name: "Francais",
    description: "Canada",
    href: "##",
  },
];

interface LangDropdownProps {
  panelClassName?: string;
}

const LangDropdown: FC<LangDropdownProps> = ({
  panelClassName = "z-10 w-screen max-w-[500px] px-4 mt-4 sm:px-0",
}) => {
  return (
    <div className="LangDropdown">
      <Popover className="relative">
        {({ open, close }) => (
          <>
            <Popover.Button
              className={`
                ${open ? "" : "text-opacity-80"}
             group px-3 py-1.5 border-neutral-300 hover:border-neutral-400 dark:border-neutral-700 rounded-full inline-flex items-center text-sm text-gray-700 dark:text-neutral-300 font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <span className="ml-2 select-none"><svg data-v-2a94e252="" viewBox="0 0 60 40" width="22" height="22"><path fill="#DA251D" d="M0 0h60v40H0z"></path><path fill="#FF0" d="M18.6 15.6h22.8L22.9 29 30 7.3 37.1 29"></path></svg></span>
              <ChevronDownIcon
                className={`${open ? "-rotate-180" : "text-opacity-70"}
                  ml-1 h-4 w-4  group-hover:text-opacity-80 transition ease-in-out duration-150`}
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className={`absolute ${panelClassName} bg-white`} style={{right:"-250px"}}>
                <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-black ring-opacity-5 py-2 ">
                  <div className="px-5 py-2 text-sm font-medium"><span >Chọn ngôn ngữ</span></div>
                  <div className="relative grid gap-8 bg-white dark:bg-neutral-800 p-7 lg:grid-cols-4">
                    {headerLanguage.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        onClick={() => close()}
                        className={`flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50 ${item.active
                          ? "bg-gray-100 dark:bg-neutral-700"
                          : "opacity-80"
                          }`}
                      >
                        <div className="">
                          <p className="text-sm font-medium ">{item.name}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
};
export default LangDropdown;

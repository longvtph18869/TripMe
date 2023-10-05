import React, { HTMLAttributes, ReactNode } from "react";
import ButtonSecondary from "shared/Button/ButtonSecondary";
import NextPrev from "shared/NextPrev/NextPrev";

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  fontClass?: string;
  desc?: ReactNode;
  hasNextPrev?: boolean;
  isCenter?: boolean;
}

const Heading: React.FC<HeadingProps> = ({
  children,
  desc = "Popular places to stay that Chisfis recommends for you",
  className = "mb-5 lg:mb-7 text-neutral-900 dark:text-neutral-50",
  isCenter = false,
  hasNextPrev = false,
  ...args
}) => {
  return (
    <div
      className={`nc-Section-Heading relative flex flex-col sm:flex-row sm:items-end justify-between ${className}`}
    >
      <div
        className={
          isCenter ? "text-center w-full max-w-2xl mx-auto" : "max-w-2xl"
        }
      >
        <h2 className={`text-xl md:text-2xl font-semibold`} {...args}>
          {children || `Section Heading`}
        </h2>
        {/* {desc && (
          <span className="mt-2 md:mt-3 font-normal block text-base sm:text-xl text-neutral-500 dark:text-neutral-400">
            {desc}
          </span>
        )} */}
      </div>
      <span className="hidden sm:block flex-shrink-0">
          <ButtonSecondary className="!leading-none">
            <span>View all</span>
            <i className="ml-3 las la-arrow-right text-xl"></i>
          </ButtonSecondary>
        </span>
    </div>
  );
};

export default Heading;

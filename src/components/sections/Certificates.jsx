import React from "react";
import user_info from "../../data/info_en.js";
import { FcGoogle } from "react-icons/fc";
import { PiCertificateFill } from "react-icons/pi";
import { SiHackerrank, SiIbm } from "react-icons/si";
const Certificates = () => {
  return (
    <section>
      {" "}
      {/* =========== CERTIFICATES TITLE =========== */}
      <h4 className="text-4xl  dark:text-white mt-6 font-bold flex gap-2  justify-center items-center">
        <PiCertificateFill className="text-4xl  text-red-800 dark:text-red-500" />
        Certificates
      </h4>
      <div
        data-hs-carousel='{"loadingClasses": "opacity-0"}'
        className="relative mt-4 w-[60%] m-auto"
      >
        <div className="hs-carousel relative overflow-hidden w-full h-48 bg-white dark:bg-gray-800 rounded-lg">
          <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
            {/* =========== CERTIFICATES LIST =========== */}
            {user_info.certificates.map((cert, index) => {
              return (
                <div className="hs-carousel-slide relative" key={index}>
                  {cert.icon === "ibm" ? (
                    <SiIbm className="text-blue-500 absolute right-5 top-0 text-5xl" />
                  ) : cert.icon === "google" ? (
                    <FcGoogle className="text-blue-500 absolute right-5 top-3 text-3xl" />
                  ) : (
                    <SiHackerrank className="text-green-500 absolute right-5 top-3 text-3xl" />
                  )}

                  <div className="flex justify-center items-center h-full bg-gray-100 p-6 dark:bg-neutral-900">
                    <div className="hs-tooltip [--placement:bottom] inline-block">
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noreferrer"
                        className="hs-tooltip-toggle text-center text-gray-800 dark:text-white hover:text-red-800 hover:dark:text-red-500"
                      >
                        {/* =========== CERTIFICATE NAME =========== */}
                        <p className=" transition duration-700 px-6 font-bold">
                          {cert.title}
                        </p>
                        {/* =========== CERTIFICATE DESCRIPTION =========== */}
                        <p className=" transition duration-700 px-6 text-sm">
                          {cert.description}
                        </p>
                      </a>

                      {/* =========== TOOLTIP TEXT =========== */}
                      <span
                        className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-white border dark:border-zinc-800 dark:bg-zinc-950 text-xs font-medium dark:text-white rounded shadow-sm"
                        role="tooltip"
                      >
                        Open Certificate
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <button
          type="button"
          className="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 rounded-s-lg dark:text-white dark:hover:bg-white/10"
        >
          <span className="text-2xl" aria-hidden="true">
            <svg
              className="flex-shrink-0 size-5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6"></path>
            </svg>
          </span>
          <span className="sr-only">Previous</span>
        </button>
        <button
          type="button"
          className="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 rounded-e-lg dark:text-white dark:hover:bg-white/10"
        >
          <span className="sr-only">Next</span>
          <span className="text-2xl" aria-hidden="true">
            <svg
              className="flex-shrink-0 size-5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </span>
        </button>

        {/* =========== CAROUSEL PAGINATION =========== */}
        <div className="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2">
          {user_info.certificates.map((cert, index) => {
            return (
              <span
                className="hs-carousel-active:bg-red-700 hs-carousel-active:border-red-700 size-3 border border-gray-400 rounded-full cursor-pointer dark:border-neutral-600 dark:hs-carousel-active:bg-red-500 dark:hs-carousel-active:border-red-500"
                key={index}
              ></span>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certificates;

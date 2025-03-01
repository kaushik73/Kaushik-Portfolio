// ================= Certificates Component =====================
import React from "react";
import user_info from "../../data/info_en.js";
import { FcGoogle } from "react-icons/fc";
import { PiCertificateFill } from "react-icons/pi";
import { SiHackerrank, SiIbm } from "react-icons/si";

const Certificates = () => {
  return (
    <section className="py-8">
      <h4 className="text-4xl font-bold flex gap-2 justify-center items-center text-text">
        <PiCertificateFill className="text-primary" />
        Certificates
      </h4>
      <div className="relative mt-6 w-[60%] m-auto">
        <div className="hs-carousel relative overflow-hidden w-full h-48 bg-secondary rounded-lg">
          <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700">
            {user_info.certificates.map((cert, index) => (
              <div className="hs-carousel-slide relative" key={index}>
                {cert.icon === "ibm" ? (
                  <SiIbm className="text-blue-500 absolute right-5 top-0 text-5xl" />
                ) : cert.icon === "google" ? (
                  <FcGoogle className="absolute right-5 top-3 text-3xl" />
                ) : (
                  <SiHackerrank className="text-green-500 absolute right-5 top-3 text-3xl" />
                )}
                <div className="flex justify-center items-center h-full bg-secondary p-6">
                  <div className="hs-tooltip [--placement:bottom] inline-block">
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noreferrer"
                      className="hs-tooltip-toggle text-center text-text hover:text-primary"
                    >
                      <p className="transition duration-700 px-6 font-bold">
                        {cert.title}
                      </p>
                      <p className="transition duration-700 px-6 text-sm">
                        {cert.description}
                      </p>
                    </a>
                    <span
                      className="hs-tooltip-content opacity-0 transition-opacity inline-block absolute z-10 py-1 px-2 bg-primary text-xs font-medium text-white rounded shadow-sm"
                      role="tooltip"
                    >
                      Open Certificate
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="hs-carousel-prev absolute inset-y-0 start-0 flex justify-center items-center w-[46px] h-full text-text hover:bg-primary/10 rounded-s-lg"
        >
          <span className="text-2xl" aria-hidden="true">
            &lt;
          </span>
        </button>
        <button
          type="button"
          className="hs-carousel-next absolute inset-y-0 end-0 flex justify-center items-center w-[46px] h-full text-text hover:bg-primary/10 rounded-e-lg"
        >
          <span className="text-2xl" aria-hidden="true">
            &gt;
          </span>
        </button>

        <div className="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2">
          {user_info.certificates.map((_, index) => (
            <span
              className="hs-carousel-active:bg-primary hs-carousel-active:border-primary size-3 border border-text rounded-full cursor-pointer"
              key={index}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;

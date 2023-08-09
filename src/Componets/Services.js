import React from 'react'

export default function Services() {
  return (
    <div className="">
      <div className="py-16 bg-stone-200 h-screen">
        <div className="container m-auto px-6 text-black-600 md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:5/12 lg:w-5/12 py-8">
              <img
                src="/Images/bg2.png"
                alt="Not found"
                loading="lazy"
                className="rounded shadow-md"
                width=""
                height=""
              />
            </div>
            <div className="md:7/12 lg:w-6/12">
              <h2 className="text-4xl  text-black-300 text-center font-bold py-10 md:text-4xl">
                Services
              </h2>
              <ul className=" ">
                <li className="text-2xl  text-black-300 text-center py-1">
                  Sentence Case Conversion
                </li>
                <li className="text-2xl  text-black-300 text-center py-1">
                  UpperCas Conversion
                </li>
                <li className="text-2xl  text-black-300 text-center py-1">
                  LowerCase Conversion
                </li>
                <li className="text-2xl  text-black-300 text-center py-1">
                  InveresCase Conversion
                </li>
                <li className="text-2xl  text-black-300 text-center py-2">
                  Provide Image Search
                </li>
              </ul>
              <p className="mt-4 text-gray-600"> </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

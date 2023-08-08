import React from "react";

export default function Textutils() {
  return (
    <div className="">
      <div className="py-16 bg-white">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:5/12 lg:w-5/12">
              <img
                src="/Images/ab.png"
                alt="Not found"
                loading="lazy"
                width=""
                height=""
              />
            </div>
            <div className="md:7/12 lg:w-6/12">
              <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                Accidentally left the caps lock on and typed something, but
                can't be bothered to start again and retype it all?
              </h2>
              <p className="mt-6 text-gray-600">
                A very handy online text tool where you can change between lower
                case and upper case letters, where you can capitalize,
                uncapitalize, convert to mix case and transform your text.
              </p>
              <p className="mt-4 text-gray-600"> </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

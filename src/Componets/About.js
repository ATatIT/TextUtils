export default function About() {
  return (
    <div className="">
      <div className="py-16 bg-stone-200 h-screen">
        <div className="container m-auto px-6 text-black-600 md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:5/12 lg:w-5/12 py-7 ">
              <img
                src="/Images/bg1.png"
                alt="Not found"
                loading="lazy"
                className="rounded-lg shadow-md"
                width=""
                height=""
              />
            </div>
            <div className="md:7/12 lg:w-6/12">
              <h2 className="text-4xl  text-black-300 text-center font-bold py-10 md:text-4xl">
                About
              </h2>
              <p className="mt-6 text-black-600 text-2xl  text-center py-2">
                This is My first React App named Textutils.
              </p>
              <p className="mt-4 text-black-600 text-center"> By Abhishek </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

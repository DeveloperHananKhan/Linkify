import "../index.css";
export const Hero = () => {
  return (
    <>
      <section
        style={{fontFamily: "'Inter', sans-serif",
          background:
            "radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)",
        }}
      >
        <div className="flex flex-col  px-4  mb-10 md:px-8 lg:px-16 ">
          <h1 className="text-3xl text-center  font-bold text-white py-10 md:text-4xl lg:5xl  font-extrabold leading-tight">
            Build stronger digital connections
          </h1>
          <p className="text-base text-center  text-white md:text-lg lg:text-xl">
            Use our URL shortener, QR Codes, and landing pages to engage your
            audience and connect them to the right
            <span className="block text-center   ">
              information. Build, edit, and track everything inside the Bitly
              Connections Platform.
            </span>
          </p>
        </div>

        <div className="w-[80%] mx-auto flex flex-col bg-white border-none rounded-3xl h-[300px] py-3 px-4 md: w-[50%] h-[350px] md:py-4 md:px-4">
          <div className="felx flex-col gap-4 mb-15">
            <h3 className="text-xl text-gray-800 font-bold md:text-2xl lg:text-3xl">
              Shorten a long link
            </h3>
            <p className="text-sm text-gray-800 md:text-base lg:text-lg">
              No credit card required.
            </p>
          </div>
          <div>
            <label className="flex flex-col gap-2 mb-4">
              <p className="text-base font-bold text-gray-800 md:text-lg lg:text-xl">
                Paste your long link here
              </p>
              <input
                className="border border-gray-300 focus:border-3 focus:border-blue-600 outline-none transition-colors duration-300 rounded-lg px-5 py-4 w-full placeholder:text-sm md:placeholder:text-base lg:placeholder:text-lg"
                type="text"
                placeholder="https://example.com/my-long-url"
              />
            </label>
            <button className="w-full md:w-auto bg-blue-600 text-white cursor-pointer border rounded-xl font-bold py-2 px-4 text-sm md:text-base hover:bg-slate-900 transition duration-300 flex items-center justify-center">
              Get Your Link For Free{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 ml-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14M13 6l6 6-6 6"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex flex-col px-3 py-2 mt-10">
          <h3 className="flex flex-col text-white font-bold text-lg mb-6 md:flex-row justify-center md:text-2xl lg:flex-row justify-center text-2xl">
            <span>Sign up for free.</span> <span>Your free plan includes:</span>
          </h3>

          <ul className="flex flex-col gap-5 md:flex-row justify-center ">
            <li className="flex gap-2 text-white">
              <img
                className="alignnone  wp-image-10090"
                src="https://docrdsfx76ssb.cloudfront.net/static/1754590430/pages/wp-content/uploads/2024/03/orange-checkmark.svg"
                alt=""
                width="24"
                height="24"
                role="presentation"
                data-uw-rm-alt="HD"
              />
              <span>5 short links/month</span>
            </li>
            <li className="flex gap-2 text-white">
              <img
                className="alignnone  wp-image-10090"
                src="https://docrdsfx76ssb.cloudfront.net/static/1754590430/pages/wp-content/uploads/2024/03/orange-checkmark.svg"
                alt=""
                width="24"
                height="24"
                role="presentation"
                data-uw-rm-alt="HD"
              />
              <span>3 custom back-halves/month</span>
            </li>
            <li className="flex gap-2 text-white">
              <img
                className="alignnone  wp-image-10090"
                src="https://docrdsfx76ssb.cloudfront.net/static/1754590430/pages/wp-content/uploads/2024/03/orange-checkmark.svg"
                alt=""
                width="24"
                height="24"
                role="presentation"
                data-uw-rm-alt="HD"
              />
              <span>Unlimited link clicks</span>
            </li>
          </ul>
        </div>

        <ul className="grid grid-cols-2 gap-4  py-10 justify-items-center justify-center max-w-4xlmd:flex md:justify-center md:gap-4 lg:flex lg:justify-center lg:gap-4">
          <li>
            <img
              className="w-28 h-12 md:w-40 md:h-16 attachment-full "
              src="https://docrdsfx76ssb.cloudfront.net/static/1754590430/pages/wp-content/uploads/2024/04/curology-3.svg"
              alt="Curology Logo"
              decoding="async"
              data-uw-rm-alt-original="Curology Logo"
              role="img"
              data-uw-rm-alt="ALT"
            />
          </li>
          <li>
            <img
              src="https://docrdsfx76ssb.cloudfront.net/static/1754590430/pages/wp-content/uploads/2024/04/novasol-1.svg"
              className="w-28 h-12 md:w-40 md:h-16 attachment-full "
              alt="Novasol Logo"
              decoding="async"
              data-uw-rm-alt-original="Novasol Logo"
              role="img"
              data-uw-rm-alt="ALT"
            />
          </li>
          <li>
            <img
              src="https://docrdsfx76ssb.cloudfront.net/static/1754590430/pages/wp-content/uploads/2024/04/rad-bikes-3.svg"
              className="w-28 h-12 md:w-40 md:h-16 attachment-full "
              alt="Rad power Bike logo"
              decoding="async"
              data-uw-rm-alt-original="Rad power Bike logo"
              role="img"
              data-uw-rm-alt="ALT"
            />
          </li>
          <li>
            <img
              src="https://docrdsfx76ssb.cloudfront.net/static/1754590430/pages/wp-content/uploads/2024/04/marriott-1.svg"
              className="w-28 h-12 md:w-40 md:h-16 attachment-full "
              alt="Marriot Bonvoy Logo"
              decoding="async"
              loading="lazy"
              data-uw-rm-alt-original="Marriot Bonvoy Logo"
              role="img"
              data-uw-rm-alt="ALT"
            />
          </li>
          <li>
            <img
              src="https://docrdsfx76ssb.cloudfront.net/static/1754590430/pages/wp-content/uploads/2024/04/new-york-times-1.svg"
              className="w-28 h-12 md:w-40 md:h-16 attachment-full "
              alt="The New York Times Logo"
              decoding="async"
              loading="lazy"
              data-uw-rm-alt-original="The New York Times Logo"
              role="img"
              data-uw-rm-alt="ALT"
            />
          </li>
          <li>
            <img
              src="https://docrdsfx76ssb.cloudfront.net/static/1754590430/pages/wp-content/uploads/2024/04/smalls.svg"
              className="w-28 h-12 md:w-40 md:h-16 attachment-full "
              alt="Smalls Logo"
              decoding="async"
              loading="lazy"
              data-uw-rm-alt-original="Smalls Logo"
              role="img"
              data-uw-rm-alt="ALT"
            />
          </li>
        </ul>
        <div>
          <img
            loading="lazy"
            decoding="async"
            className=" w-[80rem]   mx-auto"
            src="https://docrdsfx76ssb.cloudfront.net/static/1754590430/pages/wp-content/uploads/2024/04/footer-img_desktop@2x.png"
            alt="Connections Platform dashboard"
            data-uw-rm-alt-original="Connections Platform dashboard"
            data-uw-rm-alt="ALT"
          />
        </div>
      </section>
    </>
  );
};

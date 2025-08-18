import { useAuthHandlers } from "../backEnd/signIn";
import { useNavigate, Link } from "react-router-dom";

export const SignUp = () => {
  const navigate = useNavigate();
  const { login } = useAuthHandlers();
  return (
    <>
      <section style={{fontFamily: "'Inter', sans-serif"}}>
        <h1
          onClick={() => navigate("/")}
          className="font-bold text-orange-400 cursor-pointer text-4xl py-4 px-4 md:text-3xl lg:text-3xl md:mt-3"
        >
          Linkify
        </h1>
        <div className="flex flex-col  lg:flex-row mx-auto justify-center gap-8 py-10 md:px-8 md:mt-6">
          <div className="flex flex-col items-center w-full max-w-[383px] mx-auto px-4">
            <div className="flex flex-col gap-5 items-center justify-center w-full">
              <h2 className="text-slate-800 font-bold mb-2 text-3xl md:text-3xl">
                Create your account
              </h2>
              <p className="text-slate-800 text-base mb-5">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="cursor-pointer text-blue-500 active:text-blue-800 underline md:hover:text-blue-800"
                >
                  Log in
                </Link>
              </p>

              <button
                onClick={login}
                className="cursor-pointer w-full flex gap-2 items-center justify-center font-semibold text-slate-800 border-2 border-gray-200 rounded-lg px-2 py-2 active:border-gray-300 md:hover:border-gray-300 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                >
                  <path
                    fill="#2A5BD7"
                    d="M15.078 15.625c1.758-1.64 2.54-4.375 2.07-6.992h-6.992v2.89h3.985c-.157.938-.703 1.72-1.485 2.227z"
                  />
                  <path
                    fill="#34A853"
                    d="M3.516 13.32a7.5 7.5 0 0 0 11.562 2.305l-2.422-1.875c-2.07 1.367-5.508.86-6.68-2.344z"
                  />
                  <path
                    fill="#FBBC02"
                    d="M5.975 11.406a4.45 4.45 0 0 1 0-2.851L3.515 6.64c-.9 1.797-1.173 4.336 0 6.68z"
                  />
                  <path
                    fill="#EA4335"
                    d="M5.977 8.555c.859-2.696 4.53-4.258 6.992-1.954l2.148-2.109C12.07 1.562 6.133 1.68 3.516 6.641z"
                  />
                </svg>
                <span>Continue with Google</span>
              </button>
            </div>

            <div className="flex items-center justify-center gap-4 mt-3 w-full">
              <hr className="flex-1 border-t border-gray-300" />
              <h1 className="text-base text-gray-600 md:text-lg">OR</h1>
              <hr className="flex-1 border-t border-gray-300" />
            </div>

            <div className="flex flex-col gap-5 items-center justify-center w-full">
              <label className="flex flex-col gap-1 font-semibold text-slate-800 w-full">
                Email
                <input
                  className="w-full outline-none border-2 border-gray-200 rounded-lg px-2 py-2 active:border-gray-300 md:hover:border-gray-300"
                  type="text"
                />
              </label>
              <label className="flex flex-col gap-1 font-semibold text-slate-800 w-full">
                Password
                <input
                  className="w-full outline-none border-2 border-gray-200 rounded-lg px-2 py-2 active:border-gray-300 md:hover:border-gray-300"
                  type="password"
                />
              </label>

              <button className="cursor-pointer font-bold w-full bg-blue-700 px-4 py-2 text-white border border-white rounded-lg active:bg-blue-800 mt-5 md:hover:bg-blue-800">
                Create free account
              </button>
            </div>

            <p className="text-slate-800 text-center text-[13px] max-w-[383px] mt-5">
              By creating an account, you agree to Linkify{" "}
              <span className="underline cursor-pointer">Terms of Service</span>
              , <span className="underline cursor-pointer">Privacy Policy</span>{" "}
              and{" "}
              <span className="underline cursor-pointer">
                Acceptable Use Policy
              </span>
              .
            </p>
          </div>

          <aside className="hidden lg:block">
           
            <img
              src="https://d1ayxb9ooonjts.cloudfront.net/web_sign_up_sign_in/e187c952-196b-46c8-82d6-b4c30450dc4e/images/connections_platform_product.png"
              alt=""
              role="presentation"
              className="md:w-[500px] md:h-[330px]"
            />
            <p className="font-bold text-slate-800 md:text-lg text-center">
              Power your links, QR Codes, and landing pages with Linkify <br />
              <span className="">Connections Platform</span>
            </p>
          </aside>
        </div>
      </section>
    </>
  );
};

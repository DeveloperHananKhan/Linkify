import { useNavigate } from "react-router-dom";
import { useLinkStore } from "../store/useLink";
import { useState } from "react";
import { useUser } from "../store/userStore";
import { useNavStore } from "../store/acriveNav";
export const UserHome = () => {
  const [url, setUrl] = useState("");
  const { createLink,links } = useLinkStore();
  const { user } = useUser();
  const { setNavActive } = useNavStore();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const isValidUrl = (string: string) => {
    try {
      new URL(string);
      return true;
    } catch {
      return false;
    }
  };
  const handleCreate = async () => {
      if (!url.trim()) {
    setError("Please enter a URL");
    return;
  }
    if (!user) return;

    if (!isValidUrl(url)) {
      setError("We'll need a valid URL, like yourbrnd.co/niceurl");
      return;
    }
      const duplicateURL = links.some((l) => l.URL === url);
  if (duplicateURL) {
    setError("This URL already exists!");
    return;
  }
    
    setLoading(true);
    try {
      await createLink(url, user.uid);
      console.log(url);
      setNavActive(2);
      navigate("/dashboard/link");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <nav
        style={{ fontFamily: "'Inter', sans-serif" }}
        className="max-w-md mx-auto p-4 pt-[100px] md:max-w-[85%] md:relative left-[114px] md:overflow:hidden "
      >
        <div className="md:flex justify-around md:max-w-full md:p-4 ">
          <h1 className="text-3xl font-bold text-slate-800  ">
            Your Connections <br className="md:hidden" />
            Platform
          </h1>

          <div className="w-full flex flex-col gap-2 justify-center mt-4 mb-4 md:flex-row  ">
            <div className=" flex justify-center items-center gap-2 md:gap-0 ">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                role="graphics-document"
                className="alert-icon text-[#11becf]"
                aria-hidden="true"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25L19 15z"></path>
              </svg>
              <span className="text-[#11becf] text-sm ">
                Get Custom Links and a Complimentary Domain.
              </span>
              <span className="hidden  md:block text-[#11becf] text-sm underline ">
                Upgrade Now
              </span>
            </div>
            <div className="px-8">
              <button className="bg-[#007c8c] text-[13px] text-white border rounded-md px-10 py-[7px] self-start font-bold md:hidden">
                Upgrade Now
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col px-8 mt-12 gap-8">
          <h1 className="text-slate-800 text-2xl font-bold ">Quick Create</h1>
          <div className="flex justify-center md:justify-start">
            <button className="flex font-semibold text-slate-800 justify-center items-center border-b border-gray-200 rounded-3xl px-5 py-1 shadow-[0_2px_4px_rgba(0,0,0,0.2)] ">
              <svg
                viewBox="0 0 20 20"
                height="20"
                width="20"
                aria-hidden="true"
                className="text-slate-800 "
              >
                <path
                  fill="currentColor"
                  d="M4.917 8.833c-.5-.583-.75-1.25-.75-1.916 0-.75.25-1.417.833-1.917 1-1 2.833-1 3.833 0l1.834 1.833a.805.805 0 001.166 0 .805.805 0 000-1.166L10 3.75C9.167 3 8 2.5 6.833 2.5c-1.166 0-2.25.5-3.083 1.25-.833.833-1.25 2-1.25 3.167 0 1.166.417 2.25 1.25 3.083l1.833 1.833a.9.9 0 00.584.25.9.9 0 00.583-.25.805.805 0 000-1.166L4.917 8.833zM16.25 10l-1.833-1.833a.806.806 0 00-1.167 0 .806.806 0 000 1.166l1.833 1.917c.5.5.834 1.167.834 1.917s-.25 1.416-.834 1.916c-1.083 1.084-2.75 1.084-3.833 0L9.417 13.25a.806.806 0 00-1.167 0 .806.806 0 000 1.167l1.833 1.833c.834.833 2 1.25 3.084 1.25 1.083 0 2.25-.417 3.083-1.25.833-.833 1.25-1.917 1.25-3.083 0-1.25-.417-2.334-1.25-3.167z"
                ></path>
                <path
                  fill="currentColor"
                  d="M12.25 12.25a.756.756 0 01-.583.25.757.757 0 01-.584-.25L7.75 8.917a.806.806 0 010-1.167.806.806 0 011.167 0l3.333 3.333a.806.806 0 010 1.167z"
                ></path>
              </svg>
              <span>Short Link</span>
            </button>
          </div>
          <p className="text-sm text-slate-800 ">
            You can create <span className="font-semibold">5</span> Short Links
            this month.
          </p>
          <p className="text-slate-800 flex gap-2">
            Domain:{" "}
            <span className="font-bold flex items-center text-sm">
              Linkify{" "}
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                role="graphics-document"
                aria-hidden="true"
                height="18"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"></path>
              </svg>
            </span>
          </p>

          <div className="w-full md:mt-10">
            <h2 className="font-semibold text-base text-slate-800 mb-4 ">
              Enter your destination URL
            </h2>
            <div className="w-full flex flex-col gap-4 md:flex-row md:gap-10">
              <div className="flex flex-col w-full md:w-[50%]">
                <input
                  className={`w-full px-3 py-2 border rounded-lg outline-none ${
                    error ? "border-red-500" : "border-gray-400"
                  } focus:border-2 focus:border-gray-400`}
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                   onKeyDown={(e)=>{
                  if(e.key === "Enter"){
                    e.preventDefault();
                    console.log('clicked')
                    handleCreate()
                  }
                }}
                  type="text"
                  inputMode="url"
                  placeholder="https://example.com/my-long-url"
                />
                <span className="self-start text-red-500 text-sm mt-1 h-[1rem]">
                  {error || " "}
                </span>
              </div>
              <div>
              <button
                disabled={loading}
                onClick={handleCreate}
               
                className="cursor-pointer bg-[#2a5bd7] text-white px-8 py-2 border-none rounded-md active:bg-[#022d94] md:text-base md:hover:bg-[#022d94]"
              >
                {loading ? "Creating link..." : "Create your Linkify link"}
              </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

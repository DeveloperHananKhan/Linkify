import { useModalStore } from "../../store/userStore";
import { useState, useEffect } from "react";
interface ModalLinkProps {
  link: { id: string; URL: string; shortURL: string } | undefined;
  editLink: (id: string, shortURL: string) => void;
  links: { id: string; URL: string; shortURL: string }[];
}

export const ModalLink = ({ link, editLink, links }: ModalLinkProps) => {
  const { isEditLinkOpen, editLinkToggle } = useModalStore();
  const [shortURL, setShortURL] = useState(link?.shortURL || "");
  const [error, setError] = useState("");
  const url = link?.URL;

  useEffect(() => {
    setShortURL(link?.shortURL || "");
  }, [link]);

  const handleSave = async () => {
    if (!link) return;
    if (!shortURL) {
      setError("Short URL cannot be empty");
      return;
    }
    const isDuplicate = links.some(
      (l) => l.shortURL === shortURL && l.id !== link.id
    );
    isDuplicate
      ? setError("Short URL already exists!")
      : editLink(link.id, shortURL);
  };

  return (
    <>
      {isEditLinkOpen && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center px-4 z-50">
          <div className="bg-white w-full max-w-sm p-4 rounded-lg flex flex-col gap-4 relative">
            <button
              onClick={editLinkToggle}
              className="cursor-pointer absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            >
              ✕
            </button>

            <h1 className="text-xl font-bold">Edit Link</h1>

            <div className="flex flex-col gap-2">
              <label className="text-lg">
                Short URL
                <input
                  value={shortURL}
                  onChange={(e) => {
                    setShortURL(e.target.value);
                  }}
                  className="outline-none border-2 border-gray-300 w-full py-2 rounded-lg mt-1 px-2"
                  type="url"
                />
                {error && <p className="text-red-500 mt-1">{error}</p>}
              </label>
              <label className="text-lg">
                Original URL
                <input
                  value={url}
                  className="outline-none border-2 border-gray-300 w-full py-2 rounded-lg mt-1 px-2"
                  type="url"
                />
              </label>
            </div>

            <button
              onClick={handleSave}
              className="cursor-pointer  bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            >
             Save
            </button>
          </div>
        </div>
      )}
    </>
  );
};

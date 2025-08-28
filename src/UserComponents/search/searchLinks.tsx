import { useLinkStore } from "../../store/useLink";
import { useUser } from "../../store/userStore";
import { useModalStore } from "../../store/userStore";
import { useState } from "react";
import { ModalLink } from "../linkModal/linkModal";
interface SearchLinksProps {
  query: string;
}
export const SerachLinks = ({ query }: SearchLinksProps) => {
  const { links, deleteLink, updateLink } = useLinkStore();
  const { user } = useUser();
  const { editLinkToggle } = useModalStore();

  const userLinks = links.filter((link) => link.userId === user?.uid);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const [activeModalId, setActiveModalId] = useState<string | null>(null);
  const activeLink = links.find((l) => l.id === activeModalId);
  const filteredLink = userLinks.filter((f) =>
    f.shortURL.includes(query.toLowerCase())
  );
  const displayedLinks = query ? filteredLink : userLinks;
  const deleteFunction = async (id: string) => {
    setDeletingId(id);
    try {
      await deleteLink(id);
    } finally {
      setDeletingId(null);
    }
  };

  const editModal = (id: string) => {
    setActiveModalId(id);
    editLinkToggle();
  };
  const editLink = (id: string, shortURL: string) => {
    updateLink(id, shortURL);
    editLinkToggle();
  };

  return (
    <>
      <section
        style={{ fontFamily: "'Inter', sans-serif" }}
        className="max-w-4xl mx-auto mt-20 px-4"
      >
        {" "}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-slate-800 ">
            Your Saved Links
          </h2>

          <button className="bg-[#2a5bd7] text-white p-2 rounded-lg cursor-pointer active:bg-[#365ec2] lg:hover:bg-[#365ec2]">
            Create Link
          </button>
          <ModalLink link={activeLink} editLink={editLink} links={links} />
        </div>
        {user && userLinks.length === 0 ? (
          <p className="text-gray-500 text-center">No links saved yet.</p>
        ) : displayedLinks.length === 0 ? (
          <p className="text-gray-500 text-center">No matching links found.</p>
        ) : (
          <div className="overflow-x-auto rounded-lg shadow-md">
            <table className="w-full text-left border-collapse">
              <thead className="bg-[#2a5bd7] text-white">
                <tr>
                  <th className="py-3 px-4">Original URL</th>
                  <th className="py-3 px-4">Short URL</th>
                  <th className="py-3 px-4 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white text-slate-800">
                {displayedLinks.map((link) => (
                  <tr
                    key={link.id}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="py-3 px-4 truncate max-w-[250px]">
                      <a
                        href={link.URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        {link.URL}
                      </a>
                    </td>
                    <td className="py-3 px-4">
                      <a
                        href={link.URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#007c8c] font-medium hover:underline"
                      >
                        {link.shortURL}
                      </a>
                    </td>
                    <td className="py-3 px-4 flex justify-center gap-3">
                      <button
                        onClick={() => {
                          editModal(link.id);
                        }}
                        className="cursor-pointer px-3 py-1 text-sm rounded-md bg-[#11becf] text-white hover:bg-[#0da8b8] transition"
                      >
                        Edit
                      </button>
                      <button
                        disabled={deletingId === link.id}
                        className="cursor-pointer px-3 py-1 bg-red-500 text-white rounded"
                        onClick={() => deleteFunction(link.id)}
                      >
                        {deletingId === link.id ? (
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        ) : (
                          "Delete"
                        )}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </>
  );
};

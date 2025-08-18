import { useLinkStore } from "../store/useLink"
import { useUser } from "../store/userStore"

export const UserLinksTable = () => {
  const { links, deleteLink } = useLinkStore()
  const { user } = useUser()

  const userLinks = links.filter((link) => link.userId === user?.uid)

  return (
    <section
      style={{ fontFamily: "'Inter', sans-serif" }}
      className="max-w-4xl mx-auto mt-20 px-4"
    >  <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold text-slate-800 ">
        Your Saved Links
      </h2>   
      
        <button className="bg-[#2a5bd7] text-white p-2 rounded-lg cursor-pointer active:bg-[#365ec2] lg:hover:bg-[#365ec2]">Create Link</button>
   
      </div>

      {user && userLinks.length > 0 ? (
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
              {userLinks.map((link) => (
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
                      href={link.shortURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#007c8c] font-medium hover:underline"
                    >
                      {link.shortURL}
                    </a>
                  </td>
                  <td className="py-3 px-4 flex justify-center gap-3">
                    <button
                      onClick={() => console.log("Edit", link.id)}
                      className="px-3 py-1 text-sm rounded-md bg-[#11becf] text-white hover:bg-[#0da8b8] transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteLink(link.id)}
                      className="px-3 py-1 text-sm rounded-md bg-red-500 text-white hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => console.log("Export", link.id)}
                      className="px-3 py-1 text-sm rounded-md bg-gray-700 text-white hover:bg-gray-900 transition"
                    >
                      Export
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-500 text-center">No links saved yet.</p>
      )}
    </section>
  )
}

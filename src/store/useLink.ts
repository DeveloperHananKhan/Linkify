import { db } from "../backEnd/Firebase";
import { collection, addDoc, updateDoc, doc, deleteDoc, increment,query, where,getDocs } from "firebase/firestore";
import { create } from "zustand";
import { useUser } from "./userStore";

type Link = {
  id: string;
  URL: string;
  shortURL: string;
  time: number;
  clicks: number;
  userId : string | undefined

};

interface LinkStore {
  links: Link[];
  createLink: (URL: string,userId: string) => Promise<string>;
  updateLink: (id: string, newShortURL: string) => Promise<void>;
  deleteLink: (id: string) => Promise<void>;
  incrementClicks: (id: string) => Promise<void>;
  fetchLinks: (userId: string) => Promise<void>; 
}

export const useLinkStore = create<LinkStore>((set) => {
  const { user } = useUser.getState();
  return { links: user ? JSON.parse(localStorage.getItem(`links_${user.uid}`) || "[]") : [],

  
  fetchLinks: async (userId: string) => {
    const q = query(collection(db, "links"), where("userId", "==", userId));
    const snapshot = await getDocs(q);

    const fetchedLinks: Link[] = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Omit<Link, "id">),
    }));

    set({ links: fetchedLinks })},

  createLink: async (URL) => {
    const { user } = useUser.getState();
    let ShortURL = "Linki.fy/";
    let chars = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890";
    for (let i = 0; i < 5; i++) {
      ShortURL += chars[Math.floor(Math.random() * chars.length)];
    }

    const newLinkData = {
      URL,
      shortURL: ShortURL,
      time: Date.now(),
      clicks: 0,
      userId: user?.uid,
    };

    const docRef = await addDoc(collection(db, "links"), newLinkData);

    const newLink: Link = { id: docRef.id, ...newLinkData };

    set((state) => {
      const updatedLinks = [newLink, ...state.links];
      localStorage.setItem(`links_${user?.uid}`, JSON.stringify(updatedLinks));
      return { links: updatedLinks };
    });

    return ShortURL;
  },

  updateLink: async (id, newShortURL) => {
    const { user } = useUser.getState();
    const linkRef = doc(db, "links", id);
    await updateDoc(linkRef, { shortURL: newShortURL });

    set((state) => {
      const updatedLinks = state.links.map((link) =>
        link.id === id ? { ...link, shortURL: newShortURL } : link
      );
      localStorage.setItem(`links_${user?.uid}`, JSON.stringify(updatedLinks));
      return { links: updatedLinks };
    });
  },

  deleteLink: async (id) => {
    const { user } = useUser.getState();
    const linkRef = doc(db, "links", id);
    await deleteDoc(linkRef);

    set((state) => {
      const filteredLinks = state.links.filter((link) => link.id !== id);
      localStorage.setItem(`links_${user?.uid}`, JSON.stringify(filteredLinks));
      return { links: filteredLinks };
    });
  },

  incrementClicks: async (id) => {
    const { user } = useUser.getState();
    const linkRef = doc(db, "links", id);
    await updateDoc(linkRef, { clicks: increment(1) });

    set((state) => {
      const updatedLinks = state.links.map((link) =>
        link.id === id ? { ...link, clicks: link.clicks + 1 } : link
      );
      localStorage.setItem(`links_${user?.uid}`, JSON.stringify(updatedLinks));
      return { links: updatedLinks };
    });
  },
};
});

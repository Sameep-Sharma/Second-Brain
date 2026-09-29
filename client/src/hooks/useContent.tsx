import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";
interface Content {
  _id: string;
  title: string;
  link: string;
  type: "twitter" | "youtube";
  contentId:string
}
export function useContent() {
const [contents, setContents] = useState<Content[]>([]);

  function refresh() {
    axios
      .get(`${BACKEND_URL}/api/v1/content`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setContents(response.data.content);
      });
  }
  async function handleDelete(contentId:string) {
    try {
      const response = await axios.delete(`${BACKEND_URL}/api/v1/content`, {
        data: {
          contentId
        },
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      if (response.status === 200) {
        alert("content deleted");
      }
      setContents((prev) => prev.filter((content) => content.contentId !== contentId));
    } catch (e: any) {
      console.error("Error deleting content:", e.response?.data || e.message);
    }
  }

 useEffect(() => {
  refresh();

  const interval = setInterval(() => {
    refresh();
  }, 10000);

  return () => {
    clearInterval(interval);
  };
}, []);

  return { contents, refresh,handleDelete };
}

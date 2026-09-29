import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";


interface Content {
  _id: string;
  title: string;
  link: string;
  type: "twitter" | "youtube";
}

export function useSharedContent(shareLink: string) {
  const [contents, setContents] = useState<Content[]>([]);

  function refresh() {
    axios
      .get(`${BACKEND_URL}/api/v1/brain/${shareLink}`)
      .then((response) => {
        setContents(response.data.content);
      })
      .catch((error) => {
        console.error("Failed to fetch shared content:", error);
      });
  }

  useEffect(() => {
    if (!shareLink) return;

    refresh();
  }, [shareLink]);

  return { contents, refresh };
}
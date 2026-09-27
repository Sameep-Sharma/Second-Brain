import { useRef, useState } from "react";
import { Crossicon } from "../icons/CrossIcon";
import { Button } from "./Button";
import Input from "./Input";
import { BACKEND_URL } from "../config";
import axios from "axios";

enum ContentType {
  Youtube = "youtube",
  Twitter = "twitter",
}

//controlled component
export const CreateContent = ({ open, onClose }) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  const [type, settype] = useState(ContentType.Youtube);

 async function addContent() {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;

    await axios.post(`${BACKEND_URL}/api/v1/content`,{
      link,
      title,
      type
    },{
      headers:{
        "Authorization":localStorage.getItem("token")
      }
    })
    alert("Content Added")
    onClose()
  }
  return (
    <div>
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-500/60"
          onClick={onClose}
        >
          <div
            className="bg-white p-4 rounded-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end cursor-pointer">
              <div onClick={onClose}>
                <Crossicon size="sm" />
              </div>
            </div>
            <div>
              <Input ref={titleRef} placeholder="Title" />

              <Input ref={linkRef} placeholder="Link" />
            </div>
            <div className="flex justify-center text-primary_purple font-bold">
              Type:
            </div>
            <div className="flex justify-around pb-4 pt-2 ">
              <Button
                animation="none"
                onClick={() => {
                  settype(ContentType.Youtube);
                }}
                text="Youtube"
                variant={type === ContentType.Youtube ? "primary" : "secondary"}
              ></Button>
              <Button
                animation="none"
                onClick={() => {
                  settype(ContentType.Twitter);
                }}
                text="Twitter"
                variant={type === ContentType.Twitter ? "primary" : "secondary"}
              ></Button>
            </div>
            <div className="flex justify-center">
              <Button
                variant="primary"
                text="Submit"
                animation="glaze"
                onClick={addContent}
                fullWidth={true}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

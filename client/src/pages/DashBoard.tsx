import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { CreateContent } from "../components/CreateContent";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { SideBar } from "../components/SideBar";
import { useContent } from "../hooks/useContent";
import axios from "axios";
import { BACKEND_URL } from "../config";

function DashBoard() {
  const [modalOpen, setModalOpen] = useState(false);
  const {contents, refresh, handleDelete} = useContent();

  useEffect(()=>{
    refresh()
  },[modalOpen])

  return (
    <div>
      <SideBar />

      <div className="p-4 ml-72 min-h-screen bg-gray-200 border-slate-300">
        <CreateContent
          open={modalOpen}
          onClose={() => {
            setModalOpen(false);
          }}
        />
        <div className="flex justify-end gap-4">
          <Button
            onClick={async () => {
              const response  = await axios.post(`${BACKEND_URL}/api/v1/brain/share`,{
                share:true
              },{
                headers:{
                  "Authorization":localStorage.getItem("token")
                }
              })
              const shareUrl = `${window.location.origin}${response.data.message}`;
              alert(shareUrl)
            }}
            startIcon={<ShareIcon />}
            size="sm"
            variant="primary"
            text="Share Brain"
            submit="no"
          />

          <Button
            onClick={() => {
              setModalOpen(true);
            }}
            startIcon={<PlusIcon size="lg" />}
            size="md"
            variant="secondary"
            text="Add Content"
            submit="no"
          />
        </div>
        <div className="flex gap-4 p-2 flex-wrap">
          {contents.map(({  type, link, title,contentId }) => (
            <div key={contentId} className="min-w-0">
              <Card
                contentId={contentId}
                type={type}
                link={link}
                title={title}
                onDelete={handleDelete}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
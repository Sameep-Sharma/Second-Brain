import { useState } from "react";
import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { CreateContent } from "./components/CreateContent";
import { PlusIcon } from "./icons/PlusIcon";
import { ShareIcon } from "./icons/ShareIcon";
import { SideBar } from "./components/SideBar";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div >
      <SideBar/>
      <div className="p-4 ml-72 min-h-screen bg-gray-200 border-slate-300">
        <CreateContent
          open={modalOpen}
          onClose={() => {
            setModalOpen(false);
          }}
        ></CreateContent>
        <div className="flex justify-end gap-4">
          <Button
            onClick={() => {
              console.log("hello");
            }}
            startIcon={<ShareIcon />}
            size="sm"
            variant="primary"
            text="Share Brain"
            submit="no"
          ></Button>
          <Button
            onClick={() => {
              setModalOpen(true);
            }}
            startIcon={<PlusIcon size="lg" />}
            size="md"
            variant="secondary"
            text="Add Content"
            submit="no"
          ></Button>
        </div>
        <div className="flex gap-4 p-2">
          <Card
            type="twitter"
            link="https://x.com/Surendar__05/status/2103837333711974899"
            title="First Tweet"
          ></Card>
          <Card
            type="youtube"
            link="https://youtu.be/RqgkorVrR1w"
            title="Watch Later"
          ></Card>
        </div>
      </div>
    </div>
  );
}

export default App;

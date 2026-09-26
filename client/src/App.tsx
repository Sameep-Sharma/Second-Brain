import { Button } from "./components/Button";
import { PlusIcon } from "./icons/PlusIcon";
import { ShareIcon } from "./icons/ShareIcon";

function App() {
  return (
    <>
      <Button
        onClick={() => {
          console.log("hello");
        }}
        startIcon={<ShareIcon />}
        size="sm"
        variant="primary"
        text="Share"
      ></Button>
      <Button
        onClick={() => {
          console.log("hello");
        }}
        startIcon={<PlusIcon size="lg" />}
        size="md"
        variant="secondary"
        text="Add Content"
      ></Button>
    </>
  );
}

export default App;


import { Crossicon } from "../icons/CrossIcon";
import { Button } from "./Button";


//controlled component
export const CreateContent = ({ open, onClose }) => {
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
        <Input
          placeholder="Title"
          onChange={() => {}}
        />

        <Input
          placeholder="Link"
          onChange={() => {}}
        />
      </div>

      <div className="flex justify-center">
        <Button
          variant="primary"
          text="Submit"
          animation="glaze"
          onClick={() => {}}
        />
      </div>
    </div>
  </div>
)}
    </div>
  );
};

function Input({
  onChange,
  placeholder,
}: {
  onChange: () => void;
  placeholder: string;
}) {
  return (
    <div>
      <input
        type="text"
        className="px-4 py-2  rounded-md border border-slate-300 m-2"
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}

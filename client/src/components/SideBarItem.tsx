import type { ReactElement } from "react";

export const SideBarItem = ({
  text,
  icon,
}: {
  text: string;
  icon: ReactElement;
}) => {
  return (
    <div className="flex items-center cursor-pointer hover:bg-gray-200 rounded max-w-48 pl-4 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg active:translate-y-0  ">
      <div className="p-2">{icon}</div>
      <div className="p-2">{text}</div>
    </div>
  );
};

import { Logo } from "../icons/Logo";
import { XIcon } from "../icons/XIcon";
import { YouTubeIcon } from "../icons/YouTubeIcon";
import { SideBarItem } from "./SideBarItem";

export const SideBar = () => {
  return (
    <>
      <div className="h-screen bg-white  w-72 fixed left-0 top-0 pl-6">
        <div className="flex text-2xl pt-8 items-center">
          <div className="pr-4">
            <Logo />
          </div>
          <div className="text-primary_purple font- font-anton font-semibold">Second Brain</div>
        </div>
        <div className="pt-8  pl-4"></div>
        <SideBarItem text="X" icon={<XIcon></XIcon>} />
        <SideBarItem text="Youtube" icon={<YouTubeIcon></YouTubeIcon>} />
      </div>
    </>
  );
};

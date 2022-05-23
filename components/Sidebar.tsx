import Image from "next/image"
import { HomeIcon } from "@heroicons/react/solid";
import SidebarLink from "./SidebarLink";
import {
    HashtagIcon,
    BellIcon,
    InboxIcon,
    BookmarkIcon,
    ClipboardListIcon,
    UserIcon,
    DotsCircleHorizontalIcon,
    DotsHorizontalIcon,
  } from "@heroicons/react/outline";


function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col items-center xl:items-start xl:w-[300px] p-2 h-full ">
        <div className="flex items-center justify-center w-14 h-14 hoverAnimation p-0 xl:ml-24">
            <Image src="https://rb.gy/ogau5a" width={30} height={30} />

        </div>
        <div className="space-y-2.5 mt-4 mb-2.5 xl:ml-24">
        <SidebarLink text="Home" Icon={HomeIcon} active />
        <SidebarLink text="Explore" Icon={HashtagIcon} />
        <SidebarLink text="Notifications" Icon={BellIcon} />
        <SidebarLink text="Messages" Icon={InboxIcon} />
        <SidebarLink text="Bookmarks" Icon={BookmarkIcon} />
        <SidebarLink text="Lists" Icon={ClipboardListIcon} />
        <SidebarLink text="Profile" Icon={UserIcon} />
        <SidebarLink text="More" Icon={DotsCircleHorizontalIcon} />

        </div>
        <button className="text-[#d9d9d9] xl:inline ml-auto bg-[#1d9bf0] text-white rounded-full
        w-56 h-[52px] text-lg font-bold shadow-md hover:bg-[#1a8cd8]">Tweet</button>
        <div>
            <img src="https://ihatetomatoes-nextjs-101.vercel.app/_next/image?url=%2Fassets%2Fauthor%2Fimg_petr-tichy-bio.png&w=384&q=75" alt="" />
        </div>


    </div>
  )
}

export default Sidebar
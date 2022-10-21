import React from "react";
import {
  UserCircleIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  ViewColumnsIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon, BookmarkIcon } from "@heroicons/react/24/solid";
import { signOut, useSession } from "next-auth/react";

function Sidebar() {
  const { data: session, status } = useSession();
  console.log(session);

  return (
    <div className="text-gray-500 bg-black p-5 text-sm border-r border-gray-900 overflow-y-scroll scrollbar-hide h-screen">
      <div className="space-y-4">
        <button
          className="flex items-center space-x-2 hover:text-white"
          onClick={() => signOut()}
        >
          <UserCircleIcon className="h-5 w-5" />
          <p>Logout</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <HomeIcon className="h-5 w-5" />
          <p>홈</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <MagnifyingGlassIcon className="h-5 w-5" />
          <p>검색하기</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <ViewColumnsIcon className="h-5 w-5" />
          <p>내 라이브러리</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900" />

        <button className="flex items-center space-x-2 hover:text-white">
          <PlusCircleIcon className="h-5 w-5" />
          <p>플레이리스트 만들기</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <HeartIcon className="h-5 w-5 text-white bg-gradient-to-br to-slate-400 from-purple-500 rounded-sm hover:to-slate-300 hover:from-purple-400" />
          <p>좋아요 표시한 곡</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <BookmarkIcon className="h-5 w-5 text-green-600 bg-green-900 rounded-sm hover:bg-green-700 hover:text-green-500" />
          <p>내 에피소드</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900" />

        {/* Playlists */}
        <p className="cursor-pointer hover:text-white">Playlist name</p>
        <p className="cursor-pointer hover:text-white">Playlist name</p>
        <p className="cursor-pointer hover:text-white">Playlist name</p>
        <p className="cursor-pointer hover:text-white">Playlist name</p>
        <p className="cursor-pointer hover:text-white">Playlist name</p>
        <p className="cursor-pointer hover:text-white">Playlist name</p>
        <p className="cursor-pointer hover:text-white">Playlist name</p>
        <p className="cursor-pointer hover:text-white">Playlist name</p>
        <p className="cursor-pointer hover:text-white">Playlist name</p>
        <p className="cursor-pointer hover:text-white">Playlist name</p>
        <p className="cursor-pointer hover:text-white">Playlist name</p>
        <p className="cursor-pointer hover:text-white">Playlist name</p>
        <p className="cursor-pointer hover:text-white">Playlist name</p>
      </div>
    </div>
  );
}

export default Sidebar;

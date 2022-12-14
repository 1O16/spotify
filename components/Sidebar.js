import { useState, useEffect } from "react";
import useSpotify from "../hooks/useSpotify";
import { signOut, useSession } from "next-auth/react";
import { useRecoilState } from "recoil";
import { playlistIdState } from "../atoms/playlistAtom";
import {
  UserCircleIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  ViewColumnsIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon, BookmarkIcon } from "@heroicons/react/24/solid";

function Sidebar() {
  const spotifyApi = useSpotify();
  const { data: session, status } = useSession();
  const [playlists, setPlaylists] = useState([]);
  const [playlistId, setPlaylistId] = useRecoilState(playlistIdState);

  console.log(playlistId);

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.getUserPlaylists().then((data) => {
        setPlaylists(data.body.items);
      });
    }
  }, [session, spotifyApi]);

  useEffect(() => {}, []);

  return (
    <div
      className="text-gray-500 bg-black p-5 text-xs lg:text-sm border-r border-gray-900 
    overflow-y-scroll scrollbar-hide h-screen sm:max-w-[12rem] lg:max-w-[15rem] hidden md:inline-flex"
    >
      <div className="space-y-4">
        <button
          className="flex items-center space-x-2 hover:text-white"
          onClick={() => signOut()}
        >
          <UserCircleIcon className="h-5 w-5" />
          <p>로그아웃</p>
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
        {playlists.map((playlist) => (
          <p
            key={playlist.id}
            onClick={() => setPlaylistId(playlist.id)}
            className="cursor-pointer hover:text-white"
          >
            {playlist.name}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;

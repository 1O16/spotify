import { useSession } from "next-auth/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { shuffle } from "lodash";
import { useRecoilValue } from "recoil";
import { playlistIdState } from "../atoms/playlistAtom";

const colors = [
  "from-indigo-500",
  "from-blue-500",
  "from-green-500",
  "from-yellow-500",
  "from-red-500",
  "from-pink-500",
  "from-purple-500",
  "from-amber-500",
  "from-emerald-500",
  "from-teal-500",
  "from-cyan-500",
  "from-lime-500",
  "from-fuchsia-500",
];

export default function Center() {
  const { data: session } = useSession();
  const [color, setColor] = useState(null);
  const playlistId = useRecoilValue(playlistIdState);

  useEffect(() => {
    setColor(shuffle(colors).pop());
  }, [playlistId]);

  return (
    <div className="flex-grow">
      <header className="absolute top-5 right-8">
        <div className="flex items-center text-white bg-black space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2">
          <img
            className="rounded-full w-10 h-10"
            src={session?.user.image}
            alt="Profile Pic"
          />
          <h2>{session?.user.name}</h2>
          <ChevronDownIcon className="h-5 w-5" />
        </div>
      </header>

      <section
        className={`flex items-end space-x-7 bg-gradient-to-b to-spotify-gray ${color} h-80 text-white p-8`}
      >
        {/* <img src="" alt="" /> */}.
      </section>
    </div>
  );
}

//2:06:23

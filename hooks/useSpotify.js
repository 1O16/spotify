import { useEffect } from "react";
import { useSession, signIn } from "next-auth/react";
import spotifyApi from "../lib/spotify";

export default function useSpotify() {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (session) {
      // 만약 refresh access token을 얻는데 실패하면 login 페이지로 direct
      if (session.error === "RefreshAccessTokenError") {
        signIn();
      }

      spotifyApi.setAccessToken(session.user.accessToken);
    }
  }, [session]);

  return spotifyApi;
}

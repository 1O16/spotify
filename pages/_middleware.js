import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  // 로그인 토큰이 존재할 때
  const token = await getToken({ req, secret: process.env.JWT_SECRET });
  const { pathname, origin } = req.nextUrl;

  // 밑의 사항들이 true일 때만 요청을 수락
  //    1) next-auth의 session과 provider의 fetching 요청을 받을 때
  //    2) 토큰이 존재할 때

  if (pathname.includes("/api/auth") || token) {
    return NextResponse.next();
  }

  // 토큰이 없거나 protected route에 접근할 때 로그인 페이지로 redirect
  if (!token && pathname !== "/login") {
    return NextResponse.redirect(origin + "/login");
  }
}

// 1:50:00

'use client'
import { useState, useEffect } from "react";

export default function Home() {
  const [checker, setCheckerName] = useState<string>('');

  useEffect(() => {
    // See if user is logged in
    const userInfoCookies = document.cookie.split("; ");
    const userNameCookie = userInfoCookies.find(i => i.startsWith("fname=")) || '';

    if (userNameCookie) setCheckerName(userNameCookie.split("=")[1]);
  }, [])


  return (
    <div className="relative p-20 w-full min-h-screen bg-gradient-to-b from-bru1 to-bru2">

      <div className="absolute top-0 left-0 bg-bru1 border-b-2 border-bru5 w-full p-2 text-center"><p className="font-extrabold text-xs text-bru5 tracking-tight"> Core Service Tester Project</p></div>

      <section>
        <h1 className="font-extrabold text-4xl text-bru5 tracking-tight">BuyerPanda</h1>
        <div className="grid grid-cols-2 space-x-8">

          <div className="grid grid-cols-4 grid-rows-auto gap-4 mt-4 w-fit text-white">
            <button className="homeButton" onClick={() => window.location.href = "/otp"}>OTP</button>
            <button className="homeButton" onClick={() => window.location.href = "/s3"}>s3</button>
            <button className="homeButton" onClick={() => window.location.href = "/user/login"}>User/Login</button>
            <button className="homeButton" onClick={() => window.location.href = "/user/logout"}>User/Logout</button>
            <button className="homeButton" onClick={() => window.location.href = "/user/signup"}>User/SignUp</button>
            <button className="homeButton" onClick={() => window.location.href = "/user/menu"}>User/Menu</button>
            <button className="homeButton" onClick={() => window.location.href = "/user/profile"}>User/Profile</button>
            <button className="homeButton" onClick={() => window.location.href = "/user/cfpwd"}>User/Password</button>
            <button className="homeButton" onClick={() => window.location.href = "/user/dboard"}>User/Dashboard</button>
            <button className="homeButton" onClick={() => window.location.href = "/hp"}>Hero Section</button>
          </div>

          <div className="testOutput">
            <h1 className="font-extrabold text-md text-bru3 tracking-tight">Output:</h1>
            <p className="mt-2 text-lg text-bru4 w-full">Hello {checker}</p>
          </div>

        </div>
      </section>
      
    </div>
  );
}

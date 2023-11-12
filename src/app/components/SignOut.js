"use client";
import React from "react";
import { signOut } from "next-auth/react";
import Image from "next/image";

export const SignOut = () => {
  return (
    <>
      <div className="w-[60%] rounded-[2rem] mt-10 m-auto bg-white   items-center h-[20rem] flex justify-evenly">
        {/* google signOut function */}
        <button
          className=" rounded-3xl border p-4     "
          onClick={() => signOut("google")}
        >
          <Image
            className="rounded-3xl"
            src="/google-icon.png"
            width={50}
            height={50}
            alt="google"
          />
          <span>
            {" "}
            <p>Sign Out with Google</p>
          </span>
        </button>

        {/* github signOut function  */}
        <button
          className="  rounded-3xl  justify-center  border p-4"
          onClick={() => signOut("github")}
        >
          <Image
            className="rounded-3xl"
            src="/github-icon.jpeg"
            width={51}
            height={51}
            alt="github"
          />
          <span>
            <p>Sign Out with github</p>
          </span>
        </button>
      </div>
    </>
  );
};

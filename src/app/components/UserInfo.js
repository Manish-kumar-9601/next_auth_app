"use client";
import React from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";

export const UserInfo = () => {
  const { status, data: session } = useSession();

  if (status === "authenticated") {
    return (
      <div className="secondary-color  rounded-[2rem] p-5 h-[14rem]">
        <Image
          className="rounded-[50%] m-4"
          src={session?.user?.image}
          width={60}
          height={60}
          alt="user"
        />
        <ul className="flex-row w-[15rem] gap-1">
          <li className="text-white border p-1 rounded-md  mb-1">
            {" "}
            {session?.user?.name}{" "}
          </li>
          <li className="text-white border p-1 rounded-md">
            {" "}
            {session?.user?.email}{" "}
          </li>
        </ul>
      </div>
    );
  }
};

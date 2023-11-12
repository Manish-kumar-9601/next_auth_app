"use client";
import { SessionProvider, signIn, signOut } from "next-auth/react";
import React from "react";
import { UserInfo } from "./UserInfo";
import AuthSign from "./AuthSign";
 

export const HomeSign = () => {
  return (
    <>
      <SessionProvider>
        <div className="bg-white rounded-b-[30%]  flex justify-center flex-col items-center pb-4 ">

 
          <AuthSign />
          <UserInfo />
        </div>
      </SessionProvider>
    </>
  );
};

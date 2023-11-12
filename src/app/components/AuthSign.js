"use client";
import React from "react";
import { SignIn } from "./SignIn";
import { SignOut } from "./SignOut";
import { useSession } from "next-auth/react";
 

const AuthSign = () => {
  const { status } = useSession();

  if (status === "authenticated") {
    return <SignOut />;
  } else if (status === "unauthenticated") {
    return <SignIn />;
  } else if (status === "loading") {
    <p className="text-black">LOADING PLEASE WAIT </p>;
  }
};

export default AuthSign;

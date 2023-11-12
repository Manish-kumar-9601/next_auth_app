"use client" 
import { SessionProvider } from "next-auth/react";
import AuthSign from "../components/AuthSign";
 

export default function Page() {


  return (
 
    <SessionProvider>
      <AuthSign />
    </SessionProvider>
 
  );
}





 
"use client";
import {  useSession } from 'next-auth/react';
import React from 'react';


export const NavName = ( ) => {
 const {status}=useSession()


 
   {

      if (status === "authenticated") {
         return <p>Sign Out</p>;
       } else if (status === "unauthenticated") {
         return <p>Sign In</p>;
       }
      
      }


  
};

 
 
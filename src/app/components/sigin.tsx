"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

const SignInButton = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>در حال بارگذاری...</p>;
  }
  console.log(session);

  if (session?.user) {
    return (
      <div className="mx-14">
        <p className="text-amber-600">سلام، {session.user.name}</p>
        <Image src={session.user.image } alt="login " width={50 } height={50}/>
        <button onClick={() => signOut()} className="text-red-700">
          خروج
        </button>
      </div>
    );
  }

  return (
    <div className="mx-14">
         <button onClick={() => signIn("google")} className="text-green-800  hover:bg-green-100">
         ورود با گوگل
        </button>
        <button onClick={() => signIn("github")} className="text-gray-800 hover:bg-green-100">
         ورود با گیت‌هاب
        </button>
    </div>
   
    
  );
};

export default SignInButton;

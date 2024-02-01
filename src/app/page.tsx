import { SignInButton, SignOutButton } from "@/components";
import { getServerAuthSession } from "@/server/auth";
import React, { FC } from "react";

export default async function Home() {
  const session = await getServerAuthSession();

  return (
    <div className="min-h-full">
      <div className="py-4">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h1 className="flex justify-center text-9xl font-bold">
            Hello {session?.user.name ?? "World"}!
          </h1>
          <div className="flex w-full justify-center">
            {!session?.user ? <SignInButton /> : <SignOutButton />}
          </div>
        </div>
      </div>
    </div>
  );
}

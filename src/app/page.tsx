import { AddPortfolio, SignInButton, SignOutButton } from "@/components";
import { getServerAuthSession } from "@/server/auth";
import { db } from "@/server/db";
import { api } from "@/trpc/server";
import { unstable_noStore as noStore } from "next/cache";
import React from "react";

export default async function Home() {
  noStore();
  const session = await getServerAuthSession();
  const portfolios = await api.portfolio.getAllPortfolios.query();

  return (
    <div className="min-h-full">
      <div className="py-4">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h1 className="flex justify-center text-9xl font-bold">
            Hello {session?.user.name ?? "World"}!
          </h1>
          <div className="flex w-full flex-col justify-center gap-3 align-middle">
            {!session?.user ? (
              <SignInButton />
            ) : (
              <>
                <SignOutButton />
                <AddPortfolio />
              </>
            )}
            <div className="flex gap-5 flex-wrap justify-center">
            {portfolios.map((portfolio) => (
              <div key={portfolio.id} className="card w-96 bg-neutral text-neutral-content">
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{portfolio.title}</h2>
                  <p>by: { portfolio.user.name }</p>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

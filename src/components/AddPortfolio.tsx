"use client";

import { api } from "@/trpc/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddPortfolio() {
    const router = useRouter();
    const [portfolio, setPortfolio] = useState("");
    const createPortfolio = api.portfolio.createPortfolio.useMutation({
        onSuccess: () => {
            router.refresh();
            setPortfolio("");
        }
    })

  return (
    <div className="join join-vertical mx-auto w-fit justify-center">
      <input
        type="text"
        placeholder="New Portfolio"
        className="input join-item w-64 bg-primary"
        onChange={(e) => setPortfolio(e.target.value)}
      />
      <input
        type="button"
        value="Add Portfolio"
        className="btn join-item w-64"
        onClick={() =>
          createPortfolio.mutate({title: portfolio})
        }
      />
    </div>
  );
}

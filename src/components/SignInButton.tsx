"use client";

import { signIn } from "next-auth/react";
import React from "react";

export default function SignInButton() {
  return (
    <input
      className="btn w-fit mx-auto"
      type="button"
      value="Sign-In"
      onClick={() => signIn("discord")}
    />
  );
}

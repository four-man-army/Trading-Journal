"use client";

import { signIn } from "next-auth/react";
import React from "react";

export default function SignInButton() {
  return (
    <input
      className="btn"
      type="button"
      value="Sign-In"
      onClick={() => signIn("discord")}
    />
  );
}

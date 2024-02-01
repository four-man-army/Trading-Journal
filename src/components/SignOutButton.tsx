"use client";

import { signOut } from "next-auth/react";
import React from "react";

export default function SignOutButton() {
  return (
    <input
      className="btn"
      type="button"
      value="Sign Out"
      onClick={() => signOut()}
    />
  );
}

"use client";
import React from "react";

import { SessionProvider } from "next-auth/react";

const AuthProvider = ({ children }) => {
  return <SessionProvider {...children} />;
};

export default AuthProvider;

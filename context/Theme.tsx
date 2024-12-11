"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
// @ts-ignore
import { ThemeProviderProps } from "next-themes/dist/types";
import React from "react";

const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};

export default ThemeProvider;

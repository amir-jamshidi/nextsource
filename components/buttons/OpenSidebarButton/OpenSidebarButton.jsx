"use client";

import { useThemeProvider } from "@/contexts/ThemeContextProvider";

const OpenSidebarButton = () => {
  const themeProviser = useThemeProvider();

  return (
    <button onClick={() => themeProviser.handleSetIsOpenSidebar(true)}>
      ToggleThemeButton
    </button>
  );
};

export default OpenSidebarButton;

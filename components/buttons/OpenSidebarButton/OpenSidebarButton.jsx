"use client";

import { useThemeProvider } from "@/contexts/ThemeContextProvider";
import { MenuRounded } from "@mui/icons-material";

const OpenSidebarButton = () => {
  const themeProviser = useThemeProvider();

  return (
    <button className="block lg:hidden" onClick={() => themeProviser.handleSetIsOpenSidebar(true)}>
      <span className="flex flex-center bg-blue border border-gray-200 dark:border-gray-300/10 rounded-full h-10 w-10">
        <MenuRounded className="dark:text-gray-200 text-gray-700" />
      </span>
    </button>
  );
};

export default OpenSidebarButton;

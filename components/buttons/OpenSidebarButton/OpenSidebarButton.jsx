"use client";

import { useThemeProvider } from "@/contexts/ThemeContextProvider";
import { MenuRounded } from "@mui/icons-material";

const OpenSidebarButton = () => {
  const themeProviser = useThemeProvider();

  return (
    <button className="block lg:hidden" onClick={() => themeProviser.handleSetIsOpenSidebar(true)}>
      <span className="inline-block p-2 bg-gray-700 rounded-full h-10 w-10">
        <MenuRounded className="text-gray-200" />
      </span>
    </button>
  );
};

export default OpenSidebarButton;

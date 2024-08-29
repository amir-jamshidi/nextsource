"use client";

import { useThemeProvider } from "@/contexts/ThemeContextProvider";
import { CloseRounded } from "@mui/icons-material";

const CloseSidebarButton = () => {
  const themeProvider = useThemeProvider();
  return (
    <button onClick={() => themeProvider?.handleSetIsOpenSidebar(false)}>
      <span className="w-9 h-9 flex-center bg-gray-300 dark:bg-gray-700 rounded-full">
        <CloseRounded className="text-700-300" />
      </span>
    </button>
  );
};

export default CloseSidebarButton;

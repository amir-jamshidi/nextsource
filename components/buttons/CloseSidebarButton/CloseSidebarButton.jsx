"use client";
import { useThemeProvider } from "@/contexts/ThemeContextProvider";

const CloseSidebarButton = () => {
  const themeProvider = useThemeProvider();

  return (
    <button onClick={() => themeProvider?.handleSetIsOpenSidebar(false)}>
      CloseSidebarButton
    </button>
  );
};

export default CloseSidebarButton;

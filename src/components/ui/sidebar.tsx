
import React, { createContext, useContext, useState } from "react";
import { cn } from "@/lib/utils";

type SidebarContextType = {
  expanded: boolean;
  setExpanded: (expanded: boolean) => void;
  toggleSidebar: () => void;
};

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export function useSidebar() {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
}

interface SidebarProviderProps {
  children: React.ReactNode;
  defaultExpanded?: boolean;
}

export function SidebarProvider({
  children,
  defaultExpanded = true,
}: SidebarProviderProps) {
  const [expanded, setExpanded] = useState<boolean>(defaultExpanded);

  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  return (
    <SidebarContext.Provider value={{ expanded, setExpanded, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
}

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Sidebar({ children, className, ...props }: SidebarProps) {
  const { expanded } = useSidebar();

  return (
    <div
      className={cn(
        "h-full fixed left-0 top-0 z-30 flex flex-col border-r bg-sidebar text-sidebar-foreground",
        expanded ? "w-64" : "w-16",
        "transition-width duration-300 ease-in-out",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

interface SidebarInsetProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function SidebarInset({ children, className, ...props }: SidebarInsetProps) {
  const { expanded } = useSidebar();

  return (
    <div
      className={cn(
        "flex-1 overflow-auto",
        expanded ? "ml-64" : "ml-16",
        "transition-all duration-300 ease-in-out",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

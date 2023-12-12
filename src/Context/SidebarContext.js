import React, { createContext, useContext, useState } from 'react';

// Create a new context
export const SidebarContext = createContext();

// Products context provider component
export const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  }
  return (
    <SidebarContext.Provider value={{ handleToggle, isOpen}}>
      {children}
    </SidebarContext.Provider>
  )
};

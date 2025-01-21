import { ReactNode, createContext, useContext, useState } from "react";

interface StateContextType {
  isActiveMenu: boolean;
  setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const StateContext = createContext<StateContextType | undefined>(undefined);

// const initialState = {
//   userProfile: false,
// };
interface ContextProviderProps {
  children: ReactNode;
}

export const ContextProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  const [isActiveMenu, setActiveMenu] = useState(true);
  return (
    <StateContext.Provider value={{ isActiveMenu, setActiveMenu }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = (): StateContextType => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error("useStateContext must be used within a ContextProvider");
  }
  return context;
};

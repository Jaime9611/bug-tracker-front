import {
  FC,
  ReactNode,
  createContext,
  useContext,
  useMemo,
  useCallback,
  useState,
} from 'react';

interface SidebarState {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const initialState: SidebarState = {
  isOpen: false,
  toggleSidebar: () => undefined,
};

const SidebarContext = createContext<SidebarState>(initialState);

interface SidebarProviderProps {
  children: ReactNode;
}

const SidebarProvider: FC<SidebarProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggleSidebar = useCallback(
    () => setIsOpen((prevState) => !prevState),
    []
  );

  return (
    <SidebarContext.Provider
      value={useMemo(
        () => ({ isOpen, toggleSidebar: handleToggleSidebar }),
        [isOpen, handleToggleSidebar]
      )}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;

export const useSidebar = () => useContext(SidebarContext);

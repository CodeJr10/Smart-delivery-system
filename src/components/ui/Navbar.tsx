import MenuIcon from "@mui/icons-material/Menu";
import { useEffect } from "react";
import { useStateContext } from "../../contexts/ContextProvider";

// import { ReactNode } from "react";
interface NavButtonProps {
  customFunc: () => void;
  icon: React.ReactNode;
  color: React.CSSProperties;
}

const NavButton: React.FC<NavButtonProps> = ({ customFunc, icon, color }) => (
  <button
    type="button"
    onClick={customFunc}
    style={color}
    className="relative text-xl rounded-full p-3 hover:bg-light-gray "
  >
    {icon}
  </button>
);
const Navbar = () => {
  const { setActiveMenu, screenSize, setScreenSize } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize !== undefined)
      if (screenSize <= 900) {
        setActiveMenu(false);
      } else {
        setActiveMenu(true);
      }
  }, [screenSize]);

  return (
    <div className="flex ">
      <NavButton
        customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
        icon={<MenuIcon />}
        color={{ color: "black" }}
      />
    </div>
  );
};

export default Navbar;

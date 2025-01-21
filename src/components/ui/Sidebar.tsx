import { Link, NavLink } from "react-router-dom";

import CancelIcon from "@mui/icons-material/Cancel";
import { links } from "../../utils/data.tsx";
import { useStateContext } from "../../contexts/ContextProvider.tsx";

// import { ReactNode } from "react";

const Sidebar = () => {
  const { isActiveMenu, setActiveMenu, screenSize } = useStateContext();

  const handleCloseSideBar = () => {
    if (screenSize !== undefined)
      if (isActiveMenu && screenSize > 900) {
        setActiveMenu(false);
      }
  };
  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white bg-black text-sm m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-sm text-black transition ease-in duration: 150ms hover:bg-white m-2";

  // const handleCloseSideBar = () => {
  //   // Add functionality to close sidebar (if needed)
  // };

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {isActiveMenu && (
        <div className="flex justify-between items-center">
          <div className="mt-5">
            <div className="flex justify-between">
              <Link
                to="/"
                onClick={handleCloseSideBar}
                className="items-center gap-3 ml-3 mt-4 flex text-xl font-bold tracking-tight text-slate-900"
              >
                <span>Rentkar</span>
              </Link>
              <button
                onClick={() =>
                  setActiveMenu((prevActiveMenu) => !prevActiveMenu)
                }
                className="text-xl text-black mt-4 block md:hidden"
              >
                <CancelIcon />
              </button>
            </div>
            {links.map((item) => {
              return (
                <div key={item.title}>
                  <p className="text-black m-3 mt-4 font-normal uppercase">
                    {item.title}
                  </p>
                  {item.links.map((link) => {
                    return (
                      <NavLink
                        to={link.path}
                        key={link.name}
                        className={({ isActive }) =>
                          isActive ? activeLink : normalLink
                        }
                        onClick={handleCloseSideBar}
                      >
                        {link.icon && (
                          <span className="text-lg">{link.icon}</span>
                        )}
                        <span className="capitalize">{link.name}</span>
                      </NavLink>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;

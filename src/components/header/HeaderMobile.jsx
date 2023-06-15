import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { MdClose } from "react-icons/md";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { TbDoorExit } from "react-icons/tb";
import { RiUserStarFill } from "react-icons/ri";

import { ShowOnLogin, ShowOnLogout } from "@/components/HiddenLink";
import { AdminOnlyLink } from "@/components/AdminOnlyRoute";

const HeaderMobile = ({ activeLink, displayName }) => {
  const [showMenu, setShowMenu] = useState(false);

  const mostarMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <div className="absolute right-6 top-6 md:hidden ">
        {showMenu ? (
          <MdClose className="text-5xl cursor-pointer " onClick={mostarMenu} />
        ) : (
          <HiOutlineMenuAlt3
            className="text-5xl cursor-pointer "
            onClick={mostarMenu}
          />
        )}
      </div>
      <div
        onClick={mostarMenu}
        className={
          showMenu
            ? "z-40 flex flex-col p-3 fixed inset-0 right-1/3 bg-black/40 backdrop-blur-xl gap-20 "
            : "hidden"
        }
      >
        <ul className="flex flex-col gap-4   justify-center">
          <li className="flex justify-between items-center">
            <Link to="/">
              <h2>
                My Money<span className="text-primary">app</span>
              </h2>
            </Link>
          </li>
          <AdminOnlyLink>
            <li>
              <Link to="admin/all-products">Admin</Link>
            </li>
          </AdminOnlyLink>
          <li className="hover:text-primary  duration-400">
            <NavLink className={activeLink} to="/">
              Inicio
            </NavLink>
          </li>

          <li className="hover:text-primary hover:scale-105 duration-400">
            <NavLink className={activeLink} to="/faq">
              FAQ
            </NavLink>
          </li>
        </ul>
        <ul className="flex flex-col gap-4  justify-center ">
          {/* <li className="hover:text-primary  duration-400">
            <NavLink className={activeLink} to="/login">
              Iniciar Sesion
            </NavLink>
          </li>
          <li className="hover:text-primary  duration-400">
            <NavLink className={activeLink} to="/register">
              Registrate
            </NavLink>
          </li> */}

          <ShowOnLogin>
            <li className="hover:text-primary  duration-400">
              <NavLink to="/user-profile">
                <div className="flex items-center gap-1">
                  Hola,{displayName}
                  <RiUserStarFill className="text-3xl" />
                </div>
              </NavLink>
            </li>
          </ShowOnLogin>

          <ShowOnLogin>
            <li className="hover:text-primary  duration-400">
              <NavLink>
                <div className="flex items-center gap-1">
                  Salir
                  <TbDoorExit className="text-3xl" />
                </div>
              </NavLink>
            </li>
          </ShowOnLogin>
        </ul>
      </div>
    </>
  );
};

export default HeaderMobile;

import { NavLink, Outlet, useNavigation, useLocation } from "react-router-dom";
import "boxicons";
import { useEffect } from "react";
export default function Layout() {
  const navigation = useNavigation();
  const location = useLocation();
  //get location
  useEffect(() => {
    location;
  }, [location]);
  return (
    <>
      <div className="absolute flex flex-row justify-around w-[600px] h-fit top-5">
        <div className="order-0 ">
          <NavLink
            to="/My-Shop/Home"
            className={({ isActive, isPending }) =>
              isPending
                ? " text-orange bg-homeIconeOrange bg-no-repeat pl-6  font-semibold text-xl"
                : isActive
                ? " text-orange bg-homeIconeOrange bg-no-repeat pl-6  font-semibold text-xl"
                : " text-Onyx bg-homeIcone bg-no-repeat pl-6   font-semibold text-xl"
            }
          >
            home
          </NavLink>
        </div>
        <div className="order-1">
          <NavLink
            to="/My-Shop/Products"
            className={({ isActive, isPending }) =>
              isPending
                ? " text-orange bg-productIconeorange bg-no-repeat pl-6  font-semibold text-xl"
                : isActive
                ? " text-orange bg-productIconeorange bg-no-repeat pl-6  font-semibold text-xl"
                : " text-Onyx bg-productIcone bg-no-repeat pl-6   font-semibold text-xl"
            }
          >
            product
          </NavLink>
        </div>
        <div className="order-2">
          <NavLink
            to="/My-Shop/AboutUs"
            className={({ isActive, isPending }) =>
              isPending
                ? " text-orange bg-aboutIconeorange bg-no-repeat pl-6  font-semibold text-xl"
                : isActive
                ? " text-orange bg-aboutIconeorange bg-no-repeat pl-6  font-semibold text-xl"
                : " text-Onyx bg-aboutIcone bg-no-repeat pl-6   font-semibold text-xl"
            }
          >
            aboutUs
          </NavLink>
        </div>
        <div className="order-3">
          <NavLink
            to="/My-Shop/ContactUs"
            className={({ isActive, isPending }) =>
              isPending
                ? " text-orange bg-contactIconeorange bg-no-repeat pl-6  font-semibold text-xl"
                : isActive
                ? " text-orange bg-contactIconeorange bg-no-repeat pl-6  font-semibold text-xl"
                : " text-Onyx bg-contactIcone bg-no-repeat pl-6   font-semibold text-xl"
            }
          >
            contactUs
          </NavLink>
        </div>
        <div className="w-10 h-[3px] bg-orange top-[39.5px] absolute z-10"></div>
        <div className="absolute w-[550px] h-[1px] top-10 bg-Onyx"></div>
        <div
          className={
            navigation.state === "loading"
              ? " bg-red w-full h-1 fixed top-0 "
              : " fixed"
          }
        >
          <Outlet />
        </div>
      </div>
    </>
  );
}

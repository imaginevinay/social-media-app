import { Link, useLocation } from "react-router-dom";
import { bottombarLinks } from "@/constants";
// import { INavLink } from "@/types";

const Bottombar = () => {
  const { pathname } = useLocation();
  return (
    <section className="bottom-bar">
      {bottombarLinks.map((item) => {
        const isActive = pathname === item.route;
        return (
          <Link
            to={item.route}
            key={item.label}
            className={`${isActive && "bg-primary-500 rounded-[10px]"} flex-center flex-col gap-1 p-2 transition`}
          >
            <img
              src={item.imgURL}
              alt={item.label}
              className={` ${isActive && "invert-white"}`}
              width={16}
              height={16}
            />
            <p className="tiny-medium text-light-2">{item.label}</p>
          </Link>
        );
      })}
    </section>
  );
};

export default Bottombar;

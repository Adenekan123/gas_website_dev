import { CustomFlowbiteTheme, DarkThemeToggle, Navbar } from "flowbite-react";
import { NavLink, useLocation } from "react-router-dom";
import { CustomButton } from ".";

const customTheme: CustomFlowbiteTheme["navbar"] = {
  root: {
    base: "px-0 md:pt-6",
  },
  link: {
    base: "block py-2 pr-4 pl-3 md:p-0",
    active: {
      on: "bg-blue text-white dark:text-white md:bg-transparent md:text-blue",
      off: "border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white",
    },
    disabled: {
      on: "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
      off: "",
    },
  },
  collapse: {
    base: "w-full md:block md:w-auto",
    list: "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-12 md:text-sm md:font-medium",
    hidden: {
      on: "hidden",
      off: "",
    },
  },
};

const matchCurrentURL = (url: string, match: string): boolean =>
  url.endsWith(match);

export const Header = () => {
  const { pathname } = useLocation();

  return (
    <Navbar theme={customTheme} fluid rounded className=" dark:bg-black m-0">
      <Navbar.Brand
        as={NavLink}
        to="./"
        className="text-slate-700 dark:text-white p-0"
      >
        <span className="self-center whitespace-nowrap text-lg tracking-wider font-[500]">
          GasNoti.
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <CustomButton
          text="Re-Seller"
          styles="hidden md:block mr-4"
          props={{ href: "/reseller" }}
        />
        <DarkThemeToggle />
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link
          as={NavLink}
          to="/"
          active={matchCurrentURL(pathname, "/")}
        >
          Home
        </Navbar.Link>
        <Navbar.Link
          to="/shop"
          as={NavLink}
          active={matchCurrentURL(pathname, "/shop")}
        >
          Shop
        </Navbar.Link>
        <Navbar.Link href="#">Features</Navbar.Link>
        <Navbar.Link
          as={NavLink}
          to="/support"
          active={matchCurrentURL(pathname, "/support")}
        >
          Support
        </Navbar.Link>
        <Navbar.Link to="/reseller" as={NavLink} className="md:hidden block">
          Re-seller
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

import { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

const SideBar = ({ navOpen, setNavOpen, sidebarRef }) => {
  const lastActiveLink = useRef(null);

  const navItems = [
    {
      label: "Dashboard",
      icon: <i className="fa-brands fa-delicious"></i>,
      link: "/dashboard",
      className: "nav-link",
      ref: lastActiveLink,
    },
    {
      label: "Enquires",
      icon: <i className="fa-solid fa-user-pen"></i>,
      link: "/enquires",
      className: "nav-link",
    },
    {
      label: "Courses",
      icon: <i className="fa-solid fa-book-open"></i>,
      link: "/courses",
      className: "nav-link",
    },
    {
      label: "Trainers",
      icon: <i className="fa-solid fa-chalkboard-user"></i>,
      link: "/trainers",
      className: "nav-link",
    },
    {
      label: "Admissions",
      icon: <i className="fa-solid fa-binoculars"></i>,
      link: "/admissions",
      className: "nav-link",
    },
  ];

  useEffect(() => {
    const initialActive = document.querySelector(".nav-link.active");
    if (initialActive) {
      lastActiveLink.current = initialActive;
    }
  }, []);

  return (
    <>
      <aside className="relative">
        <div
          ref={sidebarRef}
          className={`fixed top-0 left- 0 h-screen p-2 space-y-2 w-64 inset-y-0 z-30 transition-transform text-black bg-white lg:translate-x-0 -translate-x-full rounded-[14px}
            shadow-custom md:${navOpen ? "translate-x-0" : ""} `}
        >
          <div className="block mx-auto px-2 h-16">
            <img
              src="https://xcodersit.com/assets/img/logo/whitelogo.png"
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </div>

          <hr />

          <div className="divide-y p-2">
            <ul className="pt-2 pb-4 space-y-1 text-base">
              {navItems.map(({ label, icon, link, className, ref }, key) => (
                <li key={key} className="">
                  <NavLink
                    to={link}
                    rel={ref}
                    onClick={() => setNavOpen(false)}
                    className={`flex items-center p-3 font-medium space-x-3 rounded-lg ${className}`}
                  >
                    <div className="flex items-center">
                      <span className="px-2">{icon}</span>
                      <span className="mx-3">{label}</span>
                    </div>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="absolute -right-7 top-2 lg:-right-5 lg:hidden"
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <button className="rounded bg-white py-2 text-gray-600 shadow-md transition hover:text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default SideBar;

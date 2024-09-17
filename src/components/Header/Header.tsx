import React from "react";
import { Container, Logo, LogoutButton } from "..";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const authStatus = useSelector((state: any) => state.auth.status);
  const navigate = useNavigate();
  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];
  return (
    <header className="py-3 shadow bg-gray-500">
      <Container>
        <nav className="flex">
          <div className="mr-4">
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </div>
          <ul className="flex ml-auto">
            {navItems.map((nav) =>
              nav.active ? (
                <li key={nav.name}>
                  <button
                    className="inline-block px-6 py-2 duration-2000 hover:bg-blue-100 rounded-full"
                    onClick={() => navigate(nav.slug)}
                  >
                    {nav.name}
                  </button>
                </li>
              ) : null
            )}
          </ul>
          {authStatus && (
            <li>
              <LogoutButton />
            </li>
          )}
        </nav>
      </Container>
    </header>
  );
};

export default Header;

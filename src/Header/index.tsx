import React, { Dispatch, SetStateAction, useState } from "react";
import { Link } from "react-router-dom";
import HomeIcon from "../static/home-icon.png";
import { ILoginInfo } from "./Header.type";

interface HeaderProps {
  loginInfo: ILoginInfo | null;
  setLoginInfo: Dispatch<SetStateAction<ILoginInfo | null>>;
}

function Header(props: HeaderProps) {
  const { loginInfo, setLoginInfo } = props;

  const [loginData, setLoginData] = useState({});

  function login(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    localStorage.setItem("loginInfo", JSON.stringify(loginData));
    setLoginInfo(loginData as ILoginInfo);
    setLoginData({});
  }

  function logOut() {
    localStorage.removeItem("loginInfo");
    setLoginInfo(null);
  }

  return (
    <header className="w-full flex justify-between items-center py-8 md:px-4">
      <Link to="/" className="flex items-center">
        <span className="w-16">
          <img src={HomeIcon} className="w-24 md:w-20 " />
        </span>
        <p className="hidden md:block md:text-4xl font-bold"> Funny Movies</p>
      </Link>
      {loginInfo && (
        <div className="flex items-center w-3/4">
          <p className="pr-2">
            Welcome : <span className="font-bold">{loginInfo.email}</span>
          </p>
          <Link
            to="/share"
            className="rounded-md bg-blue-500 shadow-lg shadow-blue-500/50 px-2 pb-1 mr-2 text-white"
          >
            Share a movie
          </Link>
          <button
            onClick={logOut}
            className="rounded-md bg-indigo-500 shadow-lg hover:shadow-indigo-500/40 px-2 pb-1 mr-2 text-white"
          >
            Logout
          </button>
        </div>
      )}
      {!loginInfo && (
        <form className="flex w-2/3 justify-end pr-2 md:pr-0" onSubmit={login}>
          <div className="flex max-w-full flex-wrap justify-end">
            <input
              type="email"
              name="username"
              className="rounded-md border-2 p-1 sm:w-3/4 md:w-40 mx-1 md:mx-2 mt-1 md:mt-0"
              required
              placeholder="email"
              onChange={(e) =>
                setLoginData((init) => ({ ...init, email: e.target.value }))
              }
            />
            <input
              type="text"
              name="password"
              className="rounded-md border-2 p-1 sm:w-3/4 md:w-40 mx-1 md:mx-2 mt-1 md:mt-0"
              minLength={8}
              required
              placeholder="password"
              onChange={(e) =>
                setLoginData((init) => ({ ...init, password: e.target.value }))
              }
            />
          </div>

          <button
            type="submit"
            className={
              "rounded-md bg-indigo-500 shadow-lg hover:shadow-indigo-500/40 pt-1 pb-2 px-2 text-white " +
              " "
            }
          >
            Login
          </button>
        </form>
      )}
    </header>
  );
}

export default Header;

import React from 'react'
import Logo from './../../assets/logo.png'

const Header = () => {
  return (
    <>
      <header className="bg-white sticky top-0 shadow-sm">
        <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
          <a className="block text-black" href="#">
            <img src={Logo} alt="" className="w-32" />
          </a>

          <div className="flex flex-1 items-center justify-end md:justify-between">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a
                    className="text-gray-900 transition hover:text-gray-500/75"
                    href="#"
                  >
                    {" "}
                    Home{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-900 transition hover:text-gray-500/75"
                    href="#"
                  >
                    {" "}
                    Articles{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-900 transition hover:text-gray-500/75"
                    href="#"
                  >
                    {" "}
                    Categories{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-900 transition hover:text-gray-500/75"
                    href="#"
                  >
                    {" "}
                    About{" "}
                  </a>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="relative mr-2">
                <input
                  placeholder="Search"
                  type="text"
                  id="Search"
                  className="m-1 px-2 py-1 w-full rounded pe-10 shadow-sm/30 sm:text-sm"
                />

                <span className="absolute inset-y-0 right-2 grid w-8 place-content-center">
                  <button
                    type="button"
                    aria-label="Submit"
                    className="rounded-full p-1.5 text-gray-700 transition-colors hover:bg-gray-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                      />
                    </svg>
                  </button>
                </span>
              </div>

              <div className="sm:flex sm:gap-4">
                <a
                  className="block rounded-md bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-600"
                  href="#"
                >
                  Login
                </a>

                <a
                  className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-black transition hover:text-gray-600/75 sm:block"
                  href="#"
                >
                  Register
                </a>
              </div>

              <button className="block rounded-sm bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
                <span className="sr-only">Toggle menu</span>
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
        </div>
      </header>
    </>
  );
}

export default Header
import { Link } from "@remix-run/react";
import { useOptionalUser } from "~/utils";

import Hamburger from "~/components/Hamburger";

export default function Index() {
  const user = useOptionalUser();
  return user ? (
    <>
      <nav className="bg-black">
        <div className="container mx-auto flex items-center justify-between p-3">
          <Link to="/">
            <img src="/golf.png" alt="Bet Majors" className="h-10 w-10" />
          </Link>
          <div className="flex items-center">
            <Hamburger></Hamburger>
          </div>
        </div>
      </nav>
      <main>
        <Link to="/event">
          <div className="m-4 rounded border border-black bg-white p-4">
            The Open
          </div>
        </Link>
        <h2 className="text-3xl">Previous Tournaments</h2>
        <Link to="/event">
          <div className="m-4 rounded border border-black bg-white p-4">
            RBC Canadian Open
          </div>
        </Link>
      </main>
    </>
  ) : (
    <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
      <div className="relative sm:pb-16 sm:pt-8">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
            <div className="absolute inset-0">
              <img
                className="h-full w-full object-cover"
                src="https://user-images.githubusercontent.com/1500684/158276320-c46b661b-8eff-4a4d-82c6-cf296c987a12.jpg"
                alt="BB King playing blues on his Les Paul guitar"
              />
              <div className="absolute inset-0 bg-[color:rgba(27,167,254,0.5)] mix-blend-multiply" />
            </div>
            <div className="lg:pb-18 relative px-4 pt-16 pb-8 sm:px-6 sm:pt-24 sm:pb-14 lg:px-8 lg:pt-32">
              <h1 className="text-center text-6xl font-extrabold tracking-tight sm:text-8xl lg:text-9xl">
                <span className="block uppercase text-blue-500 drop-shadow-md">
                  Blues Stack
                </span>
              </h1>
              <p className="mx-auto mt-6 max-w-lg text-center text-xl text-white sm:max-w-3xl">
                Check the README.md file for instructions on how to get this
                project deployed.
              </p>
              <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                  <Link
                    to="/join"
                    className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-blue-700 shadow-sm hover:bg-blue-50 sm:px-8"
                  >
                    Sign up
                  </Link>
                  <Link
                    to="/login"
                    className="flex items-center justify-center rounded-md bg-blue-500 px-4 py-3 font-medium text-white hover:bg-blue-600  "
                  >
                    Log In
                  </Link>
                </div>
              </div>
              <a href="https://remix.run">
                <img
                  src="https://user-images.githubusercontent.com/1500684/158298926-e45dafff-3544-4b69-96d6-d3bcc33fc76a.svg"
                  alt="Remix"
                  className="mx-auto mt-16 w-full max-w-[12rem] md:max-w-[16rem]"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

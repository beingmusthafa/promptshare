"use client";
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { useState, useEffect } from "react";
import logo from "@assets/images/logo.svg";

const Navbar = () => {
  let { data: session } = useSession();
  let [providers, setProviders] = useState(null);
  const [toggleDropdown, settoggleDropdown] = useState(false);
  useEffect(() => {
    (async function findAndSetProviders() {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);
  return (
    <nav className=" flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src={logo}
          alt="Promptshare logo"
          height={30}
          width={30}
          className="object-contain"
        />
        <p className="logo_text">Promptshare</p>
      </Link>
      <div className="sm:flex hidden">
        {session?.user ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Create post
            </Link>
            <button
              type="button"
              onClick={signOut}
              href="/sign-out"
              className="outline_btn"
            >
              Sign out
            </button>
            <Link href="/profile">
              <Image
                src={session?.user.image}
                width={35}
                height={35}
                alt="Profile image"
                className="rounded-full"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  key={provider.name}
                  className="black_btn"
                  onClick={() => signIn(provider.id)}
                >
                  Sign in
                </button>
              ))}
          </>
        )}
      </div>
      <div className="sm:hidden flex relative">
        {session?.user ? (
          <div className="flex">
            <Image
              src={session?.user.image}
              height={30}
              width={30}
              alt="Profile image"
              onClick={() => settoggleDropdown((prev) => !prev)}
            />
            {toggleDropdown && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => settoggleDropdown(false)}
                >
                  Profile
                </Link>
                <Link
                  href="/create-prompt"
                  className="dropdown_link"
                  onClick={() => settoggleDropdown(false)}
                >
                  Create post
                </Link>
                <button
                  type="button"
                  className="w-full mt-5 black_btn"
                  onClick={() => {
                    settoggleDropdown(false);
                    signOut();
                  }}
                >
                  Sign out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  key={provider.name}
                  className="black-btn"
                  onClick={() => signIn(provider.id)}
                >
                  Sign in
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

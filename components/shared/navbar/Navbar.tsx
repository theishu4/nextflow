import { SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import Theme from "./Theme";
import MobileNav from "./MobileNav";
import GlobalSearch from "../search/GlobalSearch";

const Navbar = () => {
  return (
    <header className="background-light900_dark200 sticky top-0 z-50 w-full">
      <div className="flex-between h-16 gap-5 px-7 shadow-light-300 dark:shadow-none">
        <div>
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/assets/images/site-logo.svg"
              width={23}
              height={23}
              alt="NextFlow"
            />
            <p className="h2-bold font-spaceGrotesk text-dark-100 dark:text-light-900 max-sm:hidden">
              Next
              <span className="text-primary-500">Flow</span>
            </p>
          </Link>
        </div>
        <GlobalSearch />
        <div className="flex-between gap-5">
          <Theme />
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "h-9 w-9",
                },
                variables: {
                  colorPrimary: "#ff7000",
                },
              }}
            />
          </SignedIn>
          <MobileNav />
        </div>
      </div>
    </header>
  );
};
export default Navbar;

import MenuNav from "./MenuNav";
import Image from "next/image";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "next/link";
const Navbar = () => {
  return (
    <>
      <nav
        className=" h-[60px] text-red-500 px-5 md:px-10  
      flex items-center justify-between border-b-[1px]
       border-b-red-500 uppercase "
      >
        <div className="hidden md:flex gap-6 ">
          <Link href={"/"}>Homepage</Link>
          <Link href={"/menu"}>Menu</Link>
          <Link href={"/contact"}>Contact</Link>
        </div>
        <Link className="flex items-center" href={"/"}>
          <Image
            src={"/images/Pizza-logo.png"}
            width={38}
            height={38}
            alt="Logo-Image"
          />
          <h1 className="text-2xl font-bold"> Pizzeria</h1>
        </Link>
        <div className=" hidden md:flex gap-5  ">
          <Link className="flex items-start gap-2" href={"/login"}>
            <AccountCircleIcon /> LOGIN
          </Link>
          <Link className="flex items-start gap-2" href={"/cart"}>
            <ShoppingCartIcon />
            CART
          </Link>
        </div>
        <MenuNav />
      </nav>
    </>
  );
};

export default Navbar;

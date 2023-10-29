import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 px-5 md:px-0">
      <div className="container mx-auto flex flex-wrap justify-center gap-8">
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/6 mb-6">
          <h2 className="text-2xl font-bold text-red-500">PIZZERIA</h2>
          <p>"Crafting Delicious Moments, One Slice at a Time"</p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/6 mb-6">
          <p>
            <Link
              className="hover:text-orange-500 transition duration-500"
              href="/menu"
            >
              Menu
            </Link>
          </p>
          <p>
            <Link
              className="hover:text-orange-500 transition duration-500"
              href="/contact"
            >
              Contact
            </Link>
          </p>
          <p>
            <Link
              className="hover:text-orange-500 transition duration-500"
              href="/login"
            >
              Login
            </Link>
          </p>
          <div className="flex flex-col gap-2 mt-5">
            <p> Follow on</p>
            <div className="flex items-center">
              <Link href="https://www.instagram.com" passHref>
                <InstagramIcon className="text-white  hover:text-blue-400 cursor-pointer" />
              </Link>
              <Link href="https://www.facebook.com" passHref>
                <FacebookIcon className="text-white  hover:text-blue-400 cursor-pointer" />
              </Link>
              <Link href="https://www.youtube.com" passHref>
                <YouTubeIcon className="text-white  hover:text-blue-400 cursor-pointer" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <p>© All right reserved Bonn 2023</p>
      </div>
    </footer>
  );
};

export default Footer;

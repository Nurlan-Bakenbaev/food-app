import Featured from "@/components/Featured";
import Offer from "@/components/Offer";
import Slider from "@/components/Slider";
import { Roboto, Raleway, Black_Ops_One } from "next/font/google";

const roboto = Roboto({
  weight: "500",
  style: "normal",
  subsets: ["latin"],
});
const raleway = Raleway({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});
const black = Black_Ops_One({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});
export default function Home() {
  return (
    <main>
      <div className={roboto.className}>
        <Slider />
      </div>
      <div className={raleway.className}>
        <Featured />
      </div>
      <div className={black.className}>
        <Offer />
      </div>
    </main>
  );
}

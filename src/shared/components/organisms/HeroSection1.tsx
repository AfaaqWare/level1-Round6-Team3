import Herosection from "./HeroSection";
import { Heroimage2 } from "@/assets/images/images";
import ContentHeroection2 from "../molecules/ContentHeroection2";
export default function HeroSection1() {
  return (
    <div>
      <Herosection
        src={Heroimage2}
        alt="hero-image2"
        content={
          <ContentHeroection2
            title="Simple Smart Surveys"
            text="Create surveys, share them easily, and get real feedback. Survey Land lets you build MCQs, comment boxes, and more — all in one simple platform."
            btn1="Exolore"
            btn2="create"
          />
        }
      />
    </div>
  );
}

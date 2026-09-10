import AboutUsSection from "./component/AboutUsSection";
import CallSection from "./component/CallSection";
import Service from "./component/Service";
import Slider from "./component/Slider";

export default function Home() {
  return (
    <>
        <Slider/>
        <AboutUsSection/>
        <Service/>
        <CallSection/>
    </>
  )
}

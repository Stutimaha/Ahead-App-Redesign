import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Openvacancies from "../components/Openvacancies";
import EQbeatsIQ from "../components/EQbeatsIQ";
import BeBestYou from "../components/BeBestYou";
import EverWonder from "../components/EverWonder";
import Test from "../components/Test";
import WorkWithUs from "../components/WorkWithUs";
import MeetAheadCard from "@/components/MeetAheadCard";
import DoesThisSoundFamiliar from "../components/DoesThisSoundFamiliar";
import MasterLife from "@/components/MasterLife";
import SelfImprovement from "@/components/SelfImprovement";
export default function Home() {
  return (
    <>
      <Navbar />
      <MasterLife/>
      <EQbeatsIQ />
      <DoesThisSoundFamiliar />
      <MeetAheadCard/>
      <SelfImprovement/>
      <BeBestYou />
      <EverWonder />
      <Test />
      <WorkWithUs />
      <Openvacancies />
      <Footer />
    </>
  );
}

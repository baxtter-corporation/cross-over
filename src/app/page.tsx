import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react";

import HeaderSection from "./component/headersection";
import PartinerAndClients from "./component/partinersandclients";
import About from "./component/about";
import Service from "./component/service";
import Footer from "./component/footer";

export default function Home() {
  return (
    <span>
      <HeaderSection/>
      <PartinerAndClients/>
      <About/>
      <Service/>
      <Footer/>
      <Analytics />
      <SpeedInsights />
    </span>
  );
}

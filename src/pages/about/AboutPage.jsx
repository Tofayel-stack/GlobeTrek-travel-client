import SectionBanner from "../../components/sectionBanner/SectionBanner"
import AboutUsImages from "./AboutUsImages"
import AboutUsTextContent from "./AboutUsTextContent"
import Counter from "./Counter"
import WhyUs from "./WhyUs"

const AboutPage = () => {
    return (
      <div>
        <SectionBanner sectionName={'About Us'}></SectionBanner>
        <div className="grid gap-2 lg:grid-cols-2 z-30 container m-auto py-12">
            <AboutUsImages></AboutUsImages>
            <AboutUsTextContent></AboutUsTextContent>
        </div>
        <Counter></Counter>
        <WhyUs></WhyUs>

        

      </div>
    )
}

export default AboutPage;
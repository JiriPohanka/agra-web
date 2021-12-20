import Hero from "../components/hero/Hero"
import FbFeedSection from "../components/FbFeedSection"
import ImageStrip from "../components/ImageStrip"
import FacebookGrid from "../components/facebookGrid/FacebookGrid";

const Home = () => {
    return (
        <div>
            <Hero />
            <FbFeedSection />
            <ImageStrip bgr={"bg-img-strip1"} />
            <div className="h-screen" />
            <ImageStrip bgr={"bg-img-strip2"} />

            <FacebookGrid />
        </div>
    )
}

export default Home

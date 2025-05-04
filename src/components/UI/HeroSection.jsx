import { FaLongArrowAltRight } from "react-icons/fa"

export const HeroSection = () => {
    return (
        <main className="hero-section main">
            <div className="container grid grid-two-cols">
                <div className="hero-content">
                    <div className="heading-xl">
                        Explore the World, One Country at a Time.
                    </div>
                    <p className="paragraph">
                        Discover the history, culture, and beauty of every nation. Sort, search, and filter through countries to find the details you need.
                    </p>
                    <button className="btn btn-darken btn-inline bg-white-box">
                        Start Exploring <FaLongArrowAltRight />
                    </button>
                </div>
                <div className="hero-image">
                    <img src="/images/world.png"
                        alt="World is beauty"
                        className="banner-image" />
                </div>
            </div>
        </main>
    )
}
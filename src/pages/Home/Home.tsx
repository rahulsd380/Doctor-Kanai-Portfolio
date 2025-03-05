import AboutMe from "../../components/HomePage/AboutMe/AboutMe";
import ContactMe from "../../components/HomePage/ContactMe/ContactMe";
import Features from "../../components/HomePage/Features/Features";
import Hero from "../../components/HomePage/Hero/Hero";
import MyReach from "../../components/HomePage/MyReach/MyReach";

const Home = () => {
    return (
        <div>
            <Hero/>
            <Features/>
            <AboutMe/>
            <MyReach/>
            <ContactMe/>
        </div>
    );
};

export default Home;
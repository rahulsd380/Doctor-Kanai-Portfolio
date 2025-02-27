import { IMAGES } from "../../../assets";
import Container from "../../Reusable/Container/Container";

const Hero = () => {
    return (
        <div
            className="font-Nunito-Bengali bg-[#EAEBEC] relative"
            style={{
                backgroundImage: `url(${IMAGES.heroBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height : "510px"
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gray-200 opacity-70"></div>

            <Container>
                <div className="relative flex items-center gap-10">
                    <div>
                        <h2 className="text-primary-10 text-lg font-medium">
                            সেরা স্বাস্থ্যসেবা আপনার পাশে
                        </h2>
                        <h1 className="text-neutral-10 text-5xl font-bold max-w-[600px] leading-[70px] mt-3">
                            আপনার সুস্থতা আমাদের অগ্রাধিকার
                        </h1>
                        <p className="max-w-[600px] mt-5 text-neutral-10">
                            আমাদের ক্লিনিকে আমরা আপনার মানসিক এবং শারীরিক সুস্থতাকে সমানভাবে গুরুত্ব দিয়ে যত্ন নিই। আমাদের বিশেষজ্ঞ ডাক্তাররা সর্বোত্তম চিকিৎসা সেবার প্রতিশ্রুতি দিয়ে থাকেন।
                        </p>
                        <button className="bg-primary-10 px-10 py-3 rounded-3xl text-white font-bold text-sm mt-5">
                            অ্যাপয়েন্টমেন্ট নিন
                        </button>
                    </div>

                    <img
                        src={IMAGES.doctorImage}
                        alt="doctor"
                        className="w-[500px] relative z-10"
                    />
                </div>
            </Container>
        </div>
    );
};

export default Hero;

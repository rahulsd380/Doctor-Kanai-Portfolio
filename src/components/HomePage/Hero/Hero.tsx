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
        height: "510px",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-200 opacity-70"></div>

      <Container>
        <div className="relative flex flex-col md:flex-row items-center pt-20 lg:p-0 gap-10">
          <div className="text-center md:text-left">
            <h2 className="text-primary-10 text-lg font-medium">
              সেরা স্বাস্থ্যসেবা আপনার পাশে
            </h2>
            <h1 className="text-neutral-10 text-[30px] md:text-5xl font-bold max-w-[600px] leading-[50px] md:leading-[70px] mt-3">
              আপনার সুস্থতা আমাদের অগ্রাধিকার
            </h1>
            <p className="max-w-[600px] mt-5 text-neutral-10">
              আমাদের ক্লিনিকে আমরা আপনার মানসিক এবং শারীরিক সুস্থতাকে সমানভাবে গুরুত্ব দিয়ে যত্ন নিই। আমাদের বিশেষজ্ঞ ডাক্তাররা সর্বোত্তম চিকিৎসা সেবার প্রতিশ্রুতি দিয়ে থাকেন।
            </p>
            <a
              href="http://wa.me/8801722237642"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-primary-10 px-10 py-3 rounded-3xl text-white font-bold text-sm mt-5 cursor-pointer">
                অ্যাপয়েন্টমেন্ট নিন
              </button>
            </a>
          </div>

          <img
            src={IMAGES.doctorImage}
            alt="doctor"
            className="hidden lg:block w-[500px] relative z-10 md:w-[400px] lg:w-[500px] mt-10 md:mt-0"
          />
        </div>
      </Container>
    </div>
  );
};

export default Hero;
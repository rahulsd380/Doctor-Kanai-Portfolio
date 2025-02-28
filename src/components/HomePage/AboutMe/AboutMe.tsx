import { IMAGES } from "../../../assets";
import Container from "../../Reusable/Container/Container";

const AboutMe = () => {
    return (
        <div className="p-5 mt-16 bg-neutral-light-10 font-Nunito-Bengali">
            <Container>
                <div className="flex flex-col lg:flex-row items-center gap-10">
                    <div className="flex flex-col gap-7 text-neutral-10/80 font-medium">
                        <h1 className="text-neutral-10 text-5xl font-bold max-w-[600px] leading-[70px] mt-3">
                            আমার সম্পর্কে
                        </h1>
                        <p className="">
                            আমি ডাঃ কানাই, একজন পেশাদার চিকিৎসক। আমি অন্তঃরীণ মেডিসিনে ১৫ বছরেরও বেশি অভিজ্ঞতা নিয়ে কাজ করছি। আমি ঢাকা মেডিকেল কলেজ থেকে স্নাতক ডিগ্রি অর্জন করেছি, যেখানে আমি সম্মানের সাথে উত্তীর্ণ হই এবং রোগীদের সেবা করার অঙ্গীকারে নিজেকে উৎসর্গ করেছি।
                        </p>
                        <p>
                            আমি বঙ্গবন্ধু শেখ মুজিব মেডিকেল বিশ্ববিদ্যালয়ে ইন্টার্নশিপ সম্পন্ন করেছি, যেখানে আমি ক্লিনিক্যাল দক্ষতা অর্জন করেছি এবং জটিল রোগ নির্ণয় ও চিকিৎসায় গভীর অভিজ্ঞতা লাভ করেছি। আমার লক্ষ্য সবসময় রোগীদের সর্বোত্তম সেবা নিশ্চিত করা।
                        </p>
                        <p>
                            রোগীদের সাথে আন্তরিক ও সহানুভূতিশীল আচরণ করা আমার অন্যতম গুণ। আমি সবসময় সময় নিয়ে রোগীদের কথা শুনি এবং তাদের সমস্যার সমাধানে ব্যক্তিগতকৃত চিকিৎসা পরিকল্পনা তৈরি করি। রোগীর সুস্থতা নিশ্চিত করাই আমার প্রধান অঙ্গীকার।
                        </p>
                        <p>
                            আমি স্বাস্থ্যসেবা ক্ষেত্রে উন্নয়নের জন্য নিরলসভাবে কাজ করে যাচ্ছি। সর্বোত্তম চিকিৎসা সেবা প্রদানের মাধ্যমে রোগীদের জীবনমান উন্নয়ন করাই আমার প্রধান লক্ষ্য।
                        </p>

                        <a href="http://wa.me/8801722237642" target="_blank" rel="noopener noreferrer" className="w-fit">
                            <button className="bg-primary-10 px-10 py-3 rounded-3xl text-white font-bold text-sm cursor-pointer w-fit">
                                যোগাযোগ করুন
                            </button>
                        </a>
                    </div>
                    <img
                        src={IMAGES.aboutUsImg}
                        alt="doctor"
                        className="w-[500px] relative z-10"
                    />
                </div>
            </Container>
        </div>
    );
};

export default AboutMe;
import { MdOutlineCall, MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import Container from "../../Reusable/Container/Container";
import { ICONS } from "../../../assets";

const ContactMe = () => {
    const socialLinks = [
            {
                icon : ICONS.facebook,
                href : ""
            },
            {
                icon : ICONS.instagram,
                href : ""
            },
            {
                icon : ICONS.whatsapp,
                href : "http://wa.me/8801722237642"
            },
        ];
    return (
        <Container>
            <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-[35px] rounded-xl mt-20">

                {/*  informations  */}
                <aside className="w-full bg-gray-800 flex flex-col justify-between p-[25px] rounded-md">

                    <div>
                        <h1 className="text-[2rem] font-[600] leading-[35px] text-white">যোগাযোগের তথ্য</h1>
                        <p className="text-[0.9rem] mt-1 mb-8 text-white">যেকোনো প্রয়োজনে কল অথবা ইমেইল করতে পারেন অথবা চলে আসতে পারেন আমাদের চেম্বারে</p>
                    </div>

                    <div className="flex flex-col gap-[20px] text-gray-300">
                        <p className="flex items-center gap-[8px]">
                            <MdOutlineCall />
                            +8801722237642
                        </p>
                        <p className="flex items-center break-all gap-[8px]">
                            <MdOutlineEmail />
                            drkanai@gmail.com
                        </p>
                        <p className="flex items-center gap-[8px]">
                            <IoLocationOutline />
                            Kamalapur, Adarsha Sadar, Cumilla
                        </p>
                    </div>

                    <div className="flex items-center gap-5 mt-10 md:mt-0">
                    {
                        socialLinks?.map(link => 
                            <a href={link?.href}>
                                <img src={link?.icon} alt="" className="size-7" />
                            </a>
                        )
                    }
                    </div>
                </aside>

                {/* form area */}
                <form className="pt-[20px]">
                    <div className="flex flex-col sm:flex-row items-center gap-[30px]">
                        <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                            <label className="text-[1rem] text-gray-700">First Name</label>
                            <input type="text"
                                className="peer border-gray-300 border-b outline-none focus:border-[#3B9DF8] w-full text-gray-400 transition-colors duration-300"
                            />
                        </div>

                        <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                            <label className="text-[1rem] text-gray-700">Last Name</label>
                            <input type="text"
                                className="peer border-gray-300 border-b outline-none focus:border-[#3B9DF8] w-full text-gray-400 transition-colors duration-300"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-[30px] mt-10">
                        <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                            <label className="text-[1rem] text-gray-700">Email Address</label>
                            <input type="email"
                                className="peer border-gray-300 border-b outline-none focus:border-[#3B9DF8] w-full text-gray-400 transition-colors duration-300"
                            />
                        </div>

                        <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                            <label className="text-[1rem] text-gray-700">Phone Number</label>
                            <input type="number"
                                className="peer border-gray-300 border-b outline-none focus:border-[#3B9DF8] w-full text-gray-400 transition-colors duration-300"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-[5px] w-full mt-10">
                        <label className="text-[1rem] text-gray-700">Write Message</label>
                        <textarea
                            className="peer min-h-[100px] border-gray-300 border-b resize-none outline-none w-full text-gray-400 transition-colors focus:border-[#3B9DF8] duration-300"
                        ></textarea>
                    </div>


                    <div className="w-full flex items-center sm:items-end justify-center sm:justify-end mt-5">
                    <a href="http://wa.me/8801722237642" target="_blank" rel="noopener noreferrer" className="w-fit">
                            <button className="bg-primary-10 px-10 py-3 rounded-3xl text-white font-bold text-sm cursor-pointer w-fit">
                                যোগাযোগ করুন
                            </button>
                        </a>
                    </div>

                </form>
            </section>
        </Container>
    );
};

export default ContactMe;

import { ICONS } from "../../../assets";
import Container from "../../Reusable/Container/Container";

const Footer = () => {
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
        <div className="bg-primary-10/10 font-Nunito-Bengali py-10 mt-20">
            <Container>
                <div className="flex flex-col-reverse md:flex-row gap-7 md:gap-0 items-center justify-between">
                    <p className="text-neutral-10/80 font-medium">
                        © সকল কপিরাইট ড. রূপক চন্দ্র রায় এর দ্বারা সংরক্ষিত
                    </p>

                    <div className="flex items-center gap-7">
                    {
                        socialLinks?.map(link => 
                            <a href={link?.href}>
                                <img src={link?.icon} alt="" className="size-9" />
                            </a>
                        )
                    }
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;
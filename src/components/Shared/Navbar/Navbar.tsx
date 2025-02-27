import { Link } from "react-router-dom";
import { ICONS } from "../../../assets";
import Container from "../../Reusable/Container/Container";

const Navbar = () => {
    const navlinks = [
        {
            label: "হোম",
            path: "/",
        },
        {
            label: "আমার সম্পর্কে",
            path: "/",
        },
        {
            label: "সেবা সমূহ",
            path: "/",
        },
        {
            label: "যোগাযোগ",
            path: "/",
        },
    ]
    return (
        <div className="py-6 bg-neutral-light-10">
                <Container>
            <div className="flex items-center justify-between">
                <Link to={"/"} className="flex items-center gap-2 text-2xl font-Poppins font-bold">
                    <img src={ICONS.doctor} alt="doctor" className="size-8" />
                    ড. কানাই রায়
                </Link>

                <div className="flex items-center gap-5">
                    {
                        navlinks.map((link, index) => 
                        <Link key={index} to={`/${link?.path}`} className="font-Nunito-Bengali font-semibold">
                            {link?.label}
                        </Link>
                        )
                    }
                </div>
            </div>
        </Container>
            </div>
    );
};

export default Navbar;
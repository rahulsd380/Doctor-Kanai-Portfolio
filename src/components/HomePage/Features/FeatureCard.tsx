
type TFeatureCard = {
    icon: string;
    subtitle: string;
    title: string;
    description?: string;
    timeSchedule?: string[];
    isBtnVisible?: boolean;
    variant?: "primary" | "secondary";
}
const FeatureCard:React.FC<TFeatureCard> = ({ icon, subtitle, title, description, timeSchedule, isBtnVisible = false, variant }) => {
    return (
        <div className="bg-gray-50/50 p-5 rounded-lg shadow-xl flex flex-col gap-2">
            <div className="size-20 rounded-lg bg-primary-10/10 p-3">
                <img src={icon} alt="" />
            </div>
            <h2 className="text-primary-10 text-lg font-medium">
                {subtitle}
            </h2>
            <h1 className="text-neutral-10 text-xl font-extrabold">
                {title}
            </h1>
            {
                variant === "primary" ?
                    <p className="text-neutral-10 mt-3">
                        {description}
                    </p>
                    :
                    <div className="flex flex-col gap-3 mt-3">
                        {
                            timeSchedule?.map((schedule:string) => 
                                <p key={schedule} className="text-neutral-10 border-b pb-1 border-neutral-10/20">
                                {schedule}
                            </p> 
                            )
                        }
                    </div>
            }
            {
                isBtnVisible &&
                <button className="bg-primary-10 px-5 py-3 rounded-3xl text-white font-bold text-sm mt-2 w-fit">
                    অ্যাপয়েন্টমেন্ট নিন
                </button>
            }
        </div>
    );
};

export default FeatureCard;
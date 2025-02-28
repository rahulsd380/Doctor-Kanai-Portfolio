import { ICONS } from "../../../assets";
import Container from "../../Reusable/Container/Container";
import FeatureCard from "./FeatureCard";

const Features = () => {
    return (
        <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10">
                <FeatureCard
                    icon={ICONS.appointment}
                    subtitle={"২৪ ঘণ্টা আপনার পাশে"}
                    title={"অনলাইন অ্যাপয়েন্টমেন্ট"}
                    description={"আমরা পারিবারিক চিকিৎসার নীতিমালা বাস্তবায়ন করেছি, যা আপনার এবং আপনার পরিবারের জন্য নিরবচ্ছিন্ন যত্ন ও সহায়তা নিশ্চিত করে।"}
                    isBtnVisible={true}
                    variant={"primary"}
                />
                <FeatureCard
                    icon={ICONS.time}
                    subtitle={"সময়সূচি"}
                    title={"রোগী দেখার সময়সূচি"}
                    timeSchedule={[
                        "শনিবার - রবিবার: সকাল ৯:০০ - সন্ধ্যা ৬:০০",
                        "সোমবার - বুধবার: সকাল ৭:০০ - সন্ধ্যা ৬:০০",
                        "শুক্রবার - শনিবার: সকাল ৮:০০ - সন্ধ্যা ৬:০০"
                    ]}
                    variant={"secondary"}
                />
                <FeatureCard
                    icon={ICONS.support}
                    subtitle={"জরুরি সেবা"}
                    title={"+৮৮০ ১৭২২-২৩৭৬৪২"}
                    description={"জরুরি অবস্থায় সর্বদা সহায়তা পাওয়ার জন্য আমাদের সাথে যোগাযোগ করুন। আমরা পারিবারিক চিকিৎসার নীতিমালা অনুসরণ করি, যা আপনার নিরবচ্ছিন্ন যত্ন নিশ্চিত করে।"}
                    variant={"primary"}
                />
            </div>
        </Container>
    );
};

export default Features;
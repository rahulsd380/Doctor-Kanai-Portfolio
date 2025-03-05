import Container from "../../Reusable/Container/Container";

const MyReach = () => {
    const details = [
        {
            value: "১০+",
            title: "বছরের সম্মিলিত অভিজ্ঞতা"
        },
        {
            value: "৫০০+",
            title: "সফল চিকিৎসা সেবা"
        },
        {
            value: "২৪/৭",
            title: "জরুরি পরিষেবা"
        },
        {
            value: "৯৫%",
            title: "রোগী সন্তুষ্টি হার"
        },
    ];

    return (
        <Container>
            <div className="bg-primary-10 p-10 rounded-2xl font-Nunito-Bengali grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0 items-center justify-between mt-20">
                {
                    details.map((detail, index) => (
                        <div key={index} className="flex flex-col items-center text-center text-gray-50">
                            <h1 className="text-5xl font-bold">
                                {detail?.value}
                            </h1>
                            <p className="max-w-[600px] mt-3">
                                {detail?.title}
                            </p>
                        </div>
                    ))
                }
            </div>
        </Container>
    );
};

export default MyReach;
import { ReactNode } from "react";


const Container = ({children} : {children:ReactNode}) => {
    return (
        <div className="max-w-[1100px] mx-auto w-full px-5 xl:px-0">
            {children}
        </div>
    );
};

export default Container;
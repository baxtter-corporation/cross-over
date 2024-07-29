import { FC, ReactNode } from "react";

interface containerprops {
    children: React.ReactNode;
    customClass?: string,
    id?: string,
}

const Container: React.FC<containerprops> = ({children, customClass, id}) => {
    return (
        <div className={`md:px-[8em] md:py-[.5em] ${customClass}`} id={id}>
            {children}
        </div>
    )
}
export default Container;
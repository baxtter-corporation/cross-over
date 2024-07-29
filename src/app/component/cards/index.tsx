import Image from "next/image";

type props = {
    text?: string,
    title?: string
}

const Card = (prop:props) => {
    return(
        <span className="md:w-[360px] flex flex-col">
            <span className="flex flex-col md:gap-[1em] md:p-[2em]">
                <span className="flex flex-col gap-[1em]">
                    <span className="font-[500] text-[14pt]">{prop.title}</span>
                </span>
                <span className="">{prop.text}</span>
            </span>
        </span>
    )
}

export default Card;;
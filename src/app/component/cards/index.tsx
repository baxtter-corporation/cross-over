import Image from "next/image";

type props = {
    icon?: string,
    text?: string,
    title?: string
}

const Card = (prop:props) => {
    return(
        <span className="md:w-[360px] flex flex-col max-sm:items-center max-sm:justify-center max-lg:items-center max-lg:justify-center">
            <span className="flex flex-col md:gap-[1em] md:p-[2em] max-sm:items-center max-sm:justify-center max-lg:items-center max-lg:justify-center">
                <span className="flex flex-col gap-[1em] max-sm:items-center max-sm:justify-center max-lg:items-center max-lg:justify-center">
                    <Image src="/image/vision.svg" width={22} height={22} alt="Vision" className="max-sm:w-[30px] max-lg:w-[30px]"/>
                    <span className="font-[500] text-[14pt]">{prop.title}</span>
                </span>
                <span className="max-sm:text-center max-lg:text-center">{prop.text}</span>
            </span>
        </span>
    )
}

export default Card;;
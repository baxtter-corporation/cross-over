import Style from "../../../../style/index.module.css";

type cardtype = {
    background?: string,
    title?: string,
    text?: string,
}

const OtherCard = (prop: cardtype) => {

    const isone = prop.background == "1" ? Style.cardbgimage1 : prop.background == "2" ? Style.cardbgimage2 : prop.background == "3" ? Style.cardbgimage3 : prop.background == "4" ? Style.cardbgimage4 : Style.cardbgimage1;

    return (
        <div className={`${isone} md:w-[250px] h-[210px] flex flex-col justify-end text-white rounded-[5px] max-sm:w-full max-lg:w-full`}>
            <span className="p-[.5em]">
                <h3 className="font-[700]">{prop.title}</h3>
                <p className="text-[10pt]">{prop.text}</p>
            </span>
        </div>
    )
}

export default OtherCard;
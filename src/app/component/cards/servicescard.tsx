'use client';
import Image, { ImageProps } from "next/image";
import React from "react";

type proprieties = {
    img?: any,
    title?: string,
    text?: string,
} 

const ServiceCard = (props: proprieties) => {
    return (
        <span className="flex flex-col gap-[1em] md:w-[20%] max-sm:w-full max-lg:w-full p-[.2em]">
            <span className="md:w-full flex flex-col gap-[1em] max-sm:items-center max-sm:text-center max-lg:text-center max-lg:items-center">
                <span>
                    <Image width={0} height={0} src={props.img} alt="" className="w-[2em]"/>
                </span>
                <span className="font-[600] max-sm:w-full max-lg:w-full w-full">
                    {props.title}
                </span>
            </span>
            <span className="text-[9pt] w-full text-justify max-sm:text-center max-sm:w-full max-lg:w-full max-sm:text-[12pt] max-lg:text-[12pt]">
                {props.text}
            </span>
        </span>
    )
}

export default ServiceCard;
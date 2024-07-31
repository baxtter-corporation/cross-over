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
        <span className="flex flex-col gap-[1em] md:w-[260px] max-sm:w-full max-lg:w-full p-[.2em]">
            <span className="md:w-full flex flex-col gap-[1em] max-sm:items-center max-sm:text-center max-lg:text-center max-lg:items-center max-xl:w-full max-xl:items-center">
                <span>
                    <Image width={8} height={8} src={props.img} alt="" className="w-[2em]"/>
                </span>
                <span className="font-[600] max-sm:w-full max-lg:w-full w-full">
                    {props.title}
                </span>
            </span>
            <span className="text-[9pt] w-full text-justify max-xl:text-center max-sm:text-center max-sm:w-full max-lg:w-full max-sm:text-[12pt] max-lg:text-[12pt] max-xl:w-full">
                {props.text}
            </span>
        </span>
    )
}

export default ServiceCard;
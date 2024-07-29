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
        <span className="flex flex-col gap-[1em] md:w-[25%] max-sm:w-full max-lg:w-full">
            <span className="md:w-[70%] flex flex-col gap-[1em] max-sm:flex-row max-sm:items-center max-lg:flex-row max-lg:items-center">
                <span>
                    <Image width={0} height={0} src={props.img} alt="" className="w-[2em]"/>
                </span>
                <span className="font-[600] w-[70%]">
                    {props.title}
                </span>
            </span>
            <span className="text-[9pt] w-[70%] text-justify max-sm:w-full max-lg:w-full max-sm:text-[12pt] max-lg:text-[12pt]">
                {props.text}
            </span>
        </span>
    )
}

export default ServiceCard;
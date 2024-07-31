"use client";
import Image from "next/image";
import Link from "next/link";
import Container from "../container/index"
import { useState } from "react";
import { Farro } from "next/font/google";


const Header = () => {

    const [showFlag, setShowFlag] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    return (
        <span className="flex flex-col text-center bg-white max-sm:bg-white max-sm:py-[1em] max-xl:py-[1em]">
            <Container customClass="md:w-full ">
                <span className="flex justify-between items-center">
                    <span className="left-0">
                        <Image src="/image/cross_black.jpg" width={202} height={68} className="md:w-[202px] md:h-[68px] max-sm:w-[150px] max-lg:w-[150px] max-xl:w-[100px]" alt="logotipoCrossOver"/>
                    </span>
                    <span className="flex justify-between gap-[4em] text-[16px] font-[500] text-[#2b2b2b] max-sm:hidden max-lg:hidden md:-ml-[6%]">
                        <Link href="#home" className="hover:text-[#1E90CE] h-6">Home</Link>
                        <Link href="#service" className="hover:text-[#1E90CE] h-6">Serviços</Link>
                        <Link href="#about" className="hover:text-[#1E90CE] h-6">Sobre</Link>
                        <Link href="#contact" className="hover:text-[#1E90CE] h-6">Contactos</Link>
                    </span>
                    <span className="flex flex-col gap-[.3em] items-center max-sm:hidden max-lg:hidden">
                        <span className="p-[.2em] rounded-[.3em] cursor-pointer md:text-[10pt]">
                            <button onClick={() => setShowFlag(!showFlag)} className="bg-transparent border-none flex items-center justify-center">Idioma
                                <span><Image src="/image/down.png" width={16} height={16} alt="downlogo"/></span>
                            </button>
                        </span>

                        {showFlag ? (
                            <span className="absolute bg-white md:mt-[3em] cursor-pointer md:p-[.5em] z-10 shadow rounded-[.3em] flex flex-col gap-[.3em]">
                                <span className="flex gap-3 items-center p-[.5em] hover:bg-[#ccc] transition-all rounded-sm" onClick={() => setShowFlag(!showFlag)}>
                                    <Image src="/image/flagPortugal.jpg" width={22} height={22} alt="" className="md:w-[22px] md:h-[18px]"/>
                                    <p onClick={() => setShowFlag(!showFlag)}>Português</p>
                                </span>
                                <span className="flex gap-3 items-center p-[.5em] hover:bg-[#ccc] transition-all rounded-sm max-lg:text-[#ccc] max-sm:text-[#ccc]" onClick={() => setShowFlag(!showFlag)}>
                                    <Image src="/image/flagUK.jpg" alt="" width={22} height={22} className="md:w-[22px] md:h-[18px]"/>
                                    English
                                </span>
                            </span>
                        ) : "" }

                    </span>

                    <span className="max-xl:block hidden">
                        <span className="hidden max-sm:flex max-lg:flex flex-col gap-[.3em] max-sm:mx-[.5em] cursor-pointer">
                            <button onClick={() => setShowMenu(!showMenu)} className="max-sm:flex max-lg:flex flex-col gap-[.3em] max-sm:items-start max-sm:justify-center">
                                <span className="flex flex-col items-center gap-[.3em]">
                                    <span className="h-[2px] w-[30px] bg-black"></span>
                                    <span className="h-[2px] w-[20px] bg-black"></span>
                                    <span className="h-[2px] w-[10px] bg-black"></span>
                                </span>
                                {/* <Image src="/image/menu.svg" width={24} height={24} alt="menu"/> */}
                            </button>
                        </span>

                        {showMenu ? (
                            <span className="flex flex-col">
                                <span className="absolute left-0 justify-between gap-[2em] text-[16px] font-[500] text-black hidden max-sm:flex max-lg:flex flex-col bg-white max-sm:w-full max-sm:mt-[1em] max-lg:w-full max-lg:mt-[1em] p-[2em] z-10">
                                    <Link href="#about" className="hover:text-[#1E90CE]">Sobre Nós</Link>
                                    <Link href="#service" className="hover:text-[#1E90CE]">Serviços</Link>
                                    <Link href="#product" className="hover:text-[#1E90CE]">Produtos</Link>
                                    <Link href="#contact" className="hover:text-[#1E90CE] cursor-pointer">Contactos</Link>
                                        <hr/>

                                    <span className="flex flex-col gap-[.3em] items-center max-sm:w-full max-lg:w-full ">
                                        <span className="p-[.2em] rounded-[.3em] cursor-pointer md:text-[10pt] max-lg:w-full max-sm:w-full max-lg:text-center max-lg:items-center max-lg:flex max-sm:flex max-lg:justify-center">
                                            <button onClick={() => setShowFlag(!showFlag)} className="bg-transparent border-none flex items-center justify-center">Idioma
                                                <span><Image src="/image/down.png" width={16} height={16} alt="downlogo"/></span>
                                            </button>
                                        </span>

                                        {showFlag ? (
                                            <span className="bg-white md:mt-[3em] max-lg:w-full max-sm:w-full cursor-pointer md:p-[.5em] z-10 max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-center max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center flex flex-col gap-[.3em]">
                                                <span className="flex gap-3 items-center p-[.5em] hover:bg-[#ccc] max-sm:w-full max-lg:w-full transition-all rounded-sm max-lg:flex max-lg:justify-center max-lg:items-center max-sm:flex max-sm:justify-center max-sm:items-center" onClick={() => setShowFlag(!showFlag)}>
                                                    <Image src="/image/flagPortugal.jpg" width={22} height={22} alt="" className="md:w-[22px] md:h-[18px]"/>
                                                    <p onClick={() => setShowFlag(!showFlag)}>Português</p>
                                                </span>
                                                <span className="flex gap-3 items-center p-[.5em] hover:bg-[#ccc] transition-all rounded-sm max-lg:text-[#ccc] max-sm:text-[#ccc] max-sm:w-full max-lg:w-full max-lg:flex max-lg:justify-center max-lg:items-center max-sm:flex max-sm:justify-center max-sm:items-center" onClick={() => setShowFlag(!showFlag)}>
                                                    <Image src="/image/flagUK.jpg" alt="" width={22} height={22} className="md:w-[22px] md:h-[18px]"/>
                                                    English
                                                </span>
                                            </span>
                                        ) : "" }

                                    </span>

                                </span>
                            </span>
                            
                        ) : ""}

                    </span>
                </span>
            </Container>
        </span>
    )
}

export default Header;
import ServiceCard from "../cards/servicescard";
import Container from "../common/container";
import style from "../../../../style/index.module.css";
import OtherCard from "../cards/Otherservices";
import Image from "next/image";

const Service = () => {
    return (
        <Container customClass={`md:py-[4em] md:-mb-[10em] flex flex-col md:gap-[8em] max-sm:gap-[2em] max-lg:gap-[2em] ${style.back} max-sm:p-[.5em] max-lg:p-[.5em]`} id="service">
            <span className="flex flex-col md:gap-[2em] justify-center max-sm:w-full max-lg:w-full max-sm:gap-[1em] max-lg:gap-[1em]">
                <span className="flex flex-col items-center max-sm:pt-[1em] max-lg:pt-[1em] max-sm:py-[.5em] max-lg:py-[.5em]">
                    <h1 className="font-[800] text-[#0D0D0D] text-[25pt] max-lg:text-[13pt] max-sm:text-[13pt] max-xl:w-full max-xl:text-center">CONFIRA OS NOSSOS SERVIÇOS</h1>
                </span>
                <span className="flex justify-between flex-wrap max-sm:gap-[2em] max-lg:gap-[4em] max-xl:w-full max-xl:items-center max-xl:justify-between max-xl:flex-col ">
                    <ServiceCard img="image/cctv-camera.svg" title="CCTV (Closed-Circuit Television)" text="Temos para si, as melhores e mais evoluídas soluções de vídeo vigilância, para que a monitorização do seu espaço seja uma realidade. Encontrarás aqui, ou analógicos. Oferecemos ainda a possibilidade de integração com outros sistemas de proteção."/>

                    <ServiceCard img="image/square-lock-password.svg" title="Sistemas Avançados de Detecção de Intrusão" text="Temos para si, as melhores e mais evoluídas soluções de vídeo vigilância, para que a monitorização dia à dia do seu espaço seja uma realidade. Encontrarás aqui, ou analógicos. Oferecemos ainda a possibilidade de integração com outros sistemas de proteção."/>
                    
                    <ServiceCard img="image/security-lock.svg" title="Controlo de Acesso" text="Temos para si, as melhores e mais evoluídas soluções de vídeo vigilância, para que a monitorização dia à dia do seu espaço seja uma realidade. Encontrarás aqui, ou analógicos. Oferecemos ainda a possibilidade de integração com outros sistemas de proteção."/>
                    
                    <ServiceCard img="image/fire-security.svg" title="Detecção e Alarme de Incêndio" text="Temos para si, as melhores e mais evoluídas soluções de vídeo vigilância, para que a monitorização dia à dia do seu espaço seja uma realidade. Encontrarás aqui, ou analógicos. Oferecemos ainda a possibilidade de integração com outros sistemas de proteção."/>
                </span>
            </span>
            <span className="flex flex-col justify-center items-center md:gap-[4em] max-sm:gap-[2em] max-lg:gap-[2em] max-lg:text-center max-sm:text-center">
                <span className="max-xl:w-full max-xl:text-center">
                    <h1 className="font-[800] text-[25pt] max-sm:text-[13pt] max-lg:text-[13pt]">Porque escolher a CrossOver ?</h1>
                </span>
                <span className="max-xl:text-center">
                    <p className="md:hidden">A empresa se destaca por sua dedicação à inovação, segurança e excelência no serviço, oferecendo soluções completas e personalizadas para garantir a proteção e o sucesso dos seus clientes, tudo isso em parceria com líderes mundiais do setor..</p>
                    <p className="max-sm:hidden max-lg:hidden">Porque somos uma empresa comprometida com a inovação inteligente e segura para os clientes. A nossa parceira com empresas lideres no mercado internacional como à Axis Comunication, empresa líder da indústria em vigilância por vídeo, que desenvolve e fornece soluções de rede inovadoras que melhoram a segurança e o desempenho empresarial. A CroosOver, oferece soluções de rede em vigilância por vídeo, controle de acesso, controlo anti-intrusão, Incêndio. Eles são aprimorados por aplicativos de análise inteligente e apoiados por treinamento de alta excelência na solução de vigilância por vídeo, controle de acesso, interfone, e sistemas de áudio</p>
                </span>

                {/* Campo destinado a um video ilustrativo da cross-over */}
                
                {/* <span className="flex flex-col items-start">
                    <span className="flex justify-end p-[.6em] absolute">
                        <span className="flex border border-[#8080806c] rounded-[5px] items-center gap-[.5em] md:px-[.5em] md:py-[.2em] bg-[#ffffff25]">
                            <p className="font-[500] text-white">CrossOver</p>
                            <Image src="image/iconCross_over.svg" width={45} height={45} className="md:w-[30px] md:h-[30px]" alt="mission logotipo"/>
                        </span>
                    </span>

                    <video width="1220" height="80" controls autoPlay>
                        <source src="" type="video/mp4" />
                    </video>

                </span> */}

                {/* Campo destinado a um video ilustrativo da cross-over */}


                <span className="flex flex-col gap-[4em] max-xl:w-full">
                    <span className="flex flex-col items-center gap-[3em] text-center">
                        {/* <p className="bg-[#2097DB] text-white md:p-[.2em] rounded-[5px] text-[10pt] max-sm:p-[.2em] max-lg:p-[.2em]">Descubra soluções inteligentes</p> */}
                        <h1 className="font-[700] text-[20pt] md:w-full max-sm:text-[13pt] max-lg:text-[13pt]">Projecta e expanda o seu negócio com soluções de ponta</h1>
                    </span>
                    <span className="flex gap-[2em] md:mb-[5em] sm:flex max-sm:flex-wrap md:flex md:flex-wrap max-xl:justify-between w-full max-xl:w-full">
                        <OtherCard title="Controlo de Acesso" text="Controle de acesso flexível - mais do que apenas aberto" background="1"/>
                        <OtherCard title="Câmera em Rede" text="O melhor video em rede, inovação, qualidade e oportunidade" background="3"/>
                        <OtherCard title="Intercomunicador em Rede" text="Intercomunicações, soluções de comunicação inteligente." background="4"/>
                        <OtherCard title="Áudio em rede" text="Controle de acesso flexível - mais do que apenas aberto" background="2"/>
                    </span>
                </span>
            </span>
        </Container>
    )
}

export default Service;
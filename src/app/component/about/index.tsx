import Image from "next/image";
import Container from "../common/container";
import Card from "../cards";

const About = () => {
    return (
        <Container customClass="md:py-[5em] flex flex-col md:gap-[2em] max-sm:gap-[2em] scroll-smooth max-lg:gap-[2em] bg-[#1D87C5] text-white md:h-[100%] max-sm:p-[.5em] max-sm:py-[3em] max-lg:py-[3em] max-xl:px-[1em]" id="about">
            <span className="flex flex-col gap-[1em]">
                <span className="w-[40%] max-sm:w-full max-lg:w-full max-sm:text-center max-xl:text-center">
                    <h1 className="text-[18pt] md:w-full max-sm:w-full max-lg:w-full font-[700]">Cross Over Angola</h1>
                </span>
                <span className="md:w-full flex gap-[2em] flex-col text-[12pt] max-sm:text-center max-xl:text-center">
                    <p>É uma empresa de capital 100% angolano, com foco em inovações inteligente e seguras a nível do SIS (Sistema Integrado de Segurança) com profissionais qualificados e especializados, somos um valor acrescentado a nível de equipamentos ligados ao SIS e em oferecer soluções de ponta que garantem a segurança e a tranquilidade dos nossos clientes.</p>
                    
                    <span className="max-sm:hidden max-lg:hidden">Nosso diferencial está no uso de materiais de alta qualidade e na constante busca por tecnologias inovadoras, proporcionando um valor agregado incomparável aos sistemas de segurança. Estamos aqui para atender às suas necessidades de segurança com excelência. Entre em contato conosco e descubra como podemos proteger o que é mais importante para você.</span>
                </span>
            </span>
            {/* <span className="flex flex-col items-start max-sm:my-[1em] max-lg:my-[1em]">
                <span className="flex justify-end p-[.6em] absolute">
                    <span className="flex border border-[#8080806c] rounded-[5px] items-center gap-[.5em] md:px-[.5em] md:py-[.2em] bg-[#ffffff25]">
                        <p className="font-[500] max-sm:text-[10pt]">CrossOver</p>
                        <Image src="image/iconCross_over.svg" width={35} height={35} className="md:w-[20px] md:h-[20px]" alt="mission logotipo"/>
                    </span>
                </span>
                <Image src="/image/imageIlustrator.svg" width={1250} height={100} className="md:w-[100%] md:h-[100%]" alt="illustrator_image"/>
            </span> */}
            <span className="flex md:justify-between flex-wrap max-xl:text-center max-sm:gap-[2em] max-xl:flex max-xl:flex-wrap ">
                <Card icon="/image/vision.svg" title="Visão" text="Levar a tecnologia e segurança cada vez mais próximo do cliente"/>
                <Card icon="image/target.svg" title="Missão" text="Ser referência no mercado Nacional em soluções inovadoras a nível do sistema integrado de segurança."/>
                <Card icon="/image/values.svg" title="Valores" text="Confiança, Integrada e respeito, foco no resultado, Valorização"/>
            </span>
        </Container>
    )
}

export default About;
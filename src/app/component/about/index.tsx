import Image from "next/image";
import Container from "../common/container";
import Card from "../cards";

const About = () => {
    return (
        <Container customClass="md:py-[4em] md:px-[] flex flex-col md:gap-[2em] bg-[#1D87C5] text-white md:h-[100%] max-sm:p-[.5em]" id="about">
            <span className="flex flex-col gap-[1em]">
                <span className="w-[40%]">
                    <h1 className="text-[30px] md:w-full font-[700]">Cross Over</h1>
                </span>
                <span className="md:w-full text-justify flex gap-[2em] flex-col text-[11pt]">
                    <span>É uma empresa de capital 100% angolano, com foco em inovações inteligente e seguras a nível do SIS (Sistema Integrado de Segurança) com profissionais qualificados e especializados, somos um valor acrescentado a nível de equipamentos ligados ao SIS e em oferecer soluções de ponta que garantem a segurança e a tranquilidade dos nossos clientes.</span>
                    <span>Nosso diferencial está no uso de materiais de alta qualidade e na constante busca por tecnologias inovadoras, proporcionando um valor agregado incomparável aos sistemas de segurança. Estamos aqui para atender às suas necessidades de segurança com excelência. Entre em contato conosco e descubra como podemos proteger o que é mais importante para você.</span>
                </span>
            </span>
            <span className="flex flex-col items-start">
                <span className="flex justify-end p-[.6em] absolute">
                    <span className="flex border border-[#8080806c] rounded-[5px] items-center gap-[.5em] md:px-[.5em] md:py-[.2em] bg-[#ffffff25]">
                        <p className="font-[500]">CrossOver</p>
                        <Image src="image/iconCross_over.svg" width={45} height={45} className="md:w-[30px] md:h-[30px]" alt="mission logotipo"/>
                    </span>
                </span>
                <Image src="/image/imageIlustrator.svg" width={1250} height={100} className="md:w-[100%] md:h-[100%]" alt="illustrator_image"/>
            </span>
            <span className="flex md:justify-between flex-wrap max-sm:gap-[1em]">
                <Card title="Visão" text="Levar a tecnologia e segurança cada vez mais próximo do cliente"/>
                <Card title="Missão" text="Ser referência no mercado Nacional em soluções inovadoras a nível do sistema integrado de segurança."/>
                <Card title="Valores" text="Confiança, Integrada e respeito, foco no resultado, Valorização"/>
            </span>
        </Container>
    )
}

export default About;
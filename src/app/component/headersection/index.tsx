import Header from "../common/header"
import Container from "../common/container"
import Style from "../../../../style/index.module.css";

const HeaderSection = () => {
    return (
        <div className="">
        <span className={`md:h-full md:w-full max-sm:h-full max-sm:w-full max-lg:h-full max-lg:w-full absolute top-0 left-0 -z-10 ${Style.background}`}></span>
        <Header/>
        <Container customClass={`md:h-[100vh] relative max-sm:h-[60vh] max-lg:h-[60vh] max-sm:p-[.5em]`}>
            <span className="flex flex-col md:h-[100vh] max-sm:h-[60vh] max-lg:h-[60vh]">
                <span className="flex flex-col text-center justify-center items-center md:h-full max-sm:h-full max-lg:h-full">
                    <h1 className="md:text-[65px] font-[800] text-white py-4 px-6 rounded-lg">Inovação com Inteligência e Segurança</h1>
                    <span className="md:w-[820px] max-sm:text-justify max-lg:text-justify">
                        <p className="md:text-[14pt] font-[500] text-white">Na CrossOver, combinamos inovação tecnológica com expertise em segurança para proteger o que é mais importante para você. Nossas soluções integradas oferecem tranquilidade e confiança, adaptando-se às suas necessidades específicas. Descubra como podemos transformar sua segurança hoje mesmo.</p>
                    </span>
                </span>
            </span>
        </Container>
        </div>
    )
}

export default HeaderSection;
import Header from "../common/header"
import Container from "../common/container"
import Style from "../../../../style/index.module.css";

const HeaderSection = () => {
    return (
        <div className="md:h-[100vh]">
        <span className={`md:h-full md:w-full max-sm:h-full max-sm:w-full max-lg:h-full max-lg:w-full absolute top-0 left-0 -z-10 ${Style.background}`} id="home"></span>
        <Header/>
        <Container customClass={`md:h-[100vh] relative max-sm:h-[60vh] max-lg:h-[60vh] max-sm:p-[.5em] max-xl:p-[1em]`}>
            <span className="flex flex-col md:h-[100vh] max-sm:h-[60vh] max-lg:h-[60vh]">
                <span className="flex flex-col text-center justify-center items-center md:h-full max-sm:h-full max-lg:h-full">
                    <h1 className="md:text-[35pt] font-[800] text-white py-4 px-6 rounded-lg max-lg:text-center max-sm:text-center max-sm:text-[15.5pt] max-lg:text-[15.5pt]">Inovação com Inteligência e Segurança</h1>
                    <span className="w-[820px] max-sm:text-justify max-lg:text-justify  max-xl:w-full">
                        <p className="md:text-[14pt] font-[500] text-white max-sm:text-center max-lg:text-center md:font-[600]">A CrossOver oferece soluções de segurança personalizadas, com foco em tecnologia e expertise, para que você possa ter mais tranquilidade.</p>
                    </span>
                </span>
            </span>
        </Container>
        </div>
    )
}

export default HeaderSection;
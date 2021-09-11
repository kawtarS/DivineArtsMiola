import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/outline'
import HeaderBg from 'assets/HeaderBg.jpg'
import HeaderBg1 from 'assets/HeaderBg1.jpg'
import HeaderBg2 from 'assets/HeaderBg2.jpg'


const Slider = () => {
    return (
        <Carousel
        //autoPlay={true} infiniteLoop={true} interval={5000} 
        showStatus={false} showThumbs={false}
            renderArrowNext={(clickHandler, hasNext, labelNext) =>
                hasNext && (
                    <div className="absolute top-1/2 right-12 cursor-pointer">
                        <div className="rounded-full p-4 md:p-6 bg-yellow-100 relative inline-block opacity-50" onClick={clickHandler}>
                            <ArrowRightIcon className="w-5 h-5 md:w-6 md:h-6 absolute top-2/4 left-2/4 transform -translate-y-1/2 -translate-x-1/2" />
                        </div>
                    </div>
                )}
            renderArrowPrev={(clickHandler, hasPrev, labelPrev) =>
                hasPrev && (
                    <div className="absolute top-1/2 left-12 cursor-pointer z-10">
                        <div className="rounded-full p-4 md:p-6 bg-yellow-100  relative inline-block opacity-50" onClick={clickHandler}>
                            <ArrowLeftIcon className="w-5 h-5 lg:w-6 lg:h-6 absolute top-2/4 left-2/4 transform -translate-y-1/2 -translate-x-1/2" />
                        </div>
                    </div>
                )}
        >
            <div className="relative h-96 lg:h-screen ">
                <img src={HeaderBg} className="h-full"/>
                <div className="flex flex-col justify-between align-center opacity-70 rounded-md bg-black mt-10 absolute top-1/4 lg:top-1/3 left-1/4 lg:left-1/3 bottom-1/3 text-white content-center w-6/12 md:w-96 lg:w-100 h-36 md:h-48 lg:h-60 ">
                    <div className="relative -top-2 mx-auto bg-gray-800 w-24 h-6 rounded shadow-xl">
                        <h5 className="text-xs p-1 tracking-wider">PEINTURE</h5>
                    </div>
                    <h1 className="text-sm md:text-xl lg:text-3xl px-6">Découvrez les oeuvres des artistes les plus en vue aujourd'hui, dans plus de 8O pays.</h1>
                    <button className="relative mx-auto md:px-8 md:py-2 bg-yellow-200 hover:bg-yellow-300 rounded text-base md:text-lg text-black -bottom-2 md:-bottom-4 w-28 text-center">Voir</button>
                </div>
            </div>
            <div className="relative h-96 lg:h-screen">
                <img src={HeaderBg1} className="h-full"/>
                <div className="flex flex-col justify-between align-center opacity-70 rounded-md bg-black mt-10 absolute top-1/4 lg:top-1/3 left-1/4 lg:left-1/3 bottom-1/3 text-white content-center w-6/12 md:w-96 lg:w-100 h-36 md:h-48 lg:h-60 ">
                    <div className="relative -top-2 mx-auto bg-gray-800 w-24 h-6 rounded shadow-xl">
                        <h5 className="text-xs p-1 tracking-wider">EVÈNEMENTS</h5>
                    </div>
                    <h1 className="text-sm md:text-xl lg:text-3xl px-6">Parcourez notre section live et prenez part à nos ventes aux enchères, ventes flash et ventes exclusives.</h1>
                    <button className="relative mx-auto md:px-8 md:py-2 bg-yellow-200 hover:bg-yellow-300 rounded text-base md:text-lg text-black -bottom-2  md:-bottom-4 w-32 text-center">Explorer</button>
                </div>
            </div>
            <div className="relative h-96 lg:h-screen">
                <img src={HeaderBg2} className="h-full"/>
                <div className="flex flex-col justify-between align-center opacity-70 rounded-md bg-black mt-10 absolute top-1/4 lg:top-1/3 left-1/4 lg:left-1/3 bottom-1/3 text-white content-center w-6/12 md:w-96 lg:w-100 h-36 md:h-48 lg:h-60 ">
                    <div className="relative -top-2 mx-auto bg-gray-800 w-24 h-6 rounded shadow-xl">
                        <h5 className="text-sm md:text-xs p-1 tracking-wider">SCULPTURE</h5>
                    </div>
                    <h1 className="text-sm md:text-xl lg:text-3xl px-6">Donnez du volume à votre intérieur avec notre sélection de sculptures.</h1>
                    <button className="relative mx-auto md:px-8 md:py-2 bg-yellow-200 hover:bg-yellow-300 rounded text-base md:text-lg text-black -bottom-2  md:-bottom-4 w-36 text-center">Découvrire</button>
                </div>
            </div>
        </Carousel>
    )
}

export default Slider

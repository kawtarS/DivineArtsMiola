import React from 'react'
import PhotographieImage from 'assets/categories/photographie.png'

const callouts = [
    {
        name: 'Sculpture',
        imageSrc: "https://c1.wallpaperflare.com/preview/545/223/831/samothrace-greek-sculpture-marble-louvre.jpg",
        imageAlt: 'A sculpture .',
        href: '#',
    },
    {
        name: 'Photographie',
        imageSrc: PhotographieImage,
        imageAlt: '',
        href: '#',
    },
    {
        name: 'Peinture',
        imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/1200px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
        imageAlt: 'Image of Monalisa .',
        href: '#',
    },
    {
        name: 'Dessin',
        imageSrc: "https://media.wired.com/photos/5fbc216e192c3e3e791e4844/master/pass/Science_DaVinci_1263824572.jpg",
        imageAlt: 'Pencil Drawing in profile of female laying down her head ',
        href: '#',
    },
]

const Categories = () => {
    return (
        <div className="bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto pb-16 py-16 md:py-20 lg:max-w-none">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center tracking-tight uppercase ">Votre galerie d'art en ligne</h2>
                    <h6 className="text-xl pt-2 font-light tracking-wide text-gray-800 text-center">Nos Catégories Disponibles</h6>
                    <div className="mt-10 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-x-12">
                        {callouts.map((callout) => (
                            <div key={callout.name} className="group relative mx-8">
                                <div className="relative bg-white overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 shadow-2xl sm:h-64  border-4 border-black">
                                    <img
                                        src={callout.imageSrc}
                                        alt={callout.imageAlt}
                                        className="w-full h-full object-center object-cover lg:w-full lg:h-full p-1"
                                    />
                                </div>
                                <h3 className="mt-4 text-sm font-semibold uppercase tracking-wider text-gray-700 text-center">
                                    <a href={callout.href}>
                                        <span className="absolute inset-0" />
                                        {callout.name}
                                    </a>
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories

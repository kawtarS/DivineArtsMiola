const navigation = {
    categories: [
        {
            id: 'oeuvres',
            name: 'Œuvres',
            sections: [
                {
                    id: 'peinture',
                    name: 'Peinture',
                    subSections: [
                        {
                            id: 'peinture_theme',
                            name: 'Thèmes en peinture',
                            items: [
                                { name: 'Nature morte', href: '#' },
                                { name: 'Nu', href: '#' },
                                { name: 'Paysage', href: '#' },
                                { name: 'Portrait', href: '#' },
                                { name: 'Scene de genre', href: '#' },
                                { name: 'Street Art', href: '#' }
                            ]
                        },
                        {
                            id: 'peinture_styles',
                            name: 'Styles en peinture',
                            items: [
                                { name: 'Abstrait', href: '#' },
                                { name: 'Classique', href: '#' },
                                { name: 'Fantaisie', href: '#' },
                                { name: 'Figuratif', href: '#' },
                                { name: 'Pop Art', href: '#' },
                                { name: 'Semi-Abstrait', href: '#' }
                            ]
                        },
                    ]
                },
                {
                    id: 'sculpture',
                    name: 'Sculpture',
                    subSections: [
                        {
                            id: 'types_sculpture',
                            name: 'Types de sculpture',
                            items: [
                                { name: 'Buste', href: '#' },
                                { name: 'Installation', href: '#' },
                                { name: 'Objet', href: '#' },
                                { name: 'Objet mural', href: '#' },
                                { name: "Sculpture d'extérieur", href: '#' },
                                { name: 'Sculpture de plein-pied', href: '#' }
                            ]
                        },
                        {
                            id: 'materiaux_sculpture',
                            name: 'Materiaux en sculpture',
                            items: [
                                { name: 'Acier', href: '#' },
                                { name: 'Aluminium', href: '#' },
                                { name: 'Bois', href: '#' },
                                { name: 'Bronze', href: '#' },
                                { name: 'Néon', href: '#' },
                                { name: 'Résine', href: '#' }
                            ]
                        },
                    ]
                },
                {

                    id: 'photographie',
                    name: 'Photographie',
                    subSections: [
                        {
                            id: 'theme_en_photographie',
                            name: 'Thème en Photographie',
                            items: [
                                { name: 'Abstrait', href: '#' },
                                { name: 'Documentaire', href: '#' },
                                { name: 'Mise en scène', href: '#' },
                                { name: 'Nature', href: '#' },
                                { name: "Portrait", href: '#' },
                                { name: 'Voyage', href: '#' }
                            ]
                        },
                        {
                            id: 'materiaux_sculpture',
                            name: 'Les styles en photographie',
                            items: [
                                { name: 'Couleur', href: '#' },
                                { name: 'Création digitale', href: '#' },
                                { name: 'Moderne', href: '#' },
                                { name: 'Noir et blanc', href: '#' },
                                { name: 'Panoramique', href: '#' },
                                { name: 'Photo de rue', href: '#' }
                            ]
                        },
                    ]
                },
                {
                    id: 'dessin',
                    name: 'Dessin',
                    subSections: [
                        {
                            id: 'dessin_style',
                            name: 'STYLES',
                            items: [
                                { name: 'Abstrait', href: '#' },
                                { name: 'Figuratif', href: '#' },
                                { name: 'Paysage', href: '#' },
                                { name: "Portrait", href: '#' }
                            ]
                        },
                        {
                            id: 'dessin_techniques',
                            name: 'TECHNIQUES',
                            items: [
                                { name: 'Crayon', href: '#' },
                                { name: 'Encre', href: '#' },
                                { name: 'Fusain', href: '#' },
                                { name: 'Stylo', href: '#' }
                            ]
                        },
                    ]
                },
                {
                    id: 'oeuvre_sur_papier',
                    name: 'Oeuvre sur papier',
                    subSections: [
                        {
                            id: 'dessin_style',
                            name: 'STYLES',
                            items: [
                                { name: 'Abstrait', href: '#' },
                                { name: 'Figuratif', href: '#' },
                                { name: 'Paysage', href: '#' },
                                { name: "Portrait", href: '#' }
                            ]
                        },
                        {
                            id: 'oeuvre_techniques',
                            name: 'TECHNIQUES',
                            items: [
                                { name: 'Acrylique', href: '#' },
                                { name: 'Collage', href: '#' },
                                { name: 'Huile', href: '#' },
                                { name: 'Pastel', href: '#' }
                            ]
                        },
                    ]
                },
            ],
        },
        {
            id: 'artistes',
            name: 'Artistes',
            sections: [
                {
                    id: 'type_artistes',
                    name: "Type d'artistes",
                    items: [
                        { name: 'Peintres', href: '#' },
                        { name: 'Photographes', href: '#' },
                        { name: 'Sculpteurs', href: '#' }
                    ]
                },
                {
                    id: 'chercher_par',
                    name: "Chercher Par",
                    items: [
                        { name: 'Artistes par Nationalités', href: '#' },
                        { name: 'Artistes par Noms', href: '#' }
                    ]
                },
                {
                    id: 'categories_principales',
                    name: "NOS CATÉGORIES PRINCIPALES",
                    items: [
                        { name: 'Le Choix Des Collectionneurs', href: '#' },
                        { name: 'Artistes À La Une', href: '#' },
                        { name: "Seulement Sur Singulart", href: "#" },
                        { name: "Envie D'investir", href: "#" },
                        { name: "Artistes Émergents", href: "#" },
                        { name: "Artistes De Renom", href: "#" },
                        { name: "Nouveaux Venus", href: "#" }
                    ]
                }
            ]
        },
        {
            id: 'collections',
            name: 'Collections',
        }
    ],
}



export default navigation
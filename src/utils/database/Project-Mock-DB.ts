const URL = import.meta.env.BASE_URL;

export const MockProjectDB = {
    title: 'Algunos de nuestros proyectos',
    projects: [
        {
            imageSrc: URL + "projects/projects1.webp",
            category: "Nuevos suministros",
            title: "Proyectos de obra y estructura de red",
            description:
                "Diseño proyectos eléctricos y estructuras de redes para instalaciones nuevas, realizo relevamientos y ofrezco asesoramiento a usuarios. También me ocupo de proyectos relacionados con la distribución de energía eléctrica.",
        },
        {
            imageSrc: URL + "projects/projects2.webp",
            category: "Nuevos suministros",
            title: "Proyectos de obra y estructura de red",
            description:
                "Diseño proyectos eléctricos y estructuras de redes para instalaciones nuevas, realizo relevamientos y ofrezco asesoramiento a usuarios. También me ocupo de proyectos relacionados con la distribución de energía eléctrica.",
        },
        {
            imageSrc: URL + "projects/projects3.webp",
            category: "Nuevos suministros",
            title: "Proyectos de obra y estructura de red",
            description:
                "Diseño proyectos eléctricos y estructuras de redes para instalaciones nuevas, realizo relevamientos y ofrezco asesoramiento a usuarios. También me ocupo de proyectos relacionados con la distribución de energía eléctrica.",
        }
    ]
}
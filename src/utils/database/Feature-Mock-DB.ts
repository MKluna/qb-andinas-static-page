const URL = import.meta.env.BASE_URL;

export const MockFeatureDB = {
    title: "Venta de insumos",
    paragraph: "Ofrecemos una amplia gama de productos, trabajando con las mejores marcas del mercado. Insumos de limpieza. Insumos de electricidad. Insumos eléctricos. Insumos de ferretería.",
    featuresChek: [
        {
            category: "Control de cumplimiento de decreto 351/79 y Ley 19587/72",
        },
        {
            category: "Relevamiento de agentes de riesgos",
        },
        {
            category: "Identificación de riesgos peligrosos",
        },
        {
            category: "Estudios de impacto ambiental",
        },
        {
            category: "Estudios ergonómicos",
        },
        {
            category: "Planes de emergencia y simulacros",
        },
        {
            category: "Identificación de requisitos legales",
        },
        {
            category: "Elaboración de matriz legal",
        },
        {
            category: "Actualización de legislación vigente",
        },
    ],
    imgUrl: URL + "feature/banner.jpg",
    imgAlt: "banner-img"
};

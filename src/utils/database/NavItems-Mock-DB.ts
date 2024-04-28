const URL = import.meta.env.BASE_URL;

console.log("REVISANDO URL - " + URL);



export const MockNavImgLink = {
    href: URL
}

export const MockNavItemDB = [
    {
        href: URL,
        text: "Inicio"
    },
    {
        href: URL + "aboutus",
        text: "Consultoria"
    },
    {
        href: URL + "project",
        text: "Proyectos"
    },
    {
        href: URL + "services",
        text: "Servicios"
    },
    {
        href: URL + "jobs",
        text: "Puestos"
    },
    {
        href: URL + "#contact",
        text: "Contacto"
    },
]

export const MockJobNavItemDB = [{
    href: URL,
    text: "Inicio"
}]

export const MockImgNavLink = [
    {
        href: URL + "logo.png"
    },
    {
        href: URL + "transparent-logo.png"
    }
]
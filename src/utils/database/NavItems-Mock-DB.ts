const URL = import.meta.env.BASE_URL;

export const MockNavImgLink = {
    href: URL
}

export const MockNavItemDB = [
    {
        href: URL,
        text: "Empresa"
    },
    {
        href: URL + "#services",
        text: "Servicios"
    },
    {
        href: URL + "#consulting",
        text: "Consultoría"
    },
    {
        href: URL + "#experience",
        text: "Experiencia"
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
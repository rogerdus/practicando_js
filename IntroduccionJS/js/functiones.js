//se puede exportar de esta forma antes de la const
export const sumar = (n1, n2) => n1 + n2

export const restar = (n1, n2) => n1 - n2

/// solo puede haber un export default por archivo
const multiplicar = (n1, n2) => n1 * n2

export const dividir = (n1, n2) => n1 / n2


// se puede exportar de esta forma igual al final del archivo
export {
    multiplicar
}

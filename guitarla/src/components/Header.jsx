import { Fragment } from "react"
///AQUI SE PUEDEN IMPORTAR COMPONENTES Y LIBRERIAS

export default function Header() {
    //AQUI SE HACER FUNCIONES O STATE
    ///// JSX Javascript Syntax Extension
    //// un componente debe tener return
    /// solo retornar un elemento
    /// importar fragment o <> 
    const name = "Miguel"
    return (
        //// VISTAS HTML
        <Fragment>
            <h1>Hola {name} </h1>
        </Fragment>
    )
}
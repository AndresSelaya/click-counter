function Boton({texto, claseBoton, manejarClick}){
    return(
        <button className={claseBoton} onClick={manejarClick}>
            {texto}
        </button>
    );
}

export { Boton }
function Lista({ colaboradores }) {
    return (
        <div className="lista">
            <hr />
            <h1>Lista de colaboradores</h1>
            <ul>
                {colaboradores.map((colaborador) => (
                    <li key={colaborador.id} style={{listStyle: "none"}}>{colaborador.nombre} - {colaborador.correo}</li>
                ))}
            </ul>
        </div>
    );
}

export default Lista;
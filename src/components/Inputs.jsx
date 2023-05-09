import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './inputs.css'

function Inputs({ onClick }) {
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");

    const capturaNombre = (e) => {
        setNombre(e.target.value);
    };

    const capturaCorreo = (e) => {
        setCorreo(e.target.value);
    };

    const agregarColaborador = (e) => {
        e.preventDefault();
        setNombre("");
        setCorreo("");
        onClick({ nombre, correo });
    };
    return (
            <Form className="inputss">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre del colaborador</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa el nombre" onChange={capturaNombre} value={nombre}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Email del colaborador</Form.Label>
                    <Form.Control type="email" placeholder="Ingresa el email" onChange={capturaCorreo} value={correo}/>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={agregarColaborador} disabled={nombre.trim() == "" || correo.trim() == ""}>
                    Agregar
                </Button>
            </Form>
    );
}

export default Inputs;
import CardUI  from "./CardUI";

export default function ListOfCards () {
    return (
        <div className="card-list">
            <CardUI key={1} title='Aires Acondicionados' type='Egreso' amount='5000' contact='Papa' description='Compra de 2 aires acondicionados para mi nuevo departamento' />
            <CardUI key={2} title='Bicicleta Cube' type='Ingreso' amount='18000' contact='Agustin' description='Le vendi al wero mi bicicleta cube' />
        </div>
    )
}
import CardUI  from "./CardUI";

export default function ListOfCards () {

    const payments = [
        {
            key: 1,
            title: 'Aires Acondicionados',
            type: 'Egreso',
            amount: '5000', 
            contact: 'Papa', 
            description: 'Compra de 2 aires acondicionados para mi nuevo departamento',
            payments: [
                {
                    description: '1 de 10',
                    amount: 500
                },
                {
                    description: '2 de 10',
                    amount: 500
                }
            ]
        },
        {
            key: 2,
            title: 'Bicicleta Cube',
            type: 'Ingreso',
            amount: '18000', 
            contact: 'Agustin', 
            description: 'Le vendi al wero mi bicicleta cube',
            payments: [
                {
                    description: 'abono 3 mil',
                    amount: 3000
                },
                {
                    description: 'abono 5 mil',
                    amount: 5000
                },
                {
                    description: '1 de 4',
                    amount: 2500
                }
            ]
        }
    ]

    return (
        <div className="card-list">
            {
                payments.map(payment => {
                    return (
                        <CardUI 
                            key={payment.key}
                            id={payment.key}
                            title={payment.title}
                            type={payment.type}
                            amount={payment.amount}
                            contact={payment.contact}
                            description={payment.description}
                            payments={payment.payments}
                        />
                    )
                })
            }
        </div>
    )
}
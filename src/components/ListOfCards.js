import { useLocation } from "wouter";
import CardUI  from "./CardUI";

export default function ListOfCards () {
    const [, setLocation] = useLocation()

    const payments = JSON.parse(localStorage.getItem('payments'))

    return (
        <div className="card-list">
            {
                !payments ? <h3 onClick={() => setLocation('/add-new')}>Añade un nuevo abono</h3>
                : payments.map(payment => {
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
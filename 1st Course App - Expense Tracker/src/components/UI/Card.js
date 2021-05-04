import './Card.css';

const Card = ({children, className}) => { //children e ревервиран Проп в който се подават елементите между <Card>...</Card> 
    return (
        <div className={`card ${className}`}> {/* В className се съдържат класовете който са сетнати на Card в по-горния левел*/} 
            {children}
        </div>
    )
}

export default Card

export default function OrderItem({name, amount}) {
    return (
        <div className={'order-item'}>
            <p className={'amount'}>
                x {amount}
            </p>
            <p>
                {name}
            </p>
        </div>
    )
}
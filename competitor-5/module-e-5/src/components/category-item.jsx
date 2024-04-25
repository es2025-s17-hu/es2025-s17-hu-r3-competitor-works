export default function CategoryItem({name, price, color, callback}) {
    return (
        <button className={'category-item'} onClick={callback}>
            <div className={'side'}></div>
            <div className={'details'}>
                <p>{name}</p>
                <p className={'price'}>{price} Ft</p>
            </div>
        </button>
    )
}
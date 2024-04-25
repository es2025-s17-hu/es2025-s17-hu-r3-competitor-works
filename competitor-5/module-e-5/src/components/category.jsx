export default function Category({name, callback, color, selected}) {
    return (
        <button className={selected ? 'category selected' : 'category'} onClick={callback}>
            <p>{name}</p>
        </button>
    )
}
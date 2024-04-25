export default function Testmonial({children, author, role}) {
    return (
        <div className={'testmonial'}>
            <p>{children}</p>
            <div className={'author'}>
                <p>{author}</p>
                <p>{role}</p>
            </div>
        </div>
    )
}
export const Header = ({page, setPage}) => {
    return (
        <>
        {page!=='Dashboard' && <button
                onClick={() => {
                    setPage('Dashboard')
                }}
            >Back to Dashboard
            </button>
        }
            <button
                onClick={() => {
                    setPage('Logout')
                }}
            >Log Out
            </button>
        </>
    )
}
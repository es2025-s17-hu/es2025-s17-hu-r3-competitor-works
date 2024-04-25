export const Dashboard = ({setPage}) => {
  return (
      <>
        <h1>Admin Dashboard</h1>
          <button
            onClick={()=>{
                setPage('Categories')
            }}
          >Menu Categories</button>
          <button
              onClick={()=>{
                  setPage('Items')
              }}
          >Menu Items</button>
          <button className={'disable'}>Tables (coming soon)</button>
          <button className={'disable'}>Users (coming soon)</button>
          <button className={'disable'}>Statistics (coming soon)</button>
          <button className={'disable'}>Preferences (coming soon)</button>
      </>
  )
}
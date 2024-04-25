
/*RENDERING OUT TABLES LAYOUT*/


import {useState} from "react";
import OrderPage from "../pages/OrderPage.jsx";

// eslint-disable-next-line react/prop-types
const Table = ({table}) => {

    const [isOccupied, setOccupied] = useState(false);
    const [orderedItems, setOrderedItems] = useState([]);
    const [orderPageVisible, setOrderPageVisible] = useState(false);

    // WHEN THE TABLE IS CLICKED TO START ORDERING
    const onTableClick = () =>{
        setOccupied(true);
        setOrderPageVisible(true);
    };

    const closeOrderPage = () =>{
        setOrderPageVisible(prevState => {
            prevState = false;
            return prevState;
        });
    }

    return (
        // eslint-disable-next-line react/prop-types
        <div className={isOccupied ? "table table-occupied" : "table"} onClick={onTableClick} style={
            {
                // eslint-disable-next-line react/prop-types
                "left": table.x + "px",
                // eslint-disable-next-line react/prop-types
                "top": table.y + "px",
                // eslint-disable-next-line react/prop-types
                "width": table.width + "px",
                // eslint-disable-next-line react/prop-types
                "height": table.height + "px"
            }}>
            {/* eslint-disable-next-line react/prop-types */}
            Table {table.id}
            {/* eslint-disable-next-line react/prop-types */}
            <OrderPage orderedItems={orderedItems} tableId={table.id} setOrderedItems={setOrderedItems} visible={orderPageVisible} close={closeOrderPage}/>
        </div>
    );
};

export default Table;
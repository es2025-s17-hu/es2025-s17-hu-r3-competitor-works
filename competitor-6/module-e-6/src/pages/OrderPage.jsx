import {useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {LoginContext} from "../context/LoginContext.jsx";
import MenuCategory from "../components/MenuCategory.jsx";
import MenuItem from "../components/MenuItem.jsx";
import OrderedItem from "../components/OrderedItem.jsx";

// eslint-disable-next-line react/prop-types
const OrderPage = ({orderedItems, setOrderedItems, tableId, visible, close}) => {

    const navigate = useNavigate();

    const [menuCategories, setMenuCategories] = useState([]);
    const [menuItems, setMenuItems] = useState([]);

    // order sum
    const [orderTotal, setOrderTotal] = useState(0);


    // for authentication
    const {loggedIn, token} = useContext(LoginContext);

    useEffect(() => {
        //calculate sum
        let sum = 0;
        // eslint-disable-next-line react/prop-types
        for(let i=0;i<orderedItems.length;i++){
            // eslint-disable-next-line react/prop-types
            sum += parseInt(orderedItems[i].price);
        }
        setOrderTotal(sum);
    }, [orderedItems]);


    useEffect(() => {

        if (!loggedIn) {
            navigate("/");
            return;
        } else {
            // REQUESTING CATEGORIES
            fetch("https://module-c-6-solution.dineease.com/api/v1/menuCategories",
                {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                })
                .then(response => response.json())
                .then(data => setMenuCategories(data));

            // REQUESTING ITEMS
            fetch("https://module-c-6-solution.dineease.com/api/v1/menuItems",
                {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                })
                .then(response => response.json())
                .then(data => {
                    setMenuItems([...data]);
                });
        }
    }, []);

    //EXIT ORDER PAGE
    //OR NOT, BECAUSE IT IS BUGGED FOR SOME REASON
    //RIP
    const exitOrdering = () => {
        close();
    }

    // add item to order
    const addtoOrder = (item) => {
        setOrderedItems([...orderedItems, item].reverse());

    }

    return (
        <div className={visible ? "order-page order-page-visible" : "order-page"}>
            {/*SUMMARISING SECTION OF ITEMS AND PRICE OF THE ORDER*/}
            <div className="order-sum-section">
                <p className={"table-number"}>Table {tableId}</p>
                <ul className={"ordered-item-list"}>
                    {
                        // eslint-disable-next-line react/prop-types
                        orderedItems.map((orderedItem, idx) => {
                            return (
                                <li key={idx}>
                                    <OrderedItem item={orderedItem}/>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="order-sum-footer">
                    <div className="order-total">
                        <span className={"order-total-label"}>Sum: </span>
                        <span className={"order-total-number"}>{orderTotal}Ft</span>
                    </div>
                    <div className="action-buttons">
                        <button onClick={exitOrdering}>Exit</button>
                        <button>Close order</button>
                    </div>
                </div>
            </div>
            {/*ITEM SELECTION SECTION IN THE ORDER*/}
            <div className="order-items-section">
                <div className="menu-categories">
                    {
                        menuCategories.map(category => {
                            return <MenuCategory key={category.name} menuCategory={category}/>
                        })
                    }
                </div>
                <div className="menu-items">
                    {
                        menuItems.map(menuItem => {
                            return <MenuItem key={menuItem.id} item={menuItem} action={addtoOrder}/>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default OrderPage;
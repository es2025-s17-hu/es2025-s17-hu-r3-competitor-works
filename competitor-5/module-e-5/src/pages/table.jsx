import {useNavigate, useParams} from "react-router";
import tableIcon from '../assets/table-icon.png';
import OrderItem from "../components/order-item.jsx";
import {useEffect, useState} from "react";
import api from "../axios.js";
import {Link} from "react-router-dom";
import Category from "../components/category.jsx";
import CategoryItem from "../components/category-item.jsx";

export default function OrderScreen() {
    const params = useParams();
    const [order, setOrder] = useState([]);
    const [orderItems, setOrderItems] = useState([]);
    const [categories, setCategories] = useState([]);
    const [currentCategoryItems, setCurrentCategoryItems] = useState([]);
    const [totalSum, setTotalSum] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState(0);
    const navigate = useNavigate();
    const [printingBill, setPrintingBill] = useState(false);

    //Gets order details and also sets order items
    //Called when item gets added and when page loads
    //If there is no order, it gets created and getOrder called
    const getOrder = async () =>  {
        try {
            const { data } = await api.get(`/orders/tables/${params.id}`);
            setOrder(data);

            setOrderItems(data.OrderItems);

            let _totalSum = 0;

            for (let i = 0; i < data.OrderItems.length; i++) {
                const orderItem = data.OrderItems[i];
                _totalSum += orderItem.MenuItem.price * orderItem.quantity;

            }

            setTotalSum(_totalSum);
        } catch (e) {
            console.log(e)
            newOrder();
        }
    }

    //New order creation if order does not exits
    const newOrder = async () => {
        try {
            const data = await api.post(`/orders`, {
                tableId: Number(params.id)
            });

            getOrder();
        } catch (e) {
            console.log(e);
        }
    }

    //Gets item categories
    const getCategories = async () => {
        try {
            const { data } = await api.get(`/menuCategories`);
            setCategories(data);
            console.log(data);
        } catch (e) {
            console.log(e);
        }
    }

    //Close order when Close Order is clicked
    const closeOrder = async () => {
        try {
            await api.put(`/orders/tables/${params.id}/close`);
            setPrintingBill(true);
            setInterval(() => {
                navigate('/table-selection');
            }, 5000)
            console.log('Close order!')
        } catch (e) {
            console.log(e);
        }
    }

    //Fetches all clicked category items
    const getCurrentCategoryItems = async (categoryId) => {
        try {
            setSelectedCategory(categoryId);
            setCurrentCategoryItems([]);
            const { data } = await api.get(`/menuItems`);

            const filtered = data.filter((item) => item.menuCategoryId === categoryId);

            setCurrentCategoryItems(filtered);
            console.log(filtered);
        } catch (e) {
            console.log(e);
        }
    }

    const addItem = async (item) => {
        try {
            const response = await api.post(`/orderItems`, {
                orderId: order.id,
                menuItemId: item.id,
                quantity: 1
            });

            await getOrder();
        } catch (e) {
            console.log(e)
        }
    }

    //Init
    useEffect(() => {
        getOrder();
        getCategories();
    }, []);

    return (
        <>
            {printingBill && (
                <div className={'overlay'}>
                    <p>Printing bill...</p>
                </div>
            )}
            <div className={'order-container'}>
                <div className={'sidebar'}>
                   <div>
                       <div className={'header'}>
                           <img src={tableIcon} alt="Table XX"/>
                           <h1>Table {order.tableId}</h1>
                       </div>
                       <div className={'order-items-container'}>
                           <div className={'items'}>
                               {orderItems.map((orderItem, index) => (
                                   <OrderItem key={index} amount={orderItem.quantity}
                                              name={orderItem.MenuItem.name}></OrderItem>
                               ))}
                           </div>
                       </div>
                   </div>
                    <div>
                        <div className={'sum-row'}>
                            <p>Sum:</p>
                            <p>{totalSum} Ft</p>
                        </div>
                        <div className={'buttons'}>
                           <button className={'secondary-button'} onClick={() => navigate('/table-selection')}>
                               Exit
                           </button>
                           <button className={'primary-button'} onClick={() => closeOrder()}>
                               Close Order
                           </button>
                       </div>
                   </div>
               </div>
               <div className={'content'}>
                   <div className={'categories'}>
                       {categories.map((category, index) => (
                           <Category selected={selectedCategory === category.id} key={index} name={category.name} callback={() => getCurrentCategoryItems(category.id)}></Category>
                       ))}
                   </div>
                   <div className={'category-items-container'}>
                       <div className={'category-items'}>
                           {currentCategoryItems.map((item, index) => (
                               <CategoryItem key={index} name={item.name} price={item.price}
                                             callback={() => addItem(item)}></CategoryItem>
                           ))}
                       </div>
                   </div>
               </div>
            </div>
        </>
    )
}
import {CallerApi} from "../functions/CallerApi.js";

export const OrderItemsRow = ({item, currentCategorie, currentOrder, token, setHandleChangeItems}) => {
    const handleAddItem = async() => {
        setHandleChangeItems((curEl)=>{
            return curEl+'A'
        })
        CallerApi('orderItems', 'POST', {
            "orderId" :currentOrder,
            "quantity"  :0,
            "menuItemId" : item.id
        }, token)
    }

    return (
        <div
            onClick={()=>{
                handleAddItem()
            }}
            className={'item'}>{item.name} <br/>{item.price} Ft</div>
    )
}
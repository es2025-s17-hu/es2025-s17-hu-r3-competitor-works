
// eslint-disable-next-line react/prop-types
const OrderedItem = ({item}) => {
    return (
        <>
            <span className={"ordered-item-count"}>1x</span>
            {/* eslint-disable-next-line react/prop-types */}
            <span className={"ordered-item-name"}>{item.name}</span>
        </>
    );
};

export default OrderedItem;
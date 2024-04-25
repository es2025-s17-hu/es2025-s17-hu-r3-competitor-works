// MENU ITEM BOX
// eslint-disable-next-line react/prop-types
const MenuItem = ({item, action}) => {

    // eslint-disable-next-line react/prop-types
    item.menuCategoryId = undefined;
    // eslint-disable-next-line react/prop-types
    return (
        <div className={"menu-item"} onClick={() => {action(item)}}>
            {/* eslint-disable-next-line react/prop-types */}
            {item.name}
        </div>
    );


};

export default MenuItem;
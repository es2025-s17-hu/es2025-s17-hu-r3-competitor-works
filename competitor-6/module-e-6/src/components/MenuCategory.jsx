
// MENU CATEGORY BOXES
// eslint-disable-next-line react/prop-types
const MenuCategory = ({menuCategory}) => {
    return (
        <div className={"menu-category"}>
            {/* eslint-disable-next-line react/prop-types */}
            {menuCategory.name}
        </div>
    );
};

export default MenuCategory;
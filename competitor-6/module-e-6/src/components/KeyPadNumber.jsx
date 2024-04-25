;

// eslint-disable-next-line react/prop-types
const KeyPadNumber = ({number, action}) => {
    return (
        <button className={"keypad-number"} onClick={action}>
            {number}
        </button>
    );
};

export default KeyPadNumber;
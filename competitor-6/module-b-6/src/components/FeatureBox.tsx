import {FC} from 'react';

interface FeatureBox{
    image: string;
    name: string;
    description: string;
}

const FeatureBox : FC<FeatureBox> = ({image, name, description}) => {
    return (
        <div className="Feature-box">
            <div className="Feature-image">
                <img src={image} alt={`An image of ${name}`}/>
            </div>
            <div className="Feature-name">{name}</div>
            <p className="Feature-description">{description}</p>
            <a href={"#"} className="Feature-link">Know More </a>
        </div>
    );
};

export default FeatureBox;
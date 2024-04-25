import {useNavigate} from "react-router";
import {Link} from "react-router-dom";

export default function Table({data}) {
    const navigator = useNavigate();



    return (
        <Link
            to={`/table/${data.id}`}
            className={data.hasOpenOrder ? 'table active' : 'table'} style={{top: data.y, left: data.x, width: data.width, height: data.height}}>
            <p>{data.name}</p>
        </Link>
    )
}
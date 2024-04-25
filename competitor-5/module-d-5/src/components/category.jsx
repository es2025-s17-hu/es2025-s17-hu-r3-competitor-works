import {useState} from "react";

export default function Category({data}) {
    const [name, setName] = useState('Salads');

    return (
        <div className={'category'}>
            <input disabled={true} type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            <div>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    )
}
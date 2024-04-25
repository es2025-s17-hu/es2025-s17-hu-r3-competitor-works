import {useEffect, useState} from "react";

export default function NumberCard({number, children, end}) {

    return (
        <div className={'card'}>
            <h3>{number}{end}</h3>
            <p>{children}</p>
        </div>
    )
}
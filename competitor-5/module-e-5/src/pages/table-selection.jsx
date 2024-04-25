import {useEffect, useState} from "react";
import api from "../axios.js";
import {useNavigate} from "react-router";
import Table from "../components/table.jsx";

export default function TableSelection() {
    const [tables, setTables] = useState([]);
    const navigate = useNavigate();

    const getTables = async () => {
        try {
            const { data } = await api.get('/tables');
            console.log(data);
            setTables(data);
        } catch (e) {
            console.log(e);
            navigate('/');
        }
    }

    useEffect(() => {
        getTables();

        if(!localStorage.getItem('token')) {
            navigate('/');
        }
    }, []);

    return (
        <>
            <div className={'table-selection'}>
                <h1>Select a Table</h1>
                <div className={'divider'}></div>
                <div className={'tables-container'}>
                    <div className={'tables'}>
                        {tables.map((table, index) => (
                            <Table key={index} data={table}></Table>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
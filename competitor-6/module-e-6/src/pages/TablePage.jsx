import {useContext, useEffect, useState} from "react";
import {LoginContext} from "../context/LoginContext.jsx";
import {useNavigate} from "react-router-dom";
import Table from "../components/Table.jsx";

const TablePage = () => {

    const {loggedIn, token} = useContext(LoginContext);
    const [tables, setTables] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {

    }, []);

    useEffect(() => {

        if (!loggedIn) {
            navigate("/");
            return;
        }else{
            fetch("https://module-c-6-solution.dineease.com/api/v1/tables",
                {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                })
                .then(response => response.json())
                .then(data => setTables(data));
        }
    }, []);

    return (
        <section className={"tables-section"}>
            <div className="tables-section-header">
                <h1>Select a Table</h1>
            </div>
            <div className="table-map">
                {
                    tables.map(table =>{
                        return <Table key={table.name} table={table}/>
                    })
                }
            </div>

        </section>
    );
};

export default TablePage;
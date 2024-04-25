import Header from "../components/header.jsx";
import Category from "../components/category.jsx";
import {useEffect, useState} from "react";
import api from "../axios.js";

export default function MenuCategories() {
    const [categories, setCategories] = useState([]);

    const getCategories = async () => {
        try {
            const { data } = await api.get('/menuCategories', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });

            setCategories(data);
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getCategories();
    }, []);

    return (
        <>
            <Header></Header>
            <div className={'menu-categories'}>
                <h1>Menucard Categories</h1>
                <div className={'categories'}>
                    {categories.map((category, index) => (
                        <Category key={index} data={category}></Category>
                    ))}
                </div>
            </div>

        </>
    )
}
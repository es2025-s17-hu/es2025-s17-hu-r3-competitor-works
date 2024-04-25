import {Outlet} from "react-router";

export default function AppLayout() {
    return (
        <>
            <main className={'container'}>
                <Outlet></Outlet>
            </main>
        </>
    )
}
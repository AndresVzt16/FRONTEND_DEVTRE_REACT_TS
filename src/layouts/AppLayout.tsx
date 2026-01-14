import { Link, Outlet } from "react-router-dom";
import { Toaster } from "sonner";
import Header from "../components/header/Header";
import NavigationTabs from "../components/Navigation";
export default function AppLayout() {


    return (
        <>
            <Header/>
            <div className="  min-h-screen font-family-sans">
                <main className="mx-auto max-w-5xl p-10 md:p-0">
                    <NavigationTabs/>
                    
                    <div className="flex justify-end">
                        <Link 
                            className="font-bold text-right text-slate-800 text-2xl"
                            to={''}
                            target="_blank"
                            rel="noreferrer noopener"
                        >Visitar Mi Perfil</Link>
                    </div>

                    <div className="flex flex-col md:flex-row gap-10 mt-10">
                        <div className="flex-1 ">
                            <Outlet />
                        </div>
                        <div className="w-full md:w-96 bg-slate-800 px-5 py-10 space-y-6">

                        </div>
                    </div>
                </main>
            </div>
            <Toaster position="top-right" />
        </>
    )
}
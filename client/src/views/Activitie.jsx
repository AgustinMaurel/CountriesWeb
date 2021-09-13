import Navbar from "../components/navbar/Navbar";
import CreateActivitie from "../components/createActivitie/CreateActivitie";
import Footer from "../components/footer/Footer";
import style from './Activitie.module.css'

export default function Activitie(){
    return (
        <div className={style.containerMax}>
            <div className={style.container}>

            <Navbar/>
            <CreateActivitie/>
            <Footer/>

            </div>
        </div>
    )
}
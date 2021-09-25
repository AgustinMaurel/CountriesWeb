import style from './About.module.css';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import { SiLinkedin, SiJavascript, SiReact, SiRedux, SiPostgresql, SiCss3, SiGithub, SiGmail } from "react-icons/si";

export default function About() {
    return (
        <div className={style.containerAll}>

            <Navbar />
            <div className={style.containerCv}>
                <h1 className={style.name}>Agustin Maurel</h1>
                <p className={style.parraf}>Hola red ! Comparto mi primer proyecto personal
                    dentro de Henry, en el cual uni todos los conocimientos
                    aprendidos dentro del bootcamp utilizando las
                    siguientes tecnologias :
                </p>
                <ul className={style.tecsContainer}>
                    <li> JavaScript <SiJavascript /></li>
                    <li> ExpressJS <span className={style.express}>Express<SiJavascript /></span></li>
                    <li> ReactJS <SiReact /></li>
                    <li> Redux <SiRedux /></li>
                    <li> PostgreSQL <SiPostgresql /></li>
                    <li>Css <SiCss3 /></li>
                </ul>

                <p> Cualquier feedback es bienvenido !</p>

                <ul className={style.contact}>
                    <li><a href="https://www.linkedin.com/in/agustin-maurel-1828ab213/"><SiLinkedin />  Linkedin </a></li>
                    <li><a href="https://github.com/AgustinMaurel"><SiGithub /> Github</a></li>
                    <li><SiGmail />  maurel.a97@gmail.com</li>
                    <li></li>
                </ul>


            </div>
            <Footer />


        </div>
    )
}
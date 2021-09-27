import style from './ActivitieCard.module.css'


export default function ActivitieCard({name, dificult, id, duration, season, image}){
return (
    <div key={id}>
        <div className={style.containerCard}>
        <h3 className={style.title}>{name}</h3>
        <p>Dificult: {dificult}</p>
        {console.log(name)}
        <p>Duration: {duration}</p>
        <p>Season: {season}</p>
        <img className={style.img} src={image} alt="Not Found" />


        </div>
    </div>
)
}
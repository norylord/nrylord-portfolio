import styles from '../styles/Home.module.sass'
import Layout from "../Layout/Layout";

import {FcGraduationCap, FcReading, FcTodoList} from "react-icons/fc";
import {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Chart from "../components/Chart/Chart";


export default function Home() {

    useEffect(() => {
        AOS.init({duration: 3000});
    }, [])

    return (

        <Layout>
            <div className={styles.content__box}>
                <img
                    className={styles.content__box__avatar_image}
                    src="https://sun1.userapi.com/sun1-28/s/v1/ig2/6rUtDp8RylhZ0CBaCJzUmvlW5sZHI9UG83-LC5IAeWJe0VKg45nEJPnJd8uylQEME5G_Xms9k_-diFfn_5dRkRdu.jpg?size=2560x1707&quality=95&type=album"
                    alt="" style={{width: '250px', height: '250px', borderRadius: '100%', objectFit: 'cover'}}/>
                <div className={styles.content__box__info}>
                    <h1>Эй, привет!</h1>
                    <h3>Меня зовут Александр и добро пожаловать на мой
                        сайт-портфолио</h3>
                    <h3>Тут можно увидеть мои проекты, как готовые, так и находящиеся в разработке, а так же узнать
                        немного обо мне)</h3>
                </div>
            </div>
            <section>
                <h1 className={styles.caption}> Немного информации</h1>
                <div data-aos='fade-in' className={styles.info__cards}>
                    <div className={styles.card}>
                        <FcGraduationCap size={100}/>
                        <h2>Еще студент, но в душе готов работать</h2>
                        <p className={styles.card__info}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                            adipisci autem consectetur delectus dolor doloremque eos impedit incidunt maxime, molestias
                            nam
                            nostrum nulla obcaecati reiciendis reprehenderit sequi, similique temporibus voluptas! </p>
                    </div>
                    <div className={styles.card}>
                        <FcReading size={100}/>
                        <h2>Всегда в поиске новой информации</h2>
                        <p className={styles.card__info}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                            adipisci autem consectetur delectus dolor doloremque eos impedit incidunt maxime, molestias
                            nam
                            nostrum nulla obcaecati reiciendis reprehenderit sequi, similique temporibus voluptas!
                        </p>
                    </div>
                    <div className={styles.card}><FcTodoList size={100}/>
                        <h2>Любопытство - мое топливо</h2>
                        <p className={styles.card__info}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                            adipisci autem consectetur delectus dolor doloremque eos impedit incidunt maxime, molestias
                            nam
                            nostrum nulla obcaecati reiciendis reprehenderit sequi, similique temporibus voluptas!
                        </p></div>
                </div>
            </section>

            <section>
                <h1 className={styles.caption}>Рандомные факты обо мне</h1>
                <div data-aos='fade-in' className={styles.facts}>

                    <img src="https://i.imgur.com/d51okLp.png" alt=""/>
                    <div className={styles.facts__container}>
                        <h2 className={styles.fact}>1. Моего ментора зовут Филсана - настоящий самурай!</h2>
                        <h2 className={styles.fact}>2. Всю жизнь играл в World of Warcraft</h2>
                        <h2 className={styles.fact}>3. У меня отлично получается фотографировать</h2>
                        <h2 className={styles.fact}>4. Свободное время трачу на просмотр фильмов</h2>
                        <h2 className={styles.fact}>5. Попугаи - как стиль жизни</h2>

                    </div>
                </div>
            </section>
            <section>
                <div className={styles.chart} data-aos='fade-in'>
                    <h1 className={styles.caption}>Мои скиллы</h1>
                    <div className={styles.charts__container}>
                        <div className={styles.chart__card} data-aos=''>
                            <h2 className={styles.chart__card__percentage}>88%</h2>
                            <div className={styles.chart__container}>
                                <Chart color={'#5051f9'} circumference={320}/>
                            </div>
                            <h2>Любовь к попугаям</h2>
                        </div>
                        <div className={styles.chart__card} data-aos=''>
                            <h2 className={styles.chart__card__percentage}>94%</h2>
                            <div className={styles.chart__container}>
                                <Chart color={'#5099f9'} circumference={340}/>
                            </div>
                            <h2>Разработка</h2>
                        </div>
                        <div className={styles.chart__card} data-aos=''>
                            <h2 className={styles.chart__card__percentage}>92%</h2>
                            <div className={styles.chart__container}>
                                <Chart color={'#50f9da'} circumference={330}/>
                            </div>
                            <h2>Учеба</h2>
                        </div>
                        <div className={styles.chart__card} data-aos=''>
                            <h2 className={styles.chart__card__percentage}>83%</h2>
                            <div className={styles.chart__container}>
                                <Chart color={'#9c50f9'} circumference={300}/>
                            </div>
                            <h2>Досуг</h2>
                        </div>
                        <div className={styles.chart__card} data-aos=''>
                            <h2 className={styles.chart__card__percentage}>86%</h2>
                            <div className={styles.chart__container}>
                                <Chart color={'#50f994'} circumference={310}/>
                            </div>
                            <h2>Кофеек</h2>
                        </div>
                    </div>
                </div>
            </section>


        </Layout>

    )
}

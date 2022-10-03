import React from 'react';
import Layout from "../Layout/Layout";
import styles from "../styles/Projects.module.sass"
import ProjectCard from "../components/ProjectCard/ProjectCard";

import {CgDisplayFlex} from "react-icons/cg";
import {MdStorage} from "react-icons/md";
import {FaReact, FaMobile, FaVuejs} from "react-icons/fa";
import {FcSurvey, FcTemplate, FcSerialTasks, FcApproval} from "react-icons/fc";
import {SiJavascript, SiNextdotjs} from "react-icons/si";
import {AiFillApi} from "react-icons/ai";
import {TbBrandReactNative} from "react-icons/tb";
import {RiDragDropFill} from "react-icons/ri";
import {GiCrossedSwords} from "react-icons/gi";
import {IconContext} from "react-icons";

const Projects = () => {
    return (
        <Layout>
            <div className={styles.projects__info}>
                <h1>проекты.<span>JS</span></h1>
            </div>
            <div className={styles.projects__details}>
                <h2>На этой странице показаны мои собственные проекты</h2>
                <h2>Представленные проекты могут как находиться в разработке, так и находящиеся на стадии деплоя</h2>
            </div>
            <div className={styles.projects__container}>
                <ProjectCard
                    closed={false}
                    logoIcon={<GiCrossedSwords size={250} color={'#63b8ff'}/>}
                    title={'Raider IO API Vue.js'}
                    projectLink={'https://nrylord.github.io/todo-list/'}
                    github={'https://github.com/nrylord/todo-list'}
                    details={'Проект для отслеживания статистики персонажа в World of Warcraft'}
                    projectInfo={'Проект создается с помощью Vue.js, имеет адаптивную верстку, написана первая вертикальная навигационная адаптивная панель, а так же работа с асинхронными запросами. '}
                    icons={[
                        <FaVuejs key={1} size={60} color={'#73ef9f'}/>,
                        <SiJavascript key={2} size={60} color={'#ffd500'}/>,
                        <AiFillApi key={3} size={60} color={'#5051f9'}/>,
                    ]}
                />
                <ProjectCard
                    closed={true}
                    img='https://m.media-amazon.com/images/M/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMmYtMjEwNmQyNzliYTNmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_.jpg'
                    title={'Rick and Morty API Vue.js'}
                    github={'https://github.com/nrylord/rick-and-morty-vue'}
                    details={'Первый проект, разработанный с помощью Vue.js'}
                    projectInfo={'Проект реализован с помощью Vue.js, имеет адаптивную верстку, усовершенстованную навигационную панель, получение данных с Rick and Morty API. '}
                    icons={[
                        <FaVuejs key={1} size={60} color={'#73ef9f'}/>,
                        <SiJavascript key={2} size={60} color={'#ffd500'}/>,
                        <AiFillApi key={3} size={60} color={'#5051f9'}/>,
                    ]}
                />
                <ProjectCard
                    closed={true}
                    img='https://m.media-amazon.com/images/M/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMmYtMjEwNmQyNzliYTNmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_.jpg'
                    title={'Rick and Morty API'}
                    projectLink={'https://nrylord.github.io/rick-and-morty/'}
                    github={'https://github.com/nrylord/rick-and-morty'}
                    details={'Первый проект, разработанный с помощью React.js'}
                    projectInfo={'Проект реализован с помощью React.js, имеет адаптивную верстку, получение данных с Rick and Morty API. '}
                    icons={[<FaReact key={1} size={60} color={'#61DBFB'}/>,
                        <SiJavascript key={2} size={60} color={'#ffd500'}/>,
                        <AiFillApi key={3} size={60} color={'#5051f9'}/>,
                    ]}
                />
                <ProjectCard
                    closed={true}
                    logoIcon={<FcSurvey size={250}/>}
                    title={'ToDo List'}
                    projectLink={'https://nrylord.github.io/todo-list/'}
                    github={'https://github.com/nrylord/todo-list'}
                    details={'То, с чего начинают путь юные разработчики'}
                    projectInfo={'Проект реализован с помощью React.js, имеет адаптивную верстку, присутствует возможность сохранения данных в браузере, а так же функция "Drag and Drop" '}
                    icons={[<FaReact key={1} size={60} color={'#61DBFB'}/>,
                        <SiJavascript key={2} size={60} color={'#ffd500'}/>,
                        <RiDragDropFill key={3} size={60} color={'#5051f9'}/>,
                    ]}
                />
                <ProjectCard
                    closed={false}
                    logoIcon={<FcSerialTasks size={250}/>}
                    title={'Аналог Trello'}
                    github={'https://github.com/nrylord/nrylord-trello'}
                    details={'Большой шаг в работе с Drag and Drop'}
                    projectInfo={'Проект позволяет создавать собственные доски, размещать и редактировать задачи. Так же задачи можно переносить с одной доски на другую с помощью функции "Drag and Drop" '}
                    icons={[<FaReact key={1} size={60} color={'#61DBFB'}/>,
                        <SiJavascript key={2} size={60} color={'#ffd500'}/>,
                        <RiDragDropFill key={3} size={60} color={'#5051f9'}/>,
                    ]}
                />
                <ProjectCard
                    logoIcon={<FcTemplate size={250}/>}
                    title={'Форма создания товаров'}
                    github={'https://github.com/nrylord/next-nrylord'}
                    details={'Первый проект, основанный на Next.js и React'}
                    projectInfo={'Проект позволяет создавать карточки товаров, присутствует валидация формы, сохранение товаров в локальном хранилище, так же реализовано удаление товаров'}
                    icons={[<FaReact key={1} size={60} color={'#61DBFB'}/>,
                        <SiJavascript key={2} size={60} color={'#ffd500'}/>,
                        <SiNextdotjs key={4} size={60} color={'#7550f9'}/>
                    ]}
                />
                <ProjectCard
                    logoIcon={<TbBrandReactNative size={250} color={'#5051f9'}/>}
                    title={'Проект для хакатона "Цифровой прорыв"'}
                    github={'https://github.com/nrylord/smart-city-client-ayva'}
                    closed={true}
                    details={'Мобильное приложения для "Умных городов"'}
                    projectInfo={'Проект содержит несколько экранов, на которых отображаются новости, прямые эфиры, сообщения, фильтры для видов спорта, а так же профиль пользователя'}
                    icons={[<FaReact key={1} size={60} color={'#61DBFB'}/>,
                        <SiJavascript key={2} size={60} color={'#ffd500'}/>,
                        <FaMobile key={2} size={60} color={'#00ffd9'}/>,
                    ]}
                />
            </div>
        </Layout>
    );
};

export default Projects;
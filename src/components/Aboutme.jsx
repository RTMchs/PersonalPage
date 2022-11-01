import '../styles/App.css'
import React from 'react';
import Block from "./Block";
import '../styles/Block.css'

const Aboutme = () => {
    return (
        <div className="back">
            <div className='title'>
                <h1 className='nametxt'>Моя персональная страничка</h1>
            </div>
            <div className="blocks">
                <Block unit={{ref: 'https://cutt.ly/IVVGCid',
                    pict: 'https://i.imgur.com/ef25rlg.png',
                    btitle: 'Меня зовут:',
                    btext: 'Чесноков Артем Сергеевич'}}
                />
                <Block unit={{ref: 'https://cutt.ly/BVVG95I',
                    pict: 'https://i.imgur.com/aZ4rnVv.png',
                    btitle: 'Возраст:',
                    btext: 'Я родился 07.04.2003, мне 19 лет'}}
                />
                <Block unit={{ref: 'https://cutt.ly/FVVHit2',
                    pict: 'https://i.imgur.com/sHs6AJq.png',
                    btitle: 'Место проживания:',
                    btext: 'Город Киров, Кировская область'}}
                />
                <Block unit={{ref: 'https://ru.wikipedia.org/wiki/React',
                    pict: 'https://i.imgur.com/ZRn3MIx.png',
                    btitle: 'Деятельность:',
                    btext: 'Изучаю HTML/CSS, JS, ReactJS, TypeScript, NodeJS'}}
                />
            </div>
            <div className= "blocks">
                <Block unit={{ref: 'http://school-61.ru/#',
                    pict: 'https://i.imgur.com/tgljenr.png',
                    btitle: 'Школа:',
                    btext: 'МБОУ "СОШ с УИОП №61" города Кирова'}}
                />
                <Block unit={{ref: 'https://cutt.ly/mVVH0br',
                    pict: 'https://i.imgur.com/xT09vHh.png',
                    btitle: 'Люблю:',
                    btext: 'Компьютер и читать книги'}}
                />
                <Block unit={{ref: 'https://cutt.ly/UVVJjcb',
                    pict: 'https://i.imgur.com/Jtrpzmq.png',
                    btitle: 'Обучаюсь',
                    btext: 'Я учусь на 4 курсе в Колледже ВятГУ.'}}
                />
                <Block unit={{ref: 'https://cutt.ly/0VZTa4a',
                    pict: 'https://i.imgur.com/CYY7BZe.png',
                    btitle: 'Текущая цель:',
                    btext: 'Стать отличным Front-end разработчиком.'}}
                />
            </div>
        </div>
    );
};

export default Aboutme;
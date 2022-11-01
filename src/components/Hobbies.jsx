import React from 'react';
import Block from "./Block";
import '../styles/App.css'


const Hobbies = () => {
    return (
        <div className="backHob">
            <div className='title'>
                <h1 className='nametxt'>Моё хобби: компьютерные игры:</h1>
            </div>
            <div className="blocks">
                <Block unit={{
                    pict: 'https://i.imgur.com/cjUqxKh.png',
                    btitle: 'Соревновательные игры:',
                    btext: 'Иногда генерируют мотивацию, убивают время.'}}
                />
                <Block unit={{
                    pict: 'https://i.imgur.com/QBh2RLO.png',
                    btitle: 'Развивающие игры:',
                    btext: 'Такие приложения/сайты, как CodeWars, SQLore.' +
                        'Приносят пользу.'}}
                />
                <Block unit={{
                    pict: 'https://i.imgur.com/tGD3UlU.png',
                    btitle: 'Кооперативные игры:',
                    btext: 'Генерируют мотивацию и кучу эмоций.'}}
                />
                <Block unit={{
                    pict: 'https://i.imgur.com/jyOoCXv.png',
                    btitle: 'Одиночные игры:',
                    btext: 'Помогают в эмоциональной разгрузке.'}}
                />
            </div>

            <div className='bookTitle'>
                <h1 className='nametxt'>Моё хобби: чтение книг:</h1>
            </div>

            <div className= "blocks">
                <Block unit={{
                    pict: 'https://i.imgur.com/SaB0a4L.png',
                    btitle: 'Фентези Книги',
                    btext: 'Приятно почитать увлекательную книгу перед сном или в перерыве между учёбой'}}
                />
                <Block unit={{
                    pict: 'https://i.imgur.com/xcjLptH.png',
                    btitle: 'Книги про программирование:',
                    btext: 'Уместно читать во время занятий перед компьютером '}}
                />
                <Block unit={{
                    pict: 'https://i.imgur.com/B4oHdef.png',
                    btitle: 'Английская литература',
                    btext: 'Хорошо читаются при отличном настроении'}}
                />
                <Block unit={{
                    pict: 'https://i.imgur.com/REe0h9E.png',
                    btitle: 'Классическая русская литература:',
                    btext: 'Прекрасное чтиво для летнего отдыха'}}
                />
            </div>
        </div>
    );
};

export default Hobbies;
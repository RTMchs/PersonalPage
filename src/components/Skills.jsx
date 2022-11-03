import React from 'react';
import Block from "./Block";
import '../styles/adaptive.css';

const Skills = () => {
    return (
        <div className="backSkills" id = 'rocket'>
            <div className='title'>
                <h1 className='nametxt'>Мои навыки</h1>
            </div>
            <div className="blocks">
                <Block unit={{
                    ref: 'https://github.com/RTMchs',
                    pict: 'https://i.imgur.com/XNAWO1Q.png',
                    btitle: 'GitHub',
                    btext: 'В моём GitHub репозитории завалялась пара проектов'}}
                />
                <Block unit={{
                    pict: 'https://i.imgur.com/2s7pw9x.png',
                    btitle: 'Java',
                    btext: 'Имею базовые знания о языке, также писал ' +
                        'проекты, используя JavaFX'}}
                />
                <Block unit={{
                    pict: 'https://i.imgur.com/zaFasSF.png',
                    btitle: 'C#',
                    btext: 'Имею базовые знания о языке, также писал.' +
                        'клиент и вёрстку для мессенджера в команде из четырех человек, используя WPF'}}
                />
                <Block unit={{
                    pict: 'https://i.imgur.com/oV6nq0c.png',
                    btitle: 'HTML/CSS',
                    btext: 'Базовый уровень знаний, верстал парочку своих микро-проектов.'}}
                />
            </div>

            <div className= "blocks">
                <Block unit={{
                    pict: 'https://i.imgur.com/jY2tzUI.png',
                    btitle: 'JavaScript',
                    btext: 'Минимальный уровень знаний, в процессе изучения'}}
                />
                <Block unit={{
                    pict: 'https://i.imgur.com/6B8bWq4.png',
                    btitle: 'TypeScript',
                    btext: 'Минимальный уровень знаний, в процессе изучения'}}
                />
                <Block unit={{
                    pict: 'https://i.imgur.com/fGF8EzL.png',
                    btitle: 'NodeJS',
                    btext: 'Минимальный уровень знаний, в процессе изучения'}}
                />
                <Block unit={{
                    pict: 'https://i.imgur.com/VMQwwGS.png',
                    btitle: 'ReactJS:',
                    btext: 'Минимальный уровень знаний, в процессе изучения'}}
                />
            </div>
        </div>
    );
};

export default Skills;
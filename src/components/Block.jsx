import React from 'react';
import '../styles/Block.css';
import '../styles/adaptive.css';

const Block = (props) => {
    console.log(props);
    return (
            <div className={props.unit.cname}>
                <a href={props.unit.ref} target="_blank" rel="noopener noreferrer">
                    <img className="blocksImage" src={props.unit.pict} alt=""/>
                </a>
                <h4 className="blocksTitle"> {props.unit.btitle} </h4>
                <div className="blocksText"> {props.unit.btext} </div>
            </div>
    );
};

export default Block;
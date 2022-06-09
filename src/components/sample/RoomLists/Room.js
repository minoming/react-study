import React from 'react';

function Room(props) {
    const roomInfo = props;
    return (
        <div className='Room'>
            <div>
                <img src='logo192.png'></img>
                <button>like</button>
            </div>
            <h1>{roomInfo.title}</h1>
            <span>{roomInfo.desc}</span>
            <span>{roomInfo.date}</span>
            <span>{roomInfo.price}</span>
        </div>
    );
}

export default Room;
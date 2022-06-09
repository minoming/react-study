import React from 'react';
import Room from './Room';

function RoomLists() {
    const roomInfo = {title: "room1", desc: "test", data: "123", price: "1000"}
    return (
        <div className='RoomLists'>
            <Room roomInfo={roomInfo}></Room>
            <Room roomInfo={roomInfo}></Room>
            <Room roomInfo={roomInfo}></Room>
            <Room roomInfo={roomInfo}></Room>
        </div>
    );
}

export default RoomLists;
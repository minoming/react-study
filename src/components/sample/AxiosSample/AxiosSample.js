
import React, { useState } from "react";
import axios from "axios";

function AxiosSample() {
    const [data, setData] = useState("");

    const handleGetData = () => {
        axios.get('https://jsonplaceholder.typicode.com/todos/1')
            .then((res) => {
                setData(res.data.title); 
            })
            .catch((e) => { alert(e.message) })
    }
    return (
        <div>
            <button onClick={handleGetData}>get data</button>
            <textarea cols="80" rows="20" value={data}></textarea>
        </div>
    );
}

export default AxiosSample;

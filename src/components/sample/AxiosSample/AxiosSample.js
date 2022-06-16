
import React, { useState } from "react";
import axios from "axios";

function AxiosSample() {
    const [data, setData] = useState("");

    const handleGetData = () => {
        axios.get('https://cors-anywhere.herokuapp.com/https://kosis.kr/openapi/statisticsData.do?method=getList&apiKey=MWQ3NDIwZDIwMWIxNDZlMjRkNzg5ZTMwZDdmMzM0ZjU=&format=json&jsonVD=Y&userStatsId=minho7192/101/DT_1B81A21/2/1/20220610134055_1&prdSe=Y&startPrdDe=1993&endPrdDe=2020')
            .then((res) => {
                setData(JSON.stringify(res.data)); 
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

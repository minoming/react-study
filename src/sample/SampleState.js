import { useState } from "react";

const SampleState = ()=>{
    const [balance, setBalance] = useState(0);
    const [money, setMoney] = useState(0);

    const deposit = ()=>{
        setBalance(balance + money);
        setMoney(0);
    }
    const withdraw = ()=>{
        setBalance(balance - money);
        setMoney(0);
    }

    const onChangeMoney = (e)=>{
        setMoney(parseInt(e.target.value),10);
    }

    return(
        <div>
            <h1>안녕하세요😃 입출금 창구입니다.</h1>
            <input type="number" onChange={onChangeMoney} placeholder="금액을 입력하세요." min="0" value={money}></input>
            <button onClick={deposit}>입금</button>
            <button onClick={withdraw}>출금</button>
            <h2>잔고: {balance} 원</h2>
        </div>
    );
}

export default SampleState;
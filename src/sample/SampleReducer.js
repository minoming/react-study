import { reduce } from "lodash";
import { useState, useReducer } from "react";

const ACTION_TYPE = {
    DEPOSIT: "1",
    WITHDRAW: "2"
}

//reducer - state 업데이트
//dispatch - state 업데이트 요청
//action - state 업데이트 내용
const reducer = (state, action)=>{
    console.log("call reducer");

    switch (action.type) {
        case ACTION_TYPE.DEPOSIT:
            return state + action.money;
        case ACTION_TYPE.WITHDRAW:
            return state - action.money;
        default:
            return state;
    }
}

const SampleReducer = ()=>{
    const [money, setMoney] = useState(0);
    const [balance, dispatch] = useReducer(reducer,0);
    

    const deposit = ()=>{
        dispatch({type: ACTION_TYPE.DEPOSIT, money: money});
        setMoney(0);
    }
    const withdraw = ()=>{
        dispatch({type: ACTION_TYPE.WITHDRAW, money: money});
        setMoney(0);
    }

    const onChangeMoney = (e)=>{
        setMoney(parseInt(e.target.value), 10);
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

export default SampleReducer;
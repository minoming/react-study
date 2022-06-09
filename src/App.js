import logo from './logo.svg';
import './App.css';
import './css/Comment.css'
import './css/RoomLists.css'
import DefaultComponent from "./components/sample/DefaultComponent/DefaultComponent";
import Comment from './components/sample/Comment/Comment';
import AxiosSample from './components/sample/AxiosSample/AxiosSample';
import Apexcharts from 'react-apexcharts';
import { useState } from 'react';

function App() {
  const commentDatas = [{ name: 'minomi.kim', comment: '와 이쁜 댓글 컴포넌트네요!!!' },
  { name: 'jina.choi', comment: '퍼가요~' }];

  const [barChartMeta, setBarChartMeta] = useState({
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      }
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }
    ]
  });

  return (
    <div>
      {/* <DefaultComponent></DefaultComponent> */}
      {commentDatas.map((item) => {
        return (
          <Comment name={item.name} comment={item.comment}></Comment>
        );
      })}
      <AxiosSample></AxiosSample>
      <Apexcharts options={barChartMeta.options}
        series={barChartMeta.series}
        type="bar"
        width="500"
      ></Apexcharts>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import './css/Comment.css'
import './css/RoomLists.css'
import DefaultComponent from "./components/sample/DefaultComponent/DefaultComponent";
import Comment from './components/sample/Comment/Comment';
import AxiosSample from './components/sample/AxiosSample/AxiosSample';
import Apexcharts from 'react-apexcharts';
import { useState, useEffect } from 'react';
import axios from "axios";
import _ from 'lodash';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

function App() {
  const commentDatas = [{ name: 'minomi.kim', comment: '와 이쁜 댓글 컴포넌트네요!!!' },
  { name: 'jina.choi', comment: '퍼가요~' }];

  const width = 1200;
  const height = 400;
  let [options, setOptions] = useState({
    chart: {
      id: "basic-bar"
    },
    xaxis: {
      categories: []
    },
    title: {
      text: "123"
    }
  });

  let [series, setSeries] = useState([
    {
      name: "series-1",
      data: []
    }
  ]);

  useEffect(() => {
    console.log("start effect");
    axios.get('https://kosis.kr/openapi/statisticsData.do?method=getList&apiKey=MWQ3NDIwZDIwMWIxNDZlMjRkNzg5ZTMwZDdmMzM0ZjU=&format=json&jsonVD=Y&userStatsId=minho7192/101/DT_1B81A21/2/1/20220610134055_1&prdSe=Y&startPrdDe=1993&endPrdDe=2022')
      .then((res) => {
        let year = res.data.map(row => Number(row["PRD_DE"]));
        let dataRate = res.data.map(row => Number(row["DT"]));
        const subject = res.data[0]["ITM_NM"];
        
        let newOption = _.cloneDeep(options);
        let newSeries = _.cloneDeep(series);

        newOption.xaxis.categories = year;
        newOption.title.text = subject;
        newSeries[0].data = dataRate;
        newSeries[0].name = subject;

        setOptions(newOption);
        setSeries(newSeries);
      }).catch((e) => {
        alert("error");
      });
  }, []);

  const resources = {
    en: {
      translation: {
        "Welcome to React": "Welcome to React and react-i18next"
      }
    },
    fr: {
      translation: {
        "Welcome to React": "Bienvenue à React et react-i18next"
      }
    }
  };
  
  i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      resources,
      lng: "fr", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
      // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
      // if you're using a language detector, do not define the lng option
  
      interpolation: {
        escapeValue: false // react already safes from xss
      }
    });

  const { t } = useTranslation();

  return (
    <div>
      {/* <DefaultComponent></DefaultComponent>
      {commentDatas.map((item) => {
        return (
          <Comment name={item.name} comment={item.comment}></Comment>
        );
      })} */}
      {/* <AxiosSample></AxiosSample> */}
      {/* <Apexcharts options={options}
        series={series}
        type="bar"
        width={width}
        height={height}
      ></Apexcharts> */}
      <h1>{t('Welcome to React')}</h1>
    </div>
  );
}

export default App2;

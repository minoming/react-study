import logo from './logo.svg';
import './App.css';
import './css/Comment.css'
import './css/RoomLists.css'
import DefaultComponent from "./components/sample/DefaultComponent/DefaultComponent";
import Comment from './components/sample/Comment/Comment';
import AxiosSample from './components/sample/AxiosSample/AxiosSample';

function App() {
  const commentDatas = [{name: 'minomi.kim', comment: '와 이쁜 댓글 컴포넌트네요!!!'}, 
                    {name: 'jina.choi', comment: '퍼가요~'}];
  return (
    <div>
      {/* <DefaultComponent></DefaultComponent> */}
      {commentDatas.map((item)=>{
        return (
          <Comment name={item.name} comment={item.comment}></Comment>
        );
      })}
      <AxiosSample></AxiosSample>
    </div>
  );
}

export default App;

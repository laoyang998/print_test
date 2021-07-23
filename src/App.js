import React, { useRef,useState } from 'react';
import { Button } from 'antd'
import axios  from 'axios';
import Page from './components/page'
import ReactToPrint from 'react-to-print';

import './App.css';

function App() {

  const [group,setGroup]=useState(['华为',
  '小米','OPPO','一加','三星','NOKIA','格力']);
  // const [group,setGroup]=useState(['华为']);
  const [custname,setCustName]=useState('');

  const GetCustName=()=>{
      axios({
          methos:"post",
          url:"http://localhost:8443/getname",
          timeout:2000
      }).then(res=>{
          console.log(res);
          setCustName(res.data.custname)
      })
  }
  let lastPage='F';

  const componentRef = useRef();
 
  return (
    <div >
      <ReactToPrint
        trigger={() => <button>打印</button>}
        content={() => componentRef.current}
      />
      <div><Button onClick={GetCustName}>获取客户名称</Button></div>
      <div><h2>客户名称：{custname}</h2></div>
      <div ref={componentRef}>
        {
          group.map((item,index)=>{
            if(index ==group.length-1){
              lastPage="T";
            }
          return(
          <Page group={item} last={lastPage} index={index}/>
          )
        })}
      </div>
    </div>
  );
}

export default App;

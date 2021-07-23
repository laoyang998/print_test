
import React,{useState,useEffect} from "react"
import { Fragment } from "react"
import ReactToPrint from "react-to-print"
import axios from "axios"
import './page.css'

const Page=(props)=>{

  

    return(
        <div>
        <div className={props.last=="F"?"page":"last-page"}>
            <br/>
            <h1>美盈森同奈包装材料有限公司</h1>
            <h2>客户：{props.group}</h2>
            <h3>last:{props.last}</h3>
            <h3>index:{props.index}</h3>
            <table>
                <tr>
                    <td>序列号</td>
                    <td>序列号</td>
                    <td>序列号</td>
                    <td>序列号</td>
                </tr>
            </table>
        </div>
        <div className="foot"></div>
        </div>
    )
}

export default Page
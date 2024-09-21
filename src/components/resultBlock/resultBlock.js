import * as React from 'react';
import toDoStore from "../../store/toDoStore";
import classes from "./resultBlock.module.scss";
import {observer} from "mobx-react-lite";

let key = 0;
const ResultBlock = observer(() => {
    const {toDoList, removeTodoItem} = toDoStore;
    const resultBlockItemsData = toDoList.map((el) => {
        key++
        console.log(toDoList.indexOf(el))
        return (
            <div key={key+0.2} className={classes.resultsBlockItemBlock}>
                {toDoList.indexOf(el) % 2 !== 0
                    ? <div style={{backgroundColor: '#025544'}} key={key} className={classes.resultsBlockItem}>{el}</div>
                    : <div key={key} className={classes.resultsBlockItem}>{el}</div>}
                <div onClick={removeTodoItem} id={toDoList.indexOf(el)} key={key+0.1} className={classes.close}></div>
            </div>
        )
    })
    return (
        <div>
            {resultBlockItemsData}
        </div>
    );
});

export default (ResultBlock);


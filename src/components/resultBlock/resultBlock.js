import * as React from 'react';
import toDoStore from "../../store/toDoStore";
import classes from "./resultBlock.module.scss";
import {observer} from "mobx-react-lite";

let key = 0;
const ResultBlock = observer(() => {
    const {toDoList} = toDoStore;
    const resultBlockItemsData = toDoList.map((el) => {
        console.log(toDoList.indexOf(el))
        key++
        return (
            <div key={key+0.2} className={classes.resultsBlockItemBlock}>
                <div key={key} className={classes.resultsBlockItem}>
                    {el}
                </div>
                <div id={toDoList.indexOf(el)} key={key+0.1} className={classes.close}></div>
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


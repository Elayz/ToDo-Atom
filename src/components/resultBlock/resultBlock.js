import * as React from 'react';
import toDoStore from "../../store/toDoStore";
import classes from "./resultBlock.module.scss";
import {observer} from "mobx-react-lite";

let id = 0;
const ResultBlock = observer(() => {
    const {toDoList} = toDoStore;
    const resultBlockItemsData = toDoList.map((el) => {
        id++
        return (<div key={id} className={classes.resultsBlockItem}>{el}</div>)
    })
    return (
        <div>
            {resultBlockItemsData}
        </div>
    );
});

export default (ResultBlock);


import * as React from 'react';
import toDoStore from "../../store/toDoStore";
import classes from "./resultBlock.module.scss";
import {observer} from "mobx-react-lite";

let key = 0;
const ResultBlock = observer(() => {
    const {
        action_todoItemUpdated,
        updateTodoItem,
        updatedItem,
        action_unCompleteTodoItem,
        completeTodoItem,
        toDoList,
        removeTodoItem,
        toDoListCompleted,
        removeTodoCompleteItem
    } = toDoStore;
    const resultBlockItemsData = toDoList.map((el) => {
        key++
        return (
            <div key={key + 0.2} className={classes.resultsBlockItemBlock}>
                {toDoList.indexOf(el) !== Number(updatedItem)
                    ?
                    (<div id={toDoList.indexOf(el)} onClick={updateTodoItem} className={classes.pencil}></div>)
                    :
                    (<div onClick={action_todoItemUpdated} className={classes.checkMark}></div>)
                }
            {toDoList.indexOf(el) % 2 !== 0
                ? <div
                    onClick={(itemInfo) => completeTodoItem(itemInfo)}
                    id={toDoList.indexOf(el)}
                    style={{backgroundColor: '#025544'}}
                    key={key}
                    className={classes.resultsBlockItem}>{el}
                </div>
                : <div onClick={(itemInfo) => completeTodoItem(itemInfo)}
                     id={toDoList.indexOf(el)}
                     key={key}
                     className={classes.resultsBlockItem}>{el}
                </div>}
                <div onClick={removeTodoItem} id={toDoList.indexOf(el)} key={key + 0.1} className={classes.close}></div>
        </div>)
    })
    const resultBlockItemsDataCompleted = toDoListCompleted.map((el) => {
        key++
        return (<div key={key + 0.2} className={classes.resultsBlockItemBlock}>
            <div id={toDoList.indexOf(el)} onClick={updateTodoItem} className={classes.pencilCompleted}></div>
                <div
                    onClick={(itemInfo) => action_unCompleteTodoItem(itemInfo)}
                    id={toDoListCompleted.indexOf(el)}
                    key={key} className={classes.resultsBlockItemCompleted}>{el}
                </div>
            <div onClick={removeTodoCompleteItem} id={toDoListCompleted.indexOf(el)} key={key + 0.1} className={classes.closeComplete}></div>
        </div>)
    })

    return (<div>
        {resultBlockItemsData}
        {resultBlockItemsDataCompleted}
    </div>);
});

export default (ResultBlock);


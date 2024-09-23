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
                    <div id={toDoList.indexOf(el)} onClick={updateTodoItem} className={classes.pencil}></div>
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
                <div
                    onClick={removeTodoItem}
                    id={toDoList.indexOf(el)}
                    key={key + 0.1}
                    className={classes.close}></div>
        </div>)
    })
    const resultBlockItemsDataCompleted = toDoListCompleted.map((el) => {
        key++
        return (<div key={key + 0.2} className={classes.resultsBlockItemBlock}>
            <div id={toDoList.indexOf(el)} className={classes.pencilCompleted}></div>
                <div
                    onClick={(itemInfo) => action_unCompleteTodoItem(itemInfo)}
                    id={toDoListCompleted.indexOf(el)}
                    key={key} className={classes.resultsBlockItemCompleted}>{el}
                </div>
            <div
                onClick={removeTodoCompleteItem}
                id={toDoListCompleted.indexOf(el)}
                key={key + 0.1}
                className={classes.closeComplete}>

            </div>
        </div>)
    })

    return (
        <div>
            {updatedItem !==-1
                ?
                <div className={classes.changeResultBlockValueBackground}>
                    <div className={classes.changeResultBlockValueBlock}>
                        <div
                            onClick={(event) => {action_todoItemUpdated('Enter')}}
                            className={classes.checkMark}></div>
                        <input
                            onKeyDown={(event) => {action_todoItemUpdated(event.key)}}
                            id={'modify'}
                            placeholder={'Modify ToDo'}
                            className={classes.changeResultBlockValue}></input>
                    </div>
                </div>
                :<div></div>
            }
        {resultBlockItemsData}
        {resultBlockItemsDataCompleted}
    </div>);
});

export default (ResultBlock);


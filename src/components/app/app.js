import toDoStore from "../../store/toDoStore";
import classes from "./app.module.scss";
import {observer} from "mobx-react-lite";
import ResultBlock from "../resultBlock/resultBlock";

const App = observer(() => {
    const {addTodoItem, inputData, action_inputData} = toDoStore;
    const tapFoo = () => {
        addTodoItem('f');
    }

    return (
        <main className={classes.main} onClick={tapFoo}>
            <h1>ToDo app</h1>
            <div className={classes.inputZoneClass}>
                <input id={'input'} placeholder={'Write ToDo'} className={classes.inputClass} type="text"
                       onKeyDown={(event) => {addTodoItem(event.key, inputData)}}
                       onChange={action_inputData}/>
                <button onClick={() => addTodoItem('Enter',inputData)} className={classes.buttonClass}>Add</button>
            </div>
            <div className={classes.resultsBlock}>
                <ResultBlock></ResultBlock>
            </div>
        </main>
    );
});

export default (App);
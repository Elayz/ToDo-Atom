import {makeAutoObservable} from "mobx";


class TodoStore {
    toDoList = ['1','2','3','4','5','6'];
    fok = '';
    inputData = '';

    constructor() {
        makeAutoObservable(this);
    }

    addTodoItem = (event, payload) => {
        if (event === 'Enter' && payload !== '') {
            this.toDoList.push(this.inputData);
            let input = document.getElementById('input');
            input.value = '';
            this.inputData = '';
        }
    }
    action_inputData = (payload) => {
        this.inputData = payload.target.value;
    }
    removeTodoItem = (payload)=> {
        this.toDoList.splice(payload.target.id, 1)
        console.log(this.toDoList)
    }

    completeTodoItem = (payload)=> {

    }

    updateTodoItem = (payload)=> {

    }
}

export default new TodoStore();
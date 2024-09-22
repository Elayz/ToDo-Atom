import {makeAutoObservable} from "mobx";


class TodoStore {
    toDoList = ['1','2','3','4','5','6'];
    toDoListCompleted = [];
    inputData = '';
    updatedItem = null;

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
    }
    removeTodoCompleteItem = (payload)=> {
        this.toDoListCompleted.splice(payload.target.id, 1)
    }
    action_clearAll = ()=> {
        this.toDoList = [];
        this.toDoListCompleted = [];
    }
    action_removeTodoCompleteItem = ()=> {
        this.toDoListCompleted = [];
    }
    completeTodoItem = (payload)=> {
        this.toDoListCompleted.push(this.toDoList[payload.target.id]);
        this.toDoList.splice(payload.target.id, 1);
    }
    action_unCompleteTodoItem = (payload)=> {
        this.toDoList.push(this.toDoListCompleted[payload.target.id]);
        this.toDoListCompleted.splice(payload.target.id, 1);
    }
    updateTodoItem = (payload)=> {
        this.updatedItem = payload.target.id;
    }
}

export default new TodoStore();
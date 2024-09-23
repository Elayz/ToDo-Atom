import {makeAutoObservable} from "mobx";


class TodoStore {
    toDoList = ['Do what you love','Be brave','Be kind', 'Dont forget to show love to your loved ones','Help those in need','Your life in your hands hero'];
    toDoListCompleted = [];
    inputData = '';
    updatedItem = -1;
    modifyElementId = -1;

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
        this.updatedItem = -1;
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
        this.updatedItem = -1;
    }
    action_unCompleteTodoItem = (payload)=> {
        this.toDoList.push(this.toDoListCompleted[payload.target.id]);
        this.toDoListCompleted.splice(payload.target.id, 1);
    }
    updateTodoItem = (payload)=> {
        console.log(payload.target.id, this.toDoList[payload.target.id]);
        setTimeout(() => {
            const modifyInput = document.getElementById('modify');
            modifyInput.value = this.toDoList[payload.target.id];
            this.modifyElementId = payload.target.id;
        }, 0)
        this.updatedItem = payload.target.id;
    }
    action_todoItemUpdated = (event) => {
        const modifyInput = document.getElementById('modify');
        if (event === 'Enter' && modifyInput.value !== '') {
            this.toDoList[this.modifyElementId] = modifyInput.value;
            this.updatedItem = -1;
        }
    }
}

export default new TodoStore();
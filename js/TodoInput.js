export class TodoInput {
    constructor(inputElement, todoList) {
        this.inputElement = inputElement;
        this.todoList = todoList;
        this.setupEventListeners();
    }

    setupEventListeners() {
        this.inputElement.addEventListener("keyup", (event) => {
            if (event.key === "Enter" && this.inputElement.value.trim() !== "") {
                this.todoList.addItem(this.inputElement.value);
                this.inputElement.value = "";
            }
        });
    }
}
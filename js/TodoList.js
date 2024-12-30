export class TodoList {
    constructor(listElement) {
        this.listElement = listElement;
    }

    addItem(text) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `${text}<i></i>`;

        // Add click handler for marking as done
        listItem.addEventListener("click", (e) => {
            if (e.target !== listItem.querySelector('i')) {
                listItem.classList.toggle('done');
            }
        });

        // Add click handler for delete button
        listItem.querySelector("i").addEventListener("click", () => {
            listItem.remove();
        });

        this.listElement.appendChild(listItem);
    }
}
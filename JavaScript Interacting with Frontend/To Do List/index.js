const addTask = () => {
    const task = document.getElementById('task').value;
    document.getElementById('task').value = '';

    const inputBox = document.getElementById('task');
    if (task == '') {
        showWarning(inputBox);
        return;
    }

    removeWarningOnInput(inputBox);

    const container = createTaskContainer(task);
    document.getElementById('list').appendChild(container);
};

const showWarning = (inputBox) => {
    inputBox.classList.add('input-warning');
    inputBox.placeholder = 'Please enter a task';
};

const removeWarningOnInput = (inputBox) => {
    inputBox.addEventListener('input', () => {
        if (inputBox.value.trim() !== '') {
            inputBox.classList.remove('input-warning');
            inputBox.placeholder = 'Enter your task';
        }
    });
};

const createTaskContainer = (task) => {
    const container = document.createElement('div');
    const checkbox = createCheckbox();
    const label = createLabel(task);
    const removeTask = createRemoveTaskButton();

    container.appendChild(checkbox);
    container.appendChild(label);
    container.appendChild(removeTask);

    container.style.cssText = `
        position:relative;
        display:flex;
        flex-direction:row;
        justify-content:center;
        place-items:center;
        margin-top:10px;
        gap:8px;
    `;

    return container;
};

const createCheckbox = () => {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    
    checkbox.style.cssText = `
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 2px solid #000;
        appearance: none;
        background-color: white;
        cursor: pointer;
    `;

    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            checkbox.style.background = 'magenta';
        } else {
            checkbox.style.backgroundColor = 'white';
        }
    });

    return checkbox;
};

const createLabel = (task) => {
    const label = document.createElement('label');
    label.innerText = task;

    label.style.cssText = `
        position:relative;
        display:flex;
        justify-content:center;
        place-items:center;
        text-align:center;
        height:30px;
        width:250px;
        background:#bcb8b8;
    `;

    return label;
};

const createRemoveTaskButton = () => {
    const removeTask = document.createElement('a');
    removeTask.href = "#";

    const trashIcon = document.createElement('i');
    trashIcon.classList.add('bx', 'bxs-trash');
    removeTask.appendChild(trashIcon);

    trashIcon.style.cssText = `
        height:15px;
        width:15px;
    `;

    removeTask.addEventListener('click', (e) => {
        e.preventDefault();
        removeTaskAnimation(removeTask.parentElement);
    });

    return removeTask;
};

const removeTaskAnimation = (container) => {
    container.classList.add('task-removing');
    container.addEventListener('animationend', () => {
        container.remove();
    });
};


let addButton = document.getElementById('add')
let inputTask = document.getElementById('new-task')
let unfinishedTasks = document.getElementById('incomplete-tasks')
import bindTaskEvents from './bindTaskEvents'
import createNewElement from './app'
import finishTask from './checked'
import save from '../modules/save'
let finishedTasks = document.getElementById('finished-tasks')

import unfinishTask from '../src/unfinish'

export default function addTask() {
    if (inputTask.value) {
        let listItem = createNewElement(inputTask.value, false)
        unfinishedTasks.appendChild(listItem)
        bindTaskEvents(listItem, finishTask)
        inputTask.value = ''
    }
    save()
}

document.querySelector('input').addEventListener('keydown', function(e) {
    if (e.keyCode === 13) {
        console.log(e.keyCode)
        if (inputTask.value) {
            let listItem = createNewElement(inputTask.value, false)
            unfinishedTasks.appendChild(listItem)
            bindTaskEvents(listItem, finishTask)
            inputTask.value = ''
        }
        save()
    }
})

addButton.onclick = addTask

function load() {
    return JSON.parse(localStorage.getItem('todo'))
}


let data = load();

for(let i = 0; i < data.unfinishedTasks.length; i++) {
    let listItem = createNewElement(data.unfinishedTasks[i], false)
    unfinishedTasks.appendChild(listItem)
    bindTaskEvents(listItem, finishTask)
}

for(let i = 0; i < data.finishedTasks.length; i++) {
    let listItem = createNewElement(data.finishedTasks[i], true)
    finishedTasks.appendChild(listItem)
    bindTaskEvents(listItem, unfinishTask)
}

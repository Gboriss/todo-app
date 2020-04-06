let unfinishedTasks = document.getElementById('incomplete-tasks')
let finishedTasks = document.getElementById('finished-tasks')
import bindTaskEvents from '../src/bindTaskEvents'
import unfinishTask from '../src/unfinish'
import finishTask from '../src/checked' 
import createNewElement from '../src/app'

export default function save() {
    let unfinishedTasksArr = []
    let finishedTasksArr = []

    for (let i = 0; i < unfinishedTasks.children.length; i++) {
        unfinishedTasksArr.push(unfinishedTasks.children[i].getElementsByTagName('label')[0].innerText)
    }

    for (let i = 0; i < finishedTasks.children.length; i++) {
        finishedTasksArr.push(finishedTasks.children[i].getElementsByTagName('label')[0].innerText)
    }

    localStorage.removeItem('todo');
    localStorage.setItem('todo', JSON.stringify({
        unfinishedTasks: unfinishedTasksArr,
        finishedTasks: finishedTasksArr
    }))
}

// function load() {
//     return JSON.parse(localStorage.getItem('todo'))
// }


// let data = load();

// for(let i = 0; i < data.unfinishedTasks.length; i++) {
//     let listItem = createNewElement(data.unfinishedTasks[i], false)
//     unfinishedTasks.appendChild(listItem)
//     bindTaskEvents(listItem, finishTask)
// }

// for(let i = 0; i < data.finishedTasks.length; i++) {
//     let listItem = createNewElement(data.finishedTasks[i], true)
//     finishedTasks.appendChild(listItem)
//     bindTaskEvents(listItem, unfinishTask)
// }



let addButton = document.getElementById('add')
let inputTask = document.getElementById('new-task')
let unfinishedTasks = document.getElementById('incomplete-tasks')
let finishedTasks = document.getElementById('finished-tasks')

export default function createNewElement(task, load) {
    let listItem = document.createElement('li')
    let checkbox = document.createElement('button')

    if (load){
        checkbox.className='checkbox icon'
        checkbox.innerHTML = '<span class="material-icons">check_box</span>'
    } else {
        checkbox.className='checkbox icon'
        checkbox.innerHTML = '<span class="material-icons">check_box_outline_blank</span>'
    }

    let label = document.createElement('label')
    label.innerHTML = task
    
    let input = document.createElement('input')
    input.type ="text"
    
    let editButton = document.createElement('button')
    editButton.className='edit icon'
    let img = new Image()
    img.src = require('../images/p.png')
    editButton.appendChild(img)

    let deleteButton = document.createElement('button')
    deleteButton.className='delete icon'
    // deleteButton.innerHTML ='<span class="material-icons">delete</span>'
    let del = new Image()
    del.src = require('../images/basket.png')
    deleteButton.appendChild(del)

    // let img = new Image()
    // img.src = require('../images/p.png')
    // deleteButton.innerHTML = '<img src="'+img.src+'"/>'

    listItem.appendChild(checkbox)
    listItem.appendChild(label)
    listItem.appendChild(input)
    listItem.appendChild(editButton)
    listItem.appendChild(deleteButton)

    return listItem
}

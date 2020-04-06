
import save from '../modules/save'

export default function editTask() {
    let editButton = this
    let listItem = this.parentNode
    let label = listItem.querySelector('label')
    let input = listItem.querySelector('input[type=text]')

    let containsClass = listItem.classList.contains('editMode')

    if (containsClass) {
        label.innerText = input.value
        editButton.className = 'edit icon'
        // editButton.innerHTML = '<span class="material-icons">edit</span>'
        let img = new Image()
        img.src = require('../images/p.png')
        editButton.innerHTML = '<img src="'+img.src+'"/>'
        save()
    } else {
        input.value = label.innerText
        editButton.className = 'save icon'
        // editButton.innerText = '<span class="material-icons">save</span>'
        let img = new Image()
        img.src = require('../images/save.png')
        editButton.innerHTML = '<img src="'+img.src+'"/>'
    }
    listItem.classList.toggle('editMode')
}
 

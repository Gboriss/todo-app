

import editTask from './edit'
import deleteTask from './close'

export default function bindTaskEvents(listItem, checkboxEvent) {
    let checkbox = listItem.querySelector('button.checkbox')
    let editButton = listItem.querySelector('button.edit')
    let deleteButton = listItem.querySelector('button.delete')

    checkbox.onclick = checkboxEvent
    editButton.onclick = editTask
    deleteButton.onclick = deleteTask
}
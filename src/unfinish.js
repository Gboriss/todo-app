
import finishTask from './checked'
import bindTaskEvents from './bindTaskEvents'
import save from '../modules/save'


let unfinishedTasks = document.getElementById('incomplete-tasks')

export default function unfinishTask() {
    let listItem = this.parentNode
    let checkbox = listItem.querySelector('button.checkbox')

    checkbox.className ='checkbox icon'
    checkbox.innerHTML ='<span class="material-icons">check_box_outline_blank</span>'

    unfinishedTasks.appendChild(listItem)
    bindTaskEvents(listItem, finishTask)

    save()
}

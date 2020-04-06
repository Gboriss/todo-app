
import unfinishTask from './unfinish'
import bindTaskEvents from './bindTaskEvents'
import save from '../modules/save'

let finishedTasks = document.getElementById('finished-tasks')

export default function finishTask() {
    let listItem = this.parentNode
    let checkbox = listItem.querySelector('button.checkbox')
    checkbox.className='checkbox icon'
    checkbox.innerHTML ='<span class="material-icons">check_box</span>'
    
    finishedTasks.appendChild(listItem)
    bindTaskEvents(listItem, unfinishTask)
    save()
}

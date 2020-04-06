
import save from '../modules/save'

export default 
function deleteTask() {
    let listItem = this.parentNode
    let ul = listItem.parentNode
    ul.removeChild(listItem)

    save()
}


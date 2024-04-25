import Typography from "../Typography"

import EditIcon from '../../assets/edit-svgrepo-com.svg'
import DeleteIcon from '../../assets/delete-left-svgrepo-com.svg'
import Icon from '../icons'
import CloseIcon2 from '../../assets/icons8-done.svg'
import './style.css'
const ListItem = ({title, editAction, deleteAction, done , onClick})=>{

    return (
        <div className="listItemContainer" onClick={onClick}>
            <div className="listItemsActions">
           {done &&  <Icon src={CloseIcon2} name='closeicon2'/>}
            <Typography title={title}/>
            </div>
            <div className="listItemsActions">
                <div onClick={editAction}>
               
            <Icon src={EditIcon} name='edit-icon' />
            </div></div>
            <div>
                <div onClick={deleteAction}>

            <Icon src={DeleteIcon} name='delete-icon' />
            </div>
            </div>
        </div>
    )

}
export default ListItem
import Icon from '../icons'
import CloseIcon from '../../assets/close-circle-svgrepo-com.svg'
import './style.css'

const Modal =({children, isOpen, onClose})=>{

    return(
         <>
{/* //fragment este un container invizibil care grupeaza mai multe elemente copil  */}
        {isOpen && (
            <div className="modalContainer">
                <div className='modalChildren'>
            {children}
            
            <div onClick={onClose} className='modalCloseIcon'>
            <Icon src={CloseIcon} name='close-icon'/>
            </div>
        </div>
        </div>
        )}

     </>   
    )

}
export default Modal
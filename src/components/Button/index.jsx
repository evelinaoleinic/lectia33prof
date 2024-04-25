import './styles.css';

const Button = ({ children, onClick, disabled }) => {
    return(
    <button
        onClick={onClick}
        className='styledButton'
        disabled={disabled} //ca butonul sa fie disabled
    >
        {children} // children daca stim ca mai adaugam copii
    </button>
    )
}

export default Button;
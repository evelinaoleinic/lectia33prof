import './styles.css';

const Button = ({ children, onClick }) => {
    return(
    <button
        onClick={onClick}
        className='styledButton'
    >
        {children}
    </button>
    )
}

export default Button;
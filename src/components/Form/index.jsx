import Button from '../Button'
import Typography from '../Typography'
import Input from '../Input'

import './styles.css';

const Form = ({
    title,
    tag,
    inputValue,
    onChange,
    placeholder,
    buttonTitle,
    buttonAction
}) => {
    return (
        <div className='styledForm'>
            <div>
            <Typography title={title} tag={tag} />
            <Input
                value={inputValue}
                onChange={onChange}
                placeholder={placeholder}
            />
            </div>
            <Button onClick={buttonAction}>{buttonTitle}</Button>
        </div>
    )
}

export default Form;
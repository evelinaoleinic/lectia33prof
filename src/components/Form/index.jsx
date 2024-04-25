import Button from '../Button'
import Typography from '../Typography'
import Input from '../Input'

import './styles.css';

const Form = ({
    title,
    tag,
    value,
    onChange,
    placeholder,
    buttonTitle,
    buttonAction,
    buttonDisabled
}) => {
    return (
        <div className='styledForm'>
            <div>
            <Typography title={title} tag={tag} />
            <Input
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
            </div>
            <Button onClick={buttonAction} disabled={buttonDisabled}>{buttonTitle}</Button>
        </div>
    )
}

export default Form;
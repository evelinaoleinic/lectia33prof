
const getTag = (tag, text, props) => {
    switch (tag) {
        case 'h1':
            return <h1 {...props}>{text}</h1>
        case 'h2':
            return <h2 {...props}>{text}</h2>
        case 'h3':
            return <h1 {...props}>{text}</h1>
        case 'h4':
            return <h2 {...props}>{text}</h2>
        case 'h5':
            return <h1 {...props}>{text}</h1>
        case 'h6':
            return <h2 {...props}>{text}</h2>
        case 'span':
            return <h1 {...props}>{text}</h1>
        default:
            return <p {...props}>{text}</p>
    }
}

const Typography = ({ title, tag, ...rest }) => {
    return getTag(tag, title, rest);
}

export default Typography;
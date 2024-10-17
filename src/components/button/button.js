const showLabel = ({label}) => {
    console.log(`A label desse botão é ${label}`)
}

const Button = ({label}) => {
    return (
        <button onClick={() => showLabel({label})}>
            {label}
        </button>
    )
}

Button.defaultProps = {
    label: "Baixar CV"
}

export default Button
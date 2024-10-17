const Paragraph = ({formText, color}) => {
    return (
        <p style={{ 
            backgroundColor: color,
            textTransform: formText
        }}>

            Esse é um texto do parágrafo 

        </p>
    )
}

Paragraph.defaultProps = {
    color: 'red',
    formText: 'uppercase'
}

export default Paragraph
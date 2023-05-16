import './index.css';
const CampoTexto = ({label, placeholder, obrigatorio=false, valor, onValueChange}) => {

    const onHandleChange = (evt) => {
        onValueChange(evt.target.value);
    };
    
    return (
        <div className='campo-texto'>
            <label htmlFor='nome'>{label}</label>
            <input value={valor} onChange={onHandleChange} required={obrigatorio} id="nome" placeholder={placeholder} />
        </div>
    )
}

export default CampoTexto;
import './index.css';
const Campo = ({type='text', label, placeholder, obrigatorio=false, valor, onValueChange}) => {

    const onHandleChange = (evt) => {
        onValueChange(evt.target.value);
    };
    
    return (
        <div className={`campo campo-${type}`}>
            <label htmlFor='nome'>{label}</label>
            <input type={type} value={valor} onChange={onHandleChange} required={obrigatorio} id="nome" placeholder={placeholder} />
        </div>
    )
}

export default Campo;
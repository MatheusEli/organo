import './index.css';
const CampoTexto = ({label, placeholder}) => {
    return (
        <div className='campo-texto'>
            <label htmlFor='nome'>{label}</label>
            <input id="nome" placeholder={placeholder} />
        </div>
    )
}

export default CampoTexto;
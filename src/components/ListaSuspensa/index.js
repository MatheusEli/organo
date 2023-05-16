import "./index.css";
const ListaSuspensa = ({ label, itens, valor, onValueChange }) => {
  return (
    <div className="lista-suspensa">
      <label>{label}</label>
      <select value={valor} onChange={evt => onValueChange(evt.target.value)}>
        {itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default ListaSuspensa;

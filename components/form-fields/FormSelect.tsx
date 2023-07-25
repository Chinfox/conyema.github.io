const FormSelect = ({ title, name, options }: { title: string, name: string, options: [] }) => {
  return (

    <div className="mb-6">
      <label htmlFor={name} className="form-label-dark">
        {title}
      </label>
      <select
        id={name}
        name={name}
        className="form-select-dark"
        required
      >
        {options.map(({value, text}, index) => (
          <option key={index} value={value}> {text} </option>
        ))}
      </select>
    </div>

  );
};

export default FormSelect;

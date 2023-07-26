interface Option {
  text: string;
  value: string;
}

interface Select {
  title: string;
  name: string;
  options?: Option[];
}

function FormSelect({ title, name, options }: Select) {

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
        {options && options.map(({ value, text }, index) => (
          <option key={index} value={value}> {text} </option>
        ))}
      </select>
    </div>

  );
}

export default FormSelect;

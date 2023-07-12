const FormRadio = ({ title, name, type, options }: { title: string, name: string, type: string, options: [] }) => {
  
  return (

    <div className="mb-6">
      <span className="form-label-dark">{title}</span>
      <div className="flex items-center space-x-4">
        {options.map(({value, text}, index) => (
          <label htmlFor={value}  key={index} className="flex items-center">
            <input
              type={type}
              id={value}
              name={name}
              value={value}
              className="form-radio-dark"
            />
            <span className="form-text-dark">{text}</span>
          </label>
        ))}
      </div>
    </div>

  );
};

export default FormRadio;

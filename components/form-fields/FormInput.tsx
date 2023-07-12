const FormInput = ({ title, name, type }: { title: string, name: string, type: string }) => {
  
  return (

    <div className="mb-6">
      <label htmlFor={name} className="form-label-dark">
        {title}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        className="form-input-dark focus:ring-blue-500 focus:border-blue-500"
        required
      />
    </div>

  );
};

export default FormInput;

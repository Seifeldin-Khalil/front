const TextInput = (props) => {
  return (
    <div class= "pad">
      <label className="text-white font-bold">{props.label}</label>
      <input
        className="rounded-lg min-w-[250px] p-2"
        type={props.type}
        {...props.register(props.name, props.validation)}
      />
    </div>
  );
};

export default TextInput;

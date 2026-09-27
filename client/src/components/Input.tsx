function Input({
  placeholder,
  ref
}: {
  ref:any
  placeholder: string;
}) {
  return (
    <div>
      <input
        type="text"
        ref={ref}
        className="px-4 py-2  rounded-md border border-slate-300 m-2"
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
interface FormInputProps {
  type: string;
  placeholder: string;
  required: boolean;
  errors: string[];
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

export default function FormInput({
  type,
  placeholder,
  required,
  errors,
  name,
  value,
  onChange,
}: FormInputProps) {
  return (
    <div className="flex flex-col gap-2">
      <input
        name={name}
        className="bg-transparent rounded-md w-full h-10 focus:outline-none ring-1 focus:ring-2 ring-neutral-200 focus:ring-red-600 border-none placeholder:text-neutral-400"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
      {errors.map((error, index) => {
        return (
          <span key={index} className="text-red-500 font-medium">
            {error}
          </span>
        );
      })}
    </div>
  );
}

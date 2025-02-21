interface FormInputProps {
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
  errors?: string[];
  minLength?: number;
  maxLength?: number;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FormInput({
  name,
  type,
  placeholder,
  required,
  errors,
  value,
  onChange,
}: FormInputProps) {
  return (
    <div className="flex flex-col gap-2">
      <input
        name={name}
        className="bg-transparent rounded-md w-full h-10 focus:outline-none ring-1 focus:ring-2 ring-neutral-200 focus:ring-teal-500 border-none placeholder:text-neutral-400"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
      {errors?.map((error: string, index: number) => {
        return (
          <span key={index} className="text-teal-500 font-medium">
            {error}
          </span>
        );
      })}
    </div>
  );
}

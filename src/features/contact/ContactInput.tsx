import { ContactInputProps } from "./types";

export function ContactInput({
    name,
    type,
    placeholder,
    icon: Icon,
    value,
    onChange,
}: ContactInputProps) {
    return (
        <div className="relative">
            <label htmlFor={name} className="sr-only">
                {name}
            </label>

            <Icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-700" />

            <input
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full pl-10 p-3 text-center border border-black/20 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
            />
        </div>
    );
}

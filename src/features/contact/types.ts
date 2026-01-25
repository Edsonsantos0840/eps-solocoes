import { IconType } from "react-icons";

export interface ContactField {
    name: string;
    type: string;
    placeholder: string;
    icon: IconType;
};

export interface ContactInputProps {
    name: string;
    type: string;
    placeholder: string;
    icon: IconType;
    value: string;

    onChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
}

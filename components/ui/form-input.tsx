import React from "react";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
    ({ label, id, className, ...props }, ref) => {
        return (
            <div className="flex flex-col gap-2">
                <label htmlFor={id} className="text-sub text-sm">
                    {label}
                </label>
                <input
                    ref={ref}
                    id={id}
                    className={`bg-background border-2 border-secondary/30 rounded-md px-4 py-2.5 text-main placeholder:text-secondary/60 focus:border-primary outline-none transition-colors ${className ?? ""}`}
                    {...props}
                />
            </div>
        );
    }
);

FormInput.displayName = "FormInput";

export default FormInput;
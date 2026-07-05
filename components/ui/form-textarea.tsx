import React from "react";

interface FormTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
}

const FormTextarea = React.forwardRef<HTMLTextAreaElement, FormTextareaProps>(
    ({ label, id, className, ...props }, ref) => {
        return (
            <div className="flex flex-col gap-2">
                <label htmlFor={id} className="text-sub text-sm">
                    {label}
                </label>
                <textarea
                    ref={ref}
                    id={id}
                    className={`bg-background border-2 border-secondary/30 rounded-md px-4 py-2.5 text-main placeholder:text-secondary/60 focus:border-primary outline-none transition-colors resize-none ${className ?? ""}`}
                    {...props}
                />
            </div>
        );
    }
);

FormTextarea.displayName = "FormTextarea";

export default FormTextarea;
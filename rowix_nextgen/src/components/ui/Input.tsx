import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export default function Input({ className = "", ...props }: InputProps): React.JSX.Element {
  return (
    <input 
      className={`bg-ui-surface border border-surface text-text-main px-4 py-2 rounded ${className}`} 
      {...props} 
    />
  );
}

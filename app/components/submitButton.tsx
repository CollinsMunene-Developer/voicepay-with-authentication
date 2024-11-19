import React from "react";
import { Button } from "../../components/ui/button";
import Image from "next/image";

interface ButtonProps {
  isLoading: boolean;
  className?: string;
  children: React.ReactNode;
  type?: "submit" | "button";
  onClick?: () => void;  // Add onClick handler
}

const SubmitButton = ({ 
  isLoading, 
  className, 
  children,
  type = "submit",  // Ensure type is properly passed
  onClick 
}: ButtonProps) => {
  return (
    <Button
      type={type}
      disabled={isLoading}
      onClick={onClick}
      className={
        className ??
        "shad-primary-btn h-10 w-28 mt-3 justify-center align-middle ml-28 bg-blue-500 text-white rounded-md"
      }
    >
      {isLoading ? (
        <div className="flex items-center gap-4">
          <Image
            src="/assets/icons/loader.svg"  // Fix path to start with /
            alt="loader"
            width={20}
            height={20} 
            className="animate-spin"
          />
          <span>Loading...</span>
        </div>
      ) : (
        children
      )}
    </Button>
  );
};

export default SubmitButton;
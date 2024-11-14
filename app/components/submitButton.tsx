import React from "react";
import { Button } from "../../components/ui/button";

interface Buttonprops {
  isLoading: boolean;
  className?: string;
  children: React.ReactNode;
}

import Image from "next/image";

const SubmitButtton = ({ isLoading, className, children }: Buttonprops) => {
  return (
    <Button
      type="submit"
      disabled={isLoading}
      className={
        className ??
        "shad-primary-btn  h-10 w-28  mt-3 justify-center align-middle ml-28 bg-blue-500 text-white rounded-md"
      }
    >
      {isLoading ? (
        <div className="flex items-center gap-4">
          <Image
            src="../assets/icons/loader.svg"
            alt="loader"
            width={20}
            height={20} 
            className="animate-spin"
          />
          Loading...
        </div>
      ) : (
        children
      )}
    </Button>
  );
};

export default SubmitButtton;

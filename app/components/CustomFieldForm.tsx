import React from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { Control, useForm } from "react-hook-form";
import Image from "next/image";
import PhoneInput from "react-phone-number-input";
import E164Number from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { FormFieldType } from "./forms/signupForm";

interface CustomFieldProps {
  control: Control<any>;
  name?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  placeholder?: string;
  label?: string;
  iconSrc?: string;
  iconAlt?: string;
  disables?: boolean;
  type?: string;
  dateFormat?: string;
  fieldType?: FormFieldType;
  showTimeSelect?: boolean;
  children?: React.ReactNode;
  renderSkeleton?: (field: any) => React.ReactNode;
}

const RenderField = ({
  field,
  props,
}: {
  field: any;
  props: CustomFieldProps;
}) => {
  const { fieldType, iconSrc, iconAlt, placeholder } = props;
  switch (fieldType) {
    case FormFieldType.INPUT:
        return (
          <div className="flex rounded-md border border-black bg-gray-100">
            {iconSrc && (
              <Image
                src={iconSrc}
                alt={iconAlt || "icon"}
                width={24}
                height={24}
                className="ml-3"
              />
            )}
            <FormControl>
              <Input
                placeholder={placeholder}
                {...field}
                type={props.type} // Move `type` inside `Input`
                className="shad-input border- text-black"
              />
            </FormControl>
          </div>
        );
      

    default:
      return null;

      case FormFieldType.PHONE_INPUT:
        case FormFieldType.PHONE_INPUT:
          return (
            <div className="flex rounded-md border bg-gray-100">
              <FormControl>
                <PhoneInput
                  defaultCountry="KE"
                  placeholder={placeholder}
                  international
                  withCountryCallingCode
                  value={field.value as E164Number | undefined}
                  onChange={field.onChange}
                  className="input-phone text-white"
                />
              </FormControl>
            </div>
          );
        
            return null
  }
};  

const CustomFieldForm = (props: CustomFieldProps) => {  
  const { control, label, fieldType, name } = props;

  return (
    <FormField 
    
      control={control}
      name={name || ""}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel  className="text-black font-bold" >{label}</FormLabel>}
          <RenderField field={field} props={props} />
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CustomFieldForm;

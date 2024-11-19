"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {UserIcon, EmailIcon, PasswordIcon} from '../../assets/icons/icons'
import {handleSignup} from '@/actions/Signup'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import SubmitButton from "../submitButton";
import CustomFieldForm from "../CustomFieldForm";
import { FaUser } from "react-icons/fa";
import '../../globals.css'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export enum FormFieldType {
  INPUT = "input",
  TEXTAREA = "textarea",
  SELECT = "select",
  CHECKBOX = "checkbox",
  RADIO = "radio",
  PHONE_INPUT = "phone_input",
  DATE_PICKER = "date_picker",
  SKELETON = "skeleton",
}

const formSchema = z.object({
  firstName: z.string().min(1, {
    message: "First name is required.",
  }),
  lastName: z.string().min(1, {
    message: "Last name is required.",
  }),
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
  confirmPassword: z.string().min(6, {
    message: "Confirm password must be at least 6 characters.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 characters.",
  }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export function SignupForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
    },
  });

const onSubmit = async (values: z .infer<typeof formSchema> ) =>
{
  try {
    setIsLoading(true);
    const result = await handleSignup({
      email: values.email,
      password: values.password,
      firstName: values.firstName,
      lastName: values.lastName,
      username: values.username,
      phone: values.phone,
    });
    

    //show success message
    toast.success("Account created successfully")

    //redirect to the login page
    router.push("/login");
  } catch (error) {
    //show error using toast
    toast.error(error instanceof Error  ? error.message: "Error creating the account . please try again");
    
  }
  finally {
    setIsLoading(false);
  }

};

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y flex-1 mt-0 signupform">
        <section className="mb-2 space-y-1 ">
          <h1 className="text-3xl text-black ml-16 font-bold">
            {" "}
            Hello There👋
          </h1>
          <p className="text-black ml-0 font-bold">    
            Welcome to VoicePay, Sign up to continue 
          </p>
        </section>

        <div className="ml-5">
          <CustomFieldForm
            fieldType={FormFieldType.INPUT} 
            control={form.control}
            firstName="firstName"
            label="First Name "
            placeholder="Enter your first name"
            iconSrc={UserIcon}
          />
          <CustomFieldForm
            fieldType={FormFieldType.INPUT} 
            control={form.control}
            firstName="lastName"
            label="Last Name "
            placeholder="Enter your last name"
            iconSrc={UserIcon}
          />
          <CustomFieldForm
            fieldType={FormFieldType.INPUT} 
            control={form.control}
            firstName="username"
            label="Username "
            placeholder="provide Your default username"
            iconSrc={UserIcon}
          />
          <CustomFieldForm
            fieldType={FormFieldType.INPUT} 
            control={form.control}
            email="email"
            label="Email"
            placeholder="Enter your email address"
            iconSrc={EmailIcon}
          />
          <CustomFieldForm
            fieldType={FormFieldType.PHONE_INPUT} 
            control={form.control}
            name="phone"
            label="Phone Number"
            placeholder="(234) 123-4567"
            iconSrc={EmailIcon}
          />
          <CustomFieldForm
            fieldType={FormFieldType.INPUT} 
            control={form.control}
            password="password"
            label="Password"
            placeholder="Enter a valid password" 
            iconSrc={PasswordIcon}
          />

        </div>

        <SubmitButton 
          className="bg-blue-800 h-10 w-28 mt-3 ml-28 text-gray-200"   
          isLoading={isLoading}
          type="submit"
        >
          Sign Up
        </SubmitButton>
      </form>
    </Form>
  );  
}

export default SignupForm;
import React from "react";
import { Control, FieldPath } from "react-hook-form";
import { z } from "zod";
import { formSchema } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
const authformSchema=formSchema('sign-up')
interface CustomFormProps {
  control: Control<z.infer<typeof authformSchema>>;
  name: FieldPath<z.infer<typeof authformSchema>>;
  label: 'Email' | 'Password' | 'First Name' | 'Last Name' | 'Address' | 'City' | 'State' | 'Postal Code' | 'Date of Birth' | 'SSN';
  placeholder: string;
}

const CustomForm = ({ control, name, label, placeholder }: CustomFormProps) => {
  return (
    <div>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <div className="form-item">
            <FormLabel className="form-label">
            {label}
          </FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              <Input 
                placeholder={placeholder}
                className="input-class"
                type={name === 'Password' ? 'password' : 'text'}
                {...field}
              />
            </FormControl>
              <FormMessage className="form-message mt-2"></FormMessage>
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default CustomForm;

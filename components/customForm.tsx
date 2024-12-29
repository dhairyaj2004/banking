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
interface CustomFormProps {
  control: Control<z.infer<typeof formSchema>>;
  name: FieldPath<z.infer<typeof formSchema>>;
  label: FieldPath<z.infer<typeof formSchema>>;
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
            <FormLabel className="form-label">{label}</FormLabel>
            <div>
              <FormControl className="flex flex-col w-full">
                <Input
                  placeholder={placeholder}
                  type={name==="Password"?'password':'text'}
                  className="input-class"
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

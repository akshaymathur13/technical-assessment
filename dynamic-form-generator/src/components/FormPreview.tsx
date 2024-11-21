import React from "react";
import { useForm } from "react-hook-form";

interface Props {
  schema: any;
}

const FormPreview: React.FC<Props> = ({ schema }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  if (!schema?.fields) return <p>Invalid schema</p>;

  const onSubmit = (data: any) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-4 bg-white dark:bg-gray-800 rounded-lg"
    >
      <h1 className="text-lg font-bold">{schema.formTitle}</h1>
      <p>{schema.formDescription}</p>
      {schema.fields.map((field: any) => (
        <div key={field.id} className="my-4">
          <label className="block mb-2 font-semibold">{field.label}</label>
          {field.type === "text" || field.type === "email" ? (
            <input
              type={field.type}
              {...register(field.id, { required: field.required })}
              placeholder={field.placeholder}
              className="w-full p-2 border rounded"
            />
          ) : field.type === "textarea" ? (
            <textarea
              {...register(field.id, { required: field.required })}
              placeholder={field.placeholder}
              className="w-full p-2 border rounded"
            />
          ) : field.type === "select" ? (
            <select
              {...register(field.id, { required: field.required })}
              className="w-full p-2 border rounded"
            >
              {field.options.map((option: any) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ) : null}
          {errors[field.id] && (
            <p className="text-red-500">This field is required</p>
          )}
        </div>
      ))}
      <button type="submit" className="p-2 bg-blue-500 text-white rounded">
        Submit
      </button>
    </form>
  );
};

export default FormPreview;

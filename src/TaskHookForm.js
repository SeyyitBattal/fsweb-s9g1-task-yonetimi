import React from "react";
import { useForm } from "react-hook-form";

export default function TaskHookForm({ kisiler, submitFn }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        name="baslik"
        placeholder="Başlık"
        {...register("baslik", {
          required: "Lütfen başlık giriniz",
          minLength: 3,
        })}
      />
      {errors.baslik && <p>{errors.baslik.message}</p>}

      <input
        type="text"
        name="aciklama"
        placeholder="Açıklama"
        {...register("aciklama", {
          required: "Lütfen açıklama giriniz",
          minLength: 10,
        })}
      />
      {errors.aciklama && <p>{errors.aciklama.message}</p>}
      <select {...register("category", { required: true })}>
        <option value="">Select...</option>
        <option value="A">Kişi A</option>
        <option value="B">Kişi B</option>
        <option value="C">Kişi C</option>
      </select>
      <input type="submit" />
    </form>
  );
}

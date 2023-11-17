"use client";

import { useForm } from "react-hook-form";
import toast, { Toast } from "react-hot-toast";
import { ContactForm } from "../utils/types";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<ContactForm>();

  async function onSubmit(formData: ContactForm) {
    await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullname: formData.fullname,
        email: formData.email,
        message: formData.message,
      }),
    })
      .then(() => toast.success("Your email has been send successfully"))
      .catch((error) => toast.error("Error occurs" + error));
    reset();
  }

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mb-10 mt-5 flex w-full flex-col rounded-md bg-slate-500 p-5 py-14 md:max-w-3xl md:px-10 mx-auto space-y-4"
      >
        <input
          className="  h-12 block w-full rounded-md border px-3 text-slate-600 outline-none focus:border-stone-500 focus:outline-none md:mb-0"
          type="text"
          placeholder="Fullname"
          required
          {...register("fullname")}
        />

        <input
          className="  h-12 block w-full rounded-md border px-3 text-slate-600 outline-none focus:border-stone-500 focus:outline-none md:mb-0"
          type="text"
          placeholder="Email"
          required
          {...register("email")}
        />

        <textarea
          className="mb-5 block w-full rounded-md border px-3 text-slate-600 outline-none focus:border-stone-500 focus:outline-none md:mb-0"
          placeholder="Message"
          rows={6}
          required
          {...register("message")}
        />

        <button
          disabled={isSubmitting}
          type="submit"
          className="bg-blue-500 px-6 py-3 disabled:bg-blue-400 block-primary rounded-md cursor-pointer text-white font-bold"
        >
          Send
        </button>
      </form>
    </div>
  );
}

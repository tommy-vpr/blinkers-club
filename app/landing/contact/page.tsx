"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { div } from "motion/react-client";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email("Invalid email address"),
  message: z.string().min(10, "Message should be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    console.log("Form submitted:", data);
    // You can send `data` to your API here
    reset(); // Clear form
  };

  return (
    <div className="w-full bg-gray-50">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-xl w-full mx-auto p-6 space-y-4"
      >
        <h2 className="text-2xl font-bold mb-2">Contact Us</h2>

        <div>
          <label className="block text-xs ">Name</label>
          <input
            {...register("name")}
            className="w-full mt-1 p-2 border text-xs"
            placeholder="Your name"
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-medium">Email</label>
          <input
            {...register("email")}
            type="email"
            className="w-full mt-1 p-2 border text-xs"
            placeholder="you@example.com"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-medium">Message</label>
          <textarea
            {...register("message")}
            rows={5}
            className="w-full mt-1 p-2 border text-xs"
            placeholder="Write your message here..."
          />
          {errors.message && (
            <p className="text-red-500 text-xs mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="text-white text-xs px-4 py-2 bg-emerald-500 w-fit hover:bg-emerald-600 
         transition duration-200 mt-2 cursor-pointer"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}

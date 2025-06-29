import { useState } from "react";
import { z } from "zod";
import { copyString } from "../utils/text-utils";

/* Firebase */
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../configs/firebase-config";
import useContactForm from "../service/useContactForm";

export type FormData = z.infer<typeof schema>;
type FormErrors = Partial<Record<keyof FormData, string[]>>;

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  message: z.string().min(1, "Message cannot be empty"),
});

const Contact = () => {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const { fetchContactForm, isLoading, isError } = useContactForm(app);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear the error for the field being edited
    setErrors((prev) => ({
      ...prev,
      [name]: undefined,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = schema.safeParse(formData);

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors(fieldErrors as FormErrors); // <- safely cast here
      return;
    }

    setErrors({});
    fetchContactForm(result.data);
    console.log("xxx", result.data);
    // proceed with sending the data or whatever comes next
  };

  return (
    <div id="contact" className="max-w-[1640px] flex w-full justify-center">
      <div className="flex w-full flex-col md:justify-center md:items-center  justify-start items-start gap-2 mb-44 px-4 md:px-24">
        <div className="box flex justify-center items-center font-semibold text-5xl lg:text-6xl">
          Contact <span className="primary">Form</span>
        </div>
        <div className="box flex justify-center items-center fonts opacity-50 text-2xl">
          You can reach me via the contact form or, alternatively, send an email
          directly to
        </div>
        <div
          className="box flex justify-center items-center underline font-semibold cursor-pointer opacity-50 text-2xl"
          onClick={() => copyString("barisonurme@me.com")}
        >
          {" "}
          barisonurme@me.com
        </div>

        {/* Contact Form */}
        <form
          className={`flex flex-col gap-4 text-lg w-full ${
            isLoading ? "animate-pulse" : ""
          }`}
          onSubmit={handleSubmit}
        >
          <div className="relative w-full">
            <input
              disabled={isLoading}
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder=" " // <-- space is intentional to keep placeholder behavior
              className="peer w-full p-3 pt-6 border-b border-zinc-700 outline-none focus:border-primary transition-all"
            />
            <label
              htmlFor="name"
              className="absolute left-3 top-1 text-zinc-500 text-base transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-lg peer-focus:top-1 peer-focus:text-base peer-focus:text-primary"
            >
              Your Name{" "}
              {errors.name && (
                <span className="text-red-500 text-sm italic">
                  {errors.name[0]}
                </span>
              )}
            </label>
          </div>

          <div className="relative w-full">
            <input
              disabled={isLoading}
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder=" " // <-- space is intentional to keep placeholder behavior
              className="peer w-full p-3 pt-6 border-b border-zinc-700 outline-none focus:border-primary transition-all"
            />
            <label
              htmlFor="email"
              className="absolute left-3 top-1 text-zinc-500 text-base transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-lg peer-focus:top-1 peer-focus:text-base peer-focus:text-primary"
            >
              Your Email{" "}
              {errors.email && (
                <span className="text-red-500 text-sm italic">
                  {errors.email[0]}
                </span>
              )}
            </label>
          </div>

          <div className="relative w-full">
            <textarea
              disabled={isLoading}
              name="message"
              placeholder=" "
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="peer w-full p-3 pt-6 outline-none border-b border-zinc-700 focus:border-primary transition-all resize-none"
            />
            <label
              htmlFor="message"
              className="absolute left-3 top-1 text-zinc-500 text-base transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-lg peer-focus:top-1 peer-focus:text-base peer-focus:text-primary"
            >
              Your Message{" "}
              {errors.message && (
                <span className="text-red-500 text-sm italic">
                  {errors.message[0]}
                </span>
              )}
            </label>
          </div>

          <button
            disabled={isLoading}
            type="submit"
            className={`bg-primary text-white p-3 rounded-md font-semibold transition-all ${
              isLoading
                ? "opacity-50 hover:opacity-60 animate-pulse"
                : "cursor-pointer hover:opacity-90"
            }`}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
          {isError && (
            <span className="flex w-full justify-center items-center text-red-500 text-sm italic">
              Error while sending form
            </span>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Loader from "./Loader";
import Toast from "./Toast";

const schema = yup.object().shape({
  name: yup.string().required("Please Enter Name"),
  message: yup.string().required("Please Enter Message"),
});

export const ContactEmail = () => {
  const form = useRef();
  const [formresult, setFormResult] = useState(false);
  const [toast, setToast] = useState(false);

  const {
    register,
    handleSubmit,
    submitting,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const sendEmail = async (e, action) => {
    setFormResult(true);
    try {
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILSERVICEID,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAIL_API_KEY
      );
      console.log(result.text);

      await setFormResult(false);
      (await result.text.length) !== 0 && showToast(true);
    } catch (error) {
      console.error(error);
      setFormResult(false);
    }
    reset();
  };

  const showToast = async () => {
    await setToast(true);
    setTimeout(() => {
      setToast(false);
    }, 2000);
  };

  return formresult ? (
    <Loader />
  ) : toast ? (
    <Toast />
  ) : (
    <form
      className=" p-6 rounded-lg shadow-md"
      ref={form}
      onSubmit={handleSubmit(sendEmail)}
    >
      <h2 className="text-center">Contact Me</h2>
      <div className="mb-4">
        <label className="block font-bold mb-2 text-gray-700" htmlFor="name">
          Name
        </label>

        <input
          {...register("name")}
          className="border border-gray-400 p-2 w-full"
          type="text"
          placeholder="enter name"
          name="name"
          id="name"
        />
        <p className="text-red-500 text-xs mt-2">{errors.name?.message}</p>
      </div>
      <div className="mb-4">
        <label className="block font-bold mb-2 text-gray-700" htmlFor="message">
          Message
        </label>

        <textarea
          className="border border-gray-400 p-2 w-full h-32"
          id="message"
          {...register("message")}
          placeholder="Enter Message"
          name="message"
        />
        <p className="text-red-500 text-xs mt-2">{errors.message?.message}</p>
      </div>

      <button
        disabled={submitting}
        className="bg-green-700 hover:bg-green-300 text-white font-bold py-2 px-4 border border-green-700 rounded-full scale-75 hover:scale-100 ease-in duration-500"
        type="submit"
        value="Send"
      >
        Send
      </button>
    </form>
  );
};

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";



const schema = yup.object().shape({
  name: yup.string().required("Please Enter Name"),
  message: yup.string().required("Please Enter "),
});

export const ContactEmail = () => {
  const form = useRef();


  const { register, handleSubmit, formState: { errors }, reset } = useForm(
    {
      resolver: yupResolver(schema),
    }
  );

  const sendEmail = (e,action) => {
   

    emailjs.sendForm(process.env.NEXT_PUBLIC_EMAILSERVICEID, process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID, form.current, process.env.NEXT_PUBLIC_EMAIL_API_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      }); 
      action.setSubmit(true)
      reset();
  };


  return (
    <form ref={form} onSubmit={handleSubmit(sendEmail)}>
      <h2>Contact Me</h2>
      <div>
      <label id='name'>Name</label>
      </div>
      <div>
      <input {...register("name")} type="text" placeholder='enter name' name="name" />
      <p className='text-red-500 text-xs mt-2'>{errors.name?.message}</p>
      </div>
     <div>
     <label>Message</label>
     </div>
     <div>

     
      <textarea {...register("message")} placeholder="Enter Message" name="message" />
      <p className='text-red-500 text-xs mt-2'>{errors.message?.message}</p>
      </div>

      <button   className="bg-green-700 hover:bg-green-300 text-white font-bold py-2 px-4 border border-green-700 rounded-full scale-75 hover:scale-100 ease-in duration-500" type="submit" value="Send" >Send</button>
    </form>
  );
};

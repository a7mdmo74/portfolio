'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail';
import toast from 'react-hot-toast';
import { SectionHeading } from '../Shared';
import SubmitBtn from '../Shared/submit-btn';

export default function Contact() {
  const { ref } = useSectionInView('Contact');
  const [formData, setFormData] = useState({
    email: '',
    message: '',
  });

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('senderEmail', formData.email);
    formDataToSend.append('message', formData.message);
    if (formData.email === '' || formData.message === '') {
      toast.error('Please fill all the fields!');
      return;
    }
    const { error } = await sendEmail(formDataToSend);

    if (error) {
      toast.error(error);
    } else {
      toast.success('Email sent successfully!');

      // Reset the form data to its initial state
      setFormData({
        email: '',
        message: '',
      });
    }
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{' '}
        <a className="underline" href="mailto:a7mdmo74@gmail.com">
          a7mdmo74@gmail.com
        </a>{' '}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        onSubmit={handleFormSubmit}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          maxLength={500}
          placeholder="Your email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          maxLength={5000}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}

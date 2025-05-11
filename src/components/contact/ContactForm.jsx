// src/components/contact/ContactForm.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react'; // Example using Formspree
import { useReducedMotion } from '../../hooks/useReducedMotion';

const InputField = ({ id, label, type = 'text', value, onChange, error, placeholder, isTextarea = false }) => {
  const [isFocused, setIsFocused] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const labelVariants = {
    unfocused: {
      y: 0,
      scale: 1,
      color: 'rgb(107 114 128)', // text-gray-500
      transition: { duration: prefersReducedMotion ? 0.01 : 0.2 }
    },
    focused: {
      y: -22, // Adjust based on your text size and line height
      scale: 0.85,
      color: 'rgb(59 130 246)', // text-blue-600
      transition: { duration: prefersReducedMotion ? 0.01 : 0.2 }
    }
  };

  const Tag = isTextarea ? 'textarea' : 'input';

  return (
    <div className="relative mb-6">
      <motion.label
        htmlFor={id}
        className="absolute left-3 -top-[-1.125rem] origin-[0] text-gray-500 dark:text-gray-400 pointer-events-none"
        variants={labelVariants}
        animate={(isFocused || value) ? 'focused' : 'unfocused'}
      >
        {label}
      </motion.label>
      <Tag
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={isFocused ? '' : placeholder} // Show placeholder only when not focused or empty
        rows={isTextarea ? 4 : undefined}
        className={`w-full px-3 py-2.5 bg-transparent border-2 rounded-md transition-colors duration-200
                    ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : 'border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-blue-200 dark:focus:ring-blue-500/30'}
                    focus:outline-none focus:ring-2 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500`}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error && (
        <motion.p
          id={`${id}-error`}
          className="text-red-500 text-xs mt-1"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
        >
          {error}
        </motion.p>
      )}
    </div>
  );
};

const ContactForm = () => {
  // Using Formspree for simplicity. Replace 'YOUR_FORMSPREE_ID' with your actual Formspree form ID.
  // Go to formspree.io to create a form and get your ID.
  const [state, handleSubmitFormspree] = useForm("YOUR_FORMSPREE_ID");
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const prefersReducedMotion = useReducedMotion();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add basic validation if not using Formspree's built-in or for custom backend
    if (!formData.name || !formData.email || !formData.message) {
      // Handle simple client-side validation error display if needed
      alert("Please fill in all fields.");
      return;
    }
    await handleSubmitFormspree(e); // This submits to Formspree
    if (!state.submitting && state.succeeded) { // Check if Formspree succeeded
        setFormData({ name: '', email: '', message: '' }); // Clear form on successful submission
    }
  };

  const messageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: prefersReducedMotion ? 0.01 : 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: prefersReducedMotion ? 0.01 : 0.3 } }
  };

  return (
    <div className="max-w-xl mx-auto py-8 px-4">
      <form onSubmit={handleSubmit} noValidate>
        <InputField
          id="name"
          label="Full Name"
          value={formData.name}
          onChange={handleChange}
          placeholder="John Doe"
          error={state.errors?.find(err => err.field === 'name')?.message}
        />
        <InputField
          id="email"
          label="Email Address"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
          error={state.errors?.find(err => err.field === 'email' || err.field === '_replyto')?.message}
        />
        <InputField
          id="message"
          label="Your Message"
          value={formData.message}
          onChange={handleChange}
          placeholder="How can I help you?"
          isTextarea={true}
          error={state.errors?.find(err => err.field === 'message')?.message}
        />
        {/* Display Formspree general errors */}
        <AnimatePresence>
          {state.errors && state.errors.length > 0 && !state.errors.find(err => err.field) && (
            <motion.p
              className="text-red-500 text-sm mb-4"
              variants={messageVariants}
              initial="hidden" animate="visible" exit="exit"
            >
              {state.errors.map(err => err.message).join(", ")}
            </motion.p>
          )}
        </AnimatePresence>

        <motion.button
          type="submit"
          disabled={state.submitting}
          className="w-full px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          whileHover={!state.submitting && !prefersReducedMotion ? { scale: 1.03 } : {}}
          whileTap={!state.submitting && !prefersReducedMotion ? { scale: 0.97 } : {}}
          transition={{ duration: prefersReducedMotion ? 0.01 : 0.15 }}
        >
          {state.submitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </motion.button>
      </form>

      <AnimatePresence>
        {state.succeeded && (
          <motion.div
            className="mt-6 p-4 text-center text-green-700 bg-green-100 border border-green-300 rounded-md"
            variants={messageVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            Thanks for your message! I'll get back to you soon.
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactForm;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../client';

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false); // Añadido para evitar múltiples envíos

  function handleChange(event) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (isSubmitting) return; // Evita múltiples envíos

    setIsSubmitting(true); // Marca como enviando

    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: formData.fullName,
          }
        }
      });

      if (error) throw error;
      alert('Check your email for verification link');

    } catch (error) {
      alert(error.message || 'An error occurred');
    } finally {
      setIsSubmitting(false); // Restaura el estado de envío
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder='Fullname'
          name='fullName'
          value={formData.fullName}
          onChange={handleChange}
        />

        <input
          placeholder='Email'
          name='email'
          type="email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          placeholder='Password'
          name='password'
          type="password"
          value={formData.password}
          onChange={handleChange}
        />

        <button type='submit' disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
      Already have an account?<Link to='/'>Login</Link> 
    </div>
  );
}

export default SignUp;

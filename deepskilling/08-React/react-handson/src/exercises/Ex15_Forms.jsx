import { useState } from 'react';

// Exercise 15 & 16: Controlled forms + validation
export default function Ex15_Forms() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value })); // controlled: React state is the single source of truth
  };

  const validate = () => {
    const newErrors = {};
    if (!/^\S+@\S+\.\S+$/.test(form.email)) newErrors.email = 'Enter a valid email address';
    if (form.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    setSubmitted(Object.keys(newErrors).length === 0);
  };

  return (
    <section>
      <h2>Ex15/16: Forms & Validation</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
          {errors.email && <span style={{ color: 'red' }}> {errors.email}</span>}
        </div>
        <div>
          <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} />
          {errors.password && <span style={{ color: 'red' }}> {errors.password}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
      {submitted && <p style={{ color: 'green' }}>Form submitted successfully!</p>}
    </section>
  );
}

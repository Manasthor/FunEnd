import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';

const ContactPage = () => {
  const navigate = useNavigate();
  const [showToast, setShowToast] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/f/xjkyjroj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setShowToast(true);
        setFormData({ name: '', email: '', message: '' });

        setTimeout(() => setShowToast(false), 3000);
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      alert('Failed to send. Please check your internet connection.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-400 text-white relative">

      {/* Top Buttons */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 bg-white text-purple-600 p-2 rounded-full shadow hover:bg-purple-100 z-50"
        title="Back"
      >
        <ArrowLeft className="w-5 h-5" />
      </button>

      <button
        onClick={() => navigate('/')}
        className="absolute top-4 right-4 bg-white text-purple-600 p-2 rounded-full shadow hover:bg-purple-100 z-50"
        title="Home"
      >
        <Home className="w-5 h-5" />
      </button>

      <h1 className="text-4xl font-bold mb-6">📞 Contact Me</h1>

      {/* Contact Info */}
      <div className="mb-10 text-center">
        <p className="text-lg font-medium">Manas Rathore</p>
        <p>Email: <a href="mailto:manas842500@gmail.com">manas842500@gmail.com</a></p>
        <p>Phone: <a href="tel:8839395896">8839395896</a></p>
        <p>Location: Delhi, India</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/manas-rathore" target="_blank" rel="noreferrer">linkedin.com/in/manas-rathore</a></p>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-lg shadow-md text-white space-y-4">
        <div>
          <label className="block mb-1 text-sm font-semibold">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full px-4 py-2 rounded bg-white text-black outline-none"
            required
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full px-4 py-2 rounded bg-white text-black outline-none"
            required
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-semibold">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            placeholder="Type your message..."
            className="w-full px-4 py-2 rounded bg-white text-black outline-none"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-white text-purple-700 font-semibold py-2 rounded hover:bg-purple-100 transition"
        >
          Send Message
        </button>
      </form>

      {/* Success Toast */}
      {showToast && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg transition-all duration-300 z-50">
          ✅ Message sent successfully!
        </div>
      )}
    </div>
  );
};

export default ContactPage;

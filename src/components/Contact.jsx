import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    number: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneRegex = /^\d{10}$/;

    // Reset previous feedback
    setError("");
    setSuccess(null);

    // Validation
    if (!phoneRegex.test(formData.number)) {
      setError("Please enter a valid 10-digit contact number.");
      return;
    }

    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill out all required fields.");
      return;
    }

    setIsSending(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          to_name: "Techmate Technologies",
          from_email: formData.email,
          to_email: "techmatestechy@gmail.com",
          message: `
      Name: ${formData.name}
      Contact Number: ${formData.number}
      Email: ${formData.email}
      Message: ${formData.message}
          `,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          setFormData({ name: "", email: "", message: "", number: "" });
        },
        (error) => {
          console.error("Email sending failed:", error);
          setSuccess(false);
          setError("Failed to send message. Try again later.");
        }
      )
      .finally(() => setIsSending(false));
  };

  return (
    <div className="mb-20" id="contact">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        Reach out
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          now!
        </span>
      </h2>

      <div className="flex flex-wrap justify-center">
        <div className="w-full p-2">
          <div className="p-10 border border-neutral-700 rounded-xl">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-neutral-400 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-transparent border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-orange-500"
                  placeholder="Enter name."
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-neutral-400 mb-1">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-transparent border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-orange-500"
                  placeholder="Enter email address."
                />
              </div>

              <div>
                <label htmlFor="number" className="block text-neutral-400 mb-1">
                  Contact number
                </label>
                <input
                  type="text"
                  id="number"
                  name="number"
                  value={formData.number}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (/^\d{0,10}$/.test(value)) {
                      handleChange(e);
                    }
                  }}
                  required
                  maxLength={10}
                  className="w-full p-3 bg-transparent border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-orange-500"
                  placeholder="Enter contact number."
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-neutral-400 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-transparent border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-orange-500"
                  placeholder="Enter message."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-8 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200"
              >
                {isSending ? "Sending..." : "Send Message"}
              </button>

              {success && (
                <p className="text-green-500 text-center mt-4">
                  Message sent successfully!
                </p>
              )}

              {!success && error && (
                <p className="text-red-500 text-center mt-4">{error}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

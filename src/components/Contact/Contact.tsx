const Contact = () => {
  return (
    <div className="">
      <div className="section-heading relative overflow-hidden pb-14 text-center">
        <h2 className="text-2xl font-semibold relative z-10 mb-2 uppercase">
          Contact Information
        </h2>
        <span className="relative z-10 inline-block h-1.5 w-32 overflow-hidden rounded-full bg-teal-500 bg-opacity-20">
          <span className="absolute left-0 top-0 inline-block h-full w-1.5 animate-lefttoright rounded-full bg-teal-500"></span>
        </span>
        <span
          className="pointer-events-none absolute left-1/2 -top-2 z-0 -translate-x-1/2 transform text-9xl font-bold uppercase text-heading opacity-5"
          style={{ willChange: "transform" }}
        >
          Contact
        </span>
      </div>

      <section className="min-h-screen bg-[#081029] text-white flex items-center justify-center p-6">
        <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div>
            {/* Phone */}
            <div className="flex items-start gap-4 p-5 bg-[#0f1a3b] rounded-lg mb-4">
              <div className="bg-[#0d223f] p-3 rounded-full">
                <span className="text-2xl">📞</span>
              </div>
              <div>
                <h4 className="font-semibold">Contact on phone</h4>
                <p className="text-gray-300 text-sm">+012-3456-7891</p>
                <p className="text-gray-300 text-sm">+012-3456-7892</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 p-5 bg-[#0f1a3b] rounded-lg mb-4">
              <div className="bg-[#0d223f] p-3 rounded-full">
                <span className="text-2xl">📧</span>
              </div>
              <div>
                <h4 className="font-semibold">Contact on mail</h4>
                <p className="text-gray-300 text-sm">demomail@demo.com</p>
                <p className="text-gray-300 text-sm">demomail2@demo.com</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4 p-5 bg-[#0f1a3b] rounded-lg">
              <div className="bg-[#0d223f] p-3 rounded-full">
                <span className="text-2xl">📍</span>
              </div>
              <div>
                <h4 className="font-semibold">Contact address</h4>
                <p className="text-gray-300 text-sm">
                  121 King Street, Melbourne, United States
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-[#0f1a3b] p-6 rounded-lg space-y-4">
            <div>
              <label className="block mb-1 text-sm">Name</label>
              <input
                type="text"
                placeholder="Enter your name..."
                className="w-full p-3 rounded bg-[#08192f] text-white placeholder-gray-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">Email</label>
              <input
                type="email"
                placeholder="Enter your email..."
                className="w-full p-3 rounded bg-[#08192f] text-white placeholder-gray-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">Subject</label>
              <input
                type="text"
                placeholder="Enter subject..."
                className="w-full p-3 rounded bg-[#08192f] text-white placeholder-gray-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">Message</label>
              <textarea
                //   rows="5"
                placeholder="Enter your message..."
                className="w-full p-3 rounded bg-[#08192f] text-white placeholder-gray-400 focus:outline-none"
              />
            </div>
            <div className="text-center  mx-auto">
              <button className="  relative inline-block px-4 py-2 bg-teal-600 text-white rounded-3xl overflow-hidden group">
                <span className="absolute inset-0 translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-300 bg-white" />
                <span className="relative z-10 group-hover:text-teal-600 transition-colors duration-300">
                  SEND MAIL
                </span>
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;

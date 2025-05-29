const Contact = () => {
  return (
    <div id="contact" className="mt-10">
      <div className="section-heading relative overflow-hidden pb-14 text-center">
        <h2 className="text-2xl font-semibold relative z-10 mb-2 uppercase text-teal-400">
          Contact Information
        </h2>
        <span className="relative z-10 inline-block h-1.5 w-32 overflow-hidden rounded-full bg-teal-500 bg-opacity-20 mx-auto">
          <span className="absolute left-0 top-0 inline-block h-full w-1.5 animate-lefttoright rounded-full bg-teal-500"></span>
        </span>
        <span
          className="pointer-events-none absolute left-1/2 -top-2 z-0 -translate-x-1/2 transform text-9xl font-bold uppercase text-teal-900 opacity-5 select-none"
          style={{ willChange: "transform" }}
        >
          Contact
        </span>
      </div>

      <section className="text-white flex items-center justify-center p-6">
        <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div>
            {/* Phone */}
            <div className="flex items-start gap-4 p-5 bg-gradient-to-br from-[#061426] to-[#0b2545] rounded-lg mb-4 shadow-md hover:shadow-cyan-700/40 transition duration-300 ease-in-out transform hover:scale-[1.02] cursor-pointer">
              <div className="bg-[#0d223f] p-3 rounded-full">
                <span className="text-2xl select-none">📞</span>
              </div>
              <div>
                <h4 className="font-semibold text-cyan-200">
                  Contact on phone
                </h4>
                <p className="text-cyan-300 text-sm select-text">
                  +8801838153386
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 p-5 bg-gradient-to-br from-[#061426] to-[#0b2545] rounded-lg mb-4 shadow-md hover:shadow-cyan-700/40 transition duration-300 ease-in-out transform hover:scale-[1.02] cursor-pointer">
              <div className="bg-[#0d223f] p-3 rounded-full">
                <span className="text-2xl select-none">📧</span>
              </div>
              <div>
                <h4 className="font-semibold text-cyan-200">Contact on mail</h4>
                <p className="text-cyan-300 text-sm select-text">
                  mdshakib105100@gmail.com
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4 p-5 bg-gradient-to-br from-[#061426] to-[#0b2545] rounded-lg shadow-md hover:shadow-cyan-700/40 transition duration-300 ease-in-out transform hover:scale-[1.02] cursor-pointer">
              <div className="bg-[#0d223f] p-3 rounded-full">
                <span className="text-2xl select-none">📍</span>
              </div>
              <div>
                <h4 className="font-semibold text-cyan-200">Contact address</h4>
                <p className="text-cyan-300 text-sm select-text">
                  Khanchon, Narayongang, Bangladesh
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-gradient-to-br from-[#061426] to-[#0b2545] p-6 rounded-lg shadow-md space-y-4">
            <div>
              <label className="block mb-1 text-sm text-cyan-200">Name</label>
              <input
                type="text"
                placeholder="Enter your name..."
                className="w-full p-3 rounded bg-[#08192f] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm text-cyan-200">Email</label>
              <input
                type="email"
                placeholder="Enter your email..."
                className="w-full p-3 rounded bg-[#08192f] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm text-cyan-200">
                Subject
              </label>
              <input
                type="text"
                placeholder="Enter subject..."
                className="w-full p-3 rounded bg-[#08192f] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm text-cyan-200">
                Message
              </label>
              <textarea
                placeholder="Enter your message..."
                className="w-full p-3 rounded bg-[#08192f] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
                rows={5}
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className=" px-4
            border-1
     border-[#152a6b]
      py-2
      rounded-md
      text-white
      font-semibold
      bg-gradient-to-r
      from-[#081029]
      via-[#0b1740]
      to-[#152a6b]
      shadow-md
      hover:from-[#152a6b]
      hover:via-[#0b1740]
      hover:to-[#081029]
      transition-colors
      duration-300
      ease-in-out
      focus:outline-none
      focus:ring-2
      focus:ring-cyan-500"
              >
                <span className="relative z-10">SEND MAIL</span>
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;

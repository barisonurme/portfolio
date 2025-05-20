const Contact = () => {
  return (
    <div className="max-w-[1640px] flex w-full justify-center">
      <div className="flex w-full flex-col justify-center items-center gap-8 mb-44 px-4 md:px-24">
        <div className="box flex justify-center items-center fonts text-7xl">
          Contact Form
        </div>
        <div className="box flex justify-center items-center fonts opacity-50 text-2xl">
          You can reach me via the contact form or, alternatively, send an email
          directly to barisonurme@me.com.
        </div>

        {/* Contact Form */}
        <form className="flex flex-col gap-4 text-lg w-full">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full flex p-3 outline-none border-b border-zinc-700 focus:border-primary transition-all"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full flex p-3 outline-none border-b border-zinc-700 focus:border-primary transition-all"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full flex p-3 outline-none border-b border-zinc-700 focus:border-primary transition-all resize-none"
          />
          <button
            onClick={(e) => e.preventDefault()}
            type="submit"
            className="bg-primary text-white p-3 rounded-md font-semibold hover:opacity-90 transition-all cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

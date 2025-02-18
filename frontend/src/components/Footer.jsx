const Footer = () => {
  return (
    <div className="bg-black text-white flex flex-wrap justify-between px-4 py-12 mt-auto">
      {/* Customer Services */}
      <div className="flex-1 min-w-[200px] mx-2 text-center mb-6">
        <h3 className="text-lg font-semibold mb-4">CUSTOMER SERVICES</h3>
        <p className="mb-2 hover:text-blue-500 cursor-pointer">About Lock The Box</p>
        <p className="mb-2 hover:text-blue-500 cursor-pointer">How It Works?</p>
        <p className="mb-2 hover:text-blue-500 cursor-pointer">Upcoming Events</p>
        <p className="mb-2 hover:text-blue-500 cursor-pointer">FAQs</p>
        <p className="mb-2 hover:text-blue-500 cursor-pointer">Feedback</p>
      </div>

      {/* Contact Us */}
      <div className="flex-1 min-w-[200px] mx-2 text-center mb-6">
        <h3 className="text-lg font-semibold mb-4">CONTACT US</h3>
        <p className="mb-2">WhatsApp Us <span className="text-blue-500">9050111218</span></p>
        <p className="mb-2">Call Us <span className="text-blue-500">9050111218</span></p>
      </div>

      {/* Social Presence */}
      <div className="flex-1 min-w-[200px] mx-2 text-center mb-6">
        <h3 className="text-lg font-semibold mb-4">SOCIAL PRESENCE</h3>
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-facebook-f hover:scale-110 transition-transform"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-instagram hover:scale-110 transition-transform"></i>
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-twitter hover:scale-110 transition-transform"></i>
          </a>
          <a href="https://wa.me/9050111218" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-whatsapp hover:scale-110 transition-transform"></i>
          </a>
        </div>
        <img
          className="rounded-full h-16 w-16 mx-auto mb-2"
          src="https://e7.pngegg.com/pngimages/142/76/png-clipart-white-and-orange-book-logo-symbol-yellow-orange-logo-ibooks-orange-logo-thumbnail.png"
          alt="Download App"
        />
        <h3 className="text-lg font-semibold">DOWNLOAD APP</h3>
      </div>
    </div>
  );
};

export default Footer;

export default function GoogleMap() {
    return (
      <div className="w-full h-96 bg-gray-200 rounded-xl overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.845006737613!2d77.30090007529739!3d28.544378075712963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce41c4071f0db%3A0xe741624e2d743fee!2s40%20Feet%20Rd%2C%20Shaheen%20Bagh%2C%20Okhla%2C%20New%20Delhi%2C%20Delhi%20110025!5e0!3m2!1sen!2sin!4v1768056571172!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Monolith IT Company Location"
        ></iframe>
      </div>
    );
  }
  
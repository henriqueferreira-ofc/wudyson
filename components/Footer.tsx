import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="mt-4 pb-6 flex flex-col items-center gap-4">
      <div className="flex gap-6">
        <a
          href="https://www.instagram.com/mwudson/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/60 hover:text-gold text-xl transition-colors transform hover:scale-110"
        >
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/henriqueferreira-ofc/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/60 hover:text-gold text-xl transition-colors transform hover:scale-110"
        >
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
        <a
          href="https://www.facebook.com/marciowudson.araujoferreira/?_rdr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/60 hover:text-gold text-xl transition-colors transform hover:scale-110"
        >
          <i className="fa-brands fa-facebook-f"></i>
        </a>
      </div>

      <p className="text-white/30 text-[10px] tracking-widest uppercase">
        © {currentYear} WUDYSON FERREIRA.
      </p>
    </div>
  );
};

export default Footer;

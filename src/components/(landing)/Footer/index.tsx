import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300 pt-16 md:pt-20 lg:pt-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <Link href="/" className="mb-8 inline-block">
              <Image
                src="/images/logo/logo.png"
                alt="logo"
                className="w-full mb-4"
                width={140}
                height={30}
              />
            </Link>
            <div className="flex items-center space-x-4">
              {['facebook', 'twitter', 'youtube', 'linkedin'].map((social) => (
                <a
                  key={social}
                  href="/"
                  aria-label={`${social}-link`}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* SVG paths for social icons */}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {['Useful Links', 'Terms', 'Support & Help'].map((title, index) => (
            <div key={title} className="lg:col-span-1">
              <h2 className="text-xl font-bold text-white mb-6">{title}</h2>
              <ul className="space-y-4">
                {['Link 1', 'Link 2', 'Link 3'].map((link) => (
                  <li key={link}>
                    <a
                      href="/"
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-12 py-6 bg-black bg-opacity-50">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} Each Digital. By BeWellPlanet. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { InstagramIcon, MailIcon, FacebookIcon } from "../icons";

const socialMedia = [
  {
    id: 1,
    icon: <FacebookIcon />,
    link: "https://www.facebook.com/",
  },
  {
    id: 2,
    icon: <InstagramIcon />,
    link: "https://www.instagram.com/",
  },
  {
    id: 3,
    icon: <MailIcon />,
    link: "mailto:aanggaadc@gmail.com",
  },
];

const Footer = () => {
  return (
    <footer className="px-4 py-6 bg-primary lg:px-0">
      <div className="wrapper">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="font-albertSans leading-[19.2px] text-center text-white">
            © 2023 Zamrood by PT Teknologi Pandu Wisata
          </p>

          <div className="flex items-center justify-center gap-6">
            {socialMedia.map((social) => (
              <a
                key={social.id}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

interface CardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, description, icon }) => {
  return (
    <div className="w-full flex flex-col items-center pt-4 font-albertSans">
      {icon}
      <h3 className="text-primary text-center text-lg font-bold uppercase mb-2 leading-[normal] lg:text-xl">
        {title}
      </h3>
      <p className="text-center text-black text-sm leading-tight lg:text-base lg:leading-tight">
        {description}
      </p>
    </div>
  );
};

export default Card;

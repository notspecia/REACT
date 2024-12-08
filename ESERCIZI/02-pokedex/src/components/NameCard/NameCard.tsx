import "./NameCard.css";

type NameCardProps = {
  name: string;
};

const NameCard = ({ name }: NameCardProps) => {
  return (
    <div className="name-card--cont">
      <h3 className="name-card--title">{name}</h3>
    </div>
  );
};
export default NameCard;

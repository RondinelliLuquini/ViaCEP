import './style.css';

type Props = {
  title: string;
  description: string;
};

const ResultCard = ({ title, description }: Props) => {
  return (
    <div className="response-container">
      <h3 className="response-title">{title}</h3>
      <p className="response-description">{description}</p>
    </div>
  );
};

export default ResultCard;

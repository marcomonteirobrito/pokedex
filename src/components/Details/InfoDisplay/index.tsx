import { InfoProps } from "./types";

const InfoDisplay = ({ title, value, icon }: InfoProps) => {
  return (
    <fieldset className="info-display">
      <strong>{title}</strong>
      {icon ? (
        <div className="flex gap-2">
          <p>{value}</p>
          <img src={icon} alt={title} />
        </div>
      ) : (
        <p>{value}</p>
      )}
    </fieldset>
  );
};

export { InfoDisplay };

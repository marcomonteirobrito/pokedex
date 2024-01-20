import { Divider } from "antd";
import { CardProps } from "./types";

const Card = ({ id, description, name, style }: CardProps) => {
  return (
    <div key={id} className="bg-white rounded-lg h-44 w-44 text-gray-800 p-2">
      <div className="flex flex-row justify-between">
        <p>icone</p>
        <p>Pokemon</p>
        <p>versao</p>
      </div>

      <p className="h-24 w-full bg-red-300">image</p>

      <div className="flex flex-col items-center">
        <p>{name}</p>

        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;

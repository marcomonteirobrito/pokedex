import { Pagination } from "antd";
import Cards from "../Cards";

const Content = () => {
  return (
    <div className="flex flex-col justify-between h-full">
      <Cards />
      <Pagination
        defaultCurrent={1}
        total={50}
        pageSizeOptions={[10, 15]}
        responsive
      />
    </div>
  );
};

export default Content;

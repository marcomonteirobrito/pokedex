import { Pagination } from "antd";

const Container = () => {
  return (
    <div className="flex flex-col justify-between h-full">
      <h1>cards</h1>
      <Pagination
        defaultCurrent={1}
        total={50}
        pageSizeOptions={[10, 15]}
        responsive
      />
    </div>
  );
};

export default Container;

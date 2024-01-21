import React from "react";
import { ConfigProvider } from "antd";
import { StylePaginationConfig } from "../components/Pagination/types";

const StyleConfig = ({ children }: StylePaginationConfig) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Pagination: {
            colorText: "#FFFFFF",
            colorIconHover: "#FFFFFF",
            itemLinkBg: "#FFFFFF",
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export { StyleConfig };

import React, { ReactNode } from "react";
import "./index.less";

interface PageContainerProps {
  children?: ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({
  children,
  ...restProps
}) => {
  return (
    <div {...restProps} className="page_container">
      <div className="page_content">
        {children}
      </div>
    </div>
  );
};

export default PageContainer;

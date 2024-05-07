import React, { FC } from "react";
import PageContainer from "./components/PageContainer";
import { Link, useRoutes } from "react-router-dom";
import routes from "./route";

const App: FC = () => {
  const routers = useRoutes(routes)

  return (
    <>
      <PageContainer>
        {routers}
      </PageContainer>
    </>
  );
};

export default App;

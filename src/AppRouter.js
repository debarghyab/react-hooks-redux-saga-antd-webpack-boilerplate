import React, { Suspense } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Spin, Typography } from "antd";

// import { lazy } from "react";

const HelloComponent = () => {
  const { Title } = Typography;
  return (
    <div>
      <Title>Hello World!</Title>
    </div>
  );
};

const AppRouter = () => {
  return (
    <Router>
      <Suspense
        fallback={
          <div>
            <Spin />
          </div>
        }
      >
        <Route exact path="/">
          <HelloComponent />
        </Route>
      </Suspense>
    </Router>
  );
};

export default AppRouter;

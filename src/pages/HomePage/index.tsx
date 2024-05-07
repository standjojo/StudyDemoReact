import React, { FC } from "react";
import MenuItem from "../../components/MenuItem";
import "./index.less";

interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => {
  return (
    <>
      <div className="page_head">
        <div className="page_head_title">PRACTICE DEMO</div>
        <div className="page_head_type">React</div>
      </div>
      <div className="page_body">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
          <MenuItem key={index} name="1" path="/route" />
        ))}
        {[1, 2, 3, 4].map((item, index) => (
          <div className="page_body_menu_placeholder">
            <MenuItem key={index} name="" path="" />
          </div>
        ))}
      </div>
    </>
  );
};

export default HomePage;

import React from "react";
import AppLayout from "../component/AppLayout";
import UploadImage from "../component/UploadImage";
import PersonalInformation from "../component/PersonalInformation";
import { Space } from "antd";
import Profile from "../component/Profile";

const Form = () => {
  return (
    <AppLayout>
      <Space direction="vertical" size={30} style={{ padding: "2rem" }}>
        <UploadImage />
        <PersonalInformation />
        <Profile />
      </Space>
    </AppLayout>
  );
};

export default Form;

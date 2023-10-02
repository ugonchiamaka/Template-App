import React from "react";
import { Card, Button, message, Upload, Typography } from "antd";
import type { UploadProps } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const UploadImage = () => {
  const props: UploadProps = {
    name: "file",
    action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  return (
    <Card
      title="Upload Cover Image"
      bordered={false}
      headStyle={{ backgroundColor: "#D0F7FA", fontSize: "14px" }}
    >
      <Upload {...props}>
        <Button icon={<UploadOutlined />} style={imageContainer}>
          <Typography style={imageText}>Upload cover image</Typography>
          <Typography>16:9 ratio is recommended. Max image size 1mb</Typography>
        </Button>
      </Upload>
    </Card>
  );
};

export default UploadImage;
const imageContainer: React.CSSProperties = {
  padding: "3rem",
  paddingTop: "3rem",
  paddingBottom: "7rem",
  border: "1px dashed grey",
};

const imageText: React.CSSProperties = {
  fontWeight: 500,
};

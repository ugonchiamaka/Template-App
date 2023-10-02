import React from "react";
import {
  Card,
  Space,
  Button,
  Form,
  Input,
  Checkbox,
  Switch,
  Select,
  Typography,
} from "antd";
import { PlusOutlined, CloseOutlined } from "@ant-design/icons";

const Profile = () => {
  const [questionIndex, setQuestionIndex] = React.useState<number>();
  const [multipleChoiceValue, setMultipleChoiceValue] =
    React.useState<string>("");

  const handleChangeSelect = (value: string) => {
    setMultipleChoiceValue(value);
  };
  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };
  const onFinish = (values: string) => {
    console.log("Received values of form:", values);
  };

  console.log("mul", multipleChoiceValue);

  return (
    <Card
      title="Profile"
      bordered={false}
      headStyle={{
        backgroundColor: "#D0F7FA",
        fontSize: "14px",
        width: "450px",
      }}
    >
      <Form
        name="dynamic_form_nest_item"
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.List name="users">
          {(fields, { add, remove }) => (
            <>
              <Space style={{ display: "flex" }} align="center" size="middle">
                <Form.Item
                  // name={[name, "first"]}
                  rules={[{ message: "Missing first name" }]}
                >
                  <Input placeholder="Education" />
                </Form.Item>
                <Form.Item name="disabled" valuePropName="Mandatory">
                  <Checkbox>Mandatory</Checkbox>
                </Form.Item>
                <Form.Item
                  name="hide"
                  label="Hide"
                  rules={[{ message: "Missing last name" }]}
                >
                  <Switch defaultChecked onChange={onChange} />
                </Form.Item>
              </Space>
              <Space style={{ display: "flex" }} align="center" size="middle">
                <Form.Item
                  // name={[name, "first"]}
                  rules={[{ message: "Missing first name" }]}
                >
                  <Input placeholder="Experience" />
                </Form.Item>
                <Form.Item name="disabled" valuePropName="Mandatory">
                  <Checkbox>Mandatory</Checkbox>
                </Form.Item>
                <Form.Item
                  name="hide"
                  // valuePropName="Hide"
                  label="Hide"
                  rules={[{ message: "Missing last name" }]}
                >
                  <Switch defaultChecked onChange={onChange} />
                </Form.Item>
              </Space>
              <Space style={{ display: "flex" }} align="center" size="middle">
                <Form.Item
                  // name={[name, "first"]}
                  rules={[{ message: "Missing first name" }]}
                >
                  <Input placeholder="Resume" />
                </Form.Item>
                <Form.Item
                  // {...restField}
                  name="disabled"
                  valuePropName="Mandatory"
                >
                  <Checkbox>Mandatory</Checkbox>
                </Form.Item>
                <Form.Item
                  name="hide"
                  // valuePropName="Hide"
                  label="Hide"
                  rules={[{ message: "Missing last name" }]}
                >
                  <Switch defaultChecked onChange={onChange} />
                </Form.Item>
              </Space>

              <div style={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  style={{ marginBottom: "10px", fontWeight: "bold" }}
                >
                  Type
                </Typography>
                {fields.map(
                  ({ key }, index) =>
                    index === 0 && (
                      <>
                        <Form.Item noStyle shouldUpdate>
                          {() => (
                            <Select
                              key={key}
                              size="large"
                              defaultValue="lucy"
                              // mode="tags"
                              style={{ width: "100%", marginBottom: "30px" }}
                              onChange={handleChangeSelect}
                              options={[
                                { value: "drop-down", label: "Drop down" },
                                {
                                  value: "multi-choice",
                                  label: "Multi choice",
                                },
                                {
                                  value: "short-answer",
                                  label: "Short Answer",
                                },
                              ]}
                            />
                          )}
                        </Form.Item>
                        {multipleChoiceValue === "multi-choice" ? (
                          <Space
                            size="middle"
                            // align="center"
                            direction="vertical"
                          >
                            <Card
                              size="small"
                              title={`Item`}
                              // key={field.key}
                              extra={
                                <CloseOutlined
                                  onClick={() => {
                                    setQuestionIndex(0);
                                    remove(0);
                                  }}
                                />
                              }
                            >
                              <Form.Item label="Name" name={["name"]}>
                                <Input />
                              </Form.Item>

                              {/* Nest Form.List */}
                              <Form.Item label="List">
                                <Form.List name={["list"]}>
                                  {(subFields, subOpt) => (
                                    <div
                                      style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        rowGap: 16,
                                      }}
                                    >
                                      {subFields.map((subField) => (
                                        <Space key={subField.key}>
                                          <Form.Item
                                            noStyle
                                            name={[subField.name, "first"]}
                                          >
                                            <Input placeholder="first" />
                                          </Form.Item>
                                          <Form.Item
                                            noStyle
                                            name={[subField.name, "second"]}
                                          >
                                            <Input placeholder="second" />
                                          </Form.Item>
                                          <CloseOutlined
                                            onClick={() => {
                                              subOpt.remove(subField.name);
                                            }}
                                          />
                                        </Space>
                                      ))}
                                      <Button
                                        type="dashed"
                                        onClick={() => subOpt.add()}
                                        block
                                      >
                                        + Add Sub Item
                                      </Button>
                                    </div>
                                  )}
                                </Form.List>
                              </Form.Item>
                            </Card>
                            <Form.List name="items">
                              {(fields, { add, remove }) => (
                                <div
                                  style={{
                                    display: "flex",
                                    rowGap: 16,
                                    flexDirection: "column",
                                  }}
                                >
                                  {fields.map((field) => (
                                    <Card
                                      size="small"
                                      title={`Item ${field.name + 1}`}
                                      key={field.key}
                                      extra={
                                        <CloseOutlined
                                          onClick={() => {
                                            remove(field.name);
                                          }}
                                        />
                                      }
                                    >
                                      <Form.Item
                                        label="Name"
                                        name={[field.name, "name"]}
                                      >
                                        <Input />
                                      </Form.Item>

                                      {/* Nest Form.List */}
                                      <Form.Item label="List">
                                        <Form.List name={[field.name, "list"]}>
                                          {(subFields, subOpt) => (
                                            <div
                                              style={{
                                                display: "flex",
                                                flexDirection: "column",
                                                rowGap: 16,
                                              }}
                                            >
                                              {subFields.map((subField) => (
                                                <Space key={subField.key}>
                                                  <Form.Item
                                                    noStyle
                                                    name={[
                                                      subField.name,
                                                      "first",
                                                    ]}
                                                  >
                                                    <Input placeholder="first" />
                                                  </Form.Item>
                                                  <Form.Item
                                                    noStyle
                                                    name={[
                                                      subField.name,
                                                      "second",
                                                    ]}
                                                  >
                                                    <Input placeholder="second" />
                                                  </Form.Item>
                                                  <CloseOutlined
                                                    onClick={() => {
                                                      subOpt.remove(
                                                        subField.name
                                                      );
                                                    }}
                                                  />
                                                </Space>
                                              ))}
                                              <Button
                                                type="dashed"
                                                onClick={() => subOpt.add()}
                                                block
                                              >
                                                + Add Sub Item
                                              </Button>
                                            </div>
                                          )}
                                        </Form.List>
                                      </Form.Item>
                                    </Card>
                                  ))}

                                  <Button
                                    type="dashed"
                                    onClick={() => add()}
                                    block
                                  >
                                    + Add Item
                                  </Button>
                                </div>
                              )}
                            </Form.List>
                          </Space>
                        ) : (
                          multipleChoiceValue === "short-answer" && (
                            <Input placeholder="short answer" />
                          )
                        )}
                      </>
                    )
                  // {/* <MinusCircleOutlined onClick={() => remove(name)} />
                )}
                <Space align="baseline">
                  <Form.Item>
                    <Button
                      type="text"
                      onClick={() => {
                        setQuestionIndex(1);
                        if (questionIndex !== 1) {
                          add();
                        }
                      }}
                      block
                      icon={<PlusOutlined />}
                    >
                      Add a question
                    </Button>
                  </Form.Item>
                </Space>
              </div>
            </>
          )}
        </Form.List>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default Profile;

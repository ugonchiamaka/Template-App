import React from "react";
import { PlusOutlined, CloseOutlined } from "@ant-design/icons";
import {
  Card,
  Space,
  Button,
  Form,
  Input,
  Checkbox,
  Switch,
  Typography,
  Select,
} from "antd";

const PersonalInformation = () => {
  const [questionIndex, setQuestionIndex] = React.useState<number>();
  const [multipleChoiceValue, setMultipleChoiceValue] =
    React.useState<string>("");
  const handleChangeSelect = (value: string) => {
    setMultipleChoiceValue(value);
  };
  const onChange = (checked: boolean) => {
    console.log(checked);
  };

  const onFinish = (values: string) => {
    console.log(values);
  };

  return (
    <Card
      title="Personal Information"
      headStyle={{ backgroundColor: "#D0F7FA", fontSize: "14px" }}
      style={{ width: 450 }}
    >
      <Form
        name="dynamic_form_nest_item"
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.List name="users">
          {(fields, { add, remove }) => (
            <>
              <Form.Item
                // name={[name, "first"]}
                rules={[{ required: true, message: "Missing first name" }]}
              >
                <Input placeholder="First Name" addonAfter={false} />
              </Form.Item>
              <Form.Item
                // name={[name, "last"]}
                rules={[{ required: true, message: "Missing last name" }]}
              >
                <Input placeholder="Last Name" />
              </Form.Item>
              <Form.Item
                // name={[name, "last"]}
                rules={[{ required: true, message: "Missing last name" }]}
              >
                <Input placeholder="Email" />
              </Form.Item>
              <Space style={{ display: "flex" }} align="center" size="middle">
                <Form.Item
                  // name={[name, "first"]}
                  rules={[{ message: "Missing first name" }]}
                >
                  <Input placeholder="Phone (without dial code)" />
                </Form.Item>
                <Form.Item name="disabled" valuePropName="Internal">
                  <Checkbox>Internal</Checkbox>
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
                <Form.Item rules={[{ message: "Missing first name" }]}>
                  <Input placeholder="Nationality" />
                </Form.Item>
                <Form.Item name="disabled" valuePropName="Internal">
                  <Checkbox>Internal</Checkbox>
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
                <Form.Item rules={[{ message: "Missing first name" }]}>
                  <Input placeholder="Current Residence" />
                </Form.Item>
                <Form.Item name="disabled" valuePropName="Internal">
                  <Checkbox>Internal</Checkbox>
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
                  <Input placeholder="ID Number" />
                </Form.Item>
                <Form.Item name="disabled" valuePropName="Internal">
                  <Checkbox>Internal</Checkbox>
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
                  <Input placeholder="Date of Birth" />
                </Form.Item>
                <Form.Item name="disabled" valuePropName="Internal">
                  <Checkbox>Internal</Checkbox>
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
                  <Input placeholder="Gender" />
                </Form.Item>
                <Form.Item name="disabled" valuePropName="Internal">
                  <Checkbox>Internal</Checkbox>
                </Form.Item>
                <Form.Item
                  name="hide"
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
                              style={{ width: "100%", marginBottom: "20px" }}
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
                          <Space size="middle" direction="vertical">
                            <Card
                              size="small"
                              title={`Item`}
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
      </Form>
    </Card>
  );
};

export default PersonalInformation;

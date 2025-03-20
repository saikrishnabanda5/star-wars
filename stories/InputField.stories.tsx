import { Meta, StoryObj } from "@storybook/react";
import InputField from "./InputField";

const meta = {
  title: "Components/InputField",
  component: InputField,
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
    type: { control: "text" },
  },
} as Meta<typeof InputField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Secondary: Story = {
  args: {
    label: "Your Name",
    placeholder: "Enter your name",
    type: "text",
  },
};

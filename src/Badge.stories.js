import React from "react";
import { Badge } from "./Badge";
import { Icon } from "./Icon";

export default {
  title: "Design System/Badge",
  component: Badge,
  parameters: {
    backgrounds: {
      values: [
        { name: "Deep Forest Green", value: "#004751" },
        { name: "Dark Grey", value: "#1B1D27" },
        { name: "Medium Grey", value: "#3C3F4D" },
        { name: "Default Grey", value: "#575B71" },
        { name: "Light Grey", value: "#DCDEE7" },
      ],
    },
  },
};

export const AllBadges = (args) => (
  <div>
    <Badge status="positive">Positive</Badge>
    <Badge status="negative">Negative</Badge>
    <Badge status="neutral">Neutral</Badge>
    <Badge status="error">Error</Badge>
    <Badge status="warning">Warning</Badge>
    <Badge status="positive">
      <Icon {...args} />
      with icon
    </Badge>
  </div>
);
AllBadges.args = {
  icon: "facehappy",
  inline: true,
};

AllBadges.storyName = "all badges";

export const Positive = () => <Badge status="positive">Positive</Badge>;
export const Negative = () => <Badge status="negative">Negative</Badge>;
export const Warning = () => <Badge status="warning">Warning</Badge>;
export const Neutral = () => <Badge status="neutral">Neutral</Badge>;
export const Error = () => <Badge status="error">Error</Badge>;

export const WithIcon = (args) => (
  <Badge {...args}>
    <Icon {...args} />
    with icon
  </Badge>
);
WithIcon.args = {
  status: "warning",
  icon: "check",
  inline: true,
};

WithIcon.storyName = "with icon";

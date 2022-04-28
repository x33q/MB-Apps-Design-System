import React from "react";

import { AvatarList } from "./AvatarList";

export default {
  title: "Design System/AvatarList",
  parameters: {
    componentSubtitle: "A list of Avatars",
  },
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

const Template = (args) => <AvatarList {...args} />;

export const Short = Template.bind({});
Short.args = {
  users: [
    {
      id: "1",
      name: "Dominic Nguyen",
      avatarUrl: "https://avatars2.githubusercontent.com/u/263385",
    },
    {
      id: "2",
      name: "Tom Coleman",
      avatarUrl: "https://avatars2.githubusercontent.com/u/132554",
    },
  ],
};
Short.parameters = {
  docs: {
    // The story now contains a description
    storyDescription: "4 sizes are supported.",
  },
};

export const SmallSize = Template.bind({});
SmallSize.args = {
  users: Short.args.users,
  size: "small",
};
SmallSize.parameters = {
  docs: {
    // The story now contains a description
    storyDescription: "4 sizes are supported.",
  },
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};
Loading.parameters = {
  docs: {
    // The story now contains a description
    storyDescription: "4 sizes are supported.",
  },
};

export const Ellipsized = Template.bind({});
Ellipsized.args = {
  users: [
    ...Short.args.users,
    {
      id: "3",
      name: "Zoltan Olah",
      avatarUrl: "https://avatars0.githubusercontent.com/u/81672",
    },
    {
      id: "4",
      name: "Tim Hingston",
      avatarUrl: "https://avatars3.githubusercontent.com/u/1831709",
    },
  ],
};
Ellipsized.parameters = {
  docs: {
    // The story now contains a description
    storyDescription:
      "Ellipsized to at most 3. Supports passing only a subset of the total user count.",
  },
};

export const BigUserCount = Template.bind({});
BigUserCount.args = {
  users: Ellipsized.args.users,
  userCount: 100,
};
BigUserCount.parameters = {
  docs: {
    // The story now contains a description
    storyDescription: "4 sizes are supported.",
  },
};

export const Empty = Template.bind({});
Empty.args = {
  users: [],
};
Empty.parameters = {
  docs: {
    // The story now contains a description
    storyDescription: "4 sizes are supported.",
  },
};

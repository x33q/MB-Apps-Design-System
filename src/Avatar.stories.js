import React from "react";

import { Avatar } from "./Avatar";

export default {
  title: "Design System/Avatar",
  component: Avatar,

  argTypes: {
    size: {
      control: {
        type: "select",
      },
      options: ["tiny", "small", "medium", "large"],
    },
  },
  parameters: {
    componentSubtitle:
      "Displays an image that represents a user or organization",
  },
};

const Template = (args) => <Avatar {...args} />;

export const Controls = Template.bind({});
Controls.args = {
  loading: false,
  size: "tiny",
  username: "John Doe",
  src: "https://avatars.githubusercontent.com/u/40147432",
};

export const Standard = (args) => <Avatar {...args} />;
Standard.args = {
  size: "large",
  username: "John Doe",
  src: "https://avatars.githubusercontent.com/u/40147432",
};

Standard.parameters = {
  docs: {
    // The story now contains a description
    storyDescription: "4 sizes are supported.",
  },
};

export const Sizes = (args) => (
  <div>
    <Avatar {...args} size="large" />
    <Avatar {...args} size="medium" />
    <Avatar {...args} size="small" />
    <Avatar {...args} size="tiny" />
  </div>
);
Sizes.args = {
  username: "John Doe",
  src: "https://avatars.githubusercontent.com/u/40147432",
};
Sizes.parameters = {
  docs: {
    // The story now contains a description
    storyDescription: "4 sizes are supported.",
  },
};

export const Initials = (args) => (
  <div>
    <Avatar username="Tom Coleman" />
    <Avatar username="Dominic Nguyen" />
    <Avatar username="Kyle Suss" />
    <Avatar username="Michael Shilman" />
  </div>
);

Initials.parameters = {
  docs: {
    // The story now contains a description
    storyDescription: "4 sizes are supported.",
  },
};

export const Loading = (args) => (
  <div>
    <Avatar {...args} size="large" />
    <Avatar {...args} size="medium" />
    <Avatar {...args} size="small" />
    <Avatar {...args} size="tiny" />
  </div>
);
Loading.args = {
  loading: true,
};
Loading.parameters = {
  docs: {
    // The story now contains a description
    storyDescription: "4 sizes are supported.",
  },
};

export const Large = (args) => (
  <div>
    <Avatar loading size="large" />
    <Avatar size="large" username="Tom Coleman" />
    <Avatar
      size="large"
      username="Tom Coleman"
      src="https://avatars2.githubusercontent.com/u/132554"
    />
  </div>
);

Large.parameters = {
  docs: {
    // The story now contains a description
    storyDescription: "4 sizes are supported.",
  },
};

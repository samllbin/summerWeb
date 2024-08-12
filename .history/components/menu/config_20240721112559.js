import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
export const config = [
  {
    key: "sub1",
    label: "治污降霾",
    // icon: <MailOutlined />,
    children: [
      { key: "1", label: "干洁大气的组成" },
      { key: "2", label: "什么是大气污染" },
      { key: "3", label: "大气环境具有自净能力" },
      { key: "4", label: "大气污染的形成" },
      { key: "5", label: "我国大气污染的防治" },
      { key: "6", label: "防治大气污染，我们能做什么？" },
    ],
  },
  {
    key: "sub2",
    label: "Navigation Two",
    // icon: <AppstoreOutlined />,
    children: [
      { key: "5", label: "Option 5" },
      { key: "6", label: "Option 6" },
      {
        key: "sub3",
        label: "Submenu",
        children: [
          { key: "7", label: "Option 7" },
          { key: "8", label: "Option 8" },
        ],
      },
    ],
  },
  {
    key: "sub4",
    label: "Navigation Three",
    // icon: <SettingOutlined />,
    children: [
      { key: "9", label: "Option 9" },
      { key: "10", label: "Option 10" },
      { key: "11", label: "Option 11" },
      { key: "12", label: "Option 12" },
    ],
  },
];

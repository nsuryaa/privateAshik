import { Config } from "types";
import { Email, GitHub, LinkedIn, Resume } from "icons";

export const config: Config = {
  name: {
    display: "Mohamed Ashik",
  },
  title: {
    display: "Aspiring Software Engineer",
  },
  buttons: [
    {
      name: "github",
      display: "GitHub",
      ariaLabel: "GitHub profile (opens in new window)",
      icon: <GitHub />,
      href: "https://github.com/Ashik2609",
    },
    {
      name: "linked-in",
      display: "LinkedIn",
      ariaLabel: "LinkedIn profile (opens in new window)",
      icon: <LinkedIn />,
      href: "http://linkedin.com/in/mohamed-ashik-",
    },
    {
      name: "resume",
      display: "Resume",
      ariaLabel: "Resume in Google Drive (opens in new window)",
      icon: <Resume />,
      href: "https://drive.google.com/file/d/1-EaHtuZMAJYoKL_Nq2FE4V7xHuP8QHRV/view",
    },
    {
      name: "email",
      display: "Email",
      ariaLabel: "Email contact (opens in new window)",
      icon: <Email />,
      href: "mailto:mohamedashik2609@gmail.com",
    },
  ],
};

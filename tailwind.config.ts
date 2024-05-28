import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        point_color: "#0788FF",
        sub_color: "#F6F6F6",
        text_default: "#3A3A3A",
        text_sub: "#979797",
      },
      backgroundImage: {
        banner_img: "url('/images/banner.png')",
      },
    },
  },
  plugins: [],
};
export default config;

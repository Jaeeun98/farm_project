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
      padding: {
        layout_px: "4rem",
      },
      height: {
        header_height: "80px",
        calc_height: "calc(100vh - 120px)",
      },
      borderRadius: {
        box_rounded: "20px",
      },
    },
  },
  plugins: [],
};
export default config;

import { defineConfig } from "vitepress";
import pkg from "../../package.json";

export default defineConfig({
  title: "vue-echarts-components",
  description: "Vue3 ECharts 组件",

  themeConfig: {
    logo: "",
    editLink: {
      pattern:
        "https://github.com/ngd-b/vue-echarts-components/edit/main/docs/:path",
    },
    search: {
      provider: "local",
    },
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/ngd-b/vue-echarts-components",
      },
    ],
    nav: [
      { text: "组件", link: "/guide/" },
      {
        text: pkg.version,
        items: [
          {
            text: "更新日志",
            link: "https://github.com/ngd-b/vue-echarts-components/releases",
          },
        ],
      },
    ],
    footer: {
      message:
        'Released under the <a href="https://github.com/ngd-b/vue-echarts-components/blob/main/LICENSE">MIT License</a>.',
      copyright:
        'Copyright © 2025-present <a href="https://github.com/ngd-b">Hboot</a>',
    },
  },
  srcDir: "src",
  lastUpdated: true,
  sitemap: {
    hostname: "https://vue-echarts-components.hboot.fun",
  },
  cleanUrls: true,
});

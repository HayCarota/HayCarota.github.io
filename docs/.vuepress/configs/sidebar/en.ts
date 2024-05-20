import type { SidebarConfig } from "vuepress-theme-gungnir";
import { getFileNames } from "../file-name"

export const en: SidebarConfig = {
  "/docs/": [
    {
      text: "前端面试题-HTTPS",
      children: getFileNames('../../docs/front-end/computer-network/https', '/docs/front-end/computer-network/https')
    },
    {
      text: "前端面试题-HTTP状态码",
      children: getFileNames('../../docs/front-end/computer-network/http状态码', '/docs/front-end/computer-network/http状态码')
    },
    {
      text: "前端面试题-DNS协议介绍",
      children: getFileNames('../../docs/front-end/computer-network/DNS协议介绍', '/docs/front-end/computer-network/DNS协议介绍')
    },
    {
      text: "前端面试题-网络模型",
      children: getFileNames('../../docs/front-end/computer-network/网络模型', '/docs/front-end/computer-network/网络模型')
    },
    {
      text: "前端面试题-TCP与UDP",
      children: getFileNames('../../docs/front-end/computer-network/TCP与UDP', '/docs/front-end/computer-network/TCP与UDP')
    },
    {
      text: "前端面试题-WebSocket",
      children: getFileNames('../../docs/front-end/computer-network/WebSocket', '/docs/front-end/computer-network/WebSocket')
    },
    // {
    //   text: "Front-end interview HTML",
    //   children: getFileNames('../../docs/front-end-html', '/docs/front-end-html')
    // },
    // {
    //   text: "Basic",
    //   children: [
    //     "/docs/basic/intro.md",
    //     "/docs/basic/installation.md",
    //     "/docs/basic/config.md",
    //     "/docs/basic/search.md",
    //     "/docs/basic/content.md"
    //   ]
    // },
    // {
    //   text: "Advanced",
    //   children: [
    //     "/docs/advanced/comment.md",
    //     "/docs/advanced/analytics.md",
    //     "/docs/advanced/reading-time.md",
    //     "/docs/advanced/rss.md",
    //     "/docs/advanced/hitokoto.md",
    //     "/docs/advanced/icons.md"
    //   ]
    // },
    // {
    //   text: "Markdown Enhancements",
    //   children: [
    //     "/docs/md-enhance/math.md",
    //     "/docs/md-enhance/chart.md",
    //     "/docs/md-enhance/mermaid.md",
    //     "/docs/md-enhance/others.md"
    //   ]
    // },
    // {
    //   text: "Plugins",
    //   children: [
    //     "/docs/plugins/intro.md",
    //     "/docs/plugins/giscus.md",
    //     "/docs/plugins/chart.md",
    //     "/docs/plugins/mermaid.md",
    //     "/docs/plugins/katex.md",
    //     "/docs/plugins/reading-time.md",
    //     "/docs/plugins/baidu-tongji.md",
    //     "/docs/plugins/md-plus.md",
    //     "/docs/plugins/rss.md"
    //   ]
    // }
  ]
};

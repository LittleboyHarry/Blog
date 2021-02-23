# LittleboyHarry 开源博客

<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/80x15.png" /></a>

本作品采用<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">知识共享署名-相同方式共享 4.0 国际许可协议</a>进行许可。**内容转载或参考引用时，请在明显位置内声明出处！**

## 采用的关键 npm 技术包

- facebook 开源社区出品的 [Docusaurus 2](https://v2.docusaurus.io/) 现代化博客网站构建技术
  - 采用 [React](https://zh-hans.reactjs.org/docs/thinking-in-react.html) 框架设计
- 基于 TypeScript 的前端项目，遵循其在 react 应用上的[最佳实践](https://github.com/typescript-cheatsheets/react)

其他前端框架库请留意 [package.json](package.json)

## 自动构建

注意 `npm run make -- --help` ，这是我为一部分内容构建写好的自动构建命令行：

```bash
# 生成所有 JSON Schema 对应的 TypeScript 类型声明
npm run make schema all

# 使用 SVG 格式，为 `src/plantumls/graph-name.puml` 的图生成到 `static/plantumls`
npm run make puml [graph-name.puml]
# !! 需要在电脑上安装好 plantuml 命令行工具
```

感谢 [Netlify](https://www.netlify.com/) 公司提供的网站自动构建服务以及全球 [Cloudflare CDN](https://www.cloudflare.com/zh-cn/cdn) 主机优化！如果你也感兴趣用 Netlify 部署 Docusaurus 博客或技术文档，可以参考[官方指导](https://v2.docusaurus.io/docs/deployment#deploying-to-netlify)

当然，你也可以把我的项目克隆下来进行学习使用，在做好安装 ( `npm i` ) 和配置后执行 `npm start` 体验。**但请您务必声明转载。若需商业使用或合作请[邮件 PM 我](mailto:littleboyharry@qq.com?subject=%E5%AF%B9%20blog%20%E7%9A%84%E5%95%86%E4%B8%9A%E5%90%88%E4%BD%9C%E5%92%A8%E8%AF%A2)**

![背景](static/img/jumbotron-background.jpg)

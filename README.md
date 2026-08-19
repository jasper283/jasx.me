# Jasper的个人博客

[查看博客](https://jasx.me)

本项目fork自[Tailwind Nextjs Starter Blog](https://github.com/timlrx/tailwind-nextjs-starter-blog)，按 Cloudflare Pages 静态站点部署配置。

这是 [Next.js](https://nextjs.org/)、[Tailwind CSS](https://tailwindcss.com/) 博客入门模板。使用 [Contentlayer](https://www.contentlayer.dev/) 来管理 markdown 内容。

可能是功能最丰富的 Next.js markdown 博客模板。易于配置和自定义。非常适合替代现有的 Jekyll 和 Hugo 个人博客。

具体使用查看[原仓库](https://github.com/timlrx/tailwind-nextjs-starter-blog)

## Cloudflare Pages 部署

Cloudflare Pages 项目配置：

```text
Framework preset: Next.js (Static HTML Export)
Build command: pnpm build:cloudflare
Build output directory: out
Node.js version: 20
```

如果使用 npm 构建：

```text
Build command: npm run build:cloudflare
```

评论系统使用 giscus，部署环境需要配置以下变量：

```text
NEXT_PUBLIC_GISCUS_REPO
NEXT_PUBLIC_GISCUS_REPOSITORY_ID
NEXT_PUBLIC_GISCUS_CATEGORY
NEXT_PUBLIC_GISCUS_CATEGORY_ID
```

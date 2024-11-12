# 一刻 Blog

Welcome to my  Blog.

## 介绍

这是一个使用 [Hexo](https://hexo.io/) 框架，[GitHub Pages](https://pages.github.com/) 托管和 [GitHub Action](https://docs.github.com/zh/actions)部署的个人博客。Hexo 是一个快速、简洁且高效的博客框架。

## 项目结构

- **scaffolds**: 新建文章时，Hexo 会根据 scaffold 模板来创建文件
- **source**: 存放博客的所有原始文件（如文章、页面等）
- **themes**: 存放博客主题文件
- **_config.fluid.yml**: fluid主题配置文件
- **_config.yml**: Hexo 配置文件

## 启动博客

1. 安装 [Node.js](https://nodejs.org/)，Use Node.js 23

    npm可能会受到网络环境的影响，可通过以下方式配置

    ```bash
    # 方式一：使用国内镜像源
    npm install -g cnpm --registry=https://registry.npmmirror.com
    cnpm install <package_name>

    # 方式二：设置代理（OpenClash）
    # 注意：请将 127.0.0.1:7890 替换为你实际的OpenClash代理地址和端口。
    npm config set proxy http://127.0.0.1:7890
    npm config set https-proxy http://127.0.0.1:7890
    ```

2. 安装 [Hexo](https://hexo.io/)，可以通过以下命令安装：

    ```bash
    npm install -g hexo-cli
    ```

3. 启动

    - 克隆或下载此项目。
    - 进入项目目录，安装 Hexo 的依赖：

        ```bash
        npm install
        ```

    - 生成并启动本地开发服务器：

        ```bash
        hexo clean
        hexo generate
        hexo server
        ```

    然后在浏览器中访问 http://localhost:4000 来查看您的博客。

## 常用命令

- **`hexo init`**: 初始化 Hexo 项目。
- `hexo new [type] <title> --lang <lang>`: 创建新文章或页面。例如：
  - `hexo new post "My New Post" --lang zh-CN`  用于创建新文章。
  - `hexo new draft "My New Post" --lang zh-CN`  用于创建新草稿。
  - `hexo new page "About"` 用于创建新页面。
- `hexo publish [layout] <filename>` 发表草稿。
- **`hexo generate`** 或 **`hexo g`**: 生成静态文件。
- **`hexo server`** 或 **`hexo s`**: 启动本地开发服务器。
- **`hexo deploy`** 或 **`hexo d`**: 部署到 GitHub Pages 或其他托管服务。
- **`hexo clean`**: 清除生成的文件（例如 `public` 文件夹中的内容）。

更多 Hexo 命令和配置详情请参考 [Hexo官方文档](https://hexo.io/zh-cn/docs/) .

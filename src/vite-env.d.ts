/// <reference types="vite/client" />

// 确保 CSS 模块的类型支持
declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

// 别名路径的类型支持
declare module '@/*';
export const seo = {
  title: '待会去码头整点薯条',
  description:
    '我叫 Nolan，一名计算机科学与技术专业的大三学生，专注于后端开发。我信奉"去码头整点薯条"的人生哲学 —— 在复杂的技术世界中保持简单的快乐，用代码构建有趣的事物。',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://blog.tofries.com'
      : 'http://localhost:3000'
  ),
} as const

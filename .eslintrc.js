module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  /*   Rule Definition 
    "off"或0- 关闭规则
    "warn"或1- 将规则作为警告打开（不影响退出代码）
    "error"或2- 将规则作为错误打开（触发时退出代码为1）
  */
  rules: {
    /* 生产环境 不允许console，debugger */
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "no-compare-neg-zero": 1,       // 禁止与-0进行比较
    "no-empty": 1,                  // 禁止空块语句
    "no-extra-boolean-cast": 1,     // 禁止不必要的布尔强制转换
    "no-extra-semi": 1,             // 禁止不必要的分号
    "no-redeclare": 1,              // 禁止变量重新声明
    "no-regex-spaces": 1,           // 禁止正则表达式文字中的多个空格
    "no-unreachable": 1,            // 禁止可达代码后return，throw，continue，和break语句
    "no-unused-labels": 0,          // 禁止未使用的标签（包括函数等）
    "no-unused-vars": 1,            // 禁止未使用的变量
    "no-useless-escape": 1,         // 禁止不必要的转义用法
    "use-isnan": 1,                 // 使用Number.isNaN()或全局isNaN()函数来测试值是否为NaN，例如isNaN(foo)，不允许foo == NaN
    "no-extra-parens": 1,           // 禁止不必要的括号
    "no-magic-numbers": 0,          // 禁止魔法数字
    "no-duplicate-imports": 1,      // 禁止重复导入，即要求单个模块中的所有导入都存在于单个import语句中。
    "no-unused-expressions": 1,     // 禁止未使用的表达式
    "no-dupe-args": 1,              // 禁止function定义中的重复参数
    "no-mixed-spaces-and-tabs": 0,  //禁止使用混合空格和制表符进行缩进
    "indent-legacy": 0            // 强制执行一致的缩进
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}

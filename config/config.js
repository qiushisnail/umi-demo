export default {
  plugins: [
    [
      "umi-plugin-react",
      {
        antd: true, // 启用antd
        dva: true
      }
    ]
  ],
  routes: [// 配置这个，约定路由就失效了, 独占式
    { path: '/', component: './index' }, // 路径相对于pages
    { path: '/goods', component: './goods' },
    {
      path: '/about',
      component: './about',
      Routes: ['./routers/PrivateRoute.js'] // 相对于根目录，后缀不能省
    },
    {
      path: '/users',
      component: './users/_layout',
      routes: [
        { path: '/users', component: './users/index' },
        { path: '/users/:id', component: './users/$id' },
      ]
    },
    { path: '/login', component: './login' },
    { component: './notfound' },

  ]
}
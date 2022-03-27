module.exports = {
  routes: [
    {
      method: "GET",
      path: "/todos/my",
      handler: "todo.getMyTodos",
      config: {
        polices: [],
      },
    },
  ],
};

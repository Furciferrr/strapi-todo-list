"use strict";

/**
 *  todo controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::todo.todo", ({ strapi }) => ({
  async create(ctx) {
    const todo = ctx.request.body;
    todo.data.user = ctx.state.user.id;
    const entity = await strapi.service("api::todo.todo").create(todo);
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    return this.transformResponse(sanitizedEntity);
  },
  async getMyTodos(ctx) {
    // console.log(ctx.request);
    return 1111;
  },

  async findOne(ctx) {
    
  },
  async find(ctx) {
    const userId = ctx.state.user.id;
    const entry = await strapi.db
    .query("api::todo.todo")
    .findMany({
      where: { user: userId },
      populate: true,
    });
    /* const entry = await strapi.service("api::todo.todo").find({
      filters: { user: userId }
    }); */
    return entry
  }
}));

"use strict";

/**
 *  todo controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::todo.todo", ({ strapi }) => ({
  async create(ctx) {
	const todo = ctx.request.body
	todo.data.user = ctx.state.user
 
    const entity = await strapi
      .service("api::todo.todo")
      .create(todo)
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
	console.log(entity)
    return this.transformResponse(sanitizedEntity);
  },
}));

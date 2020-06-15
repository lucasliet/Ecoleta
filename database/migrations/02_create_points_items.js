"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

 async function up(knex ) {
    return knex.schema.createTable('points_items', table => {
        table.increments('id').primary();
        table.integer('point_id').notNullable().references('id').inTable('points');
        table.integer('item_id').notNullable().references('id').inTable('items');
    })
} exports.up = up;;

 async function down(knex ) {
    return knex.schema.dropTable('point_items');
} exports.down = down;;
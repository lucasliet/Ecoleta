import Knex from 'knex';

export async function up(knex : Knex) {
    knex.schema.createTable('points', table => {
        table.increments('id').primary(),
        
    })
};

export async function down() {

};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('users',table =>{
            table.increments()
            table.string('username',128)
            .notNullable()
            table.integer('age')
            .notNullable()
            table.string('hobbies')
            .notNullable()
            table.timestamp(true, true)
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};

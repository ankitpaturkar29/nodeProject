/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('users',table =>{
            table.uuid('id').defaultTo(knex.fn.uuid())
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


exports.up = function(knex) {
  return knex.schema
  .createTable('projects', tbl => {
    tbl.increments();
    tbl.string('name', 128).notNullable().unique();
    tbl.string('description');
    tbl.boolean('completed').notNullable().defaultTo(false);
  })
  .createTable('resources', tbl => {
    tbl.increments();
    tbl.string('name', 128).notNullable().unique();
    tbl.string('description');

  })
  .createTable('task', tbl => {
    tbl.increments();
    tbl.string('description').notNullable();
    tbl.string('notes');
    tbl.boolean('completed').notNullable().defaultTo(false);
    tbl.integer('project_id')
      .unsigned()
      .notNullable()
      .reference('id')
      .inTable('projects')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  })
  .createTable('project_resources', tbl => {
    tbl.integer('project_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('projects')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    tbl.integer('resource_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('resources')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    tbl.primary(['project_id', 'resource_id']);
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('projects')
  .dropTableIfExists('resources')
  .dropTableIfExists('tasks')
  .dropTableIfExists('project_resources')
};

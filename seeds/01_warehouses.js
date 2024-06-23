import warehouseData from "../seeddata/warehouses.js";

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async (knex) => {
  // Deletes ALL existing entries
  await knex("warehouses").del();
  await knex("warehouses").insert(warehouseData);
};

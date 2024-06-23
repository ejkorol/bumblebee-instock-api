import inventoryData from "../seeddata/inventories.js";

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async (knex) => {
  // Deletes ALL existing entries
  await knex("inventories").del();
  await knex("inventories").insert(inventoryData);
};

import initKnex from "knex";
import configure from "../knexfile.js";
const knex = initKnex(configure);

export const findOne = async (req, res) => {
  try {
    const warehouse = await knex("warehouses").where({ id: req.params.id });
    return res.status(200).json(warehouse);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const postWarehouse = async (req, res) => {
  try {
    const warehouseIds = await knex("warehouses").insert(req.body);

    const warehouseArray = await knex("warehouses").where({
      id: warehouseIds[0],
    });
    const returnWarehouse = warehouseArray[0];
    return res.status(201).json({
      id: returnWarehouse.id,
      warehouse_name: returnWarehouse.warehouse_name,
      address: returnWarehouse.address,
      city: returnWarehouse.city,
      country: returnWarehouse.country,
      contact_name: returnWarehouse.contact_name,
      contact_position: returnWarehouse.contact_position,
      contact_phone: returnWarehouse.contact_phone,
      contact_email: returnWarehouse.contact_email,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const putWarehouse = async (req, res) => {
  try {
    const phoneRegex = /^\+\d{1,2}\s\(\d{3}\)\s\d{3}-\d{4}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(phoneRegex.test(req.body.contact_phone) && emailRegex.test(req.body.contact_email)){
      const warehouse = await knex("warehouses").where({ id: req.params.id }).update({
        warehouse_name: req.body.warehouse_name,
        address: req.body.address,
        city: req.body.city,
        country: req.body.country,
        contact_name: req.body.contact_name,
        contact_position: req.body.contact_position,
        contact_phone: req.body.contact_phone,
        contact_email: req.body.contact_email});
        const updatedWare = await knex("warehouses").where({id: req.params.id});
        const returnWarehouse = updatedWare[0];
  
        return res.status(201).json({
          id: returnWarehouse.id,
          warehouse_name: returnWarehouse.warehouse_name,
          address: returnWarehouse.address,
          city: returnWarehouse.city,
          country: returnWarehouse.country,
          contact_name: returnWarehouse.contact_name,
          contact_position: returnWarehouse.contact_position,
          contact_phone: returnWarehouse.contact_phone,
          contact_email: returnWarehouse.contact_email,
        });
    } else {
      return res.status(501).json({message: "email or phone number is invalid"});
    }

  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}
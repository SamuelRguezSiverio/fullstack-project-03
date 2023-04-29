require("dotenv").config();
const { checkConnection, syncModels } = require("./database/index");
const Brand = require("./api/models/brand.Models");

async function insertBrands() {
    const brand = await Brand.bulkCreate([
        {
            id: 1,
            brand: 'Apple'
        },
        {
            id: 2,
            brand: 'Samsung'
        },
        {
            id: 3,
            brand: 'Xiaomi'
        }
    ]);
    return brand;
}

async function main() {
    try {
        await checkConnection();
        await syncModels();
        await insertBrands();
    } catch (error) {
        console.log(error);
    }
}

main();

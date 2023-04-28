require("dotenv").config();
const { checkConnection, syncModels } = require("./database/index");
const Brand = require("./api/models/brand.Models");

async function insertBrands() {
    const brand = await Brand.bulkCreate([
        {
            brand_name: 'Apple'
        },
        {
            brand_name: 'Samsung'
        },
        {
            brand_name: 'Xiaomi'
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

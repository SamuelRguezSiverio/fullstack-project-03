require("dotenv").config();
const { checkConnection, syncModels } = require("./database/index");
const Brand = require("./api/models/brand.Models");

async function insertBrands() {
    const brand = await Brand.bulkCreate([
        {
            id: 1,
            brand: 'Apple',
            imgUrl: 'https://i.pinimg.com/originals/8e/f7/26/8ef726ffe903afa19aa545e23f3b9c72.png'
        },
        {
            id: 2,
            brand: 'Samsung',
            imgUrl: 'https://tecstore.pe/media/bannercito_xiaomi.png'
        },
        {
            id: 3,
            brand: 'Xiaomi',
            imgUrl: 'https://i.pinimg.com/originals/ea/bd/aa/eabdaadef69a169117a2900e77bfde9f.jpg',
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

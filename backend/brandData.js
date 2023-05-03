require("dotenv").config();
const { checkConnection, syncModels } = require("./database/index");
const Brand = require("./api/models/brand.Models");

async function insertBrands() {
    const brand = await Brand.bulkCreate([
        {
            id: 1,
            brand: 'Apple',
            imgUrl: 'http://drive.google.com/uc?export=view&id=19RQqf8IqLhELfSJAF-A_Pjgcks2DWQLe'
        },
        {
            id: 2,
            brand: 'Samsung',
            imgUrl: 'http://drive.google.com/uc?export=view&id=12M4dTvlBKVB1mKi6cC9Dc-i1LhSElzu8'
        },
        {
            id: 3,
            brand: 'Xiaomi',
            imgUrl: 'http://drive.google.com/uc?export=view&id=1j8i3T9TVoQcxJvNO1gMgqNWJKlLR1YKd',
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

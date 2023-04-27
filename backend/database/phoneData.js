const { checkConnection, syncModels } = require("./index");
const Phones = require("../api/models/phones.Models");

async function insertPhones() {
  const phones = await Phones.bulkCreate([
    {
      marca: "Apple",
      modelo: "iPhone 14 Pro",
      color: "Negro espacial",
      memoria: "128 GB + 6 GB RAM",
      pantalla: '6.1" Super Retina XDR OLED 120 Hz (2556x1179)',
      dimensiones: "147,5 x 71,5 x 7,8 mm",
      procesador: "A16 Bionic",
      camara_frontal: "32 Mpx",
      camara: "Principal: 48 Mpx + Gran angular: 12 Mpx 120º",
      peso: "172 g",
      bateria: "3200 mAh",
      extras: "Resistencia al polvo y agua",
      precio: "1.319 €",
      stock: 200,
    },
    {
      marca: "Apple",
      modelo: "iPhone 14",
      color: "Medianoche",
      memoria: "128 GB + 6 GB RAM",
      pantalla: '6.1" Super Retina XDR OLED 120 Hz (2532x1170)',
      dimensiones: "146,7 x 71,5 x 7,8 mm",
      procesador: "A15 Bionic",
      camara_frontal: "32 Mpx",
      camara: "Principal: 48 Mpx + Gran angular: 12 Mpx 120º",
      peso: "172 g",
      bateria: "3279 mAh",
      extras: "Resistencia al polvo y agua",
      precio: "1.009 €",
      stock: 200,
    },
    {
      marca: "Apple",
      modelo: "iPhone 13",
      color: "Rojo",
      memoria: "128 GB + 4 GB RAM",
      pantalla: '5,4" Super Retina XDR OLED 120 Hz (2340x1080)',
      dimensiones: "131,5 x 64,2 x 7,6 mm",
      procesador: "A15 Bionic",
      camara_frontal: "12 Mpx",
      camara: "Principal: 12 Mpx + Gran angular: 12 Mpx 120º",
      peso: "140 g",
      bateria: "3227 mAh",
      extras: "Resistencia al polvo y agua",
      precio: "1009 €",
      stock: 200,
    },
    {
      marca: "Apple",
      modelo: "iPhone 12",
      color: "Rojo",
      memoria: "64 GB + 4 GB RAM",
      pantalla: '6.1" Super Retina XDR OLED 120 Hz (2532x1170)',
      dimensiones: "146,7 x 71,5 x 7,4 mm",
      procesador: "A14 Bionic",
      camara_frontal: "12 Mpx",
      camara: "Principal: 12 Mpx + Gran angular: 12 Mpx 120º",
      peso: "162 g",
      bateria: "2775 mAh",
      extras: "Resistencia al polvo y agua",
      precio: "809 €",
      stock: 200,
    },
    {
      marca: "Apple",
      modelo: "iPhone SE",
      color: "Rojo",
      memoria: "64 GB + 3 GB RAM",
      pantalla: '4.7" Super Retina XDR OLED 120 Hz (2532x1170)',
      dimensiones: "138,4 x 67,3 x 7,3 mm",
      procesador: "A15 Bionic",
      camara_frontal: "7 Mpx",
      camara: "Principal: 7 Mpx + Gran angular: 7 Mpx 120º",
      peso: "144 g",
      bateria: "2775 mAh",
      extras: "Resistencia al polvo y agua",
      precio: "559 €",
      stock: 200,
    },
  ]);
  return phones;
}

async function main() {
  try {
    await checkConnection();
    await syncModels();
    await insertPhones();
  } catch (error) {
    console.log(error);
  }
}

main();

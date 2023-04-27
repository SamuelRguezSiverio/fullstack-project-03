import React from 'react'
import './PhoneCard.css'
import { Button, TextField, Radio, RadioGroup, FormControlLabel, FormControl } from '@mui/material'
function PhoneCard() {
  return (
    <div className='phone'>
      <div className='main-box-phone'>
        <div>
          <img src='https://thumb.pccomponentes.com/w-530-530/articles/1058/10581317/1866-apple-iphone-14-pro-max-256gb-plata-libre-0dd128be-99b7-434b-9158-d8fd7d29cca7.jpg' />
        </div>
        <div>
          <h3>Apple iPhone 14 Pro Max 256GB Morado Oscuro Libre</h3>
          <h1>1479€</h1>
          <p>Marca: Apple</p>
          <p>Colores:</p>
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-form-control-label-placement"
              name="position"
              defaultValue="top"
            >
              <FormControlLabel
                value="azul"
                control={<Radio />}
                label="Azul"
                labelPlacement="top"
              />
              <FormControlLabel
                value="rojo"
                control={<Radio />}
                label="Rojo"
                labelPlacement="top"
              />
              <FormControlLabel
                value="verde"
                control={<Radio />}
                label="Verde"
                labelPlacement="top"
              />
              <FormControlLabel
                value="amarillo"
                control={<Radio />}
                label="Amarillo"
                labelPlacement="top"
              />
            </RadioGroup>
          </FormControl>
          <p>Almacenamiento:</p>
          <p>
            <Button variant="contained">128 GB</Button>
            <Button variant="contained">256 GB</Button>
            <Button variant="contained">512 GB</Button>
          </p>
          <TextField
            id="outlined-number"
            label="Cantidad"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button>Añadir al Carrito</Button>
        </div>
      </div>
      <div className='phone-data'>
        <p>Procesador: </p>
        <p>Cámara: </p>
        <p>Dimensiones: </p>
        <p>Peso: </p>
        <p>Batería: </p>
        <p>Pantalla: </p>
        <p>Extras: </p>
      </div>
    </div>
  )
}

export default PhoneCard

import React from 'react'
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';

function PhoneCard({ cocktailName, cocktailImg, cocktailIngredients, cocktailType }) {
    return (
      <Card className='main-card'>
        <CardMedia component="img" image={cocktailImg} alt="cocktail img" style={{ borderTopRightRadius: "30px", borderTopLeftRadius: "30px" }} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {cocktailName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {cocktailIngredients}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {cocktailType}
          </Typography>
        </CardContent>
      </Card>
    )
  }
export default PhoneCard
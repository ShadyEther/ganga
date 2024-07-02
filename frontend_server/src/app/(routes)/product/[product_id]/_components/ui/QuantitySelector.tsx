// components/QuantitySelector.tsx
import React from 'react';
import { Box, IconButton, TextField } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

type QuantitySelectorProps = {
  quantity: number;
  onQuantityChange: (newQuantity: number) => void;
};

const QuantitySelector: React.FC<QuantitySelectorProps> = ({ quantity, onQuantityChange }) => {
  const handleDecrease = () => {
    if (quantity > 1) {
      onQuantityChange(quantity - 1);
    }
  };

  const handleIncrease = () => {
    onQuantityChange(quantity + 1);
  };

  return (
    <Box display="flex" alignItems="center">
      <IconButton onClick={handleDecrease} aria-label="decrease quantity">
        <RemoveIcon />
      </IconButton>
      <TextField
        value={quantity}
        onChange={(e) => onQuantityChange(Math.max(1, parseInt(e.target.value, 10)))}
        inputProps={{ min: 1, style: { textAlign: 'center' } }}
        style={{ width: '60px', margin: '0 10px' }}
        variant="outlined"
        size="small"
      />
      <IconButton onClick={handleIncrease} aria-label="increase quantity">
        <AddIcon />
      </IconButton>
    </Box>
  );
};

export default QuantitySelector;

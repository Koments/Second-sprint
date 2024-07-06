import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{
                // стили для слайдера // пишет студент
                maxWidth: '150px',
                '& .MuiSlider-rail': {
                    bgcolor: '#8B8B8B',
                },
                '& .MuiSlider-track': {
                    bgcolor: '#00CC22',
                    border: '1px solid #00CC22',
                },
                '& .MuiSlider-thumb': {
                    width: '18px',
                    height: '18px',
                    bgcolor: '#FFFFFF',
                    border: '1px solid #00CC22',
                    '&:before': {
                        bgcolor: '#00CC22',
                        width: '6px',
                        height: '6px',
                    },
                    '& input': {
                        bgcolor: '#00CC22',
                    },
                    '&:hover': {
                        boxShadow: '0px 0px 0px 8px rgba(0,204,34, 0.16)',
                    },
                    '&.Mui-focusVisible': {
                        boxShadow: '0px 0px 0px 8px rgba(0,204,34, 0.16)',
                    },
                },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange

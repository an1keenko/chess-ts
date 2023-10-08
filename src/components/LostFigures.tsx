import React, {FC} from 'react';
import {Figure} from "../models/figures/Figure";
import {Box, Paper, Typography} from "@mui/material";

interface LostFiguresProps {
    title: string;
    figures: Figure[]
}

const LostFigures: FC<LostFiguresProps> = ({title, figures}) => {
    return (
        <Paper sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            p: '24px',
            height: "calc(50vh - 60px)",
            backgroundColor: '#f5f5f5',
        }}>
            <Typography variant="h6" sx={{fontWeight: 700}}>{title}</Typography>
            {figures.map(figure =>
                <Box sx={{display: 'flex'}} key={figure.id}>
                    <Typography sx={{mr: '8px', fontWeight: 500}}>{figure.name}</Typography>
                    {figure.logo && <img width={20} height={20} src={figure.logo} alt={figure.name}/>}
                </Box>
            )}
        </Paper>
    );
};

export default LostFigures;

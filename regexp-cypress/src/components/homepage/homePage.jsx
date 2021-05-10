import React from 'react'
import { Box, Button, ButtonGroup, Typography } from '@material-ui/core';

const HomePage = () => {
    return (
        <Box>
            <Box className="dgp-home-page">
                <Typography align="center" variant="h2">Welcome!</Typography>
                <Typography align="center" paragraph variant="h2">Everything is fine.</Typography>
                <Typography align="center" variant="h3">You are in the good place.</Typography>
            </Box>
            <Box className="dgp-home-page navigation-section">
                <Typography paragraph align="center" variant="h2">Here what we have for you.</Typography>
                <ButtonGroup>
                    <Button component='a' href="/sandbox">Play in the Sandbox</Button>
                    <Button>Try to understand regular expressions</Button>
                    <Button>Learn patterns</Button>
                </ButtonGroup>
            </Box>
        </Box>
    )
}
export default HomePage;

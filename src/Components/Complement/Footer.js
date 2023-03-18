import { Box, Container, Grid, Link, TextField, Typography, Stack, Button } from "@mui/material";


const Footer = () => {





    return (
        <Box sx={{ bgcolor: 'secondary.main' }}>
        <Container sx={{ mt: '100px' }}>
            <Grid container spacing={3} p={2}>
                <Grid item xs={4}>
                    <Box>
                        <Typography gutterBottom align="justify" color={'white'} sx={{ fontWeight: 'lighter !important' }} variant="h3">
                            <span style={{ border: '1px solid white', color: 'blueviolet', display: 'inline-block', padding: ' 10px 15px' }}>E</span>
                            Parking
                        </Typography>
                        <Typography gutterBottom align="justify">

                            A dhkjfhsdjf sdhf jshdfjlhsmdhf shdmsdhf mshdfjk sdkfsd fjsdmjfkl sjdfkjdslkfjksdjfksjd sd kds fkdjsfl.
                        </Typography>
                        <Typography gutterBottom align="justify">

                            Hehehe, LA, HAHA, UK, HCM City
                        </Typography>
                        <Typography gutterBottom align="justify">

                            info@example.com
                        </Typography>
                        <Typography gutterBottom align="justify">

                            info@example.com
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={2}>
                    <Box>

                        <Typography mb={2} variant="h5">
                            Quick Links
                        </Typography>
                        <Box>
                            <Stack spacing={1}>
                                <Link href="#" underline="none">Home</Link>
                                <Link href="#" underline="none">Our Shop</Link>
                                <Link href="#" underline="none">Shop Detail</Link>
                                <Link href="#" underline="none">Shopping Cart</Link>
                                <Link href="#" underline="none">Checkout</Link>
                                <Link href="#" underline="none">Contact Us</Link>
                            </Stack>

                        </Box>

                    </Box>
                </Grid>
                <Grid item xs={2}>
                    <Box>
                        <Typography mb={2} variant="h5">
                            Quick Links
                        </Typography>
                        <Box>
                            <Stack spacing={1}>
                                <Link href="#" underline="none">Home</Link>
                                <Link href="#" underline="none">Our Shop</Link>
                                <Link href="#" underline="none">Shop Detail</Link>
                                <Link href="#" underline="none">Shopping Cart</Link>
                                <Link href="#" underline="none">Checkout</Link>
                                <Link href="#" underline="none">Contact Us</Link>
                            </Stack>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box>
                        <Typography variant="h5">
                            NewsLetter
                        </Typography>
                        <Box>
                            <TextField sx={{ m: '15px 0px 15px 0px', width:'100%' }} label="Your Name" variant="filled" />
                            <TextField sx={{ m: '15px 0px 15px 0px', width:'100%' }} label="Your Email" variant="filled" />
                        </Box>
                        <Button sx={{ m: '15px 0px 15px 0px' }} variant="contained">Subscribe</Button>

                    </Box>
                </Grid>
            </Grid>
        </Container>

    </Box>






    );
}

export default Footer;
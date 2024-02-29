import { Box, Container, Typography } from "@mui/material";

import styles from './ProductionPage.module.scss';

/**
 * Компонент ProductionPage отображает содержимое страницы Production.
 */
const ProductionPage = () => {
    return (
        <Box className={styles.bg}>
            <Container maxWidth={false} disableGutters>
                <Typography variant="h2" color="primary.main">
                    Текст внутри Production компонента
                </Typography>
            </Container>
        </Box>
    )
}

export default ProductionPage;

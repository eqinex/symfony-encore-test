import { Box, Container, Typography } from "@mui/material";

import styles from "./ArmaturePage.module.scss";

/**
 * Компонент ArmaturePage отображает содержимое страницы Armature.
 */
const ArmaturePage = () => {
    return (
        <Box className={styles.bg}>
            <Container maxWidth={false} disableGutters>
                <Typography variant="h2" color="primary.main">
                    Текст внутри Armature компонента
                </Typography>
            </Container>
        </Box>
    )
}

export default ArmaturePage;

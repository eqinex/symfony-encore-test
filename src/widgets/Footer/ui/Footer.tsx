import {
    Box,
    Button,
    Container,
    Stack,
    Typography,
} from "@mui/material";
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";
import logo from "@/assets/images/logo.png";
import PageUpperIcon from "@/assets/images/page-upper.svg";

const linkData = [
    { label: 'Каталог', path: '' },
    { label: 'Заказать арматуру', path: 'armature' },
    { label: 'Заказ под производство', path: '' },
    { label: 'Калькуляторы', path: '' },
];

const infoData = [
    { label: 'Общая информация', path: '' },
    { label: 'Политика персональных данных ТМК', path: '' },
    { label: 'Документы и регламенты', path: '' },
    { label: 'FAQ (часто задаваемые вопросы)', path: '' },
    { label: 'Карьера в ТМК', path: '' },
];

const contactData = [
    { label: '+7 800 234-5005', path: 'tel:+78002345005' },
    { label: 'sales@tmk-group.com', path: 'mailto:sales@tmk-group.com' },
    { label: 'Горячая линия', path: '' },
    { label: 'Техническая поддержка', path: '' },
];

/**
 * Подвал макета.
 */
export const Footer = () => {

    return (
        <Box className={styles.footer}>
            <Container
                component="footer"
                maxWidth={false}
                disableGutters
                className={styles.menu}
            >
                <Stack direction="row" className={styles.row}>
                    <Stack direction="row">
                        <Stack direction="column" spacing={2}>
                            <Stack direction="row">
                                <img className={styles.logoIcon} loading="eager" alt="" src={logo} />
                                <Box className={styles.info}>
                                    <Typography
                                        color="primary.main"
                                        textTransform="none"
                                        variant="caption"
                                    >
                                        eTrade Интернет-магазин <br /> продукции ПАО «ТМК»
                                    </Typography>
                                </Box>
                            </Stack>
                            <Typography
                                color="info.main"
                                component="div"
                                variant="h4"
                                textTransform="none"
                            >
                                © 2024 ПАО «Трубная Металлургическая Компания»
                            </Typography>
                        </Stack>
                    </Stack>
                    <Stack direction="row" spacing={18}>
                        <Stack direction="column" spacing={2}>
                            {
                                linkData.map((tab, index) => (
                                    <Link to={tab.path} key={index}>
                                        <Button variant="text">
                                            <Typography
                                                variant="h5"
                                                textTransform="uppercase"
                                                className={styles.typography}
                                            >
                                                {tab.label}
                                            </Typography>
                                        </Button>
                                    </Link>
                                ))
                            }
                        </Stack>
                        <Stack direction="column" spacing={2}>
                            <Typography
                                sx={{ padding: '6px 8px' }}
                                color="primary.main"
                                component="div"
                                variant="h5"
                                textTransform="uppercase"
                                className={styles.typography}
                            >
                                Справочная информация
                            </Typography>
                            {
                                infoData.map((tab, index) => (
                                    <Link to={tab.path} key={index}>
                                        <Button variant="text" color="info">
                                            <Typography
                                                variant="h5"
                                                textTransform="none"
                                            >
                                                {tab.label}
                                            </Typography>
                                        </Button>
                                    </Link>
                                ))
                            }
                        </Stack>
                        <Stack direction="column" spacing={2}>
                            <Typography
                                sx={{ padding: '6px 8px' }}
                                color="primary.main"
                                component="div"
                                variant="h5"
                                textTransform="uppercase"
                                className={styles.typography}
                            >
                                Контакты
                            </Typography>
                            {
                                contactData.map((tab, index) => (
                                    <Link to={tab.path} key={index}>
                                        <Button variant="text">
                                            <Typography
                                                variant="h5"
                                                textTransform="uppercase"
                                                className={styles.typography}
                                            >
                                                {tab.label}
                                            </Typography>
                                        </Button>
                                    </Link>
                                ))
                            }
                        </Stack>
                    </Stack>
                    <Stack direction="row">
                        <Button className={styles.pageUpper}>
                            <img
                                loading="eager"
                                alt="pageUpper"
                                src={PageUpperIcon}
                            />
                        </Button>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
};

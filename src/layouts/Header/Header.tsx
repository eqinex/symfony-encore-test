import {
    AppBar,
    Box,
    Button,
    Container,
    Stack,
    Tab,
    Tabs,
    Toolbar,
    Typography
} from "@mui/material";
import styles from "./Header.module.scss";
import logo from "@/assets/images/logo.png";
import BasketIcon from "@/assets/images/basket-icon.svg";
import UserIcon from "@/assets/images/user-icon.svg";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const tabData = [
    { label: 'Магазин' },
    { label: 'Информационный центр' },
    { label: 'Помощь и поддержка' },
];

const linkData = [
    { label: 'Каталог', path: '/v3' },
    { label: 'Заказать арматуру', path: '/v3/armature' },
    { label: 'Заказ под производство', path: '/v3' },
    { label: 'Калькуляторы', path: '/v3' },
];

/**
 * Шапка макета.
 */
export const Header = () => {
    const [value, setValue] = useState(0);

    /**
     * Метод переключения Tabs.
     *
     * @param event    Событие.
     * @param newValue Новое значение вкладки.
     */
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <AppBar position="static" className={styles.appBar}>
            <Container maxWidth={false} disableGutters>
                <Toolbar disableGutters>
                    <img className={styles.logoIcon} loading="eager" alt="logo" src={logo} />
                    <Box className={styles.menu}>
                        <Stack direction="row" className={styles.row}>
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                indicatorColor="primary"
                                textColor="primary"
                            >
                                {
                                    tabData.map((tab, index) => (
                                        <Tab
                                            key={index}
                                            label={<Typography variant="subtitle2">{tab.label}</Typography>}
                                            {...a11yProps(index)}
                                        />
                                    ))
                                }
                            </Tabs>
                            <Stack direction="row" spacing={3} padding="12px">
                                    <Typography
                                        component="div"
                                        color="primary.main"
                                        variant="subtitle2"
                                        textTransform="uppercase"
                                    >
                                        +7 800 234-5005
                                    </Typography>
                                    <Typography
                                        component="div"
                                        color="primary.main"
                                        variant="subtitle2"
                                        textTransform="uppercase"
                                    >
                                        sales@tmk-group.com
                                    </Typography>
                            </Stack>
                        </Stack>
                        <Stack direction="row" className={styles.row}>
                            <Stack direction="row">
                                {
                                    linkData.map((tab, index) => (
                                        <Link
                                            to={tab.path}
                                            key={index}
                                        >
                                            <Button
                                                variant="text"
                                                sx={{ padding: '6px 12px' }}
                                            >
                                                <Typography
                                                    variant="h3"
                                                    textTransform="none"
                                                >
                                                    {tab.label}
                                                </Typography>
                                            </Button>
                                        </Link>
                                    ))
                                }
                            </Stack>
                            <Stack direction="row" spacing={4}>
                                <Button
                                    variant="text"
                                    startIcon={<img loading="eager" alt="BasketIcon" src={BasketIcon} />}
                                    sx={{ padding: '4px 12px' }}
                                >
                                    <Typography variant="h4" textTransform="none">
                                        Корзина
                                    </Typography>
                                </Button>
                                <Button
                                    variant="text"
                                    startIcon={<img loading="eager" alt="" src={UserIcon} />}
                                    sx={{ padding: '4px 12px' }}
                                >
                                    <Typography variant="h4" textTransform="none">
                                        Войти
                                    </Typography>
                                </Button>
                            </Stack>
                        </Stack>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

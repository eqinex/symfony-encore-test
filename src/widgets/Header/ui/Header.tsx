import {
    AppBar,
    Box,
    Button,
    Container,
    Stack,
    Tab,
    Tabs,
    Toolbar,
    Typography,
} from "@mui/material";
import styles from "./Header.module.scss";
import logo from "@/assets/images/logo.png";
import BasketIcon from "@/assets/images/basket-icon.svg";
import UserIcon from "@/assets/images/user-icon.svg";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const tabData = [
    { label: 'Магазин' },
    { label: 'Информационный центр' },
    { label: 'Помощь и поддержка' },
];

const linkData = [
    { label: 'Каталог', path: '' },
    { label: 'Заказать арматуру', path: 'armature' },
    { label: 'Заказ под производство', path: '' },
    { label: 'Калькуляторы', path: '' },
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
                    <Link to="" style={{ cursor: 'pointer' }}>
                        <img className={styles.logoIcon} loading="eager" alt="logo" src={logo} />
                    </Link>
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
                                            value={index}
                                        />
                                    ))
                                }
                            </Tabs>
                            <Stack direction="row" spacing={3}>
                                <Link to={'tel:+78002345005'}>
                                    <Button
                                        variant="text"
                                        sx={{ padding: '6px 12px' }}
                                    >
                                        <Typography
                                            variant="subtitle2"
                                            textTransform="uppercase"
                                            className={styles.typography}
                                        >
                                            +7 800 234-5005
                                        </Typography>
                                    </Button>
                                </Link>
                                <Link to={'mailto:sales@tmk-group.com'}>
                                    <Button
                                        variant="text"
                                        sx={{ padding: '6px 12px' }}
                                    >
                                        <Typography
                                            variant="subtitle2"
                                            textTransform="uppercase"
                                            className={styles.typography}
                                        >
                                            sales@tmk-group.com
                                        </Typography>
                                    </Button>
                                </Link>
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

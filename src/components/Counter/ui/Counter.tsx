import React from "react";
import { useAppDispatch } from "@/shared/hooks/hooks";
import { Button, Stack, Typography } from "@mui/material";
import { counterActions } from "@/features/Counter/slice/counterSlice";
import { useSelector } from "react-redux";
import { getCounterValue } from "@/features/Counter/selectors/counterSelector";

/**
 * Тестовый компонент - Счетчик.
 */
const Counter = () => {
    const dispatch = useAppDispatch();
    const counterValue = useSelector(getCounterValue);

    const handleIncrement = () => {
        dispatch(counterActions.increment());
    };

    const handleDecrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <React.Fragment>
            <Stack direction="row" spacing={2}>
                <Button
                    variant="contained"
                    onClick={handleIncrement}
                >
                    Increment
                </Button>
                <Button
                    variant="contained"
                    onClick={handleDecrement}
                >
                    Decrement
                </Button>
            </Stack>
            <Stack direction="row">
                <Typography variant="h2" color="primary.main">
                    {counterValue}
                </Typography>
            </Stack>
        </React.Fragment>
    )
}

export default Counter;

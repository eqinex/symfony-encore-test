import { StateSchema} from "@/app/providers/StoreProvider";

export const getCounter = (state: StateSchema) => state.counter;
export const getCounterValue = (state: StateSchema) => state.counter?.value;

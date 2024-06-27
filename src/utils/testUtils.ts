import { create, StateCreator, StoreApi } from 'zustand';

/**
 * Creates a mock store using the provided state creator function.
 * @param store - The state creator function.
 * @returns The mock store.
 * @template T - The type of the store state.
 */
export const mockStore = <T>(store: StateCreator<T>): StoreApi<T> => {
  let state: StoreApi<T>;
  state = create(store);
  return state;
};

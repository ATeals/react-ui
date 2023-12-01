import { create } from "zustand";
import { shallow } from "zustand/shallow";

interface StoreState {
  num: number;
  increase: () => void;
  decrease: () => void;
}

const useStore = create<StoreState>((set) => ({
  num: 0,
  increase: () => set((state) => ({ num: state.num + 1 })),
  decrease: () => set((state) => ({ num: state.num > 0 ? state.num - 1 : state.num })),
}));

export const Test = () => {
  return (
    <div>
      <NumComponents />
      <h1>hello</h1>
      <ActionComponents />
    </div>
  );
};

const NumComponents = () => {
  const num = useStore((state) => state.num);
  return <h1>{num}</h1>;
};

const ActionComponents = () => {
  const { increase, decrease } = useStore(
    (state) => ({
      increase: state.increase,
      decrease: state.decrease,
    }),
    shallow
  );

  const handleIncrease = () => increase();
  const handleDecrease = () => decrease();

  return (
    <>
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleDecrease}>-</button>
    </>
  );
};

Test.displayName = "Test";
ActionComponents.displayName = "Action";

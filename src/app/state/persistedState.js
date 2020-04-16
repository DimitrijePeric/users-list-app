import { throttle } from "lodash";
import { saveState } from "./localStorage";

const subscribeDataPersistor = (store) => {
  store.subscribe(
    throttle(() => {
      let storeState = store.getState();

      saveState({
        users: storeState.users,
      });
    }, 1000)
  );
};

export default subscribeDataPersistor;

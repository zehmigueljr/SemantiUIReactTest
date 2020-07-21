import { useContext, createContext } from "react";
import { types, Instance, getSnapshot } from "mobx-state-tree";
import { createEnvironment } from "../Services/Environment";
import { withEnvironment } from "./Extensions/With-environment";
import { User } from "./User";
import { autorun } from "mobx";

const USER_KEY = "user";
const RootModel = types
  .model({
    user: types.maybe(User),
  })
  .extend(withEnvironment);

//const sessionStorageUser = sessionStorage.getItem(USER_KEY);
var user = { token: "Teste", name: "AAA" };
// if (sessionStorageUser !== null) {
//   user = JSON.parse(sessionStorageUser);
// }
export const rootStore = RootModel.create(
  {
    user: user,
  },
  createEnvironment()
);

autorun(() => {
  const user = rootStore.user;
  if (user !== undefined && user?.token !== "") {
    sessionStorage.setItem(USER_KEY, JSON.stringify(getSnapshot(user)));
  } else {
    sessionStorage.removeItem(USER_KEY);
  }
});

export type RootInstance = Instance<typeof RootModel>;
const RootStoreContext = createContext<null | RootInstance>(null);

export const RootProvider = RootStoreContext.Provider;

export function useMst() {
  const store = useContext(RootStoreContext);
  if (store === null) {
    throw new Error("Store cannot be null, please add a context provider");
  }
  return store;
}

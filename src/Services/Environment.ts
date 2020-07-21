import { Instance } from "mobx-state-tree";
import { User } from "../Models/User";

interface IApi {
  login: (password: string) => Promise<Instance<typeof User>>;
}

export class Environment {
  api!: IApi;
}

export const createEnvironment = () => {
  const env = new Environment();
  return env;
};

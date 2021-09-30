export interface Branch {
  _id: string;
  name: string;
  balance: number;
}

export const defaultBranch: Branch = {
  _id: '',
  name: '',
  balance: 0,
};
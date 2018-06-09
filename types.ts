type UserType = {
  name: string;
  readyonly age: number;
}

type ReadOnlyUserType = Readonly<UserType>;
type OptionalUserType = Partial<UserType>;

const a: ReadOnlyUserType = {
  name: 'some name that can not be modified',
  age: 10
  // age also can't be modified
}

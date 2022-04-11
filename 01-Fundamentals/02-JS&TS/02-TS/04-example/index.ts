interface IInputs {
  page: number;
  row: number;
  term: string;
  subs: number;
}

function getUser({ page, subs }: IInputs) {
  console.log(page, subs);

}

getUser({
  page: 1,
  row: 10,
  term: 'React',
  subs: 143,
});

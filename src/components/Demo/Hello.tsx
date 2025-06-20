interface Props {
  message: string;
}
export function Hello(props:Props) {
  return <h1>{props.message}</h1>;
}
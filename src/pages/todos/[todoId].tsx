import Link from "next/link";

/* *******************************************
  Busca um TODO específico
******************************************* */
export async function getStaticProps(context: any) {
  const { params } = context;

  const data = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${params.todoId}`
  );

  const todo = await data.json();

  return {
    props: { todo },
  };
}

/* *******************************************
  Para saber quais todos disponíveis 
******************************************* */
export async function getStaticPaths() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/`);
  const data = await response.json();

  const paths = data.map((todo: any) => {
    return {
      params: {
        todoId: `${todo.id}`,
      },
    };
  });

  return { paths, fallback: false };
}

export default function TodoId({ todo }: any) {
  return (
    <>
      <Link href="/">voltar para todos os todos</Link>
      <h1>Exibindo o produto {todo?.id}</h1>
      <h3>Text: {todo?.title}</h3>
      <p>
        Comentário: la la la{" "}
        <Link href={`/todos/${todo.id}/comments/1`}>Detalhes</Link>
      </p>
      <p>
        Comentário: la le le{" "}
        <Link href={`/todos/${todo.id}/comments/21`}>Detalhes</Link>
      </p>
      <p>
        Comentário: la li li{" "}
        <Link href={`/todos/${todo.id}/comments/11`}>Detalhes</Link>
      </p>
    </>
  );
}

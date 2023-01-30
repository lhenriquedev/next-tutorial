import { InferGetStaticPropsType } from "next";
import Link from "next/link";
import styles from "../../styles/Todos.module.css";

interface TodoProps {
  userId: string;
  id: number;
  title: string;
  completed: boolean;
}

export default function Todos({
  todos,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <h1>Tarefas para fazer</h1>
      <ul className={styles.todolist}>
        {todos?.map((todo) => (
          <>
            <li key={todo.id}>{todo.title}</li>
            <Link href={`/todos/${todo.id}`}>Ver detalhes</Link>
          </>
        ))}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  const data = await fetch(`https://jsonplaceholder.typicode.com/todos/`);
  const todos: TodoProps[] = await data.json();

  return {
    props: {
      todos,
    },
  };
}

import Link from "next/link";
import { useRouter } from "next/router";

export default function CommentId() {
  const router = useRouter();
  const { todoId } = router.query;
  const { commentId } = router.query;

  return (
    <>
      <Link href={`/todos/${todoId}`}>Voltar</Link>
      <h1>Exibindo o comentario numero {commentId}</h1>
    </>
  );
}

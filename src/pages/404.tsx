import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <>
      <h1>404</h1>
      <h2>Esta pagina nao existe</h2>
      <Link href="/">Voltar</Link>
    </>
  );
}

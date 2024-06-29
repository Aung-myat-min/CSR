import Link from "next/link";

export default function NotFound() {
  return (
    <section className="w-11/12 h-[100vh] flex flex-col gap-4 justify-center items-center mx-auto">
      <h1 className="text-3xl text-red-500 font-bold">404 - Not Found</h1>
      <h2>The request, you are looking, can not be found.</h2>
      <Link href="/" className="hover:text-main transition-colors">
        Go Home {"-->"}
      </Link>
    </section>
  );
}

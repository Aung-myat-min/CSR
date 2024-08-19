import AdminNav from "@/components/admin/layout/Nav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="relative pl-[20vw]">
      <AdminNav />
      {children}
    </section>
  );
}

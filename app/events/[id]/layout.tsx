export default function EventLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="relative w-screen h-screen bg-[white] z-[999]">
      {children}
    </div>
  );
}

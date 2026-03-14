import "./globals.css";

export const metadata = {
  title: "Pass the Change",
  description: "Donate spare change from every paycheck",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="max-w-xl mx-auto p-6">{children}</body>
    </html>
  );
}

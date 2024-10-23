import { Header } from "@/components/header/header";
import "@/styles/main.css";

export const metadata = {
  title: "Тестовое задание",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}

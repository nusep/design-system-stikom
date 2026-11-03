import "./globals.css";

export const metadata = {
  title: "SIAKAD STIKOM 2026",
  description:
    "Website Layanan Akademik STIKOM untuk informasi dan layanan mahasiswa.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}

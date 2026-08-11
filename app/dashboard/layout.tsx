import { Roboto } from "next/font/google";
const roboto = Roboto({ subsets: ["latin"], variable: "--font-roboto" });

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={roboto.variable}>{children}</div>;
}

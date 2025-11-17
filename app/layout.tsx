import "../styles/globals.css";
import Layout from "@/components/Layout";

export const metadata = {
  title: "AgriLearn",
  description: "AI-powered climate-smart farming for Kenyan smallholders",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
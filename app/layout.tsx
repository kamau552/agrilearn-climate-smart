import "../styles/globals.css";
import Layout from "@/components/Layout";
import { AuthProvider } from "@/context/AuthContext";

export const metadata = {
  title: "AgriLearn",
  description: "AI-powered climate-smart farming for Kenyan smallholders",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full">
        <AuthProvider>
          <Layout>{children}</Layout>
        </AuthProvider>
      </body>
    </html>
  );
}
export const metadata = {
  title: "Experts Group",
  description: "ERP & Financial Systems Egypt"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial", background: "#020617", color: "white" }}>
        {children}
      </body>
    </html>
  );
}
import Navbar from "@/components/custom/Navbar";

export default function MasterLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

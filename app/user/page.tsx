import CustomerTable from "@/components/CustomerTable";
import Navbar from "@/components/Navbar";

export default function userPage() {

  return (
    <main>
      <div>
      <Navbar />
      </div>
      <div>
        <CustomerTable />
      </div>
    </main>
  );
}

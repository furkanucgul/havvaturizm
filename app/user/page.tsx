
import CustomerTable from "@/components/CustomerTable";
import MenuDrawer from "@/components/MenuDrawer";
import { CustomerCount } from "@/components/charts";
import { Paper } from "@mui/material";





export default function userPage() {

  return (
    <main className="w-full">
      <MenuDrawer />

      <div className="mt-16 mx-3">
        <div className="flex">
          <div className="flex flex-col items-center  sm:flex-row">
            <div className="flex flex-col">
              <div>
                <i className="text-sm ml-3">Aylık yüklenen müşteri sayıları</i>
              </div>
              <div className="min-h-[200px]">
                <CustomerCount />
              </div>
            </div>


          </div>
        </div>
        <div>
          <CustomerTable />
        </div>
      </div>
    </main>
  );
}

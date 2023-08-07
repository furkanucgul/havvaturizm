
import Navbar from "@/components/Navbar";
import { CustomerCount, WorkersCount } from "@/components/charts";





export default function userPage() {
 
  return (
    <main>
      <Navbar/>
      
      <div className="w-full flex justify-center">
        <div className="flex flex-col items-center ">
          <div>
          <i>Aylık yüklenen müşteri sayıları</i>
          </div>
          <div>
          <CustomerCount />
          </div>
        </div>
      </div>
      <div>
        test
      </div>
    </main>
  );
}

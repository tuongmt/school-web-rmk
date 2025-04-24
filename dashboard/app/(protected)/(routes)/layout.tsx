import Header from "@/components/header/dashboard-header";
import DashboardSidebar from "@/components/sidebar/dashboard-sidebar";

export default function ProtectedLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  /* BUG
    Thanh địa chỉ trên trình duyệt di động không giấu được khi kéo xuống! 
  */
  return (
    <main className="flex flex-col md:flex-row w-screen h-screen overflow-hidden rounded-md">
      <div className="md:block hidden">
        <DashboardSidebar initOpen={true} />
      </div>

      <section className="flex flex-col flex-1 overflow-hidden">
        <div className="md:hidden flex flex-row w-full">
          <DashboardSidebar initOpen={false} />
          <Header />
        </div>

        <div className="md:flex hidden">
          <Header />
        </div>

        <div className="p-6 md:border-l h-full overflow-y-auto">{children}</div>
      </section>
    </main>
  );
}

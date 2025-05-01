
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import ForumSidebar from "@/components/layout/ForumSidebar";
import ForumHeader from "@/components/layout/ForumHeader";
import WelcomeBanner from "@/components/dashboard/WelcomeBanner";
import TopicTabs from "@/components/dashboard/TopicTabs";
import ForumStats from "@/components/dashboard/ForumStats";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="flex h-screen bg-zinc-900 text-white overflow-hidden">
        <ForumSidebar />
        
        <SidebarInset className="p-0 flex flex-col">
          <ForumHeader />
          
          <ScrollArea className="flex-1">
            <main className="max-w-6xl mx-auto p-4">
              <WelcomeBanner />
              <TopicTabs />
              <ForumStats />
            </main>
          </ScrollArea>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Index;

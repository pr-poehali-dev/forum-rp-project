
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import Icon from "@/components/ui/icon";

const ForumHeader = () => {
  return (
    <header className="flex justify-between items-center p-4 border-b border-zinc-800 bg-zinc-900">
      <div className="flex gap-4 items-center">
        <SidebarTrigger />
        <h2 className="text-xl font-bold hidden md:block">Добро пожаловать на форум!</h2>
      </div>
      <div className="flex gap-2">
        <Button variant="outline" size="sm" className="hidden md:flex">
          <Icon name="Search" className="mr-2 h-4 w-4" />
          Поиск
        </Button>
        <Button size="sm">
          <Icon name="LogIn" className="mr-2 h-4 w-4" />
          Войти
        </Button>
      </div>
    </header>
  );
};

export default ForumHeader;

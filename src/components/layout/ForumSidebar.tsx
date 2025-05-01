
import { 
  Sidebar, 
  SidebarContent, 
  SidebarFooter, 
  SidebarGroup, 
  SidebarGroupContent, 
  SidebarGroupLabel, 
  SidebarHeader, 
  SidebarMenu, 
  SidebarMenuItem, 
  SidebarMenuButton 
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";

const ForumSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2">
          <img src="/logo-b.svg" alt="Логотип" className="h-8 w-8" />
          <h1 className="text-xl font-bold">РП Форум</h1>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Навигация</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton isActive tooltip="Главная страница">
                  <Icon name="Home" />
                  <span>Главная</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Форумы">
                  <Icon name="Layout" />
                  <span>Форумы</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Личные сообщения">
                  <Icon name="MessageSquare" />
                  <span>Сообщения</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <SidebarGroup>
          <SidebarGroupLabel>Категории</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Новости проекта">
                  <Icon name="Bell" />
                  <span>Новости</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Игровые события">
                  <Icon name="CalendarDays" />
                  <span>События</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Ролевые отыгрыши">
                  <Icon name="Users" />
                  <span>Отыгрыши</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="flex items-center gap-2 p-4">
          <Avatar>
            <AvatarImage src="https://images.unsplash.com/photo-1598207951491-8b770b34c7d3?w=150&h=150&fit=crop&crop=faces" />
            <AvatarFallback>ГГ</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="font-medium">Гость</span>
            <span className="text-xs text-gray-400">Войти</span>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default ForumSidebar;

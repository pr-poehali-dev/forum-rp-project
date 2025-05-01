
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Sidebar, 
  SidebarContent, 
  SidebarFooter, 
  SidebarGroup, 
  SidebarGroupContent, 
  SidebarGroupLabel, 
  SidebarHeader, 
  SidebarInset, 
  SidebarMenu, 
  SidebarMenuItem, 
  SidebarMenuButton, 
  SidebarProvider, 
  SidebarTrigger 
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const [activeTab, setActiveTab] = useState("latest");

  return (
    <SidebarProvider>
      <div className="flex h-screen bg-zinc-900 text-white overflow-hidden">
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
        
        <SidebarInset className="p-0 flex flex-col">
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
          
          <ScrollArea className="flex-1">
            <main className="max-w-6xl mx-auto p-4">
              <div className="bg-gradient-to-r from-purple-900 to-indigo-800 rounded-lg p-6 mb-8 shadow-xl">
                <h1 className="text-3xl font-bold mb-2">Мир твоего героя</h1>
                <p className="text-gray-200 mb-4">Добро пожаловать на форум ролевой игры! Создай своего персонажа и начни увлекательное путешествие.</p>
                <div className="flex gap-2">
                  <Button>Регистрация</Button>
                  <Button variant="outline">Правила</Button>
                </div>
              </div>
              
              <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full mb-6">
                <div className="flex justify-between items-center mb-4">
                  <TabsList>
                    <TabsTrigger value="latest">Последние темы</TabsTrigger>
                    <TabsTrigger value="popular">Популярные</TabsTrigger>
                    <TabsTrigger value="events">События</TabsTrigger>
                  </TabsList>
                  <Button variant="outline" size="sm">
                    <Icon name="Plus" className="mr-2 h-4 w-4" />
                    Новая тема
                  </Button>
                </div>
                
                <TabsContent value="latest" className="space-y-4">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <TopicCard 
                      key={i}
                      title={["Новый сюжетный поворот", "Знакомство персонажей", "Вопрос по игровой механике"][i]}
                      author={["Мастер Игры", "Рыцарь123", "Новичок"][i]}
                      date="25 мин назад"
                      replies={i * 5 + 3}
                      views={i * 20 + 30}
                      tags={[
                        ["важное", "сюжет"], 
                        ["отыгрыш", "знакомство"], 
                        ["вопрос", "механика"]
                      ][i]}
                    />
                  ))}
                </TabsContent>
                
                <TabsContent value="popular" className="space-y-4">
                  <TopicCard 
                    title="Начало великой битвы"
                    author="Мастер Игры"
                    date="Вчера"
                    replies={42}
                    views={156}
                    tags={["событие", "сражение"]}
                    pinned
                  />
                </TabsContent>
                
                <TabsContent value="events" className="space-y-4">
                  <TopicCard 
                    title="Турнир Трёх Королевств"
                    author="Мастер Игры"
                    date="3 дня назад"
                    replies={17}
                    views={89}
                    tags={["событие", "турнир"]}
                  />
                </TabsContent>
              </Tabs>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card className="bg-zinc-800 border-zinc-700">
                  <CardHeader>
                    <CardTitle>Статистика</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex justify-between">
                        <span>Пользователей:</span>
                        <span>1,240</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Тем:</span>
                        <span>867</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Сообщений:</span>
                        <span>12,543</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="bg-zinc-800 border-zinc-700">
                  <CardHeader>
                    <CardTitle>Новые пользователи</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Avatar key={i}>
                          <AvatarImage src={`https://images.unsplash.com/photo-${1590000000000 + i * 1000}?w=32&h=32&fit=crop&crop=faces`} />
                          <AvatarFallback>U{i}</AvatarFallback>
                        </Avatar>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-zinc-800 border-zinc-700">
                  <CardHeader>
                    <CardTitle>Онлайн сейчас</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                      <span>24 пользователя</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </main>
          </ScrollArea>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

interface TopicCardProps {
  title: string;
  author: string;
  date: string;
  replies: number;
  views: number;
  tags: string[];
  pinned?: boolean;
}

const TopicCard = ({ title, author, date, replies, views, tags, pinned }: TopicCardProps) => {
  return (
    <Card className="bg-zinc-800 border-zinc-700 hover:border-purple-600 transition-colors">
      <CardHeader className="pb-2">
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <Link to="/" className="text-xl font-semibold hover:text-purple-400 transition-colors">{title}</Link>
            {pinned && <Badge variant="outline" className="bg-amber-900/20 text-amber-400 border-amber-600">Закреплено</Badge>}
          </div>
          <div className="flex gap-1 flex-wrap">
            {tags.map((tag, i) => (
              <Badge key={i} variant="secondary" className="bg-zinc-700">{tag}</Badge>
            ))}
          </div>
        </div>
        <CardDescription className="text-gray-400">
          Автор: {author} • {date}
        </CardDescription>
      </CardHeader>
      <CardFooter className="pt-2 text-sm text-gray-400 flex gap-4">
        <div className="flex items-center gap-1">
          <Icon name="MessageSquare" size={16} />
          <span>{replies} ответов</span>
        </div>
        <div className="flex items-center gap-1">
          <Icon name="Eye" size={16} />
          <span>{views} просмотров</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Index;

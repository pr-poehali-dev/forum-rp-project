
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import TopicCard from "@/components/TopicCard";

const TopicTabs = () => {
  const [activeTab, setActiveTab] = useState("latest");

  return (
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
  );
};

export default TopicTabs;

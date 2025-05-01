
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ForumStats = () => {
  return (
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
  );
};

export default ForumStats;

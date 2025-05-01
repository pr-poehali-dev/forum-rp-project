
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

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

export default TopicCard;

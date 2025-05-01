import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-900 text-white p-4">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-8">Страница не найдена</p>
      <Button 
        onClick={() => navigate('/')}
        className="bg-primary hover:bg-primary/90"
      >
        Вернуться на главную
      </Button>
    </div>
  );
};

export default NotFound;
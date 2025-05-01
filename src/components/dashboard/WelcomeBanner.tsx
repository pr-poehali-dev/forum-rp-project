
import { Button } from "@/components/ui/button";

const WelcomeBanner = () => {
  return (
    <div className="bg-gradient-to-r from-purple-900 to-indigo-800 rounded-lg p-6 mb-8 shadow-xl">
      <h1 className="text-3xl font-bold mb-2">Мир твоего героя</h1>
      <p className="text-gray-200 mb-4">Добро пожаловать на форум ролевой игры! Создай своего персонажа и начни увлекательное путешествие.</p>
      <div className="flex gap-2">
        <Button>Регистрация</Button>
        <Button variant="outline">Правила</Button>
      </div>
    </div>
  );
};

export default WelcomeBanner;

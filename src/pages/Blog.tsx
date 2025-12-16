import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Blog() {
  const posts = [
    {
      category: 'Аналитика',
      title: '10 метрик, которые определяют успех на Wildberries',
      excerpt: 'Узнайте, какие показатели действительно влияют на продажи и как их отслеживать',
      date: '15 декабря 2025',
      readTime: '8 мин',
      image: '📊'
    },
    {
      category: 'Кейсы',
      title: 'Как мы увеличили конверсию карточки на 67%',
      excerpt: 'Реальный кейс оптимизации товарной карточки бытовой техники',
      date: '12 декабря 2025',
      readTime: '12 мин',
      image: '🚀'
    },
    {
      category: 'Руководства',
      title: 'Полный чек-лист оптимизации карточки товара',
      excerpt: 'Пошаговое руководство по улучшению каждого элемента карточки',
      date: '8 декабря 2025',
      readTime: '15 мин',
      image: '✅'
    },
    {
      category: 'Тренды',
      title: 'Тренды маркетплейсов 2025: что изменилось',
      excerpt: 'Анализ главных изменений в алгоритмах Wildberries и Ozon',
      date: '5 декабря 2025',
      readTime: '10 мин',
      image: '📈'
    },
    {
      category: 'Инструменты',
      title: 'ИИ в аналитике маркетплейсов: новая эра',
      excerpt: 'Как искусственный интеллект меняет подход к оптимизации продаж',
      date: '1 декабря 2025',
      readTime: '7 мин',
      image: '🤖'
    },
    {
      category: 'Советы',
      title: 'Психология покупателя: что влияет на решение',
      excerpt: 'Исследование факторов, которые заставляют покупателя нажать "Купить"',
      date: '28 ноября 2025',
      readTime: '9 мин',
      image: '🧠'
    }
  ];

  return (
    <div className="min-h-screen py-12 bg-background">
      <div className="container mx-auto px-6 max-w-6xl space-y-12">
        <div className="text-center space-y-4 animate-fade-in">
          <h1 className="text-4xl font-bold text-foreground">Блог</h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Экспертные статьи, кейсы и руководства по аналитике маркетплейсов
          </p>
        </div>

        <Card className="border-2 overflow-hidden bg-card hover-scale transition-all">
          <CardContent className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <Badge className="bg-foreground text-background">Рекомендуем</Badge>
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-foreground">
                    Как ИИ помогает увеличивать продажи на маркетплейсах
                  </h2>
                  <p className="text-lg text-foreground/70">
                    Подробный разбор технологий машинного обучения и их применения 
                    для анализа товарных карточек. Практические примеры и результаты.
                  </p>
                </div>
                <div className="flex items-center gap-4 text-sm text-foreground/60">
                  <div className="flex items-center gap-2">
                    <span>📅</span>
                    <span>15 декабря 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>⏱️</span>
                    <span>10 мин чтения</span>
                  </div>
                </div>
              </div>
              <div className="text-9xl text-center">🎯</div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post, index) => (
            <Card 
              key={index} 
              className="border-2 hover:border-foreground transition-all hover-scale cursor-pointer group bg-card"
            >
              <CardHeader className="space-y-4">
                <div className="text-6xl">{post.image}</div>
                <div className="space-y-3">
                  <Badge variant="secondary" className="text-xs border-2">
                    {post.category}
                  </Badge>
                  <CardTitle className="text-xl group-hover:text-foreground/70 transition-colors text-foreground">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-base text-foreground/70">
                    {post.excerpt}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm text-foreground/60">
                  <div className="flex items-center gap-1">
                    <span>📅</span>
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>⏱️</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-foreground border-2 border-foreground text-background">
          <CardContent className="p-12 text-center space-y-6">
            <div className="space-y-3">
              <h3 className="text-3xl font-bold">Подписка на новости</h3>
              <p className="text-lg text-background/80 max-w-xl mx-auto">
                Получайте свежие статьи, кейсы и эксклюзивные материалы 
                прямо на почту раз в неделю
              </p>
            </div>
            <div className="flex gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Ваш email"
                className="flex-1 px-4 py-3 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-background border-2"
              />
              <button className="px-6 py-3 bg-background text-foreground rounded-lg font-medium hover:bg-background/90 transition-colors">
                Подписаться
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Index() {
  const features = [
    {
      icon: 'TrendingUp',
      title: 'Анализ конверсии',
      description: 'Глубокий анализ воронки продаж и точек роста'
    },
    {
      icon: 'Eye',
      title: 'Метрики CTR',
      description: 'Отслеживание кликабельности карточек товаров'
    },
    {
      icon: 'Clock',
      title: 'Время на странице',
      description: 'Анализ вовлеченности покупателей'
    },
    {
      icon: 'Lightbulb',
      title: 'Умные советы',
      description: 'ИИ рекомендации для роста продаж'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <h1 className="text-6xl font-bold text-foreground leading-tight">
            Аналитика маркетплейсов
            <span className="block mt-2">нового поколения</span>
          </h1>
          
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            ИИ анализирует ваши карточки товаров и дает точные рекомендации 
            для роста конверсии и увеличения продаж
          </p>
          
          <div className="flex items-center justify-center gap-4 pt-4">
            <Link to="/analyzer">
              <Button size="lg" className="text-base px-8 hover-scale">
                Попробовать бесплатно
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-base px-8 hover-scale border-2">
              Посмотреть демо
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-card py-16 border-y border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center space-y-2">
              <div className="text-5xl font-bold text-foreground">+43%</div>
              <div className="text-foreground/60">рост конверсии</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-5xl font-bold text-foreground">2.8x</div>
              <div className="text-foreground/60">увеличение CTR</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-5xl font-bold text-foreground">15 мин</div>
              <div className="text-foreground/60">до первых результатов</div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-24">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-foreground">
              Все инструменты в одном месте
            </h2>
            <p className="text-lg text-foreground/70">
              Комплексная аналитика для максимального результата
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="border-2 hover:border-foreground transition-all duration-300 hover-scale bg-card"
              >
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 bg-foreground rounded-lg flex items-center justify-center">
                    <Icon name={feature.icon} size={24} className="text-background" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-foreground/70">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-foreground py-20 border-y border-foreground">
        <div className="container mx-auto px-6 text-center space-y-6">
          <h2 className="text-4xl font-bold text-background">
            Готовы увеличить продажи?
          </h2>
          <p className="text-xl text-background/80 max-w-2xl mx-auto">
            Начните анализировать ваши товары прямо сейчас
          </p>
          <Link to="/analyzer">
            <Button size="lg" variant="secondary" className="text-base px-8 hover-scale">
              Начать анализ
              <Icon name="Sparkles" size={20} className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

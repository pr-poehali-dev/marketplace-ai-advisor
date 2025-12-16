import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Analyzer() {
  const [analyzing, setAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleAnalyze = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      setShowResults(true);
    }, 2000);
  };

  const metrics = [
    { label: 'Конверсия', value: 3.2, target: 5.5, unit: '%' },
    { label: 'CTR', value: 4.8, target: 7.2, unit: '%' },
    { label: 'Время на странице', value: 45, target: 90, unit: 'сек' },
  ];

  const recommendations = [
    {
      priority: 'high',
      icon: 'Image',
      title: 'Улучшите главное фото',
      description: 'Товар занимает только 45% кадра. Рекомендуем увеличить до 75-85%',
      impact: '+1.8% к CTR'
    },
    {
      priority: 'high',
      icon: 'Type',
      title: 'Оптимизируйте заголовок',
      description: 'Добавьте ключевые характеристики в первые 50 символов',
      impact: '+2.1% к конверсии'
    },
    {
      priority: 'medium',
      icon: 'DollarSign',
      title: 'Пересмотрите цену',
      description: 'Ваша цена на 12% выше средней по категории',
      impact: '+0.9% к конверсии'
    },
    {
      priority: 'medium',
      icon: 'Star',
      title: 'Соберите больше отзывов',
      description: 'У конкурентов в среднем 47 отзывов, у вас — 12',
      impact: '+1.2% к доверию'
    },
  ];

  return (
    <div className="min-h-screen py-12 bg-background">
      <div className="container mx-auto px-6 max-w-6xl space-y-8">
        <div className="text-center space-y-4 animate-fade-in">
          <h1 className="text-4xl font-bold text-foreground">Анализатор товаров</h1>
          <p className="text-lg text-foreground/70">
            Вставьте ссылку на товар для глубокого анализа
          </p>
        </div>

        <Card className="border-2 bg-card">
          <CardContent className="p-8">
            <div className="flex gap-4">
              <Input 
                placeholder="https://wildberries.ru/catalog/..." 
                className="flex-1 text-base border-2"
                defaultValue="https://wildberries.ru/catalog/123456789/detail.aspx"
              />
              <Button 
                size="lg" 
                onClick={handleAnalyze}
                disabled={analyzing}
                className="px-8"
              >
                {analyzing ? (
                  <>
                    <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                    Анализирую
                  </>
                ) : (
                  <>
                    <Icon name="Search" size={20} className="mr-2" />
                    Анализировать
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        {showResults && (
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Ключевые метрики</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {metrics.map((metric, index) => (
                  <Card key={index} className="border-2 bg-card">
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-foreground/70">{metric.label}</span>
                        <Badge variant="outline" className="text-xs border-2">
                          Цель: {metric.target}{metric.unit}
                        </Badge>
                      </div>
                      
                      <div className="text-4xl font-bold text-foreground">
                        {metric.value}{metric.unit}
                      </div>
                      
                      <div className="space-y-2">
                        <Progress 
                          value={(metric.value / metric.target) * 100} 
                          className="h-2"
                        />
                        <div className="text-xs text-foreground/60">
                          {Math.round((metric.value / metric.target) * 100)}% от целевого значения
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-2xl font-bold text-foreground">Рекомендации ИИ</h2>
                <Badge className="bg-foreground text-background border-0">
                  <Icon name="Sparkles" size={14} className="mr-1" />
                  Powered by AI
                </Badge>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {recommendations.map((rec, index) => (
                  <Card 
                    key={index} 
                    className="border-l-4 border-2 transition-all hover:shadow-lg bg-card border-l-foreground"
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-foreground rounded-lg flex items-center justify-center">
                            <Icon 
                              name={rec.icon} 
                              size={20} 
                              className="text-background"
                            />
                          </div>
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <CardTitle className="text-lg text-foreground">{rec.title}</CardTitle>
                              <Badge 
                                variant="outline"
                                className="text-xs border-2"
                              >
                                {rec.priority === 'high' ? 'Высокий' : 'Средний'} приоритет
                              </Badge>
                            </div>
                            <CardDescription className="text-base text-foreground/70">
                              {rec.description}
                            </CardDescription>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-semibold text-foreground">
                            {rec.impact}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="bg-foreground border-2 border-foreground text-background">
              <CardContent className="p-8 text-center space-y-4">
                <h3 className="text-2xl font-bold">Готовы внедрить изменения?</h3>
                <p className="text-background/80">
                  Получите детальный отчет с пошаговым планом действий
                </p>
                <Button size="lg" variant="secondary" className="hover-scale">
                  Скачать полный отчет
                  <Icon name="Download" size={20} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}

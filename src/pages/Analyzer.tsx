import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface AnalysisStage {
  id: number;
  title: string;
  description: string;
  duration: number;
}

export default function Analyzer() {
  const [analyzing, setAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [currentStage, setCurrentStage] = useState(0);
  const [completedStages, setCompletedStages] = useState<number[]>([]);

  const analysisStages: AnalysisStage[] = [
    {
      id: 1,
      title: 'Загружаю данные товара',
      description: 'Получаю информацию о карточке, фото и характеристиках',
      duration: 800
    },
    {
      id: 2,
      title: 'Анализирую визуальный контент',
      description: 'ИИ оценивает качество и композицию фотографий',
      duration: 1200
    },
    {
      id: 3,
      title: 'Сравниваю с конкурентами',
      description: 'Изучаю 50+ похожих товаров в категории',
      duration: 1000
    },
    {
      id: 4,
      title: 'Проверяю SEO-оптимизацию',
      description: 'Анализирую заголовок, описание и ключевые слова',
      duration: 900
    },
    {
      id: 5,
      title: 'Формирую рекомендации',
      description: 'ИИ составляет персональный план улучшений',
      duration: 1100
    }
  ];

  const handleAnalyze = async () => {
    setAnalyzing(true);
    setShowResults(false);
    setCurrentStage(0);
    setCompletedStages([]);

    for (let i = 0; i < analysisStages.length; i++) {
      setCurrentStage(i);
      await new Promise(resolve => setTimeout(resolve, analysisStages[i].duration));
      setCompletedStages(prev => [...prev, i]);
    }

    setAnalyzing(false);
    setShowResults(true);
    setCurrentStage(0);
    setCompletedStages([]);
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
      impact: '+1.8% к CTR',
      insights: [
        { label: 'Средний показатель в категории', value: '78% площади кадра' },
        { label: 'Топ-10 продавцов используют', value: '75-85% площади' },
        { label: 'Исследование Nielsen', value: 'Увеличение на 30% → +12% CTR' }
      ]
    },
    {
      priority: 'high',
      icon: 'Type',
      title: 'Оптимизируйте заголовок',
      description: 'Добавьте ключевые характеристики в первые 50 символов',
      impact: '+2.1% к конверсии',
      insights: [
        { label: 'Лучшие практики WB', value: 'Ключевые слова в начале' },
        { label: 'Анализ 1000+ карточек', value: '87% топа используют этот подход' },
        { label: 'A/B тестирование', value: 'Конверсия выше на 34%' }
      ]
    },
    {
      priority: 'medium',
      icon: 'DollarSign',
      title: 'Пересмотрите цену',
      description: 'Ваша цена на 12% выше средней по категории',
      impact: '+0.9% к конверсии',
      insights: [
        { label: 'Средняя цена в категории', value: '2,890 ₽' },
        { label: 'Оптимальный диапазон', value: '2,500 — 3,200 ₽' },
        { label: 'Психология цены', value: 'Окончание на 90 ₽ → +8% продаж' }
      ]
    },
    {
      priority: 'medium',
      icon: 'Star',
      title: 'Соберите больше отзывов',
      description: 'У конкурентов в среднем 47 отзывов, у вас — 12',
      impact: '+1.2% к доверию',
      insights: [
        { label: 'Минимум для доверия', value: '25+ отзывов' },
        { label: 'Топ-продавцы имеют', value: '50+ отзывов' },
        { label: 'BrightLocal исследование', value: '91% читают перед покупкой' }
      ]
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

        {analyzing && (
          <Card className="border-2 bg-card animate-fade-in">
            <CardContent className="p-8 space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-foreground rounded-full flex items-center justify-center">
                  <Icon name="Brain" size={20} className="text-background animate-pulse" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">Нейросеть анализирует товар</h3>
                  <p className="text-sm text-foreground/60">Это займет около 5 секунд</p>
                </div>
              </div>

              <div className="space-y-4">
                {analysisStages.map((stage, index) => {
                  const isActive = currentStage === index;
                  const isCompleted = completedStages.includes(index);
                  
                  return (
                    <div 
                      key={stage.id}
                      className={`flex items-start gap-4 p-4 rounded-lg border-2 transition-all ${
                        isActive ? 'bg-foreground/5 border-foreground' : 
                        isCompleted ? 'bg-foreground/5 border-foreground/20' : 
                        'border-transparent'
                      }`}
                    >
                      <div className="flex-shrink-0 mt-1">
                        {isCompleted ? (
                          <div className="w-6 h-6 bg-foreground rounded-full flex items-center justify-center">
                            <Icon name="Check" size={16} className="text-background" />
                          </div>
                        ) : isActive ? (
                          <div className="w-6 h-6 bg-foreground rounded-full flex items-center justify-center">
                            <Icon name="Loader2" size={16} className="text-background animate-spin" />
                          </div>
                        ) : (
                          <div className="w-6 h-6 bg-foreground/20 rounded-full" />
                        )}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h4 className={`font-semibold ${
                          isActive || isCompleted ? 'text-foreground' : 'text-foreground/40'
                        }`}>
                          {stage.title}
                        </h4>
                        <p className={`text-sm mt-1 ${
                          isActive || isCompleted ? 'text-foreground/70' : 'text-foreground/30'
                        }`}>
                          {stage.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <Progress 
                value={(completedStages.length / analysisStages.length) * 100} 
                className="h-2"
              />
            </CardContent>
          </Card>
        )}

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

              <div className="grid grid-cols-1 gap-6">
                {recommendations.map((rec, index) => (
                  <Card 
                    key={index} 
                    className="border-l-4 border-2 transition-all hover:shadow-lg bg-card border-l-foreground overflow-hidden"
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-foreground rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon 
                              name={rec.icon} 
                              size={20} 
                              className="text-background"
                            />
                          </div>
                          <div className="space-y-1 flex-1">
                            <div className="flex items-center gap-2 flex-wrap">
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
                        <div className="text-right flex-shrink-0">
                          <Badge className="bg-foreground text-background">
                            {rec.impact}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="pt-0">
                      <div className="bg-foreground/5 rounded-lg p-4 border-2 border-foreground/10">
                        <div className="flex items-center gap-2 mb-3">
                          <Icon name="Database" size={16} className="text-foreground/70" />
                          <span className="text-sm font-semibold text-foreground/70">Основано на данных:</span>
                        </div>
                        <div className="grid gap-2">
                          {rec.insights.map((insight, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <Icon name="CheckCircle2" size={16} className="text-foreground/50 flex-shrink-0 mt-0.5" />
                              <div className="flex-1">
                                <span className="text-sm text-foreground/70">{insight.label}:</span>
                                <span className="text-sm font-medium text-foreground ml-1">{insight.value}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
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
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Contacts() {
  const contactMethods = [
    {
      icon: 'Mail',
      title: 'Email',
      value: 'hello@mirro.ru',
      link: 'mailto:hello@mirro.ru'
    },
    {
      icon: 'Phone',
      title: 'Телефон',
      value: '+7 (495) 123-45-67',
      link: 'tel:+74951234567'
    },
    {
      icon: 'MessageCircle',
      title: 'Telegram',
      value: '@mirro_bot',
      link: 'https://t.me/mirro_bot'
    }
  ];

  return (
    <div className="min-h-screen py-12 bg-background">
      <div className="container mx-auto px-6 max-w-6xl space-y-12">
        <div className="text-center space-y-4 animate-fade-in">
          <h1 className="text-4xl font-bold text-foreground">Контакты</h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Свяжитесь с нами удобным способом — ответим в течение часа
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card className="border-2 bg-card">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Отправить сообщение</CardTitle>
                <CardDescription className="text-base text-foreground/70">
                  Заполните форму и мы свяжемся с вами в ближайшее время
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Ваше имя
                    </label>
                    <Input placeholder="Иван Петров" className="border-2" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Email
                    </label>
                    <Input type="email" placeholder="ivan@example.com" className="border-2" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Телефон
                  </label>
                  <Input placeholder="+7 (___) ___-__-__" className="border-2" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Тема обращения
                  </label>
                  <Input placeholder="Вопрос по анализу товаров" className="border-2" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Сообщение
                  </label>
                  <Textarea 
                    placeholder="Расскажите подробнее о вашем вопросе..." 
                    rows={6}
                    className="border-2"
                  />
                </div>

                <Button size="lg" className="w-full hover-scale">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить сообщение
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <a 
                  key={index}
                  href={method.link}
                  className="block"
                >
                  <Card className="border-2 hover:border-foreground transition-all hover-scale cursor-pointer bg-card">
                    <CardContent className="p-6 space-y-3">
                      <div className="w-12 h-12 bg-foreground rounded-lg flex items-center justify-center">
                        <Icon name={method.icon} size={24} className="text-background" />
                      </div>
                      <div className="space-y-1">
                        <div className="text-sm font-medium text-foreground/70">
                          {method.title}
                        </div>
                        <div className="font-semibold text-foreground">
                          {method.value}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>

            <Card className="border-2 bg-card">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-foreground rounded-lg flex items-center justify-center">
                    <Icon name="Clock" size={20} className="text-background" />
                  </div>
                  <div className="font-semibold text-foreground">
                    Время работы
                  </div>
                </div>
                <div className="space-y-2 text-sm text-foreground/70">
                  <div className="flex justify-between">
                    <span>Понедельник - Пятница</span>
                    <span className="font-medium">9:00 - 19:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Суббота</span>
                    <span className="font-medium">10:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Воскресенье</span>
                    <span className="font-medium">Выходной</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 bg-card">
              <CardContent className="p-6 space-y-4">
                <div className="font-semibold text-foreground">
                  Мы в соцсетях
                </div>
                <div className="flex gap-3">
                  {['MessageCircle', 'Youtube', 'Linkedin', 'Twitter'].map((icon, index) => (
                    <a
                      key={index}
                      href="#"
                      className="w-10 h-10 bg-foreground rounded-lg flex items-center justify-center hover:bg-foreground/80 text-background transition-colors"
                    >
                      <Icon name={icon} size={20} />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="bg-card border-2">
          <CardContent className="p-12 text-center space-y-4">
            <div className="text-5xl mb-4">💬</div>
            <h3 className="text-2xl font-bold text-foreground">
              Есть вопросы?
            </h3>
            <p className="text-foreground/70 max-w-xl mx-auto">
              Загляните в наш раздел частых вопросов — возможно, 
              ответ на ваш вопрос уже там
            </p>
            <Button variant="outline" size="lg" className="hover-scale border-2">
              Перейти к FAQ
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

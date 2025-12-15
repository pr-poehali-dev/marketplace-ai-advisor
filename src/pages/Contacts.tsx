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
      value: 'hello@marketinsight.ru',
      link: 'mailto:hello@marketinsight.ru'
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
      value: '@marketinsight_bot',
      link: 'https://t.me/marketinsight_bot'
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-6 max-w-6xl space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-900">Контакты</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Свяжитесь с нами удобным способом — ответим в течение часа
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="md:col-span-2">
            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="text-2xl">Отправить сообщение</CardTitle>
                <CardDescription className="text-base">
                  Заполните форму и мы свяжемся с вами в ближайшее время
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Ваше имя
                    </label>
                    <Input placeholder="Иван Петров" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <Input type="email" placeholder="ivan@example.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Телефон
                  </label>
                  <Input placeholder="+7 (___) ___-__-__" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Тема обращения
                  </label>
                  <Input placeholder="Вопрос по анализу товаров" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Сообщение
                  </label>
                  <Textarea 
                    placeholder="Расскажите подробнее о вашем вопросе..." 
                    rows={6}
                  />
                </div>

                <Button size="lg" className="w-full hover-scale">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить сообщение
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <a 
                  key={index}
                  href={method.link}
                  className="block"
                >
                  <Card className="border-gray-200 hover:border-primary transition-all hover-scale cursor-pointer">
                    <CardContent className="p-6 space-y-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon name={method.icon} size={24} className="text-primary" />
                      </div>
                      <div className="space-y-1">
                        <div className="text-sm font-medium text-gray-600">
                          {method.title}
                        </div>
                        <div className="font-semibold text-gray-900">
                          {method.value}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>

            {/* Working Hours */}
            <Card className="border-gray-200 bg-gray-50">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Clock" size={20} className="text-primary" />
                  </div>
                  <div className="font-semibold text-gray-900">
                    Время работы
                  </div>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
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

            {/* Social Links */}
            <Card className="border-gray-200">
              <CardContent className="p-6 space-y-4">
                <div className="font-semibold text-gray-900">
                  Мы в соцсетях
                </div>
                <div className="flex gap-3">
                  {['MessageCircle', 'Youtube', 'Linkedin', 'Twitter'].map((icon, index) => (
                    <a
                      key={index}
                      href="#"
                      className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                    >
                      <Icon name={icon} size={20} />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <Card className="bg-gradient-to-br from-primary/5 to-purple-500/5 border-gray-200">
          <CardContent className="p-12 text-center space-y-4">
            <div className="text-5xl mb-4">💬</div>
            <h3 className="text-2xl font-bold text-gray-900">
              Есть вопросы?
            </h3>
            <p className="text-gray-600 max-w-xl mx-auto">
              Загляните в наш раздел частых вопросов — возможно, 
              ответ на ваш вопрос уже там
            </p>
            <Button variant="outline" size="lg" className="hover-scale">
              Перейти к FAQ
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const slides = [
  {
    id: 1,
    title: 'Технология фрезерования набором фрез',
    subtitle: 'Современные методы обработки металлов',
    icon: 'Settings',
  },
  {
    id: 2,
    title: 'Типы фрез',
    subtitle: 'Классификация и назначение',
    icon: 'Layers',
  },
  {
    id: 3,
    title: 'Технология фрезерования',
    subtitle: 'Процесс и этапы обработки',
    icon: 'Cog',
  },
  {
    id: 4,
    title: 'Преимущества метода',
    subtitle: 'Ключевые выгоды технологии',
    icon: 'TrendingUp',
  },
  {
    id: 5,
    title: 'Области применения',
    subtitle: 'Отрасли и сферы использования',
    icon: 'Factory',
  },
  {
    id: 6,
    title: 'Техника безопасности',
    subtitle: 'Правила работы с оборудованием',
    icon: 'ShieldCheck',
  },
  {
    id: 7,
    title: 'Заключение',
    subtitle: 'Перспективы развития технологии',
    icon: 'Target',
  },
];

const millingTypes = [
  {
    name: 'Концевая фреза',
    description: 'Для обработки пазов, контуров и плоскостей',
    applications: ['Пазы', 'Контуры', 'Плоскости'],
    color: 'bg-primary',
  },
  {
    name: 'Торцевая фреза',
    description: 'Для обработки плоских поверхностей большой площади',
    applications: ['Плоскости', 'Уступы', 'Фаски'],
    color: 'bg-accent',
  },
  {
    name: 'Дисковая фреза',
    description: 'Для прорезания узких канавок и пазов',
    applications: ['Канавки', 'Пазы', 'Разрезка'],
    color: 'bg-secondary',
  },
  {
    name: 'Фасонная фреза',
    description: 'Для создания сложных профилей',
    applications: ['Профили', 'Радиусы', 'Сложные формы'],
    color: 'bg-destructive',
  },
];

const advantages = [
  { icon: 'Zap', title: 'Высокая производительность', desc: 'Обработка за минимальное время' },
  { icon: 'Target', title: 'Точность', desc: 'Погрешность до 0.01 мм' },
  { icon: 'DollarSign', title: 'Экономичность', desc: 'Снижение затрат на 30%' },
  { icon: 'Layers', title: 'Универсальность', desc: 'Обработка разных материалов' },
  { icon: 'Sparkles', title: 'Качество поверхности', desc: 'Минимальная шероховатость' },
  { icon: 'Repeat', title: 'Повторяемость', desc: 'Стабильность серийного производства' },
];

const applications = [
  { icon: 'Plane', title: 'Авиация', desc: 'Детали планера и двигателей' },
  { icon: 'Car', title: 'Автомобилестроение', desc: 'Блоки двигателей, корпуса' },
  { icon: 'Cpu', title: 'Электроника', desc: 'Корпуса и радиаторы' },
  { icon: 'Building2', title: 'Строительство', desc: 'Металлоконструкции' },
  { icon: 'Ship', title: 'Судостроение', desc: 'Корпусные детали' },
  { icon: 'Factory', title: 'Приборостроение', desc: 'Точные детали' },
];

const safetyRules = [
  'Использовать защитные очки и перчатки',
  'Проверить исправность оборудования перед работой',
  'Надежно закрепить заготовку в тисках',
  'Использовать защитные экраны от стружки',
  'Не работать на станке в свободной одежде',
  'Контролировать направление вращения фрезы',
  'Применять СОЖ для охлаждения',
  'Не оставлять работающий станок без присмотра',
];

export default function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const progress = ((currentSlide + 1) / slides.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-xl font-bold text-primary">Технология фрезерования</h1>
            <span className="text-sm text-muted-foreground">
              {currentSlide + 1} / {slides.length}
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </div>

      <div className="pt-28 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="animate-fade-in">
            {currentSlide === 0 && (
              <div className="text-center space-y-8">
                <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-primary/10 mb-6 animate-scale-in">
                  <Icon name="Settings" size={64} className="text-primary" />
                </div>
                <h1 className="text-6xl font-bold text-foreground mb-4">
                  Технология фрезерования набором фрез
                </h1>
                <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
                  Современные методы обработки металлов и сложных поверхностей
                </p>
                <div className="flex gap-4 justify-center mt-12">
                  <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                    <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                    <div className="text-sm text-muted-foreground">Точность</div>
                  </Card>
                  <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                    <div className="text-4xl font-bold text-accent mb-2">300%</div>
                    <div className="text-sm text-muted-foreground">Скорость обработки</div>
                  </Card>
                  <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                    <div className="text-4xl font-bold text-secondary mb-2">50+</div>
                    <div className="text-sm text-muted-foreground">Видов материалов</div>
                  </Card>
                </div>
              </div>
            )}

            {currentSlide === 1 && (
              <div className="space-y-8">
                <div className="text-center mb-12">
                  <Icon name="Layers" size={48} className="text-primary mx-auto mb-4" />
                  <h2 className="text-5xl font-bold text-foreground mb-4">Типы фрез</h2>
                  <p className="text-xl text-muted-foreground">Классификация по назначению и конструкции</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {millingTypes.map((type, idx) => (
                    <Card
                      key={idx}
                      className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className={`w-12 h-12 rounded-lg ${type.color} mb-4 flex items-center justify-center`}>
                        <Icon name="CircleDot" size={24} className="text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{type.name}</h3>
                      <p className="text-muted-foreground mb-4">{type.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {type.applications.map((app, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground"
                          >
                            {app}
                          </span>
                        ))}
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {currentSlide === 2 && (
              <div className="space-y-8">
                <div className="text-center mb-12">
                  <Icon name="Cog" size={48} className="text-primary mx-auto mb-4" />
                  <h2 className="text-5xl font-bold text-foreground mb-4">Технология фрезерования</h2>
                  <p className="text-xl text-muted-foreground">Основные этапы процесса обработки</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { step: '01', title: 'Подготовка', items: ['Выбор фрезы', 'Закрепление заготовки', 'Настройка режимов'] },
                    { step: '02', title: 'Обработка', items: ['Черновое фрезерование', 'Чистовое фрезерование', 'Контроль размеров'] },
                    { step: '03', title: 'Завершение', items: ['Снятие заготовки', 'Контроль качества', 'Очистка станка'] },
                  ].map((stage, idx) => (
                    <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                      <div className="text-6xl font-bold text-primary/20 mb-4">{stage.step}</div>
                      <h3 className="text-2xl font-bold mb-4">{stage.title}</h3>
                      <ul className="space-y-2">
                        {stage.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Icon name="CheckCircle2" size={20} className="text-primary mt-0.5" />
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </Card>
                  ))}
                </div>
                <Card className="p-8 bg-gradient-to-r from-primary/10 to-secondary/10 border-none">
                  <div className="flex items-center gap-4 mb-4">
                    <Icon name="Lightbulb" size={32} className="text-accent" />
                    <h3 className="text-2xl font-bold">Параметры обработки</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Скорость резания</div>
                      <div className="text-2xl font-bold text-primary">50-300 м/мин</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Подача</div>
                      <div className="text-2xl font-bold text-accent">0.1-0.5 мм/зуб</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Глубина резания</div>
                      <div className="text-2xl font-bold text-secondary">1-10 мм</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Точность</div>
                      <div className="text-2xl font-bold text-primary">±0.01 мм</div>
                    </div>
                  </div>
                </Card>
              </div>
            )}

            {currentSlide === 3 && (
              <div className="space-y-8">
                <div className="text-center mb-12">
                  <Icon name="TrendingUp" size={48} className="text-primary mx-auto mb-4" />
                  <h2 className="text-5xl font-bold text-foreground mb-4">Преимущества метода</h2>
                  <p className="text-xl text-muted-foreground">Почему фрезерование — это оптимальный выбор</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {advantages.map((adv, idx) => (
                    <Card
                      key={idx}
                      className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                    >
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <Icon name={adv.icon} size={32} className="text-primary" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{adv.title}</h3>
                      <p className="text-muted-foreground">{adv.desc}</p>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {currentSlide === 4 && (
              <div className="space-y-8">
                <div className="text-center mb-12">
                  <Icon name="Factory" size={48} className="text-primary mx-auto mb-4" />
                  <h2 className="text-5xl font-bold text-foreground mb-4">Области применения</h2>
                  <p className="text-xl text-muted-foreground">Отрасли промышленности</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {applications.map((app, idx) => (
                    <Card
                      key={idx}
                      className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                        <Icon name={app.icon} size={32} className="text-accent" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{app.title}</h3>
                      <p className="text-muted-foreground">{app.desc}</p>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {currentSlide === 5 && (
              <div className="space-y-8">
                <div className="text-center mb-12">
                  <Icon name="ShieldCheck" size={48} className="text-destructive mx-auto mb-4" />
                  <h2 className="text-5xl font-bold text-foreground mb-4">Техника безопасности</h2>
                  <p className="text-xl text-muted-foreground">Правила безопасной работы на фрезерном станке</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {safetyRules.map((rule, idx) => (
                    <Card
                      key={idx}
                      className="p-6 hover:shadow-lg transition-shadow flex items-start gap-4"
                    >
                      <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-lg font-bold text-destructive">{idx + 1}</span>
                      </div>
                      <p className="text-lg pt-1">{rule}</p>
                    </Card>
                  ))}
                </div>
                <Card className="p-8 bg-destructive/5 border-destructive/20">
                  <div className="flex items-center gap-4 mb-4">
                    <Icon name="AlertTriangle" size={32} className="text-destructive" />
                    <h3 className="text-2xl font-bold text-destructive">Важно помнить!</h3>
                  </div>
                  <p className="text-lg text-muted-foreground">
                    Соблюдение правил техники безопасности — это не просто требование, а гарантия вашего здоровья
                    и жизни. При малейших сомнениях обращайтесь к инструктору или опытному специалисту.
                  </p>
                </Card>
              </div>
            )}

            {currentSlide === 6 && (
              <div className="text-center space-y-8">
                <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-secondary/10 mb-6">
                  <Icon name="Target" size={64} className="text-secondary" />
                </div>
                <h2 className="text-5xl font-bold text-foreground mb-4">Заключение</h2>
                <div className="max-w-3xl mx-auto space-y-6 text-lg text-muted-foreground">
                  <p>
                    Технология фрезерования набором фрез является одним из самых эффективных методов
                    механической обработки металлов и других материалов.
                  </p>
                  <p>
                    Высокая производительность, точность и универсальность делают этот метод незаменимым
                    в современном производстве.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                  <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5">
                    <Icon name="TrendingUp" size={32} className="text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Развитие технологий</h3>
                    <p className="text-muted-foreground">ЧПУ и автоматизация</p>
                  </Card>
                  <Card className="p-6 bg-gradient-to-br from-accent/10 to-accent/5">
                    <Icon name="Cpu" size={32} className="text-accent mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Новые материалы</h3>
                    <p className="text-muted-foreground">Композиты и сплавы</p>
                  </Card>
                  <Card className="p-6 bg-gradient-to-br from-secondary/10 to-secondary/5">
                    <Icon name="Sparkles" size={32} className="text-secondary mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Повышение качества</h3>
                    <p className="text-muted-foreground">Минимальные допуски</p>
                  </Card>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-t border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              variant="outline"
              size="lg"
              className="gap-2"
            >
              <Icon name="ChevronLeft" size={20} />
              Назад
            </Button>
            <div className="flex gap-2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    idx === currentSlide ? 'bg-primary w-8' : 'bg-muted hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>
            <Button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              size="lg"
              className="gap-2"
            >
              Далее
              <Icon name="ChevronRight" size={20} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

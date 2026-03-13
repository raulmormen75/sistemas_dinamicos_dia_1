const md = String.raw;

export const courseMeta = {
  title: 'Sistemas dinámicos aplicados a la economía',
  subtitle: 'Día 1. Bases matemáticas y económicas para entrar a sistemas dinámicos',
  description:
    'Una secuencia didáctica para construir desde cero el puente entre álgebra, cálculo básico, ecuaciones diferenciales de primer orden y estabilidad sencilla.',
  objective: md`
La finalidad del Día 1 es construir piso firme para leer funciones, despejar, derivar, integrar, encontrar equilibrios y entrar con seguridad a ecuaciones diferenciales básicas.
`,
  sequence: ['Funciones', 'Álgebra', 'Derivada', 'Equilibrio', 'EDO', 'Estabilidad'],
  footerText: 'Material creado por el Prof. Morales Mendoza Raul',
};

export const introSection = {
  id: 'presentacion',
  navLabel: 'Presentación',
  badge: 'Inicio',
  title: 'Presentación del Día 1',
  summary: md`
Este día no es de lucirse. Es de construir piso firme. Si la alumna no entiende álgebra, derivadas, equilibrio y cómo leer una tasa de cambio, después se va a perder en ecuaciones diferenciales y estabilidad.
`,
  objective: md`
Al final del Día 1, la alumna debe poder leer una función, despejar, derivar, integrar, encontrar equilibrios y resolver ecuaciones diferenciales básicas.
`,
  visualSequence: md`
Secuencia de trabajo del día: Funciones → Álgebra → Derivada → Equilibrio → EDO → Estabilidad.
`,
  focus: [
    'Comprender conceptos básicos.',
    'Recordar procedimientos algebraicos.',
    'Entender derivadas como tasas de cambio.',
    'Relacionar matemáticas con interpretación económica.',
  ],
};

export const sections = [
  {
    id: 'bloque-1',
    navLabel: 'Bloque 1',
    badge: 'Bloque 1',
    title: 'Variables, parámetros y funciones',
    meaning: md`
Una variable es algo que cambia. Un parámetro es algo que se mantiene fijo dentro del modelo. Una función muestra cómo una variable depende de otra.
`,
    economyUse: md`
En economía casi todo se expresa como relaciones entre variables. Por ejemplo:

$$
Q = 100 - 2P
$$

Aquí:

- $Q$ es la cantidad.
- $P$ es el precio.
- $100$ y $2$ son parámetros del modelo.
`,
    prerequisites: ['suma', 'resta', 'multiplicación', 'lectura de letras en expresiones'],
    explanationParts: [
      {
        title: 'Sustitución ordenada',
        content: md`
Si la función es:

$$
Q = 100 - 2P
$$

y el precio vale:

$$
P = 20
$$

entonces se sustituye:

$$
Q = 100 - 2(20)
$$

$$
Q = 100 - 40
$$

$$
Q = 60
$$

Eso dice que cuando el precio es $20$, la cantidad es $60$.
`,
      },
    ],
    example: {
      number: 1,
      title: 'Ejemplo resuelto 1',
      statement: md`
Dada la función:

$$
Q = 80 - 4P
$$

encuentra $Q$ cuando:

$$
P = 10
$$
`,
      ask: 'Encontrar el valor de la cantidad después de sustituir el precio.',
      steps: [
        md`$$Q = 80 - 4(10)$$`,
        md`$$Q = 80 - 40$$`,
        md`$$Q = 40$$`,
      ],
      result: md`$$Q = 40$$`,
      interpretation: md`
Cuando el precio toma el valor $10$, la cantidad asociada en este modelo baja a $40$. La relación sigue siendo negativa: al subir el precio, baja la cantidad.
`,
      errors: [
        'Multiplicar mal $4 \\cdot 10$.',
        'Olvidar los paréntesis al sustituir.',
        'Confundir la variable con el parámetro.',
        'Pensar que $80$ también cambia.',
      ],
      visualPrompt: 'La visualización permite mover el precio sobre la recta y leer automáticamente el valor de la cantidad.',
    },
    recap: md`
Si sube $P$, en esta función baja $Q$. La relación es negativa.
`,
    visual: {
      type: 'linearRelation',
      title: 'Recta de cantidad y precio',
      summary: md`
Mueve el precio y observa cómo el punto recorre la recta. También puedes cambiar los parámetros para ver qué parte de la ecuación corresponde a un cambio de pendiente y cuál a un cambio de intercepto.
`,
      props: {
        intercept: 80,
        slope: 4,
        labelX: 'Precio',
        labelY: 'Cantidad',
        xMin: 0,
        xMax: 30,
        activeX: 10,
        allowParameterTweaks: true,
      },
    },
  },
  {
    id: 'bloque-2',
    navLabel: 'Bloque 2',
    badge: 'Bloque 2',
    title: 'Álgebra mínima necesaria',
    meaning: md`
Antes de resolver ecuaciones diferenciales, hay que dominar tres cosas: despeje, factorización y simplificación de fracciones algebraicas.
`,
    economyUse: md`
Los modelos dinámicos todo el tiempo exigen despejar una variable, simplificar expresiones y reorganizar ecuaciones para resolverlas.
`,
    prerequisites: ['igualdad', 'operaciones básicas', 'signos'],
    explanationParts: [
      {
        title: 'A. Despeje',
        content: md`
De:

$$
Q = 100 - 2P
$$

despejar $P$.

Paso 1:

$$
Q - 100 = -2P
$$

Paso 2:

$$
P = \\frac{Q-100}{-2}
$$

Paso 3, reescribiendo:

$$
P = \\frac{100-Q}{2}
$$
`,
      },
      {
        title: 'B. Factorización',
        content: md`
$$
x^2 - 9 = x^2 - 3^2 = (x-3)(x+3)
$$
`,
      },
      {
        title: 'C. Fracción algebraica',
        content: md`
$$
\\frac{x^2-9}{x-3}
$$

Sustituyendo la factorización:

$$
\\frac{(x-3)(x+3)}{x-3}=x+3,\\qquad x\\neq 3
$$
`,
      },
    ],
    example: {
      number: 2,
      title: 'Ejemplo resuelto 2',
      statement: md`
Simplifica:

$$
\\frac{x^2-16}{x-4}
$$
`,
      ask: 'Encontrar la forma simplificada y conservar la restricción del dominio.',
      steps: [
        md`$$x^2 - 16 = (x-4)(x+4)$$`,
        md`$$\\frac{(x-4)(x+4)}{x-4}=x+4,\\qquad x\\neq 4$$`,
      ],
      result: md`$$x + 4,\\qquad x\\neq 4$$`,
      interpretation: md`
La simplificación hace visible la recta subyacente, pero no borra la restricción original del denominador.
`,
      errors: [
        'Cancelar términos en vez de factores.',
        'Olvidar que $x \\neq 4$.',
        'Factorizar mal una diferencia de cuadrados.',
        'Pensar que simplificar borra la restricción original.',
      ],
      visualPrompt: 'La comparación gráfica muestra la recta simplificada y el hueco que deja la expresión original.',
    },
    recap: md`
La expresión simplificada puede verse más sencilla, pero conserva la historia de la expresión original.
`,
    visual: {
      type: 'rationalHole',
      title: 'Fracción algebraica y hueco removible',
      summary: md`
Observa cómo la función original coincide con la recta simplificada salvo en el punto donde el denominador se hace cero. Ese hueco es la restricción que no debe perderse.
`,
      props: {
        a: 4,
        label: md`$$\\frac{x^2-16}{x-4}$$`,
        interactiveA: true,
      },
    },
  },
  {
    id: 'bloque-3',
    navLabel: 'Bloque 3',
    badge: 'Bloque 3',
    title: 'Derivada y tasa de cambio',
    meaning: md`
La derivada mide qué tan rápido cambia una variable. Si una variable depende del tiempo, su derivada se escribe como:

$$
\\frac{dx}{dt}
$$
`,
    economyUse: md`
Sirve para estudiar cambio del precio, del capital, del inventario, de la deuda o de la producción.
`,
    prerequisites: ['potencia', 'producto por constante', 'interpretación de pendiente'],
    explanationParts: [
      {
        title: 'Regla de derivación paso a paso',
        content: md`
Si:

$$
q(t)=5t^2+3t-1
$$

entonces:

$$
\\frac{d}{dt}(5t^2)=10t
$$

$$
\\frac{d}{dt}(3t)=3
$$

$$
\\frac{d}{dt}(-1)=0
$$

Por tanto:

$$
\\frac{dq}{dt}=10t+3
$$
`,
      },
    ],
    example: {
      number: 3,
      title: 'Ejemplo resuelto 3',
      statement: md`
Deriva:

$$
f(t)=3t^2-8t+1
$$
`,
      ask: 'Calcular la tasa de cambio instantánea.',
      steps: [
        md`$$\\frac{d}{dt}(3t^2)=6t$$`,
        md`$$\\frac{d}{dt}(-8t)=-8$$`,
        md`$$\\frac{d}{dt}(1)=0$$`,
        md`$$\\frac{df}{dt}=6t-8$$`,
      ],
      result: md`$$\\frac{df}{dt}=6t-8$$`,
      interpretation: md`
La derivada describe la velocidad de cambio de la función. No es la función original, sino su pendiente en cada instante.
`,
      errors: [
        'Bajar mal el exponente.',
        'Dejar el exponente igual después de derivar.',
        'Derivar la constante como si cambiara.',
        'Olvidar el signo negativo.',
      ],
      visualPrompt: 'La gráfica enlaza el valor de la pendiente en la curva original con el valor de la derivada en el mismo instante.',
    },
    recap: md`
La derivada no es la variable. Es su velocidad de cambio.
`,
    visual: {
      type: 'derivative',
      title: 'Función original y derivada',
      summary: md`
Mueve el cursor sobre el tiempo para ver la pendiente de la función original y el valor correspondiente en la derivada.
`,
      props: {
        coefficients: [1, -8, 3, 0],
        xLabel: 'Tiempo',
        yLabel: 'Valor',
        xMin: -1,
        xMax: 5,
        activeX: 1.5,
      },
    },
  },
  {
    id: 'bloque-4',
    navLabel: 'Bloque 4',
    badge: 'Bloque 4',
    title: 'Equilibrio y lectura dinámica',
    meaning: md`
Un equilibrio ocurre cuando la variable deja de cambiar. Si:

$$
\\frac{dx}{dt}=f(x)
$$

entonces el equilibrio se obtiene resolviendo:

$$
f(x)=0
$$
`,
    economyUse: md`
Sirve para detectar niveles hacia donde el sistema se detiene o alrededor de los cuales se mueve.
`,
    prerequisites: ['signo positivo', 'signo negativo', 'resolución básica de ecuaciones'],
    explanationParts: [
      {
        title: 'Lectura por signos',
        content: md`
Si:

$$
\\frac{dx}{dt}=8-x
$$

entonces el equilibrio sale de:

$$
8-x=0
$$

$$
x=8
$$

Ahora se interpreta:

- si $x<8$, entonces $\\frac{dx}{dt}>0$, así que $x$ sube;
- si $x>8$, entonces $\\frac{dx}{dt}<0$, así que $x$ baja.

Entonces $x=8$ es un equilibrio estable.
`,
      },
    ],
    example: {
      number: 4,
      title: 'Ejemplo resuelto 4',
      statement: md`
Encuentra el equilibrio de:

$$
\\frac{dx}{dt}=12-3x
$$
`,
      ask: 'Encontrar el equilibrio y revisar su estabilidad por signos.',
      steps: [
        md`$$12-3x=0$$`,
        md`$$3x=12$$`,
        md`$$x=4$$`,
        md`Si $x<4$, entonces $\\frac{dx}{dt}>0$.`,
        md`Si $x>4$, entonces $\\frac{dx}{dt}<0$.`,
      ],
      result: md`
$$
x^*=4
$$

y es estable.
`,
      interpretation: md`
La variable se acerca al valor $4$ tanto si parte por debajo como si parte por arriba.
`,
      errors: [
        'Igualar $x$ a cero en vez de igualar la derivada a cero.',
        'Olvidar revisar signos a ambos lados del equilibrio.',
        'Pensar que equilibrio significa «sin valor».',
        'No distinguir entre valor de la variable y tasa de cambio.',
      ],
      visualPrompt: 'La gráfica de $f(x)$, la línea de fase y las trayectorias temporales muestran por qué el equilibrio es estable.',
    },
    recap: md`
Equilibrio no significa inmovilidad absoluta del modelo completo. Significa que esa variable ya no cambia en ese punto.
`,
    visual: {
      type: 'linearAutonomous',
      title: 'Equilibrio estable en un modelo autónomo',
      summary: md`
Explora la ecuación $\\frac{dx}{dt}=12-3x$. En la gráfica de $f(x)$ se ve dónde cambia de signo la tasa de cambio. En trayectorias se observa cómo distintos valores iniciales convergen al mismo equilibrio.
`,
      props: {
        a: 12,
        b: 3,
        label: 'x',
        variableName: 'Variable',
        activeInitial: 1,
        initials: [0, 1, 2.5, 6, 8],
        xMin: -1,
        xMax: 8,
        tMax: 4,
      },
    },
  },
  {
    id: 'bloque-5',
    navLabel: 'Bloque 5',
    badge: 'Bloque 5',
    title: 'Ecuaciones diferenciales separables',
    meaning: md`
Son ecuaciones que se pueden ordenar para dejar de un lado todo lo de $y$ y del otro todo lo de $t$.
`,
    economyUse: md`
Aparecen en procesos de crecimiento, ajuste simple, acumulación y difusión.
`,
    prerequisites: ['derivada', 'fracciones', 'logaritmo', 'separación de términos'],
    explanationParts: [
      {
        title: 'Separación de variables',
        content: md`
Resolver:

$$
\\frac{dy}{dt}=2y
$$

Paso 1:

$$
\\frac{1}{y}\\,dy=2\\,dt
$$

Paso 2:

$$
\\int \\frac{1}{y}\\,dy=\\int 2\\,dt
$$

Paso 3:

$$
\\ln|y|=2t+C
$$

Paso 4:

$$
y=Ce^{2t}
$$
`,
      },
    ],
    example: {
      number: 5,
      title: 'Ejemplo resuelto 5',
      statement: md`
Resuelve:

$$
\\frac{dy}{dt}=3t
$$
`,
      ask: 'Integrar correctamente para obtener la familia de soluciones.',
      steps: [
        md`$$dy=3t\\,dt$$`,
        md`$$\\int dy=\\int 3t\\,dt$$`,
        md`$$y=\\frac{3}{2}t^2+C$$`,
      ],
      result: md`$$y=\\frac{3}{2}t^2+C$$`,
      interpretation: md`
La solución reúne una familia de parábolas desplazadas verticalmente por la constante $C$.
`,
      errors: [
        'Separar mal variables.',
        'Olvidar la constante $C$.',
        'Integrar $3t$ como si diera $3t$.',
        'Pensar que toda ecuación con derivada es separable.',
      ],
      visualPrompt: 'El campo de pendientes y la familia de curvas permiten ver que cada valor de $C$ genera una trayectoria distinta.',
    },
    recap: md`
Separar variables es reordenar bien. Si se ordena mal, todo se cae.
`,
    visual: {
      type: 'separable',
      title: 'Campo de pendientes y familias de soluciones',
      summary: md`
Alterna entre un crecimiento proporcional y un caso dependiente solo del tiempo para comparar cómo cambia la geometría del campo de pendientes y de las soluciones.
`,
      props: {},
    },
  },
  {
    id: 'bloque-6',
    navLabel: 'Bloque 6',
    badge: 'Bloque 6',
    title: 'Ecuación lineal de primer orden',
    meaning: md`
Es una ecuación donde aparecen la función y su derivada, ambas en primer grado.

Forma general:

$$
\\frac{dy}{dt} + P(t)y = Q(t)
$$
`,
    economyUse: md`
Sirve para modelar ajuste gradual hacia un nivel objetivo.
`,
    prerequisites: ['derivada', 'exponencial', 'multiplicación de toda la ecuación por una misma expresión'],
    explanationParts: [
      {
        title: 'Factor integrante',
        content: md`
Resolver:

$$
\\frac{dy}{dt} + y = 4
$$

Factor integrante:

$$
\\mu(t)=e^{\\int 1\\,dt}=e^t
$$

Multiplicamos:

$$
e^t \\frac{dy}{dt} + e^t y = 4e^t
$$

Eso se vuelve:

$$
\\frac{d}{dt}(e^t y)=4e^t
$$

Integramos:

$$
e^t y = 4e^t + C
$$

Despejamos:

$$
y = 4 + Ce^{-t}
$$
`,
      },
    ],
    example: {
      number: 6,
      title: 'Ejemplo resuelto 6',
      statement: md`
Resuelve:

$$
\\frac{dy}{dt} + 2y = 6
$$
`,
      ask: 'Calcular la solución general y reconocer el equilibrio.',
      steps: [
        md`Factor integrante: $$\\mu(t)=e^{2t}$$`,
        md`$$e^{2t}\\frac{dy}{dt} + 2e^{2t}y = 6e^{2t}$$`,
        md`$$\\frac{d}{dt}(e^{2t}y)=6e^{2t}$$`,
        md`$$e^{2t}y=3e^{2t}+C$$`,
        md`$$y=3+Ce^{-2t}$$`,
      ],
      result: md`$$y=3+Ce^{-2t}$$`,
      interpretation: md`
La parte $Ce^{-2t}$ se va apagando conforme pasa el tiempo. Por eso la solución se acerca al equilibrio $y=3$.
`,
      errors: [
        'Calcular mal el factor integrante.',
        'Olvidar multiplicar toda la ecuación.',
        'Integrar mal $e^{2t}$.',
        'Perder el signo del exponente al despejar.',
      ],
      visualPrompt: 'La comparación entre varias trayectorias muestra cómo todas se aproximan a la misma línea de equilibrio.',
    },
    recap: md`
La parte transitoria se apaga con el tiempo y deja visible el nivel de largo plazo.
`,
    visual: {
      type: 'linearAutonomous',
      title: 'Ajuste lineal hacia un objetivo',
      summary: md`
Aunque la ecuación se resuelve con factor integrante, la dinámica puede leerse como un ajuste hacia $y=3$. Elige entre trayectorias y campo de pendientes para seguir ese acercamiento.
`,
      props: {
        a: 6,
        b: 2,
        label: 'y',
        variableName: 'Solución',
        activeInitial: 5,
        initials: [-1, 0, 1, 3, 5],
        xMin: -2,
        xMax: 6,
        tMax: 5,
      },
    },
  },
  {
    id: 'bloque-7',
    navLabel: 'Bloque 7',
    badge: 'Bloque 7',
    title: 'Ecuación de Bernoulli',
    meaning: md`
Es una ecuación parecida a la lineal, pero aparece una potencia de $y$.

Forma:

$$
\\frac{dy}{dt} + P(t)y = Q(t)y^n,\\qquad n\\neq 0,1
$$
`,
    economyUse: md`
Sirve para modelar procesos donde hay crecimiento y también un freno dependiente del nivel de la variable.
`,
    prerequisites: ['ecuación lineal', 'potencia', 'sustitución de variable'],
    explanationParts: [
      {
        title: 'Conversión a ecuación lineal',
        content: md`
Resolver:

$$
\\frac{dy}{dt} + y = y^2
$$

Aquí:

$$
n=2
$$

Se usa:

$$
v=y^{1-n}=y^{-1}=\\frac{1}{y}
$$

Con esa sustitución, la ecuación se convierte en una lineal en $v$:

$$
\\frac{dv}{dt} - v = -1
$$

Resolviendo:

$$
v=1+Ce^t
$$

Como:

$$
v=\\frac{1}{y}
$$

entonces:

$$
y=\\frac{1}{1+Ce^t}
$$
`,
      },
    ],
    example: {
      number: 7,
      title: 'Ejemplo resuelto 7',
      statement: md`
Resolver y explicar la forma de la solución:

$$
\\frac{dy}{dt}+y=y^2
$$
`,
      ask: 'Reconocer el cambio de variable y describir la forma final de la solución.',
      steps: [
        md`$$v = y^{-1} = \\frac{1}{y}$$`,
        md`La ecuación para $v$ queda lineal: $$\\frac{dv}{dt} - v = -1$$`,
        md`$$v = 1 + Ce^t$$`,
        md`$$y = \\frac{1}{1+Ce^t}$$`,
      ],
      result: md`$$y = \\frac{1}{1+Ce^t}$$`,
      interpretation: md`
No es una solución lineal. Tiene una forma racional con exponencial y permite ver procesos con ajuste no lineal.
`,
      errors: [
        'Usar mal el exponente en el cambio de variable.',
        'Olvidar que $v=\\frac{1}{y}$.',
        'Confundir Bernoulli con lineal simple.',
        'Despejar mal al final.',
      ],
      visualPrompt: 'Las trayectorias comparan el comportamiento de Bernoulli con un ajuste lineal de referencia para mostrar que la no linealidad cambia la forma de convergencia.',
    },
    recap: md`
Bernoulli se resuelve convirtiéndola en una lineal. El truco está en la sustitución.
`,
    visual: {
      type: 'bernoulli',
      title: 'Trayectorias no lineales tipo Bernoulli',
      summary: md`
Modifica la constante de integración y compara la solución de Bernoulli con una referencia lineal para distinguir la forma racional con exponencial.
`,
      props: {
        activeC: 0.8,
      },
    },
  },
  {
    id: 'bloque-8',
    navLabel: 'Bloque 8',
    badge: 'Bloque 8',
    title: 'Estabilidad y diagrama de fase',
    meaning: md`
La estabilidad responde esta pregunta: si una trayectoria empieza cerca del equilibrio, ¿se acerca o se aleja?
`,
    economyUse: md`
Sirve para entender si un precio, inventario, capital o nivel de adopción tiende a estabilizarse o no.
`,
    prerequisites: ['equilibrio', 'signo', 'interpretación de flechas'],
    explanationParts: [
      {
        title: 'Equilibrios y signos por intervalos',
        content: md`
Si:

$$
\\frac{dx}{dt}=x(4-x)
$$

primero encontramos equilibrios:

$$
x(4-x)=0
$$

$$
x=0,\\qquad x=4
$$

Ahora revisamos signos:

- si $x<0$, entonces $\\frac{dx}{dt}<0$;
- si $0<x<4$, entonces $\\frac{dx}{dt}>0$;
- si $x>4$, entonces $\\frac{dx}{dt}<0$.

Conclusión:

- $x=0$ es inestable;
- $x=4$ es estable.
`,
      },
    ],
    example: {
      number: 8,
      title: 'Ejemplo resuelto 8',
      statement: md`
Analiza la estabilidad de:

$$
\\frac{dx}{dt}=x(5-x)
$$
`,
      ask: 'Encontrar equilibrios y clasificar su estabilidad a partir de los signos.',
      steps: [
        md`$$x(5-x)=0 \\Rightarrow x=0,\\; x=5$$`,
        md`Si $x<0$, entonces $\\frac{dx}{dt}<0$.`,
        md`Si $0<x<5$, entonces $\\frac{dx}{dt}>0$.`,
        md`Si $x>5$, entonces $\\frac{dx}{dt}<0$.`,
      ],
      result: md`
- $x=0$ es inestable.
- $x=5$ es estable.
`,
      interpretation: md`
Las flechas del diagrama de fase muestran que las trayectorias se alejan de $0$ y se acercan a $5$.
`,
      errors: [
        'No revisar todos los intervalos.',
        'Concluir estabilidad sin mirar flechas.',
        'Creer que todos los equilibrios son estables.',
        'Confundir signo de la derivada con signo de la variable.',
      ],
      visualPrompt: 'La versión 3D opcional muestra cómo cambia la trayectoria según la condición inicial.',
    },
    recap: md`
La estabilidad se ve mejor con flechas que con puro texto.
`,
    visual: {
      type: 'logistic',
      title: 'Diagrama de fase y trayectorias logísticas',
      summary: md`
Explora $\\frac{dx}{dt}=x(5-x)$ mediante la gráfica de $f(x)$, la línea de fase, trayectorias temporales y una superficie 3D opcional de $x(t;x_0)$.
`,
      props: {
        carryingCapacity: 5,
        activeInitial: 1.3,
        xMin: -1.5,
        xMax: 7.5,
        tMax: 6,
      },
    },
  },
];

export const exerciseGroups = [
  {
    id: 'ejercicios-matematicos',
    navLabel: 'Ejercicios matemáticos',
    badge: 'Práctica matemática',
    title: 'Ejercicios matemáticos',
    intro: md`
Primero van los ejercicios matemáticos. El objetivo es practicar los procedimientos que luego sostienen la interpretación dinámica y económica.
`,
    exercises: [
      {
        id: 'ejercicio-1',
        number: 1,
        type: 'Matemático',
        title: 'Simplificación con restricción',
        statement: md`
Simplifica:

$$
\\frac{x^2-25}{x-5}
$$
`,
        ask: 'Obtener la expresión simplificada y señalar la restricción.',
        steps: [
          md`$$x^2-25=(x-5)(x+5)$$`,
          md`$$\\frac{(x-5)(x+5)}{x-5}=x+5,\\qquad x\\neq 5$$`,
        ],
        result: md`$$x+5,\\qquad x\\neq 5$$`,
        interpretation: md`
La simplificación es correcta, pero no puede olvidarse la restricción original.
`,
        errors: [
          'Cancelar sin factorizar.',
          'Olvidar la restricción.',
          'Confundir diferencia de cuadrados con trinomio.',
        ],
        visualHint: 'Compara la función original y la simplificada con hueco en $x=5$.',
        visual: {
          type: 'rationalHole',
          title: 'Comparación entre función original y simplificada',
          summary: md`
La recta coincide con la función salvo en el punto removible. Ese hueco recuerda por qué la restricción debe escribirse explícitamente.
`,
          props: {
            a: 5,
            label: md`$$\\frac{x^2-25}{x-5}$$`,
            interactiveA: false,
          },
        },
      },
      {
        id: 'ejercicio-2',
        number: 2,
        type: 'Matemático',
        title: 'Derivación polinomial',
        statement: md`
Deriva:

$$
f(t)=4t^3-2t+7
$$
`,
        ask: "Calcular $\\frac{df}{dt}$.",
        steps: [
          md`$$\\frac{d}{dt}(4t^3)=12t^2$$`,
          md`$$\\frac{d}{dt}(-2t)=-2$$`,
          md`$$\\frac{d}{dt}(7)=0$$`,
          md`$$\\frac{df}{dt}=12t^2-2$$`,
        ],
        result: md`$$\\frac{df}{dt}=12t^2-2$$`,
        interpretation: md`
La velocidad de cambio depende del tiempo y no es constante.
`,
        errors: [
          'Derivar $7$ como si cambiara.',
          'Bajar mal el exponente.',
          'Perder el signo negativo.',
        ],
        visualHint: 'La gráfica sincroniza la función y su derivada para ver cómo cambia la pendiente.',
        visual: {
          type: 'derivative',
          title: 'Derivada y pendiente instantánea',
          summary: md`
Usa el cursor para observar dónde la función crece más rápido y dónde la derivada cambia de signo.
`,
          props: {
            coefficients: [7, -2, 0, 4],
            xLabel: 'Tiempo',
            yLabel: 'Valor',
            xMin: -2,
            xMax: 3,
            activeX: 0.5,
          },
        },
      },
      {
        id: 'ejercicio-3',
        number: 3,
        type: 'Matemático',
        title: 'Trayectoria particular en crecimiento exponencial',
        statement: md`
Resuelve:

$$
\\frac{dy}{dt}=5y,\\qquad y(0)=3
$$
`,
        ask: 'Encontrar la trayectoria particular.',
        steps: [
          md`$$\\frac{1}{y}\\,dy=5\\,dt$$`,
          md`$$\\int \\frac{1}{y}\\,dy=\\int 5\\,dt$$`,
          md`$$\\ln|y|=5t+C$$`,
          md`$$y=Ce^{5t}$$`,
          md`Usando $y(0)=3$: $$3=C$$`,
        ],
        result: md`$$y=3e^{5t}$$`,
        interpretation: md`
La variable crece exponencialmente desde $3$.
`,
        errors: [
          'Olvidar usar la condición inicial.',
          'Perder la constante.',
          'Despejar mal después del logaritmo.',
        ],
        visualHint: 'El campo de pendientes y la trayectoria destacada muestran cómo el crecimiento se acelera.',
        visual: {
          type: 'growthField',
          title: 'Crecimiento exponencial desde una condición inicial',
          summary: md`
El campo de pendientes se hace más inclinado conforme sube $y$. La solución particular arranca en $3$ y se separa cada vez más rápido del eje horizontal.
`,
          props: {
            rate: 5,
            initial: 3,
            tMax: 1.2,
            yMax: 18,
          },
        },
      },
      {
        id: 'ejercicio-4',
        number: 4,
        type: 'Matemático',
        title: 'Solución general con factor integrante',
        statement: md`
Resuelve:

$$
\\frac{dy}{dt}+3y=9
$$
`,
        ask: 'Obtener la solución general.',
        steps: [
          md`Factor integrante: $$\\mu(t)=e^{3t}$$`,
          md`$$\\frac{d}{dt}(e^{3t}y)=9e^{3t}$$`,
          md`$$e^{3t}y=3e^{3t}+C$$`,
          md`$$y=3+Ce^{-3t}$$`,
        ],
        result: md`$$y=3+Ce^{-3t}$$`,
        interpretation: md`
La variable converge al equilibrio $3$.
`,
        errors: [
          'Calcular mal el factor integrante.',
          'No integrar bien el lado derecho.',
          'Perder el exponente negativo.',
        ],
        visualHint: 'Las soluciones múltiples comparten la misma línea de equilibrio.',
        visual: {
          type: 'linearAutonomous',
          title: 'Convergencia al equilibrio',
          summary: md`
Cada trayectoria parte de un valor inicial distinto, pero todas convergen a $y=3$ porque el término transitorio se apaga con rapidez.
`,
          props: {
            a: 9,
            b: 3,
            label: 'y',
            variableName: 'Solución',
            activeInitial: 5,
            initials: [-2, 0, 1, 5, 8],
            xMin: -3,
            xMax: 8,
            tMax: 4,
          },
        },
      },
    ],
  },
  {
    id: 'ejercicios-economicos',
    navLabel: 'Ejercicios económicos',
    badge: 'Práctica económica',
    title: 'Ejercicios económicos',
    intro: md`
Después de practicar los procedimientos matemáticos, toca leer trayectorias con sentido económico: precios, inventario, capital y adopción.
`,
    exercises: [
      {
        id: 'ejercicio-5',
        number: 5,
        type: 'Económico',
        title: 'Ajuste de precio hacia una meta',
        statement: md`
El precio $p(t)$ se ajusta a un precio meta de $12$:

$$
\\frac{dp}{dt}=12-p,\\qquad p(0)=5
$$
`,
        ask: 'Encontrar la trayectoria del precio.',
        steps: [
          md`$$\\frac{dp}{dt}+p=12$$`,
          md`Factor integrante: $$e^t$$`,
          md`$$p=12+Ce^{-t}$$`,
          md`Usando $p(0)=5$: $$5=12+C \\Rightarrow C=-7$$`,
        ],
        result: md`$$p(t)=12-7e^{-t}$$`,
        interpretation: md`
El precio inicia en $5$ y se acerca gradualmente a $12$.
`,
        errors: [
          'Cambiar el signo de $C$.',
          'Olvidar la condición inicial.',
          'Decir que llega exactamente a $12$ en tiempo finito.',
        ],
        visualHint: 'La trayectoria, la línea de equilibrio y el campo de pendientes muestran el ajuste gradual.',
        visual: {
          type: 'linearAutonomous',
          title: 'Trayectoria del precio',
          summary: md`
La meta de largo plazo es $12$. Mueve el valor inicial para ver cómo cambia el recorrido sin alterar el equilibrio del modelo.
`,
          props: {
            a: 12,
            b: 1,
            label: 'p',
            variableName: 'Precio',
            activeInitial: 5,
            initials: [2, 5, 8, 14, 18],
            xMin: 0,
            xMax: 20,
            tMax: 7,
          },
        },
      },
      {
        id: 'ejercicio-6',
        number: 6,
        type: 'Económico',
        title: 'Inventario con nivel de largo plazo',
        statement: md`
El inventario $I(t)$ evoluciona así:

$$
\\frac{dI}{dt}=18-0.6I,\\qquad I(0)=20
$$
`,
        ask: 'Encontrar la trayectoria y el equilibrio.',
        steps: [
          md`Equilibrio: $$18-0.6I=0 \\Rightarrow I=30$$`,
          md`Solución general: $$I=30+Ce^{-0.6t}$$`,
          md`Usando $I(0)=20$: $$20=30+C \\Rightarrow C=-10$$`,
        ],
        result: md`$$I(t)=30-10e^{-0.6t}$$`,
        interpretation: md`
El inventario sube desde $20$ hasta acercarse a $30$.
`,
        errors: [
          'Sacar mal el equilibrio.',
          'Olvidar el signo de $C$.',
          'No distinguir entre nivel inicial y nivel de largo plazo.',
        ],
        visualHint: 'La gráfica temporal muestra convergencia desde abajo y permite cambiar la condición inicial.',
        visual: {
          type: 'linearAutonomous',
          title: 'Ajuste del inventario',
          summary: md`
El equilibrio del inventario es fijo en $30$. Cambiar la condición inicial modifica la velocidad del recorrido, no el destino de largo plazo.
`,
          props: {
            a: 18,
            b: 0.6,
            label: 'I',
            variableName: 'Inventario',
            activeInitial: 20,
            initials: [10, 20, 25, 35, 45],
            xMin: 0,
            xMax: 48,
            tMax: 10,
          },
        },
      },
      {
        id: 'ejercicio-7',
        number: 7,
        type: 'Económico',
        title: 'Capital que desciende al equilibrio',
        statement: md`
El capital $K(t)$ sigue:

$$
\\frac{dK}{dt}=10-0.5K,\\qquad K(0)=30
$$
`,
        ask: 'Encontrar la trayectoria del capital.',
        steps: [
          md`Equilibrio: $$10-0.5K=0 \\Rightarrow K=20$$`,
          md`Solución general: $$K=20+Ce^{-0.5t}$$`,
          md`Usando $K(0)=30$: $$30=20+C \\Rightarrow C=10$$`,
        ],
        result: md`$$K(t)=20+10e^{-0.5t}$$`,
        interpretation: md`
El capital arranca arriba del equilibrio y va bajando hacia $20$.
`,
        errors: [
          'Pensar que por iniciar alto el equilibrio cambia.',
          'Olvidar que el equilibrio es fijo para ese modelo.',
          'Interpretar mal el signo de la tasa de cambio.',
        ],
        visualHint: 'La comparación entre trayectorias muestra cuándo la variable sube y cuándo baja según su posición respecto al equilibrio.',
        visual: {
          type: 'linearAutonomous',
          title: 'Capital y convergencia desde arriba',
          summary: md`
Cuando el capital está por arriba del equilibrio, la tasa de cambio es negativa. Cuando está por abajo, la tasa de cambio se vuelve positiva.
`,
          props: {
            a: 10,
            b: 0.5,
            label: 'K',
            variableName: 'Capital',
            activeInitial: 30,
            initials: [8, 15, 20, 30, 40],
            xMin: 0,
            xMax: 42,
            tMax: 10,
          },
        },
      },
      {
        id: 'ejercicio-8',
        number: 8,
        type: 'Económico',
        title: 'Adopción tecnológica y estabilidad',
        statement: md`
Un proceso de adopción tecnológica se modela como:

$$
\\frac{dx}{dt}=x(6-x)
$$
`,
        ask: 'Encontrar equilibrios y estabilidad.',
        steps: [
          md`$$x(6-x)=0 \\Rightarrow x=0,\\; x=6$$`,
          md`Si $x<0$, entonces $\\frac{dx}{dt}<0$.`,
          md`Si $0<x<6$, entonces $\\frac{dx}{dt}>0$.`,
          md`Si $x>6$, entonces $\\frac{dx}{dt}<0$.`,
        ],
        result: md`
- $x=0$ es inestable.
- $x=6$ es estable.
`,
        interpretation: md`
Si el proceso despega y toma valores positivos, tiende a estabilizarse alrededor de $6$.
`,
        errors: [
          'No revisar signos por intervalos.',
          'Concluir estabilidad sin línea de fase.',
          'Pensar que $x=0$ siempre es estable por ser cero.',
        ],
        visualHint: 'La gráfica de $f(x)$, la línea de fase, las trayectorias y la superficie 3D opcional permiten comparar condiciones iniciales.',
        visual: {
          type: 'logistic',
          title: 'Estabilidad en un proceso de adopción',
          summary: md`
Las trayectorias positivas convergen a $6$, mientras que el equilibrio en $0$ repele trayectorias cercanas. La superficie 3D ayuda a ver el papel de la condición inicial.
`,
          props: {
            carryingCapacity: 6,
            activeInitial: 1.8,
            xMin: -1.5,
            xMax: 8,
            tMax: 6,
          },
        },
      },
    ],
  },
];

export const closingSection = {
  id: 'cierre',
  navLabel: 'Cierre',
  badge: 'Cierre',
  title: 'Cierre del Día 1',
  message: md`
Este primer día debe dejarle a la alumna una idea muy clara: un sistema dinámico estudia cómo cambian las variables en el tiempo.

y ese cambio se expresa con objetos como:

$$
\\frac{dx}{dt}
$$
`,
  readiness: [
    'lectura de funciones',
    'despeje',
    'factorización',
    'derivada',
    'equilibrio',
    'separación de variables',
    'lineal de primer orden',
    'estabilidad básica',
  ],
  conclusion: md`
Si domina estos elementos, entonces ya puede entrar al segundo día con base suficiente.
`,
};

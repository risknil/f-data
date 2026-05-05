import type { TrainingModule } from '../training-content'

export const trainingModulesES: TrainingModule[] = [
  {
    id: 1,
    slug: 'what-this-training-is-about',
    title: 'Sobre Esta Formación',
    subtitle: 'Cómo utilizar este programa y qué esperar de él',
    duration: '10 min lectura',
    sections: [
      {
        title: 'Introducción',
        content: `Este programa de formación está dirigido a humanos que hacen apuestas deportivas. No está diseñado para aficionados ocasionales ni para quienes buscan atajos. Si estás aquí, probablemente ya pienses en las apuestas de manera diferente a la mayoría.

El propósito del programa es desarrollar pensamiento estructurado y hábitos sostenibles. No ofrece consejos ni sistemas infalibles. En cambio, te enseña a trabajar de forma más limpia, a razonar con más claridad y a gestionar tu actividad de apuestas como una disciplina seria.

Cada sección se basa en la anterior. El orden importa.

El programa no asume que seas un principiante. Pero tampoco asume que tengas todo resuelto. Muchos apostadores llevan años activos sin haber construido cimientos sólidos. Este programa te ayuda a lograrlo, ya sea que estés comenzando de cero o reorganizando lo que ya tienes.`
      },
      {
        title: 'Lo Que Esta Formación No Hace',
        content: `No predice ganadores. No proporciona picks de servicios de pronósticos ni alertas automatizadas. No gestiona tus cuentas. No calcula la estrategia óptima de Kelly para ti.

Lo que sí hace es enseñarte a pensar, llevar registros, evaluar tu trabajo y mantener la calma cuando la varianza golpea.

Si eso suena menos emocionante de lo que esperabas, bien. Las apuestas a largo plazo no son emocionantes. Son proceso, paciencia y ajuste constante.`
      },
      {
        title: 'Estructura del Programa',
        content: `La formación se divide en secciones. Las primeras secciones cubren los cimientos: qué es el valor, cómo funcionan los mercados, por qué importa la gestión del bankroll y cómo abordar los eventos de manera estructurada.

Las secciones posteriores se adentran en marcos analíticos específicos por deporte, psicología del apostador, mantenimiento de registros y revisión del rendimiento.

A lo largo del programa, el enfoque está en pensar por ti mismo, no en seguir instrucciones.`
      },
      {
        title: 'Cómo Utilizar Este Programa',
        content: `Lee cada sección en orden. Toma notas. Aplica los conceptos a tu propia actividad de apuestas mientras avanzas.

No te apresures. El objetivo no es terminar rápido, sino absorber el material lo suficientemente bien como para utilizarlo bajo presión.

Al final del programa, deberías tener una comprensión más clara de lo que significa apostar con intención, en lugar de simplemente reaccionar a cuotas y resultados.`
      },
      {
        title: 'Tabla de Contenidos',
        content: `**Sección 1** – Sobre Esta Formación
**Sección 2** – Cómo Funcionan Realmente las Casas de Apuestas, los Exchanges y los Mercados
**Sección 3** – Cuotas, Probabilidad Implícita y Pricing Justo
**Sección 4** – Valor, Valor Esperado, Comparación de Líneas y Valor de Línea de Cierre
**Sección 5** – Gestión del Bankroll, Staking y Supervivencia en la Varianza
**Sección 6** – El Flujo de Trabajo Completo del Apostador: Del Calendario al Ticket
**Sección 7** – Clase de Fútbol
**Sección 8** – Clase de Carreras de Caballos
**Sección 9** – Clase de Tenis
**Sección 10** – Clase de Baloncesto
**Sección 11** – Clase de Hockey sobre Hielo
**Sección 12** – Clase de Béisbol
**Sección 13** – Clase de Fútbol Americano
**Sección 14** – Otros Deportes y Nichos Especializados
**Sección 15** – Masterclass de Tipos de Apuestas
**Sección 16** – Cuaderno Personal de Apuestas, Registro de Decisiones y Plantilla de Revisión
**Sección 17** – Revisión del Rendimiento, Mantenimiento de Registros y Aprendizaje de los Resultados
**Sección 18** – Psicología, Disciplina, Control del Tilt y Rutinas Profesionales
**Sección 19** – Estándares de Juego Responsable, Conciencia Normativa y Protección Personal
**Sección 20** – Ejercicios Prácticos y Apéndice A`
      }
    ]
  },
  {
    id: 2,
    slug: 'how-bookmakers-exchanges-and-betting-markets-really-work',
    title: 'Cómo Funcionan Realmente las Casas de Apuestas, los Exchanges y los Mercados de Apuestas',
    subtitle: 'Entendiendo la estructura del mercado en el que operas',
    duration: '20 min lectura',
    sections: [
      {
        title: 'Lo Básico',
        content: `Las casas de apuestas establecen precios y aceptan apuestas. Ganan dinero incorporando un margen en las cuotas que ofrecen. Este margen significa que la probabilidad implícita total de un mercado suma más del 100%.

Los exchanges permiten que los usuarios apuesten entre sí. El exchange cobra una comisión sobre las ganancias netas. El exchange no fija los precios; los usuarios lo hacen ofertando y demandando resultados.

Ambos modelos coexisten. Tienen fortalezas diferentes. Las casas de apuestas ofrecen conveniencia y mayor liquidez en mercados menores. Los exchanges ofrecen mejores cuotas cuando hay liquidez, además de la posibilidad de apostar en contra de un resultado.`
      },
      {
        title: 'Cómo Fijan los Precios las Casas de Apuestas',
        content: `Las casas de apuestas construyen sus cuotas estimando las probabilidades verdaderas de los resultados y luego añadiendo margen.

El margen protege su rentabilidad. Cuanto mayor es el margen, más cara es cada apuesta para ti. Por eso comparar cuotas entre casas es esencial.

Las casas de apuestas ajustan sus precios a lo largo del tiempo según la acción de apuestas entrante, los movimientos de la competencia y la información actualizada. Los precios de apertura no son los precios finales.`
      },
      {
        title: 'Cómo Funcionan los Exchanges',
        content: `En un exchange, tú puedes respaldar un resultado (apostar a que ocurre) o oponerte a él (apostar a que no ocurre). El exchange empareja posiciones opuestas.

Como no hay margen incorporado, las cuotas pueden ser más ajustadas. Pero no siempre hay suficiente liquidez para apostar el volumen que deseas sin mover el precio.

Los exchanges requieren más esfuerzo activo. Necesitas entender cómo colocar órdenes límite, cómo funciona el emparejamiento y cuándo la comisión del exchange afecta tu ventaja.`
      },
      {
        title: 'Liquidez',
        content: `Liquidez significa cuánto dinero hay disponible en un mercado a un precio dado.

En mercados con alta liquidez, puedes apostar cantidades mayores sin mover las cuotas. En mercados con baja liquidez, incluso apuestas pequeñas pueden agotar los mejores precios y dejarte con cuotas peores.

La liquidez varía según el deporte, la liga, el momento y el tipo de mercado. Las ligas principales cerca del inicio del partido suelen tener la mejor liquidez.`
      },
      {
        title: 'Casas Afiladas vs. Blandas',
        content: `Las casas "afiladas" (sharp) son aquellas cuyos precios se mueven rápidamente en respuesta a la información. Atraen a jugadores profesionales, tienen márgenes más bajos y sirven como indicador del consenso del mercado.

Las casas "blandas" (soft) reaccionan más lentamente. A menudo obtienen sus cuotas de fuentes externas en lugar de elaborarlas internamente. Sus precios pueden quedarse rezagados respecto a los movimientos del mercado.

Esta distinción importa. Si te limitan en casas blandas, eso te indica algo sobre cómo te ven. Si constantemente encuentras valor en casas blandas pero no en las afiladas, debes preguntarte si realmente es valor, o si estás del lado equivocado de la ineficiencia.`
      },
      {
        title: 'Movimiento de Mercado y Flujo de Información',
        content: `Los precios se mueven cuando llega nueva información o cuando apostadores influyentes toman posiciones. Una lesión importante puede reducir las cuotas de un favorito. Una gran apuesta en un equipo desfavorecido puede mover la línea.

El momento importa. Si apuestas temprano, tus cuotas pueden ser distintas del precio de cierre. Si tu cuota suele ser mejor que la de cierre, eso sugiere que estás encontrando valor.

Si tu cuota suele ser peor que la de cierre, necesitas examinar tu timing y tus fuentes.`
      },
      {
        title: 'Por Qué Importa Entender la Estructura',
        content: `No necesitas saber todo sobre cómo se hacen los libros. Pero sí necesitas entender dónde encajas en el ecosistema.

¿Estás apostando en lugares donde el mercado se forma o donde simplemente se refleja? ¿Estás consiguiendo la mejor cuota posible o solo la más conveniente?

Estas preguntas moldean tus expectativas a largo plazo. El precio importa tanto como la selección.`
      }
    ]
  },
  {
    id: 3,
    slug: 'odds-implied-probability-and-fair-pricing',
    title: 'Cuotas, Probabilidad Implícita y Pricing Justo',
    subtitle: 'El lenguaje de los precios y lo que realmente te dicen',
    duration: '15 min lectura',
    sections: [
      {
        title: 'Formatos de Cuotas',
        content: `Las cuotas se presentan en varios formatos. El decimal es el más común en Europa y el más fácil para calcular. Una cuota decimal de 2.00 significa que una apuesta de 1€ devuelve 2€ si ganas, incluyendo tu stake.

Las cuotas fraccionarias son tradicionales en Reino Unido e Irlanda. 1/1 significa que ganas una cantidad igual a tu stake.

Las cuotas americanas usan más y menos. Un +150 significa que ganas 150€ por cada 100€ apostados. Un -150 significa que necesitas apostar 150€ para ganar 100€.

Elige un formato y domínalo. Poder convertir rápidamente es útil, pero la fluidez mental se construye a partir del uso constante.`
      },
      {
        title: 'Probabilidad Implícita',
        content: `Cada cuota corresponde a una probabilidad implícita.

Para cuotas decimales: probabilidad implícita = 1 / cuota decimal.

Una cuota de 2.00 implica un 50% de probabilidad. Una cuota de 4.00 implica un 25%.

Esto no te dice cuál es la verdadera probabilidad. Solo te dice lo que la casa asume, o más exactamente, lo que cobra por el riesgo.`
      },
      {
        title: 'Margen',
        content: `El margen es la diferencia entre la suma de las probabilidades implícitas y el 100%.

Si una casa ofrece un partido de tenis a 1.85 para cada jugador, la probabilidad implícita de cada lado es aproximadamente el 54.05%. La suma es 108.1%, por lo que el margen es del 8.1%.

El margen varía según el mercado y la casa. Algunos mercados tienen márgenes pequeños. Otros, especialmente en apuestas derivadas o especiales, tienen márgenes mucho mayores.

Un margen alto es un impuesto directo a tu ventaja.`
      },
      {
        title: 'Cuota Justa vs. Cuota Ofrecida',
        content: `Si estimas que un equipo tiene un 50% de probabilidad de ganar, tu cuota justa es 2.00.

Si puedes apostar por él a 2.10, tienes margen a tu favor. Si la cuota ofrecida es 1.90, no lo tienes.

El pricing justo es lo que calculas internamente. La cuota ofrecida es lo que puedes conseguir realmente. La diferencia define tu ventaja.`
      },
      {
        title: 'Por Qué Importa el Precio',
        content: `Muchos apostadores se centran en si un equipo ganará o perderá. Eso es un error.

Importa más a qué precio. Cada selección tiene un rango de precios aceptables. Fuera de ese rango, la apuesta no vale la pena, aunque la selección sea correcta.

Un equipo puede ser un buen favorito a 1.50 pero un mal favorito a 1.30. Todo es relativo al precio.`
      }
    ]
  },
  {
    id: 4,
    slug: 'value-expected-value-line-shopping-and-closing-line-value',
    title: 'Valor, Valor Esperado, Comparación de Líneas y Valor de Línea de Cierre',
    subtitle: 'La mecánica de la ventaja a largo plazo',
    duration: '25 min lectura',
    sections: [
      {
        title: '¿Qué es el Valor?',
        content: `El valor existe cuando el precio que obtienes es mejor que el que deberías según la verdadera probabilidad.

Si un resultado tiene un 50% de probabilidad de ocurrir, la cuota justa es 2.00. Si apuestas a 2.20, tienes valor.

El valor no garantiza que ganes. Significa que a largo plazo, apostar repetidamente a cuotas con valor produce beneficios.`
      },
      {
        title: 'Valor Esperado (EV)',
        content: `El valor esperado es el resultado promedio de una apuesta si se repitiera infinitas veces.

EV = (probabilidad de ganar × beneficio potencial) - (probabilidad de perder × stake)

Si estimas un 55% de probabilidad de ganar a cuota 2.00 con stake de 100€:
EV = (0.55 × 100€) - (0.45 × 100€) = 55€ - 45€ = +10€

EV positivo significa que la apuesta favorece al apostador a largo plazo.`
      },
      {
        title: 'Comparación de Líneas (Line Shopping)',
        content: `No todas las casas ofrecen el mismo precio. La comparación de líneas es el proceso de buscar la mejor cuota disponible antes de apostar.

Incluso pequeñas diferencias importan. Apostar consistentemente a 1.95 en lugar de 1.90 mejora tus resultados significativamente a largo plazo.

Usa comparadores de cuotas. Ten cuentas en varias casas. Nunca asumas que tu casa habitual tiene el mejor precio.`
      },
      {
        title: 'Valor de Línea de Cierre (CLV)',
        content: `El CLV compara tu precio tomado con el precio de cierre del mercado.

Si apostaste a 2.20 y el precio cerró en 2.00, capturaste valor de línea de cierre positivo.

El CLV es uno de los indicadores más fiables de habilidad del apostador porque la línea de cierre refleja toda la información disponible justo antes del evento.

Apostar consistentemente mejor que la línea de cierre sugiere que estás identificando valor que el mercado aún no había incorporado.`
      },
      {
        title: 'Limitaciones del CLV',
        content: `El CLV no es perfecto. En mercados con poca liquidez, la línea de cierre puede no ser eficiente.

En algunos deportes, la línea de cierre está más influenciada por la acción recreativa que por información nueva.

Además, conseguir mejor CLV no significa automáticamente que seas rentable si tu evaluación inicial de probabilidades era incorrecta.

Usa el CLV como una métrica de proceso, no como la única medida de éxito.`
      },
      {
        title: 'Integrar Todo',
        content: `El valor es el objetivo. El EV es cómo lo cuantificas. La comparación de líneas es cómo lo maximizas. El CLV es cómo evalúas si lo estás logrando.

Ninguno de estos conceptos funciona aislado. Un apostador disciplinado los usa todos juntos para tomar decisiones y revisar resultados.`
      }
    ]
  },
  {
    id: 5,
    slug: 'bankroll-management-staking-and-survival-under-variance',
    title: 'Gestión del Bankroll, Staking y Supervivencia en la Varianza',
    subtitle: 'Proteger tu capital mientras persigues beneficio',
    duration: '20 min lectura',
    sections: [
      {
        title: '¿Qué es el Bankroll?',
        content: `Tu bankroll es el dinero que dedicas exclusivamente a las apuestas. No es dinero para alquiler, comida o emergencias.

Separar el bankroll de otras finanzas es crucial. Mezclarlos lleva a decisiones emocionales y mala disciplina.

Solo deberías apostar con dinero que puedas permitirte perder completamente sin afectar tu vida.`
      },
      {
        title: 'Staking: ¿Cuánto Apostar?',
        content: `El staking es decidir qué porcentaje del bankroll arriesgas en cada apuesta.

El enfoque más simple es el stake plano: apostar el mismo porcentaje en cada apuesta, típicamente 1-2% del bankroll.

El criterio de Kelly es más sofisticado: ajusta el stake según tu ventaja percibida. Pero requiere estimaciones precisas de probabilidad que muchos apostadores no pueden proporcionar de forma fiable.`
      },
      {
        title: 'Riesgos del Overstaking',
        content: `Apostar demasiado por apuesta te expone a ruina prematura.

Una racha perdedora de 10 apuestas no es inusual. Si apuestas el 10% por apuesta, pierdes dos tercios del bankroll en esa racha. Si apuestas el 2%, pierdes menos del 20%.

La varianza golpea a todos. El overstaking garantiza que no sobrevivas a ella.`
      },
      {
        title: 'Varianza y Rachas',
        content: `La varianza es la fluctuación natural de resultados a corto plazo.

Puedes ser un apostador con EV positivo y aún perder durante semanas o meses. Las rachas perdedoras largas son matemáticamente inevitables.

Entender esto emocionalmente es tan importante como entenderlo intelectualmente. La varianza prueba tu proceso, no tu valor como apostador.`
      },
      {
        title: 'Ajustar el Bankroll',
        content: `Algunas personas aumentan el stake cuando el bankroll crece y lo reducen cuando mengua.

Otros mantienen stakes fijos hasta alcanzar umbrales específicos.

Lo importante es tener reglas claras establecidas de antemano, no tomar decisiones impulsivas cuando estás en racha ganadora o perdedora.`
      },
      {
        title: 'Supervivencia Primero',
        content: `El objetivo principal del bankroll management no es maximizar ganancias a corto plazo. Es sobrevivir lo suficiente para que tu ventaja se materialice.

Un apostador con 3% de ventaja que gestiona mal el bankroll puede arruinarse antes de que esa ventaja se refleje en beneficios.

La preservación del capital no es conservadurismo. Es sentido común aplicado.`
      }
    ]
  },
  {
    id: 6,
    slug: 'the-full-bettor-workflow',
    title: 'El Flujo de Trabajo Completo del Apostador',
    subtitle: 'Del calendario al ticket: un proceso estructurado',
    duration: '25 min lectura',
    sections: [
      {
        title: 'Por Qué Necesitas un Proceso',
        content: `La mayoría de apostadores trabajan de forma reactiva: ven cuotas, reaccionan, apuestan.

Un proceso estructurado invierte esto. Primero revisas el calendario. Luego filtras los eventos. Después analizas los que merecen atención. Solo entonces miras cuotas.

Este orden protege contra la influencia del precio en tu análisis.`
      },
      {
        title: 'Paso 1: Revisar el Calendario',
        content: `Cada semana empieza con el calendario de eventos.

¿Qué deportes tienen acción? ¿Qué ligas conoces bien? ¿Qué partidos tienen suficiente información disponible?

No todos los eventos merecen atención. Filtra primero por tu área de competencia.`
      },
      {
        title: 'Paso 2: Preselección de Eventos',
        content: `De los eventos en tu área, identifica cuáles tienen potencial.

Esto puede basarse en corazonadas informadas, patrones que has notado, o simplemente partidos donde crees que puedes tener opinión fundamentada.

El objetivo no es encontrar apuestas todavía. Es encontrar eventos que merecen análisis más profundo.`
      },
      {
        title: 'Paso 3: Análisis',
        content: `Para cada evento preseleccionado, realiza tu análisis.

Esto varía según el deporte: estadísticas, forma, enfrentamientos directos, lesiones, motivación, contexto del calendario.

El análisis termina con tu estimación de probabilidad. Escríbela antes de mirar las cuotas.`
      },
      {
        title: 'Paso 4: Comparar con el Mercado',
        content: `Ahora miras las cuotas.

Compara tu probabilidad estimada con la probabilidad implícita del mercado. ¿Hay discrepancia?

Si tu análisis dice 45% y el mercado implica 35%, tienes una apuesta potencial. Si ambos coinciden, no la tienes.`
      },
      {
        title: 'Paso 5: Line Shopping y Ejecución',
        content: `Antes de apostar, compara cuotas entre casas.

Encuentra el mejor precio disponible para tu selección. Calcula el stake según tu sistema. Ejecuta la apuesta.

Registra todo: evento, selección, cuota tomada, stake, casa utilizada.`
      },
      {
        title: 'Paso 6: Revisión Post-Evento',
        content: `Después del evento, revisa tu apuesta.

¿El resultado fue consistente con tu análisis aunque perdieras? ¿El proceso fue sólido? ¿La cuota de cierre validó o contradijo tu evaluación?

La revisión alimenta el aprendizaje. Sin ella, repites errores indefinidamente.`
      }
    ]
  },
  {
    id: 7,
    slug: 'football-class',
    title: 'Clase de Fútbol',
    subtitle: 'Análisis específico para el deporte más apostado del mundo',
    duration: '30 min lectura',
    sections: [
      {
        title: 'Características del Fútbol como Mercado de Apuestas',
        content: `El fútbol es el mercado más grande y líquido. Esto significa márgenes más bajos pero también mercados más eficientes.

La naturaleza de bajo marcador del fútbol crea alta varianza. Un gol puede cambiar todo. Un penalti dudoso puede invertir el resultado esperado.

Esto hace que el fútbol sea atractivo para apostadores pacientes pero frustrante para quienes buscan resultados rápidos.`
      },
      {
        title: 'Métricas Clave',
        content: `xG (expected goals) mide la calidad de las oportunidades de gol basándose en datos históricos de situaciones similares.

xG es útil pero imperfecto. No captura todo el contexto: estado del partido, calidad del portero, presión defensiva en el momento exacto.

Otras métricas importantes: posesión en zonas peligrosas, presión alta, eficiencia de pases en el último tercio.`
      },
      {
        title: 'Mercados Principales',
        content: `1X2 es el mercado de resultado final: victoria local, empate, victoria visitante.

Handicap asiático elimina el empate como opción y ajusta la ventaja.

Over/under de goles es sobre el total de goles en el partido.

Ambos equipos marcan (BTTS) es un mercado popular pero a menudo con márgenes altos.`
      },
      {
        title: 'Factores Contextuales',
        content: `El contexto del calendario importa enormemente. Un equipo en mitad de tabla sin nada en juego versus uno peleando por Champions League no son iguales.

Partidos entre semana, acumulación de fatiga, rotaciones: todo esto afecta rendimiento.

Las lesiones de jugadores clave pueden tener impacto desproporcionado según la estructura táctica del equipo.`
      },
      {
        title: 'Eficiencia del Mercado',
        content: `Los mercados principales de las grandes ligas son muy eficientes. Encontrar valor requiere análisis muy profundo o información de nicho.

Los mercados secundarios y las ligas menores ofrecen más oportunidades, pero también más riesgo de información asimétrica en tu contra.

Conocer tu área de competencia es crucial.`
      }
    ]
  },
  {
    id: 8,
    slug: 'horse-racing-class',
    title: 'Clase de Carreras de Caballos',
    subtitle: 'Un mercado único con sus propias reglas',
    duration: '30 min lectura',
    sections: [
      {
        title: 'La Naturaleza del Mercado de Carreras',
        content: `Las carreras de caballos son fundamentalmente diferentes de los deportes de equipo. Hay muchos competidores, la información es fragmentaria y los mercados se mueven constantemente.

El mercado de apuesta mutua (donde las cuotas dependen de la distribución de apuestas) coexiste con las cuotas fijas de las casas de apuestas.

La liquidez varía enormemente según el hipódromo, la categoría de la carrera y la región.`
      },
      {
        title: 'Factores de Handicapping',
        content: `La forma reciente es el punto de partida, pero requiere interpretación cuidadosa.

El terreno (going) afecta drásticamente a algunos caballos. La distancia óptima varía según el caballo. La combinación de pista y distancia importa.

El peso asignado en carreras de handicap intenta igualar las posibilidades, pero las evaluaciones oficiales no siempre son perfectas.`
      },
      {
        title: 'El Rol del Jinete y el Entrenador',
        content: `Los entrenadores tienen patrones detectables: algunos preparan bien para debuts, otros para grandes premios, otros para carreras de handicap específicas.

Los jinetes tienen estadísticas de strike rate pero también estilos diferentes. Algunos son mejores desde atrás, otros prefieren ir al frente.

Las combinaciones jinete-entrenador a veces revelan intenciones.`
      },
      {
        title: 'Movimientos de Mercado',
        content: `En carreras, los movimientos de mercado son información. El dinero "informado" de establos y conexiones mueve precios.

Un caballo que se acorta significativamente merece atención. Uno que deriva puede estar revelando problemas no públicos.

Pero no todo movimiento es informativo. A veces es simplemente volumen recreativo.`
      },
      {
        title: 'Apuestas Each Way y Valor en Place',
        content: `Las apuestas each way (al ganador y al puesto) pueden ofrecer valor cuando los términos de place son generosos.

Calcular si el componente de place tiene EV positivo requiere evaluar las probabilidades de lugar independientemente.

En campos grandes con varios favoritos, el valor de place a veces supera el valor de win.`
      }
    ]
  },
  {
    id: 9,
    slug: 'tennis-class',
    title: 'Clase de Tenis',
    subtitle: 'Un deporte individual con dinámicas únicas',
    duration: '25 min lectura',
    sections: [
      {
        title: 'Características del Tenis',
        content: `El tenis es un deporte sin empates y sin tiempo fijo. Los partidos terminan cuando alguien gana suficientes sets.

Esto crea estructuras de probabilidad interesantes. Un jugador puede dominar en juegos ganados pero perder el partido si pierde los momentos clave.

La superficie (tierra batida, hierba, pista dura) afecta estilos de juego de manera fundamental.`
      },
      {
        title: 'Métricas de Servicio y Resto',
        content: `El porcentaje de puntos ganados con primer servicio y segundo servicio es fundamental.

El porcentaje de puntos ganados al resto indica presión sobre el saque rival.

La combinación de eficiencia de servicio y resto de ambos jugadores predice mucho del resultado esperado.`
      },
      {
        title: 'Factores de Matchup',
        content: `Algunos estilos neutralizan a otros. Un gran sacador puede dominar a un jugador defensivo en hierba pero sufrir en tierra batida contra el mismo rival.

Los enfrentamientos directos (head-to-head) importan, pero solo cuando hay suficiente muestra y las condiciones son comparables.

La forma reciente importa más en tenis que en muchos deportes debido a la naturaleza individual.`
      },
      {
        title: 'Mercados de Tenis',
        content: `El moneyline es quién gana el partido.

El handicap de games ajusta el total de games ganados por cada jugador.

Over/under de games es el total combinado.

Los mercados de sets específicos (ganador del primer set, resultado exacto en sets) ofrecen variedad pero también márgenes mayores.`
      },
      {
        title: 'Consideraciones In-Play',
        content: `El tenis tiene mucha acción in-play. Los precios se mueven constantemente según el marcador.

Las remontadas son posibles pero estadísticamente difíciles según la ventaja de sets.

El momentum existe pero es sobrevalorado por los mercados en momentos de alta emoción.`
      }
    ]
  },
  {
    id: 10,
    slug: 'basketball-class',
    title: 'Clase de Baloncesto',
    subtitle: 'Un deporte de alto marcador con mercados profundos',
    duration: '25 min lectura',
    sections: [
      {
        title: 'Características del Baloncesto',
        content: `El baloncesto es un deporte de alto marcador donde cada equipo tiene muchas posesiones. Esto reduce la varianza comparado con deportes de bajo marcador.

Los partidos suelen decidirse en los últimos minutos. La gestión del reloj y los tiros libres son cruciales al final.

La NBA tiene el mercado más líquido. Las ligas europeas y universitarias tienen más ineficiencias pero también más riesgo de información asimétrica.`
      },
      {
        title: 'Métricas de Eficiencia',
        content: `El rating ofensivo y defensivo (puntos por 100 posesiones) ajusta por ritmo de juego.

El ritmo (pace) indica cuántas posesiones tiene cada equipo por partido. Equipos rápidos inflan totales; equipos lentos los reducen.

Net rating es la diferencia entre eficiencia ofensiva y defensiva.`
      },
      {
        title: 'Factores de Lineup',
        content: `El baloncesto es muy sensible a alineaciones. La ausencia de una estrella puede cambiar todo.

Algunos equipos tienen profundidad de banquillo; otros dependen de sus titulares.

El back-to-back (partidos en días consecutivos) afecta rendimiento, especialmente en la segunda mitad.`
      },
      {
        title: 'Mercados de Baloncesto',
        content: `El spread es el mercado principal. Los equipos son "cubrir" un margen de puntos.

Over/under de puntos totales es muy popular.

Los mercados de jugador (puntos, rebotes, asistencias de jugadores específicos) ofrecen oportunidades pero requieren conocimiento de rotaciones y matchups.`
      },
      {
        title: 'Factores de Motivación y Calendario',
        content: `En la NBA, la temporada regular es larga. No todos los partidos tienen la misma intensidad.

Equipos con playoffs asegurados pueden descansar jugadores. Equipos en pelea por posición dan el máximo.

Los partidos de rivalidad y los de televisión nacional a veces tienen dinámicas diferentes.`
      }
    ]
  },
  {
    id: 11,
    slug: 'ice-hockey-class',
    title: 'Clase de Hockey sobre Hielo',
    subtitle: 'Un deporte de alto ritmo con particularidades de mercado',
    duration: '20 min lectura',
    sections: [
      {
        title: 'Características del Hockey',
        content: `El hockey es un deporte de bajo marcador relativo con alta varianza de resultado.

Los partidos pueden terminar en tiempo regular, overtime o shootout. Esto afecta cómo se liquidan diferentes mercados.

El portero tiene impacto desproporcionado. Un portero en mala racha puede hundir a un equipo fuerte.`
      },
      {
        title: 'Métricas Clave',
        content: `Corsi y Fenwick miden intentos de tiro, no solo tiros al arco. Son proxies de posesión y dominio territorial.

Expected goals (xG) se usa también en hockey para evaluar la calidad de las oportunidades.

PDO es la suma de porcentaje de paradas del portero y porcentaje de acierto en tiro propio. PDOs extremos tienden a regresar a la media.`
      },
      {
        title: 'Factores de Situación',
        content: `El power play (superioridad numérica) cambia dinámicas. Equipos con buen power play aprovechan mejor las penalizaciones rivales.

El penalty kill (inferioridad) es igualmente importante.

Las líneas de juego y combinaciones afectan química y rendimiento.`
      },
      {
        title: 'Mercados de Hockey',
        content: `El puck line es similar al spread, generalmente +/- 1.5 goles.

El mercado de 60 minutos (regulation) excluye overtime y shootout.

Over/under de goles totales varía según porteros y estilos de equipo.`
      }
    ]
  },
  {
    id: 12,
    slug: 'baseball-class',
    title: 'Clase de Béisbol',
    subtitle: 'Un juego de innings con estadísticas profundas',
    duration: '25 min lectura',
    sections: [
      {
        title: 'Características del Béisbol',
        content: `El béisbol tiene una estructura única: nueve innings, sin reloj, cada equipo tiene las mismas oportunidades de bateo.

La varianza diaria es alta incluso entre equipos con diferencias de nivel claras. Los mejores equipos ganan quizás 60% de sus partidos.

La temporada de 162 partidos suaviza la varianza, pero cada partido individual es altamente impredecible.`
      },
      {
        title: 'El Rol del Pitcher Abridor',
        content: `El pitcher abridor domina los primeros 5-6 innings. Su calidad define gran parte de la línea de apertura.

Las métricas de pitcheo incluyen ERA, FIP, xFIP, WHIP. Cada una captura diferentes aspectos del rendimiento.

Los relevistas y el bullpen importan en innings finales, pero la acción en los mercados suele centrarse en los abridores.`
      },
      {
        title: 'Factores de Bateo y Ballpark',
        content: `El lineup de bateo y la presencia de bateadores clave afecta expectativas de carreras.

Los estadios tienen "park factors" diferentes. Algunos favorecen el pitcheo; otros el bateo. Coors Field en Denver es famoso por altos totales.

El clima (viento, humedad, temperatura) también afecta el vuelo de la pelota.`
      },
      {
        title: 'Mercados de Béisbol',
        content: `El moneyline es quién gana el partido.

El run line es el spread, generalmente +/- 1.5 carreras.

Over/under de carreras totales es popular.

Los primeros 5 innings (F5) aíslan el impacto de los abridores del bullpen.`
      },
      {
        title: 'Consideraciones de Temporada',
        content: `El béisbol tiene temporada larga. Los equipos gestionan rotaciones de pitcheo a lo largo del calendario.

Lesiones y fatiga acumulada afectan rendimiento en diferentes puntos de la temporada.

Septiembre trae rosters expandidos y motivaciones diferentes según la posición en standings.`
      }
    ]
  },
  {
    id: 13,
    slug: 'american-football-class',
    title: 'Clase de Fútbol Americano',
    subtitle: 'NFL y el deporte más apostado en América',
    duration: '25 min lectura',
    sections: [
      {
        title: 'Características del Fútbol Americano',
        content: `El fútbol americano tiene temporada corta (17 partidos en NFL), lo que limita el tamaño de muestra pero intensifica cada partido.

Es un deporte de posesiones y situaciones. Cada jugada es discreta con resultados medibles.

El mercado de la NFL es el más líquido de América y altamente eficiente para líneas principales.`
      },
      {
        title: 'Métricas Clave',
        content: `DVOA (Defense-adjusted Value Over Average) mide eficiencia comparada con la media ajustando por oponentes.

EPA (Expected Points Added) evalúa el valor de cada jugada en términos de puntos esperados.

El success rate mide el porcentaje de jugadas que avanzan la cadena de downs satisfactoriamente.`
      },
      {
        title: 'El Rol del Quarterback',
        content: `El quarterback es la posición más importante. Su nivel determina gran parte del techo ofensivo del equipo.

Las lesiones de quarterback afectan líneas más que cualquier otra posición individual.

Evaluar a los quarterbacks suplentes es crucial cuando hay dudas sobre la titularidad.`
      },
      {
        title: 'Factores de Game Script',
        content: `El game script describe cómo se desarrolla un partido. Un equipo que va perdiendo pasa más; uno que va ganando corre más.

Esto afecta estadísticas individuales y totales proyectados.

El ritmo de juego y tiempo de posesión influyen en exposición y oportunidades de anotación.`
      },
      {
        title: 'Mercados de Fútbol Americano',
        content: `El spread es el mercado principal, ajustando por margen de victoria.

Over/under de puntos totales.

Player props (yardas, touchdowns de jugadores específicos) ofrecen oportunidades con conocimiento de roles y game script.

Parlays y teasers son populares pero generalmente favorecen a la casa.`
      }
    ]
  },
  {
    id: 14,
    slug: 'other-sports-and-specialist-niches',
    title: 'Otros Deportes y Nichos Especializados',
    subtitle: 'Oportunidades fuera de los mercados principales',
    duration: '20 min lectura',
    sections: [
      {
        title: 'Por Qué Considerar Nichos',
        content: `Los mercados principales son eficientes porque atraen la mayor atención. Los nichos pueden tener ineficiencias porque las casas dedican menos recursos a fijarlos correctamente.

Pero los nichos también tienen riesgos: menor liquidez, límites más bajos, mayor posibilidad de que otros tengan información que tú no.

El éxito en nichos requiere conocimiento genuino, no solo la esperanza de que el mercado sea débil.`
      },
      {
        title: 'Deportes de Motor',
        content: `La Fórmula 1, NASCAR y otros ofrecen mercados de ganador de carrera, podio, posiciones relativas.

La variabilidad de condiciones (clima, safety cars) crea incertidumbre.

La información de entrenamientos y clasificación es pública pero requiere interpretación.`
      },
      {
        title: 'Golf',
        content: `El golf tiene muchos competidores, lo que crea mercados de largo plazo con alta varianza.

Las apuestas de matchup (un jugador contra otro) reducen el campo y la varianza.

La forma reciente, el historial en el campo específico y las estadísticas de aproximación son factores clave.`
      },
      {
        title: 'Deportes de Combate',
        content: `El boxeo y MMA tienen mercados activos pero información menos transparente.

Los estilos de pelea y matchups son cruciales. Un gran striker puede tener problemas contra un luchador de agarre.

La preparación y el campamento de entrenamiento importan pero son difíciles de evaluar desde fuera.`
      },
      {
        title: 'eSports',
        content: `Los eSports son un nicho creciente con mercados para juegos como League of Legends, CS:GO, Dota 2.

El meta del juego (la estrategia dominante actual) cambia con parches y actualizaciones.

La información está disponible pero requiere conocimiento específico del juego.`
      }
    ]
  },
  {
    id: 15,
    slug: 'bet-types-masterclass',
    title: 'Masterclass de Tipos de Apuestas',
    subtitle: 'Entendiendo cada tipo de mercado y cuándo usarlo',
    duration: '25 min lectura',
    sections: [
      {
        title: 'Apuestas Simples (Singles)',
        content: `Una apuesta simple es una selección única. Ganas si tu selección gana.

Es la forma más pura de expresar una opinión de mercado. Sin complejidad adicional.

Maximiza el control sobre tu varianza y facilita el análisis de resultados.`
      },
      {
        title: 'Apuestas Combinadas (Accumulators)',
        content: `Las combinadas multiplican las cuotas de varias selecciones. Todas deben ganar para que la apuesta pague.

Las cuotas parecen atractivas, pero el margen de la casa se multiplica. Cada pata adicional aumenta la desventaja.

Las combinadas son populares recreacionalmente pero generalmente desfavorecen al apostador serio.`
      },
      {
        title: 'Handicaps Asiáticos',
        content: `El handicap asiático elimina el empate dividiendo las posibilidades entre dos líneas.

Las variantes incluyen medio gol (sin empate posible) y cuarto de gol (mitad de la apuesta en cada línea adyacente).

Entender cómo se liquidan es esencial antes de usarlos.`
      },
      {
        title: 'Over/Under',
        content: `Los mercados de over/under establecen una línea para una estadística (goles, puntos, etc.) y apuestas si el total será mayor o menor.

Son independientes del resultado del partido, lo que puede ser ventajoso en partidos difíciles de predecir.

La línea puede ser entera (con posibilidad de push) o con medio punto.`
      },
      {
        title: 'Apuestas de Jugador (Player Props)',
        content: `Las props de jugador son apuestas sobre estadísticas individuales: puntos de un jugador, yardas, goles.

Requieren conocimiento de roles dentro del equipo, minutos esperados y matchups defensivos.

Pueden tener márgenes mayores pero también más ineficiencias.`
      },
      {
        title: 'Futuros y Outrights',
        content: `Los futuros son apuestas a largo plazo: ganador de liga, campeón de torneo, MVP.

El dinero queda comprometido mucho tiempo. La cuota refleja probabilidad más prima por tiempo.

Pueden ofrecer valor antes de que el consenso se forme, pero son difíciles de analizar con precisión.`
      }
    ]
  },
  {
    id: 16,
    slug: 'personal-betting-notebook',
    title: 'Cuaderno Personal de Apuestas',
    subtitle: 'Registro de decisiones y plantilla de revisión',
    duration: '15 min lectura',
    sections: [
      {
        title: 'Por Qué Llevar un Registro',
        content: `Sin registros, no puedes evaluar tu rendimiento real. Las memorias son selectivas y engañosas.

Un registro honesto revela patrones: dónde ganas, dónde pierdes, qué mercados funcionan, cuáles no.

El acto de registrar también fuerza reflexión sobre cada decisión.`
      },
      {
        title: 'Qué Registrar',
        content: `Para cada apuesta: fecha, evento, mercado, selección, cuota tomada, stake, casa utilizada.

Después: resultado, P/L, cuota de cierre, notas sobre el proceso.

Contexto adicional: por qué tomaste la apuesta, qué factores consideraste, cualquier duda que tuvieras.`
      },
      {
        title: 'Organización del Registro',
        content: `Una hoja de cálculo simple funciona bien.

Columnas estandarizadas facilitan filtrado y análisis posterior.

Categoriza por deporte, tipo de mercado, liga. Esto permite análisis segmentado.`
      },
      {
        title: 'Frecuencia de Revisión',
        content: `Revisión semanal: ¿Qué apostaste esta semana? ¿Qué decisiones fueron sólidas? ¿Cuáles fueron dudosas?

Revisión mensual: ¿Cómo va el P/L por categoría? ¿Hay patrones emergentes?

Revisión trimestral: ¿Tu proceso está funcionando? ¿Necesitas ajustar algo fundamental?`
      },
      {
        title: 'Honestidad en el Registro',
        content: `El registro solo es útil si es honesto.

Incluye las pérdidas tanto como las ganancias. Incluye las apuestas de las que no estás orgulloso.

Un registro maquillado es peor que no tener registro porque te engaña a ti mismo.`
      }
    ]
  },
  {
    id: 17,
    slug: 'reviewing-performance',
    title: 'Revisión del Rendimiento',
    subtitle: 'Mantenimiento de registros y aprendizaje de los resultados',
    duration: '20 min lectura',
    sections: [
      {
        title: 'Métricas de Rendimiento',
        content: `ROI (Return on Investment): beneficio dividido por volumen apostado, expresado como porcentaje.

Yield: similar al ROI, mide eficiencia general.

Strike rate: porcentaje de apuestas ganadoras. Por sí solo no indica rentabilidad porque depende de las cuotas.`
      },
      {
        title: 'Análisis por Segmento',
        content: `Desglosa tu rendimiento por deporte, liga, tipo de mercado, rango de cuotas.

A menudo encontrarás que eres rentable en algunas áreas y perdedor en otras.

Esto guía dónde enfocar esfuerzo y dónde retirarte.`
      },
      {
        title: 'CLV como Métrica de Proceso',
        content: `El CLV medio indica si estás capturando valor sistemáticamente.

Un CLV positivo sostenido sugiere buen proceso incluso en períodos de resultados negativos.

Un CLV negativo sostenido sugiere que el mercado sabe algo que tú no.`
      },
      {
        title: 'Distinguir Proceso de Resultado',
        content: `Un buen proceso puede producir malos resultados a corto plazo por varianza.

Un mal proceso puede producir buenos resultados a corto plazo por suerte.

El análisis debe enfocarse en si las decisiones fueron correctas en el momento, no solo en si ganaron.`
      },
      {
        title: 'Ajustes Basados en Datos',
        content: `Cuando los datos sugieren debilidad en un área, tienes opciones: mejorar tu análisis o evitar esa área.

No todas las debilidades son corregibles. A veces la mejor decisión es aceptar límites.

Los ajustes deben ser graduales y basados en muestras suficientes, no en reacciones a rachas cortas.`
      }
    ]
  },
  {
    id: 18,
    slug: 'psychology-discipline-tilt-control',
    title: 'Psicología, Disciplina y Control del Tilt',
    subtitle: 'El lado mental de las apuestas sostenibles',
    duration: '25 min lectura',
    sections: [
      {
        title: 'El Rol de la Psicología',
        content: `La psicología no es un añadido opcional. Es parte central de la operación.

Las mismas habilidades analíticas pueden producir resultados muy diferentes dependiendo de la gestión emocional.

Entender tus patrones psicológicos es tan importante como entender los mercados.`
      },
      {
        title: '¿Qué es el Tilt?',
        content: `Tilt es el estado de tomar decisiones irracionales debido a emociones, típicamente frustración o exceso de confianza.

El tilt después de pérdidas lleva a perseguir pérdidas con apuestas mayores o menos analizadas.

El tilt después de ganancias lleva a exceso de confianza y relajación del proceso.`
      },
      {
        title: 'Señales de Alerta',
        content: `Apuestas impulsivas sin análisis previo.

Aumentar stakes después de pérdidas para "recuperar".

Apostar en deportes o mercados que no conoces porque "necesitas acción".

Sentir que "mereces" ganar después de una racha mala.

Incapacidad de alejarte de la pantalla.`
      },
      {
        title: 'Estrategias de Control',
        content: `Reglas predefinidas sobre stakes máximos y pérdidas diarias que respetas sin excepción.

Pausas obligatorias después de cierto número de apuestas o cierto nivel de pérdida.

Separación física del entorno de apuestas cuando sientes presión emocional.

Recordatorios escritos de por qué tienes tu proceso y qué pasa cuando lo abandonas.`
      },
      {
        title: 'Rutinas Profesionales',
        content: `Los apostadores profesionales tratan la actividad como trabajo, no como entretenimiento.

Horarios definidos para análisis, colocación de apuestas y revisión.

Separación clara entre tiempo de trabajo y tiempo personal.

Métricas regulares de bienestar personal además de métricas de rendimiento.`
      },
      {
        title: 'Sostenibilidad a Largo Plazo',
        content: `Las apuestas profesionales no son sostenibles si destruyen tu salud mental.

El éxito financiero no compensa el deterioro de relaciones, sueño o bienestar general.

Una evaluación honesta de si esta actividad es viable para ti como persona, no solo como apostador.`
      }
    ]
  },
  {
    id: 19,
    slug: 'safer-gambling-standards',
    title: 'Estándares de Juego Responsable',
    subtitle: 'Conciencia normativa y protección personal',
    duration: '15 min lectura',
    sections: [
      {
        title: 'Reconocer el Juego Problemático',
        content: `El juego problemático no siempre es obvio desde dentro.

Señales incluyen: apostar más de lo que puedes permitirte, mentir sobre apuestas, descuidar responsabilidades, incapacidad de parar cuando decides hacerlo.

Si reconoces estas señales en ti mismo, buscar ayuda es un signo de fortaleza, no de debilidad.`
      },
      {
        title: 'Límites y Autoexclusión',
        content: `Las casas de apuestas ofrecen herramientas de límites: depósito, pérdida, sesión.

Los programas de autoexclusión permiten bloquearte de acceso a sitios de apuestas.

Conocer estas herramientas y usarlas proactivamente si sientes que las necesitas.`
      },
      {
        title: 'Recursos de Ayuda',
        content: `Organizaciones como Jugadores Anónimos ofrecen apoyo.

Líneas de ayuda confidenciales están disponibles en la mayoría de países con mercados de apuestas regulados.

La ayuda profesional está disponible y es efectiva.`
      },
      {
        title: 'Regulación y Compliance',
        content: `Las jurisdicciones tienen diferentes niveles de regulación. Conocer las leyes de tu país es tu responsabilidad.

Las casas de apuestas con licencia deben cumplir estándares de protección al consumidor.

Las casas sin licencia ofrecen menos garantías y recurso legal.`
      },
      {
        title: 'Protección de la Integridad',
        content: `El fraude deportivo es ilegal y destruye la integridad de los deportes.

Nunca participes en manipulación de resultados ni aceptes información privilegiada ilegalmente obtenida.

La reputación y la ética a largo plazo valen más que cualquier beneficio a corto plazo.`
      }
    ]
  },
  {
    id: 20,
    slug: 'practical-exercises-and-appendix',
    title: 'Ejercicios Prácticos y Apéndice',
    subtitle: 'Aplicación de los conceptos del programa',
    duration: '20 min lectura',
    sections: [
      {
        title: 'Ejercicio 1: Estimación de Probabilidades',
        content: `Elige 10 partidos próximos en un deporte que conoces.

Sin mirar cuotas, escribe tu estimación de probabilidad para cada resultado.

Luego compara con las probabilidades implícitas del mercado. ¿Dónde hay diferencias? ¿Puedes justificarlas?`
      },
      {
        title: 'Ejercicio 2: Comparación de Líneas',
        content: `Elige 5 partidos.

Compara las cuotas en al menos 5 casas de apuestas diferentes.

Calcula cuánto mejoraría tu resultado usando siempre la mejor cuota disponible versus usando siempre la misma casa.`
      },
      {
        title: 'Ejercicio 3: Paper Trading',
        content: `Antes de apostar dinero real, simula apuestas durante al menos 100 selecciones.

Registra como si fueran reales: cuota, stake, resultado, P/L.

Analiza tu rendimiento simulado antes de comprometer capital.`
      },
      {
        title: 'Ejercicio 4: Análisis de tu Registro',
        content: `Si ya tienes historial de apuestas, analiza tus últimas 100 apuestas.

Categoriza por deporte, tipo de mercado, rango de cuotas.

¿Dónde eres rentable? ¿Dónde perdedor? ¿Qué patrones observas?`
      },
      {
        title: 'Apéndice: Fórmulas Clave',
        content: `**Probabilidad implícita (cuota decimal):** 1 / cuota

**Valor esperado:** (probabilidad × beneficio potencial) - ((1 - probabilidad) × stake)

**ROI:** (beneficio total / volumen apostado) × 100

**Kelly Criterion:** (p × b - q) / b, donde p = probabilidad de ganar, q = probabilidad de perder, b = cuota - 1

**Conversión de cuotas:**
- Decimal a fraccionaria: (decimal - 1) / 1
- Americana positiva a decimal: (americana / 100) + 1
- Americana negativa a decimal: (100 / |americana|) + 1`
      }
    ]
  }
]

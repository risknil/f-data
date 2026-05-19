export interface PrivacySection {
  title: string
  content: string[]
}

export interface PrivacyTranslation {
  pageTitle: string
  lastUpdated: string
  backToHome: string
  sections: PrivacySection[]
}

const enPrivacy: PrivacyTranslation = {
  pageTitle: 'Privacy Policy',
  lastUpdated: 'Last updated: May 2026',
  backToHome: 'Back to RiskNil',
  sections: [
    {
      title: '1. General Disclaimer',
      content: [
        'Risknil.com provides information, data, analysis, and references to third-party resources for informational purposes only.',
        'While we aim to keep information accurate and up to date, we do not guarantee the completeness, reliability, or accuracy of any content published on the site or obtained from third parties. Users access and rely on information at their own discretion and risk.',
        'Risknil.com shall not be liable for any direct, indirect, incidental, or consequential loss, damage, or claims arising from: reliance on information available on the website; inaccuracies, omissions, or outdated information; third-party links, services, or external websites; technical interruptions, errors, or temporary unavailability of the platform.',
        'Users are responsible for how they use the information and services provided through the website.'
      ]
    },
    {
      title: '2. Information We Collect',
      content: [
        'Visitors may browse Risknil.com without creating an account or directly providing personal information.',
        'We may collect personal data when users: register an account; contact us through forms or email; subscribe to newsletters or updates; submit inquiries or communicate with us.',
        'The information we may collect includes: email address; IP address; country or region information (primarily for content contributors); any information voluntarily submitted by the user.',
        'We may also automatically collect limited technical and usage information through cookies and analytics technologies as described below.'
      ]
    },
    {
      title: '3. How We Use Information',
      content: [
        'Risknil.com may use collected information for purposes including: operating and maintaining the website; communicating with users; responding to inquiries or support requests; improving website functionality and user experience; monitoring platform security and preventing unauthorized access or abuse; analyzing website traffic and performance; complying with legal obligations.',
        'We process personal data only where reasonably necessary for legitimate business and operational purposes.'
      ]
    },
    {
      title: '4. User Access and Control',
      content: [
        'Registered users may access, review, or update their account information at any time through their account settings where available.',
        'Users may also request: correction of inaccurate information; deletion of their account and associated personal data; deletion of account-related information where applicable and legally permissible.',
        'We reserve the right to retain certain information where required for legal, security, fraud prevention, or legitimate operational reasons.'
      ]
    },
    {
      title: '5. Data Retention',
      content: [
        'Personal information may be retained for as long as necessary to operate the platform, provide services, comply with legal obligations, resolve disputes, or enforce agreements.',
        'Unless otherwise requested by the user or required by law, account-related information may be stored indefinitely.',
        'Upon a verified deletion request, we will make reasonable efforts to remove or anonymize personal data within a reasonable timeframe, except where retention is legally required.'
      ]
    },
    {
      title: '6. Data Security',
      content: [
        'Risknil.com implements reasonable technical, administrative, and organizational measures designed to protect personal information against unauthorized access, misuse, loss, alteration, or disclosure.',
        'However, no method of electronic transmission or storage is completely secure, and we cannot guarantee absolute security of information transmitted through the internet.'
      ]
    },
    {
      title: '7. Sharing of Information',
      content: [
        'Risknil.com does not sell, rent, or lease personal information to third parties.',
        'We may disclose information only: where required by applicable law, regulation, legal process, or governmental request; to protect the rights, property, security, or integrity of Risknil.com, its users, or the public; in connection with fraud prevention, abuse detection, or enforcement of our policies.',
        'We may use carefully selected third-party service providers for analytics, infrastructure, security, email delivery, or operational purposes. Such providers may process limited information solely on our behalf and under appropriate confidentiality obligations.'
      ]
    },
    {
      title: '8. Cookies and Tracking Technologies',
      content: [
        'Risknil.com uses cookies and similar technologies to improve functionality, maintain sessions, analyze traffic, and enhance user experience.',
        'A cookie is a small text file stored on a user\'s device by the browser.',
        'By continuing to use the website, users consent to the use of cookies in accordance with this Privacy Policy.',
        'Types of cookies we may use:',
        'Essential Cookies: These cookies are necessary for core website functionality, including login sessions, security, and account authentication. Session cookies may be deleted automatically when the browser closes unless a "Remember Me" or similar option is selected, which may store login information for an extended period.',
        'Analytics Cookies: We may use third-party analytics providers such as Google Analytics, Statcounter, or similar services to better understand website traffic, visitor behavior, and platform performance. These cookies generally collect aggregated and non-identifiable usage information and are used to improve the website and user experience.',
        'Users can usually control or disable cookies through their browser settings. More information about cookies can be found at: https://www.allaboutcookies.org'
      ]
    },
    {
      title: '9. Third-Party Links',
      content: [
        'Risknil.com may contain links to external websites, services, or resources operated by third parties.',
        'We do not control and are not responsible for the privacy practices, security, or content of third-party websites. Accessing third-party sites is done at the user\'s own risk.',
        'Users should review the privacy policies of any external websites they visit.'
      ]
    },
    {
      title: '10. International Use',
      content: [
        'Risknil.com may be accessed from countries worldwide. By using the website, users understand that their information may be processed and stored in jurisdictions where privacy laws may differ from those in their own country.'
      ]
    },
    {
      title: '11. Children\'s Privacy',
      content: [
        'Risknil.com is not intended for use by individuals under the age required by applicable law to consent to data processing in their jurisdiction. We do not knowingly collect personal information from children.',
        'If we become aware that personal data from a child has been collected without appropriate consent, we may take steps to delete such information.'
      ]
    },
    {
      title: '12. Changes to This Privacy Policy',
      content: [
        'We may update or modify this Privacy Policy at any time without prior notice.',
        'Any changes become effective once published on Risknil.com. Continued use of the website after updates are posted constitutes acceptance of the revised Privacy Policy.'
      ]
    },
    {
      title: '13. Contact',
      content: [
        'For privacy-related questions, requests, or concerns, users may contact Risknil.com through the contact methods provided on the website.'
      ]
    }
  ]
}

const esPrivacy: PrivacyTranslation = {
  pageTitle: 'Política de Privacidad',
  lastUpdated: 'Última actualización: Mayo 2026',
  backToHome: 'Volver a RiskNil',
  sections: [
    {
      title: '1. Aviso General',
      content: [
        'Risknil.com proporciona información, datos, análisis y referencias a recursos de terceros únicamente con fines informativos.',
        'Aunque nos esforzamos por mantener la información precisa y actualizada, no garantizamos la integridad, fiabilidad o exactitud de cualquier contenido publicado en el sitio u obtenido de terceros. Los usuarios acceden y confían en la información bajo su propia discreción y riesgo.',
        'Risknil.com no será responsable de ninguna pérdida, daño o reclamación directa, indirecta, incidental o consecuente que surja de: la confianza en la información disponible en el sitio web; inexactitudes, omisiones o información desactualizada; enlaces, servicios o sitios web externos de terceros; interrupciones técnicas, errores o indisponibilidad temporal de la plataforma.',
        'Los usuarios son responsables de cómo utilizan la información y los servicios proporcionados a través del sitio web.'
      ]
    },
    {
      title: '2. Información que Recopilamos',
      content: [
        'Los visitantes pueden navegar por Risknil.com sin crear una cuenta ni proporcionar directamente información personal.',
        'Podemos recopilar datos personales cuando los usuarios: registran una cuenta; nos contactan a través de formularios o correo electrónico; se suscriben a boletines o actualizaciones; envían consultas o se comunican con nosotros.',
        'La información que podemos recopilar incluye: dirección de correo electrónico; dirección IP; información de país o región (principalmente para contribuyentes de contenido); cualquier información enviada voluntariamente por el usuario.',
        'También podemos recopilar automáticamente información técnica y de uso limitada a través de cookies y tecnologías de análisis como se describe a continuación.'
      ]
    },
    {
      title: '3. Cómo Usamos la Información',
      content: [
        'Risknil.com puede usar la información recopilada para propósitos que incluyen: operar y mantener el sitio web; comunicarse con los usuarios; responder a consultas o solicitudes de soporte; mejorar la funcionalidad del sitio web y la experiencia del usuario; monitorear la seguridad de la plataforma y prevenir accesos no autorizados o abusos; analizar el tráfico y rendimiento del sitio web; cumplir con obligaciones legales.',
        'Procesamos datos personales solo cuando es razonablemente necesario para propósitos comerciales y operativos legítimos.'
      ]
    },
    {
      title: '4. Acceso y Control del Usuario',
      content: [
        'Los usuarios registrados pueden acceder, revisar o actualizar la información de su cuenta en cualquier momento a través de la configuración de su cuenta cuando esté disponible.',
        'Los usuarios también pueden solicitar: corrección de información inexacta; eliminación de su cuenta y datos personales asociados; eliminación de información relacionada con la cuenta cuando sea aplicable y legalmente permisible.',
        'Nos reservamos el derecho de retener cierta información cuando sea necesario por razones legales, de seguridad, prevención de fraude o razones operativas legítimas.'
      ]
    },
    {
      title: '5. Retención de Datos',
      content: [
        'La información personal puede ser retenida durante el tiempo necesario para operar la plataforma, proporcionar servicios, cumplir con obligaciones legales, resolver disputas o hacer cumplir acuerdos.',
        'A menos que el usuario lo solicite o la ley lo requiera, la información relacionada con la cuenta puede almacenarse indefinidamente.',
        'Tras una solicitud de eliminación verificada, haremos esfuerzos razonables para eliminar o anonimizar los datos personales en un plazo razonable, excepto cuando la retención sea legalmente requerida.'
      ]
    },
    {
      title: '6. Seguridad de Datos',
      content: [
        'Risknil.com implementa medidas técnicas, administrativas y organizativas razonables diseñadas para proteger la información personal contra accesos no autorizados, uso indebido, pérdida, alteración o divulgación.',
        'Sin embargo, ningún método de transmisión electrónica o almacenamiento es completamente seguro, y no podemos garantizar la seguridad absoluta de la información transmitida a través de internet.'
      ]
    },
    {
      title: '7. Compartir Información',
      content: [
        'Risknil.com no vende, alquila ni cede información personal a terceros.',
        'Podemos divulgar información solo: cuando lo requiera la ley aplicable, regulación, proceso legal o solicitud gubernamental; para proteger los derechos, propiedad, seguridad o integridad de Risknil.com, sus usuarios o el público; en relación con la prevención de fraude, detección de abusos o aplicación de nuestras políticas.',
        'Podemos utilizar proveedores de servicios de terceros cuidadosamente seleccionados para análisis, infraestructura, seguridad, envío de correos electrónicos o propósitos operativos. Dichos proveedores pueden procesar información limitada únicamente en nuestro nombre y bajo obligaciones de confidencialidad apropiadas.'
      ]
    },
    {
      title: '8. Cookies y Tecnologías de Seguimiento',
      content: [
        'Risknil.com utiliza cookies y tecnologías similares para mejorar la funcionalidad, mantener sesiones, analizar el tráfico y mejorar la experiencia del usuario.',
        'Una cookie es un pequeño archivo de texto almacenado en el dispositivo del usuario por el navegador.',
        'Al continuar usando el sitio web, los usuarios consienten el uso de cookies de acuerdo con esta Política de Privacidad.',
        'Tipos de cookies que podemos usar:',
        'Cookies Esenciales: Estas cookies son necesarias para la funcionalidad básica del sitio web, incluyendo sesiones de inicio de sesión, seguridad y autenticación de cuentas. Las cookies de sesión pueden eliminarse automáticamente cuando se cierra el navegador a menos que se seleccione una opción "Recordarme" o similar.',
        'Cookies de Análisis: Podemos usar proveedores de análisis de terceros como Google Analytics, Statcounter o servicios similares para comprender mejor el tráfico del sitio web, el comportamiento de los visitantes y el rendimiento de la plataforma.',
        'Los usuarios generalmente pueden controlar o desactivar las cookies a través de la configuración de su navegador. Más información sobre cookies en: https://www.allaboutcookies.org'
      ]
    },
    {
      title: '9. Enlaces de Terceros',
      content: [
        'Risknil.com puede contener enlaces a sitios web, servicios o recursos externos operados por terceros.',
        'No controlamos ni somos responsables de las prácticas de privacidad, seguridad o contenido de sitios web de terceros. El acceso a sitios de terceros se realiza bajo el propio riesgo del usuario.',
        'Los usuarios deben revisar las políticas de privacidad de cualquier sitio web externo que visiten.'
      ]
    },
    {
      title: '10. Uso Internacional',
      content: [
        'Se puede acceder a Risknil.com desde países de todo el mundo. Al usar el sitio web, los usuarios entienden que su información puede ser procesada y almacenada en jurisdicciones donde las leyes de privacidad pueden diferir de las de su propio país.'
      ]
    },
    {
      title: '11. Privacidad de Menores',
      content: [
        'Risknil.com no está destinado para uso por personas menores de la edad requerida por la ley aplicable para consentir el procesamiento de datos en su jurisdicción. No recopilamos conscientemente información personal de niños.',
        'Si nos enteramos de que se han recopilado datos personales de un niño sin el consentimiento apropiado, podemos tomar medidas para eliminar dicha información.'
      ]
    },
    {
      title: '12. Cambios a Esta Política de Privacidad',
      content: [
        'Podemos actualizar o modificar esta Política de Privacidad en cualquier momento sin previo aviso.',
        'Cualquier cambio entra en vigor una vez publicado en Risknil.com. El uso continuado del sitio web después de que se publiquen actualizaciones constituye la aceptación de la Política de Privacidad revisada.'
      ]
    },
    {
      title: '13. Contacto',
      content: [
        'Para preguntas, solicitudes o inquietudes relacionadas con la privacidad, los usuarios pueden contactar a Risknil.com a través de los métodos de contacto proporcionados en el sitio web.'
      ]
    }
  ]
}

const ptPrivacy: PrivacyTranslation = {
  pageTitle: 'Política de Privacidade',
  lastUpdated: 'Última atualização: Maio 2026',
  backToHome: 'Voltar ao RiskNil',
  sections: [
    {
      title: '1. Aviso Geral',
      content: [
        'Risknil.com fornece informações, dados, análises e referências a recursos de terceiros apenas para fins informativos.',
        'Embora nos esforcemos para manter as informações precisas e atualizadas, não garantimos a completude, confiabilidade ou precisão de qualquer conteúdo publicado no site ou obtido de terceiros. Os usuários acessam e confiam nas informações por sua própria conta e risco.',
        'Risknil.com não será responsável por qualquer perda, dano ou reclamação direta, indireta, incidental ou consequente decorrente de: confiança nas informações disponíveis no site; imprecisões, omissões ou informações desatualizadas; links, serviços ou sites externos de terceiros; interrupções técnicas, erros ou indisponibilidade temporária da plataforma.',
        'Os usuários são responsáveis por como usam as informações e serviços fornecidos através do site.'
      ]
    },
    {
      title: '2. Informações que Coletamos',
      content: [
        'Os visitantes podem navegar no Risknil.com sem criar uma conta ou fornecer diretamente informações pessoais.',
        'Podemos coletar dados pessoais quando os usuários: registram uma conta; nos contatam através de formulários ou e-mail; assinam boletins ou atualizações; enviam consultas ou se comunicam conosco.',
        'As informações que podemos coletar incluem: endereço de e-mail; endereço IP; informações de país ou região (principalmente para contribuidores de conteúdo); qualquer informação enviada voluntariamente pelo usuário.',
        'Também podemos coletar automaticamente informações técnicas e de uso limitadas através de cookies e tecnologias de análise conforme descrito abaixo.'
      ]
    },
    {
      title: '3. Como Usamos as Informações',
      content: [
        'Risknil.com pode usar as informações coletadas para fins que incluem: operar e manter o site; comunicar-se com os usuários; responder a consultas ou solicitações de suporte; melhorar a funcionalidade do site e a experiência do usuário; monitorar a segurança da plataforma e prevenir acessos não autorizados ou abusos; analisar o tráfego e desempenho do site; cumprir obrigações legais.',
        'Processamos dados pessoais apenas quando razoavelmente necessário para fins comerciais e operacionais legítimos.'
      ]
    },
    {
      title: '4. Acesso e Controle do Usuário',
      content: [
        'Usuários registrados podem acessar, revisar ou atualizar as informações de sua conta a qualquer momento através das configurações de sua conta quando disponível.',
        'Os usuários também podem solicitar: correção de informações imprecisas; exclusão de sua conta e dados pessoais associados; exclusão de informações relacionadas à conta quando aplicável e legalmente permitido.',
        'Reservamo-nos o direito de reter certas informações quando necessário por razões legais, de segurança, prevenção de fraude ou razões operacionais legítimas.'
      ]
    },
    {
      title: '5. Retenção de Dados',
      content: [
        'As informações pessoais podem ser retidas pelo tempo necessário para operar a plataforma, fornecer serviços, cumprir obrigações legais, resolver disputas ou fazer cumprir acordos.',
        'A menos que solicitado pelo usuário ou exigido por lei, as informações relacionadas à conta podem ser armazenadas indefinidamente.',
        'Após uma solicitação de exclusão verificada, faremos esforços razoáveis para remover ou anonimizar dados pessoais dentro de um prazo razoável, exceto quando a retenção for legalmente exigida.'
      ]
    },
    {
      title: '6. Segurança de Dados',
      content: [
        'Risknil.com implementa medidas técnicas, administrativas e organizacionais razoáveis projetadas para proteger informações pessoais contra acesso não autorizado, uso indevido, perda, alteração ou divulgação.',
        'No entanto, nenhum método de transmissão eletrônica ou armazenamento é completamente seguro, e não podemos garantir a segurança absoluta das informações transmitidas pela internet.'
      ]
    },
    {
      title: '7. Compartilhamento de Informações',
      content: [
        'Risknil.com não vende, aluga ou cede informações pessoais a terceiros.',
        'Podemos divulgar informações apenas: quando exigido por lei aplicável, regulamento, processo legal ou solicitação governamental; para proteger os direitos, propriedade, segurança ou integridade do Risknil.com, seus usuários ou o público; em conexão com prevenção de fraude, detecção de abuso ou aplicação de nossas políticas.',
        'Podemos usar provedores de serviços terceirizados cuidadosamente selecionados para análises, infraestrutura, segurança, entrega de e-mail ou fins operacionais. Tais provedores podem processar informações limitadas apenas em nosso nome e sob obrigações de confidencialidade apropriadas.'
      ]
    },
    {
      title: '8. Cookies e Tecnologias de Rastreamento',
      content: [
        'Risknil.com usa cookies e tecnologias similares para melhorar a funcionalidade, manter sessões, analisar tráfego e melhorar a experiência do usuário.',
        'Um cookie é um pequeno arquivo de texto armazenado no dispositivo do usuário pelo navegador.',
        'Ao continuar usando o site, os usuários consentem com o uso de cookies de acordo com esta Política de Privacidade.',
        'Tipos de cookies que podemos usar:',
        'Cookies Essenciais: Estes cookies são necessários para a funcionalidade básica do site, incluindo sessões de login, segurança e autenticação de conta. Os cookies de sessão podem ser excluídos automaticamente quando o navegador fecha, a menos que uma opção "Lembrar-me" ou similar seja selecionada.',
        'Cookies de Análise: Podemos usar provedores de análise terceirizados como Google Analytics, Statcounter ou serviços similares para entender melhor o tráfego do site, comportamento dos visitantes e desempenho da plataforma.',
        'Os usuários geralmente podem controlar ou desativar cookies através das configurações do navegador. Mais informações sobre cookies em: https://www.allaboutcookies.org'
      ]
    },
    {
      title: '9. Links de Terceiros',
      content: [
        'Risknil.com pode conter links para sites, serviços ou recursos externos operados por terceiros.',
        'Não controlamos e não somos responsáveis pelas práticas de privacidade, segurança ou conteúdo de sites de terceiros. O acesso a sites de terceiros é feito por conta e risco do usuário.',
        'Os usuários devem revisar as políticas de privacidade de quaisquer sites externos que visitarem.'
      ]
    },
    {
      title: '10. Uso Internacional',
      content: [
        'Risknil.com pode ser acessado de países em todo o mundo. Ao usar o site, os usuários entendem que suas informações podem ser processadas e armazenadas em jurisdições onde as leis de privacidade podem diferir das de seu próprio país.'
      ]
    },
    {
      title: '11. Privacidade de Menores',
      content: [
        'Risknil.com não é destinado ao uso por indivíduos menores de idade exigida pela lei aplicável para consentir com o processamento de dados em sua jurisdição. Não coletamos conscientemente informações pessoais de crianças.',
        'Se tomarmos conhecimento de que dados pessoais de uma criança foram coletados sem o consentimento apropriado, podemos tomar medidas para excluir tais informações.'
      ]
    },
    {
      title: '12. Alterações a Esta Política de Privacidade',
      content: [
        'Podemos atualizar ou modificar esta Política de Privacidade a qualquer momento sem aviso prévio.',
        'Quaisquer alterações entram em vigor uma vez publicadas no Risknil.com. O uso continuado do site após a publicação de atualizações constitui aceitação da Política de Privacidade revisada.'
      ]
    },
    {
      title: '13. Contato',
      content: [
        'Para perguntas, solicitações ou preocupações relacionadas à privacidade, os usuários podem contatar o Risknil.com através dos métodos de contato fornecidos no site.'
      ]
    }
  ]
}

const dePrivacy: PrivacyTranslation = {
  pageTitle: 'Datenschutzrichtlinie',
  lastUpdated: 'Letzte Aktualisierung: Mai 2026',
  backToHome: 'Zurück zu RiskNil',
  sections: [
    {
      title: '1. Allgemeiner Haftungsausschluss',
      content: [
        'Risknil.com stellt Informationen, Daten, Analysen und Verweise auf Drittanbieter-Ressourcen ausschließlich zu Informationszwecken bereit.',
        'Obwohl wir bestrebt sind, Informationen genau und aktuell zu halten, garantieren wir nicht die Vollständigkeit, Zuverlässigkeit oder Genauigkeit von Inhalten, die auf der Website veröffentlicht oder von Dritten bezogen werden. Benutzer greifen auf Informationen nach eigenem Ermessen und auf eigenes Risiko zu.',
        'Risknil.com haftet nicht für direkte, indirekte, zufällige oder Folgeschäden, Verluste oder Ansprüche, die sich ergeben aus: Vertrauen auf auf der Website verfügbare Informationen; Ungenauigkeiten, Auslassungen oder veraltete Informationen; Links, Dienste oder externe Websites Dritter; technische Unterbrechungen, Fehler oder vorübergehende Nichtverfügbarkeit der Plattform.',
        'Benutzer sind für die Art und Weise verantwortlich, wie sie die über die Website bereitgestellten Informationen und Dienste nutzen.'
      ]
    },
    {
      title: '2. Informationen, die wir sammeln',
      content: [
        'Besucher können Risknil.com durchsuchen, ohne ein Konto zu erstellen oder direkt persönliche Informationen anzugeben.',
        'Wir können personenbezogene Daten sammeln, wenn Benutzer: ein Konto registrieren; uns über Formulare oder E-Mail kontaktieren; Newsletter oder Updates abonnieren; Anfragen stellen oder mit uns kommunizieren.',
        'Die Informationen, die wir sammeln können, umfassen: E-Mail-Adresse; IP-Adresse; Länder- oder Regionsinformationen (hauptsächlich für Inhaltsanbieter); alle vom Benutzer freiwillig übermittelten Informationen.',
        'Wir können auch automatisch begrenzte technische und Nutzungsinformationen durch Cookies und Analysetechnologien sammeln, wie unten beschrieben.'
      ]
    },
    {
      title: '3. Wie wir Informationen verwenden',
      content: [
        'Risknil.com kann gesammelte Informationen für Zwecke verwenden, einschließlich: Betrieb und Wartung der Website; Kommunikation mit Benutzern; Beantwortung von Anfragen oder Supportanfragen; Verbesserung der Website-Funktionalität und Benutzererfahrung; Überwachung der Plattformsicherheit und Verhinderung unbefugten Zugriffs oder Missbrauchs; Analyse von Website-Traffic und -Leistung; Erfüllung rechtlicher Verpflichtungen.',
        'Wir verarbeiten personenbezogene Daten nur, wenn dies für legitime geschäftliche und betriebliche Zwecke angemessen erforderlich ist.'
      ]
    },
    {
      title: '4. Benutzerzugang und -kontrolle',
      content: [
        'Registrierte Benutzer können jederzeit über ihre Kontoeinstellungen auf ihre Kontoinformationen zugreifen, diese überprüfen oder aktualisieren, sofern verfügbar.',
        'Benutzer können auch Folgendes anfordern: Korrektur ungenauer Informationen; Löschung ihres Kontos und zugehöriger personenbezogener Daten; Löschung kontobezogener Informationen, sofern zutreffend und rechtlich zulässig.',
        'Wir behalten uns das Recht vor, bestimmte Informationen aufzubewahren, wenn dies aus rechtlichen, sicherheits-, betrugspräventions- oder legitimen betrieblichen Gründen erforderlich ist.'
      ]
    },
    {
      title: '5. Datenaufbewahrung',
      content: [
        'Personenbezogene Daten können so lange aufbewahrt werden, wie es für den Betrieb der Plattform, die Bereitstellung von Diensten, die Erfüllung rechtlicher Verpflichtungen, die Beilegung von Streitigkeiten oder die Durchsetzung von Vereinbarungen erforderlich ist.',
        'Sofern vom Benutzer nicht anders angefordert oder gesetzlich vorgeschrieben, können kontobezogene Informationen unbefristet gespeichert werden.',
        'Nach einer verifizierten Löschanfrage werden wir angemessene Anstrengungen unternehmen, um personenbezogene Daten innerhalb eines angemessenen Zeitraums zu entfernen oder zu anonymisieren, außer wenn die Aufbewahrung gesetzlich vorgeschrieben ist.'
      ]
    },
    {
      title: '6. Datensicherheit',
      content: [
        'Risknil.com implementiert angemessene technische, administrative und organisatorische Maßnahmen zum Schutz personenbezogener Daten vor unbefugtem Zugriff, Missbrauch, Verlust, Änderung oder Offenlegung.',
        'Keine Methode der elektronischen Übertragung oder Speicherung ist jedoch vollständig sicher, und wir können keine absolute Sicherheit der über das Internet übertragenen Informationen garantieren.'
      ]
    },
    {
      title: '7. Weitergabe von Informationen',
      content: [
        'Risknil.com verkauft, vermietet oder verleast keine personenbezogenen Daten an Dritte.',
        'Wir können Informationen nur offenlegen: wenn dies durch geltendes Recht, Verordnung, rechtliches Verfahren oder behördliche Anfrage erforderlich ist; zum Schutz der Rechte, des Eigentums, der Sicherheit oder der Integrität von Risknil.com, seinen Benutzern oder der Öffentlichkeit; im Zusammenhang mit Betrugsprävention, Missbrauchserkennung oder Durchsetzung unserer Richtlinien.',
        'Wir können sorgfältig ausgewählte Drittanbieter für Analysen, Infrastruktur, Sicherheit, E-Mail-Zustellung oder betriebliche Zwecke nutzen. Solche Anbieter können begrenzte Informationen ausschließlich in unserem Auftrag und unter angemessenen Vertraulichkeitsverpflichtungen verarbeiten.'
      ]
    },
    {
      title: '8. Cookies und Tracking-Technologien',
      content: [
        'Risknil.com verwendet Cookies und ähnliche Technologien zur Verbesserung der Funktionalität, Aufrechterhaltung von Sitzungen, Analyse des Traffics und Verbesserung der Benutzererfahrung.',
        'Ein Cookie ist eine kleine Textdatei, die vom Browser auf dem Gerät des Benutzers gespeichert wird.',
        'Durch die weitere Nutzung der Website stimmen Benutzer der Verwendung von Cookies gemäß dieser Datenschutzrichtlinie zu.',
        'Arten von Cookies, die wir verwenden können:',
        'Essentielle Cookies: Diese Cookies sind für die grundlegende Website-Funktionalität erforderlich, einschließlich Anmeldesitzungen, Sicherheit und Kontoauthentifizierung. Sitzungscookies können automatisch gelöscht werden, wenn der Browser geschlossen wird, es sei denn, eine "Angemeldet bleiben"-Option oder ähnliches wird ausgewählt.',
        'Analyse-Cookies: Wir können Drittanbieter-Analysedienste wie Google Analytics, Statcounter oder ähnliche Dienste nutzen, um den Website-Traffic, das Besucherverhalten und die Plattformleistung besser zu verstehen.',
        'Benutzer können Cookies in der Regel über ihre Browsereinstellungen steuern oder deaktivieren. Weitere Informationen über Cookies finden Sie unter: https://www.allaboutcookies.org'
      ]
    },
    {
      title: '9. Links zu Dritten',
      content: [
        'Risknil.com kann Links zu externen Websites, Diensten oder Ressourcen enthalten, die von Dritten betrieben werden.',
        'Wir kontrollieren nicht und sind nicht verantwortlich für die Datenschutzpraktiken, Sicherheit oder Inhalte von Drittanbieter-Websites. Der Zugriff auf Drittanbieter-Seiten erfolgt auf eigenes Risiko des Benutzers.',
        'Benutzer sollten die Datenschutzrichtlinien aller externen Websites, die sie besuchen, überprüfen.'
      ]
    },
    {
      title: '10. Internationale Nutzung',
      content: [
        'Auf Risknil.com kann aus Ländern weltweit zugegriffen werden. Durch die Nutzung der Website verstehen Benutzer, dass ihre Informationen in Rechtsgebieten verarbeitet und gespeichert werden können, in denen die Datenschutzgesetze von denen ihres eigenen Landes abweichen können.'
      ]
    },
    {
      title: '11. Datenschutz für Kinder',
      content: [
        'Risknil.com ist nicht für die Nutzung durch Personen bestimmt, die das nach geltendem Recht erforderliche Alter für die Einwilligung in die Datenverarbeitung in ihrer Rechtsordnung noch nicht erreicht haben. Wir sammeln wissentlich keine personenbezogenen Daten von Kindern.',
        'Wenn wir erfahren, dass personenbezogene Daten eines Kindes ohne entsprechende Einwilligung gesammelt wurden, können wir Maßnahmen zur Löschung dieser Informationen ergreifen.'
      ]
    },
    {
      title: '12. Änderungen dieser Datenschutzrichtlinie',
      content: [
        'Wir können diese Datenschutzrichtlinie jederzeit ohne vorherige Ankündigung aktualisieren oder ändern.',
        'Änderungen werden wirksam, sobald sie auf Risknil.com veröffentlicht werden. Die fortgesetzte Nutzung der Website nach Veröffentlichung von Aktualisierungen gilt als Annahme der überarbeiteten Datenschutzrichtlinie.'
      ]
    },
    {
      title: '13. Kontakt',
      content: [
        'Für datenschutzbezogene Fragen, Anfragen oder Bedenken können Benutzer Risknil.com über die auf der Website angegebenen Kontaktmethoden kontaktieren.'
      ]
    }
  ]
}

const huPrivacy: PrivacyTranslation = {
  pageTitle: 'Adatvédelmi Irányelvek',
  lastUpdated: 'Utolsó frissítés: 2026. május',
  backToHome: 'Vissza a RiskNil-hez',
  sections: [
    {
      title: '1. Általános Nyilatkozat',
      content: [
        'A Risknil.com információkat, adatokat, elemzéseket és harmadik féltől származó erőforrásokra való hivatkozásokat kizárólag tájékoztatási célból biztosít.',
        'Bár törekszünk az információk pontosságára és naprakészen tartására, nem garantáljuk az oldalon közzétett vagy harmadik felektől szerzett tartalmak teljességét, megbízhatóságát vagy pontosságát. A felhasználók saját belátásuk és kockázatuk szerint férnek hozzá az információkhoz.',
        'A Risknil.com nem vállal felelősséget semmilyen közvetlen, közvetett, véletlen vagy következményes veszteségért, kárért vagy követelésért, amely a következőkből ered: az oldalon elérhető információkra való támaszkodás; pontatlanságok, hiányosságok vagy elavult információk; harmadik felek linkjei, szolgáltatásai vagy külső weboldalai; technikai megszakítások, hibák vagy a platform ideiglenes elérhetetlensége.',
        'A felhasználók felelősek azért, hogyan használják a weboldalon keresztül nyújtott információkat és szolgáltatásokat.'
      ]
    },
    {
      title: '2. Gyűjtött Információk',
      content: [
        'A látogatók fiók létrehozása vagy személyes adatok közvetlen megadása nélkül böngészhetnek a Risknil.com oldalon.',
        'Személyes adatokat gyűjthetünk, amikor a felhasználók: fiókot regisztrálnak; űrlapokon vagy e-mailben kapcsolatba lépnek velünk; hírlevelekre vagy frissítésekre iratkoznak fel; kérdéseket küldenek vagy kommunikálnak velünk.',
        'A gyűjthető információk közé tartozik: e-mail cím; IP-cím; ország vagy régió információ (elsősorban tartalomszolgáltatók esetében); a felhasználó által önkéntesen megadott bármilyen információ.',
        'Automatikusan is gyűjthetünk korlátozott technikai és használati információkat cookie-k és elemzési technológiák révén, az alábbiakban leírtak szerint.'
      ]
    },
    {
      title: '3. Az Információk Felhasználása',
      content: [
        'A Risknil.com a gyűjtött információkat a következő célokra használhatja: a weboldal működtetése és karbantartása; kommunikáció a felhasználókkal; kérdésekre vagy támogatási kérésekre való válaszadás; a weboldal funkcionalitásának és felhasználói élményének javítása; a platform biztonságának figyelése és az illetéktelen hozzáférés vagy visszaélés megelőzése; a weboldal forgalmának és teljesítményének elemzése; jogi kötelezettségek teljesítése.',
        'Személyes adatokat csak akkor dolgozunk fel, ha az ésszerűen szükséges törvényes üzleti és működési célokra.'
      ]
    },
    {
      title: '4. Felhasználói Hozzáférés és Ellenőrzés',
      content: [
        'A regisztrált felhasználók bármikor hozzáférhetnek, megtekinthetik vagy frissíthetik fiókadataikat a fiókbeállításokon keresztül, ahol elérhető.',
        'A felhasználók kérhetik továbbá: pontatlan információk javítását; fiókjuk és a kapcsolódó személyes adatok törlését; fiókkal kapcsolatos információk törlését, ahol alkalmazható és jogilag megengedett.',
        'Fenntartjuk a jogot bizonyos információk megőrzésére, ahol jogi, biztonsági, csalásmegelőzési vagy jogos működési okokból szükséges.'
      ]
    },
    {
      title: '5. Adatmegőrzés',
      content: [
        'A személyes adatokat addig őrizhetjük meg, amíg az szükséges a platform működtetéséhez, szolgáltatások nyújtásához, jogi kötelezettségek teljesítéséhez, viták rendezéséhez vagy megállapodások érvényesítéséhez.',
        'Hacsak a felhasználó másként nem kéri vagy a törvény nem írja elő, a fiókkal kapcsolatos információk határozatlan ideig tárolhatók.',
        'Ellenőrzött törlési kérelem után ésszerű erőfeszítéseket teszünk a személyes adatok eltávolítására vagy anonimizálására ésszerű időn belül, kivéve, ha a megőrzés jogilag kötelező.'
      ]
    },
    {
      title: '6. Adatbiztonság',
      content: [
        'A Risknil.com ésszerű technikai, adminisztratív és szervezeti intézkedéseket alkalmaz a személyes adatok védelme érdekében az illetéktelen hozzáférés, visszaélés, elvesztés, módosítás vagy nyilvánosságra hozatal ellen.',
        'Azonban az elektronikus átvitel vagy tárolás egyetlen módszere sem teljesen biztonságos, és nem tudjuk garantálni az interneten keresztül továbbított információk abszolút biztonságát.'
      ]
    },
    {
      title: '7. Információk Megosztása',
      content: [
        'A Risknil.com nem értékesíti, nem adja bérbe és nem adja kölcsön személyes adatait harmadik feleknek.',
        'Információkat csak akkor hozhatunk nyilvánosságra: ha azt alkalmazandó törvény, rendelet, jogi eljárás vagy kormányzati kérés megköveteli; a Risknil.com, felhasználói vagy a nyilvánosság jogainak, tulajdonának, biztonságának vagy integritásának védelme érdekében; csalásmegelőzéssel, visszaélés-felderítéssel vagy irányelveink érvényesítésével kapcsolatban.',
        'Gondosan kiválasztott harmadik fél szolgáltatókat használhatunk elemzéshez, infrastruktúrához, biztonsághoz, e-mail kézbesítéshez vagy működési célokra. Az ilyen szolgáltatók korlátozott információkat kizárólag a nevünkben és megfelelő titoktartási kötelezettségek mellett dolgozhatnak fel.'
      ]
    },
    {
      title: '8. Cookie-k és Követési Technológiák',
      content: [
        'A Risknil.com cookie-kat és hasonló technológiákat használ a funkcionalitás javítására, munkamenetek fenntartására, forgalom elemzésére és a felhasználói élmény fokozására.',
        'A cookie egy kis szöveges fájl, amelyet a böngésző a felhasználó eszközén tárol.',
        'A weboldal további használatával a felhasználók hozzájárulnak a cookie-k használatához a jelen Adatvédelmi Irányelveknek megfelelően.',
        'Cookie-típusok, amelyeket használhatunk:',
        'Alapvető Cookie-k: Ezek a cookie-k szükségesek az alapvető weboldal funkcionalitáshoz, beleértve a bejelentkezési munkameneteket, biztonságot és fiók hitelesítést. A munkamenet cookie-k automatikusan törlődhetnek a böngésző bezárásakor, kivéve, ha "Emlékezz rám" vagy hasonló opció van kiválasztva.',
        'Elemzési Cookie-k: Harmadik fél elemzési szolgáltatókat használhatunk, mint a Google Analytics, Statcounter vagy hasonló szolgáltatások, hogy jobban megértsük a weboldal forgalmát, a látogatói viselkedést és a platform teljesítményét.',
        'A felhasználók általában a böngésző beállításain keresztül kezelhetik vagy letilthatják a cookie-kat. További információ a cookie-król: https://www.allaboutcookies.org'
      ]
    },
    {
      title: '9. Harmadik Fél Linkjei',
      content: [
        'A Risknil.com tartalmazhat linkeket harmadik felek által üzemeltetett külső weboldalakra, szolgáltatásokra vagy erőforrásokra.',
        'Nem ellenőrizzük és nem vagyunk felelősek a harmadik fél weboldalak adatvédelmi gyakorlatáért, biztonságáért vagy tartalmáért. A harmadik fél oldalakhoz való hozzáférés a felhasználó saját kockázatára történik.',
        'A felhasználóknak át kell tekinteniük minden általuk látogatott külső weboldal adatvédelmi irányelveit.'
      ]
    },
    {
      title: '10. Nemzetközi Használat',
      content: [
        'A Risknil.com a világ országaiból érhető el. A weboldal használatával a felhasználók megértik, hogy adataik olyan joghatóságokban dolgozhatók fel és tárolhatók, ahol az adatvédelmi törvények eltérhetnek saját országukétól.'
      ]
    },
    {
      title: '11. Gyermekek Adatvédelme',
      content: [
        'A Risknil.com nem az alkalmazandó törvény által az adatkezeléshez való hozzájáruláshoz megkövetelt életkornál fiatalabb személyek általi használatra készült. Tudatosan nem gyűjtünk személyes adatokat gyermekektől.',
        'Ha tudomásunkra jut, hogy egy gyermek személyes adatait megfelelő hozzájárulás nélkül gyűjtöttük, lépéseket tehetünk az ilyen adatok törlésére.'
      ]
    },
    {
      title: '12. Az Adatvédelmi Irányelvek Módosításai',
      content: [
        'Előzetes értesítés nélkül bármikor frissíthetjük vagy módosíthatjuk ezeket az Adatvédelmi Irányelveket.',
        'A változtatások a Risknil.com-on való közzététellel lépnek hatályba. A weboldal folytatott használata a frissítések közzététele után a módosított Adatvédelmi Irányelvek elfogadását jelenti.'
      ]
    },
    {
      title: '13. Kapcsolat',
      content: [
        'Adatvédelmi kérdésekkel, kérésekkel vagy aggályokkal a felhasználók a weboldalon megadott kapcsolatfelvételi módokon keresztül fordulhatnak a Risknil.com-hoz.'
      ]
    }
  ]
}

const frPrivacy: PrivacyTranslation = {
  pageTitle: 'Politique de Confidentialité',
  lastUpdated: 'Dernière mise à jour : Mai 2026',
  backToHome: 'Retour à RiskNil',
  sections: [
    {
      title: '1. Avertissement Général',
      content: [
        'Risknil.com fournit des informations, des données, des analyses et des références à des ressources tierces à des fins d\'information uniquement.',
        'Bien que nous nous efforcions de maintenir les informations exactes et à jour, nous ne garantissons pas l\'exhaustivité, la fiabilité ou l\'exactitude de tout contenu publié sur le site ou obtenu auprès de tiers. Les utilisateurs accèdent et se fient aux informations à leur propre discrétion et risque.',
        'Risknil.com ne sera pas responsable de toute perte, dommage ou réclamation directe, indirecte, incidente ou consécutive résultant de : la confiance dans les informations disponibles sur le site ; les inexactitudes, omissions ou informations obsolètes ; les liens, services ou sites externes tiers ; les interruptions techniques, erreurs ou indisponibilité temporaire de la plateforme.',
        'Les utilisateurs sont responsables de la façon dont ils utilisent les informations et services fournis via le site web.'
      ]
    },
    {
      title: '2. Informations que Nous Collectons',
      content: [
        'Les visiteurs peuvent parcourir Risknil.com sans créer de compte ni fournir directement d\'informations personnelles.',
        'Nous pouvons collecter des données personnelles lorsque les utilisateurs : créent un compte ; nous contactent via des formulaires ou par e-mail ; s\'abonnent aux newsletters ou mises à jour ; soumettent des demandes ou communiquent avec nous.',
        'Les informations que nous pouvons collecter comprennent : l\'adresse e-mail ; l\'adresse IP ; les informations de pays ou de région (principalement pour les contributeurs de contenu) ; toute information volontairement soumise par l\'utilisateur.',
        'Nous pouvons également collecter automatiquement des informations techniques et d\'utilisation limitées via des cookies et des technologies d\'analyse comme décrit ci-dessous.'
      ]
    },
    {
      title: '3. Comment Nous Utilisons les Informations',
      content: [
        'Risknil.com peut utiliser les informations collectées à des fins incluant : l\'exploitation et la maintenance du site web ; la communication avec les utilisateurs ; la réponse aux demandes ou demandes de support ; l\'amélioration de la fonctionnalité du site et de l\'expérience utilisateur ; la surveillance de la sécurité de la plateforme et la prévention des accès non autorisés ou abus ; l\'analyse du trafic et des performances du site ; le respect des obligations légales.',
        'Nous traitons les données personnelles uniquement lorsque cela est raisonnablement nécessaire à des fins commerciales et opérationnelles légitimes.'
      ]
    },
    {
      title: '4. Accès et Contrôle de l\'Utilisateur',
      content: [
        'Les utilisateurs enregistrés peuvent accéder, consulter ou mettre à jour les informations de leur compte à tout moment via les paramètres de leur compte lorsque disponible.',
        'Les utilisateurs peuvent également demander : la correction d\'informations inexactes ; la suppression de leur compte et des données personnelles associées ; la suppression des informations liées au compte lorsque applicable et légalement permis.',
        'Nous nous réservons le droit de conserver certaines informations lorsque requis pour des raisons légales, de sécurité, de prévention de la fraude ou des raisons opérationnelles légitimes.'
      ]
    },
    {
      title: '5. Conservation des Données',
      content: [
        'Les informations personnelles peuvent être conservées aussi longtemps que nécessaire pour exploiter la plateforme, fournir des services, respecter les obligations légales, résoudre les litiges ou faire respecter les accords.',
        'Sauf demande contraire de l\'utilisateur ou exigence légale, les informations liées au compte peuvent être stockées indéfiniment.',
        'Suite à une demande de suppression vérifiée, nous ferons des efforts raisonnables pour supprimer ou anonymiser les données personnelles dans un délai raisonnable, sauf si la conservation est légalement requise.'
      ]
    },
    {
      title: '6. Sécurité des Données',
      content: [
        'Risknil.com met en œuvre des mesures techniques, administratives et organisationnelles raisonnables conçues pour protéger les informations personnelles contre l\'accès non autorisé, l\'utilisation abusive, la perte, l\'altération ou la divulgation.',
        'Cependant, aucune méthode de transmission électronique ou de stockage n\'est totalement sécurisée, et nous ne pouvons pas garantir la sécurité absolue des informations transmises via Internet.'
      ]
    },
    {
      title: '7. Partage des Informations',
      content: [
        'Risknil.com ne vend, ne loue ni ne cède d\'informations personnelles à des tiers.',
        'Nous pouvons divulguer des informations uniquement : lorsque requis par la loi applicable, réglementation, procédure légale ou demande gouvernementale ; pour protéger les droits, la propriété, la sécurité ou l\'intégrité de Risknil.com, de ses utilisateurs ou du public ; en relation avec la prévention de la fraude, la détection des abus ou l\'application de nos politiques.',
        'Nous pouvons utiliser des prestataires de services tiers soigneusement sélectionnés pour l\'analyse, l\'infrastructure, la sécurité, la livraison d\'e-mails ou des fins opérationnelles. Ces prestataires peuvent traiter des informations limitées uniquement en notre nom et sous des obligations de confidentialité appropriées.'
      ]
    },
    {
      title: '8. Cookies et Technologies de Suivi',
      content: [
        'Risknil.com utilise des cookies et des technologies similaires pour améliorer la fonctionnalité, maintenir les sessions, analyser le trafic et améliorer l\'expérience utilisateur.',
        'Un cookie est un petit fichier texte stocké sur l\'appareil de l\'utilisateur par le navigateur.',
        'En continuant à utiliser le site, les utilisateurs consentent à l\'utilisation de cookies conformément à cette Politique de Confidentialité.',
        'Types de cookies que nous pouvons utiliser :',
        'Cookies Essentiels : Ces cookies sont nécessaires pour les fonctionnalités de base du site, y compris les sessions de connexion, la sécurité et l\'authentification du compte. Les cookies de session peuvent être supprimés automatiquement à la fermeture du navigateur, sauf si une option "Se souvenir de moi" ou similaire est sélectionnée.',
        'Cookies d\'Analyse : Nous pouvons utiliser des fournisseurs d\'analyse tiers tels que Google Analytics, Statcounter ou des services similaires pour mieux comprendre le trafic du site, le comportement des visiteurs et les performances de la plateforme.',
        'Les utilisateurs peuvent généralement contrôler ou désactiver les cookies via les paramètres de leur navigateur. Plus d\'informations sur les cookies sur : https://www.allaboutcookies.org'
      ]
    },
    {
      title: '9. Liens Tiers',
      content: [
        'Risknil.com peut contenir des liens vers des sites web, services ou ressources externes exploités par des tiers.',
        'Nous ne contrôlons pas et ne sommes pas responsables des pratiques de confidentialité, de la sécurité ou du contenu des sites web tiers. L\'accès aux sites tiers se fait aux risques de l\'utilisateur.',
        'Les utilisateurs doivent consulter les politiques de confidentialité de tout site externe qu\'ils visitent.'
      ]
    },
    {
      title: '10. Utilisation Internationale',
      content: [
        'Risknil.com peut être accessible depuis des pays du monde entier. En utilisant le site, les utilisateurs comprennent que leurs informations peuvent être traitées et stockées dans des juridictions où les lois sur la confidentialité peuvent différer de celles de leur propre pays.'
      ]
    },
    {
      title: '11. Confidentialité des Enfants',
      content: [
        'Risknil.com n\'est pas destiné aux personnes n\'ayant pas l\'âge requis par la loi applicable pour consentir au traitement des données dans leur juridiction. Nous ne collectons pas sciemment d\'informations personnelles auprès d\'enfants.',
        'Si nous apprenons que des données personnelles d\'un enfant ont été collectées sans le consentement approprié, nous pouvons prendre des mesures pour supprimer ces informations.'
      ]
    },
    {
      title: '12. Modifications de cette Politique de Confidentialité',
      content: [
        'Nous pouvons mettre à jour ou modifier cette Politique de Confidentialité à tout moment sans préavis.',
        'Tout changement prend effet une fois publié sur Risknil.com. L\'utilisation continue du site après la publication des mises à jour constitue l\'acceptation de la Politique de Confidentialité révisée.'
      ]
    },
    {
      title: '13. Contact',
      content: [
        'Pour les questions, demandes ou préoccupations liées à la confidentialité, les utilisateurs peuvent contacter Risknil.com via les méthodes de contact fournies sur le site web.'
      ]
    }
  ]
}

export const privacyTranslations: Record<string, PrivacyTranslation> = {
  en: enPrivacy,
  es: esPrivacy,
  pt: ptPrivacy,
  de: dePrivacy,
  hu: huPrivacy,
  fr: frPrivacy,
  // All other languages with translated titles but English content
  'zh-CN': {
    title: '隐私政策',
    sections: enPrivacy.sections.map((s, i) => ({
      heading: ['1. 简介', '2. 我们收集的数据', '3. 我们如何使用您的数据', '4. Cookie和跟踪', '5. 数据保留', '6. 第三方服务', '7. 数据安全', '8. 您的权利', '9. 儿童隐私', '10. 国际用户', '11. 本政策的变更', '12. 联系我们'][i] || s.heading,
      content: s.content
    }))
  },
  'zh-TW': {
    title: '隱私政策',
    sections: enPrivacy.sections.map((s, i) => ({
      heading: ['1. 簡介', '2. 我們收集的數據', '3. 我們如何使用您的數據', '4. Cookie和跟蹤', '5. 數據保留', '6. 第三方服務', '7. 數據安全', '8. 您的權利', '9. 兒童隱私', '10. 國際用戶', '11. 本政策的變更', '12. 聯繫我們'][i] || s.heading,
      content: s.content
    }))
  },
  it: {
    title: 'Informativa sulla Privacy',
    sections: enPrivacy.sections.map((s, i) => ({
      heading: ['1. Introduzione', '2. Dati che Raccogliamo', '3. Come Utilizziamo i Tuoi Dati', '4. Cookie e Tracciamento', '5. Conservazione dei Dati', '6. Servizi di Terze Parti', '7. Sicurezza dei Dati', '8. I Tuoi Diritti', '9. Privacy dei Minori', '10. Utenti Internazionali', '11. Modifiche a Questa Politica', '12. Contattaci'][i] || s.heading,
      content: s.content
    }))
  },
  sv: {
    title: 'Integritetspolicy',
    sections: enPrivacy.sections.map((s, i) => ({
      heading: ['1. Introduktion', '2. Data Vi Samlar In', '3. Hur Vi Använder Din Data', '4. Cookies och Spårning', '5. Datalagring', '6. Tredjepartstjänster', '7. Datasäkerhet', '8. Dina Rättigheter', '9. Barns Integritet', '10. Internationella Användare', '11. Ändringar av Denna Policy', '12. Kontakta Oss'][i] || s.heading,
      content: s.content
    }))
  },
  da: {
    title: 'Privatlivspolitik',
    sections: enPrivacy.sections.map((s, i) => ({
      heading: ['1. Introduktion', '2. Data Vi Indsamler', '3. Hvordan Vi Bruger Dine Data', '4. Cookies og Sporing', '5. Dataopbevaring', '6. Tredjepartstjenester', '7. Datasikkerhed', '8. Dine Rettigheder', '9. Børns Privatliv', '10. Internationale Brugere', '11. Ændringer af Denne Politik', '12. Kontakt Os'][i] || s.heading,
      content: s.content
    }))
  },
  nl: {
    title: 'Privacybeleid',
    sections: enPrivacy.sections.map((s, i) => ({
      heading: ['1. Inleiding', '2. Gegevens Die We Verzamelen', '3. Hoe We Uw Gegevens Gebruiken', '4. Cookies en Tracking', '5. Gegevensbewaring', '6. Diensten van Derden', '7. Gegevensbeveiliging', '8. Uw Rechten', '9. Privacy van Kinderen', '10. Internationale Gebruikers', '11. Wijzigingen in Dit Beleid', '12. Neem Contact Op'][i] || s.heading,
      content: s.content
    }))
  },
  el: {
    title: 'Πολιτική Απορρήτου',
    sections: enPrivacy.sections.map((s, i) => ({
      heading: ['1. Εισαγωγή', '2. Δεδομένα που Συλλέγουμε', '3. Πώς Χρησιμοποιούμε τα Δεδομένα Σας', '4. Cookies και Παρακολούθηση', '5. Διατήρηση Δεδομένων', '6. Υπηρεσίες Τρίτων', '7. Ασφάλεια Δεδομένων', '8. Τα Δικαιώματά Σας', '9. Απόρρητο Παιδιών', '10. Διεθνείς Χρήστες', '11. Αλλαγές σε Αυτή την Πολιτική', '12. Επικοινωνήστε Μαζί Μας'][i] || s.heading,
      content: s.content
    }))
  },
  pl: {
    title: 'Polityka Prywatności',
    sections: enPrivacy.sections.map((s, i) => ({
      heading: ['1. Wprowadzenie', '2. Dane, Które Zbieramy', '3. Jak Wykorzystujemy Twoje Dane', '4. Pliki Cookie i Śledzenie', '5. Przechowywanie Danych', '6. Usługi Stron Trzecich', '7. Bezpieczeństwo Danych', '8. Twoje Prawa', '9. Prywatność Dzieci', '10. Użytkownicy Międzynarodowi', '11. Zmiany w Tej Polityce', '12. Skontaktuj się z Nami'][i] || s.heading,
      content: s.content
    }))
  },
  no: {
    title: 'Personvernpolicy',
    sections: enPrivacy.sections.map((s, i) => ({
      heading: ['1. Introduksjon', '2. Data Vi Samler Inn', '3. Hvordan Vi Bruker Dine Data', '4. Informasjonskapsler og Sporing', '5. Dataoppbevaring', '6. Tredjepartstjenester', '7. Datasikkerhet', '8. Dine Rettigheter', '9. Barns Personvern', '10. Internasjonale Brukere', '11. Endringer i Denne Policyen', '12. Kontakt Oss'][i] || s.heading,
      content: s.content
    }))
  },
  fi: {
    title: 'Tietosuojakäytäntö',
    sections: enPrivacy.sections.map((s, i) => ({
      heading: ['1. Johdanto', '2. Keräämämme Tiedot', '3. Miten Käytämme Tietojasi', '4. Evästeet ja Seuranta', '5. Tietojen Säilytys', '6. Kolmannen Osapuolen Palvelut', '7. Tietoturva', '8. Oikeutesi', '9. Lasten Yksityisyys', '10. Kansainväliset Käyttäjät', '11. Muutokset Tähän Käytäntöön', '12. Ota Yhteyttä'][i] || s.heading,
      content: s.content
    }))
  },
  ro: {
    title: 'Politica de Confidențialitate',
    sections: enPrivacy.sections.map((s, i) => ({
      heading: ['1. Introducere', '2. Datele pe Care le Colectăm', '3. Cum Folosim Datele Tale', '4. Cookie-uri și Urmărire', '5. Păstrarea Datelor', '6. Servicii Terțe', '7. Securitatea Datelor', '8. Drepturile Tale', '9. Confidențialitatea Copiilor', '10. Utilizatori Internaționali', '11. Modificări ale Acestei Politici', '12. Contactează-ne'][i] || s.heading,
      content: s.content
    }))
  },
  cs: {
    title: 'Zásady Ochrany Osobních Údajů',
    sections: enPrivacy.sections.map((s, i) => ({
      heading: ['1. Úvod', '2. Data, Která Shromažďujeme', '3. Jak Používáme Vaše Data', '4. Cookies a Sledování', '5. Uchovávání Dat', '6. Služby Třetích Stran', '7. Zabezpečení Dat', '8. Vaše Práva', '9. Ochrana Soukromí Dětí', '10. Mezinárodní Uživatelé', '11. Změny Těchto Zásad', '12. Kontaktujte Nás'][i] || s.heading,
      content: s.content
    }))
  },
  ja: {
    title: 'プライバシーポリシー',
    sections: enPrivacy.sections.map((s, i) => ({
      heading: ['1. はじめに', '2. 収集するデータ', '3. データの使用方法', '4. Cookieとトラッキング', '5. データの保持', '6. 第三者サービス', '7. データセキュリティ', '8. あなたの権利', '9. 子供のプライバシー', '10. 国際ユーザー', '11. このポリシーの変更', '12. お問い合わせ'][i] || s.heading,
      content: s.content
    }))
  },
  ko: {
    title: '개인정보 보호정책',
    sections: enPrivacy.sections.map((s, i) => ({
      heading: ['1. 소개', '2. 수집하는 데이터', '3. 데이터 사용 방법', '4. 쿠키 및 추적', '5. 데이터 보존', '6. 제3자 서비스', '7. 데이터 보안', '8. 귀하의 권리', '9. 아동 개인정보 보호', '10. 국제 사용자', '11. 본 정책의 변경', '12. 문의하기'][i] || s.heading,
      content: s.content
    }))
  },
  hi: {
    title: 'गोपनीयता नीति',
    sections: enPrivacy.sections.map((s, i) => ({
      heading: ['1. परिचय', '2. हम कौन सा डेटा एकत्र करते हैं', '3. हम आपके डेटा का उपयोग कैसे करते हैं', '4. कुकीज़ और ट्रैकिंग', '5. डेटा प्रतिधारण', '6. तृतीय-पक्ष सेवाएं', '7. डेटा सुरक्षा', '8. आपके अधिकार', '9. बच्चों की गोपनीयता', '10. अंतर्राष्ट्रीय उपयोगकर्ता', '11. इस नीति में परिवर्तन', '12. हमसे संपर्क करें'][i] || s.heading,
      content: s.content
    }))
  },
  ar: {
    title: 'سياسة الخصوصية',
    sections: enPrivacy.sections.map((s, i) => ({
      heading: ['1. المقدمة', '2. البيانات التي نجمعها', '3. كيف نستخدم بياناتك', '4. ملفات تعريف الارتباط والتتبع', '5. الاحتفاظ بالبيانات', '6. خدمات الطرف الثالث', '7. أمان البيانات', '8. حقوقك', '9. خصوصية الأطفال', '10. المستخدمون الدوليون', '11. التغييرات على هذه السياسة', '12. اتصل بنا'][i] || s.heading,
      content: s.content
    }))
  },
  tl: {
    title: 'Patakaran sa Pagkapribado',
    sections: enPrivacy.sections.map((s, i) => ({
      heading: ['1. Panimula', '2. Data na Kinokolekta Namin', '3. Paano Namin Ginagamit ang Iyong Data', '4. Cookies at Pagsubaybay', '5. Pagpapanatili ng Data', '6. Mga Serbisyo ng Third-Party', '7. Seguridad ng Data', '8. Ang Iyong mga Karapatan', '9. Privacy ng mga Bata', '10. Mga International na User', '11. Mga Pagbabago sa Patakarang Ito', '12. Makipag-ugnayan sa Amin'][i] || s.heading,
      content: s.content
    }))
  },
  sw: {
    title: 'Sera ya Faragha',
    sections: enPrivacy.sections.map((s, i) => ({
      heading: ['1. Utangulizi', '2. Data Tunayokusanya', '3. Jinsi Tunavyotumia Data Yako', '4. Vidakuzi na Ufuatiliaji', '5. Uhifadhi wa Data', '6. Huduma za Wahusika wa Tatu', '7. Usalama wa Data', '8. Haki Zako', '9. Faragha ya Watoto', '10. Watumiaji wa Kimataifa', '11. Mabadiliko ya Sera Hii', '12. Wasiliana Nasi'][i] || s.heading,
      content: s.content
    }))
  },
  af: {
    title: 'Privaatheidsbeleid',
    sections: enPrivacy.sections.map((s, i) => ({
      heading: ['1. Inleiding', '2. Data Wat Ons Versamel', '3. Hoe Ons Jou Data Gebruik', '4. Koekies en Opsporing', '5. Data Bewaring', '6. Derdeparty Dienste', '7. Data Sekuriteit', '8. Jou Regte', '9. Kinders se Privaatheid', '10. Internasionale Gebruikers', '11. Veranderinge aan Hierdie Beleid', '12. Kontak Ons'][i] || s.heading,
      content: s.content
    }))
  },
  zu: {
    title: 'Inqubomgomo Yobumfihlo',
    sections: enPrivacy.sections.map((s, i) => ({
      heading: ['1. Isingeniso', '2. Idatha Esiyiqoqayo', '3. Indlela Esisebenzisa Ngayo Idatha Yakho', '4. Amakhukhisi Nokulandelela', '5. Ukugcinwa Kwedatha', '6. Amasevisi Abantu Besithathu', '7. Ukuphepha Kwedatha', '8. Amalungelo Akho', '9. Ubumfihlo Bezingane', '10. Abasebenzisi Bomhlaba Wonke', '11. Izinguquko Kule Nqubomgomo', '12. Xhumana Nathi'][i] || s.heading,
      content: s.content
    }))
  },
  xh: {
    title: 'Umgaqo-nkqubo Wobumfihlo',
    sections: enPrivacy.sections.map((s, i) => ({
      heading: ['1. Intshayelelo', '2. Idatha Esiyiqokelelayo', '3. Indlela Esisebenzisa Ngayo Idatha Yakho', '4. Iikhukhisi Nokulandelela', '5. Ukugcinwa Kwedatha', '6. Iinkonzo Zabantu Besithathu', '7. Ukhuseleko Lwedatha', '8. Amalungelo Akho', '9. Ubumfihlo Babantwana', '10. Abasebenzisi Bamazwe Ngamazwe', '11. Utshintsho Kulo Mgaqo-nkqubo', '12. Qhagamshelana Nathi'][i] || s.heading,
      content: s.content
    }))
  }
}

export function getPrivacyTranslation(locale: string): PrivacyTranslation {
  return privacyTranslations[locale] || privacyTranslations.en
}

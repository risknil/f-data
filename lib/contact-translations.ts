import type { Language } from '@/lib/translations'

export interface ContactSection {
  heading: string
  content: string[]
}

export interface ContactContent {
  linkLabel: string
  pageTitle: string
  sections: ContactSection[]
}

const en: ContactContent = {
  linkLabel: 'Contact Us',
  pageTitle: 'Contact Us',
  sections: [
    {
      heading: 'Contact Information',
      content: [
        'The operator of this Website is responsible for handling communications received through the contact channels listed below.',
        'Email: info@risknil.com',
      ],
    },
    {
      heading: 'Purpose of Contact',
      content: [
        'You may contact us regarding:',
        '• General questions about the Website or its content',
        '• Reporting technical issues, errors, or inaccuracies',
        '• Legal, regulatory, or compliance matters',
        '• Data protection or privacy-related requests',
        '• General feedback or communication',
        'The Website does not provide personalised advice of any kind, including but not limited to betting, financial, or investment advice. All content is provided for informational purposes only.',
      ],
    },
    {
      heading: 'Data Protection and Legal Basis for Processing',
      content: [
        'If you contact us, any personal data you voluntarily provide (such as your email address and message content) may be processed for the purpose of responding to your inquiry and maintaining communication.',
        'Depending on your jurisdiction, processing is based on one or more of the following principles:',
        '• Legitimate interest in responding to communications and operating the Website',
        '• Performance of pre-contractual steps where applicable',
        '• Compliance with legal obligations where required',
        'Where GDPR or similar data protection laws apply, you may have rights regarding your personal data, including access, correction, deletion, restriction of processing, and objection to processing.',
      ],
    },
    {
      heading: 'International Users',
      content: [
        'This Website is accessible globally. If you are accessing the Website from outside the operator\u2019s country of establishment, you acknowledge that your information may be processed in jurisdictions that may not offer the same level of data protection as your local laws.',
        'Where required by applicable law, appropriate safeguards will be applied for such transfers.',
      ],
    },
    {
      heading: 'Data Retention',
      content: [
        'We retain personal data only for as long as necessary to:',
        '• respond to your inquiry, and/or',
        '• comply with applicable legal or regulatory obligations',
        'After this period, data is deleted or anonymised where feasible.',
      ],
    },
    {
      heading: 'Disclosure of Information',
      content: [
        'We do not sell or rent personal data.',
        'Personal data may only be disclosed if:',
        '• required by applicable law or regulation',
        '• requested by competent legal or regulatory authorities',
        '• necessary to protect our legal rights or prevent abuse',
      ],
    },
    {
      heading: 'Security',
      content: [
        'We implement reasonable technical and organisational measures to protect communications. However, no method of electronic transmission or storage is completely secure, and absolute security cannot be guaranteed.',
      ],
    },
    {
      heading: 'Contact for Privacy Requests',
      content: [
        'For any privacy-related questions or to exercise applicable rights, contact:',
        'info@risknil.com',
        'We may require reasonable verification of identity before processing requests.',
      ],
    },
  ],
}

const es: ContactContent = {
  linkLabel: 'Contáctanos',
  pageTitle: 'Contáctanos',
  sections: [
    {
      heading: 'Información de Contacto',
      content: [
        'El operador de este Sitio Web es responsable de gestionar las comunicaciones recibidas a través de los canales de contacto que se indican a continuación.',
        'Correo electrónico: info@risknil.com',
      ],
    },
    {
      heading: 'Finalidad del Contacto',
      content: [
        'Puede contactarnos en relación con:',
        '• Preguntas generales sobre el Sitio Web o su contenido',
        '• Reporte de problemas técnicos, errores o inexactitudes',
        '• Asuntos legales, regulatorios o de cumplimiento',
        '• Solicitudes relacionadas con la protección de datos o la privacidad',
        '• Comentarios generales o comunicación',
        'El Sitio Web no proporciona asesoramiento personalizado de ningún tipo, incluido, entre otros, asesoramiento sobre apuestas, financiero o de inversión. Todo el contenido se proporciona únicamente con fines informativos.',
      ],
    },
    {
      heading: 'Protección de Datos y Base Legal para el Tratamiento',
      content: [
        'Si nos contacta, cualquier dato personal que proporcione voluntariamente (como su dirección de correo electrónico y el contenido del mensaje) puede ser tratado con el fin de responder a su consulta y mantener la comunicación.',
        'Según su jurisdicción, el tratamiento se basa en uno o varios de los siguientes principios:',
        '• Interés legítimo en responder a las comunicaciones y operar el Sitio Web',
        '• Ejecución de medidas precontractuales cuando corresponda',
        '• Cumplimiento de obligaciones legales cuando sea necesario',
        'Cuando se apliquen el RGPD o leyes de protección de datos similares, usted puede tener derechos sobre sus datos personales, incluidos el acceso, la rectificación, la supresión, la limitación del tratamiento y la oposición al tratamiento.',
      ],
    },
    {
      heading: 'Usuarios Internacionales',
      content: [
        'Este Sitio Web es accesible a nivel mundial. Si accede al Sitio Web desde fuera del país de establecimiento del operador, reconoce que su información puede ser tratada en jurisdicciones que pueden no ofrecer el mismo nivel de protección de datos que sus leyes locales.',
        'Cuando lo exija la ley aplicable, se aplicarán las salvaguardas adecuadas para tales transferencias.',
      ],
    },
    {
      heading: 'Conservación de Datos',
      content: [
        'Conservamos los datos personales solo durante el tiempo necesario para:',
        '• responder a su consulta, y/o',
        '• cumplir con las obligaciones legales o regulatorias aplicables',
        'Después de este período, los datos se eliminan o se anonimizan cuando sea factible.',
      ],
    },
    {
      heading: 'Divulgación de Información',
      content: [
        'No vendemos ni alquilamos datos personales.',
        'Los datos personales solo pueden divulgarse si:',
        '• lo exige la ley o reglamentación aplicable',
        '• lo solicitan las autoridades legales o regulatorias competentes',
        '• es necesario para proteger nuestros derechos legales o prevenir abusos',
      ],
    },
    {
      heading: 'Seguridad',
      content: [
        'Implementamos medidas técnicas y organizativas razonables para proteger las comunicaciones. Sin embargo, ningún método de transmisión o almacenamiento electrónico es completamente seguro, y no se puede garantizar una seguridad absoluta.',
      ],
    },
    {
      heading: 'Contacto para Solicitudes de Privacidad',
      content: [
        'Para cualquier pregunta relacionada con la privacidad o para ejercer los derechos aplicables, contacte con:',
        'info@risknil.com',
        'Podemos requerir una verificación razonable de identidad antes de procesar las solicitudes.',
      ],
    },
  ],
}

const pt: ContactContent = {
  linkLabel: 'Fale Conosco',
  pageTitle: 'Fale Conosco',
  sections: [
    {
      heading: 'Informações de Contato',
      content: [
        'O operador deste Site é responsável por gerenciar as comunicações recebidas através dos canais de contato listados abaixo.',
        'E-mail: info@risknil.com',
      ],
    },
    {
      heading: 'Finalidade do Contato',
      content: [
        'Você pode entrar em contato conosco sobre:',
        '• Perguntas gerais sobre o Site ou seu conteúdo',
        '• Relato de problemas técnicos, erros ou imprecisões',
        '• Assuntos jurídicos, regulatórios ou de conformidade',
        '• Solicitações relacionadas à proteção de dados ou privacidade',
        '• Feedback geral ou comunicação',
        'O Site não fornece aconselhamento personalizado de qualquer tipo, incluindo, entre outros, aconselhamento sobre apostas, financeiro ou de investimento. Todo o conteúdo é fornecido apenas para fins informativos.',
      ],
    },
    {
      heading: 'Proteção de Dados e Base Legal para o Tratamento',
      content: [
        'Se você entrar em contato conosco, quaisquer dados pessoais que você fornecer voluntariamente (como seu endereço de e-mail e o conteúdo da mensagem) podem ser tratados com a finalidade de responder à sua consulta e manter a comunicação.',
        'Dependendo da sua jurisdição, o tratamento baseia-se em um ou mais dos seguintes princípios:',
        '• Interesse legítimo em responder às comunicações e operar o Site',
        '• Execução de etapas pré-contratuais quando aplicável',
        '• Cumprimento de obrigações legais quando exigido',
        'Quando o RGPD ou leis de proteção de dados semelhantes se aplicarem, você pode ter direitos relativos aos seus dados pessoais, incluindo acesso, correção, exclusão, restrição do tratamento e oposição ao tratamento.',
      ],
    },
    {
      heading: 'Usuários Internacionais',
      content: [
        'Este Site é acessível globalmente. Se você estiver acessando o Site de fora do país de estabelecimento do operador, você reconhece que suas informações podem ser tratadas em jurisdições que podem não oferecer o mesmo nível de proteção de dados que suas leis locais.',
        'Quando exigido pela lei aplicável, salvaguardas apropriadas serão aplicadas para tais transferências.',
      ],
    },
    {
      heading: 'Retenção de Dados',
      content: [
        'Retemos dados pessoais apenas pelo tempo necessário para:',
        '• responder à sua consulta, e/ou',
        '• cumprir as obrigações legais ou regulatórias aplicáveis',
        'Após esse período, os dados são excluídos ou anonimizados quando viável.',
      ],
    },
    {
      heading: 'Divulgação de Informações',
      content: [
        'Não vendemos nem alugamos dados pessoais.',
        'Os dados pessoais só podem ser divulgados se:',
        '• exigido pela lei ou regulamentação aplicável',
        '• solicitado pelas autoridades legais ou regulatórias competentes',
        '• necessário para proteger nossos direitos legais ou prevenir abusos',
      ],
    },
    {
      heading: 'Segurança',
      content: [
        'Implementamos medidas técnicas e organizacionais razoáveis para proteger as comunicações. No entanto, nenhum método de transmissão ou armazenamento eletrônico é completamente seguro, e a segurança absoluta não pode ser garantida.',
      ],
    },
    {
      heading: 'Contato para Solicitações de Privacidade',
      content: [
        'Para quaisquer perguntas relacionadas à privacidade ou para exercer os direitos aplicáveis, entre em contato:',
        'info@risknil.com',
        'Podemos exigir uma verificação razoável de identidade antes de processar as solicitações.',
      ],
    },
  ],
}

const zhCN: ContactContent = {
  linkLabel: '联系我们',
  pageTitle: '联系我们',
  sections: [
    {
      heading: '联系信息',
      content: [
        '本网站的运营者负责处理通过下列联系渠道收到的通信。',
        '电子邮件：info@risknil.com',
      ],
    },
    {
      heading: '联系目的',
      content: [
        '您可以就以下事项与我们联系：',
        '• 关于网站或其内容的一般问题',
        '• 报告技术问题、错误或不准确之处',
        '• 法律、监管或合规事项',
        '• 与数据保护或隐私相关的请求',
        '• 一般反馈或沟通',
        '本网站不提供任何形式的个性化建议，包括但不限于投注、财务或投资建议。所有内容仅供参考之用。',
      ],
    },
    {
      heading: '数据保护与处理的法律依据',
      content: [
        '如果您与我们联系，您自愿提供的任何个人数据（例如您的电子邮件地址和消息内容）可能会为回复您的咨询和保持沟通的目的而被处理。',
        '根据您所在的司法管辖区，处理基于以下一项或多项原则：',
        '• 回复通信和运营本网站的合法利益',
        '• 在适用情况下执行合同订立前的步骤',
        '• 在必要时遵守法律义务',
        '在适用 GDPR 或类似数据保护法律的情况下，您可能对您的个人数据享有权利，包括访问、更正、删除、限制处理和反对处理。',
      ],
    },
    {
      heading: '国际用户',
      content: [
        '本网站可在全球访问。如果您从运营者设立国家以外的地区访问本网站，您承认您的信息可能在可能无法提供与您当地法律相同数据保护水平的司法管辖区内进行处理。',
        '在适用法律要求的情况下，将对此类传输采取适当的保障措施。',
      ],
    },
    {
      heading: '数据保留',
      content: [
        '我们仅在为以下目的所必需的期间内保留个人数据：',
        '• 回复您的咨询，和/或',
        '• 遵守适用的法律或监管义务',
        '在此期限之后，数据将在可行的情况下被删除或匿名化。',
      ],
    },
    {
      heading: '信息披露',
      content: [
        '我们不出售或出租个人数据。',
        '个人数据仅在以下情况下可被披露：',
        '• 适用法律或法规要求',
        '• 主管法律或监管机构要求',
        '• 为保护我们的合法权利或防止滥用所必需',
      ],
    },
    {
      heading: '安全',
      content: [
        '我们采取合理的技术和组织措施来保护通信。然而，没有任何电子传输或存储方法是完全安全的，无法保证绝对的安全。',
      ],
    },
    {
      heading: '隐私请求联系方式',
      content: [
        '如有任何与隐私相关的问题或行使适用权利，请联系：',
        'info@risknil.com',
        '在处理请求之前，我们可能要求对身份进行合理验证。',
      ],
    },
  ],
}

const zhTW: ContactContent = {
  linkLabel: '聯絡我們',
  pageTitle: '聯絡我們',
  sections: [
    {
      heading: '聯絡資訊',
      content: [
        '本網站的營運者負責處理透過下列聯絡管道收到的通訊。',
        '電子郵件：info@risknil.com',
      ],
    },
    {
      heading: '聯絡目的',
      content: [
        '您可以就以下事項與我們聯絡：',
        '• 關於網站或其內容的一般問題',
        '• 回報技術問題、錯誤或不準確之處',
        '• 法律、監管或合規事項',
        '• 與資料保護或隱私相關的請求',
        '• 一般意見回饋或溝通',
        '本網站不提供任何形式的個人化建議，包括但不限於投注、財務或投資建議。所有內容僅供參考之用。',
      ],
    },
    {
      heading: '資料保護與處理的法律依據',
      content: [
        '如果您與我們聯絡，您自願提供的任何個人資料（例如您的電子郵件地址和訊息內容）可能會為回覆您的詢問和維持溝通的目的而被處理。',
        '根據您所在的司法管轄區，處理基於以下一項或多項原則：',
        '• 回覆通訊和營運本網站的合法利益',
        '• 在適用情況下執行締約前的步驟',
        '• 在必要時遵守法律義務',
        '在適用 GDPR 或類似資料保護法律的情況下，您可能對您的個人資料享有權利，包括存取、更正、刪除、限制處理和反對處理。',
      ],
    },
    {
      heading: '國際使用者',
      content: [
        '本網站可在全球存取。如果您從營運者設立國家以外的地區存取本網站，您承認您的資訊可能在可能無法提供與您當地法律相同資料保護水準的司法管轄區內進行處理。',
        '在適用法律要求的情況下，將對此類傳輸採取適當的保障措施。',
      ],
    },
    {
      heading: '資料保留',
      content: [
        '我們僅在為以下目的所必需的期間內保留個人資料：',
        '• 回覆您的詢問，和/或',
        '• 遵守適用的法律或監管義務',
        '在此期限之後，資料將在可行的情況下被刪除或匿名化。',
      ],
    },
    {
      heading: '資訊揭露',
      content: [
        '我們不出售或出租個人資料。',
        '個人資料僅在以下情況下可被揭露：',
        '• 適用法律或法規要求',
        '• 主管法律或監管機構要求',
        '• 為保護我們的合法權利或防止濫用所必需',
      ],
    },
    {
      heading: '安全',
      content: [
        '我們採取合理的技術和組織措施來保護通訊。然而，沒有任何電子傳輸或儲存方法是完全安全的，無法保證絕對的安全。',
      ],
    },
    {
      heading: '隱私請求聯絡方式',
      content: [
        '如有任何與隱私相關的問題或行使適用權利，請聯絡：',
        'info@risknil.com',
        '在處理請求之前，我們可能要求對身分進行合理驗證。',
      ],
    },
  ],
}

const it: ContactContent = {
  linkLabel: 'Contattaci',
  pageTitle: 'Contattaci',
  sections: [
    {
      heading: 'Informazioni di Contatto',
      content: [
        'Il gestore di questo Sito è responsabile della gestione delle comunicazioni ricevute attraverso i canali di contatto elencati di seguito.',
        'Email: info@risknil.com',
      ],
    },
    {
      heading: 'Finalità del Contatto',
      content: [
        'Puoi contattarci in merito a:',
        '• Domande generali sul Sito o sui suoi contenuti',
        '• Segnalazione di problemi tecnici, errori o inesattezze',
        '• Questioni legali, normative o di conformità',
        '• Richieste relative alla protezione dei dati o alla privacy',
        '• Feedback generale o comunicazione',
        'Il Sito non fornisce consulenza personalizzata di alcun tipo, incluse a titolo esemplificativo consulenze su scommesse, finanziarie o di investimento. Tutti i contenuti sono forniti esclusivamente a scopo informativo.',
      ],
    },
    {
      heading: 'Protezione dei Dati e Base Giuridica del Trattamento',
      content: [
        'Se ci contatti, qualsiasi dato personale che fornisci volontariamente (come il tuo indirizzo email e il contenuto del messaggio) può essere trattato allo scopo di rispondere alla tua richiesta e mantenere la comunicazione.',
        'A seconda della tua giurisdizione, il trattamento si basa su uno o più dei seguenti principi:',
        '• Interesse legittimo a rispondere alle comunicazioni e a gestire il Sito',
        '• Esecuzione di misure precontrattuali ove applicabile',
        '• Adempimento di obblighi legali ove richiesto',
        'Laddove si applichino il GDPR o leggi simili sulla protezione dei dati, potresti avere diritti relativi ai tuoi dati personali, inclusi accesso, rettifica, cancellazione, limitazione del trattamento e opposizione al trattamento.',
      ],
    },
    {
      heading: 'Utenti Internazionali',
      content: [
        'Questo Sito è accessibile a livello globale. Se accedi al Sito dall\u2019esterno del paese di stabilimento del gestore, riconosci che le tue informazioni possono essere trattate in giurisdizioni che potrebbero non offrire lo stesso livello di protezione dei dati delle tue leggi locali.',
        'Ove richiesto dalla legge applicabile, saranno applicate garanzie adeguate per tali trasferimenti.',
      ],
    },
    {
      heading: 'Conservazione dei Dati',
      content: [
        'Conserviamo i dati personali solo per il tempo necessario a:',
        '• rispondere alla tua richiesta, e/o',
        '• adempiere agli obblighi legali o normativi applicabili',
        'Trascorso tale periodo, i dati vengono cancellati o resi anonimi ove possibile.',
      ],
    },
    {
      heading: 'Divulgazione delle Informazioni',
      content: [
        'Non vendiamo né affittiamo dati personali.',
        'I dati personali possono essere divulgati solo se:',
        '• richiesto dalla legge o dalla normativa applicabile',
        '• richiesto dalle autorità legali o normative competenti',
        '• necessario per proteggere i nostri diritti legali o prevenire abusi',
      ],
    },
    {
      heading: 'Sicurezza',
      content: [
        'Adottiamo misure tecniche e organizzative ragionevoli per proteggere le comunicazioni. Tuttavia, nessun metodo di trasmissione o archiviazione elettronica è completamente sicuro e non è possibile garantire una sicurezza assoluta.',
      ],
    },
    {
      heading: 'Contatto per Richieste sulla Privacy',
      content: [
        'Per qualsiasi domanda relativa alla privacy o per esercitare i diritti applicabili, contatta:',
        'info@risknil.com',
        'Potremmo richiedere una ragionevole verifica dell\u2019identità prima di elaborare le richieste.',
      ],
    },
  ],
}

const fr: ContactContent = {
  linkLabel: 'Nous Contacter',
  pageTitle: 'Nous Contacter',
  sections: [
    {
      heading: 'Coordonnées',
      content: [
        'L\u2019exploitant de ce Site Web est responsable du traitement des communications reçues via les canaux de contact répertoriés ci-dessous.',
        'E-mail : info@risknil.com',
      ],
    },
    {
      heading: 'Objet du Contact',
      content: [
        'Vous pouvez nous contacter concernant :',
        '• Des questions générales sur le Site Web ou son contenu',
        '• Le signalement de problèmes techniques, d\u2019erreurs ou d\u2019inexactitudes',
        '• Des questions juridiques, réglementaires ou de conformité',
        '• Des demandes liées à la protection des données ou à la confidentialité',
        '• Des commentaires généraux ou une communication',
        'Le Site Web ne fournit aucun conseil personnalisé, y compris, mais sans s\u2019y limiter, des conseils en matière de paris, financiers ou d\u2019investissement. Tout le contenu est fourni à titre informatif uniquement.',
      ],
    },
    {
      heading: 'Protection des Données et Base Juridique du Traitement',
      content: [
        'Si vous nous contactez, toutes les données personnelles que vous fournissez volontairement (telles que votre adresse e-mail et le contenu de votre message) peuvent être traitées dans le but de répondre à votre demande et de maintenir la communication.',
        'Selon votre juridiction, le traitement repose sur un ou plusieurs des principes suivants :',
        '• Intérêt légitime à répondre aux communications et à exploiter le Site Web',
        '• Exécution de mesures précontractuelles le cas échéant',
        '• Respect des obligations légales lorsque cela est requis',
        'Lorsque le RGPD ou des lois similaires sur la protection des données s\u2019appliquent, vous pouvez disposer de droits concernant vos données personnelles, notamment l\u2019accès, la rectification, l\u2019effacement, la limitation du traitement et l\u2019opposition au traitement.',
      ],
    },
    {
      heading: 'Utilisateurs Internationaux',
      content: [
        'Ce Site Web est accessible dans le monde entier. Si vous accédez au Site Web depuis un pays autre que celui d\u2019établissement de l\u2019exploitant, vous reconnaissez que vos informations peuvent être traitées dans des juridictions qui pourraient ne pas offrir le même niveau de protection des données que vos lois locales.',
        'Lorsque la loi applicable l\u2019exige, des garanties appropriées seront appliquées à ces transferts.',
      ],
    },
    {
      heading: 'Conservation des Données',
      content: [
        'Nous conservons les données personnelles uniquement pendant la durée nécessaire pour :',
        '• répondre à votre demande, et/ou',
        '• respecter les obligations légales ou réglementaires applicables',
        'Après cette période, les données sont supprimées ou anonymisées lorsque cela est possible.',
      ],
    },
    {
      heading: 'Divulgation des Informations',
      content: [
        'Nous ne vendons ni ne louons de données personnelles.',
        'Les données personnelles ne peuvent être divulguées que si :',
        '• requis par la loi ou la réglementation applicable',
        '• demandé par les autorités légales ou réglementaires compétentes',
        '• nécessaire pour protéger nos droits légaux ou prévenir les abus',
      ],
    },
    {
      heading: 'Sécurité',
      content: [
        'Nous mettons en œuvre des mesures techniques et organisationnelles raisonnables pour protéger les communications. Cependant, aucune méthode de transmission ou de stockage électronique n\u2019est totalement sécurisée, et une sécurité absolue ne peut être garantie.',
      ],
    },
    {
      heading: 'Contact pour les Demandes de Confidentialité',
      content: [
        'Pour toute question relative à la confidentialité ou pour exercer les droits applicables, contactez :',
        'info@risknil.com',
        'Nous pouvons exiger une vérification raisonnable de l\u2019identité avant de traiter les demandes.',
      ],
    },
  ],
}

const de: ContactContent = {
  linkLabel: 'Kontakt',
  pageTitle: 'Kontaktieren Sie uns',
  sections: [
    {
      heading: 'Kontaktinformationen',
      content: [
        'Der Betreiber dieser Website ist für die Bearbeitung von Mitteilungen verantwortlich, die über die unten aufgeführten Kontaktkanäle eingehen.',
        'E-Mail: info@risknil.com',
      ],
    },
    {
      heading: 'Zweck der Kontaktaufnahme',
      content: [
        'Sie können uns in folgenden Angelegenheiten kontaktieren:',
        '• Allgemeine Fragen zur Website oder ihren Inhalten',
        '• Meldung technischer Probleme, Fehler oder Ungenauigkeiten',
        '• Rechtliche, regulatorische oder Compliance-Angelegenheiten',
        '• Anfragen zum Datenschutz oder zur Privatsphäre',
        '• Allgemeines Feedback oder Kommunikation',
        'Die Website bietet keinerlei personalisierte Beratung, einschließlich, aber nicht beschränkt auf Wett-, Finanz- oder Anlageberatung. Alle Inhalte werden ausschließlich zu Informationszwecken bereitgestellt.',
      ],
    },
    {
      heading: 'Datenschutz und Rechtsgrundlage für die Verarbeitung',
      content: [
        'Wenn Sie uns kontaktieren, können alle personenbezogenen Daten, die Sie freiwillig angeben (wie Ihre E-Mail-Adresse und der Inhalt der Nachricht), zum Zweck der Beantwortung Ihrer Anfrage und der Aufrechterhaltung der Kommunikation verarbeitet werden.',
        'Je nach Ihrer Rechtsordnung beruht die Verarbeitung auf einem oder mehreren der folgenden Grundsätze:',
        '• Berechtigtes Interesse an der Beantwortung von Mitteilungen und am Betrieb der Website',
        '• Durchführung vorvertraglicher Maßnahmen, sofern anwendbar',
        '• Erfüllung gesetzlicher Verpflichtungen, sofern erforderlich',
        'Soweit die DSGVO oder ähnliche Datenschutzgesetze gelten, können Ihnen Rechte in Bezug auf Ihre personenbezogenen Daten zustehen, einschließlich Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung und Widerspruch gegen die Verarbeitung.',
      ],
    },
    {
      heading: 'Internationale Nutzer',
      content: [
        'Diese Website ist weltweit zugänglich. Wenn Sie von außerhalb des Niederlassungslandes des Betreibers auf die Website zugreifen, erkennen Sie an, dass Ihre Informationen in Rechtsordnungen verarbeitet werden können, die möglicherweise nicht dasselbe Datenschutzniveau wie Ihre lokalen Gesetze bieten.',
        'Soweit nach geltendem Recht erforderlich, werden für solche Übermittlungen angemessene Schutzmaßnahmen angewendet.',
      ],
    },
    {
      heading: 'Datenaufbewahrung',
      content: [
        'Wir bewahren personenbezogene Daten nur so lange auf, wie es erforderlich ist, um:',
        '• Ihre Anfrage zu beantworten, und/oder',
        '• geltende gesetzliche oder regulatorische Verpflichtungen zu erfüllen',
        'Nach Ablauf dieses Zeitraums werden die Daten gelöscht oder, soweit möglich, anonymisiert.',
      ],
    },
    {
      heading: 'Offenlegung von Informationen',
      content: [
        'Wir verkaufen oder vermieten keine personenbezogenen Daten.',
        'Personenbezogene Daten dürfen nur offengelegt werden, wenn:',
        '• dies nach geltendem Recht oder geltenden Vorschriften erforderlich ist',
        '• dies von zuständigen rechtlichen oder regulatorischen Behörden verlangt wird',
        '• dies zum Schutz unserer Rechte oder zur Verhinderung von Missbrauch erforderlich ist',
      ],
    },
    {
      heading: 'Sicherheit',
      content: [
        'Wir setzen angemessene technische und organisatorische Maßnahmen zum Schutz der Kommunikation ein. Keine Methode der elektronischen Übertragung oder Speicherung ist jedoch vollständig sicher, und eine absolute Sicherheit kann nicht garantiert werden.',
      ],
    },
    {
      heading: 'Kontakt für Datenschutzanfragen',
      content: [
        'Bei Fragen zum Datenschutz oder zur Ausübung der geltenden Rechte wenden Sie sich an:',
        'info@risknil.com',
        'Wir können vor der Bearbeitung von Anfragen eine angemessene Identitätsprüfung verlangen.',
      ],
    },
  ],
}

const sv: ContactContent = {
  linkLabel: 'Kontakta Oss',
  pageTitle: 'Kontakta Oss',
  sections: [
    {
      heading: 'Kontaktinformation',
      content: [
        'Operatören av denna Webbplats ansvarar för att hantera kommunikation som tas emot via de kontaktkanaler som anges nedan.',
        'E-post: info@risknil.com',
      ],
    },
    {
      heading: 'Syfte med Kontakt',
      content: [
        'Du kan kontakta oss angående:',
        '• Allmänna frågor om Webbplatsen eller dess innehåll',
        '• Rapportering av tekniska problem, fel eller felaktigheter',
        '• Juridiska, regulatoriska eller efterlevnadsrelaterade frågor',
        '• Förfrågningar relaterade till dataskydd eller integritet',
        '• Allmän feedback eller kommunikation',
        'Webbplatsen tillhandahåller ingen personlig rådgivning av något slag, inklusive men inte begränsat till spel-, finansiell eller investeringsrådgivning. Allt innehåll tillhandahålls endast i informationssyfte.',
      ],
    },
    {
      heading: 'Dataskydd och Rättslig Grund för Behandling',
      content: [
        'Om du kontaktar oss kan alla personuppgifter som du frivilligt lämnar (såsom din e-postadress och meddelandets innehåll) behandlas i syfte att besvara din förfrågan och upprätthålla kommunikationen.',
        'Beroende på din jurisdiktion baseras behandlingen på en eller flera av följande principer:',
        '• Berättigat intresse av att besvara kommunikation och driva Webbplatsen',
        '• Genomförande av föravtalsmässiga åtgärder där det är tillämpligt',
        '• Efterlevnad av rättsliga skyldigheter där det krävs',
        'Där GDPR eller liknande dataskyddslagar gäller kan du ha rättigheter avseende dina personuppgifter, inklusive åtkomst, rättelse, radering, begränsning av behandling och invändning mot behandling.',
      ],
    },
    {
      heading: 'Internationella Användare',
      content: [
        'Denna Webbplats är tillgänglig globalt. Om du besöker Webbplatsen från ett land utanför operatörens etableringsland, bekräftar du att din information kan behandlas i jurisdiktioner som kanske inte erbjuder samma nivå av dataskydd som dina lokala lagar.',
        'Där tillämplig lag kräver det kommer lämpliga skyddsåtgärder att tillämpas för sådana överföringar.',
      ],
    },
    {
      heading: 'Datalagring',
      content: [
        'Vi behåller personuppgifter endast så länge som det är nödvändigt för att:',
        '• besvara din förfrågan, och/eller',
        '• uppfylla tillämpliga rättsliga eller regulatoriska skyldigheter',
        'Efter denna period raderas eller anonymiseras uppgifterna där det är möjligt.',
      ],
    },
    {
      heading: 'Utlämnande av Information',
      content: [
        'Vi säljer eller hyr inte ut personuppgifter.',
        'Personuppgifter får endast lämnas ut om:',
        '• det krävs enligt tillämplig lag eller förordning',
        '• det begärs av behöriga rättsliga eller regulatoriska myndigheter',
        '• det är nödvändigt för att skydda våra rättigheter eller förhindra missbruk',
      ],
    },
    {
      heading: 'Säkerhet',
      content: [
        'Vi vidtar rimliga tekniska och organisatoriska åtgärder för att skydda kommunikationen. Ingen metod för elektronisk överföring eller lagring är dock helt säker, och absolut säkerhet kan inte garanteras.',
      ],
    },
    {
      heading: 'Kontakt för Integritetsförfrågningar',
      content: [
        'För frågor relaterade till integritet eller för att utöva tillämpliga rättigheter, kontakta:',
        'info@risknil.com',
        'Vi kan kräva rimlig verifiering av identitet innan vi behandlar förfrågningar.',
      ],
    },
  ],
}

const da: ContactContent = {
  linkLabel: 'Kontakt Os',
  pageTitle: 'Kontakt Os',
  sections: [
    {
      heading: 'Kontaktoplysninger',
      content: [
        'Operatøren af dette Websted er ansvarlig for at håndtere kommunikation modtaget via de kontaktkanaler, der er anført nedenfor.',
        'E-mail: info@risknil.com',
      ],
    },
    {
      heading: 'Formål med Kontakt',
      content: [
        'Du kan kontakte os vedrørende:',
        '• Generelle spørgsmål om Webstedet eller dets indhold',
        '• Rapportering af tekniske problemer, fejl eller unøjagtigheder',
        '• Juridiske, regulatoriske eller compliance-anliggender',
        '• Anmodninger relateret til databeskyttelse eller privatliv',
        '• Generel feedback eller kommunikation',
        'Webstedet yder ingen personlig rådgivning af nogen art, herunder men ikke begrænset til væddemåls-, finansiel eller investeringsrådgivning. Alt indhold leveres udelukkende til informationsformål.',
      ],
    },
    {
      heading: 'Databeskyttelse og Retsgrundlag for Behandling',
      content: [
        'Hvis du kontakter os, kan alle personoplysninger, du frivilligt giver (såsom din e-mailadresse og beskedens indhold), blive behandlet med det formål at besvare din henvendelse og opretholde kommunikationen.',
        'Afhængigt af din jurisdiktion er behandlingen baseret på et eller flere af følgende principper:',
        '• Legitim interesse i at besvare kommunikation og drive Webstedet',
        '• Gennemførelse af prækontraktuelle foranstaltninger, hvor det er relevant',
        '• Overholdelse af retlige forpligtelser, hvor det er påkrævet',
        'Hvor GDPR eller lignende databeskyttelseslove finder anvendelse, kan du have rettigheder vedrørende dine personoplysninger, herunder adgang, berigtigelse, sletning, begrænsning af behandling og indsigelse mod behandling.',
      ],
    },
    {
      heading: 'Internationale Brugere',
      content: [
        'Dette Websted er tilgængeligt globalt. Hvis du tilgår Webstedet fra et land uden for operatørens etableringsland, anerkender du, at dine oplysninger kan blive behandlet i jurisdiktioner, der muligvis ikke tilbyder samme niveau af databeskyttelse som dine lokale love.',
        'Hvor det kræves af gældende lovgivning, vil der blive anvendt passende sikkerhedsforanstaltninger for sådanne overførsler.',
      ],
    },
    {
      heading: 'Dataopbevaring',
      content: [
        'Vi opbevarer kun personoplysninger, så længe det er nødvendigt for at:',
        '• besvare din henvendelse, og/eller',
        '• overholde gældende retlige eller regulatoriske forpligtelser',
        'Efter denne periode slettes eller anonymiseres data, hvor det er muligt.',
      ],
    },
    {
      heading: 'Videregivelse af Oplysninger',
      content: [
        'Vi sælger eller udlejer ikke personoplysninger.',
        'Personoplysninger må kun videregives, hvis:',
        '• det kræves af gældende lov eller forordning',
        '• det anmodes af kompetente retlige eller regulatoriske myndigheder',
        '• det er nødvendigt for at beskytte vores rettigheder eller forhindre misbrug',
      ],
    },
    {
      heading: 'Sikkerhed',
      content: [
        'Vi implementerer rimelige tekniske og organisatoriske foranstaltninger for at beskytte kommunikationen. Ingen metode til elektronisk transmission eller lagring er dog fuldstændig sikker, og absolut sikkerhed kan ikke garanteres.',
      ],
    },
    {
      heading: 'Kontakt for Privatlivsanmodninger',
      content: [
        'For spørgsmål relateret til privatliv eller for at udøve gældende rettigheder, kontakt:',
        'info@risknil.com',
        'Vi kan kræve rimelig verificering af identitet, før vi behandler anmodninger.',
      ],
    },
  ],
}

const nl: ContactContent = {
  linkLabel: 'Neem Contact Op',
  pageTitle: 'Neem Contact Op',
  sections: [
    {
      heading: 'Contactgegevens',
      content: [
        'De exploitant van deze Website is verantwoordelijk voor de afhandeling van communicatie die via de hieronder vermelde contactkanalen wordt ontvangen.',
        'E-mail: info@risknil.com',
      ],
    },
    {
      heading: 'Doel van Contact',
      content: [
        'U kunt contact met ons opnemen over:',
        '• Algemene vragen over de Website of de inhoud ervan',
        '• Het melden van technische problemen, fouten of onnauwkeurigheden',
        '• Juridische, regelgevende of compliance-zaken',
        '• Verzoeken met betrekking tot gegevensbescherming of privacy',
        '• Algemene feedback of communicatie',
        'De Website biedt geen gepersonaliseerd advies van welke aard dan ook, inclusief maar niet beperkt tot advies over weddenschappen, financiën of investeringen. Alle inhoud wordt uitsluitend ter informatie verstrekt.',
      ],
    },
    {
      heading: 'Gegevensbescherming en Rechtsgrond voor Verwerking',
      content: [
        'Als u contact met ons opneemt, kunnen alle persoonsgegevens die u vrijwillig verstrekt (zoals uw e-mailadres en de inhoud van het bericht) worden verwerkt met als doel uw vraag te beantwoorden en de communicatie te onderhouden.',
        'Afhankelijk van uw rechtsgebied is de verwerking gebaseerd op een of meer van de volgende beginselen:',
        '• Gerechtvaardigd belang bij het beantwoorden van communicatie en het beheren van de Website',
        '• Uitvoering van precontractuele stappen waar van toepassing',
        '• Naleving van wettelijke verplichtingen waar vereist',
        'Waar de AVG of soortgelijke wetgeving inzake gegevensbescherming van toepassing is, kunt u rechten hebben met betrekking tot uw persoonsgegevens, waaronder inzage, rectificatie, verwijdering, beperking van de verwerking en bezwaar tegen de verwerking.',
      ],
    },
    {
      heading: 'Internationale Gebruikers',
      content: [
        'Deze Website is wereldwijd toegankelijk. Als u de Website bezoekt vanuit een land buiten het vestigingsland van de exploitant, erkent u dat uw informatie kan worden verwerkt in rechtsgebieden die mogelijk niet hetzelfde niveau van gegevensbescherming bieden als uw lokale wetgeving.',
        'Waar vereist door toepasselijke wetgeving, worden passende waarborgen toegepast voor dergelijke doorgiften.',
      ],
    },
    {
      heading: 'Bewaring van Gegevens',
      content: [
        'Wij bewaren persoonsgegevens alleen zo lang als nodig is om:',
        '• uw vraag te beantwoorden, en/of',
        '• te voldoen aan toepasselijke wettelijke of regelgevende verplichtingen',
        'Na deze periode worden de gegevens verwijderd of geanonimiseerd waar haalbaar.',
      ],
    },
    {
      heading: 'Openbaarmaking van Informatie',
      content: [
        'Wij verkopen of verhuren geen persoonsgegevens.',
        'Persoonsgegevens mogen alleen openbaar worden gemaakt als:',
        '• vereist door toepasselijke wet- of regelgeving',
        '• verzocht door bevoegde juridische of regelgevende autoriteiten',
        '• noodzakelijk om onze wettelijke rechten te beschermen of misbruik te voorkomen',
      ],
    },
    {
      heading: 'Beveiliging',
      content: [
        'Wij implementeren redelijke technische en organisatorische maatregelen om communicatie te beschermen. Geen enkele methode van elektronische overdracht of opslag is echter volledig veilig, en absolute veiligheid kan niet worden gegarandeerd.',
      ],
    },
    {
      heading: 'Contact voor Privacyverzoeken',
      content: [
        'Voor vragen met betrekking tot privacy of om toepasselijke rechten uit te oefenen, neemt u contact op met:',
        'info@risknil.com',
        'Wij kunnen een redelijke verificatie van de identiteit vereisen voordat wij verzoeken verwerken.',
      ],
    },
  ],
}

const el: ContactContent = {
  linkLabel: 'Επικοινωνία',
  pageTitle: 'Επικοινωνήστε Μαζί Μας',
  sections: [
    {
      heading: 'Στοιχεία Επικοινωνίας',
      content: [
        'Ο διαχειριστής αυτού του Ιστότοπου είναι υπεύθυνος για τον χειρισμό των επικοινωνιών που λαμβάνονται μέσω των καναλιών επικοινωνίας που αναφέρονται παρακάτω.',
        'Email: info@risknil.com',
      ],
    },
    {
      heading: 'Σκοπός της Επικοινωνίας',
      content: [
        'Μπορείτε να επικοινωνήσετε μαζί μας σχετικά με:',
        '• Γενικές ερωτήσεις σχετικά με τον Ιστότοπο ή το περιεχόμενό του',
        '• Αναφορά τεχνικών προβλημάτων, σφαλμάτων ή ανακριβειών',
        '• Νομικά, ρυθμιστικά ή θέματα συμμόρφωσης',
        '• Αιτήματα σχετικά με την προστασία δεδομένων ή το απόρρητο',
        '• Γενικά σχόλια ή επικοινωνία',
        'Ο Ιστότοπος δεν παρέχει εξατομικευμένες συμβουλές οποιουδήποτε είδους, συμπεριλαμβανομένων ενδεικτικά συμβουλών στοιχηματισμού, χρηματοοικονομικών ή επενδυτικών. Όλο το περιεχόμενο παρέχεται αποκλειστικά για ενημερωτικούς σκοπούς.',
      ],
    },
    {
      heading: 'Προστασία Δεδομένων και Νομική Βάση Επεξεργασίας',
      content: [
        'Εάν επικοινωνήσετε μαζί μας, οποιαδήποτε προσωπικά δεδομένα παρέχετε οικειοθελώς (όπως η διεύθυνση email σας και το περιεχόμενο του μηνύματος) ενδέχεται να υποβληθούν σε επεξεργασία με σκοπό την απάντηση στο αίτημά σας και τη διατήρηση της επικοινωνίας.',
        'Ανάλογα με τη δικαιοδοσία σας, η επεξεργασία βασίζεται σε μία ή περισσότερες από τις ακόλουθες αρχές:',
        '• Έννομο συμφέρον για την απάντηση σε επικοινωνίες και τη λειτουργία του Ιστότοπου',
        '• Εκτέλεση προσυμβατικών μέτρων όπου ισχύει',
        '• Συμμόρφωση με νομικές υποχρεώσεις όπου απαιτείται',
        'Όπου ισχύει ο GDPR ή παρόμοιοι νόμοι προστασίας δεδομένων, ενδέχεται να έχετε δικαιώματα σχετικά με τα προσωπικά σας δεδομένα, συμπεριλαμβανομένης της πρόσβασης, της διόρθωσης, της διαγραφής, του περιορισμού της επεξεργασίας και της εναντίωσης στην επεξεργασία.',
      ],
    },
    {
      heading: 'Διεθνείς Χρήστες',
      content: [
        'Αυτός ο Ιστότοπος είναι προσβάσιμος παγκοσμίως. Εάν αποκτάτε πρόσβαση στον Ιστότοπο από χώρα εκτός της χώρας εγκατάστασης του διαχειριστή, αναγνωρίζετε ότι οι πληροφορίες σας ενδέχεται να υποβληθούν σε επεξεργασία σε δικαιοδοσίες που ενδέχεται να μην προσφέρουν το ίδιο επίπεδο προστασίας δεδομένων με τους τοπικούς σας νόμους.',
        'Όπου απαιτείται από την ισχύουσα νομοθεσία, θα εφαρμόζονται κατάλληλες διασφαλίσεις για τέτοιες διαβιβάσεις.',
      ],
    },
    {
      heading: 'Διατήρηση Δεδομένων',
      content: [
        'Διατηρούμε τα προσωπικά δεδομένα μόνο για όσο διάστημα είναι απαραίτητο για να:',
        '• απαντήσουμε στο αίτημά σας, και/ή',
        '• συμμορφωθούμε με τις ισχύουσες νομικές ή ρυθμιστικές υποχρεώσεις',
        'Μετά από αυτή την περίοδο, τα δεδομένα διαγράφονται ή ανωνυμοποιούνται όπου είναι εφικτό.',
      ],
    },
    {
      heading: 'Κοινοποίηση Πληροφοριών',
      content: [
        'Δεν πουλάμε ούτε ενοικιάζουμε προσωπικά δεδομένα.',
        'Τα προσωπικά δεδομένα μπορούν να κοινοποιηθούν μόνο εάν:',
        '• απαιτείται από την ισχύουσα νομοθεσία ή κανονισμό',
        '• ζητηθεί από αρμόδιες νομικές ή ρυθμιστικές αρχές',
        '• είναι απαραίτητο για την προστασία των νόμιμων δικαιωμάτων μας ή την αποτροπή κατάχρησης',
      ],
    },
    {
      heading: 'Ασφάλεια',
      content: [
        'Εφαρμόζουμε εύλογα τεχνικά και οργανωτικά μέτρα για την προστασία των επικοινωνιών. Ωστόσο, καμία μέθοδος ηλεκτρονικής μετάδοσης ή αποθήκευσης δεν είναι απολύτως ασφαλής, και η απόλυτη ασφάλεια δεν μπορεί να εγγυηθεί.',
      ],
    },
    {
      heading: 'Επικοινωνία για Αιτήματα Απορρήτου',
      content: [
        'Για οποιεσδήποτε ερωτήσεις σχετικά με το απόρρητο ή για την άσκηση των ισχυόντων δικαιωμάτων, επικοινωνήστε:',
        'info@risknil.com',
        'Ενδέχεται να απαιτήσουμε εύλογη επαλήθευση ταυτότητας πριν από την επεξεργασία των αιτημάτων.',
      ],
    },
  ],
}

const pl: ContactContent = {
  linkLabel: 'Kontakt',
  pageTitle: 'Skontaktuj się z Nami',
  sections: [
    {
      heading: 'Dane Kontaktowe',
      content: [
        'Operator tej Strony jest odpowiedzialny za obsługę komunikacji otrzymywanej za pośrednictwem kanałów kontaktowych wymienionych poniżej.',
        'E-mail: info@risknil.com',
      ],
    },
    {
      heading: 'Cel Kontaktu',
      content: [
        'Możesz skontaktować się z nami w sprawie:',
        '• Ogólnych pytań dotyczących Strony lub jej treści',
        '• Zgłaszania problemów technicznych, błędów lub nieścisłości',
        '• Spraw prawnych, regulacyjnych lub dotyczących zgodności',
        '• Wniosków związanych z ochroną danych lub prywatnością',
        '• Ogólnych opinii lub komunikacji',
        'Strona nie udziela spersonalizowanych porad jakiegokolwiek rodzaju, w tym między innymi porad dotyczących zakładów, finansowych lub inwestycyjnych. Wszystkie treści są udostępniane wyłącznie w celach informacyjnych.',
      ],
    },
    {
      heading: 'Ochrona Danych i Podstawa Prawna Przetwarzania',
      content: [
        'Jeśli skontaktujesz się z nami, wszelkie dane osobowe, które dobrowolnie podasz (takie jak Twój adres e-mail i treść wiadomości), mogą być przetwarzane w celu udzielenia odpowiedzi na Twoje zapytanie i utrzymania komunikacji.',
        'W zależności od Twojej jurysdykcji przetwarzanie opiera się na jednej lub kilku z poniższych zasad:',
        '• Prawnie uzasadniony interes w odpowiadaniu na komunikację i prowadzeniu Strony',
        '• Wykonanie czynności przedumownych, w stosownych przypadkach',
        '• Wypełnienie obowiązków prawnych, gdy jest to wymagane',
        'W przypadku zastosowania RODO lub podobnych przepisów o ochronie danych możesz mieć prawa dotyczące swoich danych osobowych, w tym dostęp, sprostowanie, usunięcie, ograniczenie przetwarzania i sprzeciw wobec przetwarzania.',
      ],
    },
    {
      heading: 'Użytkownicy Międzynarodowi',
      content: [
        'Ta Strona jest dostępna na całym świecie. Jeśli uzyskujesz dostęp do Strony spoza kraju siedziby operatora, przyjmujesz do wiadomości, że Twoje informacje mogą być przetwarzane w jurysdykcjach, które mogą nie oferować takiego samego poziomu ochrony danych jak Twoje lokalne przepisy.',
        'Tam, gdzie wymaga tego obowiązujące prawo, w odniesieniu do takich transferów zostaną zastosowane odpowiednie zabezpieczenia.',
      ],
    },
    {
      heading: 'Przechowywanie Danych',
      content: [
        'Przechowujemy dane osobowe tylko tak długo, jak jest to konieczne, aby:',
        '• odpowiedzieć na Twoje zapytanie, i/lub',
        '• spełnić obowiązujące zobowiązania prawne lub regulacyjne',
        'Po tym okresie dane są usuwane lub anonimizowane, o ile jest to wykonalne.',
      ],
    },
    {
      heading: 'Ujawnianie Informacji',
      content: [
        'Nie sprzedajemy ani nie wynajmujemy danych osobowych.',
        'Dane osobowe mogą zostać ujawnione tylko wtedy, gdy:',
        '• jest to wymagane przez obowiązujące prawo lub przepisy',
        '• zażądają tego właściwe organy prawne lub regulacyjne',
        '• jest to konieczne do ochrony naszych praw lub zapobiegania nadużyciom',
      ],
    },
    {
      heading: 'Bezpieczeństwo',
      content: [
        'Wdrażamy rozsądne środki techniczne i organizacyjne w celu ochrony komunikacji. Jednak żadna metoda elektronicznej transmisji ani przechowywania nie jest całkowicie bezpieczna i nie można zagwarantować absolutnego bezpieczeństwa.',
      ],
    },
    {
      heading: 'Kontakt w Sprawie Wniosków o Prywatność',
      content: [
        'W przypadku jakichkolwiek pytań dotyczących prywatności lub w celu skorzystania z obowiązujących praw skontaktuj się:',
        'info@risknil.com',
        'Przed przetworzeniem wniosków możemy wymagać rozsądnej weryfikacji tożsamości.',
      ],
    },
  ],
}

const no: ContactContent = {
  linkLabel: 'Kontakt Oss',
  pageTitle: 'Kontakt Oss',
  sections: [
    {
      heading: 'Kontaktinformasjon',
      content: [
        'Operatøren av dette Nettstedet er ansvarlig for å håndtere kommunikasjon mottatt via kontaktkanalene oppført nedenfor.',
        'E-post: info@risknil.com',
      ],
    },
    {
      heading: 'Formål med Kontakt',
      content: [
        'Du kan kontakte oss angående:',
        '• Generelle spørsmål om Nettstedet eller innholdet',
        '• Rapportering av tekniske problemer, feil eller unøyaktigheter',
        '• Juridiske, regulatoriske eller samsvarsrelaterte forhold',
        '• Forespørsler knyttet til databeskyttelse eller personvern',
        '• Generell tilbakemelding eller kommunikasjon',
        'Nettstedet gir ingen personlig rådgivning av noe slag, inkludert, men ikke begrenset til, rådgivning om veddemål, finans eller investeringer. Alt innhold leveres kun for informasjonsformål.',
      ],
    },
    {
      heading: 'Databeskyttelse og Rettslig Grunnlag for Behandling',
      content: [
        'Hvis du kontakter oss, kan alle personopplysninger du frivillig oppgir (som e-postadressen din og meldingsinnholdet) bli behandlet med det formål å svare på henvendelsen din og opprettholde kommunikasjonen.',
        'Avhengig av din jurisdiksjon er behandlingen basert på ett eller flere av følgende prinsipper:',
        '• Berettiget interesse i å svare på kommunikasjon og drive Nettstedet',
        '• Gjennomføring av førkontraktuelle tiltak der det er aktuelt',
        '• Overholdelse av rettslige forpliktelser der det kreves',
        'Der GDPR eller lignende personvernlover gjelder, kan du ha rettigheter knyttet til dine personopplysninger, inkludert innsyn, retting, sletting, begrensning av behandling og innsigelse mot behandling.',
      ],
    },
    {
      heading: 'Internasjonale Brukere',
      content: [
        'Dette Nettstedet er tilgjengelig globalt. Hvis du besøker Nettstedet fra et land utenfor operatørens etableringsland, erkjenner du at informasjonen din kan bli behandlet i jurisdiksjoner som kanskje ikke tilbyr samme nivå av databeskyttelse som dine lokale lover.',
        'Der gjeldende lov krever det, vil egnede sikkerhetstiltak bli anvendt for slike overføringer.',
      ],
    },
    {
      heading: 'Datalagring',
      content: [
        'Vi oppbevarer personopplysninger kun så lenge det er nødvendig for å:',
        '• svare på henvendelsen din, og/eller',
        '• overholde gjeldende rettslige eller regulatoriske forpliktelser',
        'Etter denne perioden slettes eller anonymiseres data der det er mulig.',
      ],
    },
    {
      heading: 'Utlevering av Informasjon',
      content: [
        'Vi selger eller leier ikke ut personopplysninger.',
        'Personopplysninger kan kun utleveres hvis:',
        '• det kreves av gjeldende lov eller forskrift',
        '• det forespørres av kompetente rettslige eller regulatoriske myndigheter',
        '• det er nødvendig for å beskytte våre rettigheter eller forhindre misbruk',
      ],
    },
    {
      heading: 'Sikkerhet',
      content: [
        'Vi implementerer rimelige tekniske og organisatoriske tiltak for å beskytte kommunikasjonen. Ingen metode for elektronisk overføring eller lagring er imidlertid fullstendig sikker, og absolutt sikkerhet kan ikke garanteres.',
      ],
    },
    {
      heading: 'Kontakt for Personvernforespørsler',
      content: [
        'For spørsmål knyttet til personvern eller for å utøve gjeldende rettigheter, kontakt:',
        'info@risknil.com',
        'Vi kan kreve rimelig verifisering av identitet før vi behandler forespørsler.',
      ],
    },
  ],
}

const hu: ContactContent = {
  linkLabel: 'Kapcsolat',
  pageTitle: 'Kapcsolat',
  sections: [
    {
      heading: 'Kapcsolattartási Információk',
      content: [
        'A Weboldal üzemeltetője felelős az alább felsorolt kapcsolattartási csatornákon keresztül beérkező kommunikáció kezeléséért.',
        'E-mail: info@risknil.com',
      ],
    },
    {
      heading: 'A Kapcsolatfelvétel Célja',
      content: [
        'A következőkkel kapcsolatban léphet velünk kapcsolatba:',
        '• Általános kérdések a Weboldallal vagy annak tartalmával kapcsolatban',
        '• Technikai problémák, hibák vagy pontatlanságok bejelentése',
        '• Jogi, szabályozási vagy megfelelőségi ügyek',
        '• Adatvédelemmel vagy magánélettel kapcsolatos kérelmek',
        '• Általános visszajelzés vagy kommunikáció',
        'A Weboldal semmilyen személyre szabott tanácsadást nem nyújt, beleértve, de nem kizárólagosan a fogadási, pénzügyi vagy befektetési tanácsadást. Minden tartalom kizárólag tájékoztató jellegű.',
      ],
    },
    {
      heading: 'Adatvédelem és az Adatkezelés Jogalapja',
      content: [
        'Ha kapcsolatba lép velünk, az Ön által önként megadott személyes adatok (például e-mail címe és az üzenet tartalma) feldolgozásra kerülhetnek a megkeresésére való válaszadás és a kommunikáció fenntartása céljából.',
        'A joghatóságától függően az adatkezelés az alábbi elvek közül egyen vagy többön alapul:',
        '• Jogos érdek a kommunikációra való válaszadáshoz és a Weboldal üzemeltetéséhez',
        '• Szerződéskötést megelőző lépések végrehajtása, ahol alkalmazható',
        '• Jogi kötelezettségeknek való megfelelés, ahol szükséges',
        'Ahol a GDPR vagy hasonló adatvédelmi törvények alkalmazandók, Önt jogok illethetik meg személyes adataival kapcsolatban, beleértve a hozzáférést, a helyesbítést, a törlést, az adatkezelés korlátozását és az adatkezelés elleni tiltakozást.',
      ],
    },
    {
      heading: 'Nemzetközi Felhasználók',
      content: [
        'Ez a Weboldal globálisan elérhető. Ha az üzemeltető székhely szerinti országán kívülről éri el a Weboldalt, tudomásul veszi, hogy adatai olyan joghatóságokban kerülhetnek feldolgozásra, amelyek esetleg nem biztosítják ugyanazt az adatvédelmi szintet, mint a helyi törvényei.',
        'Ahol az alkalmazandó jog megköveteli, megfelelő biztosítékokat alkalmazunk az ilyen továbbításokra.',
      ],
    },
    {
      heading: 'Adatmegőrzés',
      content: [
        'A személyes adatokat csak addig őrizzük meg, ameddig az szükséges ahhoz, hogy:',
        '• válaszoljunk a megkeresésére, és/vagy',
        '• megfeleljünk az alkalmazandó jogi vagy szabályozási kötelezettségeknek',
        'Ezen időszak után az adatokat töröljük vagy anonimizáljuk, ahol ez megvalósítható.',
      ],
    },
    {
      heading: 'Információ Közlése',
      content: [
        'Nem értékesítünk és nem adunk bérbe személyes adatokat.',
        'Személyes adatok csak akkor közölhetők, ha:',
        '• azt az alkalmazandó jog vagy szabályozás megköveteli',
        '• azt illetékes jogi vagy szabályozó hatóságok kérik',
        '• az jogaink védelméhez vagy a visszaélés megelőzéséhez szükséges',
      ],
    },
    {
      heading: 'Biztonság',
      content: [
        'Ésszerű technikai és szervezési intézkedéseket alkalmazunk a kommunikáció védelme érdekében. Azonban az elektronikus továbbítás vagy tárolás egyetlen módszere sem teljesen biztonságos, és az abszolút biztonság nem garantálható.',
      ],
    },
    {
      heading: 'Kapcsolat Adatvédelmi Kérelmekhez',
      content: [
        'Az adatvédelemmel kapcsolatos kérdésekkel vagy az alkalmazandó jogok gyakorlása érdekében forduljon:',
        'info@risknil.com',
        'A kérelmek feldolgozása előtt ésszerű személyazonosság-ellenőrzést kérhetünk.',
      ],
    },
  ],
}

const fi: ContactContent = {
  linkLabel: 'Ota Yhteyttä',
  pageTitle: 'Ota Yhteyttä',
  sections: [
    {
      heading: 'Yhteystiedot',
      content: [
        'Tämän Sivuston ylläpitäjä vastaa alla lueteltujen yhteyskanavien kautta vastaanotetun viestinnän käsittelystä.',
        'Sähköposti: info@risknil.com',
      ],
    },
    {
      heading: 'Yhteydenoton Tarkoitus',
      content: [
        'Voit ottaa meihin yhteyttä seuraavissa asioissa:',
        '• Yleiset kysymykset Sivustosta tai sen sisällöstä',
        '• Teknisten ongelmien, virheiden tai epätarkkuuksien ilmoittaminen',
        '• Oikeudelliset, sääntelyyn liittyvät tai vaatimustenmukaisuuteen liittyvät asiat',
        '• Tietosuojaan tai yksityisyyteen liittyvät pyynnöt',
        '• Yleinen palaute tai viestintä',
        'Sivusto ei tarjoa minkäänlaista henkilökohtaista neuvontaa, mukaan lukien rajoituksetta vedonlyönti-, talous- tai sijoitusneuvonta. Kaikki sisältö tarjotaan ainoastaan tiedotustarkoituksessa.',
      ],
    },
    {
      heading: 'Tietosuoja ja Käsittelyn Oikeusperuste',
      content: [
        'Jos otat meihin yhteyttä, mahdollisia vapaaehtoisesti antamiasi henkilötietoja (kuten sähköpostiosoitettasi ja viestin sisältöä) voidaan käsitellä tiedustelusi vastaamiseksi ja viestinnän ylläpitämiseksi.',
        'Lainkäyttöalueestasi riippuen käsittely perustuu yhteen tai useampaan seuraavista periaatteista:',
        '• Oikeutettu etu vastata viestintään ja ylläpitää Sivustoa',
        '• Sopimusta edeltävien toimenpiteiden toteuttaminen tarvittaessa',
        '• Lakisääteisten velvoitteiden noudattaminen tarvittaessa',
        'Mikäli GDPR tai vastaavat tietosuojalait soveltuvat, sinulla voi olla henkilötietoihisi liittyviä oikeuksia, mukaan lukien oikeus tutustua tietoihin, oikaista, poistaa, rajoittaa käsittelyä ja vastustaa käsittelyä.',
      ],
    },
    {
      heading: 'Kansainväliset Käyttäjät',
      content: [
        'Tämä Sivusto on käytettävissä maailmanlaajuisesti. Jos käytät Sivustoa ylläpitäjän sijoittautumismaan ulkopuolelta, hyväksyt, että tietojasi voidaan käsitellä lainkäyttöalueilla, jotka eivät välttämättä tarjoa samaa tietosuojan tasoa kuin paikalliset lakisi.',
        'Mikäli sovellettava laki sitä edellyttää, tällaisiin siirtoihin sovelletaan asianmukaisia suojatoimia.',
      ],
    },
    {
      heading: 'Tietojen Säilyttäminen',
      content: [
        'Säilytämme henkilötietoja vain niin kauan kuin on tarpeen, jotta voimme:',
        '• vastata tiedusteluusi, ja/tai',
        '• noudattaa sovellettavia oikeudellisia tai sääntelyyn liittyviä velvoitteita',
        'Tämän ajanjakson jälkeen tiedot poistetaan tai anonymisoidaan, mikäli se on mahdollista.',
      ],
    },
    {
      heading: 'Tietojen Luovuttaminen',
      content: [
        'Emme myy emmekä vuokraa henkilötietoja.',
        'Henkilötietoja voidaan luovuttaa vain, jos:',
        '• sovellettava laki tai säädös sitä edellyttää',
        '• toimivaltaiset oikeudelliset tai sääntelyviranomaiset sitä pyytävät',
        '• se on tarpeen oikeuksiemme suojaamiseksi tai väärinkäytön estämiseksi',
      ],
    },
    {
      heading: 'Turvallisuus',
      content: [
        'Toteutamme kohtuullisia teknisiä ja organisatorisia toimenpiteitä viestinnän suojaamiseksi. Mikään sähköisen siirron tai tallennuksen menetelmä ei kuitenkaan ole täysin turvallinen, eikä absoluuttista turvallisuutta voida taata.',
      ],
    },
    {
      heading: 'Yhteystiedot Tietosuojapyyntöjä Varten',
      content: [
        'Mahdollisissa yksityisyyteen liittyvissä kysymyksissä tai sovellettavien oikeuksien käyttämiseksi ota yhteyttä:',
        'info@risknil.com',
        'Saatamme edellyttää kohtuullista henkilöllisyyden varmentamista ennen pyyntöjen käsittelyä.',
      ],
    },
  ],
}

const ro: ContactContent = {
  linkLabel: 'Contactează-ne',
  pageTitle: 'Contactează-ne',
  sections: [
    {
      heading: 'Informații de Contact',
      content: [
        'Operatorul acestui Site este responsabil de gestionarea comunicărilor primite prin canalele de contact enumerate mai jos.',
        'E-mail: info@risknil.com',
      ],
    },
    {
      heading: 'Scopul Contactării',
      content: [
        'Ne puteți contacta în legătură cu:',
        '• Întrebări generale despre Site sau conternutul său',
        '• Raportarea problemelor tehnice, erorilor sau inexactităților',
        '• Aspecte juridice, de reglementare sau de conformitate',
        '• Solicitări legate de protecția datelor sau de confidențialitate',
        '• Feedback general sau comunicare',
        'Site-ul nu oferă consultanță personalizată de niciun fel, inclusiv, dar fără a se limita la, consultanță privind pariurile, financiară sau de investiții. Întregul conținut este furnizat exclusiv în scop informativ.',
      ],
    },
    {
      heading: 'Protecția Datelor și Temeiul Juridic al Prelucrării',
      content: [
        'Dacă ne contactați, orice date cu caracter personal pe care le furnizați voluntar (cum ar fi adresa de e-mail și conținutul mesajului) pot fi prelucrate în scopul de a răspunde la solicitarea dvs. și de a menține comunicarea.',
        'În funcție de jurisdicția dvs., prelucrarea se bazează pe unul sau mai multe dintre următoarele principii:',
        '• Interesul legitim de a răspunde la comunicări și de a opera Site-ul',
        '• Executarea unor măsuri precontractuale, după caz',
        '• Respectarea obligațiilor legale, acolo unde este necesar',
        'Acolo unde se aplică GDPR sau legi similare privind protecția datelor, este posibil să aveți drepturi privind datele dvs. cu caracter personal, inclusiv accesul, rectificarea, ștergerea, restricționarea prelucrării și opoziția la prelucrare.',
      ],
    },
    {
      heading: 'Utilizatori Internaționali',
      content: [
        'Acest Site este accesibil la nivel global. Dacă accesați Site-ul din afara țării de stabilire a operatorului, recunoașteți că informațiile dvs. pot fi prelucrate în jurisdicții care s-ar putea să nu ofere același nivel de protecție a datelor ca legile dvs. locale.',
        'Acolo unde este cerut de legislația aplicabilă, vor fi aplicate garanții adecvate pentru astfel de transferuri.',
      ],
    },
    {
      heading: 'Păstrarea Datelor',
      content: [
        'Păstrăm datele cu caracter personal doar atât timp cât este necesar pentru a:',
        '• răspunde la solicitarea dvs., și/sau',
        '• respecta obligațiile legale sau de reglementare aplicabile',
        'După această perioadă, datele sunt șterse sau anonimizate acolo unde este posibil.',
      ],
    },
    {
      heading: 'Divulgarea Informațiilor',
      content: [
        'Nu vindem și nu închiriem date cu caracter personal.',
        'Datele cu caracter personal pot fi divulgate numai dacă:',
        '• sunt cerute de legislația sau reglementările aplicabile',
        '• sunt solicitate de autoritățile juridice sau de reglementare competente',
        '• sunt necesare pentru a proteja drepturile noastre legale sau pentru a preveni abuzurile',
      ],
    },
    {
      heading: 'Securitate',
      content: [
        'Implementăm măsuri tehnice și organizatorice rezonabile pentru a proteja comunicările. Cu toate acestea, nicio metodă de transmitere sau stocare electronică nu este complet sigură, iar securitatea absolută nu poate fi garantată.',
      ],
    },
    {
      heading: 'Contact pentru Solicitări de Confidențialitate',
      content: [
        'Pentru orice întrebări legate de confidențialitate sau pentru a exercita drepturile aplicabile, contactați:',
        'info@risknil.com',
        'Putem solicita o verificare rezonabilă a identității înainte de a procesa solicitările.',
      ],
    },
  ],
}

const cs: ContactContent = {
  linkLabel: 'Kontaktujte Nás',
  pageTitle: 'Kontaktujte Nás',
  sections: [
    {
      heading: 'Kontaktní Údaje',
      content: [
        'Provozovatel těchto Stránek je odpovědný za vyřizování komunikace přijaté prostřednictvím níže uvedených kontaktních kanálů.',
        'E-mail: info@risknil.com',
      ],
    },
    {
      heading: 'Účel Kontaktu',
      content: [
        'Můžete nás kontaktovat ohledně:',
        '• Obecných dotazů ke Stránkám nebo jejich obsahu',
        '• Hlášení technických problémů, chyb nebo nepřesností',
        '• Právních, regulačních záležitostí nebo otázek souladu s předpisy',
        '• Žádostí týkajících se ochrany údajů nebo soukromí',
        '• Obecné zpětné vazby nebo komunikace',
        'Stránky neposkytují žádné personalizované poradenství jakéhokoli druhu, včetně, ale nikoli výhradně, poradenství v oblasti sázení, financí nebo investic. Veškerý obsah je poskytován pouze pro informační účely.',
      ],
    },
    {
      heading: 'Ochrana Údajů a Právní Základ pro Zpracování',
      content: [
        'Pokud nás kontaktujete, jakékoli osobní údaje, které dobrovolně poskytnete (například vaše e-mailová adresa a obsah zprávy), mohou být zpracovány za účelem odpovědi na váš dotaz a udržení komunikace.',
        'V závislosti na vaší jurisdikci je zpracování založeno na jedné nebo více z následujících zásad:',
        '• Oprávněný zájem na odpovídání na komunikaci a provozování Stránek',
        '• Provedení předsmluvních kroků, kde je to relevantní',
        '• Splnění zákonných povinností, kde je to vyžadováno',
        'Tam, kde se uplatní GDPR nebo podobné zákony o ochraně údajů, můžete mít práva týkající se vašich osobních údajů, včetně přístupu, opravy, výmazu, omezení zpracování a vznesení námitky proti zpracování.',
      ],
    },
    {
      heading: 'Mezinárodní Uživatelé',
      content: [
        'Tyto Stránky jsou přístupné celosvětově. Pokud ke Stránkám přistupujete ze země mimo zemi usazení provozovatele, berete na vědomí, že vaše informace mohou být zpracovávány v jurisdikcích, které nemusí nabízet stejnou úroveň ochrany údajů jako vaše místní zákony.',
        'Tam, kde to vyžaduje platné právo, budou pro takové přenosy uplatněna vhodná ochranná opatření.',
      ],
    },
    {
      heading: 'Uchovávání Údajů',
      content: [
        'Osobní údaje uchováváme pouze po dobu nezbytně nutnou k tomu, abychom:',
        '• odpověděli na váš dotaz, a/nebo',
        '• splnili platné zákonné nebo regulační povinnosti',
        'Po uplynutí této doby jsou údaje vymazány nebo anonymizovány, je-li to proveditelné.',
      ],
    },
    {
      heading: 'Zveřejnění Informací',
      content: [
        'Osobní údaje neprodáváme ani nepronajímáme.',
        'Osobní údaje mohou být zveřejněny pouze, pokud:',
        '• to vyžaduje platný zákon nebo předpis',
        '• o to požádají příslušné právní nebo regulační orgány',
        '• je to nezbytné k ochraně našich práv nebo k zabránění zneužití',
      ],
    },
    {
      heading: 'Zabezpečení',
      content: [
        'Zavádíme přiměřená technická a organizační opatření k ochraně komunikace. Žádná metoda elektronického přenosu nebo ukládání však není zcela bezpečná a absolutní bezpečnost nelze zaručit.',
      ],
    },
    {
      heading: 'Kontakt pro Žádosti o Ochranu Soukromí',
      content: [
        'V případě jakýchkoli dotazů týkajících se soukromí nebo pro uplatnění platných práv kontaktujte:',
        'info@risknil.com',
        'Před zpracováním žádostí můžeme požadovat přiměřené ověření totožnosti.',
      ],
    },
  ],
}

const sw: ContactContent = {
  linkLabel: 'Wasiliana Nasi',
  pageTitle: 'Wasiliana Nasi',
  sections: [
    {
      heading: 'Maelezo ya Mawasiliano',
      content: [
        'Mwendeshaji wa Tovuti hii ana jukumu la kushughulikia mawasiliano yanayopokelewa kupitia njia za mawasiliano zilizoorodheshwa hapa chini.',
        'Barua pepe: info@risknil.com',
      ],
    },
    {
      heading: 'Madhumuni ya Mawasiliano',
      content: [
        'Unaweza kuwasiliana nasi kuhusu:',
        '• Maswali ya jumla kuhusu Tovuti au maudhui yake',
        '• Kuripoti matatizo ya kiufundi, makosa, au dosari',
        '• Masuala ya kisheria, kidhibiti, au utiifu',
        '• Maombi yanayohusiana na ulinzi wa data au faragha',
        '• Maoni ya jumla au mawasiliano',
        'Tovuti haitoi ushauri wa kibinafsi wa aina yoyote, ikiwa ni pamoja na lakini si tu ushauri wa kubeti, kifedha, au uwekezaji. Maudhui yote yanatolewa kwa madhumuni ya habari pekee.',
      ],
    },
    {
      heading: 'Ulinzi wa Data na Msingi wa Kisheria wa Uchakataji',
      content: [
        'Ukiwasiliana nasi, data yoyote ya kibinafsi unayotoa kwa hiari (kama vile anwani yako ya barua pepe na maudhui ya ujumbe) inaweza kuchakatwa kwa madhumuni ya kujibu swali lako na kudumisha mawasiliano.',
        'Kulingana na mamlaka yako, uchakataji unategemea kanuni moja au zaidi kati ya zifuatazo:',
        '• Maslahi halali ya kujibu mawasiliano na kuendesha Tovuti',
        '• Utekelezaji wa hatua za kabla ya mkataba pale inapohitajika',
        '• Kutii wajibu wa kisheria pale unapohitajika',
        'Pale GDPR au sheria zinazofanana za ulinzi wa data zinapotumika, unaweza kuwa na haki kuhusu data yako ya kibinafsi, ikiwa ni pamoja na ufikiaji, urekebishaji, ufutaji, kizuizi cha uchakataji, na kupinga uchakataji.',
      ],
    },
    {
      heading: 'Watumiaji wa Kimataifa',
      content: [
        'Tovuti hii inapatikana duniani kote. Ikiwa unafikia Tovuti kutoka nje ya nchi ya makao ya mwendeshaji, unakubali kwamba taarifa zako zinaweza kuchakatwa katika mamlaka ambazo huenda zisitoe kiwango sawa cha ulinzi wa data kama sheria zako za eneo lako.',
        'Pale inapohitajika na sheria inayotumika, hatua zinazofaa za ulinzi zitatumika kwa uhamishaji huo.',
      ],
    },
    {
      heading: 'Uhifadhi wa Data',
      content: [
        'Tunahifadhi data ya kibinafsi kwa muda unaohitajika tu ili:',
        '• kujibu swali lako, na/au',
        '• kutii wajibu wa kisheria au kidhibiti unaotumika',
        'Baada ya kipindi hiki, data hufutwa au kufanywa isiyojulikana pale inapowezekana.',
      ],
    },
    {
      heading: 'Ufichuaji wa Taarifa',
      content: [
        'Hatuuzi wala kukodisha data ya kibinafsi.',
        'Data ya kibinafsi inaweza kufichuliwa tu ikiwa:',
        '• inahitajika na sheria au kanuni inayotumika',
        '• inaombwa na mamlaka husika za kisheria au kidhibiti',
        '• ni muhimu kulinda haki zetu za kisheria au kuzuia matumizi mabaya',
      ],
    },
    {
      heading: 'Usalama',
      content: [
        'Tunatekeleza hatua zinazofaa za kiufundi na kiutawala kulinda mawasiliano. Hata hivyo, hakuna njia ya usambazaji wa kielektroniki au uhifadhi iliyo salama kabisa, na usalama kamili hauwezi kuhakikishwa.',
      ],
    },
    {
      heading: 'Mawasiliano kwa Maombi ya Faragha',
      content: [
        'Kwa maswali yoyote yanayohusiana na faragha au kutekeleza haki zinazotumika, wasiliana:',
        'info@risknil.com',
        'Tunaweza kuhitaji uthibitishaji unaofaa wa utambulisho kabla ya kushughulikia maombi.',
      ],
    },
  ],
}

const af: ContactContent = {
  linkLabel: 'Kontak Ons',
  pageTitle: 'Kontak Ons',
  sections: [
    {
      heading: 'Kontakbesonderhede',
      content: [
        'Die operateur van hierdie Webwerf is verantwoordelik vir die hantering van kommunikasie wat ontvang word deur die kontakkanale wat hieronder gelys word.',
        'E-pos: info@risknil.com',
      ],
    },
    {
      heading: 'Doel van Kontak',
      content: [
        'U kan ons kontak rakende:',
        '• Algemene vrae oor die Webwerf of die inhoud daarvan',
        '• Rapportering van tegniese probleme, foute of onakkuraathede',
        '• Regs-, regulatoriese of nakomingsaangeleenthede',
        '• Versoeke wat verband hou met databeskerming of privaatheid',
        '• Algemene terugvoer of kommunikasie',
        'Die Webwerf verskaf geen gepersonaliseerde advies van enige aard nie, insluitend maar nie beperk tot weddenskap-, finansiële of beleggingsadvies nie. Alle inhoud word slegs vir inligtingsdoeleindes verskaf.',
      ],
    },
    {
      heading: 'Databeskerming en Regsgrondslag vir Verwerking',
      content: [
        'As u ons kontak, kan enige persoonlike data wat u vrywillig verskaf (soos u e-posadres en die inhoud van die boodskap) verwerk word met die doel om op u navraag te reageer en kommunikasie te handhaaf.',
        'Afhangende van u jurisdiksie is verwerking gebaseer op een of meer van die volgende beginsels:',
        '• Geregverdigde belang om op kommunikasie te reageer en die Webwerf te bedryf',
        '• Uitvoering van voorkontraktuele stappe waar van toepassing',
        '• Nakoming van wetlike verpligtinge waar vereis',
        'Waar die GDPR of soortgelyke databeskermingswette van toepassing is, mag u regte hê rakende u persoonlike data, insluitend toegang, regstelling, uitvee, beperking van verwerking en beswaar teen verwerking.',
      ],
    },
    {
      heading: 'Internasionale Gebruikers',
      content: [
        'Hierdie Webwerf is wêreldwyd toeganklik. As u die Webwerf vanaf buite die operateur se land van vestiging gebruik, erken u dat u inligting verwerk mag word in jurisdiksies wat moontlik nie dieselfde vlak van databeskerming bied as u plaaslike wette nie.',
        'Waar deur toepaslike wetgewing vereis, sal gepaste beskermingsmaatreëls vir sulke oordragte toegepas word.',
      ],
    },
    {
      heading: 'Databehoud',
      content: [
        'Ons behou persoonlike data slegs so lank as wat nodig is om:',
        '• op u navraag te reageer, en/of',
        '• aan toepaslike wetlike of regulatoriese verpligtinge te voldoen',
        'Na hierdie tydperk word data uitgevee of geanonimiseer waar haalbaar.',
      ],
    },
    {
      heading: 'Openbaarmaking van Inligting',
      content: [
        'Ons verkoop of verhuur nie persoonlike data nie.',
        'Persoonlike data mag slegs openbaar gemaak word indien:',
        '• vereis deur toepaslike wet of regulasie',
        '• versoek deur bevoegde regs- of regulatoriese owerhede',
        '• nodig om ons regte te beskerm of misbruik te voorkom',
      ],
    },
    {
      heading: 'Sekuriteit',
      content: [
        'Ons implementeer redelike tegniese en organisatoriese maatreëls om kommunikasie te beskerm. Geen metode van elektroniese oordrag of berging is egter heeltemal veilig nie, en absolute sekuriteit kan nie gewaarborg word nie.',
      ],
    },
    {
      heading: 'Kontak vir Privaatheidsversoeke',
      content: [
        'Vir enige privaatheidsverwante vrae of om toepaslike regte uit te oefen, kontak:',
        'info@risknil.com',
        'Ons mag redelike verifikasie van identiteit vereis voordat ons versoeke verwerk.',
      ],
    },
  ],
}

const zu: ContactContent = {
  linkLabel: 'Xhumana Nathi',
  pageTitle: 'Xhumana Nathi',
  sections: [
    {
      heading: 'Imininingwane Yokuxhumana',
      content: [
        'Umqhubi waleli Sayithi unesibopho sokuphatha izingxoxo ezitholakala ngezinkambu zokuxhumana ezisohlwini ngezansi.',
        'I-imeyili: info@risknil.com',
      ],
    },
    {
      heading: 'Inhloso Yokuxhumana',
      content: [
        'Ungaxhumana nathi mayelana:',
        '• Imibuzo evamile mayelana neSayithi noma okuqukethwe kwalo',
        '• Ukubika izinkinga zobuchwepheshe, amaphutha, noma ukunganembi',
        '• Izindaba zezomthetho, zokulawula, noma zokuthobela',
        '• Izicelo ezihlobene nokuvikelwa kwedatha noma ubumfihlo',
        '• Impendulo evamile noma ukuxhumana',
        'ISayithi alinikezi izeluleko ezenziwe ngokwezifiso zanoma yiluphi uhlobo, kuhlanganise kodwa kungagcini ekwelulekeni kokubheja, kwezimali, noma kokutshalwa kwezimali. Konke okuqukethwe kuhlinzekwa ngezinhloso zolwazi kuphela.',
      ],
    },
    {
      heading: 'Ukuvikelwa Kwedatha Nesisekelo Esingokomthetho Sokucutshungulwa',
      content: [
        'Uma uxhumana nathi, noma iyiphi idatha yomuntu siqu oyinikeza ngokuzithandela (njengekheli lakho le-imeyili nokuqukethwe komlayezo) ingacutshungulwa ngenhloso yokuphendula umbuzo wakho nokugcina ukuxhumana.',
        'Kuye ngegunya lakho lezomthetho, ukucutshungulwa kusekelwe kweminye noma kuyodwa kweminye yale migomo elandelayo:',
        '• Intshisekelo esemthethweni yokuphendula izingxoxo nokuqhuba iSayithi',
        '• Ukufezekiswa kwezinyathelo zangaphambi kwenkontileka lapho kufanele',
        '• Ukuthobela izibopho zomthetho lapho kudingeka',
        'Lapho i-GDPR noma imithetho efanayo yokuvikela idatha isebenza, ungase ube namalungelo mayelana nedatha yakho yomuntu siqu, kuhlanganise ukufinyelela, ukulungisa, ukususa, ukukhawulela ukucutshungulwa, kanye nokuphikisa ukucutshungulwa.',
      ],
    },
    {
      heading: 'Abasebenzisi Bamazwe Ngamazwe',
      content: [
        'Leli Sayithi liyatholakala emhlabeni wonke. Uma ufinyelela iSayithi usuka ngaphandle kwezwe umqhubi atholakala kulo, uyavuma ukuthi ulwazi lwakho lungase lucutshungulwe emagunjini ezomthetho angase angahlinzeki ngezinga elifanayo lokuvikelwa kwedatha njengemithetho yakho yendawo.',
        'Lapho kudingeka ngumthetho osebenzayo, kuzosetshenziswa izivikelo ezifanele kulokho kudluliselwa.',
      ],
    },
    {
      heading: 'Ukugcinwa Kwedatha',
      content: [
        'Sigcina idatha yomuntu siqu kuphela isikhathi eside ngangokudingekayo ukuze:',
        '• siphendule umbuzo wakho, futhi/noma',
        '• sithobele izibopho zomthetho noma zokulawula ezisebenzayo',
        'Ngemuva kwale nkathi, idatha iyasuswa noma yenziwe ingaziwa lapho kungenzeka.',
      ],
    },
    {
      heading: 'Ukudalulwa Kolwazi',
      content: [
        'Asithengisi noma siqashise idatha yomuntu siqu.',
        'Idatha yomuntu siqu ingadalulwa kuphela uma:',
        '• kudingeka ngumthetho noma umthethonqubo osebenzayo',
        '• kuceliwe iziphathimandla ezifanele zezomthetho noma zokulawula',
        '• kudingeka ukuvikela amalungelo ethu noma ukuvimbela ukuhlukunyezwa',
      ],
    },
    {
      heading: 'Ukuphepha',
      content: [
        'Sisebenzisa izinyathelo ezinengqondo zobuchwepheshe nezokuhlela ukuvikela izingxoxo. Nokho, ayikho indlela yokudlulisa noma yokugcina ngogesi ephephe ngokuphelele, futhi ukuphepha okuphelele akukwazi ukuqinisekiswa.',
      ],
    },
    {
      heading: 'Ukuxhumana Ngezicelo Zobumfihlo',
      content: [
        'Kunoma yimiphi imibuzo ehlobene nobumfihlo noma ukusebenzisa amalungelo asebenzayo, xhumana:',
        'info@risknil.com',
        'Singase sidinge ukuqinisekiswa okunengqondo kobunikazi ngaphambi kokucubungula izicelo.',
      ],
    },
  ],
}

const xh: ContactContent = {
  linkLabel: 'Qhagamshelana Nathi',
  pageTitle: 'Qhagamshelana Nathi',
  sections: [
    {
      heading: 'Iinkcukacha Zoqhagamshelwano',
      content: [
        'Umqhubi weli Siza unoxanduva lokuphatha unxibelelwano olufunyenwe ngeendlela zoqhagamshelwano ezidweliswe ngezantsi.',
        'I-imeyile: info@risknil.com',
      ],
    },
    {
      heading: 'Injongo Yoqhagamshelwano',
      content: [
        'Ungaqhagamshelana nathi malunga:',
        '• Imibuzo ngokubanzi malunga neSiza okanye umxholo waso',
        '• Ukuchaza iingxaki zobugcisa, iimpazamo, okanye ukungachaneki',
        '• Imibandela yezomthetho, yolawulo, okanye yokuthobela',
        '• Izicelo ezinxulumene nokhuselo lwedatha okanye ubumfihlo',
        '• Ingxelo ngokubanzi okanye unxibelelwano',
        'ISiza asiniki ngcebiso eyenzelwe umntu ngamnye nayiphi na intlobo, kuquka kodwa kungaphelelanga kwingcebiso yokubheja, yezemali, okanye yotyalo-mali. Wonke umxholo unikezelwa ngeenjongo zolwazi kuphela.',
      ],
    },
    {
      heading: 'Ukhuselo Lwedatha Kunye Nesiseko Somthetho Sokucubungula',
      content: [
        'Ukuba uqhagamshelana nathi, nayiphi na idatha yobuqu oyinikezela ngokuzithandela (njengedilesi yakho ye-imeyile nomxholo womyalezo) inokucutshungulwa ngenjongo yokuphendula umbuzo wakho nokugcina unxibelelwano.',
        'Ngokuxhomekeke kumagunya akho omthetho, ukucutshungulwa kusekelwe kwesinye okanye nangaphezulu kwale migaqo ilandelayo:',
        '• Umdla osemthethweni wokuphendula unxibelelwano nokuqhuba iSiza',
        '• Ukuphunyezwa kwamanyathelo angaphambi kwesivumelwano apho kufanelekileyo',
        '• Ukuthobela uxanduva lomthetho apho kufunekayo',
        'Apho i-GDPR okanye imithetho efanayo yokhuselo lwedatha isebenza, unokuba namalungelo malunga nedatha yakho yobuqu, kuquka ukufikelela, ukulungisa, ukucima, ukuthintela ukucutshungulwa, kunye nokuchasa ukucutshungulwa.',
      ],
    },
    {
      heading: 'Abasebenzisi Bamazwe Ngamazwe',
      content: [
        'Eli Siza liyafikeleleka kwihlabathi liphela. Ukuba ufikelela kwiSiza usuka ngaphandle kwelizwe apho umqhubi amiselwe khona, uyavuma ukuba ulwazi lwakho lunokucutshungulwa kumagunya omthetho anokungaboneleli ngomgangatho ofanayo wokhuselo lwedatha njengemithetho yakho yasekhaya.',
        'Apho kufunwa ngumthetho osebenzayo, kuya kusetyenziswa amalinge afanelekileyo okhuselo kuhambiso olunjalo.',
      ],
    },
    {
      heading: 'Ukugcinwa Kwedatha',
      content: [
        'Sigcina idatha yobuqu kuphela ixesha elifunekayo ukuze:',
        '• siphendule umbuzo wakho, kunye/okanye',
        '• sithobele uxanduva lomthetho okanye lolawulo olusebenzayo',
        'Emva kweli xesha, idatha iyacinywa okanye yenziwe ingaziwa apho kunokwenzeka.',
      ],
    },
    {
      heading: 'Ukutyhilwa Kolwazi',
      content: [
        'Asithengisi okanye siqeshise idatha yobuqu.',
        'Idatha yobuqu inokutyhilwa kuphela ukuba:',
        '• kufunwa ngumthetho okanye ummiselo osebenzayo',
        '• kucelwe ngamagunya asemthethweni okanye olawulo afanelekileyo',
        '• kuyimfuneko ukukhusela amalungelo ethu okanye ukuthintela ukuxhatshazwa',
      ],
    },
    {
      heading: 'Ukhuseleko',
      content: [
        'Siphumeza amanyathelo afanelekileyo obugcisa nawolungelelwaniso ukukhusela unxibelelwano. Nangona kunjalo, akukho ndlela yokudluliswa kombane okanye yokugcina ekhuseleke ngokupheleleyo, kwaye ukhuseleko olupheleleyo alunakuqinisekiswa.',
      ],
    },
    {
      heading: 'Oqhagamshelwano Lwezicelo Zobumfihlo',
      content: [
        'Kuyo nayiphi na imibuzo enxulumene nobumfihlo okanye ukusebenzisa amalungelo asebenzayo, qhagamshelana:',
        'info@risknil.com',
        'Singafuna uqinisekiso olufanelekileyo lwesazisi ngaphambi kokucubungula izicelo.',
      ],
    },
  ],
}

const ja: ContactContent = {
  linkLabel: 'お問い合わせ',
  pageTitle: 'お問い合わせ',
  sections: [
    {
      heading: '連絡先情報',
      content: [
        '本ウェブサイトの運営者は、以下に記載された連絡チャネルを通じて受信した通信の処理について責任を負います。',
        'メール：info@risknil.com',
      ],
    },
    {
      heading: 'お問い合わせの目的',
      content: [
        '以下の事項についてお問い合わせいただけます：',
        '• ウェブサイトまたはその内容に関する一般的な質問',
        '• 技術的な問題、エラー、または不正確な点の報告',
        '• 法的、規制、またはコンプライアンスに関する事項',
        '• データ保護またはプライバシーに関するリクエスト',
        '• 一般的なフィードバックまたは連絡',
        '本ウェブサイトは、ベッティング、財務、または投資に関する助言を含むがこれらに限定されない、いかなる種類の個別化された助言も提供しません。すべての内容は情報提供のみを目的として提供されます。',
      ],
    },
    {
      heading: 'データ保護および処理の法的根拠',
      content: [
        'お問い合わせいただいた場合、お客様が自発的に提供する個人データ（メールアドレスやメッセージの内容など）は、お問い合わせへの対応および連絡の維持を目的として処理されることがあります。',
        'お客様の管轄区域に応じて、処理は以下の原則のうち1つまたは複数に基づきます：',
        '• 通信への対応および本ウェブサイトの運営における正当な利益',
        '• 該当する場合の契約前手続きの履行',
        '• 必要な場合の法的義務の遵守',
        'GDPRまたは類似のデータ保護法が適用される場合、お客様は、アクセス、訂正、削除、処理の制限、および処理への異議を含む、ご自身の個人データに関する権利を有する場合があります。',
      ],
    },
    {
      heading: '国際的な利用者',
      content: [
        '本ウェブサイトは世界中からアクセス可能です。運営者の設立国以外から本ウェブサイトにアクセスする場合、お客様の情報が、お客様の地域の法律と同じ水準のデータ保護を提供しない可能性のある管轄区域で処理されることがあることを了承するものとします。',
        '適用法で求められる場合、そのような移転には適切な保護措置が適用されます。',
      ],
    },
    {
      heading: 'データの保持',
      content: [
        '当社は、以下の目的に必要な期間に限り個人データを保持します：',
        '• お客様のお問い合わせへの対応、および/または',
        '• 適用される法的または規制上の義務の遵守',
        'この期間の後、データは可能な範囲で削除または匿名化されます。',
      ],
    },
    {
      heading: '情報の開示',
      content: [
        '当社は個人データを販売または貸与しません。',
        '個人データは、以下の場合にのみ開示されることがあります：',
        '• 適用される法律または規制で求められる場合',
        '• 管轄の法的または規制当局から要請された場合',
        '• 当社の法的権利を保護し、または不正使用を防止するために必要な場合',
      ],
    },
    {
      heading: 'セキュリティ',
      content: [
        '当社は通信を保護するために合理的な技術的および組織的措置を講じます。ただし、電子的な送信または保存のいかなる方法も完全に安全ではなく、絶対的な安全性を保証することはできません。',
      ],
    },
    {
      heading: 'プライバシーに関するリクエストの連絡先',
      content: [
        'プライバシーに関するご質問や、適用される権利の行使については、以下までご連絡ください：',
        'info@risknil.com',
        'リクエストを処理する前に、合理的な本人確認を求める場合があります。',
      ],
    },
  ],
}

const ko: ContactContent = {
  linkLabel: '문의하기',
  pageTitle: '문의하기',
  sections: [
    {
      heading: '연락처 정보',
      content: [
        '본 웹사이트의 운영자는 아래에 나열된 연락 채널을 통해 수신된 통신의 처리를 담당합니다.',
        '이메일: info@risknil.com',
      ],
    },
    {
      heading: '문의 목적',
      content: [
        '다음 사항에 관하여 문의하실 수 있습니다:',
        '• 웹사이트 또는 그 콘텐츠에 관한 일반적인 질문',
        '• 기술적 문제, 오류 또는 부정확한 사항 신고',
        '• 법률, 규제 또는 규정 준수 관련 사항',
        '• 데이터 보호 또는 개인정보 관련 요청',
        '• 일반적인 피드백 또는 의사소통',
        '본 웹사이트는 베팅, 재무 또는 투자 조언을 포함하되 이에 국한되지 않는 어떠한 종류의 맞춤형 조언도 제공하지 않습니다. 모든 콘텐츠는 정보 제공 목적으로만 제공됩니다.',
      ],
    },
    {
      heading: '데이터 보호 및 처리의 법적 근거',
      content: [
        '귀하가 당사에 연락하는 경우, 귀하가 자발적으로 제공하는 모든 개인 데이터(예: 이메일 주소 및 메시지 내용)는 귀하의 문의에 응답하고 의사소통을 유지할 목적으로 처리될 수 있습니다.',
        '귀하의 관할권에 따라 처리는 다음 원칙 중 하나 이상에 근거합니다:',
        '• 의사소통에 응답하고 웹사이트를 운영하기 위한 정당한 이익',
        '• 해당되는 경우 계약 체결 전 단계의 이행',
        '• 필요한 경우 법적 의무의 준수',
        'GDPR 또는 이와 유사한 데이터 보호법이 적용되는 경우, 귀하는 접근, 정정, 삭제, 처리 제한 및 처리에 대한 이의 제기를 포함하여 귀하의 개인 데이터에 관한 권리를 가질 수 있습니다.',
      ],
    },
    {
      heading: '국제 사용자',
      content: [
        '본 웹사이트는 전 세계적으로 접근 가능합니다. 운영자의 설립 국가 외부에서 웹사이트에 접근하는 경우, 귀하의 정보가 귀하의 현지 법률과 동일한 수준의 데이터 보호를 제공하지 않을 수 있는 관할권에서 처리될 수 있음을 인정합니다.',
        '관련 법률에서 요구하는 경우, 그러한 이전에 대해 적절한 보호 조치가 적용됩니다.',
      ],
    },
    {
      heading: '데이터 보존',
      content: [
        '당사는 다음 목적에 필요한 기간 동안만 개인 데이터를 보존합니다:',
        '• 귀하의 문의에 응답, 및/또는',
        '• 관련 법적 또는 규제 의무 준수',
        '이 기간 이후, 데이터는 가능한 경우 삭제되거나 익명화됩니다.',
      ],
    },
    {
      heading: '정보 공개',
      content: [
        '당사는 개인 데이터를 판매하거나 임대하지 않습니다.',
        '개인 데이터는 다음의 경우에만 공개될 수 있습니다:',
        '• 관련 법률 또는 규정에서 요구하는 경우',
        '• 권한 있는 법률 또는 규제 당국이 요청하는 경우',
        '• 당사의 법적 권리를 보호하거나 남용을 방지하기 위해 필요한 경우',
      ],
    },
    {
      heading: '보안',
      content: [
        '당사는 통신을 보호하기 위해 합리적인 기술적 및 조직적 조치를 시행합니다. 그러나 전자 전송 또는 저장의 어떤 방법도 완전히 안전하지 않으며, 절대적인 보안은 보장될 수 없습니다.',
      ],
    },
    {
      heading: '개인정보 요청 연락처',
      content: [
        '개인정보 관련 질문이나 적용 가능한 권리를 행사하려면 다음으로 연락하십시오:',
        'info@risknil.com',
        '요청을 처리하기 전에 합리적인 신원 확인을 요구할 수 있습니다.',
      ],
    },
  ],
}

const hi: ContactContent = {
  linkLabel: 'संपर्क करें',
  pageTitle: 'संपर्क करें',
  sections: [
    {
      heading: 'संपर्क जानकारी',
      content: [
        'इस वेबसाइट का संचालक नीचे सूचीबद्ध संपर्क चैनलों के माध्यम से प्राप्त संचार को संभालने के लिए जिम्मेदार है।',
        'ईमेल: info@risknil.com',
      ],
    },
    {
      heading: 'संपर्क का उद्देश्य',
      content: [
        'आप निम्नलिखित के संबंध में हमसे संपर्क कर सकते हैं:',
        '• वेबसाइट या इसकी सामग्री के बारे में सामान्य प्रश्न',
        '• तकनीकी समस्याओं, त्रुटियों या अशुद्धियों की रिपोर्ट करना',
        '• कानूनी, नियामक या अनुपालन संबंधी मामले',
        '• डेटा सुरक्षा या गोपनीयता से संबंधित अनुरोध',
        '• सामान्य प्रतिक्रिया या संचार',
        'वेबसाइट किसी भी प्रकार की व्यक्तिगत सलाह प्रदान नहीं करती है, जिसमें सट्टेबाजी, वित्तीय या निवेश सलाह शामिल है लेकिन इन्हीं तक सीमित नहीं है। सभी सामग्री केवल सूचना के उद्देश्यों के लिए प्रदान की जाती है।',
      ],
    },
    {
      heading: 'डेटा सुरक्षा और प्रसंस्करण का कानूनी आधार',
      content: [
        'यदि आप हमसे संपर्क करते हैं, तो आपके द्वारा स्वेच्छा से प्रदान किया गया कोई भी व्यक्तिगत डेटा (जैसे आपका ईमेल पता और संदेश सामग्री) आपकी पूछताछ का उत्तर देने और संचार बनाए रखने के उद्देश्य से संसाधित किया जा सकता है।',
        'आपके अधिकार क्षेत्र के आधार पर, प्रसंस्करण निम्नलिखित सिद्धांतों में से एक या अधिक पर आधारित है:',
        '• संचार का उत्तर देने और वेबसाइट संचालित करने में वैध हित',
        '• जहां लागू हो वहां पूर्व-संविदात्मक कदमों का निष्पादन',
        '• जहां आवश्यक हो वहां कानूनी दायित्वों का अनुपालन',
        'जहां GDPR या इसी तरह के डेटा सुरक्षा कानून लागू होते हैं, वहां आपके पास अपने व्यक्तिगत डेटा के संबंध में अधिकार हो सकते हैं, जिसमें पहुंच, सुधार, विलोपन, प्रसंस्करण पर प्रतिबंध और प्रसंस्करण पर आपत्ति शामिल है।',
      ],
    },
    {
      heading: 'अंतर्राष्ट्रीय उपयोगकर्ता',
      content: [
        'यह वेबसाइट विश्व स्तर पर सुलभ है। यदि आप संचालक के स्थापना देश के बाहर से वेबसाइट तक पहुंच रहे हैं, तो आप स्वीकार करते हैं कि आपकी जानकारी ऐसे अधिकार क्षेत्रों में संसाधित की जा सकती है जो आपके स्थानीय कानूनों के समान स्तर की डेटा सुरक्षा प्रदान नहीं कर सकते हैं।',
        'जहां लागू कानून द्वारा आवश्यक हो, ऐसे स्थानांतरणों के लिए उचित सुरक्षा उपाय लागू किए जाएंगे।',
      ],
    },
    {
      heading: 'डेटा प्रतिधारण',
      content: [
        'हम व्यक्तिगत डेटा को केवल उतने समय तक रखते हैं जितना आवश्यक है:',
        '• आपकी पूछताछ का उत्तर देने के लिए, और/या',
        '• लागू कानूनी या नियामक दायित्वों का अनुपालन करने के लिए',
        'इस अवधि के बाद, जहां संभव हो वहां डेटा को हटा दिया जाता है या गुमनाम कर दिया जाता है।',
      ],
    },
    {
      heading: 'जानकारी का प्रकटीकरण',
      content: [
        'हम व्यक्तिगत डेटा को न तो बेचते हैं और न ही किराए पर देते हैं।',
        'व्यक्तिगत डेटा को केवल तभी प्रकट किया जा सकता है यदि:',
        '• लागू कानून या विनियमन द्वारा आवश्यक हो',
        '• सक्षम कानूनी या नियामक अधिकारियों द्वारा अनुरोध किया गया हो',
        '• हमारे कानूनी अधिकारों की रक्षा करने या दुरुपयोग को रोकने के लिए आवश्यक हो',
      ],
    },
    {
      heading: 'सुरक्षा',
      content: [
        'हम संचार की सुरक्षा के लिए उचित तकनीकी और संगठनात्मक उपाय लागू करते हैं। हालांकि, इलेक्ट्रॉनिक प्रसारण या भंडारण का कोई भी तरीका पूरी तरह से सुरक्षित नहीं है, और पूर्ण सुरक्षा की गारंटी नहीं दी जा सकती।',
      ],
    },
    {
      heading: 'गोपनीयता अनुरोधों के लिए संपर्क',
      content: [
        'गोपनीयता से संबंधित किसी भी प्रश्न के लिए या लागू अधिकारों का प्रयोग करने के लिए, संपर्क करें:',
        'info@risknil.com',
        'अनुरोधों को संसाधित करने से पहले हम पहचान का उचित सत्यापन मांग सकते हैं।',
      ],
    },
  ],
}

const tl: ContactContent = {
  linkLabel: 'Makipag-ugnayan',
  pageTitle: 'Makipag-ugnayan sa Amin',
  sections: [
    {
      heading: 'Impormasyon sa Pakikipag-ugnayan',
      content: [
        'Ang operator ng Website na ito ang may pananagutan sa paghawak ng mga komunikasyong natatanggap sa pamamagitan ng mga channel ng pakikipag-ugnayan na nakalista sa ibaba.',
        'Email: info@risknil.com',
      ],
    },
    {
      heading: 'Layunin ng Pakikipag-ugnayan',
      content: [
        'Maaari kayong makipag-ugnayan sa amin tungkol sa:',
        '• Pangkalahatang mga tanong tungkol sa Website o sa nilalaman nito',
        '• Pag-uulat ng mga teknikal na isyu, error, o kamalian',
        '• Mga usaping legal, regulatoryo, o pagsunod',
        '• Mga kahilingang may kaugnayan sa proteksyon ng data o privacy',
        '• Pangkalahatang feedback o komunikasyon',
        'Ang Website ay hindi nagbibigay ng personalisadong payo ng anumang uri, kabilang ngunit hindi limitado sa payo sa pagtaya, pananalapi, o pamumuhunan. Lahat ng nilalaman ay ibinibigay para sa layuning pang-impormasyon lamang.',
      ],
    },
    {
      heading: 'Proteksyon ng Data at Legal na Batayan para sa Pagproseso',
      content: [
        'Kung makikipag-ugnayan kayo sa amin, ang anumang personal na datos na kusang-loob ninyong ibinibigay (tulad ng inyong email address at nilalaman ng mensahe) ay maaaring iproseso para sa layuning tumugon sa inyong katanungan at panatilihin ang komunikasyon.',
        'Depende sa inyong hurisdiksyon, ang pagproseso ay nakabatay sa isa o higit pa sa mga sumusunod na prinsipyo:',
        '• Lehitimong interes sa pagtugon sa mga komunikasyon at pagpapatakbo ng Website',
        '• Pagsasagawa ng mga hakbang bago ang kontrata kung naaangkop',
        '• Pagsunod sa mga legal na obligasyon kung kinakailangan',
        'Kung saan nalalapat ang GDPR o katulad na mga batas sa proteksyon ng data, maaaring may mga karapatan kayo tungkol sa inyong personal na datos, kabilang ang pag-access, pagwawasto, pagtanggal, paghihigpit sa pagproseso, at pagtutol sa pagproseso.',
      ],
    },
    {
      heading: 'Mga Internasyonal na User',
      content: [
        'Ang Website na ito ay naa-access sa buong mundo. Kung ina-access ninyo ang Website mula sa labas ng bansang pinagtatatagan ng operator, kinikilala ninyo na ang inyong impormasyon ay maaaring iproseso sa mga hurisdiksyon na maaaring hindi nag-aalok ng parehong antas ng proteksyon ng data tulad ng inyong mga lokal na batas.',
        'Kung saan kinakailangan ng naaangkop na batas, ang mga naaangkop na panangga ay ilalapat para sa gayong mga paglilipat.',
      ],
    },
    {
      heading: 'Pagpapanatili ng Data',
      content: [
        'Pinapanatili lamang namin ang personal na datos hangga\u2019t kinakailangan upang:',
        '• tumugon sa inyong katanungan, at/o',
        '• sumunod sa mga naaangkop na legal o regulatoryong obligasyon',
        'Pagkatapos ng panahong ito, ang datos ay binubura o ginagawang hindi nakikilala kung saan magagawa.',
      ],
    },
    {
      heading: 'Pagsisiwalat ng Impormasyon',
      content: [
        'Hindi namin ibinebenta o pinaparenta ang personal na datos.',
        'Ang personal na datos ay maaari lamang isiwalat kung:',
        '• kinakailangan ng naaangkop na batas o regulasyon',
        '• hinihiling ng mga karampatang legal o regulatoryong awtoridad',
        '• kinakailangan upang protektahan ang aming mga legal na karapatan o pigilan ang pang-aabuso',
      ],
    },
    {
      heading: 'Seguridad',
      content: [
        'Nagpapatupad kami ng makatwirang teknikal at organisasyonal na mga hakbang upang protektahan ang mga komunikasyon. Gayunpaman, walang paraan ng elektronikong transmisyon o pag-iimbak na ganap na ligtas, at hindi magagarantiya ang lubos na seguridad.',
      ],
    },
    {
      heading: 'Kontak para sa mga Kahilingan sa Privacy',
      content: [
        'Para sa anumang mga tanong na may kaugnayan sa privacy o upang gamitin ang mga naaangkop na karapatan, makipag-ugnayan sa:',
        'info@risknil.com',
        'Maaari kaming humingi ng makatwirang pagpapatunay ng pagkakakilanlan bago iproseso ang mga kahilingan.',
      ],
    },
  ],
}

const ar: ContactContent = {
  linkLabel: 'اتصل بنا',
  pageTitle: 'اتصل بنا',
  sections: [
    {
      heading: 'معلومات الاتصal',
      content: [
        'مشغّل هذا الموقع مسؤول عن التعامل مع المراسلات الواردة عبر قنوات الاتصال المدرجة أدناه.',
        'البريد الإلكتروني: info@risknil.com',
      ],
    },
    {
      heading: 'الغرض من الاتصال',
      content: [
        'يمكنك الاتصال بنا بشأن:',
        '• الأسئلة العامة حول الموقع أو محتواه',
        '• الإبلاغ عن المشكلات التقنية أو الأخطاء أو عدم الدقة',
        '• المسائل القانونية أو التنظيمية أو المتعلقة بالامتثال',
        '• الطلبات المتعلقة بحماية البيانات أو الخصوصية',
        '• الملاحظات العامة أو التواصل',
        'لا يقدم الموقع أي مشورة شخصية من أي نوع، بما في ذلك على سبيل المثال لا الحصر المشورة المتعلقة بالمراهنات أو المالية أو الاستثمارية. يُقدَّم كل المحتوى لأغراض إعلامية فقط.',
      ],
    },
    {
      heading: 'حماية البيانات والأساس القانوني للمعالجة',
      content: [
        'إذا اتصلت بنا، فقد تتم معالجة أي بيانات شخصية تقدمها طوعًا (مثل عنوان بريدك الإلكتروني ومحتوى الرسالة) لغرض الرد على استفسارك والحفاظ على التواصل.',
        'بناءً على ولايتك القضائية، تستند المعالجة إلى مبدأ واحد أو أكثر من المبادئ التالية:',
        '• المصلحة المشروعة في الرد على المراسلات وتشغيل الموقع',
        '• تنفيذ خطوات ما قبل التعاقد عند الاقتضاء',
        '• الامتثال للالتزامات القانونية عند الاقتضاء',
        'حيثما تنطبق اللائحة العامة لحماية البيانات (GDPR) أو قوانين حماية بيانات مماثلة، قد تكون لديك حقوق فيما يتعلق ببياناتك الشخصية، بما في ذلك الوصول والتصحيح والحذف وتقييد المعالجة والاعتراض على المعالجة.',
      ],
    },
    {
      heading: 'المستخدمون الدوليون',
      content: [
        'هذا الموقع متاح عالميًا. إذا كنت تصل إلى الموقع من خارج بلد تأسيس المشغّل، فإنك تقر بأن معلوماتك قد تتم معالجتها في ولايات قضائية قد لا توفر نفس مستوى حماية البيانات الذي توفره قوانينك المحلية.',
        'حيثما يقتضي القانون المعمول به ذلك، سيتم تطبيق ضمانات مناسبة لمثل هذه عمليات النقل.',
      ],
    },
    {
      heading: 'الاحتفاظ بالبيانات',
      content: [
        'نحتفظ بالبيانات الشخصية فقط للمدة اللازمة من أجل:',
        '• الرد على استفسارك، و/أو',
        '• الامتثال للالتزامات القانونية أو التنظيمية المعمول بها',
        'بعد هذه الفترة، يتم حذف البيانات أو جعلها مجهولة المصدر حيثما كان ذلك ممكنًا.',
      ],
    },
    {
      heading: 'الإفصاح عن المعلومات',
      content: [
        'نحن لا نبيع أو نؤجر البيانات الشخصية.',
        'لا يجوز الإفصاح عن البيانات الشخصية إلا إذا:',
        '• اقتضى القانون أو اللائحة المعمول بها ذلك',
        '• طلبت ذلك السلطات القانونية أو التنظيمية المختصة',
        '• كان ضروريًا لحماية حقوقنا القانونية أو منع إساءة الاستخدام',
      ],
    },
    {
      heading: 'الأمان',
      content: [
        'نطبّق تدابير تقنية وتنظيمية معقولة لحماية المراسلات. ومع ذلك، لا توجد طريقة نقل أو تخزين إلكتروني آمنة تمامًا، ولا يمكن ضمان الأمان المطلق.',
      ],
    },
    {
      heading: 'جهة الاتصال لطلبات الخصوصية',
      content: [
        'لأي أسئلة متعلقة بالخصوصية أو لممارسة الحقوق المعمول بها، اتصل بـ:',
        'info@risknil.com',
        'قد نطلب التحقق المعقول من الهوية قبل معالجة الطلبات.',
      ],
    },
  ],
}

const translations: Record<Language, ContactContent> = {
  en,
  es,
  pt,
  'zh-CN': zhCN,
  'zh-TW': zhTW,
  it,
  fr,
  de,
  sv,
  da,
  nl,
  el,
  pl,
  no,
  hu,
  fi,
  ro,
  cs,
  sw,
  af,
  zu,
  xh,
  ja,
  ko,
  hi,
  tl,
  ar,
}

export function getContactTranslation(language: Language): ContactContent {
  return translations[language] || en
}

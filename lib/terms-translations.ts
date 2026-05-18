export interface TermsSection {
  title: string
  content: string
}

export interface TermsContent {
  title: string
  lastUpdated: string
  backButton: string
  sections: TermsSection[]
  legalNote: string
}

const enTerms: TermsContent = {
  title: 'General Terms of Use for Risknil.com',
  lastUpdated: 'Last Updated: May 14, 2026',
  backButton: 'Back to RiskNil',
  legalNote: 'In the event of any discrepancy between language versions, the English version shall prevail.',
  sections: [
    { title: '1. Terms of Use', content: 'These Terms of Use (the "Terms") constitute a legally binding agreement between the "Provider" (as defined in Section 29) and any individual or entity (the "User") who accesses the website risknil.com, its mobile applications, or any associated features, content, or services (collectively, the "Website"). The Provider and the User are collectively referred to as the "Parties."' },
    { title: '2. General Provisions and Global Scope', content: `Applicability: These Terms govern the entire relationship between the Provider and the User. By accessing the Website, the User confirms they have read, understood, and agreed to these Terms in their entirety.

Amendments: The Provider reserves the right to modify, suspend, or supplement these Terms at any time. Continued use of the Website following changes constitutes acceptance of those changes.

Legal Use: The Website must be used only for lawful purposes. Users are prohibited from using the Website to transmit or store material that violates any law, infringes on third-party intellectual property, or violates gambling or foreign exchange regulations in any jurisdiction.

Sanctions: In the event of misuse, the Provider reserves the right to block access, terminate accounts, and initiate legal proceedings at its sole discretion.` },
    { title: '3. Description of Services', content: 'The Website provides an interactive platform featuring sports information, scores, betting tips, and analytical data. This information is gathered from independent third-party sources and internal efforts. While the Provider strives for accuracy, it does not guarantee the reliability of match results or betting odds. The Provider is not responsible for any use made by the User of the information contained on the Website.' },
    { title: '4. Payments and Bank Transfers', content: `Payment Methods: The Website accepts payments for premium services via secure online gateways and direct bank transfers.

Bank Transfer Protocol: Users opting for bank transfers must follow the specific instructions provided at the time of checkout. Services will only be activated once the Provider has confirmed receipt of the full cleared funds.

Accuracy of Information: The User is responsible for ensuring all payment and banking details provided are accurate. The Provider is not responsible for funds lost due to incorrect banking information provided by the User.

Finality of Payment: Unless mandated by local consumer law, all payments are non-refundable once the digital service or content has been accessed.` },
    { title: '5. Proprietary Content (No User-Generated Content)', content: `Exclusive Ownership: All content displayed on the Website is provided exclusively by the Provider or its licensed third-party partners.

No User Submissions: The Website does not allow, host, or display User-Generated Content (UGC), including but not limited to comments, forum posts, or public data uploads.

Prohibited Actions: Users may not attempt to post, upload, or inject content into the Website. Any attempt to circumvent this restriction will be considered a breach of security and these Terms.` },
    { title: '6. Third-Party Links and Advertising', content: 'The User acknowledges that any interaction with third-party websites or advertisements found on the Website is entirely at their own risk. The Provider is not a party to any agreements made between the User and a third party and accepts no liability for disputes arising from such interactions.' },
    { title: '7. Account Inactivity', content: 'The Provider reserves the right to close any User account that has not been accessed for 180 consecutive days. This closure may occur with immediate effect and without prior notice.' },
    { title: '8. Intellectual Property and Copyright', content: `Ownership: All content, software, and proprietary algorithms on the Website are the property of the Provider. Users are strictly prohibited from copying, distributing, "scraping," or reproducing any part of the Website without prior written consent.

Enforcement: Any violation of intellectual property rights will be pursued to the fullest extent of the law.` },
    { title: '9. Legal Compliance and Jurisdiction', content: `Governing Law: These Terms are governed by and construed in accordance with the laws of the United Kingdom. All Parties submit to the exclusive jurisdiction of the courts of the United Kingdom.

Exclusion: The United Nations Convention on Contracts for the International Sale of Goods is expressly excluded.` },
    { title: '10. Disclaimer and Limitation of Liability', content: `No Warranties: The Website is provided "as is." The Provider assumes no responsibility or warranty (express or implied) that the content is error-free.

Not a Gambling Service: The Website is an information tool and not a gambling or betting service. The Provider does not participate in gambling transactions or hold User funds for betting purposes.

Limitation of Loss: The Provider is not liable for any direct or indirect loss, including loss of profits or winnings, resulting from the use of the Website.` },
    { title: 'Privacy Policy', content: '' },
    { title: '11. Data Protection and GDPR', content: 'The Website is committed to protecting User privacy in compliance with international standards, including the General Data Protection Regulation (GDPR). The Data Controller is risknil.com.' },
    { title: '12. Collection of Personal Data', content: `Registration: Personal data (e.g., email, name) is collected only when a User registers for advanced services.

Consent: By using these services, the User consents to the collection of their data. Consent can be withdrawn at any time by emailing info@risknil.com.` },
    { title: '13. Your Rights as a Data Subject', content: `Users possess the following rights regarding their data:

Access and Rectification: The right to view and correct personal data.

Erasure: The right to have data deleted if it is no longer necessary.

Restriction and Objection: The right to limit how data is processed or object to marketing.

Portability: The right to receive data in a machine-readable format.` },
    { title: '14. Use of Data and Marketing', content: 'Personal data is used to communicate with Users, process bank transfers/payments, provide personalized content, and maintain security. We do not sell or trade personal data to third parties for marketing purposes.' },
    { title: '15. Disclosure of Data', content: 'Data may be disclosed to third parties only to facilitate payment processing (e.g., banking institutions), in the event of a sale of the Website, or to comply with legal obligations.' },
    { title: '16. Security and Retention', content: `Security Measures: We use technical measures, including SSL and hashing algorithms, to protect data.

Retention: Data is kept only as long as necessary. If an account remains inactive for one (1) year, all associated personal data will be permanently deleted.` },
    { title: '17. Cookie Policy', content: 'The Website uses cookies to personalize content, analyze traffic, and provide social media features. Users can disable cookies in their browser settings.' },
    { title: '18. Version and Contact', content: `Provider: Risknil.com.

Email: info@risknil.com.

Last Updated: May 14, 2026.

In the event of any discrepancy between language versions, the English version shall prevail.` }
  ]
}

const esTerms: TermsContent = {
  title: 'Términos Generales de Uso para Risknil.com',
  lastUpdated: 'Última actualización: 14 de mayo de 2026',
  backButton: 'Volver a RiskNil',
  legalNote: 'En caso de discrepancia entre las versiones en diferentes idiomas, prevalecerá la versión en inglés.',
  sections: [
    { title: '1. Términos de Uso', content: 'Estos Términos de Uso (los "Términos") constituyen un acuerdo legalmente vinculante entre el "Proveedor" (según se define en la Sección 29) y cualquier individuo o entidad (el "Usuario") que acceda al sitio web risknil.com, sus aplicaciones móviles o cualquier función, contenido o servicio asociado (colectivamente, el "Sitio Web"). El Proveedor y el Usuario se denominan colectivamente las "Partes".' },
    { title: '2. Disposiciones Generales y Alcance Global', content: `Aplicabilidad: Estos Términos rigen toda la relación entre el Proveedor y el Usuario. Al acceder al Sitio Web, el Usuario confirma que ha leído, entendido y aceptado estos Términos en su totalidad.

Modificaciones: El Proveedor se reserva el derecho de modificar, suspender o complementar estos Términos en cualquier momento. El uso continuado del Sitio Web después de los cambios constituye la aceptación de dichos cambios.

Uso Legal: El Sitio Web debe usarse solo con fines lícitos. Los Usuarios tienen prohibido usar el Sitio Web para transmitir o almacenar material que viole cualquier ley, infrinja la propiedad intelectual de terceros o viole las regulaciones de juego o cambio de divisas en cualquier jurisdicción.

Sanciones: En caso de mal uso, el Proveedor se reserva el derecho de bloquear el acceso, terminar cuentas e iniciar procedimientos legales a su entera discreción.` },
    { title: '3. Descripción de Servicios', content: 'El Sitio Web proporciona una plataforma interactiva con información deportiva, puntuaciones, consejos de apuestas y datos analíticos. Esta información se recopila de fuentes independientes de terceros y esfuerzos internos. Si bien el Proveedor se esfuerza por la precisión, no garantiza la fiabilidad de los resultados de los partidos o las cuotas de apuestas. El Proveedor no es responsable del uso que el Usuario haga de la información contenida en el Sitio Web.' },
    { title: '4. Pagos y Transferencias Bancarias', content: `Métodos de Pago: El Sitio Web acepta pagos por servicios premium a través de pasarelas de pago seguras en línea y transferencias bancarias directas.

Protocolo de Transferencia Bancaria: Los Usuarios que opten por transferencias bancarias deben seguir las instrucciones específicas proporcionadas en el momento del pago. Los servicios solo se activarán una vez que el Proveedor haya confirmado la recepción de los fondos completos.

Exactitud de la Información: El Usuario es responsable de garantizar que todos los datos de pago y bancarios proporcionados sean correctos. El Proveedor no es responsable de los fondos perdidos debido a información bancaria incorrecta proporcionada por el Usuario.

Finalidad del Pago: A menos que lo exija la ley de consumo local, todos los pagos no son reembolsables una vez que se haya accedido al servicio o contenido digital.` },
    { title: '5. Contenido Propietario (Sin Contenido Generado por el Usuario)', content: `Propiedad Exclusiva: Todo el contenido mostrado en el Sitio Web es proporcionado exclusivamente por el Proveedor o sus socios externos licenciados.

Sin Envíos de Usuario: El Sitio Web no permite, aloja ni muestra Contenido Generado por el Usuario (CGU), incluyendo pero no limitado a comentarios, publicaciones en foros o cargas de datos públicos.

Acciones Prohibidas: Los Usuarios no pueden intentar publicar, cargar o inyectar contenido en el Sitio Web. Cualquier intento de eludir esta restricción se considerará una violación de la seguridad y estos Términos.` },
    { title: '6. Enlaces de Terceros y Publicidad', content: 'El Usuario reconoce que cualquier interacción con sitios web de terceros o anuncios encontrados en el Sitio Web es enteramente bajo su propio riesgo. El Proveedor no es parte de ningún acuerdo realizado entre el Usuario y un tercero y no acepta responsabilidad por disputas derivadas de tales interacciones.' },
    { title: '7. Inactividad de la Cuenta', content: 'El Proveedor se reserva el derecho de cerrar cualquier cuenta de Usuario que no haya sido accedida durante 180 días consecutivos. Este cierre puede ocurrir con efecto inmediato y sin previo aviso.' },
    { title: '8. Propiedad Intelectual y Derechos de Autor', content: `Propiedad: Todo el contenido, software y algoritmos propietarios en el Sitio Web son propiedad del Proveedor. Los Usuarios tienen estrictamente prohibido copiar, distribuir, "extraer" o reproducir cualquier parte del Sitio Web sin consentimiento previo por escrito.

Cumplimiento: Cualquier violación de los derechos de propiedad intelectual será perseguida en toda la extensión de la ley.` },
    { title: '9. Cumplimiento Legal y Jurisdicción', content: `Ley Aplicable: Estos Términos se rigen e interpretan de acuerdo con las leyes del Reino Unido. Todas las Partes se someten a la jurisdicción exclusiva de los tribunales del Reino Unido.

Exclusión: La Convención de las Naciones Unidas sobre los Contratos de Compraventa Internacional de Mercaderías queda expresamente excluida.` },
    { title: '10. Descargo de Responsabilidad y Limitación de Responsabilidad', content: `Sin Garantías: El Sitio Web se proporciona "tal cual". El Proveedor no asume ninguna responsabilidad ni garantía (expresa o implícita) de que el contenido esté libre de errores.

No es un Servicio de Juego: El Sitio Web es una herramienta de información y no un servicio de juego o apuestas. El Proveedor no participa en transacciones de juego ni retiene fondos del Usuario para fines de apuestas.

Limitación de Pérdidas: El Proveedor no es responsable de ninguna pérdida directa o indirecta, incluyendo pérdida de ganancias o premios, resultante del uso del Sitio Web.` },
    { title: 'Política de Privacidad', content: '' },
    { title: '11. Protección de Datos y RGPD', content: 'El Sitio Web está comprometido con la protección de la privacidad del Usuario en cumplimiento con los estándares internacionales, incluido el Reglamento General de Protección de Datos (RGPD). El Responsable del Tratamiento de Datos es risknil.com.' },
    { title: '12. Recopilación de Datos Personales', content: `Registro: Los datos personales (por ejemplo, correo electrónico, nombre) se recopilan solo cuando un Usuario se registra para servicios avanzados.

Consentimiento: Al utilizar estos servicios, el Usuario consiente la recopilación de sus datos. El consentimiento puede retirarse en cualquier momento enviando un correo electrónico a info@risknil.com.` },
    { title: '13. Sus Derechos como Titular de los Datos', content: `Los Usuarios poseen los siguientes derechos respecto a sus datos:

Acceso y Rectificación: El derecho a ver y corregir datos personales.

Supresión: El derecho a que los datos sean eliminados si ya no son necesarios.

Restricción y Oposición: El derecho a limitar cómo se procesan los datos u oponerse al marketing.

Portabilidad: El derecho a recibir los datos en un formato legible por máquina.` },
    { title: '14. Uso de Datos y Marketing', content: 'Los datos personales se utilizan para comunicarse con los Usuarios, procesar transferencias bancarias/pagos, proporcionar contenido personalizado y mantener la seguridad. No vendemos ni intercambiamos datos personales a terceros con fines de marketing.' },
    { title: '15. Divulgación de Datos', content: 'Los datos pueden divulgarse a terceros solo para facilitar el procesamiento de pagos (por ejemplo, instituciones bancarias), en caso de venta del Sitio Web, o para cumplir con obligaciones legales.' },
    { title: '16. Seguridad y Retención', content: `Medidas de Seguridad: Utilizamos medidas técnicas, incluyendo SSL y algoritmos de hash, para proteger los datos.

Retención: Los datos se conservan solo el tiempo necesario. Si una cuenta permanece inactiva durante un (1) año, todos los datos personales asociados serán eliminados permanentemente.` },
    { title: '17. Política de Cookies', content: 'El Sitio Web utiliza cookies para personalizar el contenido, analizar el tráfico y proporcionar funciones de redes sociales. Los Usuarios pueden deshabilitar las cookies en la configuración de su navegador.' },
    { title: '18. Versión y Contacto', content: `Proveedor: Risknil.com.

Correo electrónico: info@risknil.com.

Última actualización: 14 de mayo de 2026.

En caso de discrepancia entre las versiones en diferentes idiomas, prevalecerá la versión en inglés.` }
  ]
}

const ptTerms: TermsContent = {
  title: 'Termos Gerais de Uso para Risknil.com',
  lastUpdated: 'Última atualização: 14 de maio de 2026',
  backButton: 'Voltar ao RiskNil',
  legalNote: 'Em caso de discrepância entre versões em diferentes idiomas, a versão em inglês prevalecerá.',
  sections: [
    { title: '1. Termos de Uso', content: 'Estes Termos de Uso (os "Termos") constituem um acordo legalmente vinculativo entre o "Provedor" (conforme definido na Seção 29) e qualquer indivíduo ou entidade (o "Usuário") que acesse o site risknil.com, seus aplicativos móveis ou quaisquer recursos, conteúdos ou serviços associados (coletivamente, o "Site"). O Provedor e o Usuário são coletivamente referidos como as "Partes".' },
    { title: '2. Disposições Gerais e Escopo Global', content: `Aplicabilidade: Estes Termos regem toda a relação entre o Provedor e o Usuário. Ao acessar o Site, o Usuário confirma que leu, entendeu e concordou com estes Termos em sua totalidade.

Alterações: O Provedor reserva-se o direito de modificar, suspender ou complementar estes Termos a qualquer momento. O uso continuado do Site após as alterações constitui aceitação dessas alterações.

Uso Legal: O Site deve ser usado apenas para fins lícitos. Os Usuários estão proibidos de usar o Site para transmitir ou armazenar material que viole qualquer lei, infrinja propriedade intelectual de terceiros ou viole regulamentos de jogos de azar ou câmbio em qualquer jurisdição.

Sanções: Em caso de uso indevido, o Provedor reserva-se o direito de bloquear o acesso, encerrar contas e iniciar procedimentos legais a seu exclusivo critério.` },
    { title: '3. Descrição dos Serviços', content: 'O Site fornece uma plataforma interativa com informações esportivas, resultados, dicas de apostas e dados analíticos. Essas informações são coletadas de fontes independentes de terceiros e esforços internos. Embora o Provedor se esforce pela precisão, não garante a confiabilidade dos resultados das partidas ou das odds de apostas. O Provedor não é responsável por qualquer uso que o Usuário faça das informações contidas no Site.' },
    { title: '4. Pagamentos e Transferências Bancárias', content: `Métodos de Pagamento: O Site aceita pagamentos por serviços premium através de gateways de pagamento online seguros e transferências bancárias diretas.

Protocolo de Transferência Bancária: Usuários que optarem por transferências bancárias devem seguir as instruções específicas fornecidas no momento do checkout. Os serviços serão ativados apenas após o Provedor confirmar o recebimento dos fundos completos.

Precisão das Informações: O Usuário é responsável por garantir que todos os dados de pagamento e bancários fornecidos sejam precisos. O Provedor não é responsável por fundos perdidos devido a informações bancárias incorretas fornecidas pelo Usuário.

Finalidade do Pagamento: A menos que exigido pela lei local de consumo, todos os pagamentos não são reembolsáveis após o acesso ao serviço ou conteúdo digital.` },
    { title: '5. Conteúdo Proprietário (Sem Conteúdo Gerado pelo Usuário)', content: `Propriedade Exclusiva: Todo o conteúdo exibido no Site é fornecido exclusivamente pelo Provedor ou seus parceiros terceirizados licenciados.

Sem Envios de Usuário: O Site não permite, hospeda ou exibe Conteúdo Gerado pelo Usuário (CGU), incluindo, mas não limitado a, comentários, posts em fóruns ou uploads de dados públicos.

Ações Proibidas: Os Usuários não podem tentar publicar, carregar ou injetar conteúdo no Site. Qualquer tentativa de contornar esta restrição será considerada uma violação de segurança e destes Termos.` },
    { title: '6. Links de Terceiros e Publicidade', content: 'O Usuário reconhece que qualquer interação com sites de terceiros ou anúncios encontrados no Site é inteiramente por sua conta e risco. O Provedor não é parte de quaisquer acordos feitos entre o Usuário e um terceiro e não aceita responsabilidade por disputas decorrentes de tais interações.' },
    { title: '7. Inatividade da Conta', content: 'O Provedor reserva-se o direito de encerrar qualquer conta de Usuário que não tenha sido acessada por 180 dias consecutivos. Este encerramento pode ocorrer com efeito imediato e sem aviso prévio.' },
    { title: '8. Propriedade Intelectual e Direitos Autorais', content: `Propriedade: Todo o conteúdo, software e algoritmos proprietários no Site são propriedade do Provedor. Os Usuários estão estritamente proibidos de copiar, distribuir, "raspar" ou reproduzir qualquer parte do Site sem consentimento prévio por escrito.

Aplicação: Qualquer violação dos direitos de propriedade intelectual será perseguida na máxima extensão da lei.` },
    { title: '9. Conformidade Legal e Jurisdição', content: `Lei Aplicável: Estes Termos são regidos e interpretados de acordo com as leis do Reino Unido. Todas as Partes submetem-se à jurisdição exclusiva dos tribunais do Reino Unido.

Exclusão: A Convenção das Nações Unidas sobre Contratos de Compra e Venda Internacional de Mercadorias é expressamente excluída.` },
    { title: '10. Isenção de Responsabilidade e Limitação de Responsabilidade', content: `Sem Garantias: O Site é fornecido "como está". O Provedor não assume nenhuma responsabilidade ou garantia (expressa ou implícita) de que o conteúdo seja livre de erros.

Não é um Serviço de Jogos: O Site é uma ferramenta de informação e não um serviço de jogos ou apostas. O Provedor não participa de transações de jogos nem mantém fundos do Usuário para fins de apostas.

Limitação de Perdas: O Provedor não é responsável por qualquer perda direta ou indireta, incluindo perda de lucros ou ganhos, resultante do uso do Site.` },
    { title: 'Política de Privacidade', content: '' },
    { title: '11. Proteção de Dados e RGPD', content: 'O Site está comprometido em proteger a privacidade do Usuário em conformidade com os padrões internacionais, incluindo o Regulamento Geral de Proteção de Dados (RGPD). O Controlador de Dados é risknil.com.' },
    { title: '12. Coleta de Dados Pessoais', content: `Registro: Dados pessoais (por exemplo, e-mail, nome) são coletados apenas quando um Usuário se registra para serviços avançados.

Consentimento: Ao usar estes serviços, o Usuário consente com a coleta de seus dados. O consentimento pode ser retirado a qualquer momento enviando um e-mail para info@risknil.com.` },
    { title: '13. Seus Direitos como Titular dos Dados', content: `Os Usuários possuem os seguintes direitos em relação aos seus dados:

Acesso e Retificação: O direito de visualizar e corrigir dados pessoais.

Apagamento: O direito de ter os dados excluídos se não forem mais necessários.

Restrição e Objeção: O direito de limitar como os dados são processados ou se opor ao marketing.

Portabilidade: O direito de receber os dados em um formato legível por máquina.` },
    { title: '14. Uso de Dados e Marketing', content: 'Os dados pessoais são usados para se comunicar com os Usuários, processar transferências bancárias/pagamentos, fornecer conteúdo personalizado e manter a segurança. Não vendemos nem negociamos dados pessoais a terceiros para fins de marketing.' },
    { title: '15. Divulgação de Dados', content: 'Os dados podem ser divulgados a terceiros apenas para facilitar o processamento de pagamentos (por exemplo, instituições bancárias), no caso de venda do Site, ou para cumprir obrigações legais.' },
    { title: '16. Segurança e Retenção', content: `Medidas de Segurança: Usamos medidas técnicas, incluindo SSL e algoritmos de hash, para proteger os dados.

Retenção: Os dados são mantidos apenas pelo tempo necessário. Se uma conta permanecer inativa por um (1) ano, todos os dados pessoais associados serão permanentemente excluídos.` },
    { title: '17. Política de Cookies', content: 'O Site usa cookies para personalizar conteúdo, analisar tráfego e fornecer recursos de mídia social. Os Usuários podem desativar os cookies nas configurações do navegador.' },
    { title: '18. Versão e Contato', content: `Provedor: Risknil.com.

E-mail: info@risknil.com.

Última atualização: 14 de maio de 2026.

Em caso de discrepância entre versões em diferentes idiomas, a versão em inglês prevalecerá.` }
  ]
}

const deTerms: TermsContent = {
  title: 'Allgemeine Nutzungsbedingungen für Risknil.com',
  lastUpdated: 'Zuletzt aktualisiert: 14. Mai 2026',
  backButton: 'Zurück zu RiskNil',
  legalNote: 'Im Falle von Unstimmigkeiten zwischen den Sprachversionen hat die englische Version Vorrang.',
  sections: [
    { title: '1. Nutzungsbedingungen', content: 'Diese Nutzungsbedingungen (die "Bedingungen") stellen eine rechtlich bindende Vereinbarung zwischen dem "Anbieter" (wie in Abschnitt 29 definiert) und jeder Person oder Einheit (der "Nutzer") dar, die auf die Website risknil.com, ihre mobilen Anwendungen oder zugehörige Funktionen, Inhalte oder Dienste (zusammen die "Website") zugreift. Der Anbieter und der Nutzer werden gemeinsam als die "Parteien" bezeichnet.' },
    { title: '2. Allgemeine Bestimmungen und Globaler Geltungsbereich', content: `Anwendbarkeit: Diese Bedingungen regeln die gesamte Beziehung zwischen dem Anbieter und dem Nutzer. Durch den Zugriff auf die Website bestätigt der Nutzer, dass er diese Bedingungen vollständig gelesen, verstanden und akzeptiert hat.

Änderungen: Der Anbieter behält sich das Recht vor, diese Bedingungen jederzeit zu ändern, auszusetzen oder zu ergänzen. Die fortgesetzte Nutzung der Website nach Änderungen gilt als Annahme dieser Änderungen.

Rechtmäßige Nutzung: Die Website darf nur für rechtmäßige Zwecke genutzt werden. Nutzern ist es untersagt, die Website zur Übertragung oder Speicherung von Material zu verwenden, das gegen Gesetze verstößt, geistiges Eigentum Dritter verletzt oder Glücksspiel- oder Devisenvorschriften in irgendeiner Gerichtsbarkeit verletzt.

Sanktionen: Im Falle eines Missbrauchs behält sich der Anbieter das Recht vor, den Zugang zu sperren, Konten zu kündigen und nach eigenem Ermessen rechtliche Schritte einzuleiten.` },
    { title: '3. Beschreibung der Dienste', content: 'Die Website bietet eine interaktive Plattform mit Sportinformationen, Ergebnissen, Wetttipps und analytischen Daten. Diese Informationen werden aus unabhängigen Drittquellen und internen Bemühungen zusammengestellt. Obwohl der Anbieter nach Genauigkeit strebt, garantiert er nicht die Zuverlässigkeit von Spielergebnissen oder Wettquoten. Der Anbieter ist nicht verantwortlich für jegliche Nutzung der auf der Website enthaltenen Informationen durch den Nutzer.' },
    { title: '4. Zahlungen und Banküberweisungen', content: `Zahlungsmethoden: Die Website akzeptiert Zahlungen für Premium-Dienste über sichere Online-Zahlungsgateways und direkte Banküberweisungen.

Banküberweisungsprotokoll: Nutzer, die sich für Banküberweisungen entscheiden, müssen die spezifischen Anweisungen befolgen, die zum Zeitpunkt der Kaufabwicklung bereitgestellt werden. Dienste werden erst aktiviert, wenn der Anbieter den Eingang der vollständigen Mittel bestätigt hat.

Genauigkeit der Informationen: Der Nutzer ist dafür verantwortlich, sicherzustellen, dass alle bereitgestellten Zahlungs- und Bankdaten korrekt sind. Der Anbieter ist nicht verantwortlich für verlorene Gelder aufgrund falscher Bankdaten, die vom Nutzer bereitgestellt wurden.

Endgültigkeit der Zahlung: Sofern nicht durch lokales Verbraucherrecht vorgeschrieben, sind alle Zahlungen nicht erstattungsfähig, sobald auf den digitalen Dienst oder Inhalt zugegriffen wurde.` },
    { title: '5. Proprietärer Inhalt (Kein nutzergenerierter Inhalt)', content: `Exklusives Eigentum: Alle auf der Website angezeigten Inhalte werden ausschließlich vom Anbieter oder seinen lizenzierten Drittpartnern bereitgestellt.

Keine Nutzerbeiträge: Die Website erlaubt, hostet oder zeigt keine nutzergenerierten Inhalte (UGC) an, einschließlich, aber nicht beschränkt auf Kommentare, Forenbeiträge oder öffentliche Daten-Uploads.

Verbotene Aktionen: Nutzer dürfen nicht versuchen, Inhalte auf der Website zu veröffentlichen, hochzuladen oder einzufügen. Jeder Versuch, diese Einschränkung zu umgehen, wird als Sicherheitsverletzung und Verstoß gegen diese Bedingungen angesehen.` },
    { title: '6. Links zu Drittanbietern und Werbung', content: 'Der Nutzer erkennt an, dass jede Interaktion mit Websites Dritter oder Werbung auf der Website vollständig auf eigenes Risiko erfolgt. Der Anbieter ist nicht Partei von Vereinbarungen zwischen dem Nutzer und einem Dritten und übernimmt keine Haftung für Streitigkeiten aus solchen Interaktionen.' },
    { title: '7. Kontoinaktivität', content: 'Der Anbieter behält sich das Recht vor, jedes Nutzerkonto zu schließen, auf das 180 aufeinanderfolgende Tage lang nicht zugegriffen wurde. Diese Schließung kann mit sofortiger Wirkung und ohne vorherige Ankündigung erfolgen.' },
    { title: '8. Geistiges Eigentum und Urheberrecht', content: `Eigentum: Alle Inhalte, Software und proprietären Algorithmen auf der Website sind Eigentum des Anbieters. Nutzern ist es strengstens untersagt, Teile der Website ohne vorherige schriftliche Zustimmung zu kopieren, zu verteilen, zu "scrapen" oder zu reproduzieren.

Durchsetzung: Jede Verletzung von Rechten des geistigen Eigentums wird im vollen Umfang des Gesetzes verfolgt.` },
    { title: '9. Rechtliche Compliance und Gerichtsstand', content: `Anwendbares Recht: Diese Bedingungen unterliegen den Gesetzen des Vereinigten Königreichs und werden entsprechend ausgelegt. Alle Parteien unterwerfen sich der ausschließlichen Gerichtsbarkeit der Gerichte des Vereinigten Königreichs.

Ausschluss: Das Übereinkommen der Vereinten Nationen über Verträge über den internationalen Warenkauf ist ausdrücklich ausgeschlossen.` },
    { title: '10. Haftungsausschluss und Haftungsbeschränkung', content: `Keine Garantien: Die Website wird "wie besehen" bereitgestellt. Der Anbieter übernimmt keine Verantwortung oder Garantie (ausdrücklich oder stillschweigend), dass der Inhalt fehlerfrei ist.

Kein Glücksspieldienst: Die Website ist ein Informationsinstrument und kein Glücksspiel- oder Wettdienst. Der Anbieter beteiligt sich nicht an Glücksspieltransaktionen und hält keine Nutzergelder für Wettzwecke.

Haftungsbeschränkung: Der Anbieter haftet nicht für direkte oder indirekte Verluste, einschließlich Gewinn- oder Gewinnverluste, die sich aus der Nutzung der Website ergeben.` },
    { title: 'Datenschutzrichtlinie', content: '' },
    { title: '11. Datenschutz und DSGVO', content: 'Die Website ist dem Schutz der Privatsphäre der Nutzer in Übereinstimmung mit internationalen Standards, einschließlich der Datenschutz-Grundverordnung (DSGVO), verpflichtet. Der Datenverantwortliche ist risknil.com.' },
    { title: '12. Erhebung personenbezogener Daten', content: `Registrierung: Personenbezogene Daten (z.B. E-Mail, Name) werden nur erhoben, wenn sich ein Nutzer für erweiterte Dienste registriert.

Einwilligung: Durch die Nutzung dieser Dienste willigt der Nutzer in die Erhebung seiner Daten ein. Die Einwilligung kann jederzeit durch eine E-Mail an info@risknil.com widerrufen werden.` },
    { title: '13. Ihre Rechte als Betroffener', content: `Nutzer besitzen folgende Rechte bezüglich ihrer Daten:

Auskunft und Berichtigung: Das Recht, personenbezogene Daten einzusehen und zu korrigieren.

Löschung: Das Recht auf Löschung der Daten, wenn sie nicht mehr erforderlich sind.

Einschränkung und Widerspruch: Das Recht, die Datenverarbeitung einzuschränken oder Marketing zu widersprechen.

Datenübertragbarkeit: Das Recht, Daten in einem maschinenlesbaren Format zu erhalten.` },
    { title: '14. Datennutzung und Marketing', content: 'Personenbezogene Daten werden verwendet, um mit Nutzern zu kommunizieren, Banküberweisungen/Zahlungen zu verarbeiten, personalisierte Inhalte bereitzustellen und die Sicherheit zu gewährleisten. Wir verkaufen oder handeln keine personenbezogenen Daten an Dritte zu Marketingzwecken.' },
    { title: '15. Offenlegung von Daten', content: 'Daten können nur an Dritte weitergegeben werden, um die Zahlungsabwicklung zu erleichtern (z.B. Bankinstitute), im Falle eines Verkaufs der Website oder zur Erfüllung gesetzlicher Verpflichtungen.' },
    { title: '16. Sicherheit und Aufbewahrung', content: `Sicherheitsmaßnahmen: Wir verwenden technische Maßnahmen, einschließlich SSL und Hash-Algorithmen, um Daten zu schützen.

Aufbewahrung: Daten werden nur so lange aufbewahrt, wie es notwendig ist. Wenn ein Konto ein (1) Jahr lang inaktiv bleibt, werden alle zugehörigen personenbezogenen Daten dauerhaft gelöscht.` },
    { title: '17. Cookie-Richtlinie', content: 'Die Website verwendet Cookies, um Inhalte zu personalisieren, den Datenverkehr zu analysieren und Social-Media-Funktionen bereitzustellen. Nutzer können Cookies in ihren Browsereinstellungen deaktivieren.' },
    { title: '18. Version und Kontakt', content: `Anbieter: Risknil.com.

E-Mail: info@risknil.com.

Zuletzt aktualisiert: 14. Mai 2026.

Im Falle von Unstimmigkeiten zwischen den Sprachversionen hat die englische Version Vorrang.` }
  ]
}

const frTerms: TermsContent = {
  title: 'Conditions Générales d\'Utilisation pour Risknil.com',
  lastUpdated: 'Dernière mise à jour : 14 mai 2026',
  backButton: 'Retour à RiskNil',
  legalNote: 'En cas de divergence entre les versions linguistiques, la version anglaise prévaudra.',
  sections: [
    { title: '1. Conditions d\'Utilisation', content: 'Ces Conditions d\'Utilisation (les "Conditions") constituent un accord juridiquement contraignant entre le "Fournisseur" (tel que défini à la Section 29) et tout individu ou entité (l\'"Utilisateur") qui accède au site web risknil.com, ses applications mobiles, ou toute fonctionnalité, contenu ou service associé (collectivement, le "Site Web"). Le Fournisseur et l\'Utilisateur sont collectivement désignés comme les "Parties".' },
    { title: '2. Dispositions Générales et Portée Mondiale', content: `Applicabilité : Ces Conditions régissent l'ensemble de la relation entre le Fournisseur et l'Utilisateur. En accédant au Site Web, l'Utilisateur confirme avoir lu, compris et accepté ces Conditions dans leur intégralité.

Modifications : Le Fournisseur se réserve le droit de modifier, suspendre ou compléter ces Conditions à tout moment. L'utilisation continue du Site Web après des modifications constitue l'acceptation de ces modifications.

Utilisation Légale : Le Site Web doit être utilisé uniquement à des fins licites. Il est interdit aux Utilisateurs d'utiliser le Site Web pour transmettre ou stocker du matériel qui viole une loi, porte atteinte à la propriété intellectuelle de tiers, ou viole les réglementations sur les jeux d'argent ou les changes dans toute juridiction.

Sanctions : En cas d'utilisation abusive, le Fournisseur se réserve le droit de bloquer l'accès, de résilier les comptes et d'engager des poursuites judiciaires à sa seule discrétion.` },
    { title: '3. Description des Services', content: 'Le Site Web fournit une plateforme interactive proposant des informations sportives, des scores, des conseils de paris et des données analytiques. Ces informations sont collectées auprès de sources tierces indépendantes et d\'efforts internes. Bien que le Fournisseur s\'efforce d\'être précis, il ne garantit pas la fiabilité des résultats des matchs ou des cotes de paris. Le Fournisseur n\'est pas responsable de l\'utilisation que l\'Utilisateur fait des informations contenues sur le Site Web.' },
    { title: '4. Paiements et Virements Bancaires', content: `Méthodes de Paiement : Le Site Web accepte les paiements pour les services premium via des passerelles de paiement en ligne sécurisées et des virements bancaires directs.

Protocole de Virement Bancaire : Les Utilisateurs optant pour des virements bancaires doivent suivre les instructions spécifiques fournies au moment du paiement. Les services ne seront activés qu'une fois que le Fournisseur aura confirmé la réception des fonds complets.

Exactitude des Informations : L'Utilisateur est responsable de s'assurer que toutes les informations de paiement et bancaires fournies sont exactes. Le Fournisseur n'est pas responsable des fonds perdus en raison d'informations bancaires incorrectes fournies par l'Utilisateur.

Caractère Définitif du Paiement : Sauf obligation légale locale, tous les paiements sont non remboursables une fois le service ou contenu numérique consulté.` },
    { title: '5. Contenu Propriétaire (Pas de Contenu Généré par l\'Utilisateur)', content: `Propriété Exclusive : Tout le contenu affiché sur le Site Web est fourni exclusivement par le Fournisseur ou ses partenaires tiers licenciés.

Pas de Soumissions d'Utilisateurs : Le Site Web n'autorise pas, n'héberge pas et n'affiche pas de Contenu Généré par l'Utilisateur (CGU), y compris, mais sans s'y limiter, les commentaires, les publications sur les forums ou les téléchargements de données publiques.

Actions Interdites : Les Utilisateurs ne peuvent pas tenter de publier, télécharger ou injecter du contenu sur le Site Web. Toute tentative de contourner cette restriction sera considérée comme une violation de la sécurité et de ces Conditions.` },
    { title: '6. Liens Tiers et Publicité', content: 'L\'Utilisateur reconnaît que toute interaction avec des sites web tiers ou des publicités trouvées sur le Site Web est entièrement à ses propres risques. Le Fournisseur n\'est pas partie aux accords conclus entre l\'Utilisateur et un tiers et n\'accepte aucune responsabilité pour les litiges découlant de telles interactions.' },
    { title: '7. Inactivité du Compte', content: 'Le Fournisseur se réserve le droit de fermer tout compte Utilisateur qui n\'a pas été consulté pendant 180 jours consécutifs. Cette fermeture peut intervenir avec effet immédiat et sans préavis.' },
    { title: '8. Propriété Intellectuelle et Droits d\'Auteur', content: `Propriété : Tout le contenu, les logiciels et les algorithmes propriétaires sur le Site Web sont la propriété du Fournisseur. Il est strictement interdit aux Utilisateurs de copier, distribuer, "scraper" ou reproduire toute partie du Site Web sans consentement écrit préalable.

Application : Toute violation des droits de propriété intellectuelle sera poursuivie dans toute la mesure permise par la loi.` },
    { title: '9. Conformité Légale et Juridiction', content: `Droit Applicable : Ces Conditions sont régies et interprétées conformément aux lois du Royaume-Uni. Toutes les Parties se soumettent à la juridiction exclusive des tribunaux du Royaume-Uni.

Exclusion : La Convention des Nations Unies sur les contrats de vente internationale de marchandises est expressément exclue.` },
    { title: '10. Avertissement et Limitation de Responsabilité', content: `Aucune Garantie : Le Site Web est fourni "tel quel". Le Fournisseur n'assume aucune responsabilité ni garantie (expresse ou implicite) que le contenu soit exempt d'erreurs.

Pas un Service de Jeu : Le Site Web est un outil d'information et non un service de jeu ou de paris. Le Fournisseur ne participe pas aux transactions de jeu et ne détient pas les fonds des Utilisateurs à des fins de paris.

Limitation des Pertes : Le Fournisseur n'est pas responsable des pertes directes ou indirectes, y compris la perte de bénéfices ou de gains, résultant de l'utilisation du Site Web.` },
    { title: 'Politique de Confidentialité', content: '' },
    { title: '11. Protection des Données et RGPD', content: 'Le Site Web s\'engage à protéger la vie privée des Utilisateurs conformément aux normes internationales, y compris le Règlement Général sur la Protection des Données (RGPD). Le Responsable du Traitement des Données est risknil.com.' },
    { title: '12. Collecte des Données Personnelles', content: `Inscription : Les données personnelles (par exemple, e-mail, nom) ne sont collectées que lorsqu'un Utilisateur s'inscrit à des services avancés.

Consentement : En utilisant ces services, l'Utilisateur consent à la collecte de ses données. Le consentement peut être retiré à tout moment en envoyant un e-mail à info@risknil.com.` },
    { title: '13. Vos Droits en tant que Personne Concernée', content: `Les Utilisateurs possèdent les droits suivants concernant leurs données :

Accès et Rectification : Le droit de consulter et de corriger les données personnelles.

Effacement : Le droit de faire supprimer les données si elles ne sont plus nécessaires.

Restriction et Opposition : Le droit de limiter le traitement des données ou de s'opposer au marketing.

Portabilité : Le droit de recevoir les données dans un format lisible par machine.` },
    { title: '14. Utilisation des Données et Marketing', content: 'Les données personnelles sont utilisées pour communiquer avec les Utilisateurs, traiter les virements bancaires/paiements, fournir du contenu personnalisé et maintenir la sécurité. Nous ne vendons ni n\'échangeons de données personnelles à des tiers à des fins de marketing.' },
    { title: '15. Divulgation des Données', content: 'Les données ne peuvent être divulguées à des tiers que pour faciliter le traitement des paiements (par exemple, institutions bancaires), en cas de vente du Site Web, ou pour se conformer à des obligations légales.' },
    { title: '16. Sécurité et Conservation', content: `Mesures de Sécurité : Nous utilisons des mesures techniques, y compris SSL et des algorithmes de hachage, pour protéger les données.

Conservation : Les données ne sont conservées que le temps nécessaire. Si un compte reste inactif pendant un (1) an, toutes les données personnelles associées seront définitivement supprimées.` },
    { title: '17. Politique en matière de Cookies', content: 'Le Site Web utilise des cookies pour personnaliser le contenu, analyser le trafic et fournir des fonctionnalités de médias sociaux. Les Utilisateurs peuvent désactiver les cookies dans les paramètres de leur navigateur.' },
    { title: '18. Version et Contact', content: `Fournisseur : Risknil.com.

E-mail : info@risknil.com.

Dernière mise à jour : 14 mai 2026.

En cas de divergence entre les versions linguistiques, la version anglaise prévaudra.` }
  ]
}

const huTerms: TermsContent = {
  title: 'Általános Felhasználási Feltételek a Risknil.com számára',
  lastUpdated: 'Utolsó frissítés: 2026. május 14.',
  backButton: 'Vissza a RiskNil-hez',
  legalNote: 'A nyelvi verziók közötti eltérés esetén az angol verzió az irányadó.',
  sections: [
    { title: '1. Felhasználási Feltételek', content: 'Jelen Felhasználási Feltételek (a "Feltételek") jogilag kötelező érvényű megállapodást képeznek a "Szolgáltató" (a 29. szakaszban meghatározottak szerint) és bármely személy vagy szervezet (a "Felhasználó") között, aki hozzáfér a risknil.com weboldalhoz, annak mobil alkalmazásaihoz vagy bármely kapcsolódó funkcióhoz, tartalomhoz vagy szolgáltatáshoz (együttesen a "Weboldal"). A Szolgáltatót és a Felhasználót együttesen "Felek"-nek nevezzük.' },
    { title: '2. Általános Rendelkezések és Globális Hatály', content: `Alkalmazhatóság: Jelen Feltételek szabályozzák a Szolgáltató és a Felhasználó közötti teljes kapcsolatot. A Weboldal elérésével a Felhasználó megerősíti, hogy elolvasta, megértette és teljes egészében elfogadta ezeket a Feltételeket.

Módosítások: A Szolgáltató fenntartja a jogot, hogy ezeket a Feltételeket bármikor módosítsa, felfüggessze vagy kiegészítse. A Weboldal változtatások utáni folyamatos használata e változtatások elfogadását jelenti.

Jogszerű Használat: A Weboldalt csak jogszerű célokra szabad használni. A Felhasználók számára tilos a Weboldal használata olyan anyagok továbbítására vagy tárolására, amelyek bármely törvényt sértenek, harmadik felek szellemi tulajdonjogait megsértik, vagy szerencsejáték- vagy devizaszabályozásokat sértenek bármely joghatóságban.

Szankciók: Visszaélés esetén a Szolgáltató fenntartja a jogot a hozzáférés letiltására, a fiókok megszüntetésére és jogi eljárás kezdeményezésére saját belátása szerint.` },
    { title: '3. Szolgáltatások Leírása', content: 'A Weboldal interaktív platformot biztosít sportinformációkkal, eredményekkel, fogadási tippekkel és elemzési adatokkal. Ezeket az információkat független harmadik féltől származó forrásokból és belső erőfeszítésekből gyűjtjük. Bár a Szolgáltató törekszik a pontosságra, nem garantálja a meccseredmények vagy fogadási oddsok megbízhatóságát. A Szolgáltató nem felelős a Weboldalon található információk Felhasználó általi felhasználásáért.' },
    { title: '4. Fizetések és Banki Átutalások', content: `Fizetési Módok: A Weboldal biztonságos online fizetési átjárókon és közvetlen banki átutalásokon keresztül fogad el fizetéseket prémium szolgáltatásokért.

Banki Átutalási Protokoll: A banki átutalást választó Felhasználóknak követniük kell a fizetéskor megadott konkrét utasításokat. A szolgáltatások csak akkor lesznek aktiválva, ha a Szolgáltató megerősítette a teljes összeg beérkezését.

Információk Pontossága: A Felhasználó felelős azért, hogy minden megadott fizetési és banki adat pontos legyen. A Szolgáltató nem felelős a Felhasználó által megadott helytelen banki információk miatt elveszett pénzeszközökért.

Fizetés Véglegessége: Hacsak a helyi fogyasztóvédelmi törvény másként nem rendelkezik, minden fizetés visszafizethetetlen, miután a digitális szolgáltatáshoz vagy tartalomhoz hozzáfértek.` },
    { title: '5. Tulajdonosi Tartalom (Nincs Felhasználó által Generált Tartalom)', content: `Kizárólagos Tulajdon: A Weboldalon megjelenített összes tartalom kizárólag a Szolgáltató vagy annak licencelt harmadik fél partnerei által biztosított.

Nincs Felhasználói Beküldés: A Weboldal nem engedélyezi, nem tárolja és nem jeleníti meg a Felhasználó által Generált Tartalmat (UGC), beleértve, de nem kizárólagosan a megjegyzéseket, fórumbejegyzéseket vagy nyilvános adatfeltöltéseket.

Tiltott Tevékenységek: A Felhasználók nem kísérelhetik meg tartalom közzétételét, feltöltését vagy beillesztését a Weboldalra. Bármilyen kísérlet ennek a korlátozásnak a megkerülésére biztonsági megsértésnek és ezen Feltételek megsértésének minősül.` },
    { title: '6. Harmadik Fél Linkek és Hirdetések', content: 'A Felhasználó tudomásul veszi, hogy a Weboldalon található harmadik fél weboldalakkal vagy hirdetésekkel való bármilyen interakció teljes mértékben saját felelősségére történik. A Szolgáltató nem részese a Felhasználó és harmadik fél között létrejött megállapodásoknak, és nem vállal felelősséget az ilyen interakciókból eredő vitákért.' },
    { title: '7. Fiók Inaktivitás', content: 'A Szolgáltató fenntartja a jogot bármely Felhasználói fiók bezárására, amelyhez 180 egymást követő napon nem fértek hozzá. Ez a bezárás azonnali hatállyal és előzetes értesítés nélkül történhet.' },
    { title: '8. Szellemi Tulajdon és Szerzői Jog', content: `Tulajdonjog: A Weboldalon található összes tartalom, szoftver és tulajdonosi algoritmus a Szolgáltató tulajdona. A Felhasználók számára szigor����an tilos a Weboldal bármely részének másolása, terjesztése, "szkrépelése" vagy reprodukálása előzetes írásbeli hozzájárulás nélkül.

Érvényesítés: A szellemi tulajdonjogok bármilyen megsértését a törvény teljes mértékében üldözzük.` },
    { title: '9. Jogi Megfelelés és Joghatóság', content: `Irányadó Jog: Ezeket a Feltételeket az Egyesült Királyság törvényei szabályozzák és értelmezik. Minden Fél aláveti magát az Egyesült Királyság bíróságainak kizárólagos joghatóságának.

Kizárás: Az Egyesült Nemzetek Nemzetközi Árueladási Szerződésekről szóló Egyezménye kifejezetten kizárt.` },
    { title: '10. Felelősségkizárás és Felelősségkorlátozás', content: `Nincs Garancia: A Weboldal "ahogy van" állapotban kerül biztosításra. A Szolgáltató nem vállal felelősséget vagy garanciát (kifejezett vagy hallgatólagos) arra vonatkozóan, hogy a tartalom hibamentes.

Nem Szerencsejáték Szolgáltatás: A Weboldal információs eszköz, nem szerencsejáték vagy fogadási szolgáltatás. A Szolgáltató nem vesz részt szerencsejáték tranzakciókban és nem tart Felhasználói pénzeszközöket fogadási célokra.

Veszteségkorlátozás: A Szolgáltató nem felelős semmilyen közvetlen vagy közvetett veszteségért, beleértve a nyereség vagy nyeremény elvesztését, amely a Weboldal használatából ered.` },
    { title: 'Adatvédelmi Szabályzat', content: '' },
    { title: '11. Adatvédelem és GDPR', content: 'A Weboldal elkötelezett a Felhasználók magánéletének védelme mellett a nemzetközi szabványoknak megfelelően, beleértve az Általános Adatvédelmi Rendeletet (GDPR). Az Adatkezelő az risknil.com.' },
    { title: '12. Személyes Adatok Gyűjtése', content: `Regisztráció: Személyes adatokat (pl. e-mail, név) csak akkor gyűjtünk, amikor a Felhasználó regisztrál haladó szolgáltatásokra.

Hozzájárulás: Ezen szolgáltatások használatával a Felhasználó hozzájárul adatai gyűjtéséhez. A hozzájárulás bármikor visszavonható az info@risknil.com címre küldött e-maillel.` },
    { title: '13. Az Ön Jogai Érintettként', content: `A Felhasználók a következő jogokkal rendelkeznek adataik tekintetében:

Hozzáférés és Helyesbítés: A személyes adatok megtekintésének és javításának joga.

Törlés: Az adatok törlésének joga, ha már nincs rájuk szükség.

Korlátozás és Tiltakozás: Az adatfeldolgozás korlátozásának vagy a marketing elleni tiltakozás joga.

Hordozhatóság: Az adatok géppel olvasható formátumban történő fogadásának joga.` },
    { title: '14. Adatok Használata és Marketing', content: 'A személyes adatokat a Felhasználókkal való kommunikációra, banki átutalások/fizetések feldolgozására, személyre szabott tartalom biztosítására és a biztonság fenntartására használjuk. Nem adjuk el és nem kereskedünk személyes adatokkal harmadik feleknek marketing célokra.' },
    { title: '15. Adatok Nyilvánosságra Hozatala', content: 'Az adatok csak harmadik feleknek adhatók ki a fizetésfeldolgozás megkönnyítése érdekében (pl. banki intézmények), a Weboldal eladása esetén, vagy jogi kötelezettségek teljesítése érdekében.' },
    { title: '16. Biztonság és Megőrzés', content: `Biztonsági Intézkedések: Technikai intézkedéseket alkalmazunk, beleértve az SSL-t és hash algoritmusokat, az adatok védelme érdekében.

Megőrzés: Az adatokat csak a szükséges ideig tároljuk. Ha egy fiók egy (1) évig inaktív marad, az összes kapcsolódó személyes adat véglegesen törlésre kerül.` },
    { title: '17. Cookie Szabályzat', content: 'A Weboldal cookie-kat használ a tartalom személyre szabásához, a forgalom elemzéséhez és közösségi média funkciók biztosításához. A Felhasználók letilthatják a cookie-kat a böngészőjük beállításaiban.' },
    { title: '18. Verzió és Kapcsolat', content: `Szolgáltató: Risknil.com.

E-mail: info@risknil.com.

Utolsó frissítés: 2026. május 14.

A nyelvi verziók közötti eltérés esetén az angol verzió az irányadó.` }
  ]
}

// For other languages, we'll use the English version as base
// The page will show a note that English version prevails for legal accuracy

export function getTermsContent(lang: string): TermsContent {
  switch (lang) {
    case 'es': return esTerms
    case 'pt': return ptTerms
    case 'de': return deTerms
    case 'fr': return frTerms
    case 'hu': return huTerms
    default: return enTerms
  }
}

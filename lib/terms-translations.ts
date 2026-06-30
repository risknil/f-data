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
    { title: '1. Terms of Use', content: 'These Terms of Use (the "Terms") constitute a legally binding agreement between the "Provider" and any individual or entity (the "User") who accesses the website risknil.com, its mobile applications, or any associated features, content, or services (collectively, the "Website"). The Provider and the User are collectively referred to as the "Parties."' },
    { title: '2. General Provisions and Global Scope', content: `Applicability: These Terms govern the entire relationship between the Provider and the User. By accessing the Website, the User confirms they have read, understood, and agreed to these Terms in their entirety.

Amendments: The Provider reserves the right to modify, suspend, or supplement these Terms at any time. Continued use of the Website following changes constitutes acceptance of those changes.

Legal Use: The Website must be used only for lawful purposes. Users are prohibited from using the Website to transmit or store material that violates any law, infringes on third-party intellectual property, or violates gambling or foreign exchange regulations in any jurisdiction.

Sanctions: In the event of misuse, the Provider reserves the right to block access, terminate accounts, and initiate legal proceedings at its sole discretion.` },
    { title: '3. Description of the Website', content: `The Website provides publicly available sports-related content, including information, statistics, scores, betting tips, and analytical insights. This content is compiled from independent third-party sources as well as internal research and analysis.

The Provider makes reasonable efforts to ensure the accuracy and timeliness of the information presented; however, no guarantee is given regarding completeness, accuracy, or reliability of any data, including match results, statistics, or betting-related information.

All content is provided for informational purposes only. The Provider accepts no responsibility for any decisions, actions, or losses incurred by Users based on the information published on the Website.` },
    { title: '4. Donations and Bank Transfers', content: `Voluntary Donations: The Website does not sell any products or services and does not offer premium or paid content. All payments made by Users are voluntary donations intended solely to support the ongoing maintenance and development of the Website.

Payment Methods: Donations may be made via secure online payment gateways or by bank transfer, where available.

Bank Transfer Instructions: Where bank transfer is used, Users must follow the payment instructions provided at the time of donation. Donations are only considered received once the full amount has been successfully cleared in the Provider's account.

Accuracy of Information: Users are responsible for ensuring that all payment details, including bank information, are entered correctly. The Provider is not liable for any loss of funds resulting from incorrect or incomplete payment information provided by the User.

Non-Refundable Donations: Donations are generally non-refundable. However, where required by applicable law, statutory refund rights shall remain unaffected.` },
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
    { title: '1. Términos de Uso', content: 'Estos Términos de Uso (los "Términos") constituyen un acuerdo legalmente vinculante entre el "Proveedor" y cualquier individuo o entidad (el "Usuario") que acceda al sitio web risknil.com, sus aplicaciones móviles o cualquier función, contenido o servicio asociado (colectivamente, el "Sitio Web"). El Proveedor y el Usuario se denominan colectivamente las "Partes".' },
    { title: '2. Disposiciones Generales y Alcance Global', content: `Aplicabilidad: Estos Términos rigen toda la relación entre el Proveedor y el Usuario. Al acceder al Sitio Web, el Usuario confirma que ha leído, entendido y aceptado estos Términos en su totalidad.

Modificaciones: El Proveedor se reserva el derecho de modificar, suspender o complementar estos Términos en cualquier momento. El uso continuado del Sitio Web después de los cambios constituye la aceptación de dichos cambios.

Uso Legal: El Sitio Web debe usarse solo con fines lícitos. Los Usuarios tienen prohibido usar el Sitio Web para transmitir o almacenar material que viole cualquier ley, infrinja la propiedad intelectual de terceros o viole las regulaciones de juego o cambio de divisas en cualquier jurisdicción.

Sanciones: En caso de mal uso, el Proveedor se reserva el derecho de bloquear el acceso, terminar cuentas e iniciar procedimientos legales a su entera discreción.` },
    { title: '3. Descripción del Sitio Web', content: `El Sitio Web proporciona contenido deportivo de acceso público, incluyendo información, estadísticas, puntuaciones, consejos de apuestas y análisis. Este contenido se recopila de fuentes independientes de terceros, así como de investigación y análisis internos.

El Proveedor realiza esfuerzos razonables para garantizar la exactitud y la actualidad de la información presentada; sin embargo, no se ofrece ninguna garantía respecto a la integridad, exactitud o fiabilidad de los datos, incluyendo resultados de partidos, estadísticas o información relacionada con apuestas.

Todo el contenido se proporciona únicamente con fines informativos. El Proveedor no acepta ninguna responsabilidad por las decisiones, acciones o pérdidas en que incurran los Usuarios basándose en la información publicada en el Sitio Web.` },
    { title: '4. Donaciones y Transferencias Bancarias', content: `Donaciones Voluntarias: El Sitio Web no vende ningún producto ni servicio y no ofrece contenido premium ni de pago. Todos los pagos realizados por los Usuarios son donaciones voluntarias destinadas únicamente a apoyar el mantenimiento y el desarrollo continuos del Sitio Web.

Métodos de Pago: Las donaciones pueden realizarse a través de pasarelas de pago seguras en línea o mediante transferencia bancaria, cuando esté disponible.

Instrucciones de Transferencia Bancaria: Cuando se utilice una transferencia bancaria, los Usuarios deben seguir las instrucciones de pago proporcionadas en el momento de la donación. Las donaciones solo se consideran recibidas una vez que el importe total se haya acreditado con éxito en la cuenta del Proveedor.

Exactitud de la Información: Los Usuarios son responsables de garantizar que todos los datos de pago, incluida la información bancaria, se introduzcan correctamente. El Proveedor no es responsable de ninguna pérdida de fondos resultante de información de pago incorrecta o incompleta proporcionada por el Usuario.

Donaciones No Reembolsables: Las donaciones generalmente no son reembolsables. No obstante, cuando así lo exija la legislación aplicable, los derechos legales de reembolso no se verán afectados.` },
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
    { title: '1. Termos de Uso', content: 'Estes Termos de Uso (os "Termos") constituem um acordo legalmente vinculativo entre o "Provedor" e qualquer indivíduo ou entidade (o "Usuário") que acesse o site risknil.com, seus aplicativos móveis ou quaisquer recursos, conteúdos ou serviços associados (coletivamente, o "Site"). O Provedor e o Usuário são coletivamente referidos como as "Partes".' },
    { title: '2. Disposições Gerais e Escopo Global', content: `Aplicabilidade: Estes Termos regem toda a relação entre o Provedor e o Usuário. Ao acessar o Site, o Usuário confirma que leu, entendeu e concordou com estes Termos em sua totalidade.

Alterações: O Provedor reserva-se o direito de modificar, suspender ou complementar estes Termos a qualquer momento. O uso continuado do Site após as alterações constitui aceitação dessas alterações.

Uso Legal: O Site deve ser usado apenas para fins lícitos. Os Usuários estão proibidos de usar o Site para transmitir ou armazenar material que viole qualquer lei, infrinja propriedade intelectual de terceiros ou viole regulamentos de jogos de azar ou câmbio em qualquer jurisdição.

Sanções: Em caso de uso indevido, o Provedor reserva-se o direito de bloquear o acesso, encerrar contas e iniciar procedimentos legais a seu exclusivo critério.` },
    { title: '3. Descrição do Site', content: `O Site fornece conteúdo esportivo de acesso público, incluindo informações, estatísticas, resultados, dicas de apostas e análises. Este conteúdo é compilado de fontes independentes de terceiros, bem como de pesquisa e análise internas.

O Provedor envida esforços razoáveis para garantir a precisão e a atualidade das informações apresentadas; no entanto, nenhuma garantia é dada quanto à integridade, precisão ou confiabilidade de quaisquer dados, incluindo resultados de partidas, estatísticas ou informações relacionadas a apostas.

Todo o conteúdo é fornecido apenas para fins informativos. O Provedor não aceita nenhuma responsabilidade por quaisquer decisões, ações ou perdas incorridas pelos Usuários com base nas informações publicadas no Site.` },
    { title: '4. Doações e Transferências Bancárias', content: `Doações Voluntárias: O Site não vende nenhum produto ou serviço e não oferece conteúdo premium ou pago. Todos os pagamentos feitos pelos Usuários são doações voluntárias destinadas exclusivamente a apoiar a manutenção e o desenvolvimento contínuos do Site.

Métodos de Pagamento: As doações podem ser feitas através de gateways de pagamento online seguros ou por transferência bancária, quando disponível.

Instruções de Transferência Bancária: Quando a transferência bancária for utilizada, os Usuários devem seguir as instruções de pagamento fornecidas no momento da doação. As doações só são consideradas recebidas após o valor total ser efetivamente compensado na conta do Provedor.

Precisão das Informações: Os Usuários são responsáveis por garantir que todos os dados de pagamento, incluindo informações bancárias, sejam inseridos corretamente. O Provedor não é responsável por qualquer perda de fundos resultante de informações de pagamento incorretas ou incompletas fornecidas pelo Usuário.

Doações Não Reembolsáveis: As doações geralmente não são reembolsáveis. No entanto, quando exigido pela legislação aplicável, os direitos legais de reembolso permanecerão inalterados.` },
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
    { title: '14. Uso de Dados e Marketing', content: 'Os dados pessoais são usados para se comunicar com os Usu����rios, processar transferências bancárias/pagamentos, fornecer conteúdo personalizado e manter a segurança. Não vendemos nem negociamos dados pessoais a terceiros para fins de marketing.' },
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
    { title: '1. Nutzungsbedingungen', content: 'Diese Nutzungsbedingungen (die "Bedingungen") stellen eine rechtlich bindende Vereinbarung zwischen dem "Anbieter" und jeder Person oder Einheit (der "Nutzer") dar, die auf die Website risknil.com, ihre mobilen Anwendungen oder zugehörige Funktionen, Inhalte oder Dienste (zusammen die "Website") zugreift. Der Anbieter und der Nutzer werden gemeinsam als die "Parteien" bezeichnet.' },
    { title: '2. Allgemeine Bestimmungen und Globaler Geltungsbereich', content: `Anwendbarkeit: Diese Bedingungen regeln die gesamte Beziehung zwischen dem Anbieter und dem Nutzer. Durch den Zugriff auf die Website bestätigt der Nutzer, dass er diese Bedingungen vollständig gelesen, verstanden und akzeptiert hat.

Änderungen: Der Anbieter behält sich das Recht vor, diese Bedingungen jederzeit zu ändern, auszusetzen oder zu ergänzen. Die fortgesetzte Nutzung der Website nach Änderungen gilt als Annahme dieser Änderungen.

Rechtmäßige Nutzung: Die Website darf nur für rechtmäßige Zwecke genutzt werden. Nutzern ist es untersagt, die Website zur Übertragung oder Speicherung von Material zu verwenden, das gegen Gesetze verstößt, geistiges Eigentum Dritter verletzt oder Glücksspiel- oder Devisenvorschriften in irgendeiner Gerichtsbarkeit verletzt.

Sanktionen: Im Falle eines Missbrauchs behält sich der Anbieter das Recht vor, den Zugang zu sperren, Konten zu kündigen und nach eigenem Ermessen rechtliche Schritte einzuleiten.` },
    { title: '3. Beschreibung der Website', content: `Die Website bietet öffentlich zugängliche sportbezogene Inhalte, einschließlich Informationen, Statistiken, Ergebnissen, Wetttipps und analytischen Einblicken. Diese Inhalte werden aus unabhängigen Drittquellen sowie aus internen Recherchen und Analysen zusammengestellt.

Der Anbieter unternimmt angemessene Anstrengungen, um die Genauigkeit und Aktualität der dargestellten Informationen zu gewährleisten; es wird jedoch keine Garantie hinsichtlich der Vollständigkeit, Genauigkeit oder Zuverlässigkeit jeglicher Daten gegeben, einschließlich Spielergebnissen, Statistiken oder wettbezogenen Informationen.

Alle Inhalte werden ausschließlich zu Informationszwecken bereitgestellt. Der Anbieter übernimmt keine Verantwortung für Entscheidungen, Handlungen oder Verluste, die den Nutzern auf der Grundlage der auf der Website veröffentlichten Informationen entstehen.` },
    { title: '4. Spenden und Banküberweisungen', content: `Freiwillige Spenden: Die Website verkauft keine Produkte oder Dienstleistungen und bietet keine Premium- oder kostenpflichtigen Inhalte an. Alle von Nutzern geleisteten Zahlungen sind freiwillige Spenden, die ausschließlich der Unterstützung des laufenden Betriebs und der Weiterentwicklung der Website dienen.

Zahlungsmethoden: Spenden können über sichere Online-Zahlungsgateways oder, sofern verfügbar, per Banküberweisung geleistet werden.

Anweisungen zur Banküberweisung: Bei Verwendung einer Banküberweisung müssen die Nutzer die zum Zeitpunkt der Spende bereitgestellten Zahlungsanweisungen befolgen. Spenden gelten erst dann als eingegangen, wenn der vollständige Betrag erfolgreich auf dem Konto des Anbieters gutgeschrieben wurde.

Genauigkeit der Informationen: Die Nutzer sind dafür verantwortlich, dass alle Zahlungsdaten, einschließlich Bankinformationen, korrekt eingegeben werden. Der Anbieter haftet nicht für Verluste von Geldern, die auf falsche oder unvollständige Zahlungsinformationen des Nutzers zurückzuführen sind.

Nicht erstattungsfähige Spenden: Spenden sind grundsätzlich nicht erstattungsfähig. Soweit jedoch nach geltendem Recht erforderlich, bleiben gesetzliche Rückerstattungsrechte unberührt.` },
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
    { title: '1. Conditions d\'Utilisation', content: 'Ces Conditions d\'Utilisation (les "Conditions") constituent un accord juridiquement contraignant entre le "Fournisseur" et tout individu ou entité (l\'"Utilisateur") qui accède au site web risknil.com, ses applications mobiles, ou toute fonctionnalité, contenu ou service associé (collectivement, le "Site Web"). Le Fournisseur et l\'Utilisateur sont collectivement désignés comme les "Parties".' },
    { title: '2. Dispositions Générales et Portée Mondiale', content: `Applicabilité : Ces Conditions régissent l'ensemble de la relation entre le Fournisseur et l'Utilisateur. En accédant au Site Web, l'Utilisateur confirme avoir lu, compris et accepté ces Conditions dans leur intégralité.

Modifications : Le Fournisseur se réserve le droit de modifier, suspendre ou compléter ces Conditions à tout moment. L'utilisation continue du Site Web après des modifications constitue l'acceptation de ces modifications.

Utilisation Légale : Le Site Web doit être utilisé uniquement à des fins licites. Il est interdit aux Utilisateurs d'utiliser le Site Web pour transmettre ou stocker du matériel qui viole une loi, porte atteinte à la propriété intellectuelle de tiers, ou viole les réglementations sur les jeux d'argent ou les changes dans toute juridiction.

Sanctions : En cas d'utilisation abusive, le Fournisseur se réserve le droit de bloquer l'accès, de résilier les comptes et d'engager des poursuites judiciaires à sa seule discrétion.` },
    { title: '3. Description du Site Web', content: `Le Site Web fournit des contenus sportifs accessibles au public, y compris des informations, des statistiques, des scores, des conseils de paris et des analyses. Ces contenus sont compilés à partir de sources tierces indépendantes ainsi que de recherches et d'analyses internes.

Le Fournisseur déploie des efforts raisonnables pour garantir l'exactitude et l'actualité des informations présentées ; toutefois, aucune garantie n'est donnée quant à l'exhaustivité, l'exactitude ou la fiabilité des données, y compris les résultats des matchs, les statistiques ou les informations relatives aux paris.

Tous les contenus sont fournis à titre purement informatif. Le Fournisseur n'assume aucune responsabilité pour les décisions, actions ou pertes subies par les Utilisateurs sur la base des informations publiées sur le Site Web.` },
    { title: '4. Dons et Virements Bancaires', content: `Dons Volontaires : Le Site Web ne vend aucun produit ni service et n'offre aucun contenu premium ou payant. Tous les paiements effectués par les Utilisateurs sont des dons volontaires destinés uniquement à soutenir la maintenance et le développement continus du Site Web.

Méthodes de Paiement : Les dons peuvent être effectués via des passerelles de paiement en ligne sécurisées ou par virement bancaire, lorsque cela est possible.

Instructions de Virement Bancaire : Lorsqu'un virement bancaire est utilisé, les Utilisateurs doivent suivre les instructions de paiement fournies au moment du don. Les dons ne sont considérés comme reçus qu'une fois le montant total effectivement crédité sur le compte du Fournisseur.

Exactitude des Informations : Les Utilisateurs sont responsables de s'assurer que toutes les informations de paiement, y compris les informations bancaires, sont saisies correctement. Le Fournisseur n'est pas responsable de toute perte de fonds résultant d'informations de paiement incorrectes ou incomplètes fournies par l'Utilisateur.

Dons Non Remboursables : Les dons ne sont généralement pas remboursables. Toutefois, lorsque la loi applicable l'exige, les droits légaux de remboursement demeurent inchangés.` },
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
    { title: '1. Felhasználási Feltételek', content: 'Jelen Felhasználási Feltételek (a "Feltételek") jogilag kötelező érvényű megállapodást képeznek a "Szolgáltató" és bármely személy vagy szervezet (a "Felhasználó") között, aki hozzáfér a risknil.com weboldalhoz, annak mobil alkalmazásaihoz vagy bármely kapcsolódó funkcióhoz, tartalomhoz vagy szolgáltatáshoz (együttesen a "Weboldal"). A Szolgáltatót és a Felhasználót együttesen "Felek"-nek nevezzük.' },
    { title: '2. Általános Rendelkezések és Globális Hatály', content: `Alkalmazhatóság: Jelen Feltételek szabályozzák a Szolgáltató és a Felhasználó közötti teljes kapcsolatot. A Weboldal elérésével a Felhasználó megerősíti, hogy elolvasta, megértette és teljes egészében elfogadta ezeket a Feltételeket.

Módosítások: A Szolgáltató fenntartja a jogot, hogy ezeket a Feltételeket bármikor módosítsa, felfüggessze vagy kiegészítse. A Weboldal változtatások utáni folyamatos használata e változtatások elfogadását jelenti.

Jogszerű Használat: A Weboldalt csak jogszerű célokra szabad használni. A Felhasználók számára tilos a Weboldal használata olyan anyagok továbbítására vagy tárolására, amelyek bármely törvényt sértenek, harmadik felek szellemi tulajdonjogait megsértik, vagy szerencsejáték- vagy devizaszabályozásokat sértenek bármely joghatóságban.

Szankciók: Visszaélés esetén a Szolgáltató fenntartja a jogot a hozzáférés letiltására, a fiókok megszüntetésére és jogi eljárás kezdeményezésére saját belátása szerint.` },
    { title: '3. A Weboldal Leírása', content: `A Weboldal nyilvánosan elérhető sporttartalmat biztosít, beleértve az információkat, statisztikákat, eredményeket, fogadási tippeket és elemzéseket. Ez a tartalom független harmadik féltől származó forrásokból, valamint belső kutatásból és elemzésből áll össze.

A Szolgáltató ésszerű erőfeszítéseket tesz a bemutatott információk pontosságának és időszerűségének biztosítása érdekében; azonban semmilyen garanciát nem vállal az adatok teljességére, pontosságára vagy megbízhatóságára vonatkozóan, beleértve a meccseredményeket, statisztikákat vagy fogadással kapcsolatos információkat.

Minden tartalom kizárólag tájékoztató jellegű. A Szolgáltató nem vállal felelősséget a Felhasználók által a Weboldalon közzétett információk alapján hozott döntésekért, cselekedetekért vagy elszenvedett veszteségekért.` },
    { title: '4. Adományok és Banki Átutalások', content: `Önkéntes Adományok: A Weboldal nem értékesít semmilyen terméket vagy szolgáltatást, és nem kínál prémium vagy fizetős tartalmat. A Felhasználók által teljesített minden fizetés önkéntes adomány, amelynek célja kizárólag a Weboldal folyamatos fenntartásának és fejlesztésének támogatása.

Fizetési Módok: Az adományok biztonságos online fizetési átjárókon keresztül vagy banki átutalással teljesíthetők, ahol elérhető.

Banki Átutalási Utasítások: Banki átutalás használata esetén a Felhasználóknak követniük kell az adományozáskor megadott fizetési utasításokat. Az adományok csak akkor tekintendők beérkezettnek, ha a teljes összeg sikeresen jóváírásra került a Szolgáltató számláján.

Információk Pontossága: A Felhasználók felelősek azért, hogy minden fizetési adatot, beleértve a banki információkat is, helyesen adjanak meg. A Szolgáltató nem felelős a Felhasználó által megadott helytelen vagy hiányos fizetési információkból eredő pénzveszteségekért.

Vissza Nem Térítendő Adományok: Az adományok általában nem visszatéríthetők. Ahol azonban az alkalmazandó jogszabályok előírják, a törvényes visszatérítési jogok érintetlenek maradnak.` },
    { title: '5. Tulajdonosi Tartalom (Nincs Felhasználó által Generált Tartalom)', content: `Kizárólagos Tulajdon: A Weboldalon megjelenített összes tartalom kizárólag a Szolgáltató vagy annak licencelt harmadik fél partnerei által biztosított.

Nincs Felhasználói Beküldés: A Weboldal nem engedélyezi, nem tárolja és nem jeleníti meg a Felhasználó által Generált Tartalmat (UGC), beleértve, de nem kizárólagosan a megjegyzéseket, fórumbejegyzéseket vagy nyilvános adatfeltöltéseket.

Tiltott Tevékenységek: A Felhasználók nem kísérelhetik meg tartalom közzétételét, feltöltését vagy beillesztését a Weboldalra. Bármilyen kísérlet ennek a korlátozásnak a megkerülésére biztonsági megsértésnek és ezen Feltételek megsértésének minősül.` },
    { title: '6. Harmadik Fél Linkek és Hirdetések', content: 'A Felhasználó tudomásul veszi, hogy a Weboldalon található harmadik fél weboldalakkal vagy hirdetésekkel való bármilyen interakció teljes mértékben saját felelősségére történik. A Szolgáltató nem részese a Felhasználó és harmadik fél között létrejött megállapodásoknak, és nem vállal felelősséget az ilyen interakciókból eredő viták����rt.' },
    { title: '7. Fiók Inaktivitás', content: 'A Szolgáltató fenntartja a jogot bármely Felhasználói fiók bezárására, amelyhez 180 egymást követő napon nem fértek hozzá. Ez a bezárás azonnali hatállyal és előzetes értesítés nélkül történhet.' },
    { title: '8. Szellemi Tulajdon és Szerzői Jog', content: `Tulajdonjog: A Weboldalon található összes tartalom, szoftver és tulajdonosi algoritmus a Szolgáltató tulajdona. A Felhasználók számára szigor��������������an tilos a Weboldal bármely részének másolása, terjesztése, "szkrépelése" vagy reprodukálása előzetes írásbeli hozzájárulás nélkül.

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

const zhCNTerms: TermsContent = {
  title: 'Risknil.com 一般使用条款',
  lastUpdated: '最后更新：2026年5月14日',
  backButton: '返回 RiskNil',
  legalNote: '如语言版本之间存在任何差异，以英文版本为准。',
  sections: [
    { title: '1. 使用条款', content: '本使用条款（"条款"）构成"提供者"与访问risknil.com网站、其移动应用程序或任何相关功能、内容或服务（统称"网站"）的任何个人或实体（"用户"）之间具有法律约束力的协议。' },
    { title: '2. 一般规定和全球范围', content: '适用性：本条款管辖提供者与用户之间的全部关系。\n\n修改：提供者保留随时修改本条款的权利。\n\n合法使用：网站仅可用于合法目的。\n\n制裁：如发生滥用，提供者保留阻止访问和终止账户的权利。' },
    { title: '3. 网站说明', content: '本网站提供公开的体育相关内容，包括信息、统计数据、比分、投注提示和分析见解。这些内容来源于独立的第三方来源以及内部研究和分析。\n\n提供者会尽合理努力确保所提供信息的准确性和时效性；但不对任何数据的完整性、准确性或可靠性作出保证，包括比赛结果、统计数据或与投注相关的信息。\n\n所有内容仅供参考之用。提供者不对用户基于网站发布的信息所做出的任何决定、采取的行动或遭受的损失承担任何责任。' },
    { title: '4. 捐赠和银行转账', content: '自愿捐赠：本网站不销售任何产品或服务，也不提供高级或付费内容。用户所做的所有付款均为自愿捐赠，仅用于支持网站的持续维护和发展。\n\n付款方式：捐赠可通过安全的在线支付网关或银行转账（如可用）进行。\n\n银行转账说明：使用银行转账时，用户必须遵循捐赠时提供的付款说明。只有在全额款项成功到账至提供者账户后，捐赠才被视为已收到。\n\n信息准确性：用户有责任确保正确填写所有付款信息，包括银行信息。提供者不对因用户提供的不正确或不完整的付款信息而导致的任何资金损失负责。\n\n不可退还捐赠：捐赠通常不可退还。但是，在适用法律要求的情况下，法定退款权利不受影响。' },
    { title: '5. 专有内容（无用户生成内容）', content: '独家所有权：所有内容均由提供者独家提供。\n\n禁止用户提交：网站不允许用户生成的内容。' },
    { title: '6. 第三方链接和广告', content: '用户承认，与网站上发现的第三方网站或广告的任何互动完全由用户自行承担风险。' },
    { title: '7. 账户不活动', content: '提供者保留关闭连续180天未访问的任何用户账户的权利。' },
    { title: '8. 知识产权和版权', content: '所有权：网站上的所有内容和软件均为提供者的财产。严禁用户复制或复制网站的任何部分。' },
    { title: '9. 法律合规和管辖权', content: '管辖法律：本条款受英国法律管辖。所有各方服从英国法院的专属管辖权。' },
    { title: '10. 免责声明和责任限制', content: '无保证：网站按"原样"提供。\n\n非赌博服务：网站是信息工具。\n\n损失限制：提供者不对直接或间接损失负责。' },
    { title: '隐私政策', content: '' },
    { title: '11. 数据保护和GDPR', content: '网站致力于根据GDPR保护用户隐私。数据控制者是risknil.com。' },
    { title: '12. 个人数据收集', content: '注册：个人数据仅在注册时收集。\n\n同意：使用服务即表示用户同意收集其数据。' },
    { title: '13. 您作为数据主体的权利', content: '用户拥有以下权利：访问和更正、删除、限制和反对、可移植性。' },
    { title: '14. 数据使用和营销', content: '个人数据用于通信和支付处理。我们不向第三方出售数据。' },
    { title: '15. 数据披露', content: '数据仅可为处理付款或履行法律义务而向第三方披露。' },
    { title: '16. 安全和保留', content: '安全措施：我们使用SSL和哈希算法。\n\n保��：数据仅保留必要的时间。' },
    { title: '17. Cookie政策', content: '网站使用Cookie来个性化内容和分析流量。用户可以禁���Cookie。' },
    { title: '18. 版本和联系方式', content: '提供者：Risknil.com。\n\n电子邮件：info@risknil.com。\n\n最后更新：2026年5月14日。' }
  ]
}

const zhTWTerms: TermsContent = {
  title: 'Risknil.com 一般使用條款',
  lastUpdated: '最後更新：2026年5月14日',
  backButton: '返回 RiskNil',
  legalNote: '如語言版本之間存在任何差異，以英文版本為準。',
  sections: [
    { title: '1. 使用條款', content: '本使用條款（「條款」）構成「提供者」與訪問risknil.com網站、其行動應用程式或任何相關功能、內容或服務（統稱「網站」）的任何個人或實體（「用戶」）之間具有法律約束力的協議。' },
    { title: '2. 一般規定和全球範圍', content: '適用性：本條款管轄提供者與用戶之間的全部關係。\n\n修改：提供者保留隨時修改本條款的權利。\n\n合法使用：網站僅可用於合法目的。\n\n制裁：如發生濫用，提供者保留阻止訪問和終止帳戶的權利。' },
    { title: '3. 網站說明', content: '本網站提供公開的體育相關內容，包括資訊、統計數據、比分、投注提示和分析見解。這些內容來源於獨立的第三方來源以及內部研究和分析。\n\n提供者會盡合理努力確保所提供資訊的準確性和時效性；但不對任何數據的完整性、準確性或可靠性作出保證，包括比賽結果、統計數據或與投注相關的資訊。\n\n所有內容僅供參考之用。提供者不對使用者基於網站發布的資訊所做出的任何決定、採取的行動或遭受的損失承擔任何責任。' },
    { title: '4. 捐贈和銀行轉賬', content: '自願捐贈：本網站不銷售任何產品或服務，也不提供高級或付費內容。使用者所做的所有付款均為自願捐贈，僅用於支持網站的持續維護和發展。\n\n付款方式：捐贈可通過安全的線上支付閘道或銀行轉賬（如可用）進行。\n\n銀行轉賬說明：使用銀行轉賬時，使用者必須遵循捐贈時提供的付款說明。只有在全額款項成功到賬至提供者賬戶後，捐贈才被視為已收到。\n\n資訊準確性：使用者有責任確保正確填寫所有付款資訊，包括銀行資訊。提供者不對因使用者提供的不正確或不完整的付款資訊而導致的任何資金損失負責。\n\n不可退還捐贈：捐贈通常不可退還。但是，在適用法律要求的情況下，法定退款權利不受影響。' },
    { title: '5. 專有內容（無用戶生成內容）', content: '獨家所有權：所有內容均由提供者獨家提供。\n\n禁止用戶提交：網站不允許用戶生成的內容。' },
    { title: '6. ���三方連結和廣告', content: '用戶承認，與網站上發現的第三方網站或廣告的任何互動完全由用戶自行承擔風險。' },
    { title: '7. 帳戶不活動', content: '提供者保留關閉連續180天未訪問的任何用戶帳戶的權利。' },
    { title: '8. 知識產權和版權', content: '所有權：網站上的所有內容和軟體均為提供者的財產。嚴禁用戶複製或複製網站的任何部分。' },
    { title: '9. 法律合規和管轄權', content: '管轄法律：本條款受英國法律管轄。所有各方服從英國法院的專屬管轄權。' },
    { title: '10. 免責聲明和責任限制', content: '無保證：網站按「原樣」提供。\n\n非賭博服務：網站是資訊工具。\n\n損失限制：提供者不對直接或間接損失負責。' },
    { title: '隱私政策', content: '' },
    { title: '11. 數據保護和GDPR', content: '網站致力於根據GDPR保護用戶隱私。數據控制者是risknil.com。' },
    { title: '12. 個人數據收集', content: '註冊：個人數據僅在註冊時收集。\n\n同意：使用服務即表示用戶同意收集其數據。' },
    { title: '13. ��作為數據主體的權利', content: '用戶擁有以下權利：訪問和更正、刪除、限制和反對、可移植性。' },
    { title: '14. 數據使用和營銷', content: '個人數據用於通信和支付處理。我們不向第三方出售數據。' },
    { title: '15. 數據披露', content: '數據僅可為處理付款或履行法律義務而向第三方披露。' },
    { title: '16. 安全和保留', content: '安全措施：我們使用SSL和雜湊演算法。\n\n保留：數據僅保留必要的時間。' },
    { title: '17. Cookie政策', content: '網站使用Cookie來個人化內容和分析流量。用戶可以停用Cookie。' },
    { title: '18. 版本和聯繫方式', content: '提供者：Risknil.com。\n\n電子郵件：info@risknil.com。\n\n最後更新：2026年5月14日。' }
  ]
}

const itTerms: TermsContent = {
  title: 'Termini Generali di Utilizzo per Risknil.com',
  lastUpdated: 'Ultimo aggiornamento: 14 maggio 2026',
  backButton: 'Torna a RiskNil',
  legalNote: 'In caso di discrepanza tra le versioni linguistiche, prevarrà la versione inglese.',
  sections: [
    { title: '1. Termini di Utilizzo', content: 'Questi Termini di Utilizzo (i "Termini") costituiscono un accordo legalmente vincolante tra il "Fornitore" e qualsiasi individuo o entità (l\'"Utente") che accede al sito web risknil.com, alle sue applicazioni mobili o a qualsiasi funzionalità, contenuto o servizio associato (collettivamente, il "Sito"). Il Fornitore e l\'Utente sono collettivamente indicati come le "Parti".' },
    { title: '2. Disposizioni Generali e Ambito Globale', content: `Applicabilità: Questi Termini regolano l'intera relazione tra il Fornitore e l'Utente. Accedendo al Sito, l'Utente conferma di aver letto, compreso e accettato questi Termini nella loro interezza.

Modifiche: Il Fornitore si riserva il diritto di modificare, sospendere o integrare questi Termini in qualsiasi momento. L'uso continuato del Sito dopo le modifiche costituisce accettazione di tali modifiche.

Uso Legale: Il Sito deve essere utilizzato solo per scopi leciti. Agli Utenti è vietato utilizzare il Sito per trasmettere o memorizzare materiale che violi qualsiasi legge, infranga la proprietà intellettuale di terzi o violi le normative sul gioco d'azzardo o sui cambi in qualsiasi giurisdizione.

Sanzioni: In caso di uso improprio, il Fornitore si riserva il diritto di bloccare l'accesso, terminare gli account e avviare procedimenti legali a sua esclusiva discrezione.` },
    { title: '3. Descrizione del Sito', content: `Il Sito fornisce contenuti sportivi accessibili al pubblico, comprese informazioni, statistiche, risultati, suggerimenti per scommesse e analisi. Questi contenuti sono raccolti da fonti indipendenti di terze parti nonché da ricerche e analisi interne.

Il Fornitore compie sforzi ragionevoli per garantire l'accuratezza e la tempestività delle informazioni presentate; tuttavia, non viene fornita alcuna garanzia in merito alla completezza, accuratezza o affidabilità dei dati, compresi i risultati delle partite, le statistiche o le informazioni relative alle scommesse.

Tutti i contenuti sono forniti esclusivamente a scopo informativo. Il Fornitore non si assume alcuna responsabilità per decisioni, azioni o perdite subite dagli Utenti sulla base delle informazioni pubblicate sul Sito.` },
    { title: '4. Donazioni e Bonifici Bancari', content: `Donazioni Volontarie: Il Sito non vende alcun prodotto o servizio e non offre contenuti premium o a pagamento. Tutti i pagamenti effettuati dagli Utenti sono donazioni volontarie destinate esclusivamente a sostenere la manutenzione e lo sviluppo continui del Sito.

Metodi di Pagamento: Le donazioni possono essere effettuate tramite gateway di pagamento online sicuri o tramite bonifico bancario, ove disponibile.

Istruzioni per il Bonifico Bancario: Qualora venga utilizzato un bonifico bancario, gli Utenti devono seguire le istruzioni di pagamento fornite al momento della donazione. Le donazioni si considerano ricevute solo una volta che l'intero importo è stato effettivamente accreditato sul conto del Fornitore.

Accuratezza delle Informazioni: Gli Utenti sono responsabili di garantire che tutti i dati di pagamento, comprese le informazioni bancarie, siano inseriti correttamente. Il Fornitore non è responsabile per eventuali perdite di fondi derivanti da informazioni di pagamento errate o incomplete fornite dall'Utente.

Donazioni Non Rimborsabili: Le donazioni generalmente non sono rimborsabili. Tuttavia, ove richiesto dalla legge applicabile, i diritti legali di rimborso rimangono impregiudicati.` },
    { title: '5. Contenuto Proprietario (Nessun Contenuto Generato dagli Utenti)', content: `Proprietà Esclusiva: Tutto il contenuto visualizzato sul Sito è fornito esclusivamente dal Fornitore o dai suoi partner terzi autorizzati.

Nessun Invio da parte degli Utenti: Il Sito non consente, ospita o visualizza Contenuti Generati dagli Utenti (CGU), inclusi ma non limitati a commenti, post sui forum o caricamenti di dati pubblici.

Azioni Vietate: Gli Utenti non possono tentare di pubblicare, caricare o inserire contenuti nel Sito. Qualsiasi tentativo di aggirare questa restrizione sarà considerato una violazione della sicurezza e di questi Termini.` },
    { title: '6. Link di Terze Parti e Pubblicità', content: 'L\'Utente riconosce che qualsiasi interazione con siti web di terze parti o annunci pubblicitari trovati sul Sito è interamente a proprio rischio. Il Fornitore non è parte di alcun accordo stipulato tra l\'Utente e una terza parte e non accetta responsabilità per controversie derivanti da tali interazioni.' },
    { title: '7. Inattività dell\'Account', content: 'Il Fornitore si riserva il diritto di terminare qualsiasi account Utente che non sia stato accesso per 180 giorni consecutivi. Questa terminazione può avvenire con effetto immediato e senza preavviso.' },
    { title: '8. Proprietà Intellettuale e Copyright', content: `Proprietà: Tutti i contenuti, software e algoritmi proprietari sul Sito sono di proprietà del Fornitore. Agli Utenti è severamente vietato copiare, distribuire, "scraping" o riprodurre qualsiasi parte del Sito senza previo consenso scritto.

Applicazione: Qualsiasi violazione dei diritti di proprietà intellettuale sarà perseguita nella misura massima consentita dalla legge.` },
    { title: '9. Conformità Legale e Giurisdizione', content: `Legge Applicabile: Questi Termini sono regolati e interpretati in conformità con le leggi del Regno Unito. Tutte le Parti si sottopongono alla giurisdizione esclusiva dei tribunali del Regno Unito.

Esclusione: La Convenzione delle Nazioni Unite sui Contratti di Vendita Internazionale di Merci è espressamente esclusa.` },
    { title: '10. Esclusione di Responsabilità e Limitazione di Responsabilità', content: `Nessuna Garanzia: Il Sito è fornito "così com'è". Il Fornitore non si assume alcuna responsabilità o garanzia (espressa o implicita) che il contenuto sia privo di errori.

Non è un Servizio di Gioco d'Azzardo: Il Sito è uno strumento informativo e non un servizio di gioco d'azzardo o scommesse. Il Fornitore non partecipa a transazioni di gioco d'azzardo né detiene fondi dell'Utente per scopi di scommessa.

Limitazione delle Perdite: Il Fornitore non è responsabile per qualsiasi perdita diretta o indiretta, inclusa la perdita di profitti o guadagni, derivante dall'uso del Sito.` },
    { title: 'Informativa sulla Privacy', content: '' },
    { title: '11. Protezione dei Dati e GDPR', content: 'Il Sito si impegna a proteggere la privacy dell\'Utente in conformità con gli standard internazionali, incluso il Regolamento Generale sulla Protezione dei Dati (GDPR). Il Titolare del Trattamento dei Dati è risknil.com.' },
    { title: '12. Raccolta di Dati Personali', content: `Registrazione: I dati personali (ad es. email, nome) vengono raccolti solo quando un Utente si registra per servizi avanzati.

Consenso: Utilizzando questi servizi, l'Utente acconsente alla raccolta dei propri dati. Il consenso può essere revocato in qualsiasi momento inviando un'email a info@risknil.com.` },
    { title: '13. I Tuoi Diritti come Interessato', content: `Gli Utenti hanno i seguenti diritti in relazione ai propri dati:

Accesso e Rettifica: Il diritto di visualizzare e correggere i dati personali.

Cancellazione: Il diritto di far cancellare i dati se non più necessari.

Limitazione e Opposizione: Il diritto di limitare il modo in cui i dati vengono elaborati o di opporsi al marketing.

Portabilità: Il diritto di ricevere i dati in un formato leggibile da una macchina.` },
    { title: '14. Utilizzo dei Dati e Marketing', content: 'I dati personali vengono utilizzati per comunicare con gli Utenti, elaborare bonifici bancari/pagamenti, fornire contenuti personalizzati e mantenere la sicurezza. Non vendiamo né scambiamo dati personali a terze parti per scopi di marketing.' },
    { title: '15. Divulgazione dei Dati', content: 'I dati possono essere divulgati a terze parti solo per facilitare l\'elaborazione dei pagamenti (ad es. istituti bancari), in caso di vendita del Sito, o per adempiere a obblighi legali.' },
    { title: '16. Sicurezza e Conservazione', content: `Misure di Sicurezza: Utilizziamo misure tecniche, inclusi SSL e algoritmi di hashing, per proteggere i dati.

Conservazione: I dati vengono conservati solo per il tempo necessario. Se un account rimane inattivo per un (1) anno, tutti i dati personali associati verranno eliminati permanentemente.` },
    { title: '17. Politica sui Cookie', content: 'Il Sito utilizza cookie per personalizzare i contenuti, analizzare il traffico e fornire funzionalità dei social media. Gli Utenti possono disabilitare i cookie nelle impostazioni del proprio browser.' },
    { title: '18. Versione e Contatto', content: `Fornitore: Risknil.com.

Email: info@risknil.com.

Ultimo aggiornamento: 14 maggio 2026.

In caso di discrepanza tra le versioni in diverse lingue, prevarrà la versione in inglese.` }
  ]
}

const svTerms: TermsContent = {
  title: 'Allmänna Användarvillkor för Risknil.com',
  lastUpdated: 'Senast uppdaterad: 14 maj 2026',
  backButton: 'Tillbaka till RiskNil',
  legalNote: 'Vid eventuella avvikelser mellan språkversioner ska den engelska versionen gälla.',
  sections: [
    { title: '1. Användarvillkor', content: 'Dessa Användarvillkor ("Villkoren") utgör ett juridiskt bindande avtal mellan "Leverantören" och varje individ eller enhet ("Användaren") som besöker webbplatsen risknil.com, dess mobilapplikationer eller tillhörande funktioner, innehåll eller tjänster (gemensamt "Webbplatsen"). Leverantören och Användaren kallas gemensamt för "Parterna".' },
    { title: '2. Allmänna Bestämmelser och Globalt Tillämpningsområde', content: 'Tillämplighet: Dessa Villkor styr hela relationen mellan Leverantören och Användaren. Genom att använda Webbplatsen bekräftar Användaren att ha läst, förstått och accepterat dessa Villkor i sin helhet.\n\nÄndringar: Leverantören förbehåller sig rätten att ändra, upphäva eller komplettera dessa Villkor när som helst. Fortsatt användning av Webbplatsen efter ändringar utgör acceptans av sådana ändringar.\n\nLaglig Användning: Webbplatsen får endast användas för lagliga ändamål. Användare är förbjudna att använda Webbplatsen för att överföra eller lagra material som bryter mot någon lag.\n\nSanktioner: Vid missbruk förbehåller sig Leverantören r��tten att blockera åtkomst, avsluta konton och inleda rättsliga förfaranden.' },
    { title: '3. Beskrivning av Webbplatsen', content: 'Webbplatsen tillhandahåller offentligt tillgängligt sportrelaterat innehåll, inklusive information, statistik, resultat, vadhållningstips och analyser. Detta innehåll sammanställs från oberoende tredjepartskällor samt intern forskning och analys.\n\nLeverantören gör rimliga ansträngningar för att säkerställa att den presenterade informationen är korrekt och aktuell; ingen garanti ges dock avseende fullständighet, noggrannhet eller tillförlitlighet för någon data, inklusive matchresultat, statistik eller vadhållningsrelaterad information.\n\nAllt innehåll tillhandahålls endast i informationssyfte. Leverantören tar inget ansvar för beslut, handlingar eller förluster som Användare drabbas av baserat på informationen som publiceras på Webbplatsen.' },
    { title: '4. Donationer och Banköverföringar', content: 'Frivilliga Donationer: Webbplatsen säljer inga produkter eller tjänster och erbjuder inget premium- eller betalinnehåll. Alla betalningar som görs av Användare är frivilliga donationer som uteslutande är avsedda att stödja det fortlöpande underhållet och utvecklingen av Webbplatsen.\n\nBetalningsmetoder: Donationer kan göras via säkra online-betalningsgateways eller via banköverföring, där det är tillgängligt.\n\nInstruktioner för Banköverföring: Vid banköverföring måste Användare följa de betalningsinstruktioner som tillhandahålls vid donationstillfället. Donationer anses mottagna först när hela beloppet har bokförts på Leverantörens konto.\n\nInformationens Noggrannhet: Användare ansvarar för att alla betalningsuppgifter, inklusive bankuppgifter, anges korrekt. Leverantören ansvarar inte för förlust av medel till följd av felaktig eller ofullständig betalningsinformation som tillhandahålls av Användaren.\n\nIcke-återbetalningsbara Donationer: Donationer är i allmänhet icke-återbetalningsbara. Där tillämplig lag kräver det förblir dock lagstadgade återbetalningsrättigheter opåverkade.' },
    { title: '5. Eget Innehåll (Inget Användargenererat Innehåll)', content: 'Exklusivt Ägande: Allt innehåll som visas på Webbplatsen tillhandahålls uteslutande av Leverantören eller dess auktoriserade tredjepartspartners.\n\nInga Användarinlämningar: Webbplatsen tillåter, värderar eller visar inte Användargenererat Innehåll.\n\nFörbjudna Åtgärder: Användare får inte försöka publicera, ladda upp eller infoga innehåll på Webbplatsen.' },
    { title: '6. Tredjepartslänkar och Reklam', content: 'Användaren erkänner att all interaktion med tredjepartswebbplatser eller annonser som finns på Webbplatsen sker helt på egen risk. Leverantören är inte part i något avtal mellan Användaren och en tredje part.' },
    { title: '7. Kontoinaktivitet', content: 'Leverantören förbehåller sig rätten att avsluta alla Användarkonton som inte har använts under 180 på varandra följande dagar. Denna uppsägning kan ske med omedelbar verkan och utan förvarning.' },
    { title: '8. Immateriella Rättigheter och Upphovsrätt', content: 'Ägande: Allt innehåll, programvara och proprietära algoritmer på Webbplatsen ägs av Leverantören. Användare är strängt förbjudna att kopiera, distribuera, skrapa eller reproducera någon del av Webbplatsen utan föregående skriftligt samtycke.\n\nTillämpning: Varje intrång i immateriella rättigheter kommer att beivras i lagens fulla utsträckning.' },
    { title: '9. Juridisk Efterlevnad och Jurisdiktion', content: 'Tillämplig Lag: Dessa Villkor regleras av och tolkas i enlighet med lagarna i Storbritannien. Alla Parter underkastas sig den exklusiva jurisdiktionen för domstolarna i Storbritannien.\n\nUndantag: FN:s konvention angående avtal om internationella köp av varor är uttryckligen undantagen.' },
    { title: '10. Friskrivning och Ansvarsbegränsning', content: 'Ingen Garanti: Webbplatsen tillhandahålls "i befintligt skick". Leverantören tar inget ansvar eller garantier för att innehållet är fritt från fel.\n\nInte en Speltjänst: Webbplatsen är ett informationsverktyg och inte en spel- eller vadhållningstjänst.\n\nBegränsning av Förluster: Leverantören är inte ansvarig för direkta eller indirekta förluster som härrör från användningen av Webbplatsen.' },
    { title: 'Integritetspolicy', content: '' },
    { title: '11. Dataskydd och GDPR', content: 'Webbplatsen är engagerad i att skydda Användarens integritet i enlighet med internationella standarder, inklusive den allmänna dataskyddsförordningen (GDPR). Personuppgiftsansvarig är risknil.com.' },
    { title: '12. Insamling av Personuppgifter', content: 'Registrering: Personuppgifter (t.ex. e-post, namn) samlas endast in när en Användare registrerar sig för avancerade tjänster.\n\nSamtycke: Genom att använda dessa tjänster samtycker Användaren till insamlingen av sina uppgifter. Samtycke kan återkallas när som helst genom att skicka e-post till info@risknil.com.' },
    { title: '13. Dina Rättigheter som Registrerad', content: 'Användare har följande rättigheter avseende sina uppgifter:\n\nÅtkomst och Rättelse: Rätten att visa och korrigera personuppgifter.\n\nRadering: Rätten att få uppgifter raderade om de inte längre behövs.\n\nBegränsning och Invändning: Rätten att begränsa hur uppgifter behandlas eller invända mot marknadsföring.\n\nPortabilitet: Rätten att ta emot uppgifter i ett maskinläsbart format.' },
    { title: '14. Användning av Data och Marknadsföring', content: 'Personuppgifter används för att kommunicera med Användare, behandla banköverföringar/betalningar, tillhandahålla anpassat innehåll och upprätthålla säkerhet. Vi säljer eller byter inte personuppgifter till tredje part för marknadsföringsändamål.' },
    { title: '15. Utlämnande av Data', content: 'Data kan endast lämnas ut till tredje part för att underlätta betalningsbehandling (t.ex. bankinstitut), i händelse av försäljning av Webbplatsen, eller för att uppfylla juridiska skyldigheter.' },
    { title: '16. Säkerhet och Lagring', content: 'Säkerhetsåtgärder: Vi använder tekniska åtgärder, inklusive SSL och hashalgoritmer, för att skydda data.\n\nLagring: Data lagras endast så länge det är nödvändigt. Om ett konto förblir inaktivt i ett (1) år kommer alla associerade personuppgifter att raderas permanent.' },
    { title: '17. Cookiepolicy', content: 'Webbplatsen använder cookies för att anpassa innehåll, analysera trafik och tillhandahålla sociala mediefunktioner. Användare kan inaktivera cookies i sina webbläsarinställningar.' },
    { title: '18. Version och Kontakt', content: 'Leverantör: Risknil.com.\n\nE-post: info@risknil.com.\n\nSenast uppdaterad: 14 maj 2026.\n\nVid eventuella avvikelser mellan språkversioner ska den engelska versionen gälla.' }
  ]
}

const daTerms: TermsContent = {
  title: 'Generelle Brugsvilkår for Risknil.com',
  lastUpdated: 'Sidst opdateret: 14. maj 2026',
  backButton: 'Tilbage til RiskNil',
  legalNote: 'I tilfælde af uoverensstemmelse mellem sprogversioner, vil den engelske version være gældende.',
  sections: [
    { title: '1. Brugsvilkår', content: 'Disse Brugsvilkår ("Vilkårene") udgør en juridisk bindende aftale mellem "Udbyderen" og enhver person eller enhed ("Brugeren"), der tilgår hjemmesiden risknil.com, dens mobilapplikationer eller tilhørende funktioner, indhold eller tjenester (samlet "Webstedet"). Udbyderen og Brugeren kaldes samlet for "Parterne".' },
    { title: '2. Generelle Bestemmelser og Globalt Omfang', content: 'Anvendelighed: Disse Vilkår regulerer hele forholdet mellem Udbyderen og Brugeren. Ved at bruge Webstedet bekræfter Brugeren at have læst, forstået og accepteret disse Vilkår i deres helhed.\n\nÆndringer: Udbyderen forbeholder sig ret til at ændre, suspendere eller supplere disse Vilkår til enhver tid.\n\nLovlig Brug: Webstedet må kun bruges til lovlige formål.\n\nSanktioner: Ved misbrug forbeholder Udbyderen sig ret til at blokere adgang og opsige konti.' },
    { title: '3. Beskrivelse af Webstedet', content: 'Webstedet leverer offentligt tilgængeligt sportsrelateret indhold, herunder information, statistik, resultater, væddemålstips og analyser. Dette indhold er sammensat fra uafhængige tredjepartskilder samt intern research og analyse.\n\nUdbyderen gør rimelige bestræbelser på at sikre nøjagtigheden og aktualiteten af de præsenterede oplysninger; der gives dog ingen garanti for fuldstændigheden, nøjagtigheden eller pålideligheden af nogen data, herunder kampresultater, statistik eller væddemålsrelaterede oplysninger.\n\nAlt indhold leveres udelukkende til informationsformål. Udbyderen påtager sig intet ansvar for beslutninger, handlinger eller tab, som Brugere pådrager sig på baggrund af de oplysninger, der offentliggøres på Webstedet.' },
    { title: '4. Donationer og Bankoverførsler', content: 'Frivillige Donationer: Webstedet sælger ingen produkter eller tjenester og tilbyder intet premium- eller betalingsindhold. Alle betalinger foretaget af Brugere er frivillige donationer, der udelukkende har til formål at støtte den løbende vedligeholdelse og udvikling af Webstedet.\n\nBetalingsmetoder: Donationer kan foretages via sikre online betalingsgateways eller via bankoverførsel, hvor det er tilgængeligt.\n\nInstruktioner for Bankoverførsel: Ved bankoverførsel skal Brugere følge de betalingsinstruktioner, der gives på donationstidspunktet. Donationer betragtes først som modtaget, når hele beløbet er gået ind på Udbyderens konto.\n\nNøjagtighed af Oplysninger: Brugere er ansvarlige for, at alle betalingsoplysninger, herunder bankoplysninger, indtastes korrekt. Udbyderen er ikke ansvarlig for tab af midler som følge af forkerte eller ufuldstændige betalingsoplysninger angivet af Brugeren.\n\nIkke-refunderbare Donationer: Donationer er generelt ikke-refunderbare. Hvor gældende lov kræver det, forbliver lovbestemte refusionsrettigheder dog upåvirkede.' },
    { title: '5. Ejet Indhold (Intet Brugergenereret Indhold)', content: 'Eksklusivt Ejerskab: Alt indhold vist på Webstedet leveres udelukkende af Udbyderen.\n\nIngen Brugerindsendelser: Webstedet tillader ikke Brugergenereret Indhold.\n\nForbudte Handlinger: Brugere må ikke forsøge at poste eller uploade indhold på Webstedet.' },
    { title: '6. Tredjepartslinks og Reklamer', content: 'Brugeren anerkender, at enhver interaktion med tredjepartswebsteder eller reklamer fundet på Webstedet er helt på egen risiko.' },
    { title: '7. Kontoinaktivitet', content: 'Udbyderen forbeholder sig ret til at opsige enhver Brugerkonto, der ikke er blevet tilgået i 180 på hinanden følgende dage.' },
    { title: '8. Intellektuel Ejendomsret og Ophavsret', content: 'Ejerskab: Alt indhold og software på Webstedet ejes af Udbyderen. Brugere er strengt forbudt at kopiere eller reproducere nogen del af Webstedet.\n\nHåndhævelse: Enhver krænkelse vil blive forfulgt i lovens fulde omfang.' },
    { title: '9. Juridisk Overholdelse og Jurisdiktion', content: 'Gældende Lov: Disse Vilkår er underlagt lovene i Storbritannien. Alle Parter underkaster sig den eksklusive jurisdiktion af domstolene i Storbritannien.' },
    { title: '10. Ansvarsfraskrivelse og Ansvarsbegrænsning', content: 'Ingen Garanti: Webstedet leveres "som det er".\n\nIkke en Spilletjeneste: Webstedet er et informationsværktøj og ikke en spiltjeneste.\n\nBegrænsning af Tab: Udbyderen er ikke ansvarlig for direkte eller indirekte tab.' },
    { title: 'Privatlivspolitik', content: '' },
    { title: '11. Databeskyttelse og GDPR', content: 'Webstedet er forpligtet til at beskytte Brugerens privatliv i overensstemmelse med GDPR. Den Dataansvarlige er risknil.com.' },
    { title: '12. Indsamling af Personoplysninger', content: 'Registrering: Personoplysninger indsamles kun, når en Bruger registrerer sig.\n\nSamtykke: Ved at bruge disse tjenester giver Brugeren samtykke til indsamling af sine data.' },
    { title: '13. Dine Rettigheder som Registreret', content: 'Brugere har følgende rettigheder: Adgang og Berigtigelse, Sletning, Begrænsning og Indsigelse, Portabilitet.' },
    { title: '14. Brug af Data og Markedsføring', content: 'Personoplysninger bruges til at kommunikere med Brugere og behandle betalinger. Vi sælger ikke personoplysninger til tredjeparter.' },
    { title: '15. Videregivelse af Data', content: 'Data kan kun videregives til tredjeparter for at lette betalingsbehandling eller for at opfylde juridiske forpligtelser.' },
    { title: '16. Sikkerhed og Opbevaring', content: 'Sikkerhedsforanstaltninger: Vi bruger SSL og hashing-algoritmer til at beskytte data.\n\nOpbevaring: Data opbevares kun så længe det er nødvendigt.' },
    { title: '17. Cookiepolitik', content: 'Webstedet bruger cookies til at tilpasse indhold og analysere trafik. Brugere kan deaktivere cookies i deres browserindstillinger.' },
    { title: '18. Version og Kontakt', content: 'Udbyder: Risknil.com.\n\nE-mail: info@risknil.com.\n\nSidst opdateret: 14. maj 2026.' }
  ]
}

const nlTerms: TermsContent = {
  title: 'Algemene Gebruiksvoorwaarden voor Risknil.com',
  lastUpdated: 'Laatst bijgewerkt: 14 mei 2026',
  backButton: 'Terug naar RiskNil',
  legalNote: 'Bij eventuele discrepanties tussen taalversies prevaleert de Engelse versie.',
  sections: [
    { title: '1. Gebruiksvoorwaarden', content: 'Deze Gebruiksvoorwaarden (de "Voorwaarden") vormen een juridisch bindende overeenkomst tussen de "Aanbieder" en elke persoon of entiteit (de "Gebruiker") die toegang heeft tot de website risknil.com, de mobiele applicaties of bijbehorende functies, inhoud of diensten (gezamenlijk de "Website"). De Aanbieder en de Gebruiker worden gezamenlijk aangeduid als de "Partijen".' },
    { title: '2. Algemene Bepalingen en Mondiale Reikwijdte', content: 'Toepasselijkheid: Deze Voorwaarden regelen de volledige relatie tussen de Aanbieder en de Gebruiker. Door toegang te krijgen tot de Website bevestigt de Gebruiker dat hij deze Voorwaarden volledig heeft gelezen, begrepen en ermee heeft ingestemd.\n\nWijzigingen: De Aanbieder behoudt zich het recht voor om deze Voorwaarden op elk moment te wijzigen, op te schorten of aan te vullen. Voortgezet gebruik van de Website na wijzigingen houdt aanvaarding van die wijzigingen in.\n\nWettig Gebruik: De Website mag alleen voor wettige doeleinden worden gebruikt.\n\nSancties: Bij misbruik behoudt de Aanbieder zich het recht voor om toegang te blokkeren, accounts te beëindigen en juridische procedures te starten.' },
    { title: '3. Beschrijving van de Website', content: 'De Website biedt openbaar toegankelijke sportgerelateerde inhoud, waaronder informatie, statistieken, scores, weddenschapstips en analyses. Deze inhoud is samengesteld uit onafhankelijke bronnen van derden en uit intern onderzoek en analyse.\n\nDe Aanbieder doet redelijke inspanningen om de nauwkeurigheid en actualiteit van de gepresenteerde informatie te waarborgen; er wordt echter geen garantie gegeven met betrekking tot de volledigheid, nauwkeurigheid of betrouwbaarheid van gegevens, waaronder wedstrijdresultaten, statistieken of weddenschapsgerelateerde informatie.\n\nAlle inhoud wordt uitsluitend ter informatie verstrekt. De Aanbieder aanvaardt geen verantwoordelijkheid voor beslissingen, handelingen of verliezen die Gebruikers oplopen op basis van de op de Website gepubliceerde informatie.' },
    { title: '4. Donaties en Bankoverschrijvingen', content: 'Vrijwillige Donaties: De Website verkoopt geen producten of diensten en biedt geen premium- of betaalde inhoud. Alle betalingen door Gebruikers zijn vrijwillige donaties die uitsluitend bedoeld zijn om het doorlopende onderhoud en de ontwikkeling van de Website te ondersteunen.\n\nBetaalmethoden: Donaties kunnen worden gedaan via beveiligde online betaalgateways of via bankoverschrijving, waar beschikbaar.\n\nInstructies voor Bankoverschrijving: Bij gebruik van een bankoverschrijving moeten Gebruikers de betalingsinstructies volgen die op het moment van de donatie worden verstrekt. Donaties worden pas als ontvangen beschouwd zodra het volledige bedrag succesvol op de rekening van de Aanbieder is bijgeschreven.\n\nNauwkeurigheid van Informatie: Gebruikers zijn verantwoordelijk voor het correct invoeren van alle betalingsgegevens, inclusief bankgegevens. De Aanbieder is niet aansprakelijk voor verlies van geld als gevolg van onjuiste of onvolledige betalingsinformatie verstrekt door de Gebruiker.\n\nNiet-restitueerbare Donaties: Donaties zijn in het algemeen niet-restitueerbaar. Waar de toepasselijke wetgeving dit vereist, blijven wettelijke restitutierechten echter onaangetast.' },
    { title: '5. Eigendomsinhoud (Geen Door Gebruikers Gegenereerde Inhoud)', content: 'Exclusief Eigendom: Alle inhoud op de Website wordt uitsluitend geleverd door de Aanbieder of zijn gelicentieerde externe partners.\n\nGeen Gebruikersinzendingen: De Website staat geen door gebruikers gegenereerde inhoud toe.\n\nVerboden Acties: Gebruikers mogen niet proberen inhoud op de Website te plaatsen, uploaden of injecteren.' },
    { title: '6. Links van Derden en Reclame', content: 'De Gebruiker erkent dat elke interactie met websites van derden of advertenties op de Website geheel voor eigen risico is. De Aanbieder is geen partij bij overeenkomsten tussen de Gebruiker en een derde partij.' },
    { title: '7. Account Inactiviteit', content: 'De Aanbieder behoudt zich het recht voor om elk Gebruikersaccount dat 180 opeenvolgende dagen niet is gebruikt, te sluiten. Deze sluiting kan met onmiddellijke ingang en zonder voorafgaande kennisgeving plaatsvinden.' },
    { title: '8. Intellectueel Eigendom en Auteursrecht', content: 'Eigendom: Alle inhoud, software en eigen algoritmen op de Website zijn eigendom van de Aanbieder. Gebruikers is het strikt verboden om enig deel van de Website te kopiëren, verspreiden, scrapen of reproduceren zonder voorafgaande schriftelijke toestemming.\n\nHandhaving: Elke schending van intellectuele eigendomsrechten zal worden vervolgd.' },
    { title: '9. Juridische Naleving en Jurisdictie', content: 'Toepasselijk Recht: Deze Voorwaarden worden beheerst door en geïnterpreteerd in overeenstemming met de wetten van het Verenigd Koninkrijk. Alle Partijen onderwerpen zich aan de exclusieve jurisdictie van de rechtbanken van het Verenigd Koninkrijk.\n\nUitsluiting: Het VN-Verdrag inzake internationale koopovereenkomsten is uitdrukkelijk uitgesloten.' },
    { title: '10. Disclaimer en Beperking van Aansprakelijkheid', content: 'Geen Garanties: De Website wordt geleverd "zoals deze is". De Aanbieder aanvaardt geen verantwoordelijkheid of garantie dat de inhoud foutloos is.\n\nGeen Gokdienst: De Website is een informatietool en geen gok- of weddenschapsdienst.\n\nBeperking van Verlies: De Aanbieder is niet aansprakelijk voor enig direct of indirect verlies als gevolg van het gebruik van de Website.' },
    { title: 'Privacybeleid', content: '' },
    { title: '11. Gegevensbescherming en AVG', content: 'De Website zet zich in voor de bescherming van de privacy van de Gebruiker in overeenstemming met internationale normen, waaronder de Algemene Verordening Gegevensbescherming (AVG). De Verwerkingsverantwoordelijke is risknil.com.' },
    { title: '12. Verzameling van Persoonsgegevens', content: 'Registratie: Persoonsgegevens (bijv. e-mail, naam) worden alleen verzameld wanneer een Gebruiker zich registreert voor geavanceerde diensten.\n\nToestemming: Door deze diensten te gebruiken, stemt de Gebruiker in met het verzamelen van zijn gegevens. Toestemming kan op elk moment worden ingetrokken door een e-mail te sturen naar info@risknil.com.' },
    { title: '13. Uw Rechten als Betrokkene', content: 'Gebruikers hebben de volgende rechten met betrekking tot hun gegevens:\n\nToegang en Rectificatie: Het recht om persoonsgegevens in te zien en te corrigeren.\n\nVerwijdering: Het recht om gegevens te laten verwijderen als ze niet langer nodig zijn.\n\nBeperking en Bezwaar: Het recht om te beperken hoe gegevens worden verwerkt of bezwaar te maken tegen marketing.\n\nOverdraagbaarheid: Het recht om gegevens in een machineleesbaar formaat te ontvangen.' },
    { title: '14. Gebruik van Gegevens en Marketing', content: 'Persoonsgegevens worden gebruikt om te communiceren met Gebruikers, bankoverschrijvingen/betalingen te verwerken, gepersonaliseerde inhoud te bieden en de beveiliging te handhaven. Wij verkopen of verhandelen geen persoonsgegevens aan derden voor marketingdoeleinden.' },
    { title: '15. Openbaarmaking van Gegevens', content: 'Gegevens mogen alleen aan derden worden verstrekt om betalingsverwerking te vergemakkelijken (bijv. bankinstellingen), bij verkoop van de Website, of om te voldoen aan wettelijke verplichtingen.' },
    { title: '16. Beveiliging en Bewaring', content: 'Beveiligingsmaatregelen: We gebruiken technische maatregelen, waaronder SSL en hash-algoritmen, om gegevens te beschermen.\n\nBewaring: Gegevens worden alleen zo lang bewaard als nodig. Als een account een (1) jaar inactief blijft, worden alle bijbehorende persoonsgegevens permanent verwijderd.' },
    { title: '17. Cookiebeleid', content: 'De Website gebruikt cookies om inhoud te personaliseren, verkeer te analyseren en sociale mediafuncties te bieden. Gebruikers kunnen cookies uitschakelen in hun browserinstellingen.' },
    { title: '18. Versie en Contact', content: 'Aanbieder: Risknil.com.\n\nE-mail: info@risknil.com.\n\nLaatst bijgewerkt: 14 mei 2026.\n\nBij eventuele discrepanties tussen taalversies prevaleert de Engelse versie.' }
  ]
}

const elTerms: TermsContent = {
  title: 'Γενικοί Όροι Χρήσης για το Risknil.com',
  lastUpdated: 'Τελευταία ενημέρωση: 14 Μαΐου 2026',
  backButton: 'Επιστροφή στο RiskNil',
  legalNote: 'Σε περίπτωση οποιασδήποτε απόκλισης μεταξύ γλωσσικών εκδόσεων, υπερισχύει η αγγλική έκδοση.',
  sections: [
    { title: '1. Όροι Χρήσης', content: 'Αυτοί οι Όροι Χρήσης (οι "Όροι") αποτελούν νομικά δεσμευτική συμφωνία μεταξύ του "Παρόχου" και οποιουδήποτε ατόμου ή οντότητας (ο "Χρήστης") που έχει πρόσβαση στον ιστότοπο risknil.com, τις εφαρμογές κινητών ή τυχόν σχετικές λειτουργίες, περιεχόμενο ή υπηρεσίες (συλλογικά, ο "Ιστότοπος").' },
    { title: '2. Γενικές Διατάξεις και Παγκόσμιο Πεδίο', content: 'Εφαρμοσιμότητα: Αυτοί οι Όροι διέπουν ολόκληρη τη σχέση μεταξύ του Παρόχου και του Χρήστη.\n\nΤροποποιήσεις: Ο Πάροχος διατηρεί το δικαίωμα να τροποποιήσει αυτούς τους Όρους ανά πάσα στιγμή.\n\nΝόμιμη Χρήση: Ο Ιστότοπος πρέπει να χρησιμοποιείται μόνο για νόμιμους σκοπούς.\n\nΚυρώσεις: Σε περίπτωση κατάχρησης, ο Πάροχος διατηρεί το δικαίωμα να αποκλείσει την πρόσβαση και να τερματίσει λογαριασμούς.' },
    { title: '3. Περιγραφή του Ιστότοπου', content: 'Ο Ιστότοπος παρέχει δημόσια διαθέσιμο αθλητικό περιεχόμενο, συμπεριλαμβανομένων πληροφοριών, στατιστικών, σκορ, συμβουλών στοιχημάτων και αναλύσεων. Αυτό το περιεχόμενο συγκεντρώνεται από ανεξάρτητες πηγές τρίτων καθώς και από εσωτερική έρευνα και ανάλυση.\n\nΟ Πάροχος καταβάλλει εύλογες προσπάθειες για να διασφαλίσει την ακρίβεια και την επικαιρότητα των παρουσιαζόμενων πληροφοριών· ωστόσο, δεν παρέχεται καμία εγγύηση σχετικά με την πληρότητα, την ακρίβεια ή την αξιοπιστία οποιωνδήποτε δεδομένων, συμπεριλαμβανομένων των αποτελεσμάτων αγώνων, των στατιστικών ή των πληροφοριών που σχετίζονται με στοιχήματα.\n\nΌλο το περιεχόμενο παρέχεται αποκλειστικά για ενημερωτικούς σκοπούς. Ο Πάροχος δεν φέρει καμία ευθύνη για αποφάσεις, ενέργειες ή ζημίες που υφίστανται οι Χρήστες βάσει των πληροφοριών που δημοσιεύονται στον Ιστότοπο.' },
    { title: '4. Δωρεές και Τραπεζικές Μεταφορές', content: 'Εθελοντικές Δωρεές: Ο Ιστότοπος δεν πωλεί κανένα προϊόν ή υπηρεσία και δεν προσφέρει premium ή επί πληρωμή περιεχόμενο. Όλες οι πληρωμές που πραγματοποιούνται από τους Χρήστες είναι εθελοντικές δωρεές που προορίζονται αποκλειστικά για την υποστήριξη της συνεχούς συντήρησης και ανάπτυξης του Ιστότοπου.\n\nΜέθοδοι Πληρωμής: Οι δωρεές μπορούν να πραγματοποιηθούν μέσω ασφαλών διαδικτυακών πυλών πληρωμής ή μέσω τραπεζικής μεταφοράς, όπου είναι διαθέσιμη.\n\nΟδηγίες Τραπεζικής Μεταφοράς: Όταν χρησιμοποιείται τραπεζική μεταφορά, οι Χρήστες πρέπει να ακολουθούν τις οδηγίες πληρωμής που παρέχονται κατά τη στιγμή της δωρεάς. Οι δωρεές θεωρούνται ληφθείσες μόνο όταν το πλήρες ποσό έχει πιστωθεί επιτυχώς στον λογαριασμό του Παρόχου.\n\nΑκρίβεια Πληροφοριών: Οι Χρήστες είναι υπεύθυνοι για τη διασφάλιση ότι όλα τα στοιχεία πληρωμής, συμπεριλαμβανομένων των τραπεζικών πληροφοριών, καταχωρούνται σωστά. Ο Πάροχος δεν ευθύνεται για οποιαδήποτε απώλεια κεφαλαίων που προκύπτει από εσφαλμένες ή ελλιπείς πληροφορίες πληρωμής που παρέχονται από τον Χρήστη.\n\nΜη Επιστρεπτέες Δωρεές: Οι δωρεές γενικά δεν επιστρέφονται. Ωστόσο, όπου απαιτείται από την ισχύουσα νομοθεσία, τα νόμιμα δικαιώματα επιστροφής χρημάτων παραμένουν ανεπηρέαστα.' },
    { title: '5. Ιδιοκτησιακό Περιεχόμενο', content: 'Αποκλειστική Ιδιοκτησία: Όλο το περιεχόμενο παρέχεται αποκλειστικά από τον Πάροχο.\n\nΚαμία Υποβολή Χρηστών: Ο Ιστότοπος δεν επιτρέπει περιεχόμενο που δημιουργείται από χρήστες.' },
    { title: '6. Σύνδεσμοι Τρίτων και Δ��αφήμιση', content: 'Ο Χρήστης αναγνωρίζει ότι οποιαδήποτε αλληλεπίδραση με ιστότοπους τρίτων ή διαφημίσεις είναι εξ ολοκλήρου με δική του ευθύ��η.' },
    { title: '7. Αδράνεια Λογαριασμού', content: 'Ο Πάροχος διατηρεί το δικαίωμα να τερματίσει οποιονδήποτε λογαριασμό Χρήστη που δεν έχει χρησιμοποιηθεί για 180 συνεχόμενες ημέρες.' },
    { title: '8. Πνευματική Ιδιοκτησία', content: 'Ιδιοκτησία: Όλο το περιεχόμενο και το λογισμικό ανήκουν στον Πάροχο. Οι Χρήστες απαγορεύεται αυστηρά να αντιγράφουν ή να αναπαράγουν οποιοδήποτε μέρος του Ιστοτόπου.' },
    { title: '9. Νομική Συμμόρφωση', content: 'Εφαρμοστέο Δίκαιο: Αυτοί οι Όροι διέπονται από τους νόμους του Ηνωμένου Βασιλείου. Όλα τα Μέρη υπάγονται στην αποκλειστική δικαιοδοσία των δικαστηρίων του Ηνωμένου Βασιλείου.' },
    { title: '10. Αποποίηση Ευθυνών', content: 'Καμία Εγγύηση: Ο Ιστότοπος παρέχεται "ως έχει".\n\nΌχι Υπηρεσία Τυχερών Παιχνιδιών: Ο Ιστότοπος είναι εργαλείο πληροφόρησης.\n\nΠεριορισμός Ζημιών: Ο Πάροχος δεν ευθύνεται για άμεσες ή έμμεσες ζημίες.' },
    { title: 'Πολιτική Απορρήτου', content: '' },
    { title: '11. Προστασία Δεδομένων', content: 'Ο Ιστότοπος δεσμεύεται να προστατεύει την ιδιωτικότητα του Χρήστη σύμφωνα με τον GDPR. Ο Υπεύθυνος Επεξεργασίας Δεδομένων είναι το risknil.com.' },
    { title: '12. Συλλογή Προσωπικών Δεδομένων', content: 'Εγγραφή: Τα προσωπικά δεδομένα συλλέγονται μόνο κατά την εγγραφή.\n\nΣυγκατάθεση: Χρησιμοποιώντας τις υπηρεσίες, ο Χρήστης συναινεί στη συλλογή των δεδομένων του.' },
    { title: '13. Τα Δικαιώματά Σας', content: 'Οι Χρήστες έχουν τα ακόλουθα δικαιώματα: Πρόσβαση και Διόρθωση, Διαγραφή, Περιορισμός και Αντίρρηση, Φορητότητα.' },
    { title: '14. Χρήση Δεδομένων', content: 'Τα προσωπικά δεδομένα χρησιμοποιούνται για επικοινωνία και επεξεργασία πληρωμών. Δεν πουλάμε δεδομένα σε τρίτους.' },
    { title: '15. Αποκάλυψη Δεδομένων', content: '��α δεδομένα μπορούν να αποκαλυφθούν σε τρίτους μόνο για επεξεργασία πληρωμών ή νομικές υποχρεώσεις.' },
    { title: '16. Ασφάλεια και Διατήρηση', content: 'Μέτρα Ασφαλείας: Χρησιμοποιούμε SSL και αλγόριθμους κατακερματισμού.\n\nΔιατήρηση: Τα δεδομένα διατηρούνται μόνο όσο χρειάζεται.' },
    { title: '17. Πολιτική Cookies', content: 'Ο Ιστότοπος χρησιμοποιεί cookies για εξατομίκευση περιεχομένου και ανάλυση επισκεψιμότητας. Οι Χρήστες μπορούν να απενεργοποιήσουν τα cookies.' },
    { title: '18. Έκδοση και Επικοινωνία', content: 'Πάροχος: Risknil.com.\n\nEmail: info@risknil.com.\n\nΤελευταία ενημέρωση: 14 Μαΐου 2026.' }
  ]
}

const plTerms: TermsContent = {
  title: 'Ogólne Warunki Użytkowania dla Risknil.com',
  lastUpdated: 'Ostatnia aktualizacja: 14 maja 2026',
  backButton: 'Powrót do RiskNil',
  legalNote: 'W przypadku jakichkolwiek rozbieżności między wersjami językowymi, obowiązuje wersja angielska.',
  sections: [
    { title: '1. Warunki Użytkowania', content: 'Niniejsze Warunki Użytkowania ("Warunki") stanowią prawnie wiążącą umowę między "Dostawcą" a każdą osobą lub podmiotem ("Użytkownik") uzyskującym dostęp do strony internetowej risknil.com, jej aplikacji mobilnych lub powiązanych funkcji, treści lub usług (łącznie "Strona").' },
    { title: '2. Postanowienia Ogólne i Zakres Globalny', content: 'Stosowanie: Niniejsze Warunki regulują całą relację między Dostawcą a Użytkownikiem.\n\nZmiany: Dostawca zastrzega sobie prawo do zmiany niniejszych Warunków w dowolnym momencie.\n\nLegalne Użytkowanie: Strona może być używana wyłącznie do legalnych celów.\n\nSankcje: W przypadku nadużycia Dostawca zastrzega sobie prawo do zablokowania dostępu i zamknięcia kont.' },
    { title: '3. Opis Strony', content: 'Strona udostępnia publicznie dostępne treści sportowe, w tym informacje, statystyki, wyniki, porady bukmacherskie i analizy. Treści te są zestawiane z niezależnych źródeł zewnętrznych oraz z wewnętrznych badań i analiz.\n\nDostawca podejmuje uzasadnione starania, aby zapewnić dokładność i aktualność prezentowanych informacji; nie udziela się jednak żadnej gwarancji co do kompletności, dokładności ani wiarygodności jakichkolwiek danych, w tym wyników meczów, statystyk lub informacji związanych z zakładami.\n\nWszystkie treści są udostępniane wyłącznie w celach informacyjnych. Dostawca nie ponosi odpowiedzialności za jakiekolwiek decyzje, działania lub straty poniesione przez Użytkowników na podstawie informacji opublikowanych na Stronie.' },
    { title: '4. Darowizny i Przelewy Bankowe', content: 'Dobrowolne Darowizny: Strona nie sprzedaje żadnych produktów ani usług i nie oferuje treści premium ani płatnych. Wszystkie płatności dokonywane przez Użytkowników są dobrowolnymi darowiznami przeznaczonymi wyłącznie na wspieranie bieżącego utrzymania i rozwoju Strony.\n\nMetody Płatności: Darowizny można przekazywać za pośrednictwem bezpiecznych internetowych bramek płatniczych lub przelewem bankowym, jeśli jest dostępny.\n\nInstrukcje Przelewu Bankowego: W przypadku korzystania z przelewu bankowego Użytkownicy muszą postępować zgodnie z instrukcjami płatności podanymi w momencie dokonywania darowizny. Darowizny uznaje się za otrzymane dopiero po pomyślnym zaksięgowaniu pełnej kwoty na koncie Dostawcy.\n\nDokładność Informacji: Użytkownicy są odpowiedzialni za prawidłowe wprowadzenie wszystkich danych płatniczych, w tym informacji bankowych. Dostawca nie ponosi odpowiedzialności za utratę środków wynikającą z nieprawidłowych lub niekompletnych informacji płatniczych podanych przez Użytkownika.\n\nBezzwrotne Darowizny: Darowizny są zasadniczo bezzwrotne. Jednakże w przypadkach wymaganych przez obowiązujące prawo ustawowe prawa do zwrotu pozostają nienaruszone.' },
    { title: '5. Treści Własnościowe', content: 'Wyłączna Własność: Wszystkie treści są dostarczane wyłącznie przez Dostawcę.\n\nBrak Treści Użytkowników: Strona nie zezwala na tre��ci generowane przez użytkowników.' },
    { title: '6. Linki Stron Trzecich i Reklamy', content: 'Użytkownik przyjmuje do wiadomości, że wszelkie interakcje ze stronami internetowymi osób trzecich lub reklamami odbywają się na jego własne ryzyko.' },
    { title: '7. Nieaktywność Konta', content: 'Dostawca zastrzega sobie prawo do zamknięcia każdego konta Użytkownika, które nie było używane przez 180 kolejnych dni.' },
    { title: '8. Własność Intelektualna i Prawa Autorskie', content: 'Własność: Wszystkie treści i oprogramowanie na Stronie należą do Dostawcy. Użytkownikom surowo zabrania się kopiowania lub reprodukowania jakiejkolwiek części Strony.' },
    { title: '9. Zgodność Prawna i Jurysdykcja', content: 'Prawo Właściwe: Niniejsze Warunki podlegają prawu Wielkiej Brytanii. Wszystkie Strony poddają się wyłącznej jurysdykcji sądów Wielkiej Brytanii.' },
    { title: '10. Zastrzeżenia i Ograniczenie Odpowiedzialności', content: 'Brak Gwarancji: Strona jest dostarczana "tak jak jest".\n\nNie Jest Serwisem Hazardowym: Strona jest narzędziem informacyjnym.\n\nOgraniczenie Strat: Dostawca nie ponosi odpowiedzialności za bezpośrednie lub pośrednie straty.' },
    { title: 'Polityka Prywatności', content: '' },
    { title: '11. Ochrona Danych i RODO', content: 'Strona zobowiązuje się do ochrony prywatności Użytkownika zgodnie z RODO. Administratorem Danych jest risknil.com.' },
    { title: '12. Zbieranie Danych Osobowych', content: 'Rejestracja: Dane osobowe są zbierane tylko podczas rejestracji.\n\nZgoda: Korzystając z usług, Użytkownik wyraża zgodę na zbieranie danych.' },
    { title: '13. Twoje Prawa jako Osoby', content: 'Użytkownicy mają następujące prawa: Dostęp i Sprostowanie, Usunięcie, Ograniczenie i Sprzeciw, Przenoszalność.' },
    { title: '14. Wykorzystanie Danych i Marketing', content: 'Dane osobowe są wykorzystywane do komunikacji i przetwarzania płatności. Nie sprzedajemy danych stronom trzecim.' },
    { title: '15. Ujawnianie Danych', content: 'Dane mogą być ujawniane stronom trzecim wyłącznie w celu przetwarzania płatności lub wypełnienia obowiązków prawnych.' },
    { title: '16. Bezpieczeństwo i Przechowywanie', content: 'Środki Bezpieczeństwa: Używamy SSL i algorytmów haszowania.\n\nPrzechowywanie: Dane są przechowywane tylko tak długo, jak to konieczne.' },
    { title: '17. Polityka Cookies', content: 'Strona używa plików cookie do personalizacji treści i analizy ruchu. Użytkownicy mogą wyłączyć pliki cookie.' },
    { title: '18. Wersja i Kontakt', content: 'Dostawca: Risknil.com.\n\nEmail: info@risknil.com.\n\nOstatnia aktualizacja: 14 maja 2026.' }
  ]
}

const noTerms: TermsContent = {
  title: 'Generelle Bruksvilkår for Risknil.com',
  lastUpdated: 'Sist oppdatert: 14. mai 2026',
  backButton: 'Tilbake til RiskNil',
  legalNote: 'Ved eventuell uoverensstemmelse mellom språkversjoner, skal den engelske versjonen gjelde.',
  sections: [
    { title: '1. Bruksvilkår', content: 'Disse Bruksvilkårene ("Vilkårene") utgjør en juridisk bindende avtale mellom "Leverandøren" og enhver person eller enhet ("Brukeren") som bruker nettstedet risknil.com, dets mobilapplikasjoner eller tilknyttede funksjoner, innhold eller tjenester (samlet "Nettstedet").' },
    { title: '2. Generelle Bestemmelser og Globalt Omfang', content: 'Anvendelse: Disse Vilkårene regulerer hele forholdet mellom Leverandøren og Brukeren.\n\nEndringer: Leverandøren forbeholder seg retten til å endre disse Vilkårene når som helst.\n\nLovlig Bruk: Nettstedet skal kun brukes til lovlige formål.\n\nSanksjoner: Ved misbruk forbeholder Leverandøren seg retten til å blokkere tilgang og avslutte kontoer.' },
    { title: '3. Beskrivelse av Nettstedet', content: 'Nettstedet tilbyr offentlig tilgjengelig sportsrelatert innhold, inkludert informasjon, statistikk, resultater, oddstips og analyser. Dette innholdet er satt sammen fra uavhengige tredjepartskilder samt intern forskning og analyse.\n\nLeverandøren gjør rimelige anstrengelser for å sikre at den presenterte informasjonen er nøyaktig og oppdatert; det gis imidlertid ingen garanti for fullstendigheten, nøyaktigheten eller påliteligheten til noen data, inkludert kampresultater, statistikk eller oddsrelatert informasjon.\n\nAlt innhold leveres kun til informasjonsformål. Leverandøren påtar seg intet ansvar for beslutninger, handlinger eller tap som Brukere pådrar seg basert på informasjonen som publiseres på Nettstedet.' },
    { title: '4. Donasjoner og Bankoverføringer', content: 'Frivillige Donasjoner: Nettstedet selger ingen produkter eller tjenester og tilbyr ikke premium- eller betalt innhold. Alle betalinger gjort av Brukere er frivillige donasjoner som utelukkende er ment å støtte løpende vedlikehold og utvikling av Nettstedet.\n\nBetalingsmetoder: Donasjoner kan gjøres via sikre nettbaserte betalingsportaler eller via bankoverføring, der det er tilgjengelig.\n\nInstruksjoner for Bankoverføring: Ved bankoverføring må Brukere følge betalingsinstruksjonene som gis på donasjonstidspunktet. Donasjoner anses først som mottatt når hele beløpet er godskrevet Leverandørens konto.\n\nNøyaktighet av Informasjon: Brukere er ansvarlige for at alle betalingsopplysninger, inkludert bankopplysninger, legges inn korrekt. Leverandøren er ikke ansvarlig for tap av midler som følge av feil eller ufullstendig betalingsinformasjon oppgitt av Brukeren.\n\nIkke-refunderbare Donasjoner: Donasjoner er generelt ikke-refunderbare. Der gjeldende lov krever det, forblir imidlertid lovbestemte refusjonsrettigheter upåvirket.' },
    { title: '5. Eget Innhold', content: 'Eksklusivt Eierskap: Alt innhold leveres utelukkende av Leverandøren.\n\nIngen Brukerinnlegg: Nettstedet tillater ikke brukergenerert innhold.' },
    { title: '6. Tredjepartslenker og Reklame', content: 'Brukeren erkjenner at all interaksjon med tredjepartsnettsteder eller annonser skjer helt på egen risiko.' },
    { title: '7. Kontoinaktivitet', content: 'Leverandøren forbeholder seg retten til å avslutte enhver Brukerkonto som ikke har vært brukt i 180 påfølgende dager.' },
    { title: '8. Immaterielle Rettigheter', content: 'Eierskap: Alt innhold og programvare på Nettstedet eies av Leverandøren. Brukere er strengt forbudt å kopiere eller reprodusere noen del av Nettstedet.' },
    { title: '9. Juridisk Overholdelse', content: 'Gjeldende Lov: Disse Vilkårene er underlagt lovene i Storbritannia. Alle Parter underkaster seg den eksklusive jurisdiksjonen til domstolene i Storbritannia.' },
    { title: '10. Ansvarsfraskrivelse', content: 'Ingen Garanti: Nettstedet leveres "som det er".\n\nIkke en Gamblingtjeneste: Nettstedet er et informasjonsverktøy.\n\nBegrensning av Tap: Leverandøren er ikke ansvarlig for direkte eller indirekte tap.' },
    { title: 'Personvernpolicy', content: '' },
    { title: '11. Databeskyttelse og GDPR', content: 'Nettstedet er forpliktet til å beskytte Brukerens personvern i samsvar med GDPR. Behandlingsansvarlig er risknil.com.' },
    { title: '12. Innsamling av Personopplysninger', content: 'Registrering: Personopplysninger samles kun inn ved registrering.\n\nSamtykke: Ved å bruke tjenestene samtykker Brukeren til innsamling av sine data.' },
    { title: '13. Dine Rettigheter', content: 'Brukere har følgende rettigheter: Tilgang og Retting, Sletting, Begrensning og Innsigelse, Portabilitet.' },
    { title: '14. Bruk av Data og Markedsføring', content: 'Personopplysninger brukes til kommunikasjon og betalingsbehandling. Vi selger ikke data til tredjeparter.' },
    { title: '15. Utlevering av Data', content: 'Data kan kun utleveres til tredjeparter for betalingsbehandling eller for å oppfylle juridiske forpliktelser.' },
    { title: '16. Sikkerhet og Lagring', content: 'Sikkerhetstiltak: Vi bruker SSL og hashing-algoritmer.\n\nLagring: Data lagres kun så lenge det er nødvendig.' },
    { title: '17. Informasjonskapselpolicy', content: 'Nettstedet bruker informasjonskapsler for å tilpasse innhold og analysere trafikk. Brukere kan deaktivere informasjonskapsler.' },
    { title: '18. Versjon og Kontakt', content: 'Leverandør: Risknil.com.\n\nE-post: info@risknil.com.\n\nSist oppdatert: 14. mai 2026.' }
  ]
}

const fiTerms: TermsContent = {
  title: 'Yleiset Käyttöehdot Risknil.com-sivustolle',
  lastUpdated: 'Viimeksi päivitetty: 14. toukokuuta 2026',
  backButton: 'Takaisin RiskNiliin',
  legalNote: 'Kieliversioiden välisten eroavaisuuksien sattuessa englanninkielinen versio on määräävä.',
  sections: [
    { title: '1. Käyttöehdot', content: 'Nämä Käyttöehdot ("Ehdot") muodostavat oikeudellisesti sitovan sopimuksen "Palveluntarjoajan" ja jokaisen henkilön tai yhteisön ("Käyttäjä") välillä, joka käyttää risknil.com-verkkosivustoa, sen mobiilisovelluksia tai niihin liittyviä toimintoja, sisältöä tai palveluja (yhdessä "Sivusto").' },
    { title: '2. Yleiset Määräykset ja Maailmanlaajuinen Soveltamisala', content: 'Soveltaminen: Nämä Ehdot säätelevät koko Palveluntarjoajan ja Käyttäjän välistä suhdetta.\n\nMuutokset: Palveluntarjoaja pidättää oikeuden muuttaa näitä Ehtoja milloin tahansa.\n\nLaillinen Käyttö: Sivustoa saa käyttää vain laillisiin tarkoituksiin.\n\nSeuraamukset: Väärinkäytöstapauksissa Palveluntarjoaja pidättää oikeuden estää pääsyn ja sulkea tilejä.' },
    { title: '3. Sivuston Kuvaus', content: 'Sivusto tarjoaa julkisesti saatavilla olevaa urheiluun liittyvää sisältöä, mukaan lukien tietoja, tilastoja, tuloksia, vedonlyöntivihjeitä ja analyyseja. Tämä sisältö on koottu riippumattomista kolmansien osapuolten lähteistä sekä sisäisestä tutkimuksesta ja analyysistä.\n\nPalveluntarjoaja pyrkii kohtuullisin keinoin varmistamaan esitettyjen tietojen oikeellisuuden ja ajantasaisuuden; mitään takuuta ei kuitenkaan anneta minkään tietojen täydellisyydestä, oikeellisuudesta tai luotettavuudesta, mukaan lukien ottelutulokset, tilastot tai vedonlyöntiin liittyvät tiedot.\n\nKaikki sisältö tarjotaan ainoastaan tiedotustarkoituksessa. Palveluntarjoaja ei ota mitään vastuuta Käyttäjien päätöksistä, toimista tai tappioista, jotka perustuvat Sivustolla julkaistuihin tietoihin.' },
    { title: '4. Lahjoitukset ja Pankkisiirrot', content: 'Vapaaehtoiset Lahjoitukset: Sivusto ei myy mitään tuotteita tai palveluita eikä tarjoa premium- tai maksullista sisältöä. Kaikki Käyttäjien suorittamat maksut ovat vapaaehtoisia lahjoituksia, jotka on tarkoitettu yksinomaan Sivuston jatkuvan ylläpidon ja kehittämisen tukemiseen.\n\nMaksutavat: Lahjoituksia voidaan tehdä turvallisten verkkomaksuyhdyskäytävien kautta tai pankkisiirrolla, mikäli saatavilla.\n\nPankkisiirto-ohjeet: Pankkisiirtoa käytettäessä Käyttäjien on noudatettava lahjoituksen yhteydessä annettuja maksuohjeita. Lahjoitukset katsotaan vastaanotetuiksi vasta, kun koko summa on onnistuneesti kirjautunut Palveluntarjoajan tilille.\n\nTietojen Oikeellisuus: Käyttäjät ovat vastuussa siitä, että kaikki maksutiedot, mukaan lukien pankkitiedot, syötetään oikein. Palveluntarjoaja ei ole vastuussa varojen menetyksestä, joka johtuu Käyttäjän antamista virheellisistä tai puutteellisista maksutiedoista.\n\nEi-palautettavat Lahjoitukset: Lahjoitukset eivät yleensä ole palautettavissa. Siltä osin kuin sovellettava laki sitä edellyttää, lakisääteiset palautusoikeudet säilyvät kuitenkin ennallaan.' },
    { title: '5. Omistusoikeudellinen Sisältö', content: 'Yksinomainen Omistus: Kaikki sisältö toimitetaan yksinomaan Palveluntarjoajan toimesta.\n\nEi Käyttäjälähetyksiä: Sivusto ei salli käyttäjien tuottamaa sisältöä.' },
    { title: '6. Kolmannen Osapuolen Linkit ja Mainonta', content: 'Käyttäjä tunnustaa, että kaikki vuorovaikutus kolmansien osapuolten verkkosivustojen tai mainosten kanssa tapahtuu täysin omalla vastuulla.' },
    { title: '7. Tilin Toimettomuus', content: 'Palveluntarjoaja pidättää oikeuden sulkea minkä tahansa Käyttäjätilin, jota ei ole käytetty 180 peräkkäisenä päivänä.' },
    { title: '8. Immateriaalioikeudet ja Tekijänoikeudet', content: 'Omistus: Kaikki Sivuston sisältö ja ohjelmistot ovat Palveluntarjoajan omaisuutta. Käyttäjiltä on ehdottomasti kielletty Sivuston minkään osan kopioiminen tai jäljentäminen.' },
    { title: '9. Oikeudellinen Noudattaminen ja Toimivalta', content: 'Sovellettava Laki: Näitä Ehtoja säätelee Yhdistyneen kuningaskunnan laki. Kaikki osapuolet alistuvat Yhdistyneen kuningaskunnan tuomioistuinten yksinomaiseen toimivaltaan.' },
    { title: '10. Vastuuvapauslauseke', content: 'Ei Takuuta: Sivusto tarjotaan "sellaisenaan".\n\nEi Uhkapeli palvelu: Sivusto on tietotyökalu.\n\nTappioiden Rajoitus: Palveluntarjoaja ei ole vastuussa suorista tai epäsuorista tappioista.' },
    { title: 'Tietosuojakäytäntö', content: '' },
    { title: '11. Tietosuoja ja GDPR', content: 'Sivusto on sitoutunut suojelemaan Käyttäjän yksityisyyttä GDPR:n mukaisesti. Rekisterinpitäjä on risknil.com.' },
    { title: '12. Henkilötietojen Kerääminen', content: 'Rekisteröinti: Henkilötietoja kerätään vain rekisteröinnin yhteydessä.\n\nSuostumus: Palveluja käyttämällä Käyttäjä suostuu tietojensa keräämiseen.' },
    { title: '13. Oikeutesi Rekisteröitynä', content: 'Käyttäjillä on seuraavat oikeudet: Pääsy ja Oikaisu, Poisto, Rajoitus ja Vastustus, Siirrettävyys.' },
    { title: '14. Tietojen Käyttö ja Markkinointi', content: 'Henkilötietoja käytetään viestintään ja maksujen käsittelyyn. Emme myy tietoja kolmansille osapuolille.' },
    { title: '15. Tietojen Luovuttaminen', content: 'Tietoja voidaan luovuttaa kolmansille osapuolille vain maksujen käsittelyä tai lakisääteisten velvoitteiden täyttämistä varten.' },
    { title: '16. Turvallisuus ja Säilytys', content: 'Turvatoimet: Käytämme SSL:ää ja hajautusalgoritmeja.\n\nSäilytys: Tietoja säilytetään vain tarvittavan ajan.' },
    { title: '17. Evästekäytäntö', content: 'Sivusto käyttää evästeitä sisällön personointiin ja liikenteen analysointiin. Käyttäjät voivat poistaa evästeet käytöstä.' },
    { title: '18. Versio ja Yhteystiedot', content: 'Palveluntarjoaja: Risknil.com.\n\nSähköposti: info@risknil.com.\n\nViimeksi päivitetty: 14. toukokuuta 2026.' }
  ]
}

const roTerms: TermsContent = {
  title: 'Termeni Generali de Utilizare pentru Risknil.com',
  lastUpdated: 'Ultima actualizare: 14 mai 2026',
  backButton: 'Înapoi la RiskNil',
  legalNote: 'În cazul oricărei discrepanțe între versiunile lingvistice, versiunea în limba engleză va prevala.',
  sections: [
    { title: '1. Termeni de Utilizare', content: 'Acești Termeni de Utilizare ("Termenii") constituie un acord obligatoriu din punct de vedere juridic între "Furnizor" și orice persoană sau entitate ("Utilizatorul") care accesează site-ul web risknil.com, aplicațiile mobile sau funcțiile, conținutul sau serviciile asociate (colectiv, "Site-ul").' },
    { title: '2. Dispoziții Generale și Sfera Globală', content: 'Aplicabilitate: Acești Termeni reglementează întreaga relație dintre Furnizor și Utilizator.\n\nModificări: Furnizorul își rezervă dreptul de a modifica acești Termeni în orice moment.\n\nUtilizare Legală: Site-ul trebuie utilizat doar în scopuri legale.\n\nSancțiuni: În caz de abuz, Furnizorul își rezervă dreptul de a bloca accesul și de a închide conturile.' },
    { title: '3. Descrierea Site-ului', content: 'Site-ul oferă conținut sportiv disponibil public, inclusiv informații, statistici, scoruri, sfaturi pentru pariuri și analize. Acest conținut este compilat din surse independente terțe, precum și din cercetări și analize interne.\n\nFurnizorul depune eforturi rezonabile pentru a asigura acuratețea și actualitatea informațiilor prezentate; cu toate acestea, nu se oferă nicio garanție privind exhaustivitatea, acuratețea sau fiabilitatea oricăror date, inclusiv rezultatele meciurilor, statisticile sau informațiile legate de pariuri.\n\nÎntregul conținut este furnizat exclusiv în scop informativ. Furnizorul nu își asumă nicio responsabilitate pentru deciziile, acțiunile sau pierderile suferite de Utilizatori pe baza informațiilor publicate pe Site.' },
    { title: '4. Donații și Transferuri Bancare', content: 'Donații Voluntare: Site-ul nu vinde niciun produs sau serviciu și nu oferă conținut premium sau plătit. Toate plățile efectuate de Utilizatori sunt donații voluntare destinate exclusiv sprijinirii întreținerii și dezvoltării continue a Site-ului.\n\nMetode de Plată: Donațiile pot fi efectuate prin portaluri de plată online securizate sau prin transfer bancar, acolo unde este disponibil.\n\nInstrucțiuni pentru Transferul Bancar: În cazul utilizării transferului bancar, Utilizatorii trebuie să urmeze instrucțiunile de plată furnizate la momentul donației. Donațiile sunt considerate primite doar după ce suma totală a fost creditată cu succes în contul Furnizorului.\n\nAcuratețea Informațiilor: Utilizatorii sunt responsabili să se asigure că toate detaliile de plată, inclusiv informațiile bancare, sunt introduse corect. Furnizorul nu este răspunzător pentru pierderea de fonduri rezultată din informații de plată incorecte sau incomplete furnizate de Utilizator.\n\nDonații Nerambursabile: Donațiile sunt în general nerambursabile. Totuși, acolo unde legislația aplicabilă o impune, drepturile legale de rambursare rămân neafectate.' },
    { title: '5. Conținut Proprietar', content: 'Proprietate Exclusivă: Tot conținutul este furnizat exclusiv de Furnizor.\n\nFără Contribuții ale Utilizatorilor: Site-ul nu permite conținut generat de utilizatori.' },
    { title: '6. Linkuri Terțe și Publicitate', content: 'Utilizatorul recunoaște că orice interacțiune cu site-uri terțe sau reclame se face pe propria răspundere.' },
    { title: '7. Inactivitatea Contului', content: 'Furnizorul își rezervă dreptul de a închide orice cont de Utilizator care nu a fost accesat timp de 180 de zile consecutive.' },
    { title: '8. Proprietate Intelectuală și Drepturi de Autor', content: 'Proprietate: Tot conținutul și software-ul de pe Site sunt proprietatea Furnizorului. Utilizatorilor le este strict interzis să copieze sau să reproducă orice parte a Site-ului.' },
    { title: '9. Conformitate Legală și Jurisdicție', content: 'Legea Aplicabilă: Acești Termeni sunt guvernați de legile Regatului Unit. Toate Părțile se supun jurisdicției exclusive a instanțelor din Regatul Unit.' },
    { title: '10. Declinarea Responsabilității', content: 'Fără Garanție: Site-ul este furnizat "așa cum este".\n\nNu Este un Serviciu de Jocuri de Noroc: Site-ul este un instrument informațional.\n\nLimitarea Pierderilor: Furnizorul nu este responsabil pentru pierderi directe sau indirecte.' },
    { title: 'Politica de Confidențialitate', content: '' },
    { title: '11. Protecția Datelor și GDPR', content: 'Site-ul se angajează să protejeze confidențialitatea Utilizatorului în conformitate cu GDPR. Operatorul de Date este risknil.com.' },
    { title: '12. Colectarea Datelor Personale', content: 'Înregistrare: Datele personale sunt colectate doar la înregistrare.\n\nConsimțământ: Prin utilizarea serviciilor, Utilizatorul consimte la colectarea datelor sale.' },
    { title: '13. Drepturile Dumneavoastră', content: 'Utilizatorii au următoarele drepturi: Acces și Rectificare, Ștergere, Restricție și Opoziție, Portabilitate.' },
    { title: '14. Utilizarea Datelor și Marketing', content: 'Datele personale sunt utilizate pentru comunicare și procesarea plăților. Nu vindem date către terțe părți.' },
    { title: '15. Divulgarea Datelor', content: 'Datele pot fi divulgate terților doar pentru procesarea plăților sau pentru îndeplinirea obligațiilor legale.' },
    { title: '16. Securitate și Păstrare', content: 'Măsuri de Securitate: Utilizăm SSL și algoritmi de hash.\n\nPăstrare: Datele sunt păstrate doar atât timp cât este necesar.' },
    { title: '17. Politica Cookie', content: 'Site-ul folosește cookie-uri pentru personalizarea conținutului și analiza traficului. Utilizatorii pot dezactiva cookie-urile.' },
    { title: '18. Versiune și Contact', content: 'Furnizor: Risknil.com.\n\nEmail: info@risknil.com.\n\nUltima actualizare: 14 mai 2026.' }
  ]
}

const csTerms: TermsContent = {
  title: 'Všeobecné Podmínky Použití pro Risknil.com',
  lastUpdated: 'Poslední aktualizace: 14. května 2026',
  backButton: 'Zpět na RiskNil',
  legalNote: 'V případě jakýchkoli nesrovnalostí mezi jazykovými verzemi má přednost anglická verze.',
  sections: [
    { title: '1. Podmínky Použití', content: 'Tyto Podmínky Použití ("Podmínky") představují právně závaznou dohodu mezi "Poskytovatelem" a jakoukoli osobou nebo subjektem ("Uživatel"), který přistupuje na webové stránky risknil.com, jejich mobilní aplikace nebo související funkce, obsah nebo služby (souhrnně "Stránky").' },
    { title: '2. Obecná Ustanovení a Globální Rozsah', content: 'Použitelnost: Tyto Podmínky upravují celý vztah mezi Poskytovatelem a Uživatelem.\n\nZměny: Poskytovatel si vyhrazuje právo tyto Podmínky kdykoli změnit.\n\nLegální Použití: Stránky lze používat pouze k zákonným účelům.\n\nSankce: V případě zneužití si Poskytovatel vyhrazuje právo zablokovat přístup a zrušit účty.' },
    { title: '3. Popis Stránek', content: 'Stránky poskytují veřejně dostupný sportovní obsah, včetně informací, statistik, výsledků, sázkařských tipů a analýz. Tento obsah je sestaven z nezávislých zdrojů třetích stran i z interního výzkumu a analýzy.\n\nPoskytovatel vyvíjí přiměřené úsilí k zajištění přesnosti a aktuálnosti uváděných informací; neposkytuje však žádnou záruku ohledně úplnosti, přesnosti nebo spolehlivosti jakýchkoli údajů, včetně výsledků zápasů, statistik nebo informací souvisejících se sázkami.\n\nVeškerý obsah je poskytován pouze pro informační účely. Poskytovatel nenese žádnou odpovědnost za rozhodnutí, jednání nebo ztráty, které Uživatelé utrpí na základě informací zveřejněných na Stránkách.' },
    { title: '4. Dary a Bankovní Převody', content: 'Dobrovolné Dary: Stránky neprodávají žádné produkty ani služby a nenabízejí prémiový ani placený obsah. Veškeré platby provedené Uživateli jsou dobrovolné dary určené výhradně na podporu průběžné údržby a rozvoje Stránek.\n\nPlatební Metody: Dary lze poskytnout prostřednictvím zabezpečených online platebních bran nebo bankovním převodem, je-li k dispozici.\n\nPokyny k Bankovnímu Převodu: Při použití bankovního převodu musí Uživatelé dodržovat platební pokyny poskytnuté v okamžiku darování. Dary jsou považovány za přijaté až poté, co byla celá částka úspěšně připsána na účet Poskytovatele.\n\nPřesnost Informací: Uživatelé odpovídají za správné zadání všech platebních údajů, včetně bankovních informací. Poskytovatel neodpovídá za ztrátu prostředků způsobenou nesprávnými nebo neúplnými platebními údaji poskytnutými Uživatelem.\n\nNevratné Dary: Dary jsou obecně nevratné. Tam, kde to vyžadují platné právní předpisy, však zůstávají zákonná práva na vrácení peněz nedotčena.' },
    { title: '5. Vlastnický Obsah', content: 'Výhradní Vlastnictví: Veškerý obsah poskytuje výhradně Poskytovatel.\n\nŽádné Uživatelské Příspěvky: Stránky neumožňují obsah vytvořený uživateli.' },
    { title: '6. Odkazy Třetích Stran a Reklama', content: 'Uživatel bere na vědomí, že jakákoli interakce s webovými stránkami třetích stran nebo reklamami je zcela na jeho vlastní riziko.' },
    { title: '7. Neaktivita Účtu', content: 'Poskytovatel si vyhrazuje právo zrušit jakýkoli Uživatelský účet, který nebyl použit po dobu 180 po sobě jdoucích dnů.' },
    { title: '8. Duševní Vlastnictví a Autorská Práva', content: 'Vlastnictví: Veškerý obsah a software na Stránkách jsou vlastnictvím Poskytovatele. Uživatelům je přísně zakázáno kopírovat nebo reprodukovat jakoukoli část Stránek.' },
    { title: '9. Právní Soulad a Jurisdikce', content: 'Rozhodné Právo: Tyto Podmínky se řídí právem Spojeného království. Všechny Strany se podřizují výlučné jurisdikci soudů Spojeného království.' },
    { title: '10. Vyloučení a Omezení Odpovědnosti', content: 'Žádná Záruka: Stránky jsou poskytovány "tak jak jsou".\n\nNení Služba Hazardních Her: Stránky jsou informačním nástrojem.\n\nOmezení Ztrát: Poskytovatel nenese odpovědnost za přímé nebo nepřímé ztráty.' },
    { title: 'Zásady Ochrany Osobních Údajů', content: '' },
    { title: '11. Ochrana Údajů a GDPR', content: 'Stránky se zavazují chránit soukromí Uživatele v souladu s GDPR. Správcem Údajů je risknil.com.' },
    { title: '12. Shromažďování Osobních Údajů', content: 'Registrace: Osobní údaje jsou shromažďovány pouze při registraci.\n\nSouhlas: Používáním služeb Uživatel souhlasí se shromažďováním svých údajů.' },
    { title: '13. Vaše Práva', content: 'Uživatelé mají následující práva: Přístup a Oprava, Výmaz, Omezení a Námitka, Přenositelnost.' },
    { title: '14. Použití Údajů a Marketing', content: 'Osobní údaje se používají ke komunikaci a zpracování plateb. Neprodáváme údaje třetím stranám.' },
    { title: '15. Zveřejnění Údajů', content: 'Údaje mohou být zveřejněny třetím stranám pouze pro zpracování plateb nebo splnění zákonných povinností.' },
    { title: '16. Bezpečnost a Uchovávání', content: 'Bezpečnostní Opatření: Používáme SSL a hashovací algoritmy.\n\nUchovávání: Údaje jsou uchovávány pouze po nezbytně nutnou dobu.' },
    { title: '17. Zásady Cookies', content: 'Stránky používají cookies k personalizaci obsahu a analýze provozu. Uživatelé mohou cookies zakázat.' },
    { title: '18. Verze a Kontakt', content: 'Poskytovatel: Risknil.com.\n\nEmail: info@risknil.com.\n\nPoslední aktualizace: 14. května 2026.' }
  ]
}

const jaTerms: TermsContent = {
  title: 'Risknil.com 一般利用規約',
  lastUpdated: '最終更新日：2026年5月14日',
  backButton: 'RiskNilに戻る',
  legalNote: '言語バージョン間に相違がある場合は、英語版が優先されます。',
  sections: [
    { title: '1. 利用規約', content: 'この利用規約（「規約」）は、「プロバイダー」とrisknil.comウェブサイト、そのモバイルアプリケーション、または関連��る機能、コンテンツ、またはサービス（総称して「サイト」）にアクセスする個人または団体（「ユーザー」）との間の法的拘束力のある契約を構成します。' },
    { title: '2. 一般規定とグローバル範囲', content: '適用性：この規約は、プロバイダーとユーザー間の全ての関係を規定します。\n\n変更：プロバイダーは、いつでもこの規約を変更する権利を留保します。\n\n合法的使用：サイトは、合法的な目的でのみ使用する必要があります。\n\n制裁：不正使用の場合、プロバイダーはアクセスをブロックしアカウントを終了する権利を留保します。' },
    { title: '3. サイトの説明', content: 'サイトは、情報、統計、スコア、ベッティングのヒント、分析的見解を含む、一般公開されているスポーツ関連コンテンツを提供します。このコンテンツは、独立した第三者の情報源および社内の調査・分析から編集されています。\n\nプロバイダーは、提供される情報の正確性および適時性を確保するために合理的な努力を払いますが、試合結果、統計、ベッティング関連情報を含むいかなるデータの完全性、正確性、または信頼性についても保証しません。\n\nすべてのコンテンツは情報提供のみを目的として提供されます。プロバイダーは、サイトに掲載された情報に基づいてユーザーが行った決定、行動、または被った損失について一切責任を負いません。' },
    { title: '4. 寄付と銀行振込', content: '自発的な寄付：サイトは製品やサービスを一切販売せず、プレミアムコンテンツや有料コンテンツも提供しません。ユーザーが行うすべての支払いは、サイトの継続的な維持および開発を支援することのみを目的とした自発的な寄付です。\n\n支払い方法：寄付は、安全なオンライン決済ゲートウェイまたは利用可能な場合は銀行振込により行うことができます。\n\n銀行振込の手順：銀行振込を利用する場合、ユーザーは寄付時に提供される支払い手順に従う必要があります。寄付は、全額がプロバイダーの口座に正常に入金された時点で受領されたものとみなされます。\n\n情報の正確性：ユーザーは、銀行情報を含むすべての支払い情報が正しく入力されていることを確認する責任を負います。プロバイダーは、ユーザーが提供した不正確または不完全な支払い情報に起因する資金の損失について責任を負いません。\n\n返金不可の寄付：寄付は原則として返金できません。ただし、適用される法律で求められる場合、法定の返金権利は影響を受けません。' },
    { title: '5. 独自コンテンツ', content: '独占的所有権：すべてのコンテンツはプロバイダーによってのみ提供されます。\n\nユーザー投稿なし：サイトはユーザー生成コンテンツを許可しません。' },
    { title: '6. 第三者リンクと広告', content: 'ユーザーは、サイト上の第三者ウェブサイトまたは広告とのやり取りが完全に自己責任であることを認めます。' },
    { title: '7. アカウントの非アクティブ', content: 'プロバイダーは、180日連続でアクセスされていないユーザーアカウントを終了する権利を留保します。' },
    { title: '8. 知的財産権と著作権', content: '所有権：サイト上のすべてのコンテンツとソフトウェアはプロバイダーの所有物です。ユーザー��、サイトのいかなる部分もコピーまたは複製することを固く禁じられています。' },
    { title: '9. 法的遵守と管轄権', content: '準拠法：この規約は英国の法律に準拠し、解釈されます。すべての当事者は、英国の裁判所の専属管轄権に服します。' },
    { title: '10. 免責事項と責任制限', content: '保証なし：サイトは「現状のまま」提供されます。\n\nギャンブルサービスではない：サイトは情報ツールです。\n\n損失の制限：プロバイダーは直接的��たは間接的な損失に対��て責任を負いません。' },
    { title: 'プライバシーポリシー', content: '' },
    { title: '11. データ保護とGDPR', content: 'サイトはGDPRに従ってユーザーのプライバシーを保護することを約束します。データ管理者はrisknil.comです。' },
    { title: '12. 個人データの収集', content: '登録：個人データは登録時にのみ収集されます。\n\n同意：サービスを使用することにより、ユーザーはデータの収集に同意します。' },
    { title: '13. データ主体としてのあなたの権利', content: 'ユーザーには次の権利があります：アクセスと訂正、削除、制限と異議、ポータビリティ。' },
    { title: '14. データ使用とマーケティング', content: '個人データは、通信と支払い処理に使用されます。第三者にデータを販売することはありません。' },
    { title: '15. データの開示', content: 'データは、支払い処理または法的義務を果たすためにのみ第三者に開示される場合があります。' },
    { title: '16. セキュリティと保持', content: 'セキュリティ対策：SSLとハッシュアルゴリズムを使用しています。\n\n保持：データは必要な期間のみ保持されます。' },
    { title: '17. Cookieポリシー', content: 'サイトは、コンテンツのパーソナライズ���トラフィック分析のためにCookieを使用します。ユーザー���Cookieを無効にすることができます。' },
    { title: '18. バージョンと連絡先', content: 'プロバイダー：Risknil.com。\n\nメール：info@risknil.com。\n\n最終更新日：2026年5月14日。' }
  ]
}

const koTerms: TermsContent = {
  title: 'Risknil.com 일반 이용약관',
  lastUpdated: '최종 업데이트: 2026년 5월 14일',
  backButton: 'RiskNil로 돌아가기',
  legalNote: '언어 버전 간에 불일치가 있는 경우 영어 버전이 우선합니다.',
  sections: [
    { title: '1. 이용약관', content: '본 이용약관("약관")은 "제공자"와 risknil.com 웹사이트, 모바일 애플리케이션 또는 관련 기능, 콘텐츠 또는 서비스(총칭하여 "사이트")에 접근하는 개인 또는 단체("사용자") 간의 법적 구속력이 있는 계약을 구성합니다.' },
    { title: '2. 일반 조항 및 글로벌 범위', content: '적용: 본 약관은 제공자와 사용자 간의 전체 관계를 규율합니다.\n\n변경: 제공자는 언제든지 본 약관을 변경할 권리를 보유합니다.\n\n합법적 사용: 사이트는 합법적인 목적으로만 사용해야 합니다.\n\n제재: 남용 시 제공자는 접근을 차단하고 계정을 종료할 권리를 보유합니다.' },
    { title: '3. 사이트 설명', content: '사이트는 정보, 통계, 점수, 베팅 팁 및 분석적 통찰을 포함한 공개적으로 이용 가능한 스포츠 관련 콘텐츠를 제공합니다. 이 콘텐츠는 독립적인 제3자 출처와 내부 조사 및 분석을 통해 수집됩니다.\n\n제공자는 제시된 정보의 정확성과 적시성을 보장하기 위해 합리적인 노력을 기울이지만, 경기 결과, 통계 또는 베팅 관련 정보를 포함한 어떠한 데이터의 완전성, 정확성 또는 신뢰성에 대해서도 보증하지 않습니다.\n\n모든 콘텐츠는 정보 제공 목적으로만 제공됩니다. 제공자는 사이트에 게시된 정보를 근거로 사용자가 내린 결정, 행동 또는 입은 손실에 대해 어떠한 책임도 지지 않습니다.' },
    { title: '4. 기부 및 은행 송금', content: '자발적 기부: 사이트는 어떠한 제품이나 서비스도 판매하지 않으며 프리미엄 또는 유료 콘텐츠를 제공하지 않습니다. 사용자가 하는 모든 결제는 오직 사이트의 지속적인 유지 관리 및 개발을 지원하기 위한 자발적 기부입니다.\n\n결제 방법: 기부는 안전한 온라인 결제 게이트웨이를 통하거나 가능한 경우 은행 송금으로 할 수 있습니다.\n\n은행 송금 안내: 은행 송금을 이용하는 경우 사용자는 기부 시 제공된 결제 안내를 따라야 합니다. 기부는 전액이 제공자의 계좌에 성공적으로 입금된 후에야 수령된 것으로 간주됩니다.\n\n정보의 정확성: 사용자는 은행 정보를 포함한 모든 결제 정보가 정확하게 입력되었는지 확인할 책임이 있습니다. 제공자는 사용자가 제공한 부정확하거나 불완전한 결제 정보로 인한 자금 손실에 대해 책임을 지지 않습니다.\n\n환불 불가 기부: 기부는 일반적으로 환불되지 않습니다. 다만, 관련 법률에서 요구하는 경우 법정 환불 권리는 영향을 받지 않습니다.' },
    { title: '5. 독점 콘텐츠', content: '독점 소유권: 모든 콘텐츠는 제공자에 의해서만 제공됩니다.\n\n사용자 제출 없음: 사이트는 사용자 생성 콘텐츠를 허용하지 않습니다.' },
    { title: '6. 제3자 링크 및 광고', content: '사용자는 사이트에서 발견된 제3자 웹사이트나 광고와의 모든 상호작용이 전적으로 자신의 책임임을 인정합니다.' },
    { title: '7. 계정 비활성', content: '제공자는 180일 연속 접속하지 않은 사용자 계정을 종료할 권리를 보유합니다.' },
    { title: '8. 지적 재산권 및 저작권', content: '소유권: 사이트의 모든 콘텐츠와 소프트웨어는 제공자의 소유입니다. 사용자는 사이트의 어떤 부분도 복사하거나 복제하는 것이 엄격히 금지됩니다.' },
    { title: '9. 법적 준수 및 관할권', content: '준거법: 본 약관은 영국 법률에 의해 규율됩니다. 모든 당사자는 영국 법원의 전속 관할권에 따릅니다.' },
    { title: '10. 면책 조항 및 책임 제한', content: '보증 없음: 사이트는 "있는 그대로" 제공됩니다.\n\n도박 서비스가 아님: 사이트는 정보 도구입니다.\n\n손실 제한: 제공자는 직접 또는 간접 손실에 대해 책임지지 않습니다.' },
    { title: '개인정보 보호정책', content: '' },
    { title: '11. 데이터 보호 및 GDPR', content: '사이트는 GDPR에 따라 사용자의 개인정보를 보호하기 위해 노력합니다. 데이터 관리자는 risknil.com입니다.' },
    { title: '12. 개인 데이터 수집', content: '등록: 개인 데이터는 등록 시에만 수집됩니다.\n\n동의: 서비스를 사용함으로써 사용자는 데이터 수집에 동의합니다.' },
    { title: '13. 데이터 주체로서의 귀하의 권리', content: '사용자는 다음 권리를 가집니다: 접근 및 정정, 삭제, 제한 및 이의 제기, 이동성.' },
    { title: '14. 데이터 사용 및 마케팅', content: '개인 데이터는 통신 및 결제 처리에 사용됩니다. 제3자에게 데이터를 판매하지 않습니다.' },
    { title: '15. 데이터 공개', content: '데이터는 결제 처리 또는 법적 의무 이행을 위해서만 제3자에게 공개될 수 있습니다.' },
    { title: '16. 보안 및 보존', content: '보안 조치: SSL 및 해싱 알고리즘을 사용합니다.\n\n보존: 데이터는 필요한 기간 동안만 보존됩니다.' },
    { title: '17. 쿠키 정책', content: '사이트는 콘텐츠 개인화 및 트래픽 분석을 위해 쿠키를 사용합니다. 사용자는 쿠키를 비활성화할 수 있습니다.' },
    { title: '18. 버전 및 연락처', content: '제공자: Risknil.com.\n\n이메일: info@risknil.com.\n\n최종 업데이트: 2026년 5월 14일.' }
  ]
}

const hiTerms: TermsContent = {
  title: 'Risknil.com के लिए सामान्य उपयोग की शर्तें',
  lastUpdated: 'अंतिम अपडेट: 14 मई 2026',
  backButton: 'RiskNil पर वापस जाएं',
  legalNote: 'भाषा संस्करणों के बीच किसी भी विसंगति की स्थ��ति में, अंग्रेजी संस्करण मान्य होगा।',
  sections: [
    { title: '1. उपयोग की शर्तें', content: 'ये उपयोग की शर्तें ("शर्तें") "प्रदाता" और किसी भी व्यक्ति या संस्था ("उपयोगकर्ता") के बीच एक कानूनी रूप से बाध्यकारी समझौता है जो risknil.com वेबसाइट, इसके मोबाइल एप्लिकेशन, या किसी भी संबंधित सुविधाओं, सामग्री या सेवाओं (सामूहिक रूप से, "साइट") तक पहुंचता है।' },
    { title: '2. सामान्य प्रावधान और वैश्विक दायरा', content: 'लागूता: ये शर्तें प्रदाता और उपयोगकर्ता के बीच संपूर्ण संबंध को नियंत्रित करती हैं।\n\nसंशोधन: प्रदाता किसी भी समय इन शर्तों को संशोधित करने ���ा अधिकार ��ुरक्षित रखता है।\n\nवैध उपयोग: साइट का उपयोग केवल वैध ��द्देश्यों के लिए किया जाना चाहिए।\n\nप्रतिबंध: दुरुपयोग के मामले में, प्रदाता पहुंच को अवरुद्ध करने और खाते बंद करने का अधिकार रखता है।' },
    { title: '3. साइट का विवरण', content: 'साइट सार्वजनिक रूप से उपलब्ध खेल-संबंधी सामग्री प्रदान करती है, जिसमें जानकारी, आंकड़े, स्कोर, सट्टेबाजी टिप्स और विश्लेषणात्मक अंतर्दृष्टि शामिल हैं। यह सामग्री स्वतंत्र तृतीय-पक्ष स्रोतों के साथ-साथ आंतरिक शोध और विश्लेषण से संकलित की जाती है।\n\nप्रदाता प्रस्तुत जानकारी की सटीकता और समयबद्धता सुनिश्चित करने के लिए उचित प्रयास करता है; हालांकि, मैच परिणामों, आंकड़ों या सट्टेबाजी से संबंधित जानकारी सहित किसी भी डेटा की पूर्णता, सटीकता या विश्वसनीयता के संबंध में कोई गारंटी नहीं दी जाती है।\n\nसभी सामग्री केवल सूचना के उद्देश्यों के लिए प्रदान की जाती है। प्रदाता साइट पर प्रकाशित जानकारी के आधार पर उपयोगकर्ताओं द्वारा लिए गए किसी भी निर्णय, कार्रवाई या हुई हानि के लिए कोई जिम्मेदारी स्वीकार नहीं करता है।' },
    { title: '4. दान और बैंक हस्तांतरण', content: 'स्वैच्छिक दान: साइट कोई उत्पाद या सेवा नहीं बेचती है और कोई प्रीमियम या सशुल्क सामग्री प्रदान नहीं करती है। उपयोगकर्ताओं द्वारा किए गए सभी भुगतान स्वैच्छिक दान हैं जो केवल साइट के निरंतर रखरखाव और विकास का समर्थन करने के लिए हैं।\n\nभुगतान के तरीके: दान सुरक्षित ऑनलाइन भुगतान गेटवे के माध्यम से या जहां उपलब्ध हो, बैंक हस्तांतरण द्वारा किया जा सकता है।\n\nबैंक हस्तांतरण निर्देश: जहां बैंक हस्तांतरण का उपयोग किया जाता है, उपयोगकर्ताओं को दान के समय प्रदान किए गए भुगतान निर्देशों का पालन करना होगा। दान तभी प्राप्त माना जाता है जब पूरी राशि प्रदाता के खाते में सफलतापूर्वक जमा हो जाती है।\n\nजानकारी की सटीकता: उपयोगकर्ता यह सुनिश्चित करने के लिए जिम्मेदार हैं कि बैंक जानकारी सहित सभी भुगतान विवरण सही ढंग से दर्ज किए गए हैं। प्रदाता उपयोगकर्ता द्वारा प्रदान की गई गलत या अधूरी भुगतान जानकारी के कारण धन की किसी भी हानि के लिए उत्तरदायी नहीं है।\n\nगैर-वापसी योग्य दान: दान आम तौर पर वापसी योग्य नहीं होते हैं। हालांकि, जहां लागू कानून द्वारा आवश्यक हो, वैधानिक वापसी अधिकार अप्रभावित रहते हैं।' },
    { title: '5. स्वामित्व सामग्री', content: 'विशेष स्वामित्व: सभी सामग्री विशेष रूप से प्रदाता द्वारा प्रदान की जाती है।\n\nकोई उपयोगकर्ता सबमिशन नहीं: साइट उपयोगकर्ता-जनित सामग्री की अनुमति नहीं देती है।' },
    { title: '6. तृतीय-पक्ष लिंक और विज्ञापन', content: 'उपयोगकर्ता स्वीकार करता है कि साइट पर पाई गई तृतीय-पक्ष वेबसाइटों या विज्ञापनों के साथ कोई भी बातचीत पूरी तरह से उनके अपने जोखिम पर है।' },
    { title: '7. खाता निष्क��रियता', content: 'प्रदाता किसी भी उपयोगकर्ता खाते को समाप्त करने का अधिकार सुरक्षित रखता है जो 180 लगातार दिनों तक एक्सेस नहीं किया गया है।' },
    { title: '8. बौद्धिक संपदा और कॉपीराइट', content: 'स्वामित्व: साइट पर सभी सामग्री और सॉफ्टवेयर प्रदाता की संपत्ति है। उपयोगकर्ताओं को साइट के किसी भी हिस्से को कॉपी या पुन: पेश करने से सख्ती से प्रतिबंधित किया गया है।' },
    { title: '9. कानूनी अनुपालन और क्षेत्राधिकार', content: 'लागू कानून: ये शर्तें यूनाइटेड किंगडम के कानूनों द्वारा शासित होती हैं। सभी पक्ष यूनाइटेड किंगडम की अदालतों के विशेष क्षेत्राधिकार के अधीन हैं।' },
    { title: '10. अस्वीकरण और दायित्व सीमा', content: 'कोई वारंटी नहीं: साइट "जैसी है" प्रदान की जाती है।\n\nजुआ सेवा नहीं: साइट एक सूचना उपकरण है।\n\nहानि की सीमा: प्रदाता प्रत्यक्ष या अप्रत्यक्ष हानियों के लिए जिम्मेदार नहीं है।' },
    { title: 'गोपनीयता नीति', content: '' },
    { title: '11. डेटा सुरक्षा और GDPR', content: 'साइट GDPR के अनुसार उपयोगकर्ता की गोपनीयता की रक्षा करने के लिए प्रतिबद्ध है। डेटा नियंत्रक risknil.com है।' },
    { title: '12. व्यक्तिगत डेटा संग्रह', content: 'पंजीकरण: व्यक्तिगत डेटा केवल पंजीकरण के समय एकत्र किया जाता है।\n\nसहमति: सेवाओं का उपयोग करके, उपयोगकर्ता अपने डेटा के संग्रह के लिए सहमति देता है।' },
    { title: '13. डेटा विषय के रूप में आपके अधिकार', content: 'उपयोगकर्ताओं के निम्नलिखित अधिकार हैं: प���ुंच और सुधार, विलोपन, प्रतिबंध और आपत्ति, पोर्टेबिलिटी।' },
    { title: '14. डेटा उपयोग और विपणन', content: 'व्यक्तिगत डेटा का उपयोग संचार और भुगतान प्रसंस्करण के लिए किया जाता है। हम तीसरे पक्षों को डेटा नहीं बेचते हैं।' },
    { title: '15. डेटा प्रकटीकरण', content: 'डेटा केवल भुगतान प्रसंस्करण या कानूनी दायित्वों को पूरा करने के लिए तीसरे पक्षों को प्रकट किया जा सकता है।' },
    { title: '16. सुरक्षा और प्रतिधारण', content: 'सुरक्षा उपाय: हम SSL और हैशिंग एल्गोरिदम का उपयोग करते हैं।\n\nप्रतिधारण: डेटा केवल आवश्यक अवधि के लिए रखा जाता है।' },
    { title: '17. कुकी नीति', content: 'साइट सामग्री को वैयक्तिकृत करने और ट्रैफ़िक का विश्लेषण करने के लिए कुकीज़ का उपयो�� करती है। उपयोगकर्ता कुकीज़ को अक्षम कर सकते हैं।' },
    { title: '18. संस्करण और संपर्क', content: 'प्रदाता: Risknil.com।\n\nईमेल: info@risknil.com।\n\nअंतिम अपडेट: 14 मई 2026।' }
  ]
}

const arTerms: TermsContent = {
  title: 'الشروط العامة للاستخدام لموقع Risknil.com',
  lastUpdated: 'آخر تحديث: 14 مايو 2026',
  backButton: 'العودة إلى RiskNil',
  legalNote: 'في حالة وجود أي تعا��ض بين الإصدارات اللغوية، تسود النسخة الإنجليزية.',
  sections: [
    { title: '1. شروط الاستخدام', content: 'تشكل شروط الاستخدام هذه ("الشروط") اتفاقية ملزمة قانونيًا بين "المزود" وأي فرد أو كيان ("المستخدم") يصل إلى موقع risknil.com أو تطبيقاته المحمولة أو أي ميزات أو محتوى أو خدمات مرتبطة (يُشار إليها مجتمعة بـ "الموقع").' },
    { title: '2. الأحكام العامة والنطاق العالمي', content: 'التطبيق: تحكم هذه الشروط العلاقة الكاملة بين المزود والمستخدم.\n\nالتعديلات: يحتفظ المزود بالحق في تعديل هذه الشروط في أي وقت.\n\nالاستخدام القانوني: يجب استخدام الموقع فقط لأغراض قانونية.\n\nالعقوبات: في حالة سوء الاستخدام، يحتفظ المزود بالحق في حظر الوصول وإنهاء الحسابات.' },
    { title: '3. وصف الموقع', content: 'يوفر الموقع محتوى رياضيًا متاحًا للعموم، بما في ذلك المعلومات والإحصاءات والنتائج ونصائح المراهنات والتحليلات. يتم تجميع هذا المحتوى من مصادر مستقلة تابعة لأطراف ثالثة بالإضافة إلى الأبحاث والتحليلات الداخلية.\n\nيبذل المزود جهودًا معقولة لضمان دقة المعلومات المقدمة وحداثتها؛ ومع ذلك، لا يُقدَّم أي ضمان فيما يتعلق باكتمال أو دقة أو موثوقية أي بيانات، بما في ذلك نتائج المباريات أو الإحصاءات أو المعلومات المتعلقة بالمراهنات.\n\nيُقدَّم كل المحتوى لأغراض إعلامية فقط. لا يتحمل المزود أي مسؤولية عن أي قرارات أو إجراءات أو خسائر يتكبدها المستخدمون بناءً على المعلومات المنشورة على الموقع.' },
    { title: '4. التبرعات والتحويلات البنكية', content: 'التبرعات الطوعية: لا يبيع الموقع أي منتجات أو خدمات ولا يقدم أي محتوى مميز أو مدفوع. جميع المدفوعات التي يقوم بها المستخدمون هي تبرعات طوعية مخصصة فقط لدعم الصيانة والتطوير المستمرين للموقع.\n\nطرق الدفع: يمكن تقديم التبرعات عبر بوابات الدفع الآمنة عبر الإنترنت أو عن طريق التحويل البنكي، حيثما كان ذلك متاحًا.\n\nتعليمات التحويل البنكي: عند استخدام التحويل البنكي، يجب على المستخدمين اتباع تعليمات الدفع المقدمة وقت التبرع. لا تُعتبر التبرعات مستلمة إلا بعد إيداع المبلغ الكامل بنجاح في حساب المزود.\n\nدقة المعلومات: يتحمل المستخدمون مسؤولية التأكد من إدخال جميع تفاصيل الدفع بشكل صحيح، بما في ذلك المعلومات البنكية. لا يتحمل المزود المسؤولية عن أي خسارة في الأموال ناتجة عن معلومات دفع غير صحيحة أو غير مكتملة مقدمة من المستخدم.\n\nالتبرعات غير القابلة للاسترداد: التبرعات بشكل عام غير قابلة للاسترداد. ومع ذلك، حيثما يقتضي القانون المعمول به ذلك، تظل حقوق الاسترداد القانونية غير متأثرة.' },
    { title: '5. المحتوى الملكي', content: 'الملكية الحصرية: يتم توفير جميع المحتوى حصريًا من قبل المزود.\n\nلا توجد مساهمات من المستخدمين: لا يسمح الموقع بالمحتوى الذي ينشئه المستخدم.' },
    { title: '6. روابط الطرف الثالث والإعلانات', content: 'يقر المستخدم بأن أي تفاعل مع مواقع الطرف الثالث أو الإعلانات الموجودة على الموقع يكون على مسؤوليته الخاصة بالكامل.' },
    { title: '7. عدم نشاط الحساب', content: 'يحتفظ المزود بالحق في إنهاء أي حساب مستخدم لم يتم الوصول إليه لمدة 180 يومًا متتاليًا.' },
    { title: '8. الملكية الفكرية وحقوق النشر', content: 'الملكية: جميع المحتوى والبرامج على الموقع مملوكة للمزود. يُحظر على المستخدمين بشدة نسخ أو إعادة إنتاج أي جزء من الموقع.' },
    { title: '9. الامتثال القانوني والولاية القضائية', content: 'القانون الحاكم: تخضع هذه الشروط لقوانين المملكة المتحدة. تخضع جميع الأطراف للاختصاص القضائي الحصري لمحاكم المملكة المتحدة.' },
    { title: '10. إخلاء المسؤولية وتحديد المسؤولية', content: 'لا ضمان: يتم توفير الموقع "كما هو".\n\nليست خدمة مقامرة: الموقع أداة معلوماتية.\n\nتحديد الخسائر: المزود غير مسؤول عن الخسائر المباشرة أو غير المباشرة.' },
    { title: 'سياسة الخصوصية', content: '' },
    { title: '11. حماية البيانات واللائحة العامة لحماية البيانات', content: 'يلتزم الموقع بحماية خصوصية المستخدم وفقًا للائحة العامة لحماية البيانات. مراقب البيانات هو risknil.com.' },
    { title: '12. جمع البيانات الشخصية', content: 'التسجيل: يتم جمع البيانات الشخصية فقط عند التسجيل.\n\nالموافقة: باستخدام الخدمات، يوافق المستخدم على جمع بياناته.' },
    { title: '13. حقوقك كصاحب بيانات', content: 'للمستخدمين الحقوق التالية: الوصول والتصحيح، الحذف، التقييد والاعتراض، قابلية النقل.' },
    { title: '14. استخدام البيانات والتسويق', content: 'تُستخدم البيانات الشخصية للتواصل ومعالجة المدفوعات. لا نبيع البيانات لأطراف ثالثة.' },
    { title: '15. الإفصاح عن البيانات', content: 'يمكن الإفصاح عن البيانات لأطراف ثالثة فقط لمعالجة المدفوعات أو الوفاء بالالتزامات القانونية.' },
    { title: '16. الأمان والاحتفاظ', content: 'تدابير الأمان: نستخدم SSL وخوارزميات التجزئة.\n\nالاحتفاظ: يتم الاحتفاظ بالبيانات فقط للمدة اللازمة.' },
    { title: '17. سياسة ملفات تعريف الارتباط', content: 'يستخدم الموقع ملفات تعريف الارتباط لتخصيص المحتوى وتحليل حركة المرور. يمكن للمستخدمين تعطيل ملفات تعريف الارتباط.' },
    { title: '18. الإصدار والاتصال', content: 'المزود: Risknil.com.\n\nالبريد الإلكتروني: info@risknil.com.\n\nآخر تحديث: 14 مايو 2026.' }
  ]
}

const tlTerms: TermsContent = {
  title: 'Pangkalahatang Mga Tuntunin ng Paggamit para sa Risknil.com',
  lastUpdated: 'Huling Na-update: Mayo 14, 2026',
  backButton: 'Bumalik sa RiskNil',
  legalNote: 'Sa kaganapan ng anumang pagkakaiba sa pagitan ng mga bersyon ng wika, ang bersyon sa Ingles ang mangingibabaw.',
  sections: [
    { title: '1. Mga Tuntunin ng Paggamit', content: 'Ang mga Tuntunin ng Paggamit na ito ("Mga Tuntunin") ay bumubuo ng isang legal na nagbubuklod na kasunduan sa pagitan ng "Tagapagbigay" at sinumang indibidwal o entidad ("User") na nag-a-access sa website na risknil.com, mga mobile application nito, o anumang kaugnay na mga feature, nilalaman, o serbisyo (sama-sama, ang "Site").' },
    { title: '2. Pangkalahatang Probisyon', content: 'Aplikabilidad: Ang mga Tuntuning ito ang namamahala sa buong relasyon sa pagitan ng Tagapagbigay at User.\n\nMga Pagbabago: Inilalaan ng Tagapagbigay ang karapatang baguhin ang mga Tuntuning ito anumang oras.\n\nLegal na Paggamit: Ang Site ay dapat gamitin lamang para sa mga legal na layunin.\n\nMga Parusa: Sa kaso ng maling paggamit, inilalaan ng Tagapagbigay ang karapatang i-block ang access at tapusin ang mga account.' },
    { title: '3. Paglalarawan ng Site', content: 'Ang Site ay nagbibigay ng pampublikong magagamit na nilalamang may kaugnayan sa sports, kabilang ang impormasyon, estadistika, mga score, mga tip sa pagtaya, at analytical na pananaw. Ang nilalamang ito ay tinipon mula sa mga independyenteng pinagkukunan ng third-party gayundin sa panloob na pananaliksik at pagsusuri.\n\nGumagawa ang Tagapagbigay ng makatwirang pagsisikap upang matiyak ang katumpakan at pagiging napapanahon ng impormasyong ipinakita; gayunpaman, walang garantiyang ibinibigay tungkol sa pagkakumpleto, katumpakan, o pagiging maaasahan ng anumang data, kabilang ang mga resulta ng laro, estadistika, o impormasyong may kaugnayan sa pagtaya.\n\nLahat ng nilalaman ay ibinibigay para sa layuning pang-impormasyon lamang. Walang tinatanggap na pananagutan ang Tagapagbigay para sa anumang mga desisyon, aksyon, o pagkalugi na natamo ng mga User batay sa impormasyong nai-publish sa Site.' },
    { title: '4. Mga Donasyon at Bank Transfer', content: 'Mga Boluntaryong Donasyon: Ang Site ay hindi nagbebenta ng anumang produkto o serbisyo at hindi nag-aalok ng premium o bayad na nilalaman. Lahat ng mga pagbabayad na ginawa ng mga User ay boluntaryong mga donasyon na nakalaan lamang upang suportahan ang patuloy na pagpapanatili at pagpapaunlad ng Site.\n\nMga Paraan ng Pagbabayad: Ang mga donasyon ay maaaring gawin sa pamamagitan ng mga secure na online payment gateway o sa pamamagitan ng bank transfer, kung saan available.\n\nMga Tagubilin sa Bank Transfer: Kung saan ginagamit ang bank transfer, dapat sundin ng mga User ang mga tagubilin sa pagbabayad na ibinigay sa oras ng donasyon. Ang mga donasyon ay itinuturing na natanggap lamang kapag ang buong halaga ay matagumpay na na-kredito sa account ng Tagapagbigay.\n\nKatumpakan ng Impormasyon: Ang mga User ay may pananagutan na tiyaking ang lahat ng mga detalye ng pagbabayad, kabilang ang impormasyon sa bangko, ay tama ang pagkaka-input. Ang Tagapagbigay ay hindi mananagot para sa anumang pagkawala ng pondo na dulot ng mali o hindi kumpletong impormasyon sa pagbabayad na ibinigay ng User.\n\nMga Donasyong Hindi Maibabalik: Ang mga donasyon ay karaniwang hindi maibabalik. Gayunpaman, kung saan kinakailangan ng naaangkop na batas, ang mga legal na karapatan sa refund ay mananatiling hindi apektado.' },
    { title: '5. Pagmamay-ari na Nilalaman', content: 'Eksklusibong Pagmamay-ari: Lahat ng nilalaman ay ibinibigay lamang ng Tagapagbigay.\n\nWalang User Submissions: Hindi pinapayagan ng Site ang user-generated content.' },
    { title: '6. Mga Link ng Third-Party', content: 'Kinikilala ng User na anumang pakikipag-ugnayan sa mga third-party na website o advertisement na matatagpuan sa Site ay ganap na nasa kanilang sariling panganib.' },
    { title: '7. Hindi Aktibong Account', content: 'Inilalaan ng Tagapagbigay ang karapatang tapusin ang anumang User account na hindi na-access sa loob ng 180 magkakasunod na araw.' },
    { title: '8. Intellectual Property', content: 'Pagmamay-ari: Lahat ng nilalaman at software sa Site ay pagmamay-ari ng Tagapagbigay. Mahigpit na ipinagbabawal sa mga User na kopyahin o i-reproduce ang anumang bahagi ng Site.' },
    { title: '9. Legal na Pagsunod', content: 'Naaangkop na Batas: Ang mga Tuntuning ito ay pinamamahalaan ng mga batas ng United Kingdom. Lahat ng Partido ay sumasailalim sa eksklusibong hurisdiksyon ng mga korte ng United Kingdom.' },
    { title: '10. Disclaimer', content: 'Walang Warranty: Ang Site ay ibinibigay "as is".\n\nHindi Gambling Service: Ang Site ay isang tool ng impormasyon.\n\nLimitasyon ng Pagkalugi: Ang Tagapagbigay ay hindi mananagot para sa direkta o hindi direktang pagkalugi.' },
    { title: 'Patakaran sa Privacy', content: '' },
    { title: '11. Proteksyon ng Data', content: 'Ang Site ay nakatuon sa pagprotekta ng privacy ng User alinsunod sa GDPR. Ang Data Controller ay risknil.com.' },
    { title: '12. Pangongolekta ng Data', content: 'Pagpaparehistro: Ang personal na data ay kinokolekta lamang sa pagpaparehistro.\n\nPahintulot: Sa paggamit ng mga serbisyo, sumasang-ayon ang User sa pagkolekta ng kanilang data.' },
    { title: '13. Ang Iyong mga Karapatan', content: 'Ang mga User ay may mga sumusunod na karapatan: Access at Pagwawasto, Pagtanggal, Paghihigpit at Pagtutol, Portability.' },
    { title: '14. Paggamit ng Data', content: 'Ang personal na data ay ginagamit para sa komunikasyon at pagproseso ng pagbabayad. Hindi namin ibinebenta ang data sa mga third party.' },
    { title: '15. Pagsisiwalat ng Data', content: 'Ang data ay maaaring isiwalat sa mga third party lamang para sa pagproseso ng pagbabayad o upang tuparin ang mga legal na obligasyon.' },
    { title: '16. Seguridad at Pagpapanatili', content: 'Mga Hakbang sa Seguridad: Gumagamit kami ng SSL at hashing algorithm.\n\nPagpapanatili: Ang data ay pinapanatili lamang hangga\'t kinakailangan.' },
    { title: '17. Patakaran sa Cookie', content: 'Ang Site ay gumagamit ng cookies upang i-personalize ang nilalaman at suriin ang trapiko. Maaaring i-disable ng mga User ang cookies.' },
    { title: '18. Bersyon at Makipag-ugnayan', content: 'Tagapagbigay: Risknil.com.\n\nEmail: info@risknil.com.\n\nHuling Na-update: Mayo 14, 2026.' }
  ]
}

const swTerms: TermsContent = {
  title: 'Masharti ya Jumla ya Matumizi kwa Risknil.com',
  lastUpdated: 'Imesasishwa Mwisho: Mei 14, 2026',
  backButton: 'Rudi kwa RiskNil',
  legalNote: 'Ikiwa kuna tofauti yoyote kati ya matoleo ya lugha, toleo la Kiingereza litakuwa na nguvu.',
  sections: [
    { title: '1. Masharti ya Matumizi', content: 'Masharti haya ya Matumizi ("Masharti") yanaunda makubaliano ya kisheria yanayofunga kati ya "Mtoa Huduma" na mtu yeyote au taasisi ("Mtumiaji") anayefikia tovuti ya risknil.com, programu zake za simu, au vipengele vyovyote vinavyohusiana, maudhui, au huduma (kwa pamoja, "Tovuti").' },
    { title: '2. Masharti ya Jumla', content: 'Utumiaji: Masharti haya yanaongoza uhusiano wote kati ya Mtoa Huduma na Mtumiaji.\n\nMarekebisho: Mtoa Huduma ana haki ya kurekebisha Masharti haya wakati wowote.\n\nMatumizi Halali: Tovuti inapaswa kutumika tu kwa madhumuni halali.\n\nAdhabu: Katika kesi ya matumizi mabaya, Mtoa Huduma ana haki ya kuzuia ufikiaji na kusitisha akaunti.' },
    { title: '3. Maelezo ya Tovuti', content: 'Tovuti inatoa maudhui yanayohusiana na michezo yanayopatikana kwa umma, ikiwa ni pamoja na habari, takwimu, alama, vidokezo vya kubeti, na uchambuzi. Maudhui haya yanakusanywa kutoka vyanzo huru vya wahusika wa tatu pamoja na utafiti na uchambuzi wa ndani.\n\nMtoa Huduma anafanya jitihada za kuridhisha kuhakikisha usahihi na uwakati wa habari iliyotolewa; hata hivyo, hakuna dhamana inayotolewa kuhusu ukamilifu, usahihi, au kuaminika kwa data yoyote, ikiwa ni pamoja na matokeo ya mechi, takwimu, au habari zinazohusiana na kubeti.\n\nMaudhui yote yanatolewa kwa madhumuni ya habari pekee. Mtoa Huduma hakubali jukumu lolote kwa maamuzi, vitendo, au hasara zinazowapata Watumiaji kwa kuzingatia habari iliyochapishwa kwenye Tovuti.' },
    { title: '4. Michango na Uhamisho wa Benki', content: 'Michango ya Hiari: Tovuti haiuzi bidhaa au huduma yoyote na haitoi maudhui ya premium au ya kulipia. Malipo yote yanayofanywa na Watumiaji ni michango ya hiari inayolenga tu kusaidia matengenezo na maendeleo endelevu ya Tovuti.\n\nNjia za Malipo: Michango inaweza kufanywa kupitia njia salama za malipo mtandaoni au kwa uhamisho wa benki, pale inapopatikana.\n\nMaelekezo ya Uhamisho wa Benki: Pale uhamisho wa benki unapotumiwa, Watumiaji lazima wafuate maelekezo ya malipo yaliyotolewa wakati wa mchango. Michango inachukuliwa kuwa imepokelewa tu pale kiasi kamili kilipoingia kwa mafanikio kwenye akaunti ya Mtoa Huduma.\n\nUsahihi wa Habari: Watumiaji wana jukumu la kuhakikisha kuwa maelezo yote ya malipo, ikiwa ni pamoja na habari za benki, yameingizwa kwa usahihi. Mtoa Huduma hawajibiki kwa upotevu wowote wa fedha unaotokana na habari za malipo zisizo sahihi au zisizokamilika zilizotolewa na Mtumiaji.\n\nMichango Isiyorudishwa: Michango kwa ujumla hairudishwi. Hata hivyo, pale sheria inayotumika inapohitaji, haki za kisheria za kurudisha fedha zinabaki bila kuathiriwa.' },
    { title: '5. Maudhui ya Umiliki', content: 'Umiliki wa Kipekee: Maudhui yote yanatolewa na Mtoa Huduma peke yake.\n\nHakuna Mawasilisho ya Watumiaji: Tovuti hairuhusu maudhui yanayotengenezwa na watumiaji.' },
    { title: '6. Viungo vya Wahusika wa Tatu', content: 'Mtumiaji anakubali kwamba mwingiliano wowote na tovuti za wahusika wa tatu au matangazo yanayopatikana kwenye Tovuti ni hatari yake mwenyewe.' },
    { title: '7. Kutofanya Kazi kwa Akaunti', content: 'Mtoa Huduma ana haki ya kusitisha akaunti yoyote ya Mtumiaji ambayo haijafikiwa kwa siku 180 mfululizo.' },
    { title: '8. Mali ya Kiakili', content: 'Umiliki: Maudhui yote na programu kwenye Tovuti ni mali ya Mtoa Huduma. Watumiaji wamekatazwa kabisa kunakili au kuzalisha sehemu yoyote ya Tovuti.' },
    { title: '9. Kufuata Sheria', content: 'Sheria Inayotumika: Masharti haya yanasimamiwa na sheria za Uingereza. Wahusika wote wanakubaliana na mamlaka ya kipekee ya mahakama za Uingereza.' },
    { title: '10. Kanusho', content: 'Hakuna Dhamana: Tovuti inatolewa "kama ilivyo".\n\nSi Huduma ya Kamari: Tovuti ni zana ya habari.\n\nUkomo wa Hasara: Mtoa Huduma hawajibiki kwa hasara za moja kwa moja au zisizo za moja kwa moja.' },
    { title: 'Sera ya Faragha', content: '' },
    { title: '11. Ulinzi wa Data', content: 'Tovuti imejitolea kulinda faragha ya Mtumiaji kulingana na GDPR. Mthibiti wa Data ni risknil.com.' },
    { title: '12. Ukusanyaji wa Data', content: 'Usajili: Data ya kibinafsi hukusanywa tu wakati wa usajili.\n\nIdhini: Kwa kutumia huduma, Mtumiaji anakubali ukusanyaji wa data yake.' },
    { title: '13. Haki Zako', content: 'Watumiaji wana haki zifuatazo: Ufikiaji na Marekebisho, Kufuta, Kizuizi na Upinzani, Uhamaji.' },
    { title: '14. Matumizi ya Data', content: 'Data ya kibinafsi hutumiwa kwa mawasiliano na usindikaji wa malipo. Hatuuzi data kwa wahusika wa tatu.' },
    { title: '15. Ufunuo wa Data', content: 'Data inaweza kufichuliwa kwa wahusika wa tatu tu kwa usindikaji wa malipo au kutimiza wajibu wa kisheria.' },
    { title: '16. Usalama na Uhifadhi', content: 'Hatua za Usalama: Tunatumia SSL na algorithms za hashing.\n\nUhifadhi: Data huhifadhiwa tu kwa muda unaohitajika.' },
    { title: '17. Sera ya Kuki', content: 'Tovuti inatumia kuki kubinafsisha maudhui na kuchambua trafiki. Watumiaji wanaweza kuzima kuki.' },
    { title: '18. Toleo na Mawasiliano', content: 'Mtoa Huduma: Risknil.com.\n\nBarua pepe: info@risknil.com.\n\nImesasishwa Mwisho: Mei 14, 2026.' }
  ]
}

const afTerms: TermsContent = {
  title: 'Algemene Gebruiksvoorwaardes vir Risknil.com',
  lastUpdated: 'Laas opgedateer: 14 Mei 2026',
  backButton: 'Terug na RiskNil',
  legalNote: 'In die geval van enige teenstrydighede tussen taalweergawes, sal die Engelse weergawe geld.',
  sections: [
    { title: '1. Gebruiksvoorwaardes', content: 'Hierdie Gebruiksvoorwaardes ("Voorwaardes") vorm \'n wettig bindende ooreenkoms tussen die "Verskaffer" en enige individu of entiteit ("Gebruiker") wat toegang tot die webwerf risknil.com, sy mobiele toepassings, of enige verwante kenmerke, inhoud, of dienste (gesamentlik, die "Webwerf") verkry.' },
    { title: '2. Algemene Bepalings', content: 'Toepaslikheid: Hierdie Voorwaardes beheer die hele verhouding tussen die Verskaffer en Gebruiker.\n\nWysigings: Die Verskaffer behou die reg voor om hierdie Voorwaardes te eniger tyd te wysig.\n\nWettige Gebruik: Die Webwerf moet slegs vir wettige doeleindes gebruik word.\n\nSanksies: In geval van misbruik, behou die Verskaffer die reg voor om toegang te blokkeer en rekeninge te beëindig.' },
    { title: '3. Beskrywing van die Webwerf', content: 'Die Webwerf verskaf openbaar beskikbare sportverwante inhoud, insluitend inligting, statistieke, tellings, weddenskapwenke, en analitiese insigte. Hierdie inhoud word saamgestel uit onafhanklike derdeparty-bronne sowel as interne navorsing en analise.\n\nDie Verskaffer doen redelike pogings om die akkuraatheid en tydigheid van die aangebode inligting te verseker; geen waarborg word egter gegee rakende die volledigheid, akkuraatheid of betroubaarheid van enige data nie, insluitend wedstryduitslae, statistieke of weddenskapverwante inligting.\n\nAlle inhoud word slegs vir inligtingsdoeleindes verskaf. Die Verskaffer aanvaar geen verantwoordelikheid vir enige besluite, aksies of verliese wat Gebruikers ly op grond van die inligting wat op die Webwerf gepubliseer word nie.' },
    { title: '4. Skenkings en Bankoordragte', content: 'Vrywillige Skenkings: Die Webwerf verkoop geen produkte of dienste nie en bied geen premium- of betaalde inhoud aan nie. Alle betalings wat deur Gebruikers gemaak word, is vrywillige skenkings wat uitsluitlik bedoel is om die voortgesette instandhouding en ontwikkeling van die Webwerf te ondersteun.\n\nBetaalmetodes: Skenkings kan gemaak word deur veilige aanlyn betaalportale of deur bankoordrag, waar beskikbaar.\n\nBankoordrag-instruksies: Waar bankoordrag gebruik word, moet Gebruikers die betalingsinstruksies volg wat ten tyde van die skenking verskaf word. Skenkings word eers as ontvang beskou sodra die volle bedrag suksesvol in die Verskaffer se rekening gekrediteer is.\n\nAkkuraatheid van Inligting: Gebruikers is verantwoordelik daarvoor om te verseker dat alle betalingsbesonderhede, insluitend bankinligting, korrek ingevoer word. Die Verskaffer is nie aanspreeklik vir enige verlies van fondse as gevolg van verkeerde of onvolledige betalingsinligting wat deur die Gebruiker verskaf is nie.\n\nNie-terugbetaalbare Skenkings: Skenkings is oor die algemeen nie-terugbetaalbaar. Waar toepaslike wetgewing dit egter vereis, bly statutêre terugbetalingsregte onaangeraak.' },
    { title: '5. Eie Inhoud', content: 'Eksklusiewe Eienaarskap: Alle inhoud word uitsluitlik deur die Verskaffer verskaf.\n\nGeen Gebruikersindiening: Die Webwerf laat nie gebruiker-gegenereerde inhoud toe nie.' },
    { title: '6. Derdeparty Skakels', content: 'Die Gebruiker erken dat enige interaksie met derdeparty-webwerwe of advertensies wat op die Webwerf gevind word, geheel en al op hul eie risiko is.' },
    { title: '7. Rekening Onaktiwiteit', content: 'Die Verskaffer behou die reg voor om enige Gebruikersrekening wat vir 180 opeenvolgende dae nie toegang verkry het nie, te beëindig.' },
    { title: '8. Intellektuele Eiendom', content: 'Eienaarskap: Alle inhoud en sagteware op die Webwerf is die eiendom van die Verskaffer. Gebruikers word streng verbied om enige deel van die Webwerf te kopieer of te reproduseer.' },
    { title: '9. Wetlike Nakoming', content: 'Toepaslike Reg: Hierdie Voorwaardes word beheer deur die wette van die Verenigde Koninkryk. Alle Partye onderwerp hulself aan die eksklusiewe jurisdiksie van die howe van die Verenigde Koninkryk.' },
    { title: '10. Vrywaring', content: 'Geen Waarborg: Die Webwerf word "soos dit is" verskaf.\n\nNie \'n Dobbelaarsdiens: Die Webwerf is \'n inligtingsinstrument.\n\nBeperking van Verlies: Die Verskaffer is nie aanspreeklik vir direkte of indirekte verliese nie.' },
    { title: 'Privaatheidsbeleid', content: '' },
    { title: '11. Databeskerming', content: 'Die Webwerf is verbind tot die beskerming van die Gebruiker se privaatheid in ooreenstemming met GDPR. Die Databeheerder is risknil.com.' },
    { title: '12. Insameling van Data', content: 'Registrasie: Persoonlike data word slegs tydens registrasie ingesamel.\n\nToestemming: Deur die dienste te gebruik, stem die Gebruiker in tot die insameling van hul data.' },
    { title: '13. Jou Regte', content: 'Gebruikers het die volgende regte: Toegang en Regstelling, Uitwissing, Beperking en Beswaar, Oordraagbaarheid.' },
    { title: '14. Gebruik van Data', content: 'Persoonlike data word gebruik vir kommunikasie en betalingsverwerking. Ons verkoop nie data aan derde partye nie.' },
    { title: '15. Openbaarmaking van Data', content: 'Data mag slegs aan derde partye bekend gemaak word vir betalingsverwerking of om wetlike verpligtinge na te kom.' },
    { title: '16. Sekuriteit en Bewaring', content: 'Sekuriteitsmaatreëls: Ons gebruik SSL en hashing-algoritmes.\n\nBewaring: Data word slegs so lank as nodig bewaar.' },
    { title: '17. Koekiebeleid', content: 'Die Webwerf gebruik koekies om inhoud te personaliseer en verkeer te analiseer. Gebruikers kan koekies deaktiveer.' },
    { title: '18. Weergawe en Kontak', content: 'Verskaffer: Risknil.com.\n\nE-pos: info@risknil.com.\n\nLaas opgedateer: 14 Mei 2026.' }
  ]
}

const zuTerms: TermsContent = {
  title: 'Imigomo Evamile Yokusebenzisa i-Risknil.com',
  lastUpdated: 'Igcine ukubuyekezwa: Meyi 14, 2026',
  backButton: 'Buyela ku-RiskNil',
  legalNote: 'Uma kukhona ukungqubuzana phakathi kwezinguqulo zezilimi, inguqulo yesiNgisi iyoba namandla.',
  sections: [
    { title: '1. Imigomo Yokusebenzisa', content: 'Le Migomo Yokusebenzisa ("Imigomo") yakha isivumelwano esibophayo ngokomthetho phakathi "koMhlinzeki" nanoma yimuphi umuntu noma inhlangano ("Umsebenzisi") efikelela kuwebhusayithi ye-risknil.com, izinhlelo zayo zeselula, noma noma yiziphi izici ezihlobene, okuqukethwe, noma amasevisi (ngokuhlanganyelwe, "Isayithi").' },
    { title: '2. Izimiso Ezijwayelekile', content: 'Ukusebenza: Le Migomo ilawula wonke ubudlelwano phakathi koMhlinzeki noMsebenzisi.\n\nIzinguquko: UMhlinzeki ugcina ilungelo lokuguqula le Migomo nganoma yisiphi isikhathi.\n\nUkusetshenziswa Okusemthethweni: Isayithi kumele isetshenziswe kuphela ngezinhloso ezisemthethweni.\n\nIzijeziso: Uma kwenzeka ukusetshenziswa kabi, uMhlinzeki ugcina ilungelo lokuvimba ukufinyelela nokuvala ama-akhawunti.' },
    { title: '3. Incazelo Yesayithi', content: 'Isayithi ihlinzeka ngokuqukethwe okuhlobene nezemidlalo okutholakala emphakathini, okuhlanganisa ulwazi, izibalo, amaphuzu, amathiphu okubheja, nemibono yokuhlaziya. Lokhu okuqukethwe kuqoqwa kusukela emithonjeni ezimele yabantu besithathu kanye nocwaningo lwangaphakathi nokuhlaziya.\n\nUMhlinzeki wenza imizamo enengqondo ukuqinisekisa ukunemba nokuba sesikhathini kolwazi olwethulwayo; nokho, ayikho isiqinisekiso esinikezwayo mayelana nokuphelela, ukunemba, noma ukwethembeka kwanoma yiluphi ulwazi, okuhlanganisa imiphumela yemidlalo, izibalo, noma ulwazi oluhlobene nokubheja.\n\nKonke okuqukethwe kuhlinzekwa ngezinhloso zolwazi kuphela. UMhlinzeki akamukeli mthwalo wemfanelo ngazo zonke izinqumo, izenzo, noma ukulahlekelwa okuvelele aBasebenzisi ngokususelwa olwazini olushicilelwe kuSayithi.' },
    { title: '4. Iminikelo Nokudluliswa Kwemali Ebhange', content: 'Iminikelo Yokuzithandela: Isayithi ayithengisi noma yimuphi umkhiqizo noma isevisi futhi ayinikezi okuqukethwe kwe-premium noma okukhokhelwayo. Zonke izinkokhelo ezenziwa aBasebenzisi ziminikelo yokuzithandela ehloselwe kuphela ukusekela ukugcinwa nokuthuthukiswa okuqhubekayo kweSayithi.\n\nIzindlela Zokukhokha: Iminikelo ingenziwa ngezindlela zokukhokha eziphephile ku-inthanethi noma ngokudluliswa kwemali ebhange, lapho kutholakala khona.\n\nImiyalo Yokudluliswa Kwemali Ebhange: Lapho kusetshenziswa ukudluliswa kwemali ebhange, aBasebenzisi kufanele balandele imiyalo yokukhokha enikezwe ngesikhathi somnikelo. Iminikelo ithathwa njengetholakele kuphela lapho inani eliphelele lifakwe ngempumelelo ku-akhawunti kaMhlinzeki.\n\nUkunemba Kolwazi: ABasebenzisi banomthwalo wemfanelo wokuqinisekisa ukuthi yonke imininingwane yokukhokha, okuhlanganisa ulwazi lwebhange, ifakwe ngendlela efanele. UMhlinzeki akabophezeleki nganoma yikuphi ukulahleka kwemali okubangelwa ulwazi lokukhokha olungalungile noma olungaphelele olunikezwe nguMsebenzisi.\n\nIminikelo Engabuyiseki: Iminikelo ngokuvamile ayibuyiseki. Nokho, lapho umthetho osebenzayo udinga khona, amalungelo asemthethweni okubuyiselwa imali ahlala engathintekile.' },
    { title: '5. Okuqukethwe Okungokwakho', content: 'Ubunikazi Obuphelele: Konke okuqukethwe kuhlinzekwa nguMhlinzeki kuphela.\n\nAkukho Ukuthumela Kwabasebenzisi: Isayithi ayivumeli okuqukethwe okwenziwe abasebenzisi.' },
    { title: '6. Izixhumanisi Zabantu Besithathu', content: 'Umsebenzisi uyavuma ukuthi noma yikuphi ukuxhumana namawebhusayithi abantu besithathu noma izikhangiso ezitholakala kuSayithi kungobungozi bakhe uqobo.' },
    { title: '7. Ukungasebenzi Kwe-akhawunti', content: 'UMhlinzeki ugcina ilungelo lokuvala noma iyiphi i-akhawunti yoMsebenzisi engafinyelelwanga izinsuku ezingu-180 ezilandelanayo.' },
    { title: '8. Impahla Yengqondo', content: 'Ubunikazi: Konke okuqukethwe nesofthiwe kuSayithi kungokukaMhlinzeki. Abasebenzisi bavinjelwe ngokuqinile ukuba bakopishe noma bakhiqize kabusha noma iyiphi ingxenye yeSayithi.' },
    { title: '9. Ukuthobela Umthetho', content: 'Umthetho Osebenzayo: Le Migomo ilawulwa yimithetho yase-United Kingdom. Zonke iZinhlangano zithobela amandla amakhosi ase-United Kingdom kuphela.' },
    { title: '10. Ukuphika', content: 'Akukho Isiqinisekiso: Isayithi ihlinzekwa "njengoba injalo".\n\nAkuyona Isevisi Yokugembula: Isayithi ithuluzi lolwazi.\n\nUkuvinjelwa Kokulahlekelwa: UMhlinzeki akajutshwa ngokulahleka okuqondile noma okungaqondile.' },
    { title: 'Inqubomgomo Yobumfihlo', content: '' },
    { title: '11. Ukuvikelwa Kwedatha', content: 'Isayithi izinikele ekuvikeleni ubumfihlo boMsebenzisi ngokuvumelana ne-GDPR. UMlawuli Wedatha ngu-risknil.com.' },
    { title: '12. Ukuqoqwa Kwedatha', content: 'Ukubhalisa: Idatha yomuntu siqu iqoqwa kuphela ngesikhathi sokubhalisa.\n\nImvume: Ngokusebenzisa amasevisi, uMsebenzisi uvuma ukuqoqwa kwedatha yakhe.' },
    { title: '13. Amalungelo Akho', content: 'Abasebenzisi banamalungelo alandelayo: Ukufinyelela Nokulungisa, Ukususa, Ukuvimbela Nokuphikisa, Ukudluliswa.' },
    { title: '14. Ukusetshenziswa Kwedatha', content: 'Idatha yomuntu siqu isetshenziselwa ukuxhumana nokuqhuba izinkokhelo. Asidayisi idatha kubantu besithathu.' },
    { title: '15. Ukudalulwa Kwedatha', content: 'Idatha ingadalulwa kubantu besithathu kuphela ukuze kuqhutshwe izinkokhelo noma ukufeza izibopho zomthetho.' },
    { title: '16. Ukuphepha Nokugcinwa', content: 'Izinyathelo Zokuphepha: Sisebenzisa i-SSL nama-algorithms okuhlunga.\n\nUkugcinwa: Idatha igcinwa kuphela isikhathi esidingekayo.' },
    { title: '17. Inqubomgomo Yamakhukhisi', content: 'Isayithi isebenzisa amakhukhisi ukwenza okuqukethwe kube ngokwakho nokuhlaziya ithrafikhi. Abasebenzisi bangakhubaza amakhukhisi.' },
    { title: '18. Inguqulo Nokuxhumana', content: 'UMhlinzeki: Risknil.com.\n\nI-imeyili: info@risknil.com.\n\nIgcine ukubuyekezwa: Meyi 14, 2026.' }
  ]
}

const xhTerms: TermsContent = {
  title: 'Imiqathango Jikelele Yokusetyenziswa kwe-Risknil.com',
  lastUpdated: 'Ihlaziywe okokugqibela: Meyi 14, 2026',
  backButton: 'Buyela ku-RiskNil',
  legalNote: 'Ukuba kukho naluphi na umahluko phakathi kweenguqulelo zeelwimi, inguqulelo yesiNgesi iya kuphumelela.',
  sections: [
    { title: '1. Imiqathango Yokusetyenziswa', content: 'Le Miqathango Yokusetyenziswa ("Imiqathango") yenza isivumelwano esibophelelayo ngokomthetho phakathi "koMboneleli" naye nawuphi na umntu okanye iqumrhu ("Umsebenzisi") ofikelela kwiwebhusayithi ye-risknil.com, izicelo zayo zeselula, okanye naziphi na iimpawu ezinxulumeneyo, umxholo, okanye iinkonzo (ngokudibanisiweyo, "Isayithi").' },
    { title: '2. Amalungiselelo Jikelele', content: 'Ukusebenza: Le Miqathango ilawula lonke ulwalamano phakathi koMboneleli noMsebenzisi.\n\nUtshintsho: UMboneleli ugcina ilungelo lokutshintsha le Miqathango nangaliphi na ixesha.\n\nUkusetyenziswa Okusemthethweni: Isayithi kufuneka isetyenziswe kuphela ngeenjongo ezisemthethweni.\n\nIzohlwayo: Xa kukho ukusetyenziswa kakubi, uMboneleli ugcina ilungelo lokuthintela ukufikelela nokuphelisa ii-akhawunti.' },
    { title: '3. Inkcazelo Yesayithi', content: 'Isayithi ibonelela ngomxholo onxulumene nemidlalo ofumaneka esidlangalaleni, kuquka ulwazi, iinkcukacha-manani, amanqaku, amacebiso okubheja, kunye nezimvo zokuhlalutya. Lo mxholo uhlanganiswa kwimithombo ezimeleyo yabantu besithathu kunye nophando lwangaphakathi nohlalutyo.\n\nUMboneleli wenza imigudu esengqiqweni ukuqinisekisa ukuchaneka nexesha lolwazi olunikezelweyo; nangona kunjalo, akukho siqinisekiso sinikezelwayo malunga nokupheleleyo, ukuchaneka, okanye ukuthembakala kwayo nayiphi na idatha, kuquka iziphumo zemidlalo, iinkcukacha-manani, okanye ulwazi olunxulumene nokubheja.\n\nWonke umxholo unikezelwa ngeenjongo zolwazi kuphela. UMboneleli akamkeli luxanduva ngazo naziphi na izigqibo, izenzo, okanye iilahleko ezifunyenwe ngabaSebenzisi ngokusekelwe kulwazi olupapashwe kwiSayithi.' },
    { title: '4. Iminikelo Nokudluliswa Kwemali Ebhankini', content: 'Iminikelo Yokuzithandela: Isayithi ayithengisi nawuphi na umveliso okanye inkonzo kwaye ayinikezeli mxholo we-premium okanye ohlawulelwayo. Zonke iintlawulo ezenziwa ngabaSebenzisi ziminikelo yokuzithandela ejoliswe kuphela ekuxhaseni ugcino oluqhubekayo nophuhliso lweSayithi.\n\nIindlela Zokuhlawula: Iminikelo inokwenziwa ngeendlela zokuhlawula ezikhuselekileyo kwi-intanethi okanye ngokudluliswa kwemali ebhankini, apho kufumaneka khona.\n\nImiyalelo Yokudluliswa Kwemali Ebhankini: Apho kusetyenziswa ukudluliswa kwemali ebhankini, abaSebenzisi kufuneka balandele imiyalelo yokuhlawula enikezelwe ngexesha lomnikelo. Iminikelo ithathwa njengefunyenweyo kuphela xa isixa esipheleleyo sifakwe ngempumelelo kwi-akhawunti yoMboneleli.\n\nUkuchaneka Kolwazi: AbaSebenzisi banoxanduva lokuqinisekisa ukuba zonke iinkcukacha zokuhlawula, kuquka ulwazi lwebhanki, zifakwe ngokuchanekileyo. UMboneleli akanaxanduva ngayo nayiphi na ilahleko yemali ebangelwa lulwazi lokuhlawula olungachanekanga okanye olungaphelelanga olunikezelwe nguMsebenzisi.\n\nIminikelo Engabuyiselwayo: Iminikelo ngokubanzi ayibuyiselwa. Nangona kunjalo, apho umthetho osebenzayo ufuna khona, amalungelo asemthethweni okubuyiselwa imali ahlala engachaphazeleki.' },
    { title: '5. Umxholo Wobunikazi', content: 'Ubunikazi Obodwa: Wonke umxholo unikwa nguMboneleli kuphela.\n\nAkukho Zingeniso Zabasebenzisi: Isayithi ayivumeli umxholo owenziwe ngabasebenzisi.' },
    { title: '6. Amakhonkco Abantu Besithathu', content: 'Umsebenzisi uyavuma ukuba nayiphi na intsebenziswano neewebhusayithi zesithathu okanye iintengiso ezifunyenweyo kwiSayithi zingobungozi bakhe ngokupheleleyo.' },
    { title: '7. Ukungasebenzi Kwe-akhawunti', content: 'UMboneleli ugcina ilungelo lokuphelisa nayiphi na i-akhawunti yoMsebenzisi engafinyelelwanga iintsuku eziyi-180 ezilandelelanayo.' },
    { title: '8. Impahla Yengqondo', content: 'Ubunikazi: Wonke umxholo kunye nesoftware kwiSayithi zezikaMboneleli. Abasebenzisi bathintelwe ngokungqongqo ukuba bakope okanye bakhuphe kwakhona nayiphi na inxalenye yeSayithi.' },
    { title: '9. Ukuthobela Umthetho', content: 'Umthetho Osebenzayo: Le Miqathango ilawulwa yimithetho yase-United Kingdom. Zonke iiPati zinikezela kulawulo lwanye lweenkundla zase-United Kingdom.' },
    { title: '10. Ukuphika', content: 'Akukho Siingqinisiso: ISayithi inikelwa "njengoko injalo".\n\nAyiyoNkonzo Yokugembula: ISayithi sisixhobo solwazi.\n\nUkuthintela Ilahleko: UMboneleli akanatyala ngelahleko ethe ngqo okanye engathanga ngqo.' },
    { title: 'Umgaqo-nkqubo Wobumfihlo', content: '' },
    { title: '11. Ukukhuselwa Kwedatha', content: 'Isayithi izinikele ekukhuseleni ubumfihlo boMsebenzisi ngokuvumelana ne-GDPR. UMlawuli Wedatha ngu-risknil.com.' },
    { title: '12. Ukuqokelelwa Kwedatha', content: 'Ukubhalisa: Idatha yobuqu iqokelelwa kuphela ngexesha lokubhalisa.\n\nImvume: Ngokusebenzisa iinkonzo, uMsebenzisi uvuma ukuqokelelwa kwedatha yakhe.' },
    { title: '13. Amalungelo Akho', content: 'Abasebenzisi banamalungelo alandelayo: Ukufikelela Nokulungisa, Ukucima, Ukuthintela Nokuphikisa, Ukudluliswa.' },
    { title: '14. Ukusetyenziswa Kwedatha', content: 'Idatha yobuqu isetyenziswa ukunxibelelana kunye nokuqhuba iintlawulo. Asithengisi idatha kumaqela esithathu.' },
    { title: '15. Ukutyhilwa Kwedatha', content: 'Idatha inokutyhilwa kumaqela esithathu kuphela ukuqhuba iintlawulo okanye ukuzalisekisa iimbopheleleko zomthetho.' },
    { title: '16. Ukhuseleko Nokugcinwa', content: 'Amanyathelo Okhuseleko: Sisebenzisa i-SSL kunye ne-algorithms zokuhasha.\n\nUkugcinwa: Idatha igcinwa kuphela ixesha elifunekayo.' },
    { title: '17. Umgaqo-nkqubo Weekhukhi', content: 'Isayithi isebenzisa iikhukhi ukwenza umxholo wena kunye nokuhlalutya ithrafikhi. Abasebenzisi banokucima iikhukhi.' },
    { title: '18. Inguqulelo Noqhagamshelwano', content: 'UMboneleli: Risknil.com.\n\nI-imeyile: info@risknil.com.\n\nIhlaziywe okokugqibela: Meyi 14, 2026.' }
  ]
}

export function getTermsContent(lang: string): TermsContent {
  switch (lang) {
    case 'es': return esTerms
    case 'pt': return ptTerms
    case 'de': return deTerms
    case 'fr': return frTerms
    case 'hu': return huTerms
    case 'zh-CN': return zhCNTerms
    case 'zh-TW': return zhTWTerms
    case 'it': return itTerms
    case 'sv': return svTerms
    case 'da': return daTerms
    case 'nl': return nlTerms
    case 'el': return elTerms
    case 'pl': return plTerms
    case 'no': return noTerms
    case 'fi': return fiTerms
    case 'ro': return roTerms
    case 'cs': return csTerms
    case 'ja': return jaTerms
    case 'ko': return koTerms
    case 'hi': return hiTerms
    case 'ar': return arTerms
    case 'tl': return tlTerms
    case 'sw': return swTerms
    case 'af': return afTerms
    case 'zu': return zuTerms
    case 'xh': return xhTerms
    default: return enTerms
  }
}

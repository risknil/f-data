export type Language =
  | 'en' | 'es' | 'pt' | 'zh-CN' | 'zh-TW' | 'it' | 'fr' | 'de' | 'sv' | 'da'
  | 'nl' | 'el' | 'pl' | 'no' | 'hu' | 'fi' | 'ro' | 'cs' | 'sw' | 'af'
  | 'zu' | 'xh' | 'ja' | 'ko' | 'hi' | 'tl' | 'ar'

export interface Translations {
  navbar: {
    sports: string
    howItWorks: string
    expertPicks: string
    training: string
    signUp: string
    logIn: string
  }
  hero: {
    title: string
    subtitle: string
    description: string
    startButton: string
    learnButton: string
  }
  howItWorks: {
    title: string
    description: string
    step1Title: string
    step1Desc: string
    step2Title: string
    step2Desc: string
    step3Title: string
    step3Desc: string
    stats: {
      tipsters: string
      sources: string
      free: string
    }
  }
  browse: {
    title: string
    browseButton: string
  }
  expertPicks: {
    badge: string
    title: string
    description: string
    noTips: string
    selectionsLabel: string
    oddsLabel: string
    combinedOdds: string
    unlockButton: string
    unlockTitle: string
    revealNote: string
    howItWorksTitle: string
    howItWorksDesc: string
  }
  sportTips: {
    event: string
    market: string
    pick: string
    odds: string
    noTips: string
  }
  footer: {
    company: string
    sports: string
    account: string
    howItWorks: string
    terms: string
    privacy: string
    signUp: string
    logIn: string
    forgot: string
    tagline: string
    disclaimer: string
  }
  auth: {
    signUpTitle: string
    logInTitle: string
    forgotTitle: string
    email: string
    password: string
    confirmPassword: string
    createAccount: string
    signIn: string
    resetPassword: string
    backToLogin: string
  }
  cta: {
    title: string
    description: string
    createAccount: string
    seeHow: string
  }
}

const en: Translations = {
  navbar: { sports: 'Sports', howItWorks: 'How It Works', expertPicks: 'Expert Picks', training: 'Professional Betting Training', signUp: 'Sign Up Free', logIn: 'Log In' },
  hero: { title: 'Expert Betting Tips For Free', subtitle: 'Get the Best Betting Tips from Experts — For Free', description: 'Why spend hours browsing unreliable tipster sites or paying for questionable picks? We aggregate tips from 100s of expert sources and deliver only the highest-quality picks — completely free.', startButton: 'Start Getting Free Tips', learnButton: 'See How It Works' },
  howItWorks: { title: 'How It Works', description: 'Get expert betting tips in three simple steps', step1Title: '100s of Expert Sources', step1Desc: 'We curate tips from verified tipsters and expert sources', step2Title: 'Quality Filtered', step2Desc: 'Only the highest quality predictions make it through', step3Title: 'Completely Free', step3Desc: 'Access all tips without paying a single penny', stats: { tipsters: 'Expert Tipsters', sources: 'Expert Sources Filtered', free: 'Free for You' } },
  browse: { title: 'Browse By Sport', browseButton: 'View Tips' },
  expertPicks: { badge: 'Expert Accumulator Picks', title: 'What we are betting on', description: 'Coming Soon - Stay tuned for our expert accumulator picks!', noTips: 'No premium picks available at the moment. Check back soon!', selectionsLabel: 'selections', oddsLabel: 'combined odds', combinedOdds: 'Combined Odds', unlockButton: 'Unlock for $1', unlockTitle: 'Our {sheetName} Accumulator Tip', revealNote: 'Once revealed, stays visible until next pick', howItWorksTitle: 'How it works:', howItWorksDesc: 'For just $1 per accumulator, unlock our expert\'s multi-selection bet. Each accumulator combines multiple picks for bigger potential returns. Once revealed, that pick stays visible until a new one is posted.' },
  sportTips: { event: 'Event', market: 'Market', pick: 'Pick', odds: 'Odds', noTips: 'Thank you for your patience! We are currently gathering and analyzing the best betting tips for this sport. Please check back soon.' },
  footer: { company: 'Company', sports: 'Sports', account: 'Account', howItWorks: 'How It Works', terms: 'Terms of Service', privacy: 'Privacy Policy', signUp: 'Sign Up Free', logIn: 'Log In', forgot: 'Forgot Password', tagline: 'The smartest way to get sports betting tips. Curated from 100s of experts, free for everyone.', disclaimer: 'Please gamble responsibly. Betting involves risk. 18+.' },
  auth: { signUpTitle: 'Create Your Free Account', logInTitle: 'Sign in to RiskNil', forgotTitle: 'Reset Your Password', email: 'Email', password: 'Password', confirmPassword: 'Confirm Password', createAccount: 'Create Account', signIn: 'Sign In', resetPassword: 'Reset Password', backToLogin: 'Back to Login' },
  cta: { title: 'Ready to Bet Smarter?', description: "Join thousands of bettors who already use RiskNil to get ahead. It's free — always.", createAccount: 'Create Your Free Account', seeHow: 'See How It Works' },
}

const es: Translations = {
  navbar: { sports: 'Deportes', howItWorks: 'Cómo Funciona', expertPicks: 'Picks de Expertos', training: 'Entrenamiento Profesional de Apuestas', signUp: 'Registrarse Gratis', logIn: 'Iniciar Sesión' },
  hero: { title: 'Consejos de Apuestas Gratis', subtitle: 'Obtén los Mejores Consejos de Apuestas de Expertos — Gratis', description: '¿Por qué pasar horas en sitios de tipsters poco confiables o pagar por picks cuestionables? Reunimos consejos de cientos de fuentes expertas y entregamos solo los picks de mayor calidad — completamente gratis.', startButton: 'Comienza a Recibir Tips Gratis', learnButton: 'Ver Cómo Funciona' },
  howItWorks: { title: 'Cómo Funciona', description: 'Obtén consejos de apuestas de expertos en tres simples pasos', step1Title: 'Cientos de Fuentes Expertas', step1Desc: 'Seleccionamos consejos de tipsters verificados y fuentes expertas', step2Title: 'Filtrado por Calidad', step2Desc: 'Solo las predicciones de mayor calidad pasan el filtro', step3Title: 'Completamente Gratis', step3Desc: 'Accede a todos los consejos sin pagar un centavo', stats: { tipsters: 'Tipsters Expertos', sources: 'Fuentes Expertas Filtradas', free: 'Gratis para Ti' } },
  browse: { title: 'Explorar por Deporte', browseButton: 'Ver Consejos' },
  expertPicks: { badge: 'Picks Acumuladores de Expertos', title: 'En qué estamos apostando', description: 'Próximamente - ¡Mantente atento a nuestros picks acumuladores de expertos!', noTips: 'No hay picks premium disponibles en este momento. ¡Vuelve pronto!', selectionsLabel: 'selecciones', oddsLabel: 'cuotas combinadas', combinedOdds: 'Cuotas Combinadas', unlockButton: 'Desbloquear por $1', unlockTitle: 'Nuestro Tip Acumulador de {sheetName}', revealNote: 'Una vez revelado, permanece visible hasta el próximo pick', howItWorksTitle: 'Cómo funciona:', howItWorksDesc: 'Por solo $1 por acumulador, desbloquea la apuesta múltiple de nuestro experto. Cada acumulador combina múltiples picks para mayores retornos potenciales.' },
  sportTips: { event: 'Evento', market: 'Mercado', pick: 'Pick', odds: 'Cuotas', noTips: 'Gracias por tu paciencia. Estamos recopilando los mejores consejos de apuestas para este deporte. Por favor vuelve pronto.' },
  footer: { company: 'Empresa', sports: 'Deportes', account: 'Cuenta', howItWorks: 'Cómo Funciona', terms: 'Términos de Servicio', privacy: 'Política de Privacidad', signUp: 'Registrarse Gratis', logIn: 'Iniciar Sesión', forgot: 'Olvidé mi Contraseña', tagline: 'La forma más inteligente de obtener consejos de apuestas deportivas. Seleccionados de cientos de expertos, gratis para todos.', disclaimer: 'Por favor, apuesta de forma responsable. Las apuestas conllevan riesgos. 18+.' },
  auth: { signUpTitle: 'Crea Tu Cuenta Gratis', logInTitle: 'Inicia Sesión en RiskNil', forgotTitle: 'Restablecer Tu Contraseña', email: 'Correo', password: 'Contraseña', confirmPassword: 'Confirmar Contraseña', createAccount: 'Crear Cuenta', signIn: 'Iniciar Sesión', resetPassword: 'Restablecer Contraseña', backToLogin: 'Volver al Inicio de Sesión' },
  cta: { title: '¿Listo para Apostar Mejor?', description: 'Únete a miles de apostadores que ya usan RiskNil para avanzar. Es gratis — siempre.', createAccount: 'Crea Tu Cuenta Gratis', seeHow: 'Ver Cómo Funciona' },
}

const pt: Translations = {
  navbar: { sports: 'Esportes', howItWorks: 'Como Funciona', expertPicks: 'Dicas de Especialistas', training: 'Treinamento Profissional de Apostas', signUp: 'Cadastrar Grátis', logIn: 'Entrar' },
  hero: { title: 'Dicas de Apostas Grátis de Especialistas', subtitle: 'Obtenha as Melhores Dicas de Apostas de Especialistas — Grátis', description: 'Por que gastar horas em sites de tipsters não confiáveis ou pagar por dicas duvidosas? Agregamos dicas de centenas de fontes especializadas e entregamos apenas as dicas de maior qualidade — completamente grátis.', startButton: 'Comece a Receber Dicas Grátis', learnButton: 'Veja Como Funciona' },
  howItWorks: { title: 'Como Funciona', description: 'Obtenha dicas de apostas de especialistas em três passos simples', step1Title: 'Centenas de Fontes Especializadas', step1Desc: 'Selecionamos dicas de tipsters verificados e fontes especializadas', step2Title: 'Filtrado por Qualidade', step2Desc: 'Apenas as previsões de maior qualidade passam pelo filtro', step3Title: 'Completamente Grátis', step3Desc: 'Acesse todas as dicas sem pagar nada', stats: { tipsters: 'Tipsters Especializados', sources: 'Fontes Especializadas Filtradas', free: 'Grátis para Você' } },
  browse: { title: 'Navegar por Esporte', browseButton: 'Ver Dicas' },
  expertPicks: { badge: 'Dicas Acumuladoras de Especialistas', title: 'No que estamos apostando', description: 'Em Breve - Fique atento às nossas dicas acumuladoras de especialistas!', noTips: 'Nenhuma dica premium disponível no momento. Volte em breve!', selectionsLabel: 'seleções', oddsLabel: 'odds combinadas', combinedOdds: 'Odds Combinadas', unlockButton: 'Desbloquear por $1', unlockTitle: 'Nossa Dica Acumuladora de {sheetName}', revealNote: 'Uma vez revelada, permanece visível até a próxima dica', howItWorksTitle: 'Como funciona:', howItWorksDesc: 'Por apenas $1 por acumulador, desbloqueie a aposta múltipla do nosso especialista. Cada acumulador combina múltiplas dicas para retornos potenciais maiores.' },
  sportTips: { event: 'Evento', market: 'Mercado', pick: 'Dica', odds: 'Odds', noTips: 'Obrigado pela paciência! Estamos coletando as melhores dicas de apostas para este esporte. Por favor, volte em breve.' },
  footer: { company: 'Empresa', sports: 'Esportes', account: 'Conta', howItWorks: 'Como Funciona', terms: 'Termos de Serviço', privacy: 'Política de Privacidade', signUp: 'Cadastrar Grátis', logIn: 'Entrar', forgot: 'Esqueci Minha Senha', tagline: 'A maneira mais inteligente de obter dicas de apostas esportivas. Selecionadas de centenas de especialistas, grátis para todos.', disclaimer: 'Por favor, aposte com responsabilidade. Apostas envolvem riscos. 18+.' },
  auth: { signUpTitle: 'Crie Sua Conta Grátis', logInTitle: 'Entrar no RiskNil', forgotTitle: 'Redefinir Sua Senha', email: 'Email', password: 'Senha', confirmPassword: 'Confirmar Senha', createAccount: 'Criar Conta', signIn: 'Entrar', resetPassword: 'Redefinir Senha', backToLogin: 'Voltar ao Login' },
  cta: { title: 'Pronto para Apostar Melhor?', description: 'Junte-se a milhares de apostadores que já usam o RiskNil para avançar. É grátis — sempre.', createAccount: 'Crie Sua Conta Grátis', seeHow: 'Veja Como Funciona' },
}

const zhCN: Translations = {
  navbar: { sports: '体育', howItWorks: '如何运作', expertPicks: '专家选择', training: '专业投注培训', signUp: '免费注册', logIn: '登录' },
  hero: { title: '免费专家投注技巧', subtitle: '从专家那里获得最佳投注技巧 — 完全免费', description: '为什么要花几个小时浏览不可靠的投注网站或为可疑的选择付费？我们从数百个专家��源汇总技巧，只提供最高质量的选择 — 完全免费。', startButton: '开始获取免费技巧', learnButton: '了解如何运作' },
  howItWorks: { title: '如何运作', description: '通过三个简单步骤获取专家投注技巧', step1Title: '数百个专家来源', step1Desc: '我们从经过验证的投注专家和专家来源精选技巧', step2Title: '质量过滤', step2Desc: '只有最高质量的预测才能通过', step3Title: '完全免费', step3Desc: '无需付费即可访问所有技巧', stats: { tipsters: '专家投注师', sources: '过滤的专家来源', free: '为您免费' } },
  browse: { title: '按体育浏览', browseButton: '查看技巧' },
  expertPicks: { badge: '专家累积投注', title: '我们在投注什么', description: '即将推出 - 敬请期待我们的专家累积投注选择！', noTips: '目前没有高级选择。请稍后再来！', selectionsLabel: '选择', oddsLabel: '组合赔率', combinedOdds: '组合赔率', unlockButton: '解锁 $1', unlockTitle: '我们的{sheetName}累积投注技巧', revealNote: '一旦揭示，将保持可见直到下一个选择', howItWorksTitle: '如何运作：', howItWorksDesc: '只需每个累积投注$1，解锁我们专家的多选投注。每个累积投注组合多个选择以获得更大的潜在回报。' },
  sportTips: { event: '赛事', market: '市场', pick: '选择', odds: '赔率', noTips: '感谢您的耐心！我们正在收集这项运动的最佳投注技巧。请稍后再来。' },
  footer: { company: '公司', sports: '体育', account: '账户', howItWorks: '如何运作', terms: '服务条款', privacy: '隐私政策', signUp: '免费注册', logIn: '登录', forgot: '忘记密码', tagline: '获取体育博彩技巧的最聪明方式。从数百位专家精选，对所有人免费。', disclaimer: '请负责任地博彩。博彩涉及风险。18+。' },
  auth: { signUpTitle: '创建您的免费账户', logInTitle: '登录RiskNil', forgotTitle: '重置您的密码', email: '邮箱', password: '密码', confirmPassword: '确认密码', createAccount: '创建账户', signIn: '登录', resetPassword: '重置密码', backToLogin: '返回登录' },
  cta: { title: '准备好更聪明地投注了吗？', description: '加入已经使用RiskNil领先的数千名投注者。永远免费。', createAccount: '创建您的免费账户', seeHow: '了解如何运作' },
}

const zhTW: Translations = {
  navbar: { sports: '體育', howItWorks: '如何運作', expertPicks: '專家選擇', training: '專業投注培訓', signUp: '免費註冊', logIn: '登入' },
  hero: { title: '免費專家投注技巧', subtitle: '從專家那裡獲得最佳投注技巧 — 完全免費', description: '為什麼要花幾個小時瀏覽不可靠的投注網站或為可疑的選擇付費？我們從數百個專家來源匯總技巧，只提供最高質量的選擇 — 完全免費。', startButton: '開始獲取免費技巧', learnButton: '了解如何運作' },
  howItWorks: { title: '如何運作', description: '通過三個簡單步驟獲取專家投注技巧', step1Title: '數百個專家來源', step1Desc: '我們從經過驗證的投注專家和專家來源精選技巧', step2Title: '質量過濾', step2Desc: '只有最高質量的預測才能通過', step3Title: '完全免費', step3Desc: '無需付費即可訪問所有技巧', stats: { tipsters: '專家投注師', sources: '過濾的專家來源', free: '為您免費' } },
  browse: { title: '按體育瀏覽', browseButton: '查看技巧' },
  expertPicks: { badge: '專家累積投注', title: '我們在投注什麼', description: '想知道我們的專家團隊在投注什麼嗎？只需$1即可獲得我��高級累積投注選擇的獨家訪問權限。', noTips: '目前沒有高級選擇。請稍後再來！', selectionsLabel: '選擇', oddsLabel: '組合賠率', combinedOdds: '組合賠率', unlockButton: '解鎖 $1', unlockTitle: '我們的{sheetName}累積���注技巧', revealNote: '一旦揭示，將保持可見直到下一個選擇', howItWorksTitle: '如何運作：', howItWorksDesc: '只需每個累積投注$1，解鎖我們專家的多選投注。每個累積投注組合多個選擇以獲得更大的潛在回報。' },
  sportTips: { event: '賽事', market: '市場', pick: '選擇', odds: '賠率', noTips: '感謝您的耐心！我們正在收集這項運動的最佳投注技巧。請稍後再來。' },
  footer: { company: '公司', sports: '體育', account: '帳戶', howItWorks: '如何運作', terms: '服務條款', privacy: '隱私政策', signUp: '免費註冊', logIn: '登入', forgot: '忘記密碼', tagline: '獲取體育博彩技巧的最聰明方式。從數百位專家精選，對所有人免費。', disclaimer: '請負責任地博彩。博彩涉及風險。18+。' },
  auth: { signUpTitle: '創建您的免費帳戶', logInTitle: '登入RiskNil', forgotTitle: '重置您的密碼', email: '電郵', password: '密碼', confirmPassword: '確認密碼', createAccount: '創建帳戶', signIn: '登入', resetPassword: '重置密碼', backToLogin: '返回登入' },
  cta: { title: '準備好更聰明地投注了嗎？', description: '加入已經使用RiskNil領先的數千名投注者。永遠免費。', createAccount: '創建您的免費帳戶', seeHow: '了解如何運作' },
}

const it: Translations = {
  navbar: { sports: 'Sport', howItWorks: 'Come Funziona', expertPicks: 'Pronostici Esperti', training: 'Formazione Professionale Scommesse', signUp: 'Registrati Gratis', logIn: 'Accedi' },
  hero: { title: 'Pronostici Gratuiti dagli Esperti', subtitle: 'Ottieni i Migliori Pronostici dagli Esperti — Gratis', description: 'Perché passare ore su siti di pronosticatori inaffidabili o pagare per scelte discutibili? Aggreghiamo consigli da centinaia di fonti esperte e forniamo solo i pronostici di massima qualità — completamente gratis.', startButton: 'Inizia a Ricevere Pronostici Gratis', learnButton: 'Scopri Come Funziona' },
  howItWorks: { title: 'Come Funziona', description: 'Ottieni pronostici esperti in tre semplici passaggi', step1Title: 'Centinaia di Fonti Esperte', step1Desc: 'Selezioniamo pronostici da tipster verificati e fonti esperte', step2Title: 'Filtrati per Qualità', step2Desc: 'Solo le previsioni di massima qualità passano il filtro', step3Title: 'Completamente Gratis', step3Desc: 'Accedi a tutti i pronostici senza pagare nulla', stats: { tipsters: 'Tipster Esperti', sources: 'Fonti Esperte Filtrate', free: 'Gratis per Te' } },
  browse: { title: 'Sfoglia per Sport', browseButton: 'Vedi Pronostici' },
  expertPicks: { badge: 'Pronostici Accumulator Esperti', title: 'Su cosa stiamo scommettendo', description: 'Prossimamente - Resta sintonizzato per i nostri pronostici accumulator di esperti!', noTips: 'Nessun pronostico premium disponibile al momento. Torna presto!', selectionsLabel: 'selezioni', oddsLabel: 'quote combinate', combinedOdds: 'Quote Combinate', unlockButton: 'Sblocca a $1', unlockTitle: 'Il Nostro Pronostico Accumulator {sheetName}', revealNote: 'Una volta rivelato, rimane visibile fino al prossimo pronostico', howItWorksTitle: 'Come funziona:', howItWorksDesc: 'Per solo $1 per accumulator, sblocca la scommessa multipla del nostro esperto. Ogni accumulator combina più selezioni per rendimenti potenziali maggiori.' },
  sportTips: { event: 'Evento', market: 'Mercato', pick: 'Pronostico', odds: 'Quote', noTips: 'Grazie per la pazienza! Stiamo raccogliendo i migliori pronostici per questo sport. Torna presto.' },
  footer: { company: 'Azienda', sports: 'Sport', account: 'Account', howItWorks: 'Come Funziona', terms: 'Termini di Servizio', privacy: 'Privacy Policy', signUp: 'Registrati Gratis', logIn: 'Accedi', forgot: 'Password Dimenticata', tagline: 'Il modo più intelligente per ottenere consigli sulle scommesse sportive. Selezionati da centinaia di esperti, gratis per tutti.', disclaimer: 'Scommetti responsabilmente. Le scommesse comportano rischi. 18+.' },
  auth: { signUpTitle: 'Crea il Tuo Account Gratis', logInTitle: 'Accedi a RiskNil', forgotTitle: 'Reimposta la Tua Password', email: 'Email', password: 'Password', confirmPassword: 'Conferma Password', createAccount: 'Crea Account', signIn: 'Accedi', resetPassword: 'Reimposta Password', backToLogin: 'Torna al Login' },
  cta: { title: 'Pronto a Scommettere in Modo Più Intelligente?', description: 'Unisciti a migliaia di scommettitori che già usano RiskNil per avere un vantaggio. È gratis — sempre.', createAccount: 'Crea il Tuo Account Gratis', seeHow: 'Scopri Come Funziona' },
}

const fr: Translations = {
  navbar: { sports: 'Sports', howItWorks: 'Comment ça marche', expertPicks: 'Pronostics Experts', training: 'Formation Professionnelle Paris', signUp: 'Inscription Gratuite', logIn: 'Connexion' },
  hero: { title: 'Pronostics Gratuits d\'Experts', subtitle: 'Obtenez les Meilleurs Pronostics d\'Experts — Gratuitement', description: 'Pourquoi passer des heures sur des sites de pronostiqueurs peu fiables ou payer pour des choix douteux? Nous agrégeons les conseils de centaines de sources expertes et ne livrons que les pronostics de la plus haute qualité — complètement gratuit.', startButton: 'Commencer à Recevoir des Pronostics Gratuits', learnButton: 'Voir Comment ça Marche' },
  howItWorks: { title: 'Comment ça Marche', description: 'Obtenez des pronostics d\'experts en trois étapes simples', step1Title: 'Des Centaines de Sources Expertes', step1Desc: 'Nous sélectionnons des pronostics de tipsters vérifiés et sources expertes', step2Title: 'Filtré par Qualité', step2Desc: 'Seules les prédictions de la plus haute qualité passent le filtre', step3Title: 'Complètement Gratuit', step3Desc: 'Accédez à tous les pronostics sans payer un centime', stats: { tipsters: 'Tipsters Experts', sources: 'Sources Expertes Filtrées', free: 'Gratuit pour Vous' } },
  browse: { title: 'Parcourir par Sport', browseButton: 'Voir les Pronostics' },
  expertPicks: { badge: 'Pronostics Combinés d\'Experts', title: 'Sur quoi nous parions', description: 'Bientôt disponible - Restez à l\'écoute pour nos pronostics combinés d\'experts!', noTips: 'Aucun pronostic premium disponible pour le moment. Revenez bientôt!', selectionsLabel: 'sélections', oddsLabel: 'cotes combinées', combinedOdds: 'Cotes Combinées', unlockButton: 'Débloquer pour $1', unlockTitle: 'Notre Pronostic Combiné {sheetName}', revealNote: 'Une fois révélé, reste visible jusqu\'au prochain pronostic', howItWorksTitle: 'Comment ça marche:', howItWorksDesc: 'Pour seulement $1 par combiné, débloquez le pari multiple de notre expert. Chaque combiné regroupe plusieurs sélections pour des rendements potentiels plus importants.' },
  sportTips: { event: 'Événement', market: 'Marché', pick: 'Pronostic', odds: 'Cotes', noTips: 'Merci pour votre patience! Nous collectons les meilleurs pronostics pour ce sport. Revenez bientôt.' },
  footer: { company: 'Entreprise', sports: 'Sports', account: 'Compte', howItWorks: 'Comment ça Marche', terms: 'Conditions d\'Utilisation', privacy: 'Politique de Confidentialité', signUp: 'Inscription Gratuite', logIn: 'Connexion', forgot: 'Mot de Passe Oublié', tagline: 'La façon la plus intelligente d\'obtenir des conseils de paris sportifs. Sélectionnés parmi des centaines d\'experts, gratuit pour tous.', disclaimer: 'Pariez de manière responsable. Les paris comportent des risques. 18+.' },
  auth: { signUpTitle: 'Créez Votre Compte Gratuit', logInTitle: 'Connectez-vous à RiskNil', forgotTitle: 'Réinitialisez Votre Mot de Passe', email: 'Email', password: 'Mot de Passe', confirmPassword: 'Confirmer le Mot de Passe', createAccount: 'Créer un Compte', signIn: 'Se Connecter', resetPassword: 'Réinitialiser le Mot de Passe', backToLogin: 'Retour à la Connexion' },
  cta: { title: 'Prêt à Parier Plus Intelligemment?', description: 'Rejoignez des milliers de parieurs qui utilisent déjà RiskNil pour prendre de l\'avance. C\'est gratuit — toujours.', createAccount: 'Créez Votre Compte Gratuit', seeHow: 'Voir Comment ça Marche' },
}

const de: Translations = {
  navbar: { sports: 'Sport', howItWorks: 'So funktioniert\'s', expertPicks: 'Experten-Tipps', training: 'Professionelles Wetttraining', signUp: 'Kostenlos Anmelden', logIn: 'Anmelden' },
  hero: { title: 'Kostenlose Experten-Wetttipps', subtitle: 'Holen Sie sich die besten Wetttipps von Experten — Kostenlos', description: 'Warum Stunden auf unzuverlässigen Tipster-Seiten verbringen oder für fragwürdige Tipps bezahlen? Wir sammeln Tipps von Hunderten von Expertenquellen und liefern nur die hochwertigsten Tipps — völlig kostenlos.', startButton: 'Kostenlose Tipps erhalten', learnButton: 'So funktioniert\'s' },
  howItWorks: { title: 'So funktioniert\'s', description: 'Erhalten Sie Experten-Wetttipps in drei einfachen Schritten', step1Title: 'Hunderte Expertenquellen', step1Desc: 'Wir kuratieren Tipps von verifizierten Tipstern und Expertenquellen', step2Title: 'Qualitätsgefiltert', step2Desc: 'Nur die hochwertigsten Vorhersagen kommen durch', step3Title: 'Völlig kostenlos', step3Desc: 'Zugang zu allen Tipps ohne einen Cent zu bezahlen', stats: { tipsters: 'Experten-Tipster', sources: 'Gefilterte Expertenquellen', free: 'Kostenlos für Sie' } },
  browse: { title: 'Nach Sportart durchsuchen', browseButton: 'Tipps ansehen' },
  expertPicks: { badge: 'Experten-Kombiwetten', title: 'Worauf wir wetten', description: 'Demnächst verfügbar - Bleiben Sie dran für unsere Experten-Kombiwetten-Tipps!', noTips: 'Derzeit keine Premium-Tipps verfügbar. Schauen Sie bald wieder vorbei!', selectionsLabel: 'Auswahlen', oddsLabel: 'kombinierte Quoten', combinedOdds: 'Kombinierte Quoten', unlockButton: 'Freischalten für $1', unlockTitle: 'Unser {sheetName} Kombiwetten-Tipp', revealNote: 'Einmal enthüllt, bleibt bis zum nächsten Tipp sichtbar', howItWorksTitle: 'So funktioniert\'s:', howItWorksDesc: 'Für nur $1 pro Kombiwette schalten Sie die Mehrfachwette unseres Experten frei. Jede Kombiwette kombiniert mehrere Tipps für größere potenzielle Gewinne.' },
  sportTips: { event: 'Event', market: 'Markt', pick: 'Tipp', odds: 'Quoten', noTips: 'Vielen Dank für Ihre Geduld! Wir sammeln die besten Wetttipps für diese Sportart. Bitte schauen Sie bald wieder vorbei.' },
  footer: { company: 'Unternehmen', sports: 'Sport', account: 'Konto', howItWorks: 'So funktioniert\'s', terms: 'Nutzungsbedingungen', privacy: 'Datenschutz', signUp: 'Kostenlos Anmelden', logIn: 'Anmelden', forgot: 'Passwort vergessen', tagline: 'Der intelligenteste Weg zu Sportwetten-Tipps. Von Hunderten von Experten kuratiert, kostenlos für alle.', disclaimer: 'Bitte wetten Sie verantwortungsbewusst. Wetten birgt Risiken. 18+.' },
  auth: { signUpTitle: 'Erstellen Sie Ihr kostenloses Konto', logInTitle: 'Bei RiskNil anmelden', forgotTitle: 'Passwort zurücksetzen', email: 'E-Mail', password: 'Passwort', confirmPassword: 'Passwort bestätigen', createAccount: 'Konto erstellen', signIn: 'Anmelden', resetPassword: 'Passwort zurücksetzen', backToLogin: 'Zurück zur Anmeldung' },
  cta: { title: 'Bereit, klüger zu wetten?', description: 'Schließen Sie sich Tausenden von Wettern an, die bereits RiskNil nutzen. Es ist kostenlos — immer.', createAccount: 'Erstellen Sie Ihr kostenloses Konto', seeHow: 'So funktioniert\'s' },
}

const hu: Translations = {
  navbar: { sports: 'Sportok', howItWorks: 'Hogyan működik', expertPicks: 'Szakértői tippek', training: 'Professzionális Fogadási Képzés', signUp: 'Ingyenes regisztráció', logIn: 'Bejelentkezés' },
  hero: { title: 'Ingyenes fogadási tippek szakértőktől', subtitle: 'Kapja meg a legjobb fogadási tippeket szakértőktől — Teljesen ingyen', description: 'Miért töltene órákat megbízhatatlan tippelő oldalakon, vagy fizetne kétes tippekért? Több száz szakértői forrásból gyűjtünk össze tippeket, és csak a legmagasabb minőségű tippeket adjuk — teljesen ingyen.', startButton: 'Kezdje el az ingyenes tippek fogadását', learnButton: 'Nézze meg hogyan működik' },
  howItWorks: { title: 'Hogyan működik', description: 'Kapjon szakértői tippeket három egyszerű lépésben', step1Title: 'Több száz szakértői forrás', step1Desc: 'Ellenőrzött tippelőktől és szakértői forrásoktól válogatunk tippeket', step2Title: 'Minőségszűrt', step2Desc: 'Csak a legmagasabb minőségű előrejelzések jutnak át', step3Title: 'Teljesen ingyenes', step3Desc: 'Hozzáférés az összes tipphez fizetés nélkül', stats: { tipsters: 'Szakértő tippelők', sources: 'Szűrt szakértői források', free: 'Ingyenes Önnek' } },
  browse: { title: 'Böngészés sport szerint', browseButton: 'Tippek megtekintése' },
  expertPicks: { badge: 'Szakértői kombó tippek', title: 'Mire fogadunk', description: 'Hamarosan - Maradjon velünk a szakértői kombó tippjeinkért!', noTips: 'Jelenleg nincs elérhető prémium tipp. Nézzen vissza hamarosan!', selectionsLabel: 'kiválasztás', oddsLabel: 'kombinált odds', combinedOdds: 'Kombinált odds', unlockButton: 'Feloldás $1-ért', unlockTitle: 'A mi {sheetName} kombó tippünk', revealNote: 'Feloldás után látható marad a következő tippig', howItWorksTitle: 'Hogyan működik:', howItWorksDesc: 'Mindössze $1-ért kombónként feloldhatja szakértőnk többszörös fogadását. Minden kombó több tippet kombinál a nagyobb potenciális nyereményért.' },
  sportTips: { event: 'Esemény', market: 'Piac', pick: 'Tipp', odds: 'Odds', noTips: 'Köszönjük türelmét! Jelenleg gyűjtjük a legjobb fogadási tippeket ehhez a sporthoz. Kérjük, nézzen vissza hamarosan.' },
  footer: { company: 'Cég', sports: 'Sportok', account: 'Fiók', howItWorks: 'Hogyan működik', terms: 'Szolgáltatási feltételek', privacy: 'Adatvédelmi irányelvek', signUp: 'Ingyenes regisztráció', logIn: 'Bejelentkezés', forgot: 'Elfelejtett jelszó', tagline: 'A legokosabb módja a sportfogadási tippek megszerzésének. Több száz szakértőtől válogatva, mindenkinek ingyenesen.', disclaimer: 'Kérjük, fogadjon felelősségteljesen. A fogadás kockázattal jár. 18+.' },
  auth: { signUpTitle: 'Hozza létre ingyenes fiókját', logInTitle: 'Bejelentkezés a RiskNil-be', forgotTitle: 'Jelszó visszaállítása', email: 'E-mail', password: 'Jelszó', confirmPassword: 'Jelszó megerősítése', createAccount: 'Fiók létrehozása', signIn: 'Bejelentkezés', resetPassword: 'Jelszó visszaállítása', backToLogin: 'Vissza a bejelentkezéshez' },
  cta: { title: 'Készen áll az okosabb fogadásra?', description: 'Csatlakozzon több ezer fogadóhoz, akik már használják a RiskNil-t. Ingyenes — mindig.', createAccount: 'Hozza létre ingyenes fiókját', seeHow: 'Nézze meg hogyan működik' },
}

const sv: Translations = {
  navbar: { sports: 'Sport', howItWorks: 'Hur det fungerar', expertPicks: 'Experttips', training: 'Professionell Bettingutbildning', signUp: 'Registrera gratis', logIn: 'Logga in' },
  hero: { title: 'Gratis experttips för vadslagning', subtitle: 'Få de bästa vadslagnings-tipsen från experter — Gratis', description: 'Varför spendera timmar på opålitliga tipssajter eller betala för tvivelaktiga tips? Vi samlar tips från hundratals expertkällor och levererar endast de högsta kvalitetstipsen — helt gratis.', startButton: 'Börja få gratis tips', learnButton: 'Se hur det fungerar' },
  howItWorks: { title: 'Hur det fungerar', description: 'Få experttips i tre enkla steg', step1Title: 'Hundratals expertkällor', step1Desc: 'Vi väljer tips från verifierade tipsare och expertkällor', step2Title: 'Kvalitetsfiltrerat', step2Desc: 'Endast de högsta kvalitetsprognoserna går igenom', step3Title: 'Helt gratis', step3Desc: 'Tillgång till alla tips utan att betala ett öre', stats: { tipsters: 'Experttipsare', sources: 'Filtrerade expertkällor', free: 'Gratis för dig' } },
  browse: { title: 'Bläddra efter sport', browseButton: 'Visa tips' },
  expertPicks: { badge: 'Expert kombinationstips', title: 'Vad vi satsar på', description: 'Kommer snart - Håll utkik efter våra expertkombinationstips!', noTips: 'Inga premiumtips tillgängliga just nu. Kolla igen snart!', selectionsLabel: 'val', oddsLabel: 'kombinerade odds', combinedOdds: 'Kombinerade odds', unlockButton: 'Lås upp för $1', unlockTitle: 'Vårt {sheetName} kombinationstips', revealNote: 'När det avslöjats förblir det synligt till nästa tips', howItWorksTitle: 'Hur det fungerar:', howItWorksDesc: 'För bara $1 per kombination låser du upp vår experts flervals-spel. Varje kombination kombinerar flera tips för större potentiella vinster.' },
  sportTips: { event: 'Evenemang', market: 'Marknad', pick: 'Tips', odds: 'Odds', noTips: 'Tack för ditt tålamod! Vi samlar de bästa tipsen för denna sport. Kolla igen snart.' },
  footer: { company: 'Företag', sports: 'Sport', account: 'Konto', howItWorks: 'Hur det fungerar', terms: 'Användarvillkor', privacy: 'Integritetspolicy', signUp: 'Registrera gratis', logIn: 'Logga in', forgot: 'Glömt lösenord', tagline: 'Det smartaste sättet att få sportvadslagningstips. Kurerat från hundratals experter, gratis för alla.', disclaimer: 'Spela ansvarsfullt. Vadslagning innebär risk. 18+.' },
  auth: { signUpTitle: 'Skapa ditt gratiskonto', logInTitle: 'Logga in på RiskNil', forgotTitle: 'Återställ ditt lösenord', email: 'E-post', password: 'Lösenord', confirmPassword: 'Bekräfta lösenord', createAccount: 'Skapa konto', signIn: 'Logga in', resetPassword: 'Återställ lösenord', backToLogin: 'Tillbaka till inloggning' },
  cta: { title: 'Redo att satsa smartare?', description: 'Gå med tusentals spelare som redan använder RiskNil. Det är gratis — alltid.', createAccount: 'Skapa ditt gratiskonto', seeHow: 'Se hur det fungerar' },
}

const da: Translations = {
  navbar: { sports: 'Sport', howItWorks: 'Sådan fungerer det', expertPicks: 'Eksperttips', training: 'Professionel Betting Træning', signUp: 'Tilmeld dig gratis', logIn: 'Log ind' },
  hero: { title: 'Gratis eksperttips til væddemål', subtitle: 'Få de bedste væddemålstips fra eksperter — Gratis', description: 'Hvorfor bruge timer på upålidelige tipsider eller betale for tvivlsomme tips? Vi samler tips fra hundredvis af ekspertkilder og leverer kun de højeste kvalitetstips — helt gratis.', startButton: 'Begynd at få gratis tips', learnButton: 'Se hvordan det fungerer' },
  howItWorks: { title: 'Sådan fungerer det', description: 'Få eksperttips i tre enkle trin', step1Title: 'Hundredvis af ekspertkilder', step1Desc: 'Vi udvælger tips fra verificerede tipsere og ekspertkilder', step2Title: 'Kvalitetsfiltreret', step2Desc: 'Kun de højeste kvalitetsprognoser kommer igennem', step3Title: 'Helt gratis', step3Desc: 'Adgang til alle tips uden at betale en krone', stats: { tipsters: 'Eksperttipsere', sources: 'Filtrerede ekspertkilder', free: 'Gratis for dig' } },
  browse: { title: 'Gennemse efter sport', browseButton: 'Se tips' },
  expertPicks: { badge: 'Ekspert akkumulatortips', title: 'Hvad vi satser på', description: 'Kommer snart - Hold øje med vores ekspert akkumulatortips!', noTips: 'Ingen premium tips tilgængelige lige nu. Kom tilbage snart!', selectionsLabel: 'valg', oddsLabel: 'kombinerede odds', combinedOdds: 'Kombinerede odds', unlockButton: 'Lås op for $1', unlockTitle: 'Vores {sheetName} akkumulatortip', revealNote: 'Når det er afsløret, forbliver det synligt til næste tip', howItWorksTitle: 'Sådan fungerer det:', howItWorksDesc: 'For kun $1 pr. akkumulator låser du op for vores eksperts multi-væddemål. Hver akkumulator kombinerer flere tips for større potentielle gevinster.' },
  sportTips: { event: 'Begivenhed', market: 'Marked', pick: 'Tip', odds: 'Odds', noTips: 'Tak for din tålmodighed! Vi indsamler de bedste tips til denne sport. Kom tilbage snart.' },
  footer: { company: 'Virksomhed', sports: 'Sport', account: 'Konto', howItWorks: 'Sådan fungerer det', terms: 'Servicevilkår', privacy: 'Privatlivspolitik', signUp: 'Tilmeld dig gratis', logIn: 'Log ind', forgot: 'Glemt adgangskode', tagline: 'Den smarteste måde at få tips til sportsvæddemål. Kurateret fra hundredvis af eksperter, gratis for alle.', disclaimer: 'Spil ansvarligt. Væddemål indebærer risiko. 18+.' },
  auth: { signUpTitle: 'Opret din gratis konto', logInTitle: 'Log ind på RiskNil', forgotTitle: 'Nulstil din adgangskode', email: 'Email', password: 'Adgangskode', confirmPassword: 'Bekræft adgangskode', createAccount: 'Opret konto', signIn: 'Log ind', resetPassword: 'Nulstil adgangskode', backToLogin: 'Tilbage til login' },
  cta: { title: 'Klar til at vædde smartere?', description: 'Slut dig til tusindvis af spillere der allerede bruger RiskNil. Det er gratis — altid.', createAccount: 'Opret din gratis konto', seeHow: 'Se hvordan det fungerer' },
}

const nl: Translations = {
  navbar: { sports: 'Sport', howItWorks: 'Hoe het werkt', expertPicks: 'Experttips', training: 'Professionele Wedden Training', signUp: 'Gratis aanmelden', logIn: 'Inloggen' },
  hero: { title: 'Gratis wedtips van experts', subtitle: 'Krijg de beste wedtips van experts — Gratis', description: 'Waarom uren doorbrengen op onbetrouwbare tipgeversites of betalen voor twijfelachtige tips? Wij verzamelen tips van honderden expertbronnen en leveren alleen de hoogste kwaliteit tips — volledig gratis.', startButton: 'Begin met gratis tips ontvangen', learnButton: 'Bekijk hoe het werkt' },
  howItWorks: { title: 'Hoe het werkt', description: 'Krijg expert wedtips in drie eenvoudige stappen', step1Title: 'Honderden expertbronnen', step1Desc: 'Wij selecteren tips van geverifieerde tipgevers en expertbronnen', step2Title: 'Kwaliteitsgefilterd', step2Desc: 'Alleen de hoogste kwaliteitsvoorspellingen komen erdoor', step3Title: 'Volledig gratis', step3Desc: 'Toegang tot alle tips zonder een cent te betalen', stats: { tipsters: 'Experttipgevers', sources: 'Gefilterde expertbronnen', free: 'Gratis voor jou' } },
  browse: { title: 'Bladeren op sport', browseButton: 'Bekijk tips' },
  expertPicks: { badge: 'Expert accumulatortips', title: 'Waarop wij wedden', description: 'Binnenkort beschikbaar - Blijf op de hoogte voor onze expert accumulatortips!', noTips: 'Geen premium tips beschikbaar op dit moment. Kom snel terug!', selectionsLabel: 'selecties', oddsLabel: 'gecombineerde odds', combinedOdds: 'Gecombineerde odds', unlockButton: 'Ontgrendel voor $1', unlockTitle: 'Onze {sheetName} accumulatortip', revealNote: 'Eenmaal onthuld blijft het zichtbaar tot de volgende tip', howItWorksTitle: 'Hoe het werkt:', howItWorksDesc: 'Voor slechts $1 per accumulator ontgrendel je de multi-weddenschap van onze expert. Elke accumulator combineert meerdere tips voor grotere potentiële winsten.' },
  sportTips: { event: 'Evenement', market: 'Markt', pick: 'Tip', odds: 'Odds', noTips: 'Bedankt voor je geduld! We verzamelen de beste tips voor deze sport. Kom snel terug.' },
  footer: { company: 'Bedrijf', sports: 'Sport', account: 'Account', howItWorks: 'Hoe het werkt', terms: 'Servicevoorwaarden', privacy: 'Privacybeleid', signUp: 'Gratis aanmelden', logIn: 'Inloggen', forgot: 'Wachtwoord vergeten', tagline: 'De slimste manier om sportweddenschapstips te krijgen. Samengesteld door honderden experts, gratis voor iedereen.', disclaimer: 'Gok verantwoord. Wedden brengt risico\'s met zich mee. 18+.' },
  auth: { signUpTitle: 'Maak je gratis account aan', logInTitle: 'Log in bij RiskNil', forgotTitle: 'Reset je wachtwoord', email: 'E-mail', password: 'Wachtwoord', confirmPassword: 'Bevestig wachtwoord', createAccount: 'Account aanmaken', signIn: 'Inloggen', resetPassword: 'Wachtwoord resetten', backToLogin: 'Terug naar inloggen' },
  cta: { title: 'Klaar om slimmer te wedden?', description: 'Sluit je aan bij duizenden spelers die al RiskNil gebruiken. Het is gratis — altijd.', createAccount: 'Maak je gratis account aan', seeHow: 'Bekijk hoe het werkt' },
}

const el: Translations = {
  navbar: { sports: 'Αθλήματα', howItWorks: 'Πώς λειτουργεί', expertPicks: 'Επιλογές ειδικών', training: 'Επαγγελματική Εκπαίδευση Στοιχημάτων', signUp: 'Δωρεάν εγγραφή', logIn: 'Σύνδεση' },
  hero: { title: 'Δωρεάν συμβουλές στοιχημάτων από ειδικούς', subtitle: 'Λάβετε τις καλύτερες συμβουλές στοιχημάτων από ειδικούς — Δωρεάν', description: 'Γιατί να ξοδεύετε ώρες σε αναξιόπιστους ιστότοπους ή να πληρώνετε για αμφίβολες συμβουλές; Συγκεντρώνουμε συμβουλές από εκατοντάδες ειδικές πηγές και παρέχουμε μόνο τις υψηλότερης ποιότητας συμβουλές — εντελώς δωρεάν.', startButton: 'Ξεκινήστε να λαμβάνετε δωρεάν συμβουλές', learnButton: 'Δείτε πώς λειτουργεί' },
  howItWorks: { title: 'Πώς λειτουργεί', description: 'Λάβετε συμβουλές ειδικών σε τρία απλά βήματα', step1Title: 'Εκατοντάδες ειδικές πηγές', step1Desc: 'Επιλέγουμε συμβουλές από επαληθευμένους τιπστέρ και ειδικές πηγές', step2Title: 'Φιλτραρισμένη ποιότητα', step2Desc: 'Μόνο οι υψηλότερης ποιότητας προβλέψεις περνούν', step3Title: 'Εντελώς δωρεάν', step3Desc: 'Πρόσβαση σε όλες τις συμβουλές χωρίς να πληρώσετε τίποτα', stats: { tipsters: 'Ειδικοί τιπστέρ', sources: 'Φιλτραρισμένες ειδικές πηγές', free: 'Δωρεάν για εσάς' } },
  browse: { title: 'Περιήγηση ανά άθλημα', browseButton: 'Δείτε συμβουλές' },
  expertPicks: { badge: 'Συνδυαστικές επιλογές ειδικών', title: 'Σε τι στοιχηματίζουμε', description: 'Θέλετε να μάθετε σε τι στοιχηματίζει η ομάδα ειδικών μας; Αποκτήστε αποκλειστική πρόσβαση στις premium συνδυαστικές συμβουλές μας για μόλις $1.', noTips: 'Δεν υπάρχουν διαθέσιμες premium συμβουλές αυτή τη στιγμή. Ελέγξτε ξανά σύντομα!', selectionsLabel: 'επιλογές', oddsLabel: 'συνδυασμένες αποδόσεις', combinedOdds: 'Συνδυασ��ένες αποδόσεις', unlockButton: 'Ξεκλείδωμα για $1', unlockTitle: 'Η {sheetName} συνδυαστική συμβουλή μας', revealNote: 'Μόλις αποκαλυφθεί, παραμένει ορατή μέχρι την επόμενη συμβουλή', howItWorksTitle: 'Πώς λειτουργεί:', howItWorksDesc: 'Για μόλις $1 ανά συνδυαστικό, ξεκλειδώστε το πολλαπλό στοίχημα του ειδικού μας. Κάθε συνδυαστικό συνδυάζει πολλαπλές επιλογές για μεγαλύτερες πιθανές αποδόσεις.' },
  sportTips: { event: 'Εκδήλωση', market: 'Αγορά', pick: 'Επιλογή', odds: 'Αποδόσεις', noTips: 'Ευχαριστούμε για την υπομονή σας! Συλλέγουμε τις καλύτερες συμβουλές για αυτό το άθλημα. Ελέγξτε ξανά σύντομα.' },
  footer: { company: 'Εταιρεία', sports: 'Αθλήματα', account: 'Λογαριασμός', howItWorks: 'Πώς λειτουργεί', terms: 'Όροι υπηρεσίας', privacy: 'Πολιτική απορρήτου', signUp: 'Δωρεάν εγγραφή', logIn: 'Σύνδεση', forgot: 'Ξεχάσατε τον κωδικό', tagline: 'Ο πιο έξυπνος τρόπος να λάβετε συμβουλές αθλητικού στοιχηματισμού. Επιμελημένο από εκατοντάδες ειδικούς, δωρεάν για όλους.', disclaimer: 'Στοιχηματίστε υπεύθυνα. Το στοίχημα ενέχει κινδύνους. 18+.' },
  auth: { signUpTitle: 'Δημιουργήστε τον δωρεάν λογαριασμό σας', logInTitle: 'Συνδεθείτε στο RiskNil', forgotTitle: 'Επαναφορά κωδικού πρόσβασης', email: 'Email', password: 'Κωδικός', confirmPassword: 'Επιβεβαίωση κωδικού', createAccount: 'Δημιουργία λογαριασμού', signIn: 'Σύνδεση', resetPassword: 'Επαναφορά κωδικού', backToLogin: 'Πίσω στη σύνδεση' },
  cta: { title: 'Έτοιμοι να στοιχηματίζετε πιο έξυπνα;', description: 'Ενταχθείτε σε χιλιάδες παίκτες που ήδη χρησιμοποιούν το RiskNil. Είναι δωρεάν — πάντα.', createAccount: 'Δημιουργήστε τον δωρεάν λογαριασμό σας', seeHow: 'Δείτε πώς λειτουργεί' },
}

const pl: Translations = {
  navbar: { sports: 'Sport', howItWorks: 'Jak to działa', expertPicks: 'Typy ekspertów', training: 'Profesjonalne Szkolenie Bukmacherskie', signUp: 'Darmowa rejestracja', logIn: 'Zaloguj się' },
  hero: { title: 'Darmowe typy bukmacherskie od ekspertów', subtitle: 'Otrzymuj najlepsze typy bukmacherskie od ekspertów — Za darmo', description: 'Po co spędzać godziny na niewiarygodnych stronach z typami lub płacić za wątpliwe typy? Zbieramy typy z setek eksperckich źródeł i dostarczamy tylko najwyższej jakości typy — całkowicie za darmo.', startButton: 'Zacznij otrzymywać darmowe typy', learnButton: 'Zobacz jak to działa' },
  howItWorks: { title: 'Jak to działa', description: 'Otrzymuj eksperckie typy w trzech prostych krokach', step1Title: 'Setki eksperckich źródeł', step1Desc: 'Wybieramy typy od zweryfikowanych typerów i eksperckich źródeł', step2Title: 'Filtrowane pod kątem jakości', step2Desc: 'Tylko najwyższej jakości prognozy przechodzą przez filtr', step3Title: 'Całkowicie za darmo', step3Desc: 'Dostęp do wszystkich typów bez płacenia', stats: { tipsters: 'Eksperci typerzy', sources: 'Przefiltrowane eksperckie źródła', free: 'Za darmo dla Ciebie' } },
  browse: { title: 'Przeglądaj według sportu', browseButton: 'Zobacz typy' },
  expertPicks: { badge: 'Premium typy ekspertów', title: 'Na co stawiamy', description: 'Chcesz wiedzieć, na co stawia nasz zespół ekspertów? Uzyskaj ekskluzywny dostęp do naszych premium typów akumulatorowych za jedyne $1.', noTips: 'Brak dostępnych typów premium w tej chwili. Wróć wkrótce!', selectionsLabel: 'wybory', oddsLabel: 'łączne kursy', combinedOdds: 'Łączne kursy', unlockButton: 'Odblokuj za $1', unlockTitle: 'Nasz typ akumulatorowy {sheetName}', revealNote: 'Po ujawnieniu pozostaje widoczny do następnego typu', howItWorksTitle: 'Jak to działa:', howItWorksDesc: 'Za jedyne $1 za akumulator odblokujesz wielokrotny zakład naszego eksperta. Każdy akumulator łączy wiele typów dla większych potencjalnych wygranych.' },
  sportTips: { event: 'Wydarzenie', market: 'Rynek', pick: 'Typ', odds: 'Kursy', noTips: 'Dziękujemy za cierpliwość! Zbieramy najlepsze typy dla tego sportu. Wróć wkrótce.' },
  footer: { company: 'Firma', sports: 'Sport', account: 'Konto', howItWorks: 'Jak to działa', terms: 'Regulamin', privacy: 'Polityka prywatności', signUp: 'Darmowa rejestracja', logIn: 'Zaloguj się', forgot: 'Zapomniałem hasła', tagline: 'Najinteligentniejszy sposób na uzyskanie porad dotyczących zakładów sportowych. Wybierane przez setki ekspertów, bezpłatne dla wszystkich.', disclaimer: 'Obstawiaj odpowiedzialnie. Zakłady wiążą się z ryzykiem. 18+.' },
  auth: { signUpTitle: 'Utwórz darmowe konto', logInTitle: 'Zaloguj się do RiskNil', forgotTitle: 'Zresetuj hasło', email: 'Email', password: 'Hasło', confirmPassword: 'Potwierdź hasło', createAccount: 'Utwórz konto', signIn: 'Zaloguj się', resetPassword: 'Zresetuj hasło', backToLogin: 'Powrót do logowania' },
  cta: { title: 'Gotowy na mądrzejsze obstawianie?', description: 'Dołącz do tysięcy graczy, którzy już używają RiskNil. To darmowe — zawsze.', createAccount: 'Utwórz darmowe konto', seeHow: 'Zobacz jak to działa' },
}

const no: Translations = {
  navbar: { sports: 'Sport', howItWorks: 'Slik fungerer det', expertPicks: 'Eksperttips', training: 'Profesjonell Bettingopplæring', signUp: 'Registrer gratis', logIn: 'Logg inn' },
  hero: { title: 'Gratis eksperttips for betting', subtitle: 'Få de beste bettingtipsene fra eksperter — Gratis', description: 'Hvorfor bruke timer på upålitelige tipsnettsteder eller betale for tvilsomme tips? Vi samler tips fra hundrevis av ekspertkilder og leverer kun de høyeste kvalitetstipsene — helt gratis.', startButton: 'Begynn å få gratis tips', learnButton: 'Se hvordan det fungerer' },
  howItWorks: { title: 'Slik fungerer det', description: 'Få eksperttips i tre enkle trinn', step1Title: 'Hundrevis av ekspertkilder', step1Desc: 'Vi velger tips fra verifiserte tipsere og ekspertkilder', step2Title: 'Kvalitetsfiltrert', step2Desc: 'Kun de høyeste kvalitetsprognosene kommer gjennom', step3Title: 'Helt gratis', step3Desc: 'Tilgang til alle tips uten å betale en krone', stats: { tipsters: 'Eksperttipsere', sources: 'Filtrerte ekspertkilder', free: 'Gratis for deg' } },
  browse: { title: 'Bla gjennom etter sport', browseButton: 'Se tips' },
  expertPicks: { badge: 'Premium eksperttips', title: 'Hva vi satser på', description: 'Vil du vite hva ekspertteamet vårt satser på? Få eksklusiv tilgang til våre premium akkumulatortips for bare $1.', noTips: 'Ingen premium tips tilgjengelig akkurat nå. Kom tilbake snart!', selectionsLabel: 'valg', oddsLabel: 'kombinerte odds', combinedOdds: 'Kombinerte odds', unlockButton: 'Lås opp for $1', unlockTitle: 'Vårt {sheetName} akkumulatortips', revealNote: 'Når det er avslørt, forblir det synlig til neste tips', howItWorksTitle: 'Slik fungerer det:', howItWorksDesc: 'For bare $1 per akkumulator låser du opp ekspertens multi-spill. Hver akkumulator kombinerer flere tips for større potensielle gevinster.' },
  sportTips: { event: 'Arrangement', market: 'Marked', pick: 'Tips', odds: 'Odds', noTips: 'Takk for tålmodigheten! Vi samler de beste tipsene for denne sporten. Kom tilbake snart.' },
  footer: { company: 'Selskap', sports: 'Sport', account: 'Konto', howItWorks: 'Slik fungerer det', terms: 'Vilkår for bruk', privacy: 'Personvernregler', signUp: 'Registrer gratis', logIn: 'Logg inn', forgot: 'Glemt passord', tagline: 'Den smarteste måten å få sportsbettingtips på. Kuratert fra hundrevis av eksperter, gratis for alle.', disclaimer: 'Spill ansvarlig. Betting innebærer risiko. 18+.' },
  auth: { signUpTitle: 'Opprett din gratis konto', logInTitle: 'Logg inn på RiskNil', forgotTitle: 'Tilbakestill passordet ditt', email: 'E-post', password: 'Passord', confirmPassword: 'Bekreft passord', createAccount: 'Opprett konto', signIn: 'Logg inn', resetPassword: 'Tilbakestill passord', backToLogin: 'Tilbake til innlogging' },
  cta: { title: 'Klar for å vedde smartere?', description: 'Bli med tusenvis av spillere som allerede bruker RiskNil. Det er gratis — alltid.', createAccount: 'Opprett din gratis konto', seeHow: 'Se hvordan det fungerer' },
}

const fi: Translations = {
  navbar: { sports: 'Urheilu', howItWorks: 'Näin se toimii', expertPicks: 'Asiantuntijavalinnat', training: 'Ammattimainen Vedonlyöntikoulutus', signUp: 'Rekisteröidy ilmaiseksi', logIn: 'Kirjaudu sisään' },
  hero: { title: 'Ilmaiset asiantuntijavihjeet vedonlyöntiin', subtitle: 'Saa parhaat vedonlyöntivihjeet asiantuntijoilta — Ilmaiseksi', description: 'Miksi viettää tunteja epäluotettavilla vihjaussivustoilla tai maksaa kyseenalaisista vihjeistä? Keräämme vihjeit�� sadoilta asiantuntijalähteiltä ja toimitamme vain korkeimman laadun vihjeet — täysin ilmaiseksi.', startButton: 'Aloita ilmaisten vihjeiden saaminen', learnButton: 'Katso miten se toimii' },
  howItWorks: { title: 'Näin se toimii', description: 'Saa asiantuntijavihjeitä kolmessa yksinkertaisessa vaiheessa', step1Title: 'Satoja asiantuntijalähteitä', step1Desc: 'Valitsemme vihjeitä varmennetuilta vihjaajilta ja asiantuntijalähteiltä', step2Title: 'Laatusuodatettu', step2Desc: 'Vain korkeimman laadun ennusteet pääsevät läpi', step3Title: 'Täysin ilmaista', step3Desc: 'Pääsy kaikkiin vihjeisiin maksamatta mitään', stats: { tipsters: 'Asiantuntijavihjaajat', sources: 'Suodatetut asiantuntijalähteet', free: 'Ilmaista sinulle' } },
  browse: { title: 'Selaa urheilun mukaan', browseButton: 'Näytä vihjeet' },
  expertPicks: { badge: 'Premium asiantuntijavalinnat', title: 'Mihin panostamme', description: 'Haluatko tietää mihin asiantuntijatiimimme panostaa? Saa yksinoikeudella pääsy premium-yhdistelmävihjeisiimme vain $1:lla.', noTips: 'Ei premium-vihjeitä saatavilla juuri nyt. Tarkista pian uudelleen!', selectionsLabel: 'valinnat', oddsLabel: 'yhdistetyt kertoimet', combinedOdds: 'Yhdistetyt kertoimet', unlockButton: 'Avaa $1:lla', unlockTitle: 'Meidän {sheetName} yhdistelmävihjeemme', revealNote: 'Kun paljastettu, pysyy näkyvissä seuraavaan vihjeeseen asti', howItWorksTitle: 'Näin se toimii:', howItWorksDesc: 'Vain $1:lla per yhdistelmä avaat asiantuntijamme monivalintavedon. Jokainen yhdistelmä yhdistää useita vihjeitä suurempien mahdollisten voittojen saamiseksi.' },
  sportTips: { event: 'Tapahtuma', market: 'Markkina', pick: 'Vihje', odds: 'Kertoimet', noTips: 'Kiitos kärsivällisyydestäsi! Keräämme parhaita vihjeitä tälle urheilulle. Tarkista pian uudelleen.' },
  footer: { company: 'Yritys', sports: 'Urheilu', account: 'Tili', howItWorks: 'Näin se toimii', terms: 'Käyttöehdot', privacy: 'Tietosuojakäytäntö', signUp: 'Rekisteröidy ilmaiseksi', logIn: 'Kirjaudu sisään', forgot: 'Unohdin salasanan', tagline: 'Älykkäin tapa saada urheiluvedonlyöntivinkkejä. Kuratoitu sadoilta asiantuntijoilta, ilmainen kaikille.', disclaimer: 'Lyö vetoa vastuullisesti. Vedonlyöntiin liittyy riskejä. 18+.' },
  auth: { signUpTitle: 'Luo ilmainen tilisi', logInTitle: 'Kirjaudu RiskNiliin', forgotTitle: 'Palauta salasanasi', email: 'Sähköposti', password: 'Salasana', confirmPassword: 'Vahvista salasana', createAccount: 'Luo tili', signIn: 'Kirjaudu sisään', resetPassword: 'Palauta salasana', backToLogin: 'Takaisin kirjautumiseen' },
  cta: { title: 'Valmis lyömään vetoa fiksummin?', description: 'Liity tuhansien pelaajien joukkoon jotka jo käyttävät RiskNiliä. Se on ilmaista — aina.', createAccount: 'Luo ilmainen tilisi', seeHow: 'Katso miten se toimii' },
}

const ro: Translations = {
  navbar: { sports: 'Sporturi', howItWorks: 'Cum funcționează', expertPicks: 'Sfaturi experți', training: 'Instruire Profesională Pariuri', signUp: 'Înregistrare gratuită', logIn: 'Autentificare' },
  hero: { title: 'Sfaturi gratuite de pariuri de la experți', subtitle: 'Obțineți cele mai bune sfaturi de pariuri de la experți — Gratuit', description: 'De ce să petreceți ore pe site-uri de sfaturi nesigure sau să plătiți pentru sfaturi îndoielnice? Colectăm sfaturi de la sute de surse de experți și livrăm doar cele mai înalte sfaturi de calitate — complet gratuit.', startButton: 'Începeți să primiți sfaturi gratuite', learnButton: 'Vedeți cum funcționează' },
  howItWorks: { title: 'Cum funcționează', description: 'Obțineți sfaturi de la experți în trei pași simpli', step1Title: 'Sute de surse de experți', step1Desc: 'Selectăm sfaturi de la tipșteri verificați și surse de experți', step2Title: 'Filtrat pentru calitate', step2Desc: 'Doar predicțiile de cea mai înaltă calitate trec', step3Title: 'Complet gratuit', step3Desc: 'Acces la toate sfaturile fără a plăti nimic', stats: { tipsters: 'Tipșteri experți', sources: 'Surse de experți filtrate', free: 'Gratuit pentru tine' } },
  browse: { title: 'Răsfoiți după sport', browseButton: 'Vezi sfaturi' },
  expertPicks: { badge: 'Sfaturi premium de experți', title: 'Pe ce pariem', description: 'Vrei să știi pe ce pariază echipa noastră de experți? Obține acces exclusiv la sfaturile noastre premium acumulator pentru doar $1.', noTips: 'Niciun sfat premium disponibil momentan. Reveniți curând!', selectionsLabel: 'selecții', oddsLabel: 'cote combinate', combinedOdds: 'Cote combinate', unlockButton: 'Deblochează pentru $1', unlockTitle: 'Sfatul nostru acumulator {sheetName}', revealNote: 'Odată dezvăluit, rămâne vizibil până la următorul sfat', howItWorksTitle: 'Cum funcționează:', howItWorksDesc: 'Pentru doar $1 per acumulator, deblocați pariul multiplu al expertului nostru. Fiecare acumulator combină mai multe selecții pentru câștiguri potențiale mai mari.' },
  sportTips: { event: 'Eveniment', market: 'Piață', pick: 'Sfat', odds: 'Cote', noTips: 'Mulțumim pentru răbdare! Colectăm cele mai bune sfaturi pentru acest sport. Reveniți curând.' },
  footer: { company: 'Companie', sports: 'Sporturi', account: 'Cont', howItWorks: 'Cum funcționează', terms: 'Termeni și condiții', privacy: 'Politica de confidențialitate', signUp: 'Înregistrare gratuită', logIn: 'Autentificare', forgot: 'Am uitat parola', tagline: 'Cel mai inteligent mod de a obține sfaturi pentru pariuri sportive. Selectate de sute de experți, gratuite pentru toți.', disclaimer: 'Pariază responsabil. Pariurile implică riscuri. 18+.' },
  auth: { signUpTitle: 'Creează-ți contul gratuit', logInTitle: 'Autentifică-te în RiskNil', forgotTitle: 'Resetează-ți parola', email: 'Email', password: 'Parolă', confirmPassword: 'Confirmă parola', createAccount: 'Creează cont', signIn: 'Autentificare', resetPassword: 'Resetează parola', backToLogin: 'Înapoi la autentificare' },
  cta: { title: 'Ești gata să pariezi mai inteligent?', description: 'Alătură-te miilor de jucători care folosesc deja RiskNil. Este gratuit — mereu.', createAccount: 'Creează-ți contul gratuit', seeHow: 'Vezi cum funcționează' },
}

const cs: Translations = {
  navbar: { sports: 'Sport', howItWorks: 'Jak to funguje', expertPicks: 'Tipy expertů', training: 'Profesionální Sázkové Školení', signUp: 'Registrace zdarma', logIn: 'Přihlásit se' },
  hero: { title: 'Bezplatné sázkové tipy od expertů', subtitle: 'Získejte nejlepší sázkové tipy od expertů — Zdarma', description: 'Proč trávit hodiny na nespolehlivých tipovacích stránkách nebo platit za pochybné tipy? Shromažďujeme tipy ze stovek expertních zdrojů a poskytujeme pouze ty nejkvalitnější tipy — zcela zdarma.', startButton: 'Začněte dostávat bezplatné tipy', learnButton: 'Podívejte se jak to funguje' },
  howItWorks: { title: 'Jak to funguje', description: 'Získejte expertní tipy ve třech jednoduchých krocích', step1Title: 'Stovky expertních zdrojů', step1Desc: 'Vybíráme tipy od ověřených tipérů a expertních zdrojů', step2Title: 'Filtrováno pro kvalitu', step2Desc: 'Projdou pouze nejkvalitnější předpovědi', step3Title: 'Zcela zdarma', step3Desc: 'Přístup ke všem tipům bez placení', stats: { tipsters: 'Expertní tipéři', sources: 'Filtrované expertní zdroje', free: 'Zdarma pro vás' } },
  browse: { title: 'Procházet podle sportu', browseButton: 'Zobrazit tipy' },
  expertPicks: { badge: 'Premium tipy expertů', title: 'Na co sázíme', description: 'Chcete vědět, na co sází náš tým expertů? Získejte exkluzivní přístup k našim premium akumulátorovým tipům za pouhý $1.', noTips: 'Žádné premium tipy momentálně nejsou k dispozici. Zkontrolujte brzy znovu!', selectionsLabel: 'výběry', oddsLabel: 'kombinované kurzy', combinedOdds: 'Kombinované kurzy', unlockButton: 'Odemknout za $1', unlockTitle: 'Náš {sheetName} akumulátorový tip', revealNote: 'Po odhalení zůstává viditelný do dalšího tipu', howItWorksTitle: 'Jak to funguje:', howItWorksDesc: 'Za pouhý $1 za akumulátor odemknete vícenásobnou sázku našeho experta. Každý akumulátor kombinuje více tipů pro větší potenciální výhry.' },
  sportTips: { event: 'Událost', market: 'Trh', pick: 'Tip', odds: 'Kurzy', noTips: 'Děkujeme za trpělivost! Sbíráme nejlepší tipy pro tento sport. Zkontrolujte brzy znovu.' },
  footer: { company: 'Společnost', sports: 'Sport', account: 'Účet', howItWorks: 'Jak to funguje', terms: 'Podmínky služby', privacy: 'Zásady ochrany osobních údajů', signUp: 'Registrace zdarma', logIn: 'Přihlásit se', forgot: 'Zapomenuté heslo', tagline: 'Nejchytřejší způsob, jak získat tipy na sportovní sázení. Vybráno od stovek expertů, zdarma pro všechny.', disclaimer: 'Sázejte zodpovědně. Sázení zahrnuje riziko. 18+.' },
  auth: { signUpTitle: 'Vytvořte si bezplatný účet', logInTitle: 'Přihlaste se do RiskNil', forgotTitle: 'Obnovte své heslo', email: 'E-mail', password: 'Heslo', confirmPassword: 'Potvrďte heslo', createAccount: 'Vytvořit účet', signIn: 'Přihlásit se', resetPassword: 'Obnovit heslo', backToLogin: 'Zpět k přihlášení' },
  cta: { title: 'Jste připraveni sázet chytřeji?', description: 'Připojte se k tisícům hráčů, kteří již používají RiskNil. Je to zdarma — vždy.', createAccount: 'Vytvořte si bezplatný účet', seeHow: 'Podívejte se jak to funguje' },
}

const sw: Translations = {
  navbar: { sports: 'Michezo', howItWorks: 'Inavyofanya kazi', expertPicks: 'Vidokezo vya wataalamu', training: 'Mafunzo ya Kitaalamu ya Kubeti', signUp: 'Jiandikishe bure', logIn: 'Ingia' },
  hero: { title: 'Vidokezo vya kubet bure kutoka kwa wataalamu', subtitle: 'Pata vidokezo bora vya kubet kutoka kwa wataalamu — Bure', description: 'Kwa nini kutumia masaa kwenye tovuti zisizotegemewa au kulipa vidokezo vya mashaka? Tunakusanya vidokezo kutoka mamia ya vyanzo vya wataalamu na kutoa vidokezo vya ubora wa juu tu — bure kabisa.', startButton: 'Anza kupata vidokezo bure', learnButton: 'Tazama inavyofanya kazi' },
  howItWorks: { title: 'Inavyofanya kazi', description: 'Pata vidokezo vya wataalamu kwa hatua tatu rahisi', step1Title: 'Mamia ya vyanzo vya wataalamu', step1Desc: 'Tunachagua vidokezo kutoka kwa watoa vidokezo walioidhinishwa na vyanzo vya wataalamu', step2Title: 'Kuchujwa kwa ubora', step2Desc: 'Utabiri wa ubora wa juu tu ndio unapita', step3Title: 'Bure kabisa', step3Desc: 'Fikia vidokezo vyote bila kulipa', stats: { tipsters: 'Watoa vidokezo wataalamu', sources: 'Vyanzo vya wataalamu vilivyochujwa', free: 'Bure kwako' } },
  browse: { title: 'Vinjari kwa mchezo', browseButton: 'Tazama vidokezo' },
  expertPicks: { badge: 'Vidokezo vya premium vya wataalamu', title: 'Tunabeti nini', description: 'Unataka kujua timu yetu ya wataalamu inabeti nini? Pata ufikiaji wa kipekee kwa vidokezo vyetu vya premium accumulator kwa $1 tu.', noTips: 'Hakuna vidokezo vya premium vilivyopo kwa sasa. Rudi tena hivi karibuni!', selectionsLabel: 'uchaguzi', oddsLabel: 'uwiano uliounganishwa', combinedOdds: 'Uwiano uliounganishwa', unlockButton: 'Fungua kwa $1', unlockTitle: 'Kidokezo chetu cha {sheetName} accumulator', revealNote: 'Mara ikifunuliwa, inabaki inayoonekana hadi kidokezo kifuatacho', howItWorksTitle: 'Inavyofanya kazi:', howItWorksDesc: 'Kwa $1 tu kwa kila accumulator, fungua dau la uchaguzi mwingi la mtaalamu wetu. Kila accumulator inachanganya vidokezo vingi kwa faida kubwa zaidi.' },
  sportTips: { event: 'Tukio', market: 'Soko', pick: 'Kidokezo', odds: 'Uwiano', noTips: 'Asante kwa uvumilivu wako! Tunakusanya vidokezo bora kwa mchezo huu. Rudi tena hivi karibuni.' },
  footer: { company: 'Kampuni', sports: 'Michezo', account: 'Akaunti', howItWorks: 'Inavyofanya kazi', terms: 'Masharti ya huduma', privacy: 'Sera ya faragha', signUp: 'Jiandikishe bure', logIn: 'Ingia', forgot: 'Nimesahau nenosiri', tagline: 'Njia ya busara zaidi ya kupata vidokezo vya kubet michezo. Vilivyochaguliwa kutoka kwa mamia ya wataalamu, bure kwa wote.', disclaimer: 'Tafadhali bet kwa uwajibikaji. Kubet kuna hatari. 18+.' },
  auth: { signUpTitle: 'Unda akaunti yako ya bure', logInTitle: 'Ingia kwenye RiskNil', forgotTitle: 'Weka upya nenosiri lako', email: 'Barua pepe', password: 'Nenosiri', confirmPassword: 'Thibitisha nenosiri', createAccount: 'Unda akaunti', signIn: 'Ingia', resetPassword: 'Weka upya nenosiri', backToLogin: 'Rudi kwenye kuingia' },
  cta: { title: 'Uko tayari kubeti kwa busara zaidi?', description: 'Jiunge na maelfu ya wachezaji ambao tayari wanatumia RiskNil. Ni bure — daima.', createAccount: 'Unda akaunti yako ya bure', seeHow: 'Tazama inavyofanya kazi' },
}

const af: Translations = {
  navbar: { sports: 'Sport', howItWorks: 'Hoe dit werk', expertPicks: 'Kenner wenke', training: 'Professionele Wedderyopleiding', signUp: 'Registreer gratis', logIn: 'Meld aan' },
  hero: { title: 'Gratis weddery wenke van kenners', subtitle: 'Kry die beste weddery wenke van kenners — Gratis', description: 'Waarom ure spandeer op onbetroubare wenke-webwerwe of betaal vir twyfelagtige wenke? Ons versamel wenke van honderde kennerbronne en lewer slegs die hoogste kwaliteit wenke — heeltemal gratis.', startButton: 'Begin om gratis wenke te kry', learnButton: 'Sien hoe dit werk' },
  howItWorks: { title: 'Hoe dit werk', description: 'Kry kenner wenke in drie eenvoudige stappe', step1Title: 'Honderde kennerbronne', step1Desc: 'Ons kies wenke van geverifieerde tipsters en kennerbronne', step2Title: 'Kwaliteit gefiltreer', step2Desc: 'Slegs die hoogste kwaliteit voorspellings kom deur', step3Title: 'Heeltemal gratis', step3Desc: 'Toegang tot alle wenke sonder om te betaal', stats: { tipsters: 'Kenner tipsters', sources: 'Gefiltreerde kennerbronne', free: 'Gratis vir jou' } },
  browse: { title: 'Blaai volgens sport', browseButton: 'Sien wenke' },
  expertPicks: { badge: 'Premium kenner wenke', title: 'Waarop ons wed', description: 'Wil jy weet waarop ons kennerspan wed? Kry eksklusiewe toegang tot ons premium akkumulator wenke vir slegs $1.', noTips: 'Geen premium wenke tans beskikbaar nie. Kom gou terug!', selectionsLabel: 'keuses', oddsLabel: 'gekombineerde odds', combinedOdds: 'Gekombineerde odds', unlockButton: 'Ontsluit vir $1', unlockTitle: 'Ons {sheetName} akkumulator wenk', revealNote: 'Sodra ontbloot, bly dit sigbaar tot die volgende wenk', howItWorksTitle: 'Hoe dit werk:', howItWorksDesc: 'Vir slegs $1 per akkumulator ontsluit jy ons kenner se multi-weddenskap. Elke akkumulator kombineer veelvuldige wenke vir groter potensiële opbrengste.' },
  sportTips: { event: 'Gebeurtenis', market: 'Mark', pick: 'Wenk', odds: 'Odds', noTips: 'Dankie vir jou geduld! Ons versamel die beste wenke vir hierdie sport. Kom gou terug.' },
  footer: { company: 'Maatskappy', sports: 'Sport', account: 'Rekening', howItWorks: 'Hoe dit werk', terms: 'Diensvoorwaardes', privacy: 'Privaatheidsbeleid', signUp: 'Registreer gratis', logIn: 'Meld aan', forgot: 'Wagwoord vergeet', tagline: 'Die slimste manier om sportweddery wenke te kry. Gekies uit honderde kenners, gratis vir almal.', disclaimer: 'Wed asseblief verantwoordelik. Weddery behels risiko. 18+.' },
  auth: { signUpTitle: 'Skep jou gratis rekening', logInTitle: 'Meld aan by RiskNil', forgotTitle: 'Herstel jou wagwoord', email: 'E-pos', password: 'Wagwoord', confirmPassword: 'Bevestig wagwoord', createAccount: 'Skep rekening', signIn: 'Meld aan', resetPassword: 'Herstel wagwoord', backToLogin: 'Terug na aanmelding' },
  cta: { title: 'Gereed om slimmer te wed?', description: 'Sluit aan by duisende spelers wat reeds RiskNil gebruik. Dit is gratis — altyd.', createAccount: 'Skep jou gratis rekening', seeHow: 'Sien hoe dit werk' },
}

const zu: Translations = {
  navbar: { sports: 'Ezemidlalo', howItWorks: 'Isebenza kanjani', expertPicks: 'Amathiphu ochwepheshe', training: 'Ukuqeqeshwa Kwababheja Abaqeqeshiwe', signUp: 'Bhalisa mahhala', logIn: 'Ngena' },
  hero: { title: 'Amathiphu okubheja amahhala achwepheshe', subtitle: 'Thola amathiphu angcono kakhulu okubheja kuchwepheshe — Mahhala', description: 'Kungani uchitha amahora kumawebhusayithi angathembekile noma ukhokhe amathiphu angabazeki? Siqoqa amathiphu kumakhulu emithombo yochwepheshe futhi sikhipha amathiphu asezingeni eliphezulu kuphela — mahhala ngokuphelele.', startButton: 'Qala ukuthola amathiphu amahhala', learnButton: 'Bona isebenza kanjani' },
  howItWorks: { title: 'Isebenza kanjani', description: 'Thola amathiphu ochwepheshe ngezinyathelo ezintathu ezilula', step1Title: 'Amakhulu emithombo yochwepheshe', step1Desc: 'Sikhetha amathiphu kubantu abafanele nabakhiqizi bochwepheshe', step2Title: 'Ikhwalithi ihluziwe', step2Desc: 'Ukubikezela kwekhwalithi ephezulu kuphela okudlulayo', step3Title: 'Mahhala ngokuphelele', step3Desc: 'Finyelela kuwo wonke amathiphu ngaphandle kokukhokha', stats: { tipsters: 'Abaqondisi bochwepheshe', sources: 'Imithombo yochwepheshe ehluziwe', free: 'Mahhala kuwe' } },
  browse: { title: 'Phequlula ngokwezemidlalo', browseButton: 'Bona amathiphu' },
  expertPicks: { badge: 'Amathiphu ochwepheshe asezingeni eliphezulu', title: 'Sibheja ini', description: 'Ufuna ukwazi ukuthi ithimba lethu lochwepheshe libheja ini? Thola ukufinyelela okukhethekile kumathiphu ethu ahlangene amahle ngo-$1 nje kuphela.', noTips: 'Awekho amathiphu asezingeni eliphezulu manje. Buya maduzane!', selectionsLabel: 'ukukhetha', oddsLabel: 'amathuba ahlanganisiwe', combinedOdds: 'Amathuba ahlanganisiwe', unlockButton: 'Vula ngo-$1', unlockTitle: 'Ithiphu lethu le-accumulator ye-{sheetName}', revealNote: 'Uma isidaluliwe, ihlala ibonakala kuze kube yithiphu elilandelayo', howItWorksTitle: 'Isebenza kanjani:', howItWorksDesc: 'Ngo-$1 nje kuphela nge-accumulator, vula ukubheja okuningi kochwepheshe wethu. I-accumulator ngayinye ihlanganisa amathiphu amaningi ukuze uthole inzuzo enkulu.' },
  sportTips: { event: 'Umcimbi', market: 'Imakethe', pick: 'Ithiphu', odds: 'Amathuba', noTips: 'Siyabonga ngokubekezela kwakho! Siqoqa amathiphu angcono kakhulu kulo mdlalo. Buya maduzane.' },
  footer: { company: 'Inkampani', sports: 'Ezemidlalo', account: 'I-akhawunti', howItWorks: 'Isebenza kanjani', terms: 'Imibandela yesevisi', privacy: 'Inqubomgomo yobumfihlo', signUp: 'Bhalisa mahhala', logIn: 'Ngena', forgot: 'Iphasiwedi ikhohliwe', tagline: 'Indlela ehlakaniphile kakhulu yokuthola amathiphu okubheja ezemidlalo. Ekhethwe kuchwepheshe abayizinkulungwane, mahhala kubo bonke.', disclaimer: 'Sicela ubheje ngokuzimisela. Ukubheja kunobungozi. 18+.' },
  auth: { signUpTitle: 'Dala i-akhawunti yakho yamahhala', logInTitle: 'Ngena ku-RiskNil', forgotTitle: 'Setha kabusha iphasiwedi yakho', email: 'I-imeyili', password: 'Iphasiwedi', confirmPassword: 'Qinisekisa iphasiwedi', createAccount: 'Dala i-akhawunti', signIn: 'Ngena', resetPassword: 'Setha kabusha iphasiwedi', backToLogin: 'Buyela ekungeneni' },
  cta: { title: 'Ukulungele ukubheja ngokuhlakanipha?', description: 'Joyina izinkulungwane zabadlali abasebenzisa kakade i-RiskNil. Kumahhala — njalo.', createAccount: 'Dala i-akhawunti yakho yamahhala', seeHow: 'Bona isebenza kanjani' },
}

const xh: Translations = {
  navbar: { sports: 'Ezemidlalo', howItWorks: 'Isebenza njani', expertPicks: 'Amacebiso oongcali', training: 'Uqeqesho Lobugcisa Bokubheja', signUp: 'Bhalisa simahla', logIn: 'Ngena' },
  hero: { title: 'Amacebiso okubheja asimahla angcali', subtitle: 'Fumana amacebiso angcono kakhulu okubheja kubantu abangcali — Simahla', description: 'Kutheni uchitha iiyure kwiwebhusayithi ezingathembekanga okanye uhlawula amacebiso angaqinisekanga? Siqokelela amacebiso kumakhulu emithombo yabantu abangcali kwaye sinikezela kuphela amacebiso asezingeni eliphezulu — simahla ngokupheleleyo.', startButton: 'Qala ukufumana amacebiso asimahla', learnButton: 'Bona isebenza njani' },
  howItWorks: { title: 'Isebenza njani', description: 'Fumana amacebiso aangcali ngamanyathelo amathathu alula', step1Title: 'Amakhulu emithombo yangcali', step1Desc: 'Sikhetha amacebiso kubaniki beengcebiso abaqinisekisiweyo nemithombo yangcali', step2Title: 'Ifilithiwe ngomgangatho', step2Desc: 'Kuphela iziqikelelo zomgangatho ophezulu ezidlulayo', step3Title: 'Simahla ngokupheleleyo', step3Desc: 'Fumana onke amacebiso ngaphandle kokuhlawula', stats: { tipsters: 'Oochwephesha beengcebiso', sources: 'Imithombo yangcali efilithiweyo', free: 'Simahla kuwe' } },
  browse: { title: 'Khangela ngezemidlalo', browseButton: 'Bona amacebiso' },
  expertPicks: { badge: 'Amacebiso angcali asezingeni eliphezulu', title: 'Sibheja ntoni', description: 'Ufuna ukwazi ukuba iqela lethu labantu abangcali libheja ntoni? Fumana ukukwazi ukufikelela kumacebiso ethu a-accumulator asezingeni eliphezulu nge-$1 kuphela.', noTips: 'Akukho macebiso asezingeni eliphezulu ngoku. Buya kwakhona!', selectionsLabel: 'ukhetho', oddsLabel: 'amathuba adityanisiweyo', combinedOdds: 'Amathuba adityanisiweyo', unlockButton: 'Vula nge-$1', unlockTitle: 'Icebiso lethu le-accumulator ye-{sheetName}', revealNote: 'Xa idulisiwe, ihlala ibonakala de kube licebiso elilandelayo', howItWorksTitle: 'Isebenza njani:', howItWorksDesc: 'Nge-$1 kuphela nge-accumulator, vula ukubheja okuninzi komntu ongcali wethu. I-accumulator nganye idibanisa amacebiso amaninzi ukuze ufumane inzuzo enkulu.' },
  sportTips: { event: 'Isiganeko', market: 'Imarike', pick: 'Icebiso', odds: 'Amathuba', noTips: 'Enkosi ngomonde wakho! Siqokelela amacebiso angcono kakhulu kulo mdlalo. Buya kwakhona.' },
  footer: { company: 'Inkampani', sports: 'Ezemidlalo', account: 'Iakhawunti', howItWorks: 'Isebenza njani', terms: 'Imiqathango yenkonzo', privacy: 'Umgaqo-nkqubo wobumfihlo', signUp: 'Bhalisa simahla', logIn: 'Ngena', forgot: 'Ipasiwedi ilibele', tagline: 'Eyona ndlela ikrelekrele yokufumana amacebiso okubheja ezemidlalo. Ekhethwe kubantu abangcali abamakhulu, simahla kubo bonke.', disclaimer: 'Nceda ubheje ngoxanduva. Ukubheja kubandakanya umngcipheko. 18+.' },
  auth: { signUpTitle: 'Yenza iakhawunti yakho yasimahla', logInTitle: 'Ngena ku-RiskNil', forgotTitle: 'Seta kwakhona ipasiwedi yakho', email: 'I-imeyile', password: 'Ipasiwedi', confirmPassword: 'Qinisekisa ipasiwedi', createAccount: 'Yenza iakhawunti', signIn: 'Ngena', resetPassword: 'Seta kwakhona ipasiwedi', backToLogin: 'Buyela ekungeneni' },
  cta: { title: 'Ulungile ukubheja ngobulumko?', description: 'Joyina amawaka abadlali abasebenzisa sele i-RiskNil. Isimahla — ngalo lonke ixesha.', createAccount: 'Yenza iakhawunti yakho yasimahla', seeHow: 'Bona isebenza njani' },
}

const ja: Translations = {
  navbar: { sports: 'スポーツ', howItWorks: '使い方', expertPicks: 'エキスパートピック', training: 'プロベッティングトレーニング', signUp: '無料登録', logIn: 'ログイン' },
  hero: { title: '無料のエキスパートベッティングヒント', subtitle: 'エキスパートから最高のベッティングヒントを入手 — 無料', description: '信頼できないティプスターサイトで時間を無駄にしたり、怪しいヒントにお金を払う必要はありません。何百ものエキスパートソースからヒントを集め、最高品質のヒントのみを提供します — 完全無料。', startButton: '無料ヒントを始める', learnButton: '使い方を見る' },
  howItWorks: { title: '使い方', description: '3つの簡単なステップでエキスパートヒントを入手', step1Title: '何百ものエキスパートソース', step1Desc: '検証済みティプスターとエキスパートソースからヒントを厳選', step2Title: '品質フィルター済み', step2Desc: '最高品質の予測のみが通過', step3Title: '完全無料', step3Desc: '支払いなしで全てのヒントにアクセス', stats: { tipsters: 'エキスパートティプスター', sources: 'フィルター済みエキスパートソース', free: 'あなたに無料' } },
  browse: { title: 'スポーツ別に閲覧', browseButton: 'ヒントを見る' },
  expertPicks: { badge: 'プレミアムエキスパートピック', title: '私たちが賭けているもの', description: 'エキスパートチームが何に賭けているか知りたいですか？たった$1でプレミアムアキュムレーターヒントに独占アクセス。', noTips: '現在プレミアムヒントはありません。すぐに戻ってきてください！', selectionsLabel: '選択', oddsLabel: '合計オッズ', combinedOdds: '合計オッズ', unlockButton: '$1でアンロック', unlockTitle: '私たちの{sheetName}アキュムレーターヒント', revealNote: '公開後、次のヒントまで表示されます', howItWorksTitle: '使い方：', howItWorksDesc: 'アキュムレーターごとにたった$1で、エキスパートの複数選択ベットをアンロック。各アキュムレーターは複数のヒントを組み合わせてより大きな潜在的リターンを。' },
  sportTips: { event: 'イベント', market: 'マーケット', pick: 'ピック', odds: 'オッズ', noTips: 'お待ちいただきありがとうございます！このスポーツの最高のヒントを収集中です。すぐに戻ってきてください。' },
  footer: { company: '会社', sports: 'スポーツ', account: 'アカウント', howItWorks: '使い方', terms: '利用規約', privacy: 'プライバシーポリシー', signUp: '無料登録', logIn: 'ログイン', forgot: 'パスワードを忘れた', tagline: 'スポーツベッティングのヒントを得る最も賢い方法。何百人もの専門家から厳選、すべての人に無料。', disclaimer: '責任を持ってギャンブルしてください。ベッティングにはリスクがあります。18歳以上。' },
  auth: { signUpTitle: '無料アカウントを作成', logInTitle: 'RiskNilにログイン', forgotTitle: '��スワードをリセット', email: 'メール', password: 'パスワード', confirmPassword: 'パスワードを確認', createAccount: 'アカウント作成', signIn: 'ログイン', resetPassword: 'パスワードリセット', backToLogin: 'ログインに戻る' },
  cta: { title: 'よりスマートに賭ける準備はできましたか？', description: 'すでにRiskNilを使用している数千人のプレイヤーに参加しましょう。永久無料です。', createAccount: '無料アカウントを作成', seeHow: '使い方を見る' },
}

const ko: Translations = {
  navbar: { sports: '스포츠', howItWorks: '작동 방식', expertPicks: '전문가 픽', training: '프로 베팅 트레이닝', signUp: '무료 가입', logIn: '로그인' },
  hero: { title: '무료 전문가 베팅 팁', subtitle: '전문가로부터 최고의 베팅 팁을 받으세요 — 무료', description: '신뢰할 수 없는 팁스터 사이트에서 시간을 낭비하거나 의심스러운 팁에 돈을 쓸 필요가 없습니다. 수백 개의 전문가 소스에서 팁을 수집하여 최고 품질의 팁만 제공합니다 — 완전 무료.', startButton: '무료 팁 받기 시작', learnButton: '작동 방식 보기' },
  howItWorks: { title: '작동 방식', description: '세 가지 간단한 단계로 전문가 팁 받기', step1Title: '수백 개의 전문가 소스', step1Desc: '검증된 팁스터와 전문가 소스에서 팁을 선별', step2Title: '품질 필터링', step2Desc: '최고 품질의 예측만 통과', step3Title: '완전 무료', step3Desc: '결제 없이 모든 팁에 액세스', stats: { tipsters: '전문가 팁스터', sources: '필터링된 전문가 소스', free: '무료' } },
  browse: { title: '스포츠별 검색', browseButton: '팁 보기' },
  expertPicks: { badge: '프리미엄 전문가 픽', title: '우리가 베팅하는 것', description: '전문가 팀이 무엇에 베팅하는지 알고 싶으세요? 단 $1로 프리미엄 어큐뮬레이터 팁에 독점 액세스하세요.', noTips: '현재 프리미엄 팁이 없습니다. 곧 다시 확인하세요!', selectionsLabel: '선택', oddsLabel: '결합 배당률', combinedOdds: '결합 배당률', unlockButton: '$1로 잠금 해제', unlockTitle: '우리의 {sheetName} 어큐뮬레이터 팁', revealNote: '공개되면 다음 팁까지 표시됩니다', howItWorksTitle: '작동 방식:', howItWorksDesc: '어큐뮬레이터당 단 $1로 전문가의 다중 선택 베팅을 잠금 해제하세��. 각 어큐뮬레이터는 더 큰 잠재적 수익을 위해 여러 팁을 결합합니다.' },
  sportTips: { event: '이벤트', market: '마켓', pick: '���', odds: '배당률', noTips: '기다려 주셔서 감사합니다! 이 스포츠에 대한 최고의 팁을 수집하고 있습니다. 곧 다시 확인하세요.' },
  footer: { company: '회사', sports: '스포츠', account: '계정', howItWorks: '작동 방식', terms: '서비스 약관', privacy: '개인정보 보호정책', signUp: '무료 가입', logIn: '로그인', forgot: '비밀번호 찾기', tagline: '스포츠 베팅 팁을 얻는 가장 스마트한 방법. 수백 명의 전문가가 선별, 모든 사람에게 무료.', disclaimer: '책임감 있게 도박하세요. 베팅에는 위험이 따릅니다. 18세 이상.' },
  auth: { signUpTitle: '무료 계정 만들기', logInTitle: 'RiskNil에 로그인', forgotTitle: '비밀번호 재설정', email: '이메일', password: '비밀번호', confirmPassword: '비밀번호 확인', createAccount: '계정 만들기', signIn: '로그인', resetPassword: '비밀번호 재설정', backToLogin: '로그인��로 돌아가기' },
  cta: { title: '더 스마트하게 베팅할 준비가 되셨나요?', description: '이미 RiskNil을 사용하는 수천 명의 플레이어와 함께하세요. 영원히 무료입니다.', createAccount: '무료 계정 만들기', seeHow: '작동 방식 보기' },
}

const hi: Translations = {
  navbar: { sports: 'खेल', howItWorks: 'यह कैसे काम करता है', expertPicks: 'विशेषज्ञ चयन', training: 'पेशेवर सट्टेबाजी प्रशिक्षण', signUp: 'मुफ्त साइन अप', logIn: 'लॉग इन' },
  hero: { title: 'विशेषज्ञों से मुफ्त बेटिंग टिप्स', subtitle: 'विशेषज्ञों से सर्वश्रेष्ठ बेटिंग टिप्स प्राप्त करें — मुफ्त', description: 'अविश्वसनीय टिपस्टर साइटों पर घंटों क्यों बिताएं या संदिग्ध टिप्स के लिए भुगतान करें? हम सैकड़ों विशेषज्ञ स्रोतों से टिप्स एकत्र करते हैं और केवल उच्चतम गुणवत्ता वाली टिप्स प्रदान करते हैं — पूरी तरह से मुफ्त।', startButton: 'मुफ्त टिप्स प्राप्त करना शुरू करें', learnButton: 'देखें यह कैसे काम करता है' },
  howItWorks: { title: 'यह कैसे काम करता है', description: 'तीन सरल चरणों में विश��षज्ञ टिप्स प्राप्त करें', step1Title: 'सैकड़ों विशेषज्ञ स्रोत', step1Desc: 'हम सत्यापित टिपस्टर और विशेषज्ञ स्रोतों से टिप्स चुनते हैं', step2Title: 'गुणवत्ता फ़िल्टर्ड', step2Desc: 'केवल उच्चतम गुणवत्ता वाली भविष्यवाणियां गुजरती हैं', step3Title: 'पूरी तरह से मुफ्त', step3Desc: 'बिना भुगतान के सभी टिप्स तक पहुंचें', stats: { tipsters: 'विशेषज्ञ टिपस्टर', sources: 'फ़िल्टर्ड विशेषज्ञ स्रोत', free: 'आपके लिए मुफ्त' } },
  browse: { title: 'खेल द्वारा ब्राउज़ करें', browseButton: 'टिप्स देखें' },
  expertPicks: { badge: 'प्रीमियम विशेषज्ञ चयन', title: 'हम किस पर दांव लगा रहे हैं', description: 'जानना चाहते हैं कि हमारी विशेषज्ञ टीम किस पर दांव लगा रही है? केवल $1 में हमारे प्रीमियम एक्यूमुलेटर टिप्स तक विशेष पहुंच प्राप्त करें।', noTips: 'इस समय कोई प्रीमियम टिप्स उपलब्ध नहीं हैं। जल्द वापस आएं!', selectionsLabel: 'चयन', oddsLabel: 'संयुक्त ऑड्स', combinedOdds: 'संयुक्त ऑड्स', unlockButton: '$1 में अनलॉक करें', unlockTitle: 'हमारा {sheetName} एक्यूमुलेटर टिप', revealNote: 'एक बार प्रकट होने पर, अगली टिप तक दिखाई देता रहता है', howItWorksTitle: 'यह कैसे काम करता है:', howItWorksDesc: 'प्रति एक्यूमुलेटर केवल $1 में, हमारे विशेषज्ञ की मल्टी-सिलेक्शन बेट अनलॉक करें। प्रत्येक एक्यूमुलेटर बड़े संभावित रिटर्न के लिए कई टिप्स को जोड़ता है।' },
  sportTips: { event: 'इवेंट', market: 'मार्केट', pick: 'पिक', odds: 'ऑड्स', noTips: 'धैर्य के लिए धन्यवाद! हम इस खेल के लिए सर्वश्रेष्ठ टिप्स एकत्र कर रहे हैं। जल्द वापस आएं।' },
  footer: { company: 'कंपनी', sports: 'खेल', account: 'खाता', howItWorks: 'यह कैसे काम करता है', terms: 'सेवा की शर्तें', privacy: 'गोपनीयता नीति', signUp: 'मुफ्त साइन अप', logIn: 'लॉग इन', forgot: 'पासवर्ड भूल गए', tagline: 'खेल सट्टेबाजी टिप्स प्राप्त करने का सबसे स्मार्ट तरीका। सैकड़ों विशेषज्ञों द्वारा चुना गया, सभी के लिए मुफ्त।', disclaimer: 'कृपया जिम्मेदारी से जुआ खेलें। सट्टेबाजी में जोखिम होता है। 18+।' },
  auth: { signUpTitle: 'अपना मुफ्त खाता बनाए��', logInTitle: 'RiskNil में साइन इन करें', forgotTitle: 'अपना पासवर्ड रीसेट करें', email: 'ईमेल', password: 'पासवर्ड', confirmPassword: 'पासवर्ड की पुष्टि करें', createAccount: 'खाता बनाएं', signIn: 'साइन इन', resetPassword: 'पासवर्ड रीसेट करें', backToLogin: 'लॉगिन पर वापस जाएं' },
  cta: { title: 'स्मार्ट तरीके से दांव लगाने के लिए तैयार हैं?', description: 'हजारों खिलाड़ियों से जुड़ें जो पहले से RiskNil का उपयोग कर रहे हैं। यह मुफ्त है — हमेशा।', createAccount: 'अपना मुफ्त खाता बनाएं', seeHow: 'देखें यह कैसे काम करता है' },
}

const tl: Translations = {
  navbar: { sports: 'Palakasan', howItWorks: 'Paano ito gumagana', expertPicks: 'Mga pili ng eksperto', training: 'Propesyonal na Pagsasanay sa Pagtaya', signUp: 'Mag-sign up nang libre', logIn: 'Mag-log in' },
  hero: { title: 'Libreng mga tip sa pagtaya mula sa mga eksperto', subtitle: 'Kumuha ng pinakamahusay na mga tip sa pagtaya mula sa mga eksperto — Libre', description: 'Bakit mag-aaksaya ng oras sa hindi mapagkakatiwalaang mga site ng tipster o magbayad para sa mga kaduda-dudang tip? Nagtitipon kami ng mga tip mula sa daan-daang mga mapagkukunan ng eksperto at nagbibigay lamang ng pinakamataas na kalidad na mga tip — ganap na libre.', startButton: 'Magsimulang kumuha ng libreng mga tip', learnButton: 'Tingnan kung paano ito gumagana' },
  howItWorks: { title: 'Paano ito gumagana', description: 'Kumuha ng mga tip ng eksperto sa tatlong simpleng hakbang', step1Title: 'Daan-daang mapagkukunan ng eksperto', step1Desc: 'Pumipili kami ng mga tip mula sa mga na-verify na tipster at mga mapagkukunan ng eksperto', step2Title: 'Na-filter para sa kalidad', step2Desc: 'Tanging ang pinakamataas na kalidad na mga hula lamang ang dumadaan', step3Title: 'Ganap na libre', step3Desc: 'I-access ang lahat ng mga tip nang hindi nagbabayad', stats: { tipsters: 'Mga eksperto tipster', sources: 'Mga na-filter na mapagkukunan ng eksperto', free: 'Libre para sa iyo' } },
  browse: { title: 'Mag-browse ayon sa palakasan', browseButton: 'Tingnan ang mga tip' },
  expertPicks: { badge: 'Premium na mga pili ng eksperto', title: 'Kung saan kami tumataya', description: 'Gusto mo bang malaman kung saan tumataya ang aming team ng mga eksperto? Kumuha ng eksklusibong access sa aming premium accumulator tips sa halagang $1 lamang.', noTips: 'Walang premium na mga tip na available sa ngayon. Bumalik kaagad!', selectionsLabel: 'mga pagpili', oddsLabel: 'pinagsamang odds', combinedOdds: 'Pinagsamang odds', unlockButton: 'I-unlock sa $1', unlockTitle: 'Ang aming {sheetName} accumulator tip', revealNote: 'Kapag naibunyag, mananatiling nakikita hanggang sa susunod na tip', howItWorksTitle: 'Paano ito gumagana:', howItWorksDesc: 'Sa halagang $1 lamang bawat accumulator, i-unlock ang multi-selection bet ng aming eksperto. Bawat accumulator ay pinagsasama ang maraming tip para sa mas malalaking potensyal na kita.' },
  sportTips: { event: 'Kaganapan', market: 'Market', pick: 'Pili', odds: 'Odds', noTips: 'Salamat sa iyong pasensya! Nagtitipon kami ng pinakamahusay na mga tip para sa palakarong ito. Bumalik kaagad.' },
  footer: { company: 'Kumpanya', sports: 'Palakasan', account: 'Account', howItWorks: 'Paano ito gumagana', terms: 'Mga tuntunin ng serbisyo', privacy: 'Patakaran sa privacy', signUp: 'Mag-sign up nang libre', logIn: 'Mag-log in', forgot: 'Nakalimutan ang password', tagline: 'Ang pinaka-matalinong paraan upang makakuha ng mga tip sa pagtaya sa palakasan. Pinili mula sa daan-daang mga eksperto, libre para sa lahat.', disclaimer: 'Mangyaring magtaya nang responsable. Ang pagtaya ay may panganib. 18+.' },
  auth: { signUpTitle: 'Gumawa ng iyong libreng account', logInTitle: 'Mag-sign in sa RiskNil', forgotTitle: 'I-reset ang iyong password', email: 'Email', password: 'Password', confirmPassword: 'Kumpirmahin ang password', createAccount: 'Gumawa ng account', signIn: 'Mag-sign in', resetPassword: 'I-reset ang password', backToLogin: 'Bumalik sa pag-login' },
  cta: { title: 'Handa ka na bang tumaya nang mas matalino?', description: 'Sumali sa libu-libong manlalaro na gumagamit na ng RiskNil. Libre — palagi.', createAccount: 'Gumawa ng iyong libreng account', seeHow: 'Tingnan kung paano ito gumagana' },
}

const ar: Translations = {
  navbar: { sports: 'الرياضة', howItWorks: 'كيف يعمل', expertPicks: 'اختيارات الخبراء', training: 'تدريب المراهنات الاحترافية', signUp: 'سجل مجاناً', logIn: 'تسجيل الدخول' },
  hero: { title: 'نصائح مراهنات مجانية من الخبراء', subtitle: 'احصل على أفضل نصائح المراهنات من الخبراء — مجاناً', description: 'لماذا تضيع ساعات في مواقع النصائح غير الموثوقة أو تدفع مقابل نصائح مشكوك فيها؟ نجمع النصائح من مئات مصادر الخبراء ونقدم فقط أعلى جودة — مجاناً تماماً.', startButton: 'ابدأ بالحصول على نصائح مجانية', learnButton: 'شاهد كيف يعمل' },
  howItWorks: { title: 'كيف يعمل', description: 'احصل على نصائح الخبراء في ثلاث خطوات بسيطة', step1Title: 'مئات مصادر الخبراء', step1Desc: 'نختار النصائح من مقدمي النصائح المعتمدين ومصادر الخبراء', step2Title: 'مفلترة للجودة', step2Desc: 'فقط التوقعات الأعلى جودة تمر', step3Title: 'مجاني تماماً', step3Desc: 'الوصول لجميع النصائح دون دفع', stats: { tipsters: 'خبراء النصائح', sources: 'مصادر خبراء مفلترة', free: 'مجاني لك' } },
  browse: { title: 'تصفح حسب الرياضة', browseButton: 'عرض النصائح' },
  expertPicks: { badge: 'اختيارات خبراء متميزة', title: 'على ماذا نراهن', description: 'تريد معرفة على ماذا يراهن فريق خبرائنا؟ احصل على وصول حصري لنصائحنا التراكمية المتميزة مقابل $1 فقط.', noTips: 'لا توجد نصائح متميزة متاحة حالياً. عد قريباً!', selectionsLabel: 'اختيارات', oddsLabel: 'احتمالات مجمعة', combinedOdds: 'احتمالات مجمعة', unlockButton: 'افتح مقابل $1', unlockTitle: 'نصيحتنا التراكمية {sheetName}', revealNote: 'بمجرد الكشف، تبقى مرئية حتى النصيحة التالية', howItWorksTitle: 'كيف يعمل:', howItWorksDesc: 'مقابل $1 فقط لكل تراكمي، افتح رهان الاختيارات المتعددة لخبيرنا. كل تراكمي يجمع عدة نصائح لعوائد محتملة أكبر.' },
  sportTips: { event: 'الحدث', market: 'السوق', pick: 'الاختيار', odds: 'الاحتمالات', noTips: 'شكراً لصبرك! نجمع أفضل النصائح لهذه الرياضة. عد قريباً.' },
  footer: { company: 'الشركة', sports: 'الرياضة', account: 'الحساب', howItWorks: 'كيف يعمل', terms: 'شروط الخدمة', privacy: 'سياسة الخصوصية', signUp: 'سجل مجاناً', logIn: 'تسجيل الدخول', forgot: 'نسيت كلمة المرور', tagline: 'الطريقة الأذكى للحصول على نصائح المراهنات الرياضية. منتقاة من مئات الخبراء، مجانية للجميع.', disclaimer: 'يرجى المراهنة بمسؤولية. المراهنة تنطوي على مخاطر. +18.' },
  auth: { signUpTitle: 'أنشئ حسابك المجاني', logInTitle: 'سجل الدخول إلى RiskNil', forgotTitle: 'إعادة تعيين كلمة المرور', email: 'البريد الإلكتروني', password: 'كلمة المرور', confirmPassword: 'تأكي�� كلمة المرور', createAccount: 'إنشاء حساب', signIn: 'تسجيل الدخول', resetPassword: 'إعادة تعيين كلمة المرور', backToLogin: 'العودة لتسجيل الدخول' },
  cta: { title: 'هل أنت مستعد للمراهنة بذكاء؟', description: 'انضم إلى آلاف اللاعبين الذين يستخدمون RiskNil بالفعل. مجاني — دائماً.', createAccount: 'أنشئ حسابك المجاني', seeHow: 'شاهد كيف يعمل' },
}

export const translations: Record<Language, Translations> = {
  en, es, pt,
  'zh-CN': zhCN,
  'zh-TW': zhTW,
  it, fr, de, hu, sv, da, nl, el, pl, no, fi, ro, cs, sw, af, zu, xh, ja, ko, hi, tl, ar,
}

export function getTranslation(lang: Language): Translations {
  return translations[lang] || translations.en
}

export function getLanguageName(code: Language): string {
  const names: Record<Language, string> = {
    en: 'English',
    es: 'Español',
    pt: 'Português',
    'zh-CN': '���体中文',
    'zh-TW': '繁體中文',
    it: 'Italiano',
    fr: 'Français',
    de: 'Deutsch',
    hu: 'Magyar',
    sv: 'Svenska',
    da: 'Dansk',
    nl: 'Nederlands',
    el: 'Ελληνικά',
    pl: 'Polski',
    no: 'Norsk',
    fi: 'Suomi',
    ro: 'Română',
    cs: 'Čeština',
    sw: 'Kiswahili',
    af: 'Afrikaans',
    zu: 'isiZulu',
    xh: 'isiXhosa',
    ja: '日本語',
    ko: '한국어',
    hi: 'हिन्दी',
    tl: 'Tagalog',
    ar: 'العربية',
  }
  return names[code] || code
}

export const SUPPORTED_LANGUAGES: Language[] = Object.keys(translations) as Language[]

export const LANGUAGE_LABELS: Record<Language, string> = Object.fromEntries(
  SUPPORTED_LANGUAGES.map((lang) => [lang, getLanguageName(lang)])
) as Record<Language, string>

export const projects = [
  {
    id: 'mindflow',
    title: 'MindFlow',
    subtitle: 'App de meditação e bem-estar mental',
    category: 'Mobile App',
    year: '2024',
    tags: ['UX Research', 'UI Design', 'Prototipagem'],
    gradient: 'linear-gradient(135deg, #6D28D9 0%, #A78BFA 100%)',
    color: '#6D28D9',
    featured: true,
    overview: {
      challenge: 'Usuários com ansiedade e estresse encontravam apps de meditação complexos demais para adotar como rotina.',
      role: 'UX Designer · Pesquisadora',
      timeline: '3 meses',
      tools: 'Figma, Maze, Notion',
    },
    sections: [
      {
        type: 'text',
        title: 'O Desafio',
        content:
          'Apps de meditação existentes apresentavam onboarding longo, muitas opções na tela inicial e falta de personalização real. O resultado: usuários abandonavam o app nos primeiros 3 dias. Nosso objetivo era reduzir o tempo de primeiro acesso a uma meditação para menos de 60 segundos.',
      },
      {
        type: 'text',
        title: 'Pesquisa',
        content:
          'Realizei 12 entrevistas em profundidade com pessoas entre 22–38 anos que já tentaram usar apps de meditação. Os principais insights foram: (1) a voz do instrutor é mais importante que os recursos visuais, (2) a culpa por "falhar na rotina" é um gatilho de abandono, (3) sessões de 3–5 min são percebidas como mais acessíveis.',
      },
      {
        type: 'text',
        title: 'Processo de Design',
        content:
          'Com base nos insights criei um "Mood Check-in" inicial de 2 toques que levava o usuário direto a uma sessão recomendada. Testei 3 fluxos de onboarding com 20 participantes no Maze. O fluxo vencedor reduziu o abandono em 67% comparado ao benchmark.',
      },
      {
        type: 'text',
        title: 'Solução',
        content:
          'Design system minimalista com tipografia ampla e paleta fria. Animações de respiração como elemento central da UI. Sistema de "streaks" com linguagem empática — o app nunca pune o usuário por dias perdidos.',
      },
    ],
    results: [
      'Redução de 67% no abandono no onboarding',
      'Sessão inicial em média 42 segundos',
      'NPS de 78 nos testes com usuários',
      'Retenção D7 de 54% (vs. 31% de mercado)',
    ],
    nextProject: 'shopeasy',
  },
  {
    id: 'shopeasy',
    title: 'ShopEasy',
    subtitle: 'Redesign de plataforma de e-commerce B2C',
    category: 'Web Design',
    year: '2024',
    tags: ['UX Audit', 'UI Design', 'Testes de Usabilidade'],
    gradient: 'linear-gradient(135deg, #111111 0%, #444444 100%)',
    color: '#111111',
    featured: true,
    overview: {
      challenge: 'Taxa de conversão de 1.2% — abaixo do benchmark do setor (2.5–3%). Usuários abandonavam principalmente na etapa de checkout.',
      role: 'UX Designer Lead',
      timeline: '4 meses',
      tools: 'Figma, Hotjar, Google Analytics, UserTesting',
    },
    sections: [
      {
        type: 'text',
        title: 'O Desafio',
        content:
          'O e-commerce tinha 18 etapas no checkout, formulários com validação punitiva e falta de confiança visual (sem selos de segurança visíveis). A auditoria de UX identificou 34 problemas críticos concentrados no fluxo de compra.',
      },
      {
        type: 'text',
        title: 'Pesquisa e Análise',
        content:
          'Análise de 6 meses de dados do Hotjar (gravações + mapas de calor) revelou que 78% dos abandonos aconteciam no campo de endereço. Entrevistas com clientes apontaram falta de confiança como razão principal para não finalizar a compra.',
      },
      {
        type: 'text',
        title: 'Processo de Design',
        content:
          'Reduz o checkout de 18 para 4 etapas usando um modelo de "accordion" inteligente. Criou autopreenchimento de CEP nativo. Adicionou micro-feedbacks visuais positivos a cada etapa concluída. Testou 2 versões de checkout em A/B com 1.400 usuários reais.',
      },
      {
        type: 'text',
        title: 'Solução',
        content:
          'Novo sistema de checkout linear com progresso visual claro, validação em tempo real com mensagens amigáveis, confiança reforçada com selos e reviews próximos ao CTA de compra.',
      },
    ],
    results: [
      'Conversão subiu de 1.2% para 2.9%',
      'Tempo médio de checkout reduziu 58%',
      'Abandono de carrinho caiu 41%',
      'Receita mensal aumentou R$ 280k',
    ],
    nextProject: 'datadash',
  },
  {
    id: 'datadash',
    title: 'DataDash',
    subtitle: 'Dashboard de analytics para times de marketing',
    category: 'Dashboard · B2B',
    year: '2023',
    tags: ['Product Design', 'Design System', 'Pesquisa Contextual'],
    gradient: 'linear-gradient(135deg, #7C3AED 0%, #2563EB 100%)',
    color: '#7C3AED',
    featured: false,
    overview: {
      challenge: 'Times de marketing perdiam até 3 horas por dia exportando dados de múltiplas ferramentas para montar relatórios manuais.',
      role: 'Product Designer',
      timeline: '5 meses',
      tools: 'Figma, Storybook, Linear, Notion',
    },
    sections: [
      {
        type: 'text',
        title: 'O Desafio',
        content:
          'A empresa tinha dados em Google Ads, Meta Ads, GA4 e CRM — sem nenhuma visão unificada. Os times criavam planilhas manuais todo dia, com alto risco de erro humano e dados desatualizados.',
      },
      {
        type: 'text',
        title: 'Pesquisa',
        content:
          'Realizei pesquisa contextual (shadowing) com 8 analistas de marketing durante uma semana. Mapeei todos os "workarounds" que faziam diariamente. Identifiquei 5 "Jobs to Be Done" centrais e 3 tipos de usuário: analista, gestor e executivo.',
      },
      {
        type: 'text',
        title: 'Design System e Processo',
        content:
          'Criei um design system completo com componentes de visualização de dados (gráficos, KPI cards, tabelas comparativas). Testei densidade de informação com cada persona — executivos precisavam de visão de alto nível; analistas, de drill-down detalhado.',
      },
      {
        type: 'text',
        title: 'Solução',
        content:
          'Dashboard modular com widgets drag-and-drop. Views específicas por persona. Alertas automáticos por e-mail quando uma métrica sai da faixa normal. Design system com 60+ componentes documentados no Storybook.',
      },
    ],
    results: [
      '3h por dia economizadas por analista',
      'Adoção de 94% pelos times no primeiro mês',
      'NPS interno de 82',
      'Design system usado por 4 produtos da empresa',
    ],
    nextProject: 'taskflow',
  },
  {
    id: 'taskflow',
    title: 'TaskFlow',
    subtitle: 'Ferramenta de gestão de projetos para freelancers',
    category: 'SaaS · Mobile + Web',
    year: '2023',
    tags: ['0→1 Product Design', 'Jobs to Be Done', 'Testes A/B'],
    gradient: 'linear-gradient(135deg, #059669 0%, #6EE7B7 100%)',
    color: '#059669',
    featured: false,
    overview: {
      challenge: 'Freelancers usavam até 5 ferramentas diferentes para gerir projetos, clientes, finanças e tempo — tudo desconectado.',
      role: 'UX/UI Designer · Co-fundadora',
      timeline: '6 meses (0→1)',
      tools: 'Figma, Framer, Notion, Mixpanel',
    },
    sections: [
      {
        type: 'text',
        title: 'O Desafio',
        content:
          'Freelancers — especialmente designers e desenvolvedores — não tinham uma solução que unisse gestão de clientes, projetos, tempo e pagamentos em um único lugar simples. Ferramentas enterprise eram complexas demais; ferramentas simples eram insuficientes.',
      },
      {
        type: 'text',
        title: 'Discovery',
        content:
          'Conduzi 20 entrevistas com freelancers de diferentes áreas. Usei Jobs to Be Done framework para identificar motivações profundas. O maior "job" descoberto: "me ajude a parecer profissional para clientes sem me fazer perder horas com burocracia."',
      },
      {
        type: 'text',
        title: 'Design e Iterações',
        content:
          'Criamos 3 conceitos radicalmente diferentes e testamos com usuários. O conceito vencedor tinha uma "visão por cliente" que mostrava tudo relacionado a um cliente numa única tela. Iteramos 7 versões do fluxo de criação de proposta até atingir menos de 3 minutos de task time.',
      },
      {
        type: 'text',
        title: 'Solução Final',
        content:
          'Interface centrada no cliente (não no projeto). Templates de proposta e contrato em 1 clique. Timer nativo com geração automática de relatório de horas. Sistema de follow-up automático para pagamentos em atraso.',
      },
    ],
    results: [
      '2.400 usuários nos primeiros 60 dias',
      'Task time de proposta: 2m 40s (benchmark: 22min)',
      'Churn mensal de 3.1%',
      'Avaliação 4.8/5 na App Store',
    ],
    nextProject: 'mindflow',
  },
]

export function getProjectById(id) {
  return projects.find((p) => p.id === id)
}

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured)
}

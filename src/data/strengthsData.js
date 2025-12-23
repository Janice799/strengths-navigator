// CliftonStrengths 34 Themes Data
export const strengthsData = {
    // 도메인 정의
    domains: {
        executing: {
            name: '실행력',
            nameEn: 'Executing',
            color: '#7B68EE',
            description: '아이디어를 현실로 만드는 힘'
        },
        influencing: {
            name: '영향력',
            nameEn: 'Influencing',
            color: '#FF6B35',
            description: '다른 사람들을 움직이는 힘'
        },
        relationship: {
            name: '관계 구축',
            nameEn: 'Relationship Building',
            color: '#2ECC71',
            description: '팀을 하나로 묶는 접착제'
        },
        strategic: {
            name: '전략적 사고',
            nameEn: 'Strategic Thinking',
            color: '#3498DB',
            description: '더 나은 결정을 위한 분석력'
        }
    },

    // 34개 테마 (일부 주요 테마)
    themes: {
        strategic: { name: '전략성', domain: 'strategic', description: '패턴을 인식하고 최적의 경로를 찾습니다' },
        futuristic: { name: '미래지향', domain: 'strategic', description: '미래의 비전으로 영감을 줍니다' },
        ideation: { name: '아이디어', domain: 'strategic', description: '새롭고 창의적인 아이디어를 생성합니다' },
        learner: { name: '학습욕', domain: 'strategic', description: '끊임없이 배우고 성장합니다' },
        input: { name: '수집', domain: 'strategic', description: '정보와 지식을 수집합니다' },
        analytical: { name: '분석', domain: 'strategic', description: '데이터로 진실을 찾습니다' },
        context: { name: '맥락', domain: 'strategic', description: '과거를 통해 현재를 이해합니다' },
        intellection: { name: '사색', domain: 'strategic', description: '깊은 사고를 즐깁니다' },

        achiever: { name: '성취', domain: 'executing', description: '끊임없이 목표를 달성합니다' },
        arranger: { name: '조정', domain: 'executing', description: '최적의 구성을 찾습니다' },
        belief: { name: '신념', domain: 'executing', description: '핵심 가치에 따라 행동합니다' },
        consistency: { name: '공정성', domain: 'executing', description: '모두에게 공평하게 대합니다' },
        deliberative: { name: '신중함', domain: 'executing', description: '신중하게 결정합니다' },
        discipline: { name: '규율', domain: 'executing', description: '구조와 질서를 만듭니다' },
        focus: { name: '집중', domain: 'executing', description: '목표를 향해 직진합니다' },
        responsibility: { name: '책임', domain: 'executing', description: '약속을 반드시 지킵니다' },
        restorative: { name: '복구', domain: 'executing', description: '문제를 해결합니다' },

        activator: { name: '활성화', domain: 'influencing', description: '생각을 행동으로 바꿉니다' },
        command: { name: '지휘', domain: 'influencing', description: '상황을 주도합니다' },
        communication: { name: '커뮤니케이션', domain: 'influencing', description: '말로 아이디어에 생명을 줍니다' },
        competition: { name: '경쟁', domain: 'influencing', description: '최고가 되려 합니다' },
        maximizer: { name: '극대화', domain: 'influencing', description: '우수함을 탁월함으로 변환합니다' },
        selfAssurance: { name: '자기확신', domain: 'influencing', description: '내면의 나침반을 신뢰합니다' },
        significance: { name: '중요성', domain: 'influencing', description: '의미 있는 영향을 남기고 싶습니다' },
        woo: { name: '사교성', domain: 'influencing', description: '새로운 사람을 만나는 것을 즐깁니다' },

        adaptability: { name: '적응성', domain: 'relationship', description: '현재에 유연하게 대응합니다' },
        connectedness: { name: '연결성', domain: 'relationship', description: '모든 것의 연결을 봅니다' },
        developer: { name: '개발자', domain: 'relationship', description: '타인의 잠재력을 봅니다' },
        empathy: { name: '공감', domain: 'relationship', description: '다른 사람의 감정을 느낍니다' },
        harmony: { name: '화합', domain: 'relationship', description: '공통점을 찾습니다' },
        includer: { name: '포용', domain: 'relationship', description: '모두를 환영합니다' },
        individualization: { name: '개별화', domain: 'relationship', description: '각 개인의 고유함을 봅니다' },
        positivity: { name: '긍정', domain: 'relationship', description: '열정과 에너지로 고양시킵니다' },
        relator: { name: '친밀', domain: 'relationship', description: '깊은 관계를 추구합니다' }
    }
};

// 데모 코치 정보
export const demoCoach = {
    name: '김예진 코치',
    title: 'CliftonStrengths® Certified Coach',
    tagline: '당신의 강점이 곧 당신의 전략입니다',
    bio: '10년간 500명 이상의 리더들과 함께 그들만의 강점 여정을 걸어왔습니다. 모든 사람에게는 빛나는 고유한 재능이 있습니다. 저는 그 재능을 발견하고, 키우고, 전략으로 바꾸는 여정의 파트너입니다.',
    topStrengths: [
        { key: 'strategic', rank: 1 },
        { key: 'futuristic', rank: 2 },
        { key: 'individualization', rank: 3 },
        { key: 'learner', rank: 4 },
        { key: 'input', rank: 5 }
    ],
    credentials: [
        'Gallup Certified Strengths Coach',
        'ICF ACC (Associate Certified Coach)',
        '연세대학교 심리학 석사'
    ],
    stats: {
        clients: '500+',
        years: '10년',
        satisfaction: '98%'
    }
};

// 도메인에 따른 색상 가져오기
export const getDomainColor = (domainKey) => {
    return strengthsData.domains[domainKey]?.color || '#888888';
};

// 테마의 도메인 색상 가져오기  
export const getThemeDomainColor = (themeKey) => {
    const theme = strengthsData.themes[themeKey];
    if (!theme) return '#888888';
    return getDomainColor(theme.domain);
};

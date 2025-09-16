// 페이지 로드 완료 후 실행
document.addEventListener('DOMContentLoaded', function() {
    console.log('깃허브 페이지가 로드되었습니다!');
    
    // 환영 버튼 이벤트 리스너
    const welcomeBtn = document.getElementById('welcomeBtn');
    if (welcomeBtn) {
        welcomeBtn.addEventListener('click', function() {
            showWelcomeMessage();
        });
    }
    
    // 프로젝트 카드에 호버 효과 추가
    addProjectCardEffects();
    
    // 스크롤 애니메이션 효과
    addScrollAnimations();
});

// 환영 메시지 표시 함수
function showWelcomeMessage() {
    const messages = [
        '안녕하세요! 👋',
        '깃허브 페이지에 오신 것을 환영합니다! 🎉',
        '즐거운 코딩 되세요! 💻',
        '함께 성장해요! 🚀'
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
    // 알림창 표시
    alert(randomMessage);
    
    // 또는 더 예쁜 토스트 메시지 (선택사항)
    showToast(randomMessage);
}

// 토스트 메시지 표시 함수
function showToast(message) {
    // 기존 토스트가 있다면 제거
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }
    
    // 토스트 요소 생성
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    
    // 토스트 스타일
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 1rem 2rem;
        border-radius: 25px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 1000;
        animation: slideInRight 0.3s ease-out;
    `;
    
    // 페이지에 추가
    document.body.appendChild(toast);
    
    // 3초 후 자동 제거
    setTimeout(() => {
        toast.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 300);
    }, 3000);
}

// 프로젝트 카드 효과 추가
function addProjectCardEffects() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        // 클릭 이벤트 추가
        card.addEventListener('click', function() {
            const title = this.querySelector('h4').textContent;
            showToast(`${title} 프로젝트를 클릭했습니다!`);
        });
    });
}

// 스크롤 애니메이션 효과
function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // 애니메이션할 요소들 선택
    const animatedElements = document.querySelectorAll('.hero, .content, .project-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
}

// 현재 시간 표시 함수
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    
    // 시간을 표시할 요소가 있다면 업데이트
    const timeElement = document.getElementById('currentTime');
    if (timeElement) {
        timeElement.textContent = `현재 시간: ${timeString}`;
    }
}

// 페이지 방문 횟수 카운터 (로컬 스토리지 사용)
function updateVisitCounter() {
    let visitCount = localStorage.getItem('visitCount') || 0;
    visitCount = parseInt(visitCount) + 1;
    localStorage.setItem('visitCount', visitCount);
    
    const counterElement = document.getElementById('visitCounter');
    if (counterElement) {
        counterElement.textContent = `방문 횟수: ${visitCount}회`;
    }
}

// 키보드 단축키 이벤트
document.addEventListener('keydown', function(event) {
    // Ctrl + Enter: 환영 메시지 표시
    if (event.ctrlKey && event.key === 'Enter') {
        showWelcomeMessage();
    }
    
    // Escape: 토스트 메시지 제거
    if (event.key === 'Escape') {
        const toast = document.querySelector('.toast');
        if (toast) {
            toast.remove();
        }
    }
});

// CSS 애니메이션을 위한 스타일 추가
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

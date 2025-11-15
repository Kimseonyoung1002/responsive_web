# 🌐 Responsive Web Team Project

> 팀 프로젝트로써 함께 기획·디자인하고 개별 기능을 개발한 **반응형 웹사이트**입니다.  
> 다양한 화면 해상도에서 자연스럽게 동작하도록 반응형 레이아웃을 적용하고,  
> **메뉴 UI, 슬라이더, 탭, 상영일 선택, 달력 기능** 등을 직접 구현했습니다.

---

## 📆 프로젝트 개요
- **개발 기간:** 2025.07  
- **참여 인원:** 5명 
- **본인 역할:** 일정표(캘린더), 탭 메뉴, 날짜 선택 UI 등 주요 JS 기능 개발  
- **기획 & 디자인:** 팀 공동 진행  
- **배포 링크:** https://Kimseonyoung1002.github.io/responsive_web
- **GitHub Repository:** https://github.com/Kimseonyoung1002/responsive_web

---

## 🛠 기술 스택

### **Frontend**
- HTML  
- CSS  
- JavaScript(ES6)  

### **Libraries / Tools**
- jQuery  
- Swiper.js  
- CSS Media Queries  
- Flexbox / Grid  

---

## 🖥 주요 기능 (Team Project Features)

| 기능 | 설명 |
|------|------|
| 🎞 반응형 슬라이더 | Swiper.js breakpoints 적용, 각 화면 크기별 슬라이드 개수 변경 |
| 📝 리뷰 toggle | 클릭 시 내용 보이기/숨기기 |
| 📊 탭 전환 | data-target 기반 콘텐츠 전환 |
| 📅 날짜 선택 | 선택된 날짜 하이라이트 + 요일 계산 표시 |
| 📆 달력 월 이동 | 화살표 클릭 시 월 변경 + 상단 날짜 표시 |

---

# 🔍 코드 리뷰 

아래는 프로젝트에서 구현한 **일정표(캘린더) 영역의 핵심 기능들**입니다.

---

## 1️⃣ 탭 전환 기능  
`data-target` 속성을 기반으로 콘텐츠를 전환하는 구조.

```javascript
const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.table_wrap');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const targetId = tab.getAttribute('data-target');

    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    contents.forEach(c => (c.style.display = 'none'));
    document.getElementById(targetId).style.display = 'block';
  });
});

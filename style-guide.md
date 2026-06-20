# 스타일 가이드 (Style Guide)

이 문서는 제공된 이미지 디자인 시스템(Design System)의 명세(Specification)를 정리한 문서입니다.

<!-- === Colors / 색상 === -->
## 1. 색상 (Colors)

### Neutral (무채색)
| 이름 (Name) | HEX (16진수) | RGB | HSL |
| :--- | :--- | :--- | :--- |
| Neutral 900 | `#141D2F` | `20, 29, 47` | `220, 40%, 13%` |
| Neutral 800 | `#1E2A47` | `30, 42, 71` | `222, 41%, 20%` |
| Neutral 700 | `#2B3442` | `43, 52, 66` | `217, 21%, 21%` |
| Neutral 500 | `#4B6A9B` | `75, 106, 155` | `217, 35%, 45%` |
| Neutral 300 | `#697C9A` | `105, 124, 154` | `217, 20%, 51%` |
| Neutral 200 | `#90A4D4` | `144, 164, 212` | `222, 44%, 70%` |
| Neutral 100 | `#F6F8FF` | `246, 248, 255` | `227, 100%, 98%` |
| Neutral 0 | `#FFFFFF` | `255, 255, 255` | `0, 0%, 100%` |

### Blue (파란색)
| 이름 (Name) | HEX (16진수) | RGB | HSL |
| :--- | :--- | :--- | :--- |
| Blue 300 | `#60ABFF` | `96, 171, 255` | `212, 100%, 69%` |
| Blue 500 | `#0079FF` | `0, 121, 255` | `212, 100%, 50%` |

### Red (빨간색)
| 이름 (Name) | HEX (16진수) | RGB | HSL |
| :--- | :--- | :--- | :--- |
| Red 500 | `#F74646` | `247, 70, 70` | `0, 92%, 62%` |

---

<!-- === Border Radius / 테두리 반경 === -->
## 2. 테두리 반경 (Border Radius)

| 이름 (Name) | 픽셀 값 (Pixels) |
| :--- | :--- |
| radius-0 | `0` |
| radius-4 | `4px` |
| radius-6 | `6px` |
| radius-8 | `8px` |
| radius-10 | `10px` |
| radius-12 | `12px` |
| radius-16 | `16px` |
| radius-20 | `20px` |
| radius-24 | `24px` |
| radius-full | `999px` |

---

<!-- === Spacing / 간격 === -->
## 3. 간격 (Spacing)

| 이름 (Name) | 픽셀 값 (Pixels) |
| :--- | :--- |
| spacing-0 | `0` |
| spacing-025 | `2px` |
| spacing-050 | `4px` |
| spacing-075 | `6px` |
| spacing-100 | `8px` |
| spacing-125 | `10px` |
| spacing-150 | `12px` |
| spacing-200 | `16px` |
| spacing-250 | `20px` |
| spacing-300 | `24px` |
| spacing-400 | `32px` |
| spacing-500 | `40px` |
| spacing-600 | `48px` |
| spacing-800 | `64px` |
| spacing-1000 | `80px` |

---

<!-- === Typography / 타이포그래피 === -->
## 4. 타이포그래피 (Typography)

폰트 패밀리(Font Family): **Space Mono**

| 이름 (Name) | 굵기 (Weight) | 크기 (Font Size) | 줄 높이 (Line Height) | 자간 (Letter Spacing) |
| :--- | :--- | :--- | :--- | :--- |
| Text Preset 1 | Bold (700) | `26px` | `120%` (31.2px) | `0px` |
| Text Preset 2 | Bold (700) | `22px` | `140%` (30.8px) | `0px` |
| Text Preset 3 | Regular (400) | `18px` | `140%` (25.2px) | `0px` |
| Text Preset 3 (Mobile) | Regular (400) | `13px` | `140%` (18.2px) | `0px` |
| Text Preset 4 | Regular (400) | `16px` | `150%` (24px) | `0px` |
| Text Preset 5 | Bold (700) | `16px` | `150%` (24px) | `0px` |
| Text Preset 6 | Regular (400) | `15px` | `150%` (22.5px) | `0px` |
| Text Preset 7 | Regular (400) | `13px` | `150%` (19.5px) | `0px` |
| Text Preset 8 | Bold (700) | `13px` | `140%` (18.2px) | `2.5px` |

---

<!-- === CSS Custom Properties / CSS 사용자 정의 속성 === -->
## 5. CSS 변수 정의 예시 (CSS Custom Properties)

실제 웹 애플리케이션 개발 시 활용할 수 있는 CSS 변수 구성안입니다.

```css
/* === CSS Custom Properties / 디자인 시스템 변수 === */
:root {
  /* --- Colors / 무채색 --- */
  --neutral-900: #141D2F;
  --neutral-800: #1E2A47;
  --neutral-700: #2B3442;
  --neutral-500: #4B6A9B;
  --neutral-300: #697C9A;
  --neutral-200: #90A4D4;
  --neutral-100: #F6F8FF;
  --neutral-0: #FFFFFF;

  /* --- Colors / 파란색 --- */
  --blue-300: #60ABFF;
  --blue-500: #0079FF;

  /* --- Colors / 빨간색 --- */
  --red-500: #F74646;

  /* --- Border Radius / 테두리 반경 --- */
  --radius-0: 0px;
  --radius-4: 4px;
  --radius-6: 6px;
  --radius-8: 8px;
  --radius-10: 10px;
  --radius-12: 12px;
  --radius-16: 16px;
  --radius-20: 20px;
  --radius-24: 24px;
  --radius-full: 999px;

  /* --- Spacing / 간격 --- */
  --spacing-0: 0px;
  --spacing-025: 2px;
  --spacing-050: 4px;
  --spacing-075: 6px;
  --spacing-100: 8px;
  --spacing-125: 10px;
  --spacing-150: 12px;
  --spacing-200: 16px;
  --spacing-250: 20px;
  --spacing-300: 24px;
  --spacing-400: 32px;
  --spacing-500: 40px;
  --spacing-600: 48px;
  --spacing-800: 64px;
  --spacing-1000: 80px;
}
```

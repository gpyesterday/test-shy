# Agent Atlas

Visual Studio Code 중심의 AI 에이전트 설정과 활용법을 소개하는 단일 페이지 안내 사이트입니다.

## Run locally

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## GitHub Pages deployment

The included GitHub Actions workflow deploys this static site whenever changes
are pushed to the `work` branch. In the repository settings, set **Pages → Build
and deployment → Source** to **GitHub Actions** once. After the workflow
finishes, the deployed URL is shown in the `github-pages` environment and in the
workflow summary.

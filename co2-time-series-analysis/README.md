# Mauna Loa CO2 Time Series Analysis

## 프로젝트 소개
1958~2001년 Mauna Loa 대기 중 CO2 농도 주간 데이터를 이용해 장기 추세, 계절성, 연도별 증가 속도 및 시계열 분해를 분석하는 Python 프로젝트입니다.

## 폴더 구조
```text
co2-time-series-analysis/
├── data/
│   ├── co2_weekly_raw.csv
│   └── co2_weekly_clean.csv
├── images/
│   ├── 01_co2_trend_moving_average.png
│   ├── 02_monthly_seasonality_boxplot.png
│   ├── 03_annual_average_and_yoy_change.png
│   └── 04_time_series_decomposition.png
├── src/
│   └── analyze.py
├── REPORT.md
├── README.md
└── requirements.txt
```

## 실행 환경
Python 3.9 이상 권장

## 설치 방법
```bash
pip install -r requirements.txt
```

## 실행 방법
```bash
python src/analyze.py
```

## 결과물
실행하면 원본/정제 CSV 데이터, 4개의 PNG 시각화 이미지, 실제 계산 수치가 포함된 `REPORT.md`가 생성됩니다.

## 데이터 출처 및 주의사항
데이터는 `statsmodels`에 포함된 `co2` 데이터셋을 사용하며, 원 출처는 NOAA Mauna Loa CO2 weekly measurements입니다. 인터넷 다운로드 없이 `sm.datasets.co2.load_pandas()`로 로드합니다. 데이터의 재사용 및 인용 시 원 출처의 정책과 안내를 확인해야 합니다.

// next-sitemap.config.js
module.exports = {
    siteUrl: 'https://www.example.com', // 당신의 사이트 URL
    generateRobotsTxt: true, // robots.txt 파일을 생성합니다
    sitemapSize: 7000, // (옵션) 사이트 맵 파일당 URL 수 제한 (기본값: 50000)
    changefreq: 'yearly', // 페이지 변경 빈도를 거의 없다고 설정 (매년)
    priority: 1.0, // 페이지의 중요도 (1.0은 가장 높음)
    // 추가 옵션을 설정할 수 있습니다
};
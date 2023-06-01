const fs = require('fs');
const path = require('path');
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

require('dotenv').config();

// 블로그 디렉토리 조회
const dirPath = 'contents/blog';
const directories = fs.readdirSync(dirPath).filter((file) => {
  return fs.statSync(path.join(dirPath, file)).isDirectory();
});

// 폴더명 라벨링(라벨링이 되어있지 않은 폴더는 영어 폴더면 그대로 노출)
const labels = {
  'python': "파이썬",
  'django': "파이썬 - Django",
  'fastapi': "파이썬 - FastAPI",
  'golang': "고(GO)",
  'gin': "고(GO) - Gin",
  'docker': "도커",
  'rdbms': "관계형 데이터베이스",
  'aws': "AWS",
  'cache': "캐시",
  'nosql': "NoSQL",
  'react': "리액트",
  'etc': "기타"
};

// 아래 configs 에 사용되는 형태로 변환
const blogPaths = directories.map((dirName) => {
  const label = labels[dirName] || dirName;
  return {
    path: dirName,
    label: label,
  };
});

// 위 labels 의 순서로 변경
const order = Object.keys(labels);
blogPaths.sort((a, b) => {
  const indexA = order.indexOf(a.path);
  const indexB = order.indexOf(b.path);

  if (indexA === -1 && indexB === -1) { return 0; }
  if (indexA === -1) { return 1; }
  if (indexB === -1) { return -1; }
  return indexA - indexB;
});

// 블로그 설정
const blogConfig = {
  showReadingTime: true,
  readingTime: ({ content, frontMatter, defaultReadingTime }) =>
    defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
  blogTitle: "블로그",
  blogDescription: "기술 정리",
  postsPerPage: "ALL",
  blogSidebarCount: 10,
  blogSidebarTitle: "최신글",
};

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "LOU2",
  tagline: "Lee Lou2",
  favicon: "/img/favicon.ico",

  url: "https://lou2.kr",
  baseUrl: "/",
  baseUrlIssueBanner: false,

  organizationName: "lee-lou2",
  projectName: "lou2",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "contents/docs",
          sidebarPath: require.resolve("./sidebars.js"),
        },
        pages: {
          path: "contents/pages",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: process.env.GTAG_TRACKING_ID,
          anonymizeIP: true,
        },
        googleTagManager: {
          containerId: process.env.GTM_CONTAINER_ID,
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "홈",
        logo: {
          alt: "lou2 Logo",
          src: "/img/logo.svg",
        },
        items: [
          {
            type: "dropdown",
            label: "튜토리얼",
            position: "left",
            items: [
              {
                type: "docSidebar",
                sidebarId: "tutorialPythonSidebar",
                label: "파이썬 - Django",
              },
              {
                type: "docSidebar",
                sidebarId: "tutorialGoSidebar",
                label: "고(GO)",
              },
            ],
          },
          {
            type: "docSidebar",
            sidebarId: "projectSidebar",
            position: "left",
            label: "프로젝트",
          },
          {
            type: "dropdown",
            label: "블로그",
            position: "left",
            items: blogPaths.map(({ path, label }) => ({
              to: `/blog/${path}`,
              label: label,
            })),
          },
          {
            to: "/docs/iam",
            position: "left",
            label: "(👨)",
          },
          {
            href: "https://github.com/lee-lou2",
            label: "깃헙",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "콘텐츠",
            items: [
              {
                label: "파이썬 튜토리얼",
                to: "/docs/category/파이썬python",
              },
              {
                label: "고 튜토리얼",
                to: "/docs/category/고golang",
              },
              {
                label: "프로젝트",
                to: "/docs/category/프로젝트-구성",
              },
            ],
          },
          {
            title: "블로그",
            items: blogPaths.map(({ path, label }) => ({
              to: `/blog/${path}`,
              label: label,
            })),
          },
          {
            title: "기타",
            items: [
              {
                label: "깃헙",
                href: "https://github.com/lee-lou2",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} LOU2`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      metadata: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' },
      ],
    }),
  plugins: [
    [
      require.resolve('docusaurus-lunr-search'), {
        languages: ['en', 'ko']
      }
    ],
    [
      "@docusaurus/plugin-pwa",
      {
        debug: true,
        offlineModeActivationStrategies: [
          "appInstalled",
          "standalone",
          "queryString",
        ],
        pwaHead: [
          {
            tagName: "link",
            rel: "icon",
            href: "/img/favicon.ico",
          },
          {
            tagName: "link",
            rel: "manifest",
            href: "/manifest.json",
          },
          {
            tagName: "meta",
            name: "theme-color",
            content: "rgb(37, 194, 160)",
          },
        ],
      },
    ],
    ...blogPaths.map(({ path, label }) => [
      '@docusaurus/plugin-content-blog',
      {
        ...blogConfig,
        id: `blog-${path}`,
        path: `contents/blog/${path}`,
        routeBasePath: `blog/${path}`,
      },
    ])
  ],
  customFields: {
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
    FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
    FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
    FIREBASE_MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID,
    FIREBASE_VAPID_KEY: process.env.FIREBASE_VAPID_KEY,
    API_SERVER_HOST: process.env.API_SERVER_HOST
  },
};
module.exports = config;

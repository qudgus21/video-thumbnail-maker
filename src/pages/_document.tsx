import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "name": "Thumbnail Generator for YouTube Videos",
        "description": "A tool for generating thumbnails from YouTube videos.",
        "thumbnailUrl": "https://www.example.com/thumbnail-preview.png",
        "uploadDate": "2024-07-30T00:00:00Z",
        "contentUrl": "https://www.example.com/video",
        "embedUrl": "https://www.example.com/embed/video",
        "duration": "PT1M30S",
        "interactionCount": "12345"
    };

  return (
      <Html lang="en">
        <title>Video Thumbnail Maker</title>
          <Head>
              <meta
                  name="description"
                  content="Create stunning video thumbnails with our easy-to-use Video Thumbnail Maker. Perfect for YouTube creators looking to enhance their video's visual appeal and attract more viewers."
              />
              <meta
                  name="keywords"
                  content="video thumbnail maker, YouTube thumbnails, custom thumbnails, thumbnail generator, video creator tools, video editing, YouTube SEO"
              />
              <meta name="robots" content="index, follow"/>
              <link rel="canonical" href="https://www.example.com"/>
              <meta
                  property="og:title"
                  content="Video Thumbnail Maker - Create Stunning Thumbnails for YouTube"
              />
              <meta
                  property="og:description"
                  content="Create stunning video thumbnails with our easy-to-use Video Thumbnail Maker. Perfect for YouTube creators looking to enhance their video's visual appeal and attract more viewers."
              />
              <meta
                  property="og:image"
                  content="https://www.example.com/thumbnail-preview.png"
              />
              ㅔ
              <meta
                  property="og:url"
                  content="https://www.example.com/"
              />
              <meta
                  name="twitter:card"
                  content="summary_large_image"
              />
              <meta
                  name="twitter:title"
                  content="Video Thumbnail Maker - Create Stunning Thumbnails for YouTube"
              />
              <meta
                  name="twitter:description"
                  content="Create stunning video thumbnails with our easy-to-use Video Thumbnail Maker. Perfect for YouTube creators looking to enhance their video's visual appeal and attract more viewers."
              />
              <meta
                  name="twitter:image"
                  content="https://www.example.com/thumbnail-preview.png"
              />

              {/* JSON-LD Structured Data */}
              <script type="application/ld+json">
                  {JSON.stringify(structuredData)}
              </script>
          </Head>
          <body>
          <Main/>
          <NextScript/>
          </body>
      </Html>
  );
}

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Video Thumbnail Maker - Create Stunning Thumbnails for YouTube",
    "description": "Create stunning video thumbnails with our easy-to-use Video Thumbnail Maker. Perfect for YouTube creators looking to enhance their video's visual appeal and attract more viewers.",
    "url": "https://www.thumbnailvideo.com",
    "thumbnailUrl": "https://www.thumbnailvideo.com/thumbnail.png",
    "author": {
      "@type": "Person",
      "name": "qudgus21"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Video Thumbnail Maker",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.thumbnailvideo.com/logo.png"
      }
    }
  }


  return (
      <Html lang="en">
        <Head>
          <meta
            name="description"
            content="Create stunning video thumbnails with our easy-to-use Video Thumbnail Maker. Perfect for YouTube creators looking to enhance their video's visual appeal and attract more viewers."
          />
          <meta
            name="keywords"
            content="video thumbnail maker, YouTube thumbnails, custom thumbnails, thumbnail generator, video creator tools, video editing, YouTube SEO"
          />
          <meta name="author" content="qudgus21"/>

          <meta property="og:type" content="website"/>
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
            content="https://www.thumbnailvideo.com/thumbnail.png"
          />
          <meta
            property="og:url"
            content="https://www.thumbnailvideo.com"
          />
          <meta property="og:site_name" content="Video Thumbnail Maker"></meta>

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
            content="https://www.thumbnailvideo.com/thumbnail.png"
          />
          <script type="application/ld+json">
            {JSON.stringify(structuredData)}
          </script>
          <script async
                  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4113492235812561"
                  crossOrigin="anonymous"></script>
          <link rel="canonical" href="https://www.thumbnailvideo.com"/>
        </Head>
        <body>
        <Main/>
        <NextScript/>
        </body>
      </Html>
  );
}

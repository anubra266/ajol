const siteUrl = "https://ajol.ml";
const siteConfig = {
  seo: {
    title: "Ajol",
    titleTemplate: "%s - Ajol",
    description: "Simple Job Listings Site",
    siteUrl,
    twitter: {
      handle: "@chakra-ui",
      site: "@chakra-ui",
      cardType: "summary_large_image",
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: siteUrl,
      title: "Ajol",
      description: "Simple Job Listings Site",
      site_name: "Ajol: Simple Job Listings Site",
      images: [
        {
          url: "/preview.png",
          width: 1240,
          height: 480,
          alt: "Ajol: Simple Job Listings Site",
        },
        {
          url: "/twitter-og-image.png",
          width: 1012,
          height: 506,
          alt: "Ajol: Simple Job Listings Site",
        },
      ],
    },
  },
};

export default siteConfig;

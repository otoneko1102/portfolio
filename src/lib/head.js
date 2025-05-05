import me from '$lib/me.js';

const data = {
  title: me.domain,
  description: me.name + "のポートフォリオサイト",
  color: me.color,
  domain: me.domain
};

export default {
  title: data.title,
  meta:[
    { name: "description", content: data.description },
    { name: "theme-color", content: data.color },
    // OG
    { property: "og:title", content: data.title },
    { property: "og:description", content: data.description },
    { property: "og:image", content: `https://${data.domain}/icon.png` },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: data.title },
    // Twitter
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: data.title },
    { name: "twitter:description", content: data.description },
    { name: "twitter:image", content: `https://${data.domain}/icon.png` },
    { name:"twitter:site", content: "@rin_pineapple" },
    // Other
    { name: "viewport", content: "width=device-width, intial-scale=1, maximum-scale=1, user-scalable=0" }
  ]
};

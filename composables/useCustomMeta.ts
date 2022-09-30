export const useCustomMeta = () => {
  let defaultDesc =
    "Candra Herdiana - Hey, I'm Candra, I'm a Front end web developer with experiences in web programming especially VueJS framework. I love building fun projects during my free time!"
  let defaultImage = "https://candra-herdiana.netlify.app/og.png"

  const setMeta = (title: string, desc = defaultDesc, image = defaultImage) => {
    useMeta({
      title,
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: desc },
        { name: "og:title", content: title },
        { name: "og:site_name", content: "Candra Herdiana" },
        { name: "og:description", content: desc },
        { name: "og:type", content: "website" },
        { name: "og:url", content: "https://candra-herdiana.netlify.app/" },
        { name: "og:image", content: image },

        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:site", content: "@cand_99" },
        { name: "twitter:creator", content: "@cand_99" },
        { name: "twitter:title", content: "Candra Herdiana" },
        { name: "twitter:description", content: desc },
        { name: "twitter:image", content: image },
      ],
      link: [{ rel: "icon", type: "image/png", href: "/favicon.ico" }],
    })
  }

  return {
    setMeta,
  }
}

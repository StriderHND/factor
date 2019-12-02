import { Component } from "vue"
export default {
  headTags: {
    font: `<link href="https://fonts.googleapis.com/css?family=Poppins:400,700" rel="stylesheet" />`
  },
  site: {
    logo: (): Promise<Component> => import("./el/logo.vue"),
    nav: [
      {
        path: "/",
        name: "Intro"
      },
      {
        path: "/about",
        name: "About"
      },
      {
        path: "/work",
        name: "Work"
      },
      {
        path: "/blog",
        name: "Blog"
      },
      {
        path: "/contact",
        name: "Contact"
      }
    ],
    social: [
      {
        path: "https://dribbble.com",
        icon: "dribbble"
      },
      {
        path: "https://behance.com/",
        icon: "behance"
      },
      {
        path: "https://instagram.com/",
        icon: "instagram"
      },
      {
        path: "https://twitter.com/",
        icon: "twitter"
      },
      {
        path: "https://linkedin.com/",
        icon: "linkedin"
      }
    ],
    clientsTitle: "Clients",
    clients: [
      {
        path: "https://www.behance.net/",
        icon: require("./img/client1.svg"),
        text: "Behance"
      },
      {
        path: "https://dribbble.com/",
        icon: require("./img/client2.svg"),
        text: "Dribbble"
      },
      {
        path: "https://www.tomposer.com/",
        icon: require("./img/client3.svg"),
        text: "Tom Poser"
      },
      {
        path: "https://twitter.com",
        icon: require("./img/client4.svg"),
        text: "Twitter"
      }
    ],
    cta: {
      headline: "For work inquiries, collaboration or feedback",
      path: "/contact",
      text: "Get in Touch"
    }
  },
  footer: {
    legal: "&copy; 2019 Factor Alpha Theme by Fiction Inc. All rights reserved.",
    nav: [
      {
        path: "/admin",
        text: "Sign In"
      },
      {
        path: "https://www.fiction.com/terms-of-service",
        text: "Terms of Service"
      },
      {
        path: "https://www.fiction.com/privacy-policy",
        text: "Privacy Policy"
      }
    ]
  },
  home: {
    meta: {
      title: "Factor Alpha Theme",
      description:
        "A minimal, personal or portfolio theme. Ideal for entrepreneurs or individuals of multiple creative professions."
    },
    preheadline: "Alpha Theme",
    headline: "Hello, I’m Alpha. <br>A minimal, personal or portfolio theme.",
    subheadline:
      "Built with focus on a minimal and functional interface that delivers a bold visual experience.",
    actions: [
      {
        path: "/work",
        text: "View Work"
      }
    ],
    boxesTitle: "Check out the skills.",
    boxes: [
      {
        icon: require("./img/icon-ux.svg"),
        heading: "User Experience Design",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"
      },
      {
        icon: require("./img/icon-ui.svg"),
        heading: "User Interface Design",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"
      },
      {
        icon: require("./img/icon-web.svg"),
        heading: "Front-end Development",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"
      },
      {
        icon: require("./img/icon-prototype.svg"),
        heading: "Prototyping",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"
      }
    ]
  },
  about: {
    meta: {
      title: "Factor Alpha Theme",
      description:
        "A minimal, personal or portfolio theme. Ideal for entrepreneurs or individuals of multiple creative professions."
    },
    headline: "About",
    subheadline: "Designer and Illustrator based in San Francisco.",
    content:
      "Adam is an award-winning designer and art director based in San Francisco. His work appears internationally in magazines, newspapers, advertisements and children's books.",
    heroImage: require("./img/about.jpg")
  },
  work: {
    headline: "Work",
    subheadline: "The simple way to showcase your work.",
    content:
      "Showcase your work in a breeze using modern technology. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    heroImage: require("./img/work.jpg"),
    metatags: {
      title: "Work - Factor Alpha Theme",
      description:
        "A minimal, personal or portfolio theme. Ideal for entrepreneurs or individuals of multiple creative professions."
    },
    indexRoute: "/work",
    postRoute: "/work",
    limit: 8,
    returnLinkText: "All Projects",
    layout: {
      index: ["workFeaturedImage", "workHeaders"],
      single: ["workHeaders", "workFeaturedImage", "workTags", "workEntry"]
    },
    components: {
      workWrap: (): Promise<Component> => import("./work/work-wrap.vue"),
      workIndex: (): Promise<Component> => import("./work/work-index.vue"),
      workSingle: (): Promise<Component> => import("./work/work-single.vue"),
      workFeaturedImage: (): Promise<Component> => import("./work/el-featured-image.vue"),
      workHeaders: (): Promise<Component> => import("./work/el-headers.vue"),
      workTags: (): Promise<Component> => import("./work/el-tags.vue"),
      workEntry: (): Promise<Component> => import("./work/el-entry.vue")
    }
  },
  blog: {
    indexRoute: "/blog",
    postRoute: "/entry",
    limit: 6,
    returnLinkText: "Back",
    headline: "Blog",
    subheadline: "The Latest From Alpha",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    heroImage: require("./img/blog.jpg"),
    metatags: {
      index: {
        title: "Blog - The Latest from Factor Alpha Theme",
        description:
          "A minimal, personal or portfolio theme. Ideal for entrepreneurs or individuals of multiple creative professions."
      }
    },
    notFound: {
      title: "No Posts",
      subTitle: "Couldn't find any blog posts."
    },
    layout: {
      index: ["blogFeaturedImage", "blogHeaders", "blogExcerpt", "blogMeta"],
      single: [
        "blogHeaders",
        "blogFeaturedImage",
        "blogMeta",
        "entry",
        "social",
        "authorBio"
      ],
      meta: ["authorDate", "tags"]
    },
    components: {
      blogWrap: (): Promise<Component> => import("./blog/blog-wrap.vue"),
      blogIndex: (): Promise<Component> => import("./blog/blog-index.vue"),
      blogSingle: (): Promise<Component> => import("./blog/blog-single.vue"),
      blogFeaturedImage: (): Promise<Component> => import("./blog/el-featured-image.vue"),
      blogHeaders: (): Promise<Component> => import("./blog/el-headers.vue"),
      blogReturnLink: (): Promise<Component> => import("./blog/el-return-link.vue"),
      blogExcerpt: (): Promise<Component> => import("./blog/el-excerpt.vue"),
      blogMeta: (): Promise<Component> => import("./blog/el-meta.vue")
    }
  },
  contact: {
    metatags: {
      title: "Contact - Factor Alpha Theme",
      description:
        "A minimal, personal or portfolio theme. Ideal for entrepreneurs or individuals of multiple creative professions."
    },
    headline: "Contact",
    subheadline: "Let's Talk!",
    content:
      "Drop me a note and I’ll get back to you within 24 hours. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    heroImage: require("./img/contact.jpg"),
    form: {
      namePlaceholder: "Name",
      emailPlaceholder: "Email Address",
      messagePlaceholder: "Message",
      buttonText: "Contact"
    }
  }
}
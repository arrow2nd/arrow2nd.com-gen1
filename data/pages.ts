type PageLink = {
  name: string;
  href: string;
};

/** 各ページへのリンク */
export const pageLinks: PageLink[] = [
  {
    name: "about",
    href: "/about"
  },
  {
    name: "works",
    href: "/category/game"
  }
];

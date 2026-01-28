import type { RehypePlugin } from "@astrojs/markdown-remark";
import { visit } from "unist-util-visit";
import { h } from "hastscript";
import type { Element, Root } from "hast";

export const copyLinkHeader: RehypePlugin = () => {
    return (tree: Root) => {
        let didInjectAssets = false;

        visit(tree, "element", (node: Element) => {
            if (!isHeadingWithId(node)) return;

            // Add the link anchor
            const id = node.properties!.id as string;
            const anchor = h("a", {
                href: `#${id}`,
                class: "anchor-link",
                onclick: "copyLink(event, this)"
            });

            node.children.push(anchor);

            // Inject assets once
            if (!didInjectAssets) {
                injectAssets(tree);
                didInjectAssets = true;
            }
        });
    };
};

const isHeadingWithId = (element: Element): boolean => {
    return (
        /^h[1-6]$/.test(element.tagName) &&
        element.properties !== undefined &&
        "id" in element.properties
    );
};

const injectAssets = (tree: Root) => {
    const style = h("style", {}, `
    .anchor-link {
      display: inline-block;
      transform: translateX(-1em);
      opacity: 0;
      transition: opacity 0.3s ease, transform 0.3s ease;
      text-decoration: none;
    }

    h1:hover .anchor-link,
    h2:hover .anchor-link,
    h3:hover .anchor-link,
    h4:hover .anchor-link,
    h5:hover .anchor-link,
    h6:hover .anchor-link {
      opacity: 1;
      transform: translateX(0em);
    }

    .anchor-link::before {
      content: '🔗';
    }

    .anchor-link.copied::before {
      content: '✅';
    }
  `);

    const script = h("script", { type: "text/javascript" }, `
    function copyLink(event, el) {
      event.preventDefault();
      const url = window.location.origin + window.location.pathname + el.getAttribute('href');
      navigator.clipboard.writeText(url).then(() => {
        el.classList.add('copied');
        setTimeout(() => {
          el.classList.remove('copied');
        }, 1500);
      });
    }
  `);

    tree.children.push(style, script);
};

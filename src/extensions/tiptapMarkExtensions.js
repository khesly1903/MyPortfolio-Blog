import StarterKit from "@tiptap/starter-kit";
import Highlight from "@tiptap/extension-highlight";
import Code from "@tiptap/extension-code";
import Link from "@tiptap/extension-link";
import Superscript from "@tiptap/extension-superscript";
import Subscript from "@tiptap/extension-subscript";
import { ListItem } from "@tiptap/extension-list";
import HorizontalRule from "@tiptap/extension-horizontal-rule";

const tiptapMarkExtensions = [
  StarterKit,
  Subscript,
  Superscript,
  HorizontalRule,

  Highlight.configure({
    HTMLAttributes: {
      class: "bubble-menu-highlight",
    },
  }),

  Code.configure({
    HTMLAttributes: {
      class: "float-menu-code",
    },
  }),

  Link.configure({
    HTMLAttributes: {
      class: "float-menu-link",
    },
    openOnClick: false,
    autolink: true,
    defaultProtocol: "https",
    protocols: ["http", "https"],
    isAllowedUri: (url, ctx) => {
      try {
        // construct URL
        const parsedUrl = url.includes(":")
          ? new URL(url)
          : new URL(`${ctx.defaultProtocol}://${url}`);

        // use default validation
        if (!ctx.defaultValidate(parsedUrl.href)) {
          return false;
        }

        // disallowed protocols
        const disallowedProtocols = ["ftp", "file", "mailto"];
        const protocol = parsedUrl.protocol.replace(":", "");

        if (disallowedProtocols.includes(protocol)) {
          return false;
        }

        // only allow protocols specified in ctx.protocols
        const allowedProtocols = ctx.protocols.map((p) =>
          typeof p === "string" ? p : p.scheme
        );

        if (!allowedProtocols.includes(protocol)) {
          return false;
        }

        // disallowed domains
        const disallowedDomains = [
          "example-phishing.com",
          "malicious-site.net",
        ];
        const domain = parsedUrl.hostname;

        if (disallowedDomains.includes(domain)) {
          return false;
        }

        // all checks have passed
        return true;
      } catch {
        return false;
      }
    },
    shouldAutoLink: (url) => {
      try {
        // construct URL
        const parsedUrl = url.includes(":")
          ? new URL(url)
          : new URL(`https://${url}`);

        // only auto-link if the domain is not in the disallowed list
        const disallowedDomains = [
          "example-no-autolink.com",
          "another-no-autolink.com",
        ];
        const domain = parsedUrl.hostname;

        return !disallowedDomains.includes(domain);
      } catch {
        return false;
      }
    },
  }),

  ListItem.configure({
    HTMLAttributes: {
      class: "float-menu-list",
    },
  }),
  HorizontalRule.configure({
    HTMLAttributes: {
      class: "float-menu-horizontal-rule",
    },
  }),
];
export default tiptapMarkExtensions;

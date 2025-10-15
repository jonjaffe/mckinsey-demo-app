import { Builder } from "@builder.io/react";
import {Hero} from "./components/Hero";
import {ImageTextCard} from "./components/ImageTextCard";
import {BlogSection} from "./components/BlogSection";
import {SocietalImpact} from "./components/SocietalImpact";

Builder.register("insertMenu", {
  name: "McKinsey Components",
  items: [
    {name: "Hero"},
    {name: "ImageTextCard"},
    {name: "BlogSection"},
    {name: "SocietalImpact"},
  ]
})

Builder.registerComponent(Hero, {
  name: "Hero",
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: "What's your next brilliant move?",
      required: true,
    },
    {
      name: "subtitle",
      type: "string",
      defaultValue: "",
      required: false,
    },
    {
      name: "ctaText",
      type: "string",
      defaultValue: "Get started",
      required: true,
    },
    {
      name: "ctaLink",
      type: "string",
      defaultValue: "#",
      required: true,
    },
    {
      name: "backgroundImage",
      type: "string",
      defaultValue: "https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      required: false,
    },
  ],
} as any);

Builder.registerComponent(ImageTextCard, {
  name: "ImageTextCard",
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: "McKinsey Technology Trends Outlook 2025",
      required: true,
    },
    {
      name: "description",
      type: "string",
      defaultValue: "Which new technology will have the most impact in 2025 and beyond? Our annual analysis ranks the top tech trends that matter most for companies and executives.",
      required: true,
    },
    {
      name: "ctaText",
      type: "string",
      defaultValue: "Download the 108-page report",
      required: true,
    },
    {
      name: "ctaLink",
      type: "string",
      defaultValue: "#",
      required: true,
    },
    {
      name: "image",
      type: "string",
      defaultValue: "https://assets.bizclikmedia.net/1336/7391c3637ad5e0befd93f4d8c50f3285:868989dd7f67fc85460df97bbe1d4f0d/mckinsey-main.webp",
      required: true,
    },
    {
      name: "imagePosition",
      type: "string",
      defaultValue: "left",
      enum: ["left", "right", "top"],
      required: false,
    },
    {
      name: "backgroundColor",
      type: "string",
      defaultValue: "bg-gradient-to-br from-blue-600 to-purple-700",
      required: false,
    },
    {
      name: "textColor",
      type: "string",
      defaultValue: "text-white",
      required: false,
    },
  ],
} as any);

Builder.registerComponent(BlogSection, {
  name: "BlogSection",
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: "Latest Insights",
      required: true,
    },
    {
      name: "showHeader",
      type: "boolean",
      defaultValue: true,
      required: false,
    },
  ],
} as any);

Builder.registerComponent(SocietalImpact, {
  name: "SocietalImpact",
  inputs: [
    {
      name: "eyebrow",
      type: "string",
      defaultValue: "Societal Impact",
      required: false,
    },
    {
      name: "heading",
      type: "string",
      defaultValue: "Sharing our best to help more people succeed",
      required: true,
    },
    {
      name: "cards",
      type: "list",
      defaultValue: [],
      required: false,
      subFields: [
        {
          name: "image",
          type: "string",
          required: true,
        },
        {
          name: "title",
          type: "string",
          required: true,
        },
        {
          name: "description",
          type: "string",
          required: true,
        },
        {
          name: "link",
          type: "string",
          required: true,
        },
        {
          name: "highlighted",
          type: "boolean",
          defaultValue: false,
        },
      ],
    },
  ],
} as any);

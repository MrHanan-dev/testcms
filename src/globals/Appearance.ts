import type { GlobalConfig } from "payload";
import { logGlobalChange } from "@/lib/activityLogger";

/**
 * Appearance — WordPress-style theme customization.
 * Control colors, fonts, logo, favicon, and visual identity.
 */
export const Appearance: GlobalConfig = {
  slug: "appearance",
  label: "Appearance (Deprecated)",
  access: { read: () => true },
  hooks: {
    afterChange: [logGlobalChange],
  },
  admin: {
    group: "⚙️ Settings",
    description: "Theme colors — applied as CSS variables on the live site. Use Site Settings for logo/branding.",
  },
  fields: [
    {
      type: "tabs",
      tabs: [
        // ── Brand Identity ────────────────────────────────────────────────────
        {
          label: "🎨 Brand Identity",
          description: "Logo, favicon, and brand assets",
          fields: [
            {
              type: "collapsible",
              label: "📷 Logo Settings",
              admin: { initCollapsed: false },
              fields: [
                {
                  name: "logo",
                  type: "upload",
                  relationTo: "media",
                  label: "Primary Logo",
                  admin: {
                    description: "Main logo for header (PNG with transparent background, max 300px wide)",
                  },
                },
                {
                  name: "logoLight",
                  type: "upload",
                  relationTo: "media",
                  label: "Light Logo (for dark backgrounds)",
                  admin: {
                    description: "White/light version of logo for dark sections",
                  },
                },
                {
                  name: "logoDark",
                  type: "upload",
                  relationTo: "media",
                  label: "Dark Logo (for light backgrounds)",
                  admin: {
                    description: "Dark version of logo for light sections",
                  },
                },
                {
                  type: "row",
                  fields: [
                    {
                      name: "logoWidth",
                      type: "number",
                      label: "Logo Width (px)",
                      defaultValue: 180,
                      admin: { width: "50%", description: "Header logo width" },
                    },
                    {
                      name: "logoHeight",
                      type: "number",
                      label: "Logo Height (px)",
                      admin: { width: "50%", description: "Leave empty for auto" },
                    },
                  ],
                },
              ],
            },
            {
              type: "collapsible",
              label: "🔖 Favicon & Icons",
              fields: [
                {
                  name: "favicon",
                  type: "upload",
                  relationTo: "media",
                  label: "Favicon",
                  admin: {
                    description: "Browser tab icon (32x32px PNG or ICO)",
                  },
                },
                {
                  name: "appleTouchIcon",
                  type: "upload",
                  relationTo: "media",
                  label: "Apple Touch Icon",
                  admin: {
                    description: "iOS home screen icon (180x180px PNG)",
                  },
                },
                {
                  name: "ogDefaultImage",
                  type: "upload",
                  relationTo: "media",
                  label: "Default Social Share Image",
                  admin: {
                    description: "Default image for social sharing (1200x630px)",
                  },
                },
              ],
            },
          ],
        },

        // ── Colors ────────────────────────────────────────────────────────────
        {
          label: "🎨 Colors",
          description: "Brand colors and color scheme",
          fields: [
            {
              type: "collapsible",
              label: "🔵 Primary Colors",
              admin: { initCollapsed: false },
              fields: [
                {
                  type: "row",
                  fields: [
                    {
                      name: "primaryColor",
                      type: "text",
                      label: "Primary Color",
                      defaultValue: "#0B3C5D",
                      admin: {
                        width: "33%",
                        placeholder: "#0B3C5D",
                        description: "Main brand color (buttons, links)",
                      },
                    },
                    {
                      name: "primaryHover",
                      type: "text",
                      label: "Primary Hover",
                      defaultValue: "#0a3350",
                      admin: {
                        width: "33%",
                        placeholder: "#0a3350",
                        description: "Darker shade for hover states",
                      },
                    },
                    {
                      name: "primaryLight",
                      type: "text",
                      label: "Primary Light",
                      defaultValue: "#e8f4f8",
                      admin: {
                        width: "33%",
                        placeholder: "#e8f4f8",
                        description: "Light tint for backgrounds",
                      },
                    },
                  ],
                },
              ],
            },
            {
              type: "collapsible",
              label: "🟠 Accent Colors",
              fields: [
                {
                  type: "row",
                  fields: [
                    {
                      name: "accentColor",
                      type: "text",
                      label: "Accent Color",
                      defaultValue: "#D4A03E",
                      admin: {
                        width: "33%",
                        placeholder: "#D4A03E",
                        description: "Secondary brand color",
                      },
                    },
                    {
                      name: "accentHover",
                      type: "text",
                      label: "Accent Hover",
                      defaultValue: "#c4902e",
                      admin: {
                        width: "33%",
                        placeholder: "#c4902e",
                      },
                    },
                    {
                      name: "accentLight",
                      type: "text",
                      label: "Accent Light",
                      defaultValue: "#fef8e8",
                      admin: {
                        width: "33%",
                        placeholder: "#fef8e8",
                      },
                    },
                  ],
                },
              ],
            },
            {
              type: "collapsible",
              label: "⬛ Neutral Colors",
              fields: [
                {
                  type: "row",
                  fields: [
                    {
                      name: "textColor",
                      type: "text",
                      label: "Text Color",
                      defaultValue: "#1e293b",
                      admin: { width: "25%", placeholder: "#1e293b" },
                    },
                    {
                      name: "textMuted",
                      type: "text",
                      label: "Muted Text",
                      defaultValue: "#64748b",
                      admin: { width: "25%", placeholder: "#64748b" },
                    },
                    {
                      name: "backgroundColor",
                      type: "text",
                      label: "Background",
                      defaultValue: "#ffffff",
                      admin: { width: "25%", placeholder: "#ffffff" },
                    },
                    {
                      name: "surfaceColor",
                      type: "text",
                      label: "Surface/Cards",
                      defaultValue: "#f8fafc",
                      admin: { width: "25%", placeholder: "#f8fafc" },
                    },
                  ],
                },
              ],
            },
            {
              type: "collapsible",
              label: "✅ Status Colors",
              fields: [
                {
                  type: "row",
                  fields: [
                    {
                      name: "successColor",
                      type: "text",
                      label: "Success",
                      defaultValue: "#16a34a",
                      admin: { width: "25%", placeholder: "#16a34a" },
                    },
                    {
                      name: "warningColor",
                      type: "text",
                      label: "Warning",
                      defaultValue: "#f59e0b",
                      admin: { width: "25%", placeholder: "#f59e0b" },
                    },
                    {
                      name: "errorColor",
                      type: "text",
                      label: "Error",
                      defaultValue: "#dc2626",
                      admin: { width: "25%", placeholder: "#dc2626" },
                    },
                    {
                      name: "infoColor",
                      type: "text",
                      label: "Info",
                      defaultValue: "#0284c7",
                      admin: { width: "25%", placeholder: "#0284c7" },
                    },
                  ],
                },
              ],
            },
          ],
        },

        // ── Typography ────────────────────────────────────────────────────────
        {
          label: "✏️ Typography",
          description: "Font families and text styling",
          fields: [
            {
              type: "row",
              fields: [
                {
                  name: "headingFont",
                  type: "select",
                  label: "Heading Font",
                  defaultValue: "inter",
                  admin: { width: "50%" },
                  options: [
                    { label: "Inter (Modern)", value: "inter" },
                    { label: "Poppins (Friendly)", value: "poppins" },
                    { label: "Playfair Display (Elegant)", value: "playfair" },
                    { label: "Montserrat (Professional)", value: "montserrat" },
                    { label: "Roboto (Clean)", value: "roboto" },
                    { label: "Open Sans (Readable)", value: "opensans" },
                    { label: "Lato (Balanced)", value: "lato" },
                    { label: "System Default", value: "system" },
                  ],
                },
                {
                  name: "bodyFont",
                  type: "select",
                  label: "Body Font",
                  defaultValue: "inter",
                  admin: { width: "50%" },
                  options: [
                    { label: "Inter (Modern)", value: "inter" },
                    { label: "Open Sans (Readable)", value: "opensans" },
                    { label: "Roboto (Clean)", value: "roboto" },
                    { label: "Lato (Balanced)", value: "lato" },
                    { label: "Source Sans Pro", value: "sourcesans" },
                    { label: "Nunito (Soft)", value: "nunito" },
                    { label: "System Default", value: "system" },
                  ],
                },
              ],
            },
            {
              type: "row",
              fields: [
                {
                  name: "baseFontSize",
                  type: "select",
                  label: "Base Font Size",
                  defaultValue: "16",
                  admin: { width: "33%" },
                  options: [
                    { label: "14px (Compact)", value: "14" },
                    { label: "15px (Small)", value: "15" },
                    { label: "16px (Default)", value: "16" },
                    { label: "17px (Medium)", value: "17" },
                    { label: "18px (Large)", value: "18" },
                  ],
                },
                {
                  name: "headingWeight",
                  type: "select",
                  label: "Heading Weight",
                  defaultValue: "700",
                  admin: { width: "33%" },
                  options: [
                    { label: "Semi-Bold (600)", value: "600" },
                    { label: "Bold (700)", value: "700" },
                    { label: "Extra-Bold (800)", value: "800" },
                    { label: "Black (900)", value: "900" },
                  ],
                },
                {
                  name: "lineHeight",
                  type: "select",
                  label: "Line Height",
                  defaultValue: "1.6",
                  admin: { width: "33%" },
                  options: [
                    { label: "Tight (1.4)", value: "1.4" },
                    { label: "Normal (1.5)", value: "1.5" },
                    { label: "Relaxed (1.6)", value: "1.6" },
                    { label: "Loose (1.75)", value: "1.75" },
                  ],
                },
              ],
            },
            {
              name: "customFontUrl",
              type: "text",
              label: "Custom Google Font URL",
              admin: {
                placeholder: "https://fonts.googleapis.com/css2?family=Your+Font&display=swap",
                description: "Import additional fonts from Google Fonts",
              },
            },
          ],
        },

        // ── Layout ────────────────────────────────────────────────────────────
        {
          label: "📐 Layout",
          description: "Spacing, borders, and layout options",
          fields: [
            {
              type: "row",
              fields: [
                {
                  name: "containerWidth",
                  type: "select",
                  label: "Content Width",
                  defaultValue: "1280",
                  admin: { width: "33%" },
                  options: [
                    { label: "Narrow (1024px)", value: "1024" },
                    { label: "Standard (1280px)", value: "1280" },
                    { label: "Wide (1440px)", value: "1440" },
                    { label: "Full Width", value: "full" },
                  ],
                },
                {
                  name: "borderRadius",
                  type: "select",
                  label: "Border Radius",
                  defaultValue: "8",
                  admin: { width: "33%" },
                  options: [
                    { label: "None (0px)", value: "0" },
                    { label: "Subtle (4px)", value: "4" },
                    { label: "Medium (8px)", value: "8" },
                    { label: "Rounded (12px)", value: "12" },
                    { label: "Pill (16px)", value: "16" },
                  ],
                },
                {
                  name: "buttonStyle",
                  type: "select",
                  label: "Button Style",
                  defaultValue: "rounded",
                  admin: { width: "33%" },
                  options: [
                    { label: "Square", value: "square" },
                    { label: "Rounded", value: "rounded" },
                    { label: "Pill", value: "pill" },
                  ],
                },
              ],
            },
            {
              type: "row",
              fields: [
                {
                  name: "headerStyle",
                  type: "select",
                  label: "Header Style",
                  defaultValue: "sticky",
                  admin: { width: "50%" },
                  options: [
                    { label: "Static", value: "static" },
                    { label: "Sticky", value: "sticky" },
                    { label: "Transparent (overlaps hero)", value: "transparent" },
                  ],
                },
                {
                  name: "footerStyle",
                  type: "select",
                  label: "Footer Style",
                  defaultValue: "standard",
                  admin: { width: "50%" },
                  options: [
                    { label: "Standard", value: "standard" },
                    { label: "Minimal", value: "minimal" },
                    { label: "Centered", value: "centered" },
                  ],
                },
              ],
            },
          ],
        },

        // ── Effects ───────────────────────────────────────────────────────────
        {
          label: "✨ Effects",
          description: "Animations and visual effects",
          fields: [
            {
              type: "row",
              fields: [
                {
                  name: "enableAnimations",
                  type: "checkbox",
                  label: "Enable Animations",
                  defaultValue: true,
                  admin: { width: "33%" },
                },
                {
                  name: "enableSmoothScroll",
                  type: "checkbox",
                  label: "Smooth Scrolling",
                  defaultValue: true,
                  admin: { width: "33%" },
                },
                {
                  name: "enableHoverEffects",
                  type: "checkbox",
                  label: "Hover Effects",
                  defaultValue: true,
                  admin: { width: "33%" },
                },
              ],
            },
            {
              name: "animationSpeed",
              type: "select",
              label: "Animation Speed",
              defaultValue: "normal",
              options: [
                { label: "Slow", value: "slow" },
                { label: "Normal", value: "normal" },
                { label: "Fast", value: "fast" },
              ],
            },
            {
              name: "shadowStyle",
              type: "select",
              label: "Shadow Style",
              defaultValue: "medium",
              options: [
                { label: "None", value: "none" },
                { label: "Subtle", value: "subtle" },
                { label: "Medium", value: "medium" },
                { label: "Strong", value: "strong" },
              ],
            },
          ],
        },
      ],
    },
  ],
};

import type { CmsConfig } from "netlify-cms-core"

export const config: Omit<CmsConfig, "load_config_file" | "local_backend"> = {
  backend: {
    name: "github",
    repo: "MAHENDRABUYONEGRAM/Buy1Gram",
    branch: "main",
  },
  publish_mode: "editorial_workflow",
  media_folder: "/static/media/uploads",
  public_folder: "media/uploads",
  site_url: "https://buyonegram.com",
  display_url: "https:buyonegram.com",
  logo_url: "https://buyonegram.com/android-chrome-192x192.png",
  collections: [
    {
      name: "blogs",
      label: "Blogs",
      folder: "/src/content/blog",
      create: true,
      slug: "{{slug}}",
      label_singular: "Blog",
      fields: [
        {
          label: "Hero Image",
          name: "heroImage",
          widget: "image",
        },
        {
          label: "Title",
          name: "title",
          widget: "string",
        },
        {
          label: "Publish Date",
          name: "pubDate",
          widget: "datetime",
        },
        {
          label: "Description",
          name: "description",
          widget: "text",
        },
        {
          label: "Body",
          name: "body",
          widget: "markdown",
        },
      ],
    },
    {
      name: "products",
      label: "Products",
      folder: "/src/content/products",
      create: true,
      slug: "{{slug}}",
      label_singular: "Product",
      fields: [
        {
          label: "SR.NO",
          name: "srNo",
          widget: "number",
        },
        {
          label: "Product Name",
          name: "productName",
          widget: "string",
        },
        {
          label: "Category",
          name: "category",
          widget: "list",
          allow_add: true,
          default: ["Dal & Pulses"],
        },
        {
          label: "Product Details",
          name: "productDetails",
          widget: "object",
          fields: [
            {
              label: "Price",
              name: "price",
              widget: "object",
              fields: [
                {
                  label: "500 Gram Price",
                  name: "Price500",
                  widget: "number",
                  required: false,
                },
                {
                  label: "1 KiloGram Price",
                  name: "Price1",
                  widget: "number",
                },
              ],
            },
            {
              label: "Product Image",
              name: "productImage",
              widget: "object",
              fields: [
                {
                  label: "500 Gram Image",
                  name: "Image500",
                  widget: "image",
                  required: false,
                },
                {
                  label: "1 KiloGram Image",
                  name: "Image1",
                  widget: "image",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}

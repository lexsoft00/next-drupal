import Link from "next/link"
import Image from "next/image"
import { components } from "@reflexjs/mdx"
import { Tweet } from "mdx-embed"

import { Callout } from "components/callout"

export const mdxComponents = {
  ...components,
  hr: (props) => <hr my="14" {...props} />,
  Callout,
  Tweet,
  Link,
  Img: ({ src, width, height, layout, alt, children, ...props }) => (
    <figure {...props}>
      <div borderWidth="1" p="2" borderRadius="lg">
        <Image
          src={src}
          width={width}
          height={height}
          layout={layout}
          alt={alt}
        />
      </div>
      <figcaption variant="text.caption">{children}</figcaption>
    </figure>
  ),
  Video: ({ src, ...props }) => (
    <div borderWidth="1" p="2" borderRadius="lg">
      <video controls muted {...props}>
        <source src={src} type="video/mp4" />
      </video>
    </div>
  ),
}

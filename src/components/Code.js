export default function Code({
  name,
  description,
  url,
  banner,
  author,
  keywords,
}) {
  return (
    <>
      &lt;meta name="title" content="{name}" /&gt; <br /> &lt;meta
      name="description" content="{description}" /&gt; <br /> &lt;meta
      name="keywords" content="{keywords}" /&gt; <br /> &lt;meta
      http-equiv="Content-Type" content="text/html; charset=utf-8"/&gt; <br />
      &lt;meta name="language" content="English" /&gt; <br /> &lt;meta
      name="author" content="{author}" /&gt; <br /> &lt;meta name="viewport"
      content="width=device-width,initial-scale=1" /&gt; <br />
      &lt;meta property="og:type" content="website" /&gt; <br /> &lt;meta
      property="og:url" content="{url}" /&gt; <br />
      &lt;meta property="og:title" content="{name}" /&gt; <br /> &lt;meta
      property="og:description" content="{description}" /&gt; <br /> &lt;meta
      property="og:image" content="{banner}" /&gt; <br />
      &lt;meta property="twitter:card" content="summary_large_image" /&gt;{" "}
      <br /> &lt;meta property="twitter:url" content="{url}" /&gt; <br />{" "}
      &lt;meta property="twitter:title" content="{name}" /&gt; <br /> &lt;meta
      property="twitter:description" content="{description}" content="{banner}"
      /&gt;
    </>
  );
}

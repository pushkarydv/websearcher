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
      &lt;
      <R>meta</R> <O>name</O>=<G>"title"</G> <O>content</O>=<G>"{name}"</G>{" "}
      /&gt; <br /> &lt;
      <R>meta</R> <O>name</O>=<G>"description"</G> <O>content</O>=
      <G>"{description}"</G> /&gt; <br /> &lt;
      <R>meta</R> <O>name</O>=<G>"keywords"</G> <O>content</O>=
      <G>"{keywords}"</G>
      /&gt; <br /> &lt;
      <R>meta</R> <O>http-equiv</O>="<G>Content-Type"</G> <O>content</O>{" "}
      <G>="text/html; charset=utf-8"</G>/&gt; <br />
      &lt;<R>meta</R> <O>name</O>=<G>"language"</G> <O>content</O>=
      <G>"English"</G>
      /&gt; <br /> &lt;
      <R>meta</R> <O>name</O>=<G>"author"</G> <O>content</O>=<G>"{author}"</G>{" "}
      /&gt; <br /> &lt;
      <R>meta</R> <O>name</O>=<G>"viewport"</G> <O>content</O>
      <G>="width=device-width,initial-scale=1"</G> /&gt; <br />
      &lt;<R>meta</R> <O>property</O>=<G>"og:type"</G> <O>content</O>=
      <G>"website"</G>
      /&gt; <br /> &lt;
      <R>meta</R> <O>property</O>=<G>"og:url"</G> <O>content</O>=<G>"{url}"</G>{" "}
      /&gt; <br />
      &lt;<R>meta</R> <O>property</O>=<G>"og:title"</G> <O>content</O>=
      <G>"{name}"</G>
      /&gt; <br /> &lt;
      <R>meta</R> <O>property</O>=<G>"og:description"</G> <O>content</O>=
      <G>"{description}"</G> /&gt; <br /> &lt;
      <R>meta</R> <O>property</O>=<G>"og:image"</G> <O>content</O>=
      <G>"{banner}"</G>
      /&gt; <br />
      &lt;<R>meta</R> <O>property</O>=<G>"twitter:card"</G> <O>content</O>=
      <G>"summary_large_image"</G> /&gt; <br /> &lt;<R>meta</R> <O>property</O>=
      <G>"twitter:url"</G> <O>content</O>=<G>"{url}"</G> /&gt; <br /> &lt;
      <R>meta</R> <O>property</O>=<G>"twitter:title"</G> <O>content</O>=
      <G>"{name}"</G> /&gt; <br /> &lt;
      <R>meta</R> <O>property</O>=<G>"twitter:description"</G> <O>content</O>=
      <G>"{description}"</G> /&gt;
      <br /> &lt;<R>meta</R> <O>property</O>=<G>"twitter:image"</G>
      <O>content</O>=<G>"https://websearcher.vercel.app/banner.png"</G>
      /&gt;
    </>
  );
}
function R({ children }) {
  return <span className="text-red-500">{children} </span>;
}
function O({ children }) {
  return <span className="text-orange-400">{children}</span>;
}
function G({ children }) {
  return <span className="text-green-400">{children}</span>;
}

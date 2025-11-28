import { getAllPostSlugs, getPostData, NewsMatter } from "@/lib/content";
import Markdown from 'markdown-to-jsx';
import Image from "next/image"; // For hero images
import Link from "next/link";
import { notFound } from 'next/navigation';

// Type definitions for News data
interface NewsData extends NewsMatter {
  content: string; // Markdown content
}

// Generate static params for all news slugs
export async function generateStaticParams() {
  const slugs = getAllPostSlugs('news');
  const params = slugs.map((slug) => ({
    slug: slug.slug,
  }));
  return params;
}

export default async function NewsPage({ params }: { params: { slug: string } }) {
  if (!params.slug) {
    notFound(); // Or handle the error appropriately
  }
  const news = await getPostData('news', params.slug) as NewsData;

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-heading text-primary-main text-center mb-12">
        {news.title}
      </h1>

      <div className="text-center text-gray-600 mb-8">
        <p className="font-body text-lg">
          <strong className="font-semibold">Data:</strong> {news.date} |{" "}
          <strong className="font-semibold">Kategoria:</strong> {news.category} |{" "}
          <strong className="font-semibold">Autor:</strong> {news.author}
        </p>
      </div>

      {news.heroImage && (
        <div className="mb-8 relative w-full h-96 bg-neutral-bg flex items-center justify-center rounded-card shadow-soft overflow-hidden">
          <Image
            src={news.heroImage}
            alt={news.altText || news.title}
            layout="fill"
            objectFit="cover"
            className="rounded-card"
          />
        </div>
      )}

      <article className="prose lg:prose-xl mx-auto font-body text-gray-800">
        <Markdown options={{
          overrides: {
            h1: { component: (props: any) => <h2 className="text-3xl font-heading text-primary-main mb-4" {...props} /> },
            h2: { component: (props: any) => <h3 className="text-2xl font-heading text-primary-main mb-3" {...props} /> },
            h3: { component: (props: any) => <h4 className="text-xl font-heading text-primary-main mb-2" {...props} /> },
            p: { component: (props: any) => <p className="mb-4" {...props} /> },
            strong: { component: (props: any) => <strong className="font-semibold" {...props} /> },
            a: { component: (props: any) => <Link href={props.href} className="text-accent-main hover:underline" {...props} /> },
          }
        }}>
          {news.content}
        </Markdown>
      </article>
    </main>
  );
}

import { getSortedPostsData, NewsMatter } from "@/lib/content";
import Link from "next/link";
import Image from "next/image";

export default function NewsPage() {
  const allNewsData: (NewsMatter & { slug: string })[] = getSortedPostsData('news');

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-heading text-primary-main text-center mb-12">Aktualności</h1>

      <section className="mb-12 text-center">
        <p className="text-lg font-body text-gray-700 max-w-3xl mx-auto">
          W tej sekcji znajdą Państwo komunikaty Fundacji, relacje z wydarzeń.
        </p>
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allNewsData.map(({ slug, title, date, category, author, heroImage, altText }) => (
            <Link key={slug} href={`/aktualnosci/${slug}`} className="block">
              <div className="bg-white rounded-card shadow-soft hover:shadow-lg transition-shadow duration-300 overflow-hidden h-full flex flex-col">
                {heroImage && (
                  <div className="relative w-full h-48 bg-neutral-bg flex items-center justify-center">
                    <Image
                      src={heroImage}
                      alt={altText || title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-card"
                    />
                  </div>
                )}
                <div className="p-6 flex-grow">
                  <h2 className="text-xl font-heading text-primary-main mb-2">{title}</h2>
                  <p className="text-sm font-body text-gray-600 mb-2">{date} | Kategoria: {category}</p>
                  <p className="text-sm font-body text-gray-600">Autor: {author}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

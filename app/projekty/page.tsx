import { getSortedPostsData, ProjectMatter } from "@/lib/content";
import Link from "next/link";
import Image from "next/image";

export default function ProjectsPage() {
  const allProjectsData: (ProjectMatter & { slug: string })[] = getSortedPostsData('projects');

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-heading text-primary-main text-center mb-12">Zrealizowane Projekty</h1>

      <section className="mb-12 text-center">
        <p className="text-lg font-body text-gray-700 max-w-3xl mx-auto">
          Wierzymy, że najlepiej o naszej skuteczności świadczą zrealizowane działania. Każdy projekt jest dowodem naszej zdolności do realizacji złożonych inicjatyw, od kryzysowych interwencji po długofalowe programy.
        </p>
        <div className="bg-neutral-bg h-48 flex items-center justify-center rounded-card shadow-soft mt-8">
          <span className="text-gray-500">Placeholder: Zdjęcie hero dla sekcji projektów</span>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjectsData.map(({ slug, title, date, heroImage, altText, strategicPillar, status }) => (
            <Link key={slug} href={`/projekty/${slug}`} className="block">
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
                  <p className="text-sm font-body text-gray-600 mb-4">{date} | Status: {status}</p>
                  <p className="text-sm font-body text-gray-600">Filar: {strategicPillar}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

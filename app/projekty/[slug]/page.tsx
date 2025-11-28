import { getAllPostSlugs, getPostData, ProjectMatter } from "@/lib/content";
import Markdown from 'markdown-to-jsx';
import Image from "next/image"; // For hero images, partner logos
import Link from "next/link";
import { notFound } from 'next/navigation';

// Type definitions for Project data
interface ProjectData extends ProjectMatter {
  content: string; // Markdown content
}

// Generate static params for all project slugs
export async function generateStaticParams() {
  const slugs = getAllPostSlugs('projects');
  const params = slugs.map((slug) => ({
    slug: slug.slug,
  }));
  return params;
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  if (!params.slug) {
    notFound(); // Or handle the error appropriately
  }
  const project = await getPostData('projects', params.slug) as ProjectData;

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-heading text-primary-main text-center mb-12">
        {project.title}
      </h1>

      {project.heroImage && (
        <div className="mb-8 relative w-full h-96 bg-neutral-bg flex items-center justify-center rounded-card shadow-soft overflow-hidden">
          <Image
            src={project.heroImage}
            alt={project.altText || project.title}
            layout="fill"
            objectFit="cover"
            className="rounded-card"
          />
        </div>
      )}

      {/* Project Metrica / Sidebar (simplified for now) */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <aside className="md:col-span-1 p-6 bg-neutral-bg rounded-card shadow-soft">
          <h2 className="text-xl font-heading text-primary-main mb-4">Metryka Projektu</h2>
          <p className="text-lg font-body text-gray-700 mb-2">
            <strong className="font-semibold">Status:</strong> {project.status}
          </p>
          <p className="text-lg font-body text-gray-700 mb-2">
            <strong className="font-semibold">Okres:</strong> {project.period}
          </p>
          <p className="text-lg font-body text-gray-700 mb-4">
            <strong className="font-semibold">Filar Strategiczny:</strong>{" "}
            <Link href="/strategia" className="text-accent-main hover:underline">
              {project.strategicPillar}
            </Link>
          </p>

          {project.impactMetrics && project.impactMetrics.length > 0 && (
            <>
              <h3 className="text-lg font-heading text-primary-main mt-6 mb-4">Kluczowe Wskaźniki Wpływu</h3>
              {project.impactMetrics.map((metric, index) => (
                <div key={index} className="bg-white p-3 rounded-lg mb-2 flex flex-col items-center justify-center text-center">
                  <span className="text-3xl font-heading text-accent-main">{metric.value}</span>
                  <span className="text-sm font-body text-gray-700">{metric.label}</span>
                </div>
              ))}
            </>
          )}

          {project.beneficiaries && (
            <>
              <h3 className="text-lg font-heading text-primary-main mt-6 mb-4">Beneficjenci</h3>
              <p className="text-lg font-body text-gray-700">{project.beneficiaries}</p>
            </>
          )}

          {project.fundingSources && project.fundingSources.length > 0 && (
            <>
              <h3 className="text-lg font-heading text-primary-main mt-6 mb-4">Źródła Finansowania</h3>
              <div className="flex flex-wrap gap-4 justify-center">
                {project.fundingSources.map((source, index) => (
                  <div key={index} className="w-20 h-16 bg-gray-300 flex items-center justify-center rounded-lg text-xs text-center p-1">
                    {source.logo ? (
                      <Image src={source.logo} alt={source.name} width={60} height={40} objectFit="contain" />
                    ) : (
                      <span>{source.name}</span>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}

          {project.partners && project.partners.length > 0 && (
            <>
              <h3 className="text-lg font-heading text-primary-main mt-6 mb-4">Partnerzy Realizacyjni</h3>
              <div className="flex flex-wrap gap-4 justify-center">
                {project.partners.map((partner, index) => (
                  <div key={index} className="w-20 h-16 bg-gray-300 flex items-center justify-center rounded-lg text-xs text-center p-1">
                    {partner.logo ? (
                      <Image src={partner.logo} alt={partner.name} width={60} height={40} objectFit="contain" />
                    ) : (
                      <span>{partner.name}</span>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}

        </aside>

        <article className="md:col-span-3 prose lg:prose-xl font-body text-gray-800">
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
            {project.content}
          </Markdown>

          {project.auditLinks && project.auditLinks.length > 0 && (
            <div className="mt-8 p-6 bg-neutral-bg rounded-card shadow-soft">
              <h3 className="text-xl font-heading text-primary-main mb-4">Pisali o nas (Dowody Audytowe)</h3>
              <ul className="list-disc list-inside text-lg font-body text-gray-700 ml-4">
                {project.auditLinks.map((link, index) => (
                  <li key={index} className="mb-2">
                    <Link href={link.url} target="_blank" rel="noopener noreferrer" className="text-accent-main hover:underline">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </article>
      </div>
    </main>
  );
}

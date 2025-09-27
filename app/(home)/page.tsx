import Footer from '@/components/footer';
import Header from '@/components/header';
import SideBar from '@/components/side-bar';
import { getSites, getTags } from '@/lib/api';
import Client from './components/client';

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    tag?: string;
  }>;
}) {
  const searchParams = await props.searchParams;

  const query = searchParams?.query || '';
  const tag = searchParams?.tag || '';

  const sites = await getSites();
  const tags = await getTags();

  return (
    <>
      {/* Skipping auto-scroll behavior due to `position: sticky` or `position: fixed` on element: xxx */}
      <div className=''></div>

      <Header tags={tags} />
      <main className='mt-16 flex flex-1'>
        <SideBar tags={tags} />
        <div className='flex-1 bg-muted/30'>
          <Client
            sites={
              tag !== ''
                ? sites
                    .filter((site) => site.tags.some((t) => t.id === tag))
                    .filter((site) => {
                      return (
                        site.name.toLowerCase().includes(query.toLowerCase()) ||
                        site.description.toLowerCase().includes(query.toLowerCase())
                      );
                    })
                : sites.filter((site) => {
                    return (
                      site.name.toLowerCase().includes(query.toLowerCase()) ||
                      site.description.toLowerCase().includes(query.toLowerCase())
                    );
                  })
            }
            tags={tags}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}

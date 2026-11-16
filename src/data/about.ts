import sanity from '../../studio/project.json';

export interface AboutPhoto {
  src: string;
  alt: string;
  width: number;
  height: number;
}

// The About page's photo is edited in Sanity ("About page" in the Studio) and fetched when the site builds.
const QUERY = `*[_id == "about"][0].photo{ "src": asset->url, alt, "width": asset->metadata.dimensions.width, "height": asset->metadata.dimensions.height }`;

export async function getAboutPhoto(): Promise<AboutPhoto | null> {
  const url = `https://${sanity.projectId}.api.sanity.io/v2025-02-19/data/query/${sanity.dataset}?perspective=published&query=${encodeURIComponent(QUERY)}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Could not load the About photo from Sanity: ${res.status} ${await res.text()}`);
  const { result } = (await res.json()) as { result: Partial<AboutPhoto> | null };
  if (!result?.src) return null;
  return { src: result.src, alt: result.alt || 'The BMS Carz showroom', width: result.width ?? 4, height: result.height ?? 5 };
}

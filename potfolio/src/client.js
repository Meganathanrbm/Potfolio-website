import imageUrlBuilder from '@sanity/image-url';

// The full @sanity/client (plus rxjs and get-it) is ~215 kB of source for the one
// thing the site does with it: run a GROQ query. This is that one call over fetch.
const projectId = process.env.REACT_APP_SANITY_PROJECT_ID;
const dataset = 'production';
const apiVersion = '2023-06-06';
const token = process.env.REACT_APP_SANITY_TOKEN;

// apicdn = the cached edge endpoint, matching the old useCdn: true.
const endpoint = `https://${projectId}.apicdn.sanity.io/v${apiVersion}/data/query/${dataset}`;

export const client = {
  async fetch(query, params = {}) {
    const url = new URL(endpoint);
    url.searchParams.set('query', query);
    Object.entries(params).forEach(([key, value]) =>
      url.searchParams.set(`$${key}`, JSON.stringify(value))
    );

    const res = await fetch(url, {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });

    if (!res.ok) {
      throw new Error(`Sanity query failed: ${res.status} ${res.statusText}`);
    }

    const body = await res.json();
    return body.result;
  },
};

// to convert url into image and image into url
const builder = imageUrlBuilder({ projectId, dataset });

export const urlFor = (source) => builder.image(source);

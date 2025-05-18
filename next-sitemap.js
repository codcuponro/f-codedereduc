const fs = require("fs");
const qs = require("qs")

const SITE_URL = "https://www.codedereduc.ro";
const Request = async (endpoint, options = {}) => {
    const url = `https://codedereduc-app-cahbj.ondigitalocean.app/api${endpoint}`;
    try {
        const response = await fetch(url, {
            method: 'GET',
            next: { revalidate: 60 },
            headers: {
                'Content-Type': 'application/json',
            },
            ...options
        });
        return await response.json();
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
};
function getFormattedDateTime() {
    const now = new Date();
    const isoString = now.toISOString(); // Example: 2023-05-11T19:00:11.123Z

    const offsetMinutes = now.getTimezoneOffset();
    const sign = offsetMinutes > 0 ? "-" : "+";
    const offsetHours = String(Math.abs(offsetMinutes / 60)).padStart(2, "0");
    const offsetMins = String(Math.abs(offsetMinutes % 60)).padStart(2, "0");

    return isoString.slice(0, 19) + sign + offsetHours + ":" + offsetMins;
}

const categoryParams = qs.stringify({
    pagination: {
        limit: 2000
    }
})

const storeParams = qs.stringify({
    pagination: {
        limit: 2000
    }
})


async function generateSitemap() {

    const stores = await Request(`/stores?${storeParams}`);
    const categories = await Request(`/categories?${categoryParams}`);


    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
          <loc>${SITE_URL}/despre-noi</loc>
          <lastmod>${getFormattedDateTime()}</lastmod>
          <priority>1.00</priority>
      </url>
      <url>
          <loc>${SITE_URL}/</loc>
          <lastmod>${getFormattedDateTime()}</lastmod>
          <priority>1.00</priority>
      </url>
      <url>
          <loc>${SITE_URL}/fisiere-cookies</loc>
          <lastmod>${getFormattedDateTime()}</lastmod>
          <priority>1.00</priority>
      </url>
      <url>
          <loc>${SITE_URL}/politica-confidentialitate</loc>
          <lastmod>${getFormattedDateTime()}</lastmod>
          <priority>1.00</priority>
      </url>
      <url>
          <loc>${SITE_URL}/termeni-si-conditii</loc>
          <lastmod>${getFormattedDateTime()}</lastmod>
          <priority>1.00</priority>
      </url>
      <url>
          <loc>${SITE_URL}/categories</loc>
          <lastmod>${getFormattedDateTime()}</lastmod>
          <priority>1.00</priority>
      </url>
      <url>
          <loc>${SITE_URL}/magasins</loc>
          <lastmod>${getFormattedDateTime()}</lastmod>
          <priority>1.00</priority>
      </url>
      <url>
          <loc>${SITE_URL}/Contact</loc>
          <lastmod>${getFormattedDateTime()}</lastmod>
          <priority>1.00</priority>
      </url>
      <url>
          <loc>${SITE_URL}/top-codes-promo</loc>
          <lastmod>${getFormattedDateTime()}</lastmod>
          <priority>1.00</priority>
      </url>
      ${stores?.data?.map((item) => `
        <url>
          <loc>${SITE_URL}/${item?.Slug}</loc>
          <lastmod>${item?.updatedAt}</lastmod>
          <priority>0.80</priority>
        </url>
      `).join("")}
      ${categories?.data?.map((item) => `
        <url>
          <loc>${SITE_URL}/categories/${item?.Slug}</loc>
          <lastmod>${item?.updatedAt}</lastmod>
          <priority>0.80</priority>
        </url>
      `).join("")}
    </urlset>
  `;
    fs.writeFileSync("public/sitemap.xml", sitemap);
}

generateSitemap();



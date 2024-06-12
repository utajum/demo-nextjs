import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

export async function loadData(pool) {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const dataPath = path.join(__dirname, 'data.json');
  const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  const query = `
    INSERT INTO documents (title, issued_year, web_link, download_link, organization, topic, status, open_for_comment, summary, assigned_categories, assigned_topics, assigned_sub_topics, assigned_score)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
    RETURNING id
  `;

  const insertData = async () => {
    for (const doc of data) {
      const values = [
        doc.title,
        doc['issued-year'],
        doc['web-link'],
        doc['download-link'],
        doc.organization,
        doc.topic,
        doc.status,
        doc['open-for-comment'],
        doc.summary,
        doc['Assigned Categories'],
        doc['Assigned Topics'],
        doc['Assigned Sub Topics'],
        doc['Assigned Score'],
      ];

      try {
        const res = await pool.query(query, values);
        console.log('Inserted document with ID:', res.rows[0].id);
      } catch (err) {
        console.error('Error executing query', err.stack);
        throw err;
      }
    }
    console.log('Data loaded successfully');
  };

  await insertData();
  return;
}

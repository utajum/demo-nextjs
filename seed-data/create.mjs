export function createTable(pool) {
  const query = `
    DROP TABLE IF EXISTS documents;
    CREATE TABLE documents (
      id SERIAL PRIMARY KEY,
      title TEXT,
      issued_year INT,
      web_link TEXT,
      download_link TEXT,
      organization TEXT,
      topic TEXT,
      status VARCHAR(50),
      open_for_comment BOOLEAN,
      summary TEXT,
      assigned_categories TEXT[],
      assigned_topics TEXT[],
      assigned_sub_topics TEXT[],
      assigned_score INT
    );
  `;

  return new Promise((resolve, reject) => {
    pool.query(query, (err, res) => {
      if (err) {
        console.error('Error executing query', err.stack);
        reject(err);
      } else {
        console.log('Table documents created successfully');
        resolve(res);
      }
    });
  });
}

export default async function handler(req, res) {
  // Mengizinkan CORS agar frontend kamu bisa mengaksesnya
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const apiKey = "132791thy50ilas62ojx7z";
  const apiUrl = `https://doodapi.com/api/file/list?key=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: 'Gagal mengambil data dari DoodStream' });
  }
}
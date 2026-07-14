const API_TOKEN = "23550:L35zgZ4HPxCL1bEn0ypS3Yi0aMqDBEQjvJcA7JPy";

async function executeExtraction() {
  try {
    // 1. Autenticação
    const authRes = await fetch("https://business.solarmarket.com.br/api/v2/auth/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: API_TOKEN }),
    });
    
    if (!authRes.ok) throw new Error("Falha na autenticação HTTP");
    const { access_token } = await authRes.json();

    // 2. Extração da Árvore de Funis
    const funnelsRes = await fetch("https://business.solarmarket.com.br/api/v2/funnels", {
      method: "GET",
      headers: { "Authorization": `Bearer ${access_token}` }
    });

    if (!funnelsRes.ok) throw new Error("Falha ao acessar endpoint de funis");
    const funnelsData = await funnelsRes.json();

    // 3. Impressão de Dados Brutos
    console.log(JSON.stringify(funnelsData, null, 2));

  } catch (error) {
    console.error("Erro na execução:", error);
  }
}

executeExtraction();
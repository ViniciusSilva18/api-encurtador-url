<div align="center">

# 🔗 API Encurtador de URL

**Encurtador de URLs com métricas de cliques, aliases personalizados e geração de QR Code.**

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)]()
[![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)]()

</div>

<div align="center">
  <a href="https://github.com/ViniciusSilva18/api-encurtador-url">
    <img src="https://komarev.com/ghpvc/?username=ViniciusSilva18-api-encurtador-url&label=Visualiza%C3%A7%C3%B5es&color=06b6d4&style=flat" alt="Views" />
  </a>
</div>


## 🚀 Endpoints
| Método | Rota | Descrição |
|---|---|---|
| POST | `/shorten` | Encurtar URL |
| GET | `/:code` | Redirecionar |
| GET | `/:code/stats` | Ver cliques |
| GET | `/:code/qr` | Obter QR Code |

## 🛠️ Setup
```bash
git clone https://github.com/ViniciusSilva18/api-encurtador-url.git
cd api-encurtador-url && npm install && npm run dev
```

---
<sub>Criado por <a href="https://github.com/ViniciusSilva18">ViniciusSilva18</a> — VibeCoder 🇵🇹</sub>

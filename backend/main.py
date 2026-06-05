from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI(title="Mecânica Portas Abertas API")

# Permite que o React (frontend) se comunique com o Python (backend)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # Em produção, defina a URL exata do React
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Agendamento(BaseModel):
    nome: str
    telefone: str
    servico: str
    mensagem: str

@app.get("/")
def home():
    return {"status": "Servidor da Oficina Portas Abertas ativo!"}

@app.post("/api/agendar")
async def criar_agendamento(dados: Agendamento):
    # Aqui você poderia salvar em um banco de dados ou enviar um e-mail/WhatsApp
    print(f"Novo agendamento recebido: {dados}")
    return {"sucesso": True, "mensagem": f"Obrigado {dados.nome}, recebemos seu contato!"}
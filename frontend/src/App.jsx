import React, { useState, useEffect } from 'react';
import { Wrench, Zap, Snowflake, Shield, Phone, MapPin, Clock, ChevronLeft, ChevronRight } from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({ nome: '', telefone: '', servico: 'Mecânica Geral', mensagem: '' });
  const [status, setStatus] = useState('');

  // Lógica do Carrossel de Fotos (Incluindo a sua Logo como uma das imagens)
  const [currentSlide, setCurrentSlide] = useState(0);
  const fotosOficina = [
    '/logo.png',    // Sua logo aparece primeiro ou na sequência que preferir
    '/slide1.jpg',
    '/slide2.jpg',
    '/slide3.jpg'
  ];

  // Efeito para passar as fotos sozinho a cada 4 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === fotosOficina.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [fotosOficina.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev === fotosOficina.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? fotosOficina.length - 1 : prev - 1));

  const handleSubmit = (e) => {
  e.preventDefault();

  const numeroWhatsApp = "5515996150316";

  const texto = `
*Novo Agendamento - Site*

*Nome:* ${formData.nome}
*Telefone:* ${formData.telefone}
*Serviço:* ${formData.servico}

*Mensagem:*
${formData.mensagem || "Não informada"}
  `;

  window.open(
    `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`,
    "_blank"
  );

  setFormData({
    nome: '',
    telefone: '',
    servico: 'Mecânica Geral',
    mensagem: ''
  });

  setStatus('Redirecionado para o WhatsApp.');
};

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">

      {/* HEADER / NAV */}
      <header className="bg-slate-900 text-white sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">

          {/* TITULO DA SUA OFICINA (LOGO REMOVIDA DAQUI) */}
          <div className="flex items-center gap-2">
            <Wrench className="text-orange-500 w-6 h-6" />
            <span className="text-xl font-black tracking-wider uppercase">Portas Abertas</span>
          </div>

          <nav className="hidden md:flex gap-6 font-medium items-center">
            <a href="#servicos" className="hover:text-orange-500 transition">Serviços</a>
            <a href="#contato" className="bg-orange-500 text-white px-4 py-2 rounded font-bold hover:bg-orange-600 transition">Agendar</a>
          </nav>
        </div>
      </header>

      {/* HERO SECTION COM CARROSSEL DE FOTOS */}
      <section className="relative bg-slate-950 text-white h-[500px] flex items-center justify-center overflow-hidden">

        {/* Imagem de Fundo do Slide */}
        <div className="absolute inset-0 z-0 transition-all duration-1000 ease-in-out">
          <img
            src={fotosOficina[currentSlide]}
            alt="Imagens da Oficina e Logo"
            className="w-full h-full object-contain md:object-cover opacity-40 animate-fade-in"
            onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&q=80&w=1200'; }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950"></div>
        </div>

        {/* Textos por cima da foto */}
        <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
          <span className="text-orange-500 font-bold uppercase tracking-widest text-sm bg-slate-900/80 px-3 py-1 rounded-full inline-block mb-3">
            Oficina Mecânica Multimarcas
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-md">Mecânica Portas Abertas</h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto drop-shadow">
            Transparência, honestidade e alta tecnologia para o seu veículo rodar seguro. De portas abertas para cuidar do seu carro.
          </p>
          <a href="#contato" className="bg-orange-500 text-white text-lg font-bold px-8 py-4 rounded-md shadow-lg hover:bg-orange-600 transition inline-block">
            Solicitar Orçamento Grátis
          </a>
        </div>

        {/* Setas para passar as fotos manualmente */}
        <button onClick={prevSlide} className="absolute left-4 z-20 p-2 rounded-full bg-slate-900/50 hover:bg-orange-500 text-white transition">
          <ChevronLeft size={30} />
        </button>
        <button onClick={nextSlide} className="absolute right-4 z-20 p-2 rounded-full bg-slate-900/50 hover:bg-orange-500 text-white transition">
          <ChevronRight size={30} />
        </button>

        {/* Pontinhos Indicadores do Slide */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
          {fotosOficina.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all ${currentSlide === index ? 'w-6 bg-orange-500' : 'w-2 bg-gray-500'}`}
            />
          ))}
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="py-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-950">Nossas Especialidades</h2>
          <p className="text-gray-600 mt-2">Profissionais qualificados para cuidar de todas as necessidades do seu automóvel.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Snowflake className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">Ar-Condicionado</h3>
            <p className="text-gray-600 text-sm">Carga de gás, higienização completa, diagnóstico de vazamentos e manutenção do compressor.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition">
            <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">Auto Elétrica</h3>
            <p className="text-gray-600 text-sm">Diagnóstico via scanner, baterias, alternador, motor de partida e toda a fiação eletrônica.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition">
            <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Wrench className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">Mecânica Geral</h3>
            <p className="text-gray-600 text-sm">Revisão preventiva, troca de óleo, sistema de freios, motor, embreagem e correias.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition">
            <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">Suspensão</h3>
            <p className="text-gray-600 text-sm">Amortecedores, molas, bandejas, pivôs, buchas e check-up completo da estabilidade.</p>
          </div>
        </div>
      </section>

      {/* CONTATO & AGENDAMENTO */}
      <section id="contato" className="bg-slate-900 text-white py-20 px-4">
        <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-orange-500">Fale Conosco</h2>
            <p className="text-gray-300 mb-8">Estamos prontos para atender você. Agende uma revisão ou traga seu carro para um diagnóstico preciso.</p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="text-orange-500" /><span>(15) 99615-0316</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-orange-500" /><span>Rua Higino Marques, 1510 - Jardim Maringá, Itapeva SP</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="text-orange-500" /><span>Seg à Sex: 08h às 18h | Sáb: 08h às 12h</span>
              </div>
            </div>
          </div>

          <div className="bg-white text-gray-800 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-slate-950">Agende seu atendimento</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-1">Seu Nome</label>
                <input type="text" required className="w-full border p-2 rounded" value={formData.nome} onChange={e => setFormData({...formData, nome: e.target.value})} />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">WhatsApp / Telefone</label>
                <input type="tel" required className="w-full border p-2 rounded" value={formData.telefone} onChange={e => setFormData({...formData, telefone: e.target.value})} />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Serviço Necessário</label>
                <select className="w-full border p-2 rounded bg-white" value={formData.servico} onChange={e => setFormData({...formData, servico: e.target.value})}>
                  <option>Mecânica Geral</option>
                  <option>Ar-Condicionado</option>
                  <option>Auto Elétrica</option>
                  <option>Suspensão</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Mensagem (Opcional)</label>
                <textarea rows="3" className="w-full border p-2 rounded" value={formData.mensagem} onChange={e => setFormData({...formData, mensagem: e.target.value})}></textarea>
              </div>
              <button type="submit" className="w-full bg-orange-500 text-white p-3 rounded font-bold hover:bg-orange-600 transition">Enviar Solicitação</button>
              {status && <p className="text-center mt-4 text-sm font-medium text-slate-800">{status}</p>}
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 text-gray-500 text-center py-6 text-sm border-t border-slate-800">
        <p>&copy; 2026 Mecânica Portas Abertas. Todos os direitos reservados.</p>
      </footer>

    </div>
  );
}

export default App;
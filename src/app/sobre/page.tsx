import Header from "@/components/Header";
import FooterCTA from "@/components/FooterCTA";
import content from "@/data/content.json";

export const metadata = {
  title: "Sobre a Empresa | " + content.company.name,
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <Header forceSolid />
      <div className="max-w-4xl mx-auto px-4 py-16 text-gray-800">
        <h1 className="text-4xl font-black mb-8 font-display text-gray-900">Sobre a {content.company.name}</h1>
        <div className="space-y-6 text-lg leading-relaxed text-gray-600">
          <p>{content.about.content}</p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Nossa Identidade Comercial</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Razão Social / Nome de Fantasia:</strong> {content.company.name}</li>
            <li><strong>CNPJ:</strong> {content.company.cnpj}</li>
            <li><strong>Endereço Físico (Sede):</strong> {content.company.address}</li>
            <li><strong>E-mail de Contato:</strong> {content.company.email}</li>
            <li><strong>Telefone / WhatsApp:</strong> {content.company.whatsapp}</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Propósito da Plataforma</h2>
          <p>Este site tem como objetivo atuar como o canal de relacionamento institucional e comercial da {content.company.name}. Através desta plataforma, apresentamos nosso portfólio de serviços (pinturas residenciais, comerciais, decorativas e reformas), atestamos nossa autoridade no mercado, e fornecemos um meio direto, seguro e rastreável para que potenciais clientes possam solicitar orçamentos formais.</p>
          <p>Comprometemo-nos com a total transparência sobre a nossa operação, garantindo que nossos clientes saibam exatamente com quem estão lidando, onde estamos localizados e como garantimos a excelência no atendimento do início ao fim.</p>
        </div>
      </div>
      <FooterCTA />
    </main>
  );
}

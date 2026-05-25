import Header from "@/components/Header";
import FooterCTA from "@/components/FooterCTA";
import content from "@/data/content.json";

export const metadata = {
  title: "Política de Privacidade | " + content.company.name,
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <Header forceSolid />
      <div className="max-w-4xl mx-auto px-4 py-16 text-gray-800">
        <h1 className="text-4xl font-black mb-8 font-display text-gray-900">Política de Privacidade</h1>
        <div className="space-y-6 text-lg leading-relaxed text-gray-600">
          <p>Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Coleta de Informações</h2>
          <p>Coletamos informações fornecidas voluntariamente por você ao preencher nossos formulários de contato, como nome, e-mail e número de telefone. Esses dados são utilizados exclusivamente para retornar o seu contato e fornecer orçamentos e informações sobre nossos serviços.</p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Uso das Informações</h2>
          <p>As informações coletadas são usadas para: fornecer, operar e manter nosso site; melhorar, personalizar e expandir nosso site; entender e analisar como você usa nosso site; e nos comunicarmos com você para atendimento ao cliente, agendamentos e prestação de serviços.</p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Proteção e Segurança</h2>
          <p>Implementamos medidas de segurança rígidas para manter a proteção de suas informações pessoais. Seus dados são armazenados em ambientes seguros e acessados apenas por pessoal autorizado da {content.company.name}, garantindo total confidencialidade.</p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Compartilhamento de Dados</h2>
          <p>Não vendemos, trocamos ou transferimos a terceiros suas informações pessoalmente identificáveis. Isso não inclui parceiros ou plataformas de confiança (como ferramentas de CRM ou hospedagem) que nos auxiliam a operar nosso site, desde que essas partes concordem em manter essas informações em sigilo absoluto.</p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Seus Direitos</h2>
          <p>Você tem o direito de solicitar o acesso, a correção ou a exclusão dos seus dados pessoais armazenados por nós a qualquer momento, bastando entrar em contato através dos nossos canais oficiais de atendimento.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Contato</h2>
          <p>Se você tiver alguma dúvida sobre esta Política de Privacidade ou sobre como seus dados são gerenciados, entre em contato conosco através do e-mail: <strong>{content.company.email}</strong> ou pelo nosso endereço físico comercial: <strong>{content.company.address}</strong>.</p>
        </div>
      </div>
      <FooterCTA />
    </main>
  );
}

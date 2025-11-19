
export default function About() {
  return (
  <div className="min-h-screen bg-radial from-purple-300 to-pink-300">
      <section className="max-w-3xl mx-auto p-6 leading-relaxed text-black">
        <h1 className="text-4xl font-bold mb-6 text-pink-800">À propos de moi</h1>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 border-l-4 border-pink-500 pl-3">Qui ?</h2>
          <p>
            Je suis une étudiante passionnée par le développement web, les technologies modernes et la création d’expériences digitales élégantes et efficaces. J’aime apprendre, expérimenter et construire des projets qui ont un réel impact.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 border-l-4 border-pink-500 pl-3">Ce que j’aime faire</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Développement d’interfaces modernes</li>
            <li>Design et maquettes UI/UX</li>
            <li>Programmation et résolution de problèmes</li>
            <li>Créer des projets web créatifs</li>
            <li>Le marketing digital</li>
            <li>CyberSecurity</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3 border-l-4 border-pink-500 pl-3">
            Objectifs
          </h2>
          <p>
            Mon objectif est de devenir développeuse full-stack et de contribuer à des projets innovants, tout en continuant à me former dans les technologies modernes comme React, Next.js et l’IA.
          </p>
        </div>
      </section>
    </div>
  );
}


import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-radial from-purple-300 to-pink-300">
      <section className="max-w-3xl mx-auto p-6 leading-relaxed text-black">
        <Image
          src="/avatar1.png"
          width={200}
          height={200}
          alt="profil"
          className="mb-6 rounded-full"
        />
        <h1 className="text-4xl font-bold mb-6 text-pink-800">Mon CV</h1>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 border-l-4 border-pink-500 pl-3">
            Informations personnelles
          </h2>
          <p><strong>Nom :</strong> Yahyaoui Israa</p>
          <p><strong>Email :</strong> israa.yahayoui@gmail.com</p>
          <p><strong>Téléphone :</strong> +216 90111111</p>
          <p><strong>Adresse :</strong> Tunis, Tunisie</p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 border-l-4 border-pink-500 pl-3">
            Profil
          </h2>
          <p>
            Étudiante en Prépa passionnée par le développement web, le marketing
            digital et la création d'applications modernes.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 border-l-4 border-pink-500 pl-3">
            Compétences
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Développement Web : HTML, CSS, JavaScript, React, Next.js</li>
            <li>Programmation : C, Python, TypeScript, C++</li>
            <li>Outils : VSCode, Figma, Postman</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 border-l-4 border-pink-500 pl-3">
            Formation
          </h2>
          <p className="font-semibold">
            Cycle Préparatoire Intégré — Génie Informatique
          </p>
          <p>Université : Sesame — 2024–2029</p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 border-l-4 border-pink-500 pl-3">
            Langues
          </h2>
          <ul className="space-y-1">
            <li>Français — ⭐⭐⭐</li>
            <li>Anglais — ⭐⭐⭐⭐</li>
            <li>Arabe — ⭐⭐⭐⭐⭐</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3 border-l-4 border-pink-500 pl-3">
            Centres d'intérêt
          </h2>
          <p>Programmation, design, IA, sport.</p>
        </div>
      </section>
    </div>
  );
}

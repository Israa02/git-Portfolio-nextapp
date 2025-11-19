import Image from "next/image";

export default function Contact() {
  return (
    <div className="min-h-screen bg-radial from-purple-300 to-pink-300">
      <section className="max-w-3xl mx-auto p-6 leading-relaxed text-black">
        <h1 className="text-4xl font-bold mb-6 text-pink-800">Me Contacter</h1>

        <Image
          src="/avatar1.png"
          width={180}
          height={180}
          alt="contact"
          className="mb-6 rounded-full"
        />

        <form className="bg-white p-6 rounded-xl shadow-md space-y-4">
          <div>
            <label className="block font-semibold mb-1">Nom complet</label>
            <input
              type="text"
              className="w-full p-3 rounded-lg border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Votre nom"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Email</label>
            <input
              type="email"
              className="w-full p-3 rounded-lg border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="exemple@email.com"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Sujet</label>
            <input
              type="text"
              className="w-full p-3 rounded-lg border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Sujet du message"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Message</label>
            <textarea
              rows={5}
              className="w-full p-3 rounded-lg border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Votre message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-3 rounded-lg font-semibold hover:bg-pink-700 transition"
          >
            Envoyer
          </button>
        </form>
      </section>
    </div>
  );
}

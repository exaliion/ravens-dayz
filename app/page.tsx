
"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const joinServer = async () => {
    await navigator.clipboard.writeText("92.158.253.166:2402");

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2500);
  };
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
    <Navbar />

      {/* Image de fond */}
      <Image
        src="/hero.png"
        alt="Ravens DayZ"
        fill
        priority
        className="object-contain opacity-40"
        style={{ objectPosition: "center top" }}
      />

      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Contenu */}
      <section className="relative z-10 flex h-screen flex-col items-center justify-center text-center px-6 pt-24">

        <Image
          src="/logo.png"
          alt="Ravens DayZ Logo"
          width={280}
          height={280}
          className="drop-shadow-[0_0_40px_#ff6a00]"
        />

        <h1 className="mt-8 text-5xl md:text-7xl font-extrabold tracking-widest text-orange-500">
          RAVENS DAYZ
        </h1>

        <p className="mt-6 max-w-2xl text-xl text-gray-300">
          Explorez • Construisez • Coopérez • Survivez
        </p>

        <div className="mt-10 flex gap-6">

          <button
            onClick={joinServer}
            className="rounded-xl bg-orange-600 px-8 py-4 text-lg font-bold text-white transition hover:bg-orange-500"
          >
            🎮 Rejoindre le serveur
          </button>

          <a
            href="https://discord.gg/6QuAS5QsKp"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-orange-500 px-8 py-4 text-lg font-bold text-white transition hover:bg-orange-600"
          >
          💬 Discord
         </a>

          {copied && (
          <div className="mt-6 rounded-lg bg-orange-700 px-6 py-3 text-white">
           ✅ IP copiée !
           <br />
            Ouvre DayZ → Connexion directe → Colle :
          <br />
          <strong>92.158.253.166:2402</strong>
        </div>
)}

        </div>

      </section>
      {/* ================== A PROPOS ================== */}

      <section
        id="about"
        className="relative z-10 bg-zinc-950 py-24"
      >

  <div className="mx-auto max-w-7xl px-8">

    <h2 className="mb-10 text-center text-5xl font-bold text-orange-500">
      Bienvenue sur Ravens DayZ
    </h2>

    <p className="mx-auto max-w-4xl text-center text-xl leading-9 text-gray-300">
      Ravens DayZ est un serveur PvE orienté survie, exploration et coopération. Profitez d'une économie équilibrée, de zones militaires, d'événements réguliers, d'un système de bases et d'une communauté conviviale où l'entraide est au cœur de l'expérience.
    </p>

    <div className="rounded-2xl border border-orange-600/30 bg-black/40 p-8">
      <h3 className="mb-4 text-2xl font-bold text-orange-400">
        🛡️ PvE
      </h3>

      <p className="text-gray-300">
        Explorez Chernarus, survivez face aux infectés et coopérez avec les autres survivants.
      </p>
    </div>

    <div className="rounded-2xl border border-orange-600/30 bg-black/40 p-8">
      <h3 className="mb-4 text-2xl font-bold text-orange-400">
       🏠 Base Building
      </h3>

      <p className="text-gray-300">
        Construisez, aménagez et protégez votre base dans un environnement PvE.
      </p>
    </div>

    <div className="rounded-2xl border border-orange-600/30 bg-black/40 p-8">
      <h3 className="mb-4 text-2xl font-bold text-orange-400">
       🎁 Événements
      </h3>

      <p className="text-gray-300">
        Participez régulièrement à des événements PvE avec des récompenses exclusives.
      </p>
    </div>

  </div>

</section>

{/* ================= ÉTAT DU SERVEUR ================= */}

<section className="relative z-10 bg-zinc-950 py-24">
  <div className="mx-auto max-w-5xl px-8 text-center">
    <h2 className="mb-10 text-5xl font-bold text-orange-500">
      État du serveur
    </h2>

    <div className="rounded-2xl border border-orange-600/30 bg-black/40 p-10">
      <h3 className="text-3xl font-bold text-orange-400">
        🟢 Ravens DayZ
      </h3>

      <p className="mt-4 text-xl text-gray-300">
        Serveur actuellement <span className="text-orange-400 font-bold">EN LIGNE</span>
      </p>

      <p className="mt-2 text-gray-400">
        IP : <strong>92.158.253.166:2402</strong>
      </p>

      <p className="mt-2 text-gray-400">
        Mode : PvE
      </p>
    </div>
  </div>
</section>

{/* ================= INFORMATIONS SERVEUR ================= */}

<section className="relative z-10 bg-black py-24">
  <div className="mx-auto max-w-6xl px-8">

    <h2 className="mb-12 text-center text-5xl font-bold text-orange-500">
      Informations du serveur
    </h2>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

      <div className="rounded-2xl border border-orange-600/30 bg-zinc-900 p-8 text-center">
        <div className="text-5xl mb-4">🌍</div>
        <h3 className="text-2xl font-bold text-orange-400">Carte</h3>
        <p className="mt-3 text-gray-300">
          ChernarusPlus
        </p>
      </div>

      <div className="rounded-2xl border border-orange-600/30 bg-zinc-900 p-8 text-center">
       <div className="text-5xl mb-4">👥</div>
       <h3 className="text-2xl font-bold text-orange-400">Joueurs</h3>
       <p className="mt-3 text-gray-300">
         60 Joueurs
       </p>
      </div>

      <div className="rounded-2xl border border-orange-6000/30 bg-zinc-900 p-8 text-center">
       <div className="text-5xl mb-4">⚔️</div>
       <h3 className="text-2xl font-bold text-orange-400">Gameplay</h3>
       <p className="mt-3 text-gray-300">
         PvE
       </p>
      </div>

      <div className="rounded-2xl border border-orange-600/30 bg-zinc-900 p-8 text-center">
        <div className="text-5xl mb-4">🎁</div>
        <h3 className="text-2xl font-bold text-orange-400">Événements</h3>
        <p className="mt-3 text-gray-300">
          Hebdomadaires
        </p>
      </div>

    </div>

  </div>
</section>

{/* ================= GALERIE ================= */}

<section id="galerie" className="relative z-10 bg-zinc-950 py-24">
  <div className="mx-auto max-w-7xl px-8">

    <h2 className="mb-12 text-center text-5xl font-bold text-orange-500">
      Galerie du serveur
    </h2>

    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

      {[
        "/galerie/1.jpg",
        "/galerie/7.jpg",
        "/galerie/3.PNG",
        "/galerie/4.PNG",
        "/galerie/5.jpg",
        "/galerie/6.png",
      ].map((img, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-2xl border border-orange-600/30 bg-zinc-900"
        >
          <img
            src={img}
            alt={`Capture ${index + 1}`}
            className="h-72 w-full object-cover transition duration-500 hover:scale-110"
          />
        </div>
      ))}

    </div>

  </div>
</section>

<footer className="border-t border-orange-500/20 bg-black py-12">
  <div className="mx-auto flex max-w-7xl flex-col items-center px-6 text-center">

    <h2 className="text-3xl font-bold tracking-wider text-orange-500">
      RAVENS DAYZ
    </h2>

    <p className="mt-4 text-gray-400">
      Serveur PvE • ChernarusPlus
    </p>

    <p className="mt-2 text-gray-400">
      📍 IP : <span className="font-bold text-white">92.158.253.166:2402</span>
    </p>

    <div className="mt-8 flex gap-6">

      <a
        href="https://discord.gg/6QuAS5QsKp"
        target="_blank"
        className="rounded-xl border border-orange-500 px-6 py-3 transition hover:bg-orange-500 hover:text-black"
      >
        💬 Discord
      </a>

      <button
        onClick={joinServer}
        className="rounded-xl bg-orange-600 px-6 py-3 font-bold transition hover:bg-orange-500"
      >
        🎮 Rejoindre le serveur
      </button>

    </div>

    <p className="mt-10 text-sm text-gray-500">
      © 2026 Ravens DayZ — Tous droits réservés
    </p>

  </div>

  {/* ================== PACKS VIP ================== */}

<section id="vip" className="relative z-10 bg-black py-24">
  <div className="mx-auto max-w-7xl px-8">

    <h2 className="mb-4 text-center text-5xl font-extrabold text-orange-500">
      🏆 Packs VIP
    </h2>

    <p className="mx-auto mb-16 max-w-3xl text-center text-xl text-gray-300">
      Soutenez Ravens DayZ et profitez d'avantages de confort tout en aidant au développement du serveur.
    </p>

    <div className="grid gap-8 md:grid-cols-3">

      {/* Bronze */}

      <div className="rounded-3xl border border-orange-500/40 bg-zinc-900 p-8 transition duration-300 hover:scale-105 hover:border-orange-400 hover:shadow-[0_0_35px_rgba(255,102,0,0.35)]">

        <h3 className="mb-2 text-center text-3xl font-bold text-orange-400">
          🥉 Bronze
        </h3>

        <p className="mb-6 text-center text-5xl font-extrabold text-white">
          10€
        </p>

        <ul className="space-y-3 text-gray-300">
          <li>✔️ Titre "Donateur Bronze" sur Discord</li>
        </ul>

        <button className="mt-10 w-full rounded-xl bg-orange-600 py-3 font-bold text-white transition hover:bg-orange-500">
          Acheter
        </button>

      </div>

      {/* Argent */}

      <div className="rounded-3xl border-2 border-orange-500 bg-zinc-900 p-8 shadow-[0_0_40px_rgba(255,102,0,0.25)] transition duration-300 hover:scale-105">

        <div className="mb-3 text-center text-orange-400 font-bold">
          ⭐ Le plus populaire
        </div>

        <h3 className="mb-2 text-center text-3xl font-bold text-orange-400">
          🥈 Argent
        </h3>

        <p className="mb-6 text-center text-5xl font-extrabold text-white">
          20€
        </p>

        <ul className="space-y-3 text-gray-300">
          <li>✔️ Pack Bronze inclus</li>
          <li>✔️ Priorité dans la file d'attente</li>
        </ul>

        <button className="mt-10 w-full rounded-xl bg-orange-600 py-3 font-bold text-white transition hover:bg-orange-500">
          Acheter
        </button>

      </div>

      {/* Or */}

      <div className="rounded-3xl border border-orange-500/40 bg-zinc-900 p-8 transition duration-300 hover:scale-105 hover:border-orange-400 hover:shadow-[0_0_35px_rgba(255,102,0,0.35)]">

        <h3 className="mb-2 text-center text-3xl font-bold text-orange-400">
          🥇 Or
        </h3>

        <p className="mb-6 text-center text-5xl font-extrabold text-white">
          50€
        </p>

        <ul className="space-y-3 text-gray-300">
          <li>✔️ Pack Argent inclus</li>
          <li>✔️ Titre "Legend" en jeu</li>
          <li>✔️ Titre "Legend" sur Discord</li>
        </ul>

        <button className="mt-10 w-full rounded-xl bg-orange-600 py-3 font-bold text-white transition hover:bg-orange-500">
          Acheter
        </button>

      </div>

    </div>

    {/* Informations */}

    <div className="mt-20 rounded-3xl border border-orange-500/30 bg-zinc-900 p-10">

      <h3 className="mb-8 text-center text-3xl font-bold text-orange-500">
        Informations
      </h3>

      <div className="grid gap-6 md:grid-cols-2">

        <div className="text-gray-300">
          <p><strong className="text-orange-400">⏰ Durée :</strong> environ 4 mois (entre deux wipes).</p>
          <p className="mt-3"><strong className="text-orange-400">🎯 Serveur :</strong> uniquement sur Ravens DayZ PvE.</p>
        </div>

        <div className="text-gray-300">
          <p><strong className="text-orange-400">💰 Les dons financent :</strong></p>

          <ul className="mt-3 space-y-2">
            <li>🖥️ Hébergement</li>
            <li>🔧 Nouveaux mods</li>
            <li>🚀 Développement du serveur</li>
            <li>🎉 Événements communautaires</li>
          </ul>

        </div>

      </div>

      <div className="mt-10 rounded-xl bg-black/50 p-6 text-center text-gray-300">

        <p className="mb-3 text-orange-400 font-bold">
          ⚖️ Aucun avantage de gameplay
        </p>

        <p>
          Tous les joueurs sont soumis aux mêmes règles.
          Les Packs VIP offrent uniquement des avantages de confort.
        </p>

        <p className="mt-5 text-red-400">
          💳 Les Packs VIP sont non remboursables.
        </p>

      </div>
      <div className="mt-10 rounded-2xl border border-orange-500/30 bg-orange-500/10 p-6 text-center">

  <h3 className="mb-3 text-xl font-bold text-orange-400">
    ✅ Monétisation conforme à Bohemia Interactive
  </h3>

  <p className="text-gray-300">
    Ce serveur respecte les règles officielles de monétisation de
    <span className="font-semibold text-white"> Bohemia Interactive</span>.
  </p>

  <p className="mt-3 text-gray-300">
    Aucun avantage <span className="font-semibold text-orange-400">Pay-to-Win</span>.
  </p>

  <p className="mt-2 text-gray-300">
    Tous les avantages proposés sont uniquement cosmétiques ou de confort.
  </p>

</div>

    </div>

  </div>
</section>
</footer>

    </main>
  );
}
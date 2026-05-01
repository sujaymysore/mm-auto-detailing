"use client";

import { SectionFadeIn } from "./SectionFadeIn";

const reviews = [
  {
    name: "Meetalee Dalal",
    rating: 5,
    text: "Highly recommend! Just had my car cleaned inside and out by Megh and wow — what a difference. The car looks incredible and the attention to detail really stood out. Professional service and fantastic results.",
  },
  {
    name: "Sujay Mysore",
    rating: 5,
    text: "I recently had the pleasure of experiencing M & M Car Detailing and I couldn't be more impressed. From the moment Megh arrived his dedication and thoroughness were evident. He meticulously covered every inch of my Tesla Model Y. The transformation was remarkable and the attention to detail was second to none.",
  },
  {
    name: "Christine Ro",
    rating: 5,
    text: "I have used M&M Car Detailing a few times now and every time I have found Megh to be very professional and his work absolutely brilliant. If you want your car to look the very best it should look then definitely try M&M.",
  },
  {
    name: "Ahkar Ye Tun",
    rating: 5,
    text: "I must give a shoutout to M&M Car Detailing for the outstanding job done on my car. The work was so impeccable that my family and I were left speechless. The attention to detail and quality of cleaning were truly impressive.",
  },
  {
    name: "Willson Go",
    rating: 5,
    text: "Megh did a fantastic job detailing my Lexus IS250. The car looks spotless inside and out, with every detail carefully attended to — from the leather seats to the rims. The level of care and precision was impressive and I'm really happy with the results.",
  },
  {
    name: "Tamanna Anand",
    rating: 5,
    text: "We had the pleasure of having both our cars detailed by M&M Car Detailing. Excellent service and both cars were cleaned and taken care of beautifully. The quality of work and attention to detail were outstanding.",
  },
  {
    name: "Aneta Gramatkovski",
    rating: 5,
    text: "I could not be happier with how my old tired Kluger turned out. The car looks better than when I first bought it. I've received many compliments on how great it looks. Great service and I'll definitely be taking our other car to Megh.",
  },
  {
    name: "Akhil Parvathaneni",
    rating: 5,
    text: "Absolutely outstanding service from Megh. He arrived promptly and was incredibly professional throughout. My car has never looked better — the attention to detail was impeccable. Megh made sure every part of the car was cleaned to perfection.",
  },
  {
    name: "Shruthy Bharadvaj",
    rating: 5,
    text: "Megh does our car detailing and he is fantastic at it. I trusted my cars to this young professional and was blown away by the attention to detail. His small business is a hidden gem for car detailing — every nook and cranny sparkles.",
  },
  {
    name: "Sharat Bharadvaj",
    rating: 5,
    text: "Megh did a fantastic job on our cars. They are sparkling clean and shiny. I highly recommend M&M for your car detailing needs. It also comes at a great price for the level of quality provided.",
  },
  {
    name: "Lachie A",
    rating: 5,
    text: "Got my Fiesta ST detailed and the service was amazing. The results speak for themselves. The car looks fantastic and I would definitely recommend.",
  },
  {
    name: "Jessica Graham",
    rating: 5,
    text: "Megh always does an outstanding job. My car feels brand new every single time he finishes. His attention to detail is second to none.",
  },
  {
    name: "Matt Perry",
    rating: 5,
    text: "I've been using the guys at M&M for a few years now and it's always been a pleasure. Nothing is too difficult for them and they always deliver incredible results.",
  },
  {
    name: "Preet Oberai",
    rating: 5,
    text: "Great detailer, very prompt and got the job done to a very high standard. Needed the car cleaned before our second baby arrived and the results were perfect.",
  },
  {
    name: "Oguz Bayman",
    rating: 5,
    text: "Excellent service. Very happy with the result and it came at a superb price. Highly recommend.",
  },
  {
    name: "Dharmmesh Prajapati",
    rating: 5,
    text: "Wonderful work by Megh. His dedication is out of this world.",
  },
  {
    name: "Andy Chea",
    rating: 5,
    text: "If you're after a mobile detailer you can trust, M & M Car Detailing are definitely worth checking out. Communication was spot on from start to finish — quick replies, clear pricing, and they kept me in the loop the whole time. Always available, even when I called them the night before. Insane! End result was unreal. You can tell they take pride in what they do. Hard to find this level of service these days. I can happily recommend them to anyone!",
  },
  {
    name: "Hamdan Ahmed",
    rating: 5,
    text: "This legend pays attention to my car and got rid of all the dirty spots, made my car hella shiny and fixed the combobulator, what a legend 🙏",
  },
];

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

export default function ReviewsSection() {
  return (
    <section className="px-6 py-24 bg-surface/40 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        <SectionFadeIn>
          <h2 className="font-heading text-3xl md:text-4xl text-text text-center mb-4">
            What Our Clients Say
          </h2>

          <p className="text-center text-text-muted mb-12 flex items-center justify-center gap-2 flex-wrap">
            <span>⭐ 5.0 average rating from 18</span>
            <span className="inline-flex items-center gap-1.5">
              <GoogleIcon className="w-5 h-5" />
              <span>Google reviews</span>
            </span>
          </p>
        </SectionFadeIn>

        <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory">

          {reviews.map((review, index) => (
            <div
              key={index}
              className="min-w-[340px] max-w-[340px] snap-start p-6 rounded-2xl bg-background border border-white/10 hover:border-accent/30 transition-all duration-300"
            >
              <div className="text-accent mb-3">
                {"★★★★★"}
              </div>

              <p className="text-text-muted text-sm leading-relaxed mb-5">
                &quot;{review.text}&quot;
              </p>

              <p className="text-text font-medium">
                {review.name}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

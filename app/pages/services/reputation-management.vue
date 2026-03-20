<script
  setup
  lang="ts"
>
useSeoMeta({
  title: 'Reputation Management & Google Reviews',
  description:
    'Reputation management that builds trust and drives leads. Google Reviews strategy, review response workflows, local visibility, and reporting for small businesses.',
})
</script>

<template>
  <div>
    <main class="text-white">
      <ServicesHeader
        title="Reputation Management"
        description="Google Reviews, review responses, and local trust-building that turns searchers into customers."
      />

      <SharedPageWrapper>
        <div>
          <!-- Platform & Workflow Icons -->
          <div class="border-y border-stone-500/50 py-8 mb-8">
            <div class="grid grid-cols-4 md:flex md:justify-between items-center gap-4 md:gap-0">
              <UIcon
                name="i-mdi-google"
                class="text-4xl md:text-5xl text-stone-400 justify-self-center"
              />
              <UIcon
                name="i-mdi-star"
                class="text-4xl md:text-5xl text-stone-400 justify-self-center"
              />
              <UIcon
                name="i-mdi-message-reply-text"
                class="text-4xl md:text-5xl text-stone-400 justify-self-center"
              />
              <UIcon
                name="i-mdi-map-marker"
                class="text-4xl md:text-5xl text-stone-400 justify-self-center"
              />
              <UIcon
                name="i-mdi-bell"
                class="text-4xl md:text-5xl text-stone-400 justify-self-center"
              />
              <UIcon
                name="i-mdi-chart-line"
                class="text-4xl md:text-5xl text-stone-400 justify-self-center"
              />
              <UIcon
                name="i-mdi-shield-check"
                class="text-4xl md:text-5xl text-stone-400 justify-self-center"
              />
              <UIcon
                name="i-mdi-account-group"
                class="text-4xl md:text-5xl text-stone-400 justify-self-center"
              />
            </div>
          </div>

          <!-- Intro -->
          <div class="mb-8">
            <p class="text-stone-300 text-xl md:text-2xl leading-8">
              Your reputation is often the first impression—especially on Google. Strong reviews, thoughtful
              responses, and accurate local visibility can be the difference between a customer choosing you or the
              business next door. We help you build trust with a clear strategy and simple systems your team can
              maintain.
            </p>
          </div>

          <!-- Review Examples (Side-by-side) -->
          <div class="py-8 mb-8">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <NuxtImg
                  src="/google-business-profile-reviews.webp"
                  alt="Google Business Profile reviews example"
                  class="w-full h-auto object-contain"
                />
                <div class="text-stone-400 mt-2">
                  Durable plastic review card — front
                </div>
              </div>

              <div>
                <NuxtImg
                  src="/reputation-management-google-reviews.webp"
                  alt="Reputation management Google reviews example"
                  class="w-full h-auto object-contain"
                />
                <div class="text-stone-400 mt-2">
                  Durable plastic review card — back (QR code)
                </div>
              </div>
            </div>
          </div>

          <!-- Info Sections -->
          <div class="space-y-8">
            <div class="pt-8">
              <h3 class="text-2xl font-bold mb-4">
                Reviews Strategy & Growth
              </h3>
              <p class="text-stone-400 text-lg">
                We start by defining what “success” looks like for your business—more calls, bookings, orders, or
                walk-ins—then align your review plan around the moments that naturally produce great feedback. The goal
                is consistent volume from real customers (never gimmicks), so your rating and recency stay healthy.
              </p>
              <p class="text-stone-400 text-lg mt-4">
                From SMS/email requests to in-store prompts and durable plastic QR review cards, we help you pick a
                system your team will actually use. Everything is tuned for the right ask, at the right time, with a
                smooth path to your Google review link.
              </p>
            </div>

            <div class="border-t border-stone-500/50 pt-8">
              <h3 class="text-2xl font-bold mb-4">
                Responses & Reputation Protection
              </h3>
              <p class="text-stone-400 text-lg">
                Great responses build confidence—especially when a customer is comparing you to the business next door.
                We set up messaging guidelines, templates that still feel human, and a workflow so reviews don’t get
                missed (and the right person can step in when something needs attention).
              </p>
              <p class="text-stone-400 text-lg mt-4">
                When issues pop up, we focus on calm, practical steps: acknowledge, take it offline when appropriate,
                and reduce friction in your customer experience so the same problems don’t keep happening. The outcome
                is a reputation that feels managed—not reactive.
              </p>
            </div>

            <div class="border-t border-stone-500/50 pt-8">
              <h3 class="text-2xl font-bold mb-4">
                Local Visibility & Reporting
              </h3>
              <p class="text-stone-400 text-lg">
                Reviews work best when your local presence is accurate and consistent. We help strengthen the trust
                signals that support discovery: Google Business Profile completeness, consistent business info across
                listings, and location-focused content that matches what people actually search.
              </p>
              <p class="text-stone-400 text-lg mt-4">
                We track progress over time—review volume, rating trends, response rates, and local visibility—so you
                can see what’s working and what to improve next. Reporting stays lightweight and actionable, not
                bloated.
              </p>
            </div>

            <div class="border-t border-stone-500/50 pt-8 pb-8">
              <h3 class="text-2xl font-bold mb-4">
                Reputation Checks
              </h3>
              <p class="text-stone-400 text-lg">
                If you’re not sure where to start, we can run a fast audit and give you a clear punch list. These are
                the common areas we check and tighten up.
              </p>
              <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="flex gap-3">
                  <UIcon
                    name="i-mdi-check"
                    class="h-5 w-5 text-stone-400 mt-1"
                  />
                  <div class="text-stone-400 text-lg leading-7">
                    Google Business Profile basics (categories, hours, services, photos)
                  </div>
                </div>
                <div class="flex gap-3">
                  <UIcon
                    name="i-mdi-check"
                    class="h-5 w-5 text-stone-400 mt-1"
                  />
                  <div class="text-stone-400 text-lg leading-7">
                    Review link + QR flow (fast, frictionless, and easy to share)
                  </div>
                </div>
                <div class="flex gap-3">
                  <UIcon
                    name="i-mdi-check"
                    class="h-5 w-5 text-stone-400 mt-1"
                  />
                  <div class="text-stone-400 text-lg leading-7">
                    Response templates and escalation path for negative reviews
                  </div>
                </div>
                <div class="flex gap-3">
                  <UIcon
                    name="i-mdi-check"
                    class="h-5 w-5 text-stone-400 mt-1"
                  />
                  <div class="text-stone-400 text-lg leading-7">
                    Listings consistency (name, address, phone, and website)
                  </div>
                </div>
                <div class="flex gap-3">
                  <UIcon
                    name="i-mdi-check"
                    class="h-5 w-5 text-stone-400 mt-1"
                  />
                  <div class="text-stone-400 text-lg leading-7">
                    Tracking + reporting (volume, rating, response rate, local performance)
                  </div>
                </div>
                <div class="flex gap-3">
                  <UIcon
                    name="i-mdi-check"
                    class="h-5 w-5 text-stone-400 mt-1"
                  />
                  <div class="text-stone-400 text-lg leading-7">
                    Team guidance (who asks, when to ask, and what to say)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ServicesCTA />

        <!-- Related Services -->
        <div class="mt-10 pt-10">
          <h3 class="text-2xl md:text-3xl font-bold mb-6 text-stone-200 font-delight">
            Related Services
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <NuxtLink
              to="/services/seo-services"
              class="group block p-6 border border-stone-700/60 bg-stone-900/40 hover:bg-stone-900/60 transition-colors"
            >
              <div class="flex items-start gap-3">
                <UIcon
                  name="i-mdi-target"
                  class="h-6 w-6 text-stone-400 group-hover:text-stone-300"
                />
                <div>
                  <div class="font-bold text-stone-200">SEO Services</div>
                  <div class="text-stone-400 mt-1">Improve local discoverability and demand capture.</div>
                </div>
              </div>
            </NuxtLink>

            <NuxtLink
              to="/services/digital-marketing"
              class="group block p-6 border border-stone-700/60 bg-stone-900/40 hover:bg-stone-900/60 transition-colors"
            >
              <div class="flex items-start gap-3">
                <UIcon
                  name="i-mdi-chart-line"
                  class="h-6 w-6 text-stone-400 group-hover:text-stone-300"
                />
                <div>
                  <div class="font-bold text-stone-200">Digital Marketing</div>
                  <div class="text-stone-400 mt-1">Turn trust into traffic, leads, and repeat business.</div>
                </div>
              </div>
            </NuxtLink>

            <NuxtLink
              to="/services/website-design"
              class="group block p-6 border border-stone-700/60 bg-stone-900/40 hover:bg-stone-900/60 transition-colors"
            >
              <div class="flex items-start gap-3">
                <UIcon
                  name="i-mdi-palette-swatch"
                  class="h-6 w-6 text-stone-400 group-hover:text-stone-300"
                />
                <div>
                  <div class="font-bold text-stone-200">Website Design</div>
                  <div class="text-stone-400 mt-1">Make your credibility obvious the moment someone lands.</div>
                </div>
              </div>
            </NuxtLink>

            <NuxtLink
              to="/services/website-development"
              class="group block p-6 border border-stone-700/60 bg-stone-900/40 hover:bg-stone-900/60 transition-colors"
            >
              <div class="flex items-start gap-3">
                <UIcon
                  name="i-mdi-nodejs"
                  class="h-6 w-6 text-stone-400 group-hover:text-stone-300"
                />
                <div>
                  <div class="font-bold text-stone-200">Website Development</div>
                  <div class="text-stone-400 mt-1">Improve speed, UX, and conversion across key pages.</div>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </SharedPageWrapper>
    </main>
  </div>
</template>

<style scoped></style>

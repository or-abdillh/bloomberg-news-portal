<template>
  <main class="w-full">
    <HeaderBar></HeaderBar>
    <!-- content -->
    <main class="w-full px-8 pb-5">
      <CategoryHeader></CategoryHeader>
      <!-- Main layout -->
      <main class="flex flex-col md:flex-row gap-8 mt-10">
        <!-- Headline -->
        <section class="w-full md:w-4/12">
          <HeadlineSection text="Movies">
            <section class="flex gap-3 items-center">
              <NuxtLink class="underline hover:text-gray-600 duration-300" to="/">Traillers</NuxtLink>
              <NuxtLink class="hover:text-gray-600 duration-300" to="/">Premieres</NuxtLink>
              <NuxtLink class="hover:text-gray-600 duration-300" to="/">Announced</NuxtLink>
            </section>
          </HeadlineSection>
          <!-- content -->
          <section class="w-full my-6">
            <!-- poster -->
            <div class="w-full relative">
              <!-- badge -->
              <label class="absolute top-0 left-0 px-3 py-1 bg-gray-50 text-gray-900 font-semibold">Pursuit</label>
              <img class="w-full z-10" src="~/assets/img/news_01.png" alt="news 02">
              <!-- Copywriters -->
              <section class="mt-3 mb-8">
                <p class="text-gray-600">April 17, 2022</p>
                <h1 class="text-2xl font-semibold text-gray-900 my-3">For 'Fantastic Beasts' Series, a Case of Diminishing Returns</h1>
                <p class="text-gray-600">
                  Incididunt in cillum magna dolore veniam est est cillum adipisicing qui non duis sint culpa. Eiusmod elit laborum cillum est amet aliqua sit ullamco pariatur. Ipsum fugiat veniam ullamco cupidatat labore et amet veniam ex esse esse nulla nostrud. Mollit nisi voluptate officia nisi sint reprehenderit. Velit consequat tempor.
                </p>
              </section>
              <!-- previews -->
              <section>
                <section class="flex gap-6 mb-3">
                  <template v-for="preview in 3" :key="preview">
                    <img class="aspect-video w-3/12" src="~/assets/img/news_01.png" alt="">
                  </template>
                </section>
                <NuxtLink class="text-blue-800 font-semibold underline underline-offset-1" to="/">Continue Reading</NuxtLink>
              </section>
            </div>
          </section>
        </section>

        <!-- Latest news  -->
        <section class="w-full md:w-4/12">
          <HeadlineSection text="Latest News"></HeadlineSection>
          <!-- List of all card -->
          <section class="mt-5 border-l border-r border-gray-100">
            <template v-for="card in 3" :key="card">
              <NewsCard></NewsCard>
            </template>
          </section>
        </section>

        <!-- Most Read -->
        <section class="w-full md:w-4/12">
          <HeadlineSection text="Most Read"></HeadlineSection>
          <!-- List of all card -->
          <section class="mt-5 border-l border-r border-gray-100">
            <template v-for="card in 4" :key="card">
              <NewsCard :useSlot="true">
                <img src="~/assets/img/news_01.png" class="w-full" alt="">
              </NewsCard>
            </template>
          </section>
        </section>
      </main>
    </main>
  </main>
</template>
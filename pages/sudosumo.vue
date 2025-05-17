<script lang="ts" setup>
const backRepoUrl: string = 'https://github.com/Louisp78/sudosumo-api'
const frontRepoUrl: string = 'https://github.com/Louisp78/sudosumo-v2'
</script>

<template>
  <main
    class="flex flex-grow flex-col gap-3 items-center text-center w-full pt-20 px-5 pb-20"
  >
    <h1 class="text-2xl md:text-3xl md:pt-5">
      {{ $t('sudosumo.title') }}
    </h1>
    <div class="px-0 md:px-5 lg:px-7">
      <NuxtImg
        src="/img/sudosumo_arch_diagram.svg"
        :alt="$t('sudosumo-architecture-diagram')"
      />
      <p class="text-moon">
        {{ $t('sudosumo-architecture-diagram') }}
      </p>
    </div>

    <ol class="flex flex-col gap-12 text-left pt-12">
      <li>
        <h3 class="text-xl md:text-2xl">
          1. Frontend
        </h3>
        <NuxtLink
          :to="frontRepoUrl"
          target="_blank"
          class="nav-item md:w-fit md:my-2"
        >
          <Icon
            name="carbon:logo-github"
            size="24"
          />
          Explore Frontend Repo
        </NuxtLink>
        <ul class="flex flex-col gap-3 pl-4 pt-2">
          <li>
            <span class="font-semibold">{{ 'Framework' }}</span>{{ ': Next.js (React.js-based with TypeScript).' }}
          </li>
          <li>
            <span class="font-semibold">{{ 'Conception' }}</span>{{ ': Figma.' }}
          </li>
          <li>
            <span class="font-semibold">{{ 'Styling' }}</span>{{ ': TailwindCSS.' }}
          </li>
          <li>
            <span class="font-semibold">{{ 'Rendering Strategy' }}</span>{{
              ': Server-Side Rendering (SSR) for improved security, efficient caching, and optimized SEO.'
            }}
          </li>
          <li>
            <span class="font-semibold">{{ 'Authentication' }}</span>{{ ': OAuth2 via Auth.js with Google as the provider.' }}
          </li>
          <li>
            <span class="font-semibold">{{ 'Deployment' }}</span>{{
              ': Deployed using a serverless provider Netlify for automatic scaling and cost efficiency.'
            }}
          </li>
          <li>
            <span class="font-semibold">{{ 'Security' }}</span>{{
              ': TLS configuration for secure communication between frontend and backend.'
            }}
          </li>
        </ul>
      </li>
      <li>
        <h3 class="text-xl md:text-2xl">
          2. Backend
        </h3>
        <NuxtLink
          :to="backRepoUrl"
          target="_blank"
          class="nav-item md:w-fit md:my-2"
        >
          <Icon
            name="carbon:logo-github"
            size="24"
          />
          Explore Backend Repo
        </NuxtLink>
        <ul class="flex flex-col gap-3 pl-4 pt-2">
          <li>
            <span class="font-semibold">{{ 'Technology' }}</span>{{ ': Java Spring Boot (REST API).' }}
          </li>
          <li>
            <span class="font-semibold">{{ 'Architecture' }}</span>
            <ul class="pl-4">
              <li>
                <span class="font-semibold">{{
                  'Domain-Driven Design (DDD)'
                }}</span>{{
                  ' for improved modularity, separation of concerns, and ease of maintenance.'
                }}
              </li>
              <li>
                Build with <span class="font-semibold">{{ 'Jakarta EE' }}</span>{{ ' for enterprise-level scalability and robustness.' }}
              </li>
            </ul>
          </li>
          <li>
            <span class="font-semibold">{{ 'Security' }}</span>{{
              ': OAuth2 with Google as the identity provider; uses JWT tokens for secure session management.'
            }}
          </li>
          <li>
            <span class="font-semibold">{{ 'Database Interaction' }}</span>{{
              ': REST API for frontend communication; additional cron jobs scheduled for periodic database updates.'
            }}
          </li>
          <li>
            <span class="font-semibold">{{ 'Hosting' }}</span>{{
              ': Hosted on an AWS EC2 instance using Docker container to add isolation and consistency across environnements and isolation, ensuring dedicated resources for backend operations.'
            }}
          </li>
          <li>
            <span class="font-semibold">{{ 'Load Balancer' }}</span>{{
              ': AWS Elastic Load Balancer (ELB) to distribute traffic across multiple backend instances for high availability, serving as the front interface to the internet.'
            }}
          </li>
          <li>
            <span class="font-semibold">{{ 'TLS Configuration' }}</span>{{
              ': For secure HTTP communication between frontend and backend.'
            }}
          </li>
          <li>
            <span class="font-semibold">{{ 'Data Update Mechanism' }}</span>{{
              ": Scheduled cron jobs to reset each user's life to 5 at midnight, ensuring daily updates to the database."
            }}
          </li>
        </ul>
      </li>
      <li>
        <h3 class="text-xl md:text-2xl">
          3. Database
        </h3>
        <ul class="flex flex-col gap-3 pl-4 pt-2">
          <li>
            <span class="font-semibold">{{ 'Database Technology' }}</span>{{ ': PostgreSQL.' }}
          </li>
          <li>
            <span class="font-semibold">{{ 'Management' }}</span>{{ ': Hosted on an AWS RDS instance.' }}
          </li>
        </ul>
      </li>
      <li>
        <h3 class="text-xl md:text-2xl">
          4. Infrastructure Components
        </h3>
        <ul class="flex flex-col gap-3 pl-4 pt-2">
          <li>
            <span class="font-semibold">{{ 'Load Balancer' }}</span>{{
              ': Implemented to ensure high availability by distributing traffic evenly across backend instances through different subnets.'
            }}
          </li>
          <li>
            <span class="font-semibold">{{ 'DNS Configuration' }}</span>: Use of subdomains
            <i class="font-semibold">api.louisplace.com</i> and
            <i class="font-semibold">sudosumo.louisplace.com</i> for
            professional, branded URL management.
          </li>
          <li>
            <span class="font-semibold">{{ 'Security Strategies:' }}</span>
            <ul class="pl-4 flex flex-col gap-2 pt-2">
              <li>
                <span class="font-semibold">TLS</span> for secure communication.
              </li>
              <li>
                <span class="font-semibold">OAuth2</span> for authentication
                with Google.
              </li>
              <li>
                <span class="font-semibold">AWS security group</span> ensure
                that no instance is unnecessarily exposed to the internet by
                properly configuring security group rules.
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ol>
  </main>
</template>

<style lang="postcss">
  .nav-item {
    @apply flex justify-center items-center gap-3 p-2 font-inconsolata font-medium border rounded-md hover:bg-sand hover:text-burnedSand;
  }
</style>

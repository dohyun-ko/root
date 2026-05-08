---
title: "GitHub puts a 'flagged' banner on every page I visit. Three weeks now."
date: "2026-05-09"
thumbnail: "/images/github-flag-no-reason/banner.png"
description: "A timeline of the flag, the broken services, and the support ticket that has been sitting open for three weeks."
tags: ["github", "incident", "open-source"]
---

![The is-an-ai organization has been flagged.](/images/github-flag-no-reason/banner.png)

This banner has been at the top of every GitHub page I visit while logged in for three weeks — not only on the flagged org's pages, but on every repository, every organization I belong to, every part of the GitHub UI.

> **The is-an-ai organization has been flagged.**
>
> Because of that, your organization is hidden from the public. If you believe this is a mistake, contact support to have your organization's status reviewed.

GitHub gave no reason. The support ticket I filed the same day still has no human response.

## The organization

`is-an-ai` is the GitHub organization behind [is-an.ai](https://is-an.ai), an open-source service that gives developers free subdomains under `*.is-an.ai`. Contributors submit a JSON record file via PR, a GitHub Action validates it, a bot merges it, and a self-hosted PowerDNS picks up merged records. This is the same model [is-a.dev](https://is-a.dev) has used on GitHub for years.

## Impact

The moment the flag landed:

- The org page and every repository started returning **404 to anyone not signed in as a member**.
- **OAuth login stopped working** — the OAuth App is owned by the flagged org, so users can no longer sign in to is-an.ai.
- **Every GitHub Action in the org stopped firing**, so new subdomain registrations from the website and CLI fail at the merge step.
- **Existing subdomains still resolve**, because DNS lives on our own PowerDNS rather than GitHub.

We had migrated the API and database off Cloudflare to AWS earlier this month, so the data plane is fine. The control plane is the part stuck on GitHub.

## The support ticket

I contacted GitHub Support the same day. Here is the ticket I filed, verbatim:

> **Please describe your account restriction issue.**
>
> Hi GitHub Support Team,
>
> Our organization, is-an-ai, has been flagged and hidden. We believe this is a mistake and would like to request a review.
>
> **About the Project:**
> is-an-ai is an open-source project providing free subdomains for developers. Registration is managed via Pull Requests, which involves frequent automated CI/CD activities.
>
> **Request:**
> We suspect the flag might be due to our automated PR process or potential misuse of a subdomain by an external user. Please let us know the specific reason for the flag so we can address it immediately.
>
> We are committed to following GitHub's Terms of Service and are ready to take any necessary corrective actions.

Three weeks later, the only response I have received is the auto-generated ticket confirmation.

## Links

- Service: [is-an.ai](https://is-an.ai)
- CLI on npm: [npmjs.com/package/is-an-ai](https://www.npmjs.com/package/is-an-ai)
- Contact: dohyun682@gmail.com

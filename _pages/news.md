---
layout: page
title: News
permalink: /news/
entries:
  - date: 2025-12-28
    content: "Meisen Gao gave a talk at the 2025 Shanghai Workshop on Particle and Nuclear Physics in Shanghai."
  - date: 2025-11-02
    content: 'Meisen Gao gave a talk titled "Determination of the Initial Condition for the Balitsky–Kovchegov Equation with Transformers" at the 5th Workshop on Quantum Field Theory and Its Applications. [Event page](https://indico.ihep.ac.cn/event/25051/contributions/202736/)'
  - date: 2025-10-31
    content: 'New preprint released: "Determination of the initial condition for the Balitsky-Kovchegov equation with transformers". [PDF](https://arxiv.org/abs/2510.26779)'
  - date: 2025-10-23
    content: "Our group website is now online! Welcome to Meisen Gao Group at ECUST School of Physics."
---

{% assign all_news = page.entries | sort: 'date' | reverse %}

{% assign current_year = nil %}
{% for item in all_news %}
  {% assign year = item.date | date: '%Y' %}
  {% if year != current_year %}
## {{ year }}
  {% assign current_year = year %}
  {% endif %}

**{{ item.date | date: '%B %d, %Y' }}**
- {{ item.content | markdownify | strip_newlines }}
{% endfor %}


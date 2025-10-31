---
layout: page
title: News
permalink: /news/
---

<style>
.page-title {
  font-size: 1.5rem !important;
  font-weight: 600;
  margin-bottom: 0.5rem !important;
}

.page-header {
  margin-bottom: 0.5rem !important;
}

.page-content {
  margin-top: 0 !important;
  padding-top: 0.5rem !important; /* reduce gap below title without moving title */
}

.page-content > *:first-child {
  margin-top: 0.1rem !important;
}

h2 {
  font-size: 1.2rem !important;
  font-weight: 600;
  margin-top: 0.25rem !important;
  margin-bottom: 1rem;
}
</style>

{% assign all_news = site.news | sort: 'date' | reverse %}

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


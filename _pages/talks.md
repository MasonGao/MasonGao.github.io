---
layout: page
title: Talks
permalink: /talks/
talks:
  - title: "Determination of the Initial Condition for the Balitsky–Kovchegov Equation with Transformers"
    url: "https://indico.ihep.ac.cn/event/25051/contributions/202736/"
    author: "Meisen Gao"
    venue_text: "Fifth Workshop on Quantum Field Theory and Its Applications"
    venue_url: ""
    location: "China"
    date_display: "November 2, 2025"
    date: "2025-11-02"
    year: 2025
  - title: "Transformer-based Learning of BK Evolution and DIS Cross Sections"
    url: ""
    author: "Meisen Gao"
    venue_text: "2025 Saturated Glue (SURGE) Collaboration Meeting and Workshop"
    venue_url: "https://indico.global/event/13890/overview"
    location: "University of California, Los Angeles (UCLA)"
    date_display: "June 24, 2025 (Breakout session discussion, Online)"
    date: "2025-06-24"
    year: 2025
  - title: "QCD resummation of dijet and photon + jet azimuthal decorrelations in p-p and p-A collisions"
    url: "https://indico.ihep.ac.cn/event/21455/contributions/154611/"
    author: "Meisen Gao"
    venue_text: "Sixth Workshop on Heavy Flavor Physics and Quantum Chromodynamics"
    venue_url: ""
    location: "Qingdao, China"
    date_display: "April 22, 2024"
    date: "2024-04-22"
    year: 2024
  - title: "Annual Conference Talk"
    url: ""
    author: ""
    venue_text: "2023 Shanghai Workshop on Particle and Nuclear Physics"
    venue_url: ""
    location: "Shanghai, China"
    date_display: "December 2023"
    date: "2023-12-01"
    year: 2023
  - title: "QCD resummation of dijet azimuthal decorrelations in p-p and p-A collisions"
    url: "https://indico.ihep.ac.cn/event/19422/contributions/139075/"
    author: "Meisen Gao"
    venue_text: "Third Workshop on Quantum Field Theory and Its Applications"
    venue_url: ""
    location: "Beijing Computational Science Research Center, Beijing, China"
    date_display: "August 14, 2023"
    date: "2023-08-14"
    year: 2023
  - title: "Simultaneous extraction of SMEFT parameters and PDFs from top-quark pair data"
    url: ""
    author: "Meisen Gao"
    venue_text: "2022 Shanghai Workshop on Particle and Nuclear Physics"
    venue_url: ""
    location: "Shanghai, China"
    date_display: "December 24, 2022"
    date: "2022-12-24"
    year: 2022
  - title: "Differential distributions for single top quark production at the LHeC"
    url: "https://indico.cern.ch/event/1072533/overview"
    author: "Meisen Gao"
    venue_text: "DIS2022: XXIX International Workshop on Deep-Inelastic Scattering and Related Subjects"
    venue_url: "https://indico.cern.ch/event/1072533/overview"
    location: "Santiago de Compostela, Spain & Online"
    date_display: "May 2, 2022 (Poster presentation, online)"
    date: "2022-05-02"
    year: 2022
---

<div class="talks">
{% assign list = page.talks | sort_natural: 'date' | reverse %}
{% for t in list %}
<div class="talk">
  <div class="talk-header">
    <div class="talk-title">
      {% if t.url and t.url != "" %}<a href="{{ t.url }}" target="_blank">{{ t.title }}</a>{% else %}{{ t.title }}{% endif %}
    </div>
    <div class="talk-year">{{ t.year }}</div>
  </div>
  {% if t.author and t.author != "" %}<div class="talk-author">{{ t.author }}</div>{% endif %}
  <div class="talk-venue"><em>{% if t.venue_url and t.venue_url != "" %}<a href="{{ t.venue_url }}" target="_blank">{{ t.venue_text }}</a>{% else %}{{ t.venue_text }}{% endif %}</em></div>
  <div class="talk-location">{{ t.location }}</div>
  <div class="talk-date">{{ t.date_display }}</div>
</div>
{% endfor %}
</div>
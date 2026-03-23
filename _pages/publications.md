---
layout: page
title: Publications
page_title: Selected Publications
permalink: /publications/
entries:
  - title: "Determination of the initial condition for the Balitsky-Kovchegov equation with transformers"
    year: 2025
    authors: '<span class="author-self">M. S. Gao</span>, Z. B. Kang, J. Penttala, D. Y. Shao'
    eprint_text: "2510.26779"
    eprint_url: "https://arxiv.org/abs/2510.26779"
    bibtex: |
      @article{Gao:2025bktransformer,
        author = {Gao, Mei-Sen and Kang, Zhong-Bo and Penttala, Jani and Shao, Ding-Yu},
        title = {Determination of the initial condition for the Balitsky-Kovchegov equation with transformers},
        year = {2025},
        eprint = {2510.26779},
        archivePrefix = {arXiv},
        primaryClass = {hep-ph}
      }
  - title: "Accessing nucleon transversity with one-point energy correlators"
    year: 2025
    authors: '<span class="author-self">M. S. Gao</span>, Z. B. Kang, W. C. Li, D. Y. Shao'
    eprint_text: "2509.15809"
    eprint_url: "https://arxiv.org/abs/2509.15809"
    bibtex: |
      @article{Gao:2025transversity,
        author = {Gao, Mei-Sen and Kang, Zhong-Bo and Li, Wen-Chen and Shao, Ding-Yu},
        title = {Accessing nucleon transversity with one-point energy correlators},
        year = {2025},
        eprint = {2509.15809},
        archivePrefix = {arXiv},
        primaryClass = {hep-ph}
      }
  - title: "N³LL + O(α<sub>s</sub><sup>2</sup>) predictions of lepton–jet azimuthal distribution in DIS"
    year: 2025
    authors: "S. Fang, <span class=\"author-self\">M. S. Gao</span>, H. T. Li, D. Y. Shao"
    venue_text: "<em>JHEP</em> <strong>01</strong>, 029 (2025)"
    venue_url: "https://doi.org/10.1007/JHEP01(2025)029"
    bibtex: |
      @article{Fang:2025jhep,
        author = {Fang, Shen and Gao, Mei-Sen and Li, Hai-Tao and Shao, Ding-Yu},
        title = {N³LL + O(α_s²) predictions of lepton–jet azimuthal distribution in DIS},
        journal = {JHEP},
        volume = {01},
        pages = {029},
        year = {2025},
        doi = {10.1007/JHEP01(2025)029}
      }
  - title: "QCD resummation of dijet azimuthal decorrelations in <em>pp</em> and <em>pA</em>"
    year: 2023
    authors: '<span class="author-self">M. S. Gao</span>, Z. B. Kang, D. Y. Shao, J. Terry, C. Zhang'
    venue_text: "<em>JHEP</em> <strong>10</strong> (2023) 013"
    venue_url: "https://doi.org/10.1007/JHEP10(2023)013"
    bibtex: |
      @article{Gao:2023dijet,
        author = {Gao, Mei-Sen and Kang, Zhong-Bo and Shao, Ding-Yu and Terry, John and Zhang, Cheng},
        title = {QCD resummation of dijet azimuthal decorrelations in pp and pA},
        journal = {JHEP},
        volume = {10},
        pages = {013},
        year = {2023},
        doi = {10.1007/JHEP10(2023)013}
      }
  - title: "Simultaneous CTEQ-TEA extraction of PDFs and SMEFT parameters from jet and <em>tt̄</em> data"
    year: 2023
    authors: "J. Gao, <span class=\"author-self\">M. Gao</span>, T. J. Hobbs, D. Liu, X. Shen"
    venue_text: "<em>JHEP</em> <strong>05</strong> (2023) 003"
    venue_url: "https://doi.org/10.1007/JHEP05(2023)003"
    bibtex: |
      @article{Gao:2023smeft,
        author = {Gao, Jun and Gao, Meisen and Hobbs, T. J. and Liu, Deping and Shen, Xiaoxu},
        title = {Simultaneous CTEQ-TEA extraction of PDFs and SMEFT parameters from jet and tt̄ data},
        journal = {JHEP},
        volume = {05},
        pages = {003},
        year = {2023},
        doi = {10.1007/JHEP05(2023)003}
      }
  - title: "Differential distributions for single top-quark production at the LHeC"
    year: 2021
    authors: '<span class="author-self">M. S. Gao</span>, J. Gao'
    venue_text: "<em>Phys. Rev. D</em> <strong>104</strong> (2021) 053005"
    venue_url: "https://doi.org/10.1103/PhysRevD.104.053005"
    bibtex: |
      @article{Gao:2021lhec,
        author = {Gao, Mei-Sen and Gao, Jun},
        title = {Differential distributions for single top-quark production at the LHeC},
        journal = {Phys. Rev. D},
        volume = {104},
        pages = {053005},
        year = {2021},
        doi = {10.1103/PhysRevD.104.053005}
      }
  - title: "Top-quark mass determination from <em>t</em>-channel single-top at the LHC"
    year: 2021
    authors: '<span class="author-self">M. S. Gao</span>, S. R. Yuan, J. Gao'
    venue_text: "<em>JHEP</em> <strong>04</strong> (2021) 054"
    venue_url: "https://doi.org/10.1007/JHEP04(2021)054"
    bibtex: |
      @article{Gao:2021topmass,
        author = {Gao, Mei-Sen and Yuan, Shuo-Ren and Gao, Jun},
        title = {Top-quark mass determination from t-channel single-top at the LHC},
        journal = {JHEP},
        volume = {04},
        pages = {054},
        year = {2021},
        doi = {10.1007/JHEP04(2021)054}
      }
---

<div class="publications">
{% assign pubs = page.entries | sort: 'year' | reverse %}
{% for pub in pubs %}
<div class="publication">
  <div class="pub-header">
    <div class="pub-title">{{ pub.title }}</div>
    <div class="pub-year">{{ pub.year }}</div>
  </div>
  {% if pub.authors %}
  <div class="pub-authors">{{ pub.authors }}</div>
  {% endif %}
  {% if pub.venue_url %}
  <div class="pub-venue"><a href="{{ pub.venue_url }}" target="_blank">{{ pub.venue_text }}</a></div>
  {% elsif pub.eprint_url %}
  <div class="pub-venue"><em>e-Print: <a href="{{ pub.eprint_url }}" target="_blank">{{ pub.eprint_text }}</a></em></div>
  {% endif %}
  {% if pub.bibtex %}
  <div class="pub-links">
    <a class="bib-btn" onclick="toggleBib('bib-{{ forloop.index0 }}')">BIB</a>
  </div>
  <div id="bib-{{ forloop.index0 }}" class="bibtex" style="display:none;">
    <button class="copy-btn" onclick="copyBibtex('bib-{{ forloop.index0 }}')" title="Copy BibTeX">copy</button>
    <pre>{{ pub.bibtex }}</pre>
  </div>
  {% endif %}
</div>
{% endfor %}
</div>

<script>
function toggleBib(id) {
  var bib = document.getElementById(id);
  if (bib.style.display === "none") {
    bib.style.display = "block";
  } else {
    bib.style.display = "none";
  }
}

function copyBibtex(id) {
  var bibElement = document.getElementById(id);
  var bibText = bibElement.textContent || bibElement.innerText;
  
  // Create a temporary textarea element
  var textarea = document.createElement('textarea');
  textarea.value = bibText;
  document.body.appendChild(textarea);
  
  // Select and copy the text
  textarea.select();
  textarea.setSelectionRange(0, 99999); // For mobile devices
  
  try {
    document.execCommand('copy');
    // simple text feedback only
    var button = event.target;
    var originalText = button.innerHTML;
    button.innerHTML = 'copied';
    setTimeout(function() {
      button.innerHTML = originalText;
    }, 1000);
    
  } catch (err) {
    console.error('Failed to copy text: ', err);
    alert('Failed to copy BibTeX. Please select and copy manually.');
  }
  
  // Remove the temporary element
  document.body.removeChild(textarea);
}
</script>

<p class="pub-note">
  <strong>Note:</strong> Underlined names indicate group members.
</p>

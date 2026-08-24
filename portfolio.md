---
layout: main
title: Portfolio
---

<p align="justify">Selected projects. Each one is written up in more detail in a post, and the links go there.</p>

<h3 style="margin-top:2.2rem">Značky na přání: Czech vanity licence plates</h3>

<p style="margin-bottom:1.2rem"><i>Mage.ai · BigQuery · dbt · Streamlit · Python</i></p>

<a href="{{ site.baseurl }}/spz-na-prani/">
  <img src="{{ site.baseurl }}/assets/img/spz-cover.png" alt="Značky na přání" style="width:100%; border-radius:6px;">
</a>

<p align="justify">An end-to-end data project on the Czech Ministry of Transport open dataset of personalised licence plates, 54 392 of them registered since 2016. Mage.ai extracts the source CSV into a raw layer in BigQuery, dbt builds a typed staging layer and a deduplicated marts view on top of it (medallion architecture), and a Streamlit app with eleven pages presents it.</p>

<p align="justify">The analytical part turned out to be mostly a text problem: the letters G, O, Q and W are not allowed on a Czech plate, so drivers substitute digits for them, which makes zero the single most frequent character in the whole register. Reading the plates therefore means decoding them back first.</p>

<p align="justify"><a href="https://spz-na-prani.streamlit.app/" target="_blank">Live dashboard →</a> &nbsp;·&nbsp; <a href="{{ site.baseurl }}/spz-na-prani/">Read the write-up →</a> &nbsp;·&nbsp; <a href="https://github.com/tomlukavec/spz-na-prani" target="_blank">Code on GitHub →</a></p>

<br>

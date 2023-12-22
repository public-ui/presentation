---
theme: ./theme
colorSchema: light
highlighter: shiki
lineNumbers: true
transition: fade
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
drawings:
  persist: false
css: unocss
title: Komponenten-Bibliothek für die Barrierefreiheit | KoliBri
---


# **KoliBri** - Public UI

## _Die barrierefreie Komponentenbibliothek_

---
layout: about-itzbund
---

## Informationstechnikzentrum Bund

- Zentraler IT-Dienstleister des Bundes
- Leitung: Dr. Alfred Kranstedt
- 4.200 Beschäftigte
- 12 Standorte in Deutschland

## Anforderungsanalyse und -management und SW-Design

- Referat mit über 50 Beschäftigten
- Leitung: Christine Heinrich

---
layout: about-me
showQR: false
---

# Speaker

- Mein Name ist **Martin** Oppitz.
- **Wertegang:**
  - Inzwischen **über 20 Jahre** im Web unterwegs
  - Informatikstudium, Selbstständig und **Inverso**
  - Seit 3 Jahren beim **ITZBund**
- **Softwarearchitekt** im Referat **Anforderungs- und Lösungsdesign** (II A 2)


---
layout: center
showQR: false
---

<div class="flex gap-2 mb-4"  data-theme="bmf">
  <kol-button _label="&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;" _variant="danger" />
  <kol-button _label="&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;" _variant="primary" />
  <kol-button _label="&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;" _hide-label _variant="normal" />
</div>

<div class="text-left border-l-3 border-gray-400 p-2 bg-gray-100">
  <h3>Ohne Farben nutzbar</h3>
  Klicken Sie auf den roten Schalter, um den Vorgang abzubrechen.
</div>

---
layout: center
showQR: false
---

<div class="flex gap-2 mb-4 grey"  data-theme="bmf">
  <kol-button _label="&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;" _variant="danger" />
  <kol-button _label="&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;" _variant="primary" />
  <kol-button _label="&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;" _hide-label _variant="normal" />
</div>

<div class="text-left border-l-3 border-gray-400 p-2 bg-gray-100">
  <h3>Ohne Farben nutzbar</h3>
  Klicken Sie auf den roten Schalter, um den Vorgang abzubrechen.
</div>

---
layout: tunnel
showQR: false
---

<img src="/assets/accordion.png" class="block w-150 mb-15"/>

<div class="text-left border-l-3 border-gray-400 p-2 bg-gray-100">
  <h3>Alles im Blick‽</h3>
  Gesichtsfeldbeeinträchtigungen können auf nur einem Auge oder auch auf beiden Augen vorkommen?
</div>

---
layout: center
showQR: false
---

<iframe class="rounded-1em" width="800" height="400" src="https://www.youtube-nocookie.com/embed/JQ8ZiT1sn88?si=JXtmpOtVqa7Hy9uO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

`On Dec. 9, 1968, Doug Engelbart`

### **Wir** können unsere Webprodukte für **jeden** zugänglich machen.

---
layout: center
showQR: false
---

<v-click>

<img class="m-auto block w-50 pb-15" src="/assets/avatar.png" />

</v-click>

<div v-click-hide class="h-0">

# **Ko**mponenten-Bib**li**othek für die **B**ar**ri**erefreiheit

</div>

<v-after>

# **KoliBri**

</v-after>

---
layout: egg
handle: 1
---

# Vom **Ei** zum **Open Source**-Standard

Inhalte des Vortrags:

- Was sind **Web Component**s?

<v-clicks>

- Was treibt uns an, **KoliBri** zu entwickeln?
- Was steckt hinter dem **Atomic Design**?
- Wie funktioniert das **Theming**?
- **Live**-Beispiel zur Veranschaulichung
- Welche einzigartigen Eigenschaften (**USPs**) ergeben sich?
- Inwiefern können wir **Standards** setzen?
- Was regelt die **EUPL**-Lizenz?

</v-clicks>

---
layout: image-right-50
image: '/assets/html-js-css.png'
handle: 2
---

# Web Components

<small class="underline">What is a Web Component?</small>

Webseiten werden mit HTML-Elementen umgesetzt.

- **Web Components**-Standard (W3C) ermöglicht **eigene** HTML-Element zu definieren
- Das ist **fix**
  - Semantik (HTML) → Assistive Systems / Barrierefreiheit
  - Verhalten (JavaScript) → Usability & Barrierefreiheit
- Das ist **flexibel**
  - Aussehen (CSS) → Corporate Design
- wiederverwendbare, barrierefreie und robuste „Bausteine“

---
layout: image-right-50
image: '/assets/w3c.jpeg'
handle: 3
---

# Viele Wege führen nach Rom

<small class="underline">What is actually the problem?</small>

Barrierefreie Benutzeroberflächen werden durch die semantisch korrekte Komposition von HTML-Elementen realisiert.

Der HTML-Webstandard lässt aber das **Wie** dabei offen. Somit liegt die Aufgabe, das "Problem" zu lösen, bei den Entwickelnden. Darüber hinaus gilt es, die Richtlinien der <kol-abbr _title="Web Content Accessibility Guidelines">WCAG</kol-abbr> mit den gestalterischen Aspekten aus den vielseitigen Styleguides zu vereinen.

**Da die Anforderungen an die Barrierefreiheit ja für uns alle gleich sind**, ist es sinnvoll, diese Aufgabe nur einmal zu lösen und die Lösung **wiederverwendbar** zu machen.

---
layout: image-right
image: '/assets/pmpc-logo.jpg'
handle: 4
---

# Motivation

<small class="underline">What goals can be pursued?</small>

- gesetzliche Verpflichtung zur Erstellung barrierefreier Benutzeroberflächen
- Großteil der Komponentenbibliotheken haben den Fokus auf Design
- Anforderungen werden immer wieder neu in Projekten umgesetzt
- Mittels Web Components ist ein unabhängiger Standard möglich (seit Mitte 2020)
- Reduzierung der Herstellerabhängigkeit (Digitale Souveränität)

<br/>

Der **große Vorteil für die Bundesverwaltung**, und jetzt für **uns alle**, liegt darin, dass wir mittels des Web Component-Standards gemeinsam eine optimalen Referenzimplementierung **umsetzen**, **wiederverwenden** (teilen), **verbessern** und **erweitern** können.

---
layout: image-right-50
image: '/assets/atomic-design-layering.png'
style: 'width: 70%'
handle: 5
---

# Atomic Design

<small class="underline">Decoupling ensures efficient development processes.</small>

- Ziel ist es eine nutzbare **Basis** zu bereitzustellen
- **Fokus** liegt auf **kleinteiligen** Komponenten
- Jede Komponente ist in sich **barrierefrei** (Moleküle)
- Die Verwendung ist nur über die **API** möglich (Robustheit)
- **Komposition-Pattern** ermöglicht eine nahtlose **Verwendung**
- KoliBri-Komponenten bleiben fachlich **neutral**

<br/>

> **Fachlich höherwertige Komponenten** werden auf Basis von KoliBri im **Design System** der eigenen Organisation oder des eigenen Unternehmens umgesetzt.


---
layout: image-right
image: '/assets/logo.kolibri.png'
handle: 6
---

# Manifest

<small class="underline">Keep the focus on your qualities.</small>

Das Manifest beschreibt die uns leitenden **Softwarequalitäten**.

- Benutzerfreundlichkeit
- Kompatibilität
- Portabilität
- Wartbarkeit
- Funktionale Eignung
- Sicherheit

<br />
<span>Ausführliche Version - <kol-link _href="https://public-ui.github.io/docs/manifest" _target="website">Manifest</kol-link></span>

---
handle: 7
---

# Theming

<small class="underline">How can KoliBri be designed?</small>

<img src="/assets/theming.png" class="w-3/4 m-auto"/>


---
layout: demo-time
handle: 8
---

# Live-Demo

<small class="underline">Where are savings being made here?</small>

Im Code-Beispiel wird dargestellt, wie die Anforderungen an die Barrierefreiheit im Button "weg gekapselt" werden.

<!-- <kol-accordion _heading="test" _level="5">
<div slot="content"> -->

```tsx {1,14|2-8|9-13|all}
<kol-button _icons="ui-home" _icon-only _label="Primary">
	<button aria-labelledby="574540" class="primary" type="button">
		<span>
			<kol-icon>
				<i aria-hidden="true" class="icofont-ui-home"></i>
			</kol-icon>
		</span>
	</button>
	<kol-tooltip>
		<kol-badge id="574540">
			<span>Primary</span>
		</kol-badge>
	</kol-tooltip>
</kol-button>
```

<!-- </div>
</kol-accordion> -->

<small class="mt-8 text-xs"><sup>\*</sup> Quellcode ist für die bessere Nachvollziehbarkeit stark vereinfacht.</small>

---
layout: image-right
handle: 9
---

# Alleinstellungsmerkmale

<small class="underline">What actually makes the difference?</small>

Aus Sicht der öffentlichen Verwaltung hat KoliBri eine ganze Reihe an Alleinstellungsmerkmalen:

- **Barrierefreiheit** - kommt zuerst und vor Design
- **Architektur** - universell im Web einsetzbar
- **Wiederverwendbarkeit** - Kleinteilig und gestaltbar
- **Digitale Souveränität** - Code-Hoheit liegt bei uns
- **Robust** - vor Manipulationen geschützt

---
layout: center
handle: 10
---

# Historie

<div class="timeline">
  <div class="event">
    <div class="date">Januar 2021</div>
    <div class="content">
      <p>Offizieller <strong>Start</strong> als internes Projekt des ITZBund.</p>
    </div>
  </div>
  <div class="event">
    <div class="date">Dezember 2021</div>
    <div class="content">
      <p><strong>Release 1.0</strong> mit Unterstützung von Referenz-Projekten.</p>
    </div>
  </div>
  <div class="event">
    <div class="date">Jahr 2022</div>
    <div class="content">
      <p><strong>Reifephase</strong> durch Nutzung als interner Standard.</p>
    </div>
  </div>
  <div class="event">
    <div class="date">Oktober 2022</div>
    <div class="content">
      <p>Freigabe als <strong>OpenSource</strong> auf GitHub.</p>
    </div>
  </div>
</div>

**KoliBri** ist zu einem umfassenden Produkt herangewachsen.

---
layout: image-right
image: '/assets/architecture.png'
handle: 11
---

# Benefits

<small class="underline">The fruits of labor are always the sweetest.</small>

**Die Anforderungen an die Barrierefreiheit ist für uns alle gleich!** Daraus ergibt sich das Potenzial zur Schaffung eines Standards zur bestmögliche **Wiederverwendbarkeit**.

- Verwendung reiner Webstandards (HTML, CSS, JS und Web Components)
- Framework-agnostische und barrierefreie Komponenten
- Modulare Architektur (Schema, Components, Themes)
- Fließende Integration in bestehende Projekte oder Design Systeme
  - Nahtlose Verwendung in Kombination mit Theme
  - Fassaden-Komponenten für Design-Sprache (API)
- Sicherstellung des Designs mittels visueller Regressionstests
- Wiederverwendbarkeit in allen webbasierten Projekten


---
layout: image-right
image: '/assets/eupl.jpeg'
handle: 12
---

# Lizenz

<small class="underline">What is behind the EUPL license?</small>

Die "Open-Source-Lizenz für die Europäische Union" (EUPL) ist eine von der Europäischen Union herausgegebene Copyleft-Lizenz für die Lizenzierung freier Software.

- Die reine Verwendung von Artefakten ist vollkommen **unproblematisch**.
- Das Kopieren von Code ist durch die Lizenz geschützt (**Copyleft**)!

<br/>

**EUPL** sichert die freie Nutzung und den Schutz des Urheberrechts.


---
layout: image-right-50
image: '/assets/website.png'
handle: 13
style: 'width: 100%'
---

# Nächste Schritte

Du kannst folgendes tun, um **KoliBri** kennenzulernen …

<v-clicks>

- <kol-link _href="https://public-ui.github.io" _target="website" _label="Lese mehr über KoliBri"></kol-link> (Dokumentation)
- <kol-link _href="https://public-ui.github.io/docs/get-started/first-steps" _target="website" _label="Probiere KoliBri aus"></kol-link> (Create-App)
- <kol-link _href="https://public-ui.github.io/docs/concepts/architecture#erweitert" _target="github" _label="Nutze KoliBri in Deinem Design System"></kol-link> (Nutzen)
- <kol-link _href="https://public-ui.github.io/docs/concepts/styling/theming" _target="website" _label="Gestalte Dein eigenen KoliBri"></kol-link> (Designer)
- <kol-link _href="https://public-ui.github.io/sample-react/#/button/basic" _target="website" _label="Lerne anhand von Beispielen"></kol-link> (Samples)
- <kol-link _href="https://github.com/public-ui/kolibri" _target="github" _label="Folge und teile uns"></kol-link> (Follow-Button)

</v-clicks>

---
layout: center
showQR: false
---

<img class="m-auto block w-50 pb-10" src="/assets/qr-code2.png" />

# Vielen Dank für Eure Aufmerksamkeit

<br/>
<small class="underline">
Lasst uns gemeinsam KoliBri bunter und besser machen!<br/><br/></small>


<ul class="flex">
  <li class="list-none"><kol-link _href="https://public-ui.github.io" _target="website"><kol-icon _icons="codicon codicon-book" /> Dokumentation</kol-link></li>
  <li class="list-none">|</li>
  <li class="list-none"><kol-link _href="mailto:kolibri@itzbund.de" _target="mail"><kol-icon _icons="codicon codicon-mail" /> kolibri@itzbund.de</kol-link></li>
  <li class="list-none">|</li>
  <li class="list-none"><kol-link _href="https://github.com/public-ui/kolibri" _target="github"><kol-icon _icons="codicon codicon-github" /> GitHub</kol-link></li>
</ul>

---
showQR: false
---

<kol-logo _org="ITZBund" class="m-auto pl-40 block w-140" />

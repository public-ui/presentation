---
theme: ./theme
colorSchema: light
highlighter: shiki
lineNumbers: true
transition: fade
info: |
  ## Informations
drawings:
  persist: false
css: unocss
Title:  Web Component library for the Accessibility | KoliBri
showQR: false
---

# **KoliBri** - Public UI

## _The accessible web components_

---
layout: about-itzbund
---

## Informationstechnikzentrum Bund (ITZBund)

- _"Federal Information Technology Center"_
- Central IT service provider of the federal government
- Head: Dr. Alfred Kranstedt
- 4,200 employees
- 12 locations in Germany

## Requirements analysis and software design

- Unit with over 50 employees
- Head: Christine Heinrich

---
layout: about-me
showQR: false
---

# Speaker

- My name is **Martin** Oppitz.
- **Biography:**
  - More **than 25 years** of experience in web development
  - **Computer science studies**, own small business and private companies
  - Now I am working at the **ITZBund** since **3 years**

---
layout: center
showQR: false
---

<img src="/assets/torte.png" class="block w-50 mb-15"/>

<div class="text-left border-l-3 border-gray-400 p-2 bg-gray-100">
  <h3>Red-green vision deficiency</h3>
  Is the red or green chart segment larger?
</div>

---
layout: tunnel
showQR: false
---

<img src="/assets/accordion.png" class="block w-150 mb-15"/>

<div class="text-left border-l-3 border-gray-400 p-2 bg-gray-100">
  <h3>Everything in the sheetick‽</h3>
  Visual field impairments can occur in just one eye or in both eyes?
</div>

---
layout: center
showQR: false
---

<v-click>

<img class="m-auto block w-50 pb-15" src="/assets/avatar.png" />

</v-click>

<div v-click-hide class="h-0">

# Component-Library for the Accessiblity
## (**Ko**mponenten-Bib**li**othek für die **B**ar**ri**erefreiheit)

</div>

<v-after>

# **KoliBri**

</v-after>

---
layout: egg
handle: 1
---

# From **Egg** to **Open Source** Standard

What are the following questions we want to get to the bottom of?

- What is the **motivation** for KoliBri?
- What is the **problem**?
- What is a **Web Component**?
- Why is KoliBri so **flexible**?
- Where is something **saved** here?
- Which components **already exists**?
- What is behind the **license EUPL**?

---
layout: image-right
handle: 2
---

# Motivation

<small class="underline">What goals can be pursued with this?</small>

- Legal requirement to create accessible user interfaces.
- majority of component libraries have focus on design
- requirements are implemented again and again in projects
- Reduction of vendor dependency (digital sovereignty)

<br/>

**Objective:** To create an accessible and reusable standard library without losing the necessary flexibility and design freedom.

---
layout: image-right-50
image: '/assets/w3c.jpeg'
handle: 3
---

# Many roads lead to Rome

<small class="underline">What is the problem?</small>

Accessible user interfaces are realized by semantically correct composition of HTML elements.

However, the HTML web standard leaves the **how** open. Thus, the task of solving the "problem" lies with the developers. Furthermore, the guidelines of the <kol-abbr _title="Web Content Accessibility Guidelines">WCAG</kol-abbr> have to be combined with the design aspects from the versatile style guides.

The **great advantage for the federal administration** is that we can **implement**, **reuse** (share), **improve** and **enhance** a solution **ideal** for us together by means of the Web Component standard.

---
layout: image-right-50
image: '/assets/html-js-css.png'
handle: 4
---

# Web Components

<small class="underline">What is a Web Component?</small>

Web pages are implemented with HTML elements.

- **Web Components** standard allows to define **own** HTML element.
- This is **fixed**
  - Semantics (HTML) → Assistive Systems / Accessibility.
  - Behavior (JavaScript) → Usability & Accessibility
- This is **flexible**
  - Appearance (CSS) → Corporate Design
- this creates accessible, robust and reusable "building blocks

---
handle: 5
---

# Theming

<small class="underline">How is KoliBri positioned?</small>

<img src="/assets/theming.png" class="w-3/4 m-auto"/>


---
layout: demo-time
handle: 6
---

# Live-Demo

<small class="underline">Where is anything saved here?</small>

The code example shows how the accessibility requirements are "encapsulated away" in the button.

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

<small class="mt-8 text-xs"><sup>\*</sup> Source code is greatly simplified for better Comprehensibility.</small>

---
layout: image-right-66
image: '/assets/handout.png'
handle: 7
---

# Component diversity

<small class="underline">What is the benefit of the component diversity?</small>

The **component diversity** is the **key** to the **flexibility** of KoliBri.

- ... are **small** and **reusable**.
- ... can be **combined** with other.
- ... can be **extended**.
- ... can be **replaced**.
- ... can be **styled**.

---
layout: image-right
handle: 7
---

# Unique selling proposition

<small class="underline">What actually makes the difference?</small>

From a public administration perspective, KoliBri has a number of unique selling points:

- **Accessibility** - comes first and before design.
- **Architecture** - universally applicable on the web.
- **Reusability** - small-scale and designable
- **Digital sovereignty** - code sovereignty lies with us
- **Robust** - protected from manipulation

---
layout: image-right
image: '/assets/eupl.jpeg'
handle: 8
---

# License

<small class="underline">What is behind the EUPL license?</small>

The "European Union Open Source License" (EUPL) is a copyleft license issued by the European Union for licensing free software.

- The pure use of artifacts is completely **unproblematic**.
- Copying code is protected by the license (**copyleft**)!

<br/>

**EUPL** ensures free use and copyright protection.

---
layout: image-right
image: '/assets/logo.kolibri.png'
handle: 9
---

# Outlook

<small class="underline">Where to go with KoliBri?</small>

Several design systems (e.g. **DeSyBri** and **KERN**) are already implemented on the basis of **KoliBri**. All existing components can be used and extended by own larger components.

The graphical design is done with the help of theming. For this the designer or also pure CSS, SCSS etc. can be used.

KoliBri is continuously developed further. Likewise innovations in the regulations (e.g. WCAG, EN and BITV) are constantly incorporated and checked by our experts for accessibility. The requirements of the federal administration and the open source community are taken into account.

---
layout: image-right-50
image: '/assets/website.png'
handle: 10
style: 'width: 100%'
---

# Next steps

Here's what you can do to get to know **KoliBri** ...

<v-clicks>

- <kol-link _href="https://public-ui.github.io" _label="" _target="website">Read more about KoliBri</kol-link> (Documentation)
- <kol-link _href="https://public-ui.github.io/docs/get-started/first-steps" _label="" _target="website">Try KoliBri</kol-link> (Create app)
- <kol-link _href="https://public-ui.github.io/docs/concepts/architecture#erweitert" _label="" _target="github">Use KoliBri in your design system</kol-link> (utility)
- <kol-link _href="https://public-ui.github.io/docs/concepts/styling/theming" _label="" _target="website">Create your own KoliBri</kol-link> (Designer)
- <kol-link _href="https://public-ui.github.io/sample-react/#/button/basic" _label="" _target="website">Learn by example</kol-link> (Samples)
- <kol-link _href="https://github.com/public-ui/kolibri" _label="" _target="github">Follow and share us</kol-link> (Follow button)

</v-clicks>

---
layout: center
showQR: false
---

<iframe class="rounded-1em" width="800" height="400" src="https://www.youtube-nocookie.com/embed/JQ8ZiT1sn88?si=JXtmpOtVqa7Hy9uO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

`On Dec. 9, 1968, Doug Engelbart`

### **Now**, we can make our web products **accessible** to **everyone**.

---
layout: center
showQR: false
---

<img class="m-auto block w-50 pb-10" src="/assets/qr-code2.png" />

# Thank you for your attention

<br/>
<small class="underline">
Let's make KoliBri more colorful and better together!<br/><br/></small>


<ul class="flex">
  <li class="list-none"><kol-link _href="https://public-ui.github.io" _label="" _target="website"><kol-icon _icons="codicon codicon-book" /> Documentation</kol-link></li>
  <li class="list-none">|</li>
  <li class="list-none"><kol-link _href="mailto:kolibri@itzbund.de" _label="" _target="mail"><kol-icon _icons="codicon codicon-mail" /> kolibri@itzbund.de</kol-link></li>
  <li class="list-none">|</li>
  <li class="list-none"><kol-link _href="https://github.com/public-ui/kolibri" _label="" _target="github"><kol-icon _icons="codicon codicon-github" /> GitHub</kol-link></li>
</ul>

---
showQR: false
---

<kol-logo _org="ITZBund" class="m-auto pl-40 block w-140" />

# Web Components Accessibility 

- Wir wollen ja nicht das HTML nachbauen.
- Shadow ther are no accessible informations
- Shadow DOM not supported in Safari
- Privicy Events gelten doch für alle? und nicht nur für WCs?
- Wieso sollte ich die Rolle einer Web Component von außen änder?
- Wieso muss die Rolle an der Web Component definiert werden? - Das wird doch durch das Markup in der componente gemacht?
- Welches Framework verwendet Ihr?
- Wieso sollte man native Elemente nachbauen?!?

- Do not override author-set, global attributes
- Label - Input 
- activedescendant - ARIA
- ChromeFox Screenreader, Window Narrator
  - Zahlreiche Tools haben nicht die Standards umgesetzt
- ARIA - Accessible Rich Internet Applications
- Accessibility-Object-Model
- VErbieten, dass man die Rollen außen setzen kann
- `delegateFocus`
- internal
- FormField mit Icon - Click auf Icon > Feld bekommt den Fokus
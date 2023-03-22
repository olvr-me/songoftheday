Paste
# Songoftheday project

Mit diesem Projekt soll eine kleine Anwendung erstellt werden, welche auf Basis einer Konfiguration für jeden Tag einen Song anzeigen kann, der mir gerade gefällt. Juckt zwar wahrscheinlich keinen, aber ich finde die Idee ganz schön :)

## Hintergrund
Ich glaube dieses Projekt könnte für den Einstieg in die Web-Welt mit NextJS echt ganz cool sein.
Ich kann hier ganz ganz viel aus dem Tutorialprojekt entnehmen, woran ich vor diesem Projekt hier gerarbeitet habe.

## Die Idee
Ich könnte eine Seite bauen, die für verschiedene Tage meinen „Song of the day“ darstellt. Das würde ich erst einmal Spotify Songs begrenzen, aber könnte mir vorstellen hier später auch noch YouTube mit einzubringen. Das Design soll dabei sehr minimalistisch und cool sein. Ich bin mir noch unsicher ob ich zu jedem Eintrag auch noch Text einbauen möchte, oder ob lediglich Interpret, Songname und das Coverbild angezeigt werden sollen. Für v0 könnte Interpret/Name und für v1 könnte vermutlich zusätzlich das Bild wäre schon ganz nice. Zudem wäre ein Link zum Spotify Song noch sehr sehr cool. In v2 könnte ich dann zusätzlich über einen Text mit der Begründung oder sowas nachdenken. Vielleicht wäre der mood an dem Tag auch noch ganz nice zu trocken.
Eine Gesamtplaylist mit allen Songs wäre ebenfalls sehr nice. Ich denke das könnte aber auch etwas für eine Folgeversion sein. Da könnte dann auch ein automatisches hinzufügen zur Playlist erfolgen, wenn man einen neuen Eintrag macht.
Das gesamte Projekt könnte ich dann nachher entweder auf Vercel über deren eigengemachte, oder über meine eigene Domain online hosten. Das Projekt könnte ich aber trotzdem so bauen, dass ich es später open source stellen kann und es einfach durch simple Anpassungen für jeden startbar machen kann.

## Das Design
Ich stelle mir das so vor, dass die Seite sowohl für mobile als auch für Desktop ähnlich aussieht. Die WebSite ist komplett in Schwarz (OLED ausnutzen) und zeigt das Coverbild sehr groß in der Mitte an. Um das Bild herum soll ein glow Effekt sein, den ich bereits in einem TailWind Tutorial (siehe unten) gesehen habe. Mega cool wäre es, wenn dieser die Primärfarbe des Thumbnails an sich übernehmen könnte. Dafür gibt es auch schon eine coole Library (siehe unten).

Hier der Link zu [Figma](https://www.figma.com/file/MXZB8EKbhI017fT0A66vlU/Spotify-'Song-of-the-day'-Project?node-id=0%3A1&t=vwVDmDSt1NbTpZan-1) wie ich mir das ganze in etwa vorstelle.

Hier der derzeitige Stand:
![image](/documentation/Design%20songoftheday.png)

## Die Daten
Ich bräuchte für v1 vermutlich nur eine Sache: Einen Spotify Link. Über die API sollte Name/Interpret und sogar das Bild schon abrufbar sein. Hier könnte ich mich am Video von Kevin Chronik (siehe unten) orientieren, der die Spotify API mal in einem seiner Videos für eine iOS App angebunden hat. Ich müsste mir dann irgendwie von diesem Link aus alles noch beschaffen. Könnte ich aber vermutlich auch statisch machen - dann sollte die website auch mega schnell sein. Könnte etwas für die olvr.me Homepage sein als allererste Idee :)

## Der Workflow zum hinzufügen
1. Zentrale „songs.json“ Datei um einen Song erweitern
    1. Dazu den Link von Spotify selbst heraussuchen
2. Skript zum generieren der Pages anstoßen // Build des Projekts anstoßen (wenn statisch gerendert) // Über GitHub Actions triggern lassen // Über Vercel push bauen lassen
3. Spotify Playlist erweitern

## Der Workflow zum Projekt anlegen
1. Projekt auschecken
2. Songs Playlist mit Liedern befallen
3. .env Variable austauschen (wenn Spotify einen anderen Client-Key für die API braucht)
4. Mit `npm run dev` bauen/lokal hosten
5. Auf Vercel o.Ä. deployen

## Was mir noch an wissen fehlt + Quellen wo man es finden könnte s
* Wie bekomme ich die Daten von Spotify? (Name, Interpret, Thumbnail) (Kevin Chromik hat mal ein [Video](https://www.youtube.com/watch?v=UpAlKFf7Emo&list=PLbiAxP0T4RyGyGQ-_xKAR8SfXjpttd9rL&index=1&t=56s) zu dem Thema gemacht:  Recherche-Links: [Node API](https://github.com/thelinmichael/spotify-web-api-node), [Client API](https://github.com/jmperez/spotify-web-api-js), [Endpunkt für Track](https://developer.spotify.com/documentation/web-api/reference/#/operations/get-track)
* Wie erstelle ich den blur-Effekt? Hier etwas ähnliches mit [tailwind](https://www.youtube.com/watch?v=5W6kEP65AH4&t=479s)
* Wie bekomme ich die dominante Farbe heraus? Vielleicht mit [color thief](https://github.com/lokesh/color-thief).
* Wie lasse ich statisch die einzelnen Seiten bauen? -> Dann müsste ich nicht clientseitig die Sachen immer laden und könnte das statisch bauen (vielleicht hier in der [NextJS Doku](https://beta.nextjs.org/docs/rendering/static-and-dynamic-rendering) was.
* Wie kann ich die Seite auf meiner olvr.me Seite hosten (alternativ könnte ich die auch vorher auch ner Vercel page hosten)

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
export type BlogSection = {
  heading?: string
  paragraphs: string[]
}

export type BlogPost = {
  slug: string
  title: string
  date: string // ISO
  readingMinutes: number
  kapitelBezug: string
  teaser: string
  sections: BlogSection[]
}

export const posts: BlogPost[] = [
  {
    slug: 'besitztumseffekt-immobilienpreis',
    title: 'Der Besitztumseffekt: Warum Ihre Immobilie mehr wert scheint, als sie ist',
    date: '2026-10-22',
    readingMinutes: 6,
    kapitelBezug: 'Zum Kapitel „Die Psychologie der Kaufentscheidung" (Kapitel 01–05)',
    teaser:
      'Eigentümer überschätzen den Wert ihrer Immobilie systematisch – nicht aus Gier, sondern aus Psychologie. Was der Besitztumseffekt mit gescheiterten Verkäufen zu tun hat und wie man ihm entkommt.',
    sections: [
      {
        paragraphs: [
          'Fragen Sie einen Eigentümer, was seine Immobilie wert ist, und Sie erhalten fast nie eine Zahl – Sie erhalten eine Geschichte. Die Geschichte vom Kaufpreis plus allem, was seitdem „reingesteckt" wurde. Die Geschichte vom Nachbarhaus, das angeblich für eine Rekordsumme wegging. Die Geschichte von zwanzig Jahren Familienleben, die sich unbemerkt in den Quadratmeterpreis eingerechnet haben.',
          'Die Verhaltensökonomie kennt dieses Muster seit den Experimenten von Richard Thaler, Daniel Kahneman und Jack Knetsch: Menschen bewerten Dinge höher, sobald sie ihnen gehören. Im berühmten Kaffeetassen-Experiment verlangten Besitzer für dieselbe Tasse etwa das Doppelte dessen, was Nicht-Besitzer zu zahlen bereit waren. Bei einer Tasse sind das ein paar Dollar Differenz. Bei einer Immobilie sind es schnell sechsstellige Beträge.',
        ],
      },
      {
        heading: 'Warum der Effekt bei Immobilien besonders teuer ist',
        paragraphs: [
          'Drei Eigenschaften machen Immobilien zum idealen Nährboden für den Besitztumseffekt. Erstens: Es gibt keinen laufenden Marktpreis. Eine Aktie korrigiert Ihre Selbstüberschätzung jeden Tag um 17:30 Uhr – Ihre Immobilie widerspricht Ihnen nie. Zweitens: Der Kaufpreis wirkt als Anker, und jede investierte Handwerkerrechnung verschiebt diesen Anker weiter nach oben, obwohl der Markt viele dieser Investitionen gar nicht vergütet. Drittens: Emotionale Nutzung und Vermögenswert verschwimmen. Niemand rechnet den Wert seines Aktiendepots höher, weil dort die Kinder laufen gelernt haben.',
          'Die Folge sehen wir in der Vermittlungspraxis jede Woche: Objekte, die zum „Wunschpreis" zwölf Monate am Markt stehen, dann in drei Preisschritten reduziert werden – und am Ende unter dem Betrag verkaufen, der mit realistischem Einstiegspreis in den ersten acht Wochen erzielbar gewesen wäre. Der Markt bestraft den Besitztumseffekt doppelt: mit Zeit und mit Geld. Ein Angebot, das zu lange sichtbar ist, trägt ein Stigma („Warum will das keiner?"), und professionelle Käufer kalkulieren dieses Stigma gnadenlos ein.',
        ],
      },
      {
        heading: 'Drei Gegenmittel aus der Entscheidungsforschung',
        paragraphs: [
          'Erstens: Trennen Sie Bewertung und Biografie. Eine belastbare Wertindikation rechnet mit Ist-Miete, Marktmiete, Faktor und Zustand – nicht mit Erinnerungen. Wer die eigene Immobilie wie ein fremdes Objekt rechnet (oder rechnen lässt), neutralisiert den größten Teil des Effekts.',
          'Zweitens: Drehen Sie die Frage um. Nicht „Was will ich dafür haben?", sondern: „Würde ich dieses Objekt heute, zu diesem Preis, mit meinem eigenen Geld kaufen?" Wenn die ehrliche Antwort Nein lautet, verlangen Sie einen Besitztums-Aufschlag, den kein Käufer bezahlen wird.',
          'Drittens: Holen Sie sich den Marktpreis vor dem Markteintritt. Im Off-Market-Umfeld lässt sich ein Preis diskret gegen echte Ankaufsprofile testen, bevor ein Objekt öffentlich „verbrennt". Genau dafür haben wir Offmarketpool gebaut: Das Feedback von hinterlegten Käuferprofilen ist der ehrlichste Gutachter, den es gibt – und es kostet weder Zeit am Markt noch Stigma.',
        ],
      },
      {
        heading: 'Das Fazit',
        paragraphs: [
          'Der Besitztumseffekt ist kein Charakterfehler, sondern eine Grundeinstellung des menschlichen Bewertungsapparats. Man kann ihn nicht abschalten – aber man kann Entscheidungsprozesse bauen, die ihn umgehen. Der Unterschied zwischen beidem ist bei einer durchschnittlichen deutschen Immobilie ein mittlerer fünfstelliger Betrag. Mindestens.',
        ],
      },
    ],
  },
  {
    slug: 'winners-curse-bieterverfahren',
    title: "Winner's Curse: Warum der Höchstbietende fast immer zu viel zahlt",
    date: '2026-10-22',
    readingMinutes: 5,
    kapitelBezug: 'Zum Kapitel „Die Falle der Finanzierung" (Kapitel 06–10)',
    teaser:
      'Wer ein Bieterverfahren gewinnt, hat per Definition mehr geboten als alle anderen Marktteilnehmer. Die Spieltheorie zeigt: Genau das ist das Problem – und es gibt nur einen sauberen Ausweg.',
    sections: [
      {
        paragraphs: [
          'Stellen Sie sich vor, zwanzig erfahrene Investoren bewerten dasselbe Mehrfamilienhaus. Ihre Schätzungen streuen – manche zu niedrig, manche zu hoch, der Durchschnitt liegt vermutlich nahe am wahren Wert. Nun gewinnt im Bieterverfahren nicht der Durchschnitt. Es gewinnt der Investor mit der optimistischsten Schätzung. Der Zuschlag ist also kein Beweis für ein gutes Geschäft, sondern ein statistisches Signal dafür, dass Sie den Wert wahrscheinlich überschätzt haben.',
          'Die Ökonomie nennt das den Winner\'s Curse – den Fluch des Gewinners. Entdeckt wurde er bei Auktionen von Ölbohrrechten in den 1970er-Jahren: Die Gewinner der Auktionen machten systematisch Verluste, obwohl (oder gerade weil) sie sich gegen Dutzende Mitbieter durchgesetzt hatten. Deutsche Bieterverfahren für Wohn- und Gewerbeimmobilien folgen exakt derselben Mechanik.',
        ],
      },
      {
        heading: 'Warum Bieterverfahren den Fluch verstärken',
        paragraphs: [
          'Strukturierte Verkaufsprozesse sind darauf optimiert, den Winner\'s Curse zu maximieren: künstliche Fristen erzeugen Zeitdruck, „weitere interessierte Parteien" erzeugen Knappheitssignale, und Nachbesserungsrunden laden dazu ein, das eigene Limit „nur dieses eine Mal" zu überschreiten. Jedes dieser Elemente ist aus Verkäufersicht rational – und aus Käufersicht ein kognitiver Sprengsatz. Wer im dritten Bieterdurchgang sein Limit anhebt, bietet nicht mehr auf die Immobilie. Er bietet auf den Sieg.',
          'Dazu kommt die Verlustaversion: Wer drei Monate Due Diligence, Finanzierungsgespräche und Gremienarbeit investiert hat, empfindet den Ausstieg als Verlust – und zahlt lieber 8 % zu viel, als „umsonst" gearbeitet zu haben. Sunk Costs treffen Auktionsdynamik. Das Ergebnis steht in keiner Renditekalkulation, aber in vielen Grundbüchern.',
        ],
      },
      {
        heading: 'Der einzige saubere Ausweg',
        paragraphs: [
          'Gegen den Winner\'s Curse hilft keine bessere Intuition, sondern nur Disziplin vor dem Verfahren: ein hartes, schriftlich fixiertes Limit, das aus Ist-Miete, realistischem Aufwand und der eigenen Zielrendite rückwärts gerechnet ist – und das im Verfahren unter keinen Umständen angefasst wird. Wer sein Limit erst im Bieterprozess festlegt, hat keines.',
          'Der strukturelle Ausweg ist, Verfahren mit konstruiertem Wettbewerb ganz zu meiden: Im Off-Market-Geschäft verhandeln ein Verkäufer und ein benannter Käufer diskret über einen Preis, der für beide rechnet – ohne Auktionsdramaturgie, ohne Knappheitstheater. Es ist kein Zufall, dass professionelle Bestandshalter einen wachsenden Teil ihrer Ankäufe genau so abwickeln. Der beste Schutz vor dem Fluch des Gewinners ist ein Spiel, in dem es nichts zu „gewinnen" gibt – sondern nur etwas zu kaufen.',
        ],
      },
    ],
  },
]

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug)
}

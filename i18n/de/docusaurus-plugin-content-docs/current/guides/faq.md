# FAQs

## Warum sind die vorgeschlagenen Wörter in Englisch?

AiShort wurde geschaffen, um die Nutzung von ChatGPT durch nicht-englischsprachige Benutzer zu erleichtern. Allerdings sind alle vorgeschlagenen Wörter in Englisch. Dies liegt daran, dass ChatGPT ein besseres Verständnis von Englisch im Vergleich zu anderen Sprachen hat. Selbst MOSS, das erste chinesische Dialog-Sprachmodell im großen Maßstab, gibt zu, dass seine englischen Antworten überlegen sind. Daher wird empfohlen, englische Vorschläge zu verwenden. (MOSS ist nicht mehr verfügbar)

Obwohl die Verwendung von nicht-englischen Vorschlägen akzeptable Ergebnisse liefern kann, können die Ergebnisse erheblich variieren, wenn Sie dieselben nicht-englischen Eingaben erneut verwenden. Da ChatGPT das Verständnis nicht-englischer Eingaben jedes Mal unterschiedlich ist, empfiehlt es sich, englische Eingaben für produktivitätsorientierte Anfragen zu verwenden, um das gewünschte Ergebnis zu erzielen. Darüber hinaus werden die Antworten, die durch englische Eingaben generiert werden, wahrscheinlich auf Englisch sein. Sie können die Antwortensprache auf Chinesisch festlegen, indem Sie am Ende der Anfrage "auf Chinesisch antworten" hinzufügen. Wenn Ihre Muttersprache eine andere ist, ersetzen Sie bitte "Chinesisch" durch Ihre eigene Muttersprache.

## Muss ich die Anfrage jedes Mal eingeben?

In der API können Sie die Anfrage als "Systemanfrage" festlegen, so dass Sie die Anfrage nicht jedes Mal eingeben müssen. ChatGPT wird den Anweisungen entsprechend der Systemanfrage folgen.

In der Webversion von ChatGPT können Sie, wenn Sie die Hauptanfrage nicht gewechselt haben, einfach den nachfolgenden Antwortinhalt in Anführungszeichen setzen, so dass Sie die Anfrage nicht jedes Mal eingeben müssen. Wenn die generierte Antwort nicht mit den Anforderungen der Anfrage übereinstimmt, bedeutet dies, dass ChatGPT die Anfrage vergessen hat, und in solchen Fällen müssen Sie die Anfrage erneut eingeben, um sie neu auszurichten. Darüber hinaus ist jeder Konversationslink eindeutig, und Sie können häufig verwendete Konversationen als Lesezeichen speichern, um sie in Zukunft zu verwenden.

## Verzögerung bei der Eingabesuche

Die Suchfunktion basiert auf der Vorführung von Docusaurus und hat ein Problem mit dem Eingabemethodenfokus auf der PC-Seite. Nachdem ich das Problem bei Docusaurus gemeldet habe, haben sie erwähnt, dass sie versuchen werden, es zu beheben, aber bisher bleibt das Problem ungelöst mit dem Kommentar: "FWIW, Sie sollten sowieso kein Chinesisch verwenden, da die Vorführung nicht lokalisiert ist." Deshalb habe ich die Suchkomponente in zwei Typen eingeteilt: Mobil und PC. Die Suchlogik für Mobilgeräte bleibt unverändert, während für das Surfen mit einem Bildschirm mit einer Breitenschwelle über 768px habe ich die "Debounce"-Funktion eingeführt, um das Problem mit der Eingabemethode zu beheben. Dadurch ergeben sich jedoch zwei Probleme auf der PC-Seite: Nicht-englische Eingaben müssen innerhalb von 800 Millisekunden abgeschlossen sein, und die Aktualisierung der PC-Suche erfolgt mit einer Verzögerung von 800 Millisekunden anstelle von sofort. Wenn Sie eine bessere Lösung haben, geben Sie bitte Feedback.

## Ausgabe von falschen Informationen

Obwohl ChatGPT sehr leistungsfähig ist, ist es nicht unfehlbar. Manchmal kann es falsche Informationen ausgeben. Zum Beispiel musste ich Hunderte von Informationen in AiShort eingeben und bat ChatGPT, die Daten in einem bestimmten Format umzuwandeln. Während des Konvertierungsprozesses bemerkte ich jedoch, dass ChatGPT einige Informationen ungenau geschrieben hatte. Zum Beispiel war ein Label im Text "Filmkritiker", aber ChatGPT änderte es in "Kinokritiker". Obwohl dies im Text selbst keine Auswirkungen haben mag, würde es einen Fehler verursachen, wenn es im Code verwendet wird. Daher ist es beim Einsatz von ChatGPT wichtig, die Ausgabe zu überprüfen.

## Sind die Aufforderungen unwirksam?

Wenn Sie mit der Aufgabe der Zusammenfassung beschäftigt sind, können Sie die GPT nutzen, um Ihre ursprünglichen Antworten zu verfeinern und zu verbessern und so die Präzision Ihrer Antworten zu erhöhen. Darüber hinaus sind die Aufforderungen nicht nur für die Arbeitsproduktion von Vorteil, sondern dienen auch als Katalysator für die intellektuelle Anregung. Sie helfen Ihnen, Ihren Blickwinkel zu erweitern, Fragen aus verschiedenen Blickwinkeln zu betrachten und potenzielle Fehler anzusprechen, die häufig während des Denkprozesses auftreten.

Alle von AI Short verwendeten Prompts stammen aus dem Internet und werden in unserem Prompt-Repository regelmäßig aktualisiert. Obwohl jeder Prompt ausgiebig getestet wird, kann seine Wirksamkeit je nach den individuellen Bedürfnissen des Nutzers variieren. Sollten Sie auf Ungenauigkeiten stoßen, innovative Ideen haben oder über nützliche Prompts stolpern, können Sie uns dies über [Feedback](/feedback) mitteilen oder Ihre Entdeckungen mit unserer Community teilen.

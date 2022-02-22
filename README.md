<h1>Inlämningsuppgift 3: TodoMVC</h1>
<p>Skriv er egen version av den kända exempelappen TodoMVC med HTML, CSS och JavaScript.</p>

<h2>Funktionalitet</h2>
<p>Er app ska ha samma funktionalitet som exemplet, inklusive följande:</p>
<ul>
    <li>Lägga till anteckningar.</li>
    <li>Ta bort anteckningar.</li>
    <li>Markera anteckningar som färdiga.</li>
    <li>Se hur många ofärdiga anteckningar som återstår ("X items left").</li>
    <li>Markera alla anteckningar som färdiga/ofärdiga (nedåtpilen till vänster om textfältet).</li>
    <li>Ta bort alla färdiga anteckningar ("Clear completed").</li>
    <li>Visa upp antingen alla anteckningar ("All"), alla ofärdigaanteckningar ("Active") eller alla färdiga anteckningar ("Completed").</li>
</ul>
<p>Ni ska dock inte implementera följande funktionalitet:</p>
<ul>
    <li>URL-hantering (att knapparna "All", "Active" och "Completed" ändrar på URL:en).</li>
    <li>Att anteckningar kan redigeras genom att dubbelklicka på dem.</li>
    <li>Automatiskt spara anteckningarna så att de finns kvar även när sidan laddas om.</li>
</ul>
<h2>Utseende</h2>
<p>Utseendet ska också vara samma som exemplet, förutom följande:</p>
<ul>
    <li>Er design ska, till skillnad från exemplet, vara responsiv. Ni bedömer själva hur detta bäst görs.</li>
    <li>Vänsterkolumnen (som beskriver ramverket Backbone.js) ska inte vara med.
    Istället för ikonerna som exemplet använder till vissa knappar kan ni istället använda följande:</li>
    <li>För checkrutan till vänster om varje anteckning räcker det med en vanlig <input type="checkbox">, med större bredd/höjd än standard.
        <ul>
        <li>För krysset som används för att ta bort enstaka anteckningar räcker det med följande emoji: ❌</li>
        <li>För nedåtpilen till vänster om textfältet räcker det med följande emoji: 🔽</li>
        </ul>
    </li>
    <li>Ni behöver inte återskapa "pappershög"-effekten under listan över anteckningar. Skuggan runt huvudinnehållet ska dock finnas med.</li>
</ul>
<p>Till skillnad från tidigare inlämningsuppgifter behöver ni här återskapa samma design som i exemplet, inklusive typsnitt, marginaler, textstorlekar, etc. Det är dock tillåtet att välja andra färger och/eller bakgrundsgrafik, om ni vill göra den till "er egen".<o>

<h2>Tester</h2>
<p>Ni ska skriva följande tre GUI-tester med Selenium:</p>

<ol>
    <li>Lägg till en anteckning och bekräfta att den visas på sidan.</li>
    <li>Lägg till en anteckning och bekräfta att sidan visar "1 item left". Kryssa sedan i anteckningen och bekräfta att sidan visar "0 items left".</li>
    <li>Lägg till 3 anteckningar, kryssa i en av dem och bekräfta att sidan visar "2 items left".</li>
</ol>
<h2>Övrigt</h2>
<ul>
    <li>Den kod som ni lämnar in ska vara er egen, men det är OK att inspektera källkoden till exemplet och vid behov låna enstaka värden eller enstaka kodrader därifrån. (Detta behöver ni exempelvis göra för att välja rätt färger och textstorlekar.)</li>
    <li>Denna uppgift har ingenting med designmönstret MVC (Model-View-Controller) att göra, trots namnet TodoMVC. Ni behöver inte och bör inte implementera detta designmönster i er lösning. (Med andra ord: glömt helt bort begreppet MVC i det här sammanhanget.)</li>
    <li>Skriv all er HTML, CSS och JavaScript själva, utan ramverk och bibliotek.</li>
    <li>I övrigt gäller samma generella riktlinjer som tidigare kring exempelvis kodformatering och semantisk HTML.</li>
</ul>
<h2>Samarbete</h2>
<p>Denna inlämningsuppgift ska utföras och lämnas in i par.</p>

<h2>Betygsättning</h2>
<p>Möjliga betyg: G och IG.</p>

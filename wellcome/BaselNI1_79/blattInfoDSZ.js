/* Blattinformationen zu Doppelseiten
 * Hier muss etwas gerechnet werden: Jede Zeile entspricht einer Doppelseite, d.h. bei Zeile
 * <case "3": lagenNr=""; ...> befinden wir uns auf der dritten Doppelseite gerechnet von der ersten dargestellten Bild
 * Beispiel:
 * 		case "9": lagenNr="1/2"; lagenSymb="L5_L6"; lagenName="Quint./Sext."; konkordanz="12r–96v"; aktBuch = 1; imgDescr = false; break;
 * resultiert in:
 * 
 * Lagenbeschreibung: "1/2. Lage, Quint./Sext."
*/

function blattInfoDS(blatt) {
	switch(blatt) {
		case "0": lagenNr=""; lagenSymb="blind"; lagenName=""; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "1": lagenNr=""; lagenSymb="blind"; lagenName=""; konkordanz=""; aktBuch = 0; imgDescr = false; break;
		return;
	}
}
// Categorie del Bingo: le usano sia bingo.html (il DJ) sia cartella.html (la cartella sul telefono dei giocatori).
// audio: come suona la canzone. lv: livello/lettera (1 = A ... 5 = E). colonne: solo con il mazzo colonne sonore.
window.HP_CATS = [
  { id: 'mezzo', lv: 1, nome: 'Mezzo decennio', regola: 'Scrivete decennio e metà: per esempio "Anni 90 – prima metà" (1990-94) o "seconda metà" (1995-99).', audio: 'normale' },
  { id: 'chi', lv: 1, nome: 'Chi canta', regola: 'Solista uomo, solista donna, gruppo con voce maschile, gruppo con voce femminile, oppure misto. Se è strumentale: Salta carta.', audio: 'normale' },
  { id: 'prima', lv: 1, nome: 'Prima o dopo', regola: 'Questa canzone è uscita prima o dopo del <span class="ref">{ref}</span>? Stesso anno: valgono entrambe.', audio: 'normale' },
  { id: 'intro', lv: 2, nome: 'Solo intro', regola: 'Solo 5 secondi! Scrivete l\'artista oppure il titolo (ne basta uno).', audio: 'intro' },
  { id: 'titolo', lv: 2, nome: 'Il titolo', regola: 'Scrivete il titolo della canzone.', audio: 'normale' },
  { id: 'film', lv: 2, nome: 'Titolo del film', regola: 'Scrivete il titolo del film, serie o cartone da cui viene la canzone.', audio: 'normale', colonne: true },
  { id: 'accelerata', lv: 3, nome: 'Accelerata', regola: 'La canzone va più veloce e più acuta. Scrivete l\'artista oppure il titolo.', audio: 'veloce' },
  { id: 'combo', lv: 3, nome: 'La Combo', regola: 'Scrivete artista E titolo: valgono solo tutti e due.', audio: 'normale' },
  { id: 'piu1', lv: 4, nome: '±1 anno', regola: 'Scrivete l\'anno: vale anche quello prima o dopo.', audio: 'normale' },
  { id: 'asta', lv: 4, nome: 'Asta al ribasso', regola: 'Scrivete un intervallo di anni: vince il più stretto che contiene l\'anno giusto.', audio: 'normale' },
  { id: 'vicino', lv: 5, nome: 'Il più vicino', regola: 'Scrivete l\'anno esatto: segna solo chi si avvicina di più. Se i più vicini sono a pari distanza, nessuno segna. Anno esatto = FURTO (vale sempre, anche in due)!', audio: 'normale' },
];

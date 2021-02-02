
export interface Patient {
  id: string,
  vorname: string;
  name: string;
  geburtsdatum?: Date;
  telefon: number;
  email: string;
  adresse: Adresse;
}

export interface Adresse {
  strasse: string;
  hausnummer: number;
  plz: number;
  ort: string;
}

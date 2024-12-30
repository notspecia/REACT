Style utilizzo di tailwind

Service API (src/services/api.ts):

Contiene la funzione per richiamare i dati dell'attrezzatura dall'endpoint /api/equipment.
Definisce l'interfaccia Equipment.
Componente EquipmentItem (src/components/EquipmentItem.tsx):

Rappresenta un singolo elemento dell'attrezzatura.
Include immagine, nome, claim, prezzo e icona.
Componente EquipmentList (src/components/EquipmentList.tsx):

Rende la lista degli elementi utilizzando il componente EquipmentItem.
Componente principale App (src/App.tsx):

Gestisce il caricamento dei dati e visualizza il componente EquipmentList.
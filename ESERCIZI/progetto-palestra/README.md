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

Gestione del login e registrazione
Obiettivo: Implementare il sistema di autenticazione per consentire agli utenti di registrarsi e accedere.
Passi:
Creare i form di login e registrazione:

Pagina per la registrazione: un form con username e password.
Pagina per il login: un form simile a quello di registrazione.



# in classe spiegazione e discussione
quando faccio il login ricevo un token JWT che conferma che sono io, da li poi possiamo prendere le prenotazioni di quelli strumenti che l'utente in questione ha prenotato

da poi inserire nell'header per riuscire ad avere l'autenuìticazione ed effettuare le chiamate che richiedono l'accesso all'api come GET API/EQUIPMENTS-BOOKING

# COME FUNZIONA L'AUTENTICAZIONE DEGLI UTENTI
il centro principale è:

## 1. OBIETTIVO
- quello di proteggere le risorse e il riconoscimento di un utente: quindi devo proteggere le risorse a quelli che non sono autenticati non permettere ad essi di visualizzarle.

## 2. OBIETTIVO
individuare l'utente: devo riconoscere e identificare l'utente:
- il modo + utilizzato è il modo di SESSIONLESS/STATELESS:
    - il server non sa se il client è autenticato, ma il client manda un informazione che il server riceve  (come TOKEN JWT)
    - TOKEN JWT: JSON(è basato su JSON), WEB(esclusivo per il web), TOKEN(per l'autenticazione).
    esso viene creato lato server e contiene dati atti a riconoscere un utente, quando il server crea il JWT questo token viene firmato con una chiave segreta che conosce solo il server (rendendolo di fatto molto più sicuro nonostante il token sia pubblico è comunque DECODIFICABILE grazie alla firma di una chiave segreta), il server pero dopo non salva il token ma viene salvato dal client

- un altro modo di approcio + tradizionale è quello STATEFULL/SESSION BASED: kie dove viene salvato il token nel DB oppure in un COOKIE

## passaggi del login e autenticazione per effettuare chiamate API tramite TOKEN JWT
- utente inserisce dati (username password)
- vengono inviati al DB, se corrispondono restituisce il token JWT di quell'utente
- una volta ricevuto al client, permette di effettuare tutte le chiamate API (GET booked-equipments, POST booking-equipment)
- il token JWT viene conservato all'interno del nostro LOCAL STORAGE
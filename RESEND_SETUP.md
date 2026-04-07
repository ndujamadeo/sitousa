# Setup Resend per Email

Il modulo di contatto sulla pagina prodotti usa Resend per inviare le email a `info@filieramadeo.it`.

## Setup Locale (Sviluppo)

1. Vai su https://resend.com e crea un account gratuito
2. Vai su https://resend.com/api-keys e crea una nuova API key
3. Copia la tua API key
4. Apri il file `.env.local` e sostituisci `your_api_key_here` con la tua API key:
   ```
   RESEND_API_KEY=re_your_actual_api_key_here
   ```
5. Riavvia il server di sviluppo

## Setup Vercel (Produzione)

1. Vai sul tuo progetto Vercel: https://vercel.com/dashboard
2. Vai su Settings → Environment Variables
3. Aggiungi una nuova variabile:
   - **Name**: `RESEND_API_KEY`
   - **Value**: La tua API key di Resend (inizia con `re_`)
   - **Environment**: Production, Preview, Development
4. Fai un nuovo deploy per applicare le modifiche

## Nota Importante

⚠️ **Email "From" Address**: Attualmente l'email viene inviata da `onboarding@resend.dev` (indirizzo di test di Resend).

Per usare un tuo dominio personalizzato (es: `noreply@filieramadeo.it`):
1. Vai su https://resend.com/domains
2. Aggiungi il tuo dominio
3. Configura i record DNS come indicato
4. Modifica il file `app/api/contact/route.ts` cambiando:
   ```ts
   from: 'NdujaLovers <noreply@filieramadeo.it>',
   ```

## Test

Una volta configurato, testa il modulo:
1. Vai su http://localhost:3000/products
2. Scrolla fino al modulo "Prenota i Tuoi Prodotti"
3. Compila e invia
4. Controlla la casella email info@filieramadeo.it

## Piano Gratuito Resend

Il piano gratuito include:
- 100 email/giorno
- 3,000 email/mese
- Perfetto per iniziare

Per volumi maggiori, considera l'upgrade: https://resend.com/pricing

import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import { Resend } from 'resend';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route: Consultation and contact bookings
  app.post('/api/booking', async (req, res) => {
    try {
      const data = req.body;
      const isContactForm = data.serviceId === 'kontaktforma' || !data.date;

      const subject = isContactForm
        ? `Jauna ziņa no kontaktformas (${data.fullName || 'Nav norādīts'})`
        : `Jauns konsultācijas pieteikums (${data.fullName || 'Nav norādīts'})`;

      const htmlContent = isContactForm
        ? `
          <h2>Jauna ziņa no kontaktformas</h2>
          <p><b>Vārds, uzvārds:</b> ${data.fullName || 'Nav norādīts'}</p>
          <p><b>E-pasts:</b> ${data.email || 'Nav norādīts'}</p>
          <p><b>Tālrunis:</b> ${data.phone || 'Nav norādīts'}</p>
          <p><b>Ziņa / Jautājums:</b></p>
          <div style="background-color: #f4f4f4; padding: 12px; border-radius: 6px; margin-top: 8px;">
            ${data.message || 'Tukša ziņa'}
          </div>
        `
        : `
          <h2>Jauns konsultācijas pieteikums</h2>
          <p><b>Vārds, uzvārds:</b> ${data.fullName || 'Nav norādīts'}</p>
          <p><b>E-pasts:</b> ${data.email || 'Nav norādīts'}</p>
          <p><b>Tālrunis:</b> ${data.phone || 'Nav norādīts'}</p>
          <p><b>Pakalpojums:</b> ${data.serviceName || data.serviceId || 'Nav norādīts'}</p>
          <p><b>Formāts:</b> ${data.format || 'Nav norādīts'}</p>
          <p><b>Datums:</b> ${data.date || 'Nav norādīts'}</p>
          <p><b>Laiks:</b> ${data.timeSlot || 'Nav norādīts'}</p>
          <p><b>Komentārs:</b> ${data.message || 'Nav norādīts'}</p>
        `;

      const apiKey = process.env.RESEND_API_KEY;
      if (!apiKey) {
        console.log('[Dev Booking API] RESEND_API_KEY not configured. Mocking successful submission:', {
          subject,
          fullName: data.fullName,
          email: data.email,
        });
        return res.json({ success: true, mocked: true });
      }

      const resend = new Resend(apiKey);
      await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'katrina.rozenbaha@gmail.com',
        replyTo: data.email,
        subject: subject,
        html: htmlContent,
      });

      return res.json({ success: true });
    } catch (error: any) {
      console.error('Resend Kļūda:', error);
      return res.status(500).json({
        error: error?.message || 'Email sending failed',
      });
    }
  });

  // Serve with Vite in development or static assets in production
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        host: '0.0.0.0',
        port: PORT,
      },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});

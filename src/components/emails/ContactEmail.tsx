import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text
} from '@react-email/components';

export interface ContactEmailProps {
  name: string;
  email: string;
  phone: string;
  company?: string;
  source: string;
  message: string;
}

export const ContactEmail = ({
  name,
  email,
  phone,
  company,
  source,
  message
}: ContactEmailProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <Html>
      <Head />
      <Preview>Mensaje de {name} - Sinergia Studio Website</Preview>
      <Body style={styles.main}>
        <Container style={styles.container}>
          <Section style={styles.logoSection}>
            <Img
              src={`${process.env.NEXT_PUBLIC_LOGO_URL}`}
              width="120"
              height="40"
              alt="Logo"
              style={styles.logo}
            />
          </Section>

          <Section style={styles.heroSection}>
            <Text style={styles.heroTitle}>📬 Nuevo Mensaje</Text>
            <Text style={styles.heroSubtitle}>De: {name}</Text>
          </Section>

          <Section style={styles.contentSection}>
            <Section style={styles.infoBox}>
              <Text style={styles.label}>Información del Contacto</Text>
              <Text style={styles.field}>
                <strong>Email:</strong>{' '}
                <Link href={`mailto:${email}`} style={styles.link}>
                  {email}
                </Link>
              </Text>
              <Text style={styles.field}>
                <strong>Teléfono:</strong>{' '}
                <Link href={`tel:${phone}`} style={styles.link}>
                  {phone}
                </Link>
              </Text>
              {company && (
                <Text style={styles.field}>
                  <strong>Empresa:</strong> {company}
                </Text>
              )}
              <Text style={styles.field}>
                <strong>Fuente:</strong> {source}
              </Text>
            </Section>

            <Section style={styles.messageBox}>
              <Text style={styles.label}>Mensaje</Text>
              <Text style={styles.message}>{message}</Text>
            </Section>

            <Button style={styles.button} href={`mailto:${email}`}>
              Responder Email
            </Button>
          </Section>

          <Hr style={styles.divider} />

          <Section style={styles.footer}>
            <Text style={styles.footerText}>
              © {currentYear} Sinergia Studio · Todos los derechos reservados
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

const styles = {
  main: {
    backgroundColor: '#f6f9fc',
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
  },
  container: {
    margin: '0 auto',
    padding: '20px 0 48px'
  },
  logoSection: {
    padding: '20px 30px'
  },
  logo: {
    margin: '0 auto',
    borderRadius: '6px'
  },
  heroSection: {
    padding: '32px 48px',
    textAlign: 'center' as const,
    backgroundColor: '#ffffff',
    borderRadius: '8px 8px 0 0'
  },
  heroTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#1a1a1a',
    margin: '0 0 12px'
  },
  heroSubtitle: {
    fontSize: '16px',
    color: '#666666',
    margin: '0'
  },
  contentSection: {
    padding: '24px 48px 32px',
    backgroundColor: '#ffffff',
    borderRadius: '0 0 8px 8px'
  },
  infoBox: {
    marginBottom: '24px',
    padding: '24px',
    backgroundColor: '#f8f9fa',
    borderRadius: '6px'
  },
  messageBox: {
    marginBottom: '24px',
    padding: '24px',
    backgroundColor: '#f8f9fa',
    borderRadius: '6px'
  },
  label: {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#666666',
    textTransform: 'uppercase' as const,
    letterSpacing: '1px',
    marginBottom: '12px'
  },
  field: {
    fontSize: '14px',
    color: '#1a1a1a',
    margin: '0 0 8px',
    lineHeight: '1.6'
  },
  message: {
    fontSize: '14px',
    color: '#1a1a1a',
    margin: '0',
    lineHeight: '1.6',
    whiteSpace: 'pre-wrap' as const
  },
  link: {
    color: '#0066cc',
    textDecoration: 'none'
  },
  button: {
    backgroundColor: '#0066cc',
    borderRadius: '6px',
    color: '#fff',
    fontSize: '14px',
    fontWeight: 'bold',
    textDecoration: 'none',
    textAlign: 'center' as const,
    display: 'inline-block',
    padding: '12px 24px',
    margin: '16px 0 0'
  },
  divider: {
    borderColor: '#e6e6e6',
    margin: '32px 0'
  },
  footer: {
    textAlign: 'center' as const
  },
  footerText: {
    fontSize: '12px',
    color: '#666666'
  }
};

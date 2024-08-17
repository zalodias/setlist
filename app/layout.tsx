import { Container } from '@/app/components/container';
import { PropsWithChildren } from 'react';
import './globals.css';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Container>{children}</Container>
      </body>
    </html>
  );
}

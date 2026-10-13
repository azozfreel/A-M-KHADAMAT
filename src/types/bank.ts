export interface BankAccount {
  id: string;
  bankName: string;
  accountHolder: string;
  rib: string;
  swift?: string;
  currency: 'MAD' | 'USD' | 'EUR';
  accountType?: string;
  notes?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt?: string;
}

export type LegalDocType = 'terms' | 'privacy' | 'copyright' | 'legal-notice' | 'cookies';

export type PageSection = 'home' | 'about' | 'disciplines' | 'projects' | 'banks' | 'contact';

export type ActivePage = 'home' | 'main' | 'about' | 'disciplines' | 'projects' | 'banks' | 'contact' | 'admin' | LegalDocType;


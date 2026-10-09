import { BankAccount } from '../types/bank';

const STORAGE_KEY = 'ayoub_bank_accounts_v2';
const ADMIN_PASSWORD_KEY = 'ayoub_admin_passcode_v2';
const DEFAULT_PASSWORD = 'ayoub2026';

const INITIAL_BANKS: BankAccount[] = [
  {
    id: 'bank-cih-1',
    bankName: 'CIH Bank (بنك القرض العقاري والسياحي)',
    accountHolder: 'أيوب الميسوري (Ayoub El Maissouri)',
    rib: '230 780 45678901234567 89',
    swift: 'CIHBMAMC',
    currency: 'MAD',
    accountType: 'حساب جاري رقمي',
    notes: 'متاح للتحويلات البنكية المباشرة والفورية داخل المغرب. يرجى إرسال وصل التحويل بعد الإيداع.',
    isActive: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'bank-attijari-2',
    bankName: 'Attijariwafa Bank (التجاري وفا بنك)',
    accountHolder: 'أيوب الميسوري (Ayoub El Maissouri)',
    rib: '007 780 00012345678901 45',
    swift: 'BCMAMAMC',
    currency: 'MAD',
    accountType: 'حساب المعاملات والأعمال',
    notes: 'متاح لكافة التحويلات الوطنية السريعة عبر تطبيق البنك أو الوكالة.',
    isActive: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'bank-boa-3',
    bankName: 'Bank of Africa - BMCE',
    accountHolder: 'أيوب الميسوري (Ayoub El Maissouri)',
    rib: '011 780 00098765432109 23',
    swift: 'BMCEMAMC',
    currency: 'EUR',
    accountType: 'حساب التحويلات الدولية والعملات',
    notes: 'مخصص للتحويلات الدولية باليورو أو الدرهم مع كود السويفت.',
    isActive: true,
    createdAt: new Date().toISOString(),
  },
];

export const bankService = {
  getAccounts(): BankAccount[] {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (!data) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_BANKS));
        return INITIAL_BANKS;
      }
      return JSON.parse(data);
    } catch {
      return INITIAL_BANKS;
    }
  },

  getActiveAccounts(): BankAccount[] {
    return this.getAccounts().filter((acc) => acc.isActive);
  },

  saveAccounts(accounts: BankAccount[]): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(accounts));
    } catch (e) {
      console.error('Failed to save accounts to localStorage', e);
    }
  },

  addAccount(account: Omit<BankAccount, 'id' | 'createdAt'>): BankAccount {
    const accounts = this.getAccounts();
    const newAccount: BankAccount = {
      ...account,
      id: `bank-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      createdAt: new Date().toISOString(),
    };
    accounts.unshift(newAccount);
    this.saveAccounts(accounts);
    return newAccount;
  },

  updateAccount(id: string, updatedFields: Partial<BankAccount>): BankAccount | null {
    const accounts = this.getAccounts();
    const index = accounts.findIndex((a) => a.id === id);
    if (index === -1) return null;

    accounts[index] = {
      ...accounts[index],
      ...updatedFields,
      updatedAt: new Date().toISOString(),
    };
    this.saveAccounts(accounts);
    return accounts[index];
  },

  deleteAccount(id: string): boolean {
    const accounts = this.getAccounts();
    const filtered = accounts.filter((a) => a.id !== id);
    if (filtered.length === accounts.length) return false;
    this.saveAccounts(filtered);
    return true;
  },

  toggleActive(id: string): boolean {
    const accounts = this.getAccounts();
    const target = accounts.find((a) => a.id === id);
    if (!target) return false;
    target.isActive = !target.isActive;
    target.updatedAt = new Date().toISOString();
    this.saveAccounts(accounts);
    return true;
  },

  resetDefaults(): BankAccount[] {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_BANKS));
    return INITIAL_BANKS;
  },

  // Admin Auth functions
  getAdminPassword(): string {
    return localStorage.getItem(ADMIN_PASSWORD_KEY) || DEFAULT_PASSWORD;
  },

  verifyPassword(input: string): boolean {
    const current = this.getAdminPassword();
    return input.trim() === current.trim();
  },

  changePassword(oldPass: string, newPass: string): boolean {
    if (!this.verifyPassword(oldPass)) return false;
    if (!newPass || newPass.trim().length < 4) return false;
    localStorage.setItem(ADMIN_PASSWORD_KEY, newPass.trim());
    return true;
  },
};

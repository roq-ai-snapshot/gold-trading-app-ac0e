interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Owner', 'Administrator', 'Trader', 'Analyst', 'Customer'],
  tenantName: 'Company',
  applicationName: 'gold trading application ',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read user information',
    'Read company information',
    'Read gold trade information',
    'Read gold inventory information',
  ],
  ownerAbilities: ['Manage user', 'Manage company', 'Manage gold trade', 'Manage gold inventory'],
  getQuoteUrl: 'https://roq-wizzard-git-qa03-roqtech.vercel.app/proposal/91f2982a-119f-4d2c-8378-8c9801e95865',
};

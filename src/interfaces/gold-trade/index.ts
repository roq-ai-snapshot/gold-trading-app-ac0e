import { UserInterface } from 'interfaces/user';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface GoldTradeInterface {
  id?: string;
  user_id: string;
  company_id: string;
  gold_type?: string;
  quantity?: number;
  trade_date?: any;
  trade_price?: number;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  company?: CompanyInterface;
  _count?: {};
}

export interface GoldTradeGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  company_id?: string;
  gold_type?: string;
}

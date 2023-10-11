import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface GoldInventoryInterface {
  id?: string;
  company_id: string;
  gold_type?: string;
  quantity?: number;
  acquisition_date?: any;
  acquisition_price?: number;
  created_at?: any;
  updated_at?: any;

  company?: CompanyInterface;
  _count?: {};
}

export interface GoldInventoryGetQueryInterface extends GetQueryInterface {
  id?: string;
  company_id?: string;
  gold_type?: string;
}

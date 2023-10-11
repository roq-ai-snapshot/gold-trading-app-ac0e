import { GoldInventoryInterface } from 'interfaces/gold-inventory';
import { GoldTradeInterface } from 'interfaces/gold-trade';
import { OwnerInterface } from 'interfaces/owner';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CompanyInterface {
  id?: string;
  description?: string;
  established_at?: any;
  country?: string;
  city?: string;
  address?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  gold_inventory?: GoldInventoryInterface[];
  gold_trade?: GoldTradeInterface[];
  owner?: OwnerInterface[];
  user?: UserInterface;
  _count?: {
    gold_inventory?: number;
    gold_trade?: number;
    owner?: number;
  };
}

export interface CompanyGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  country?: string;
  city?: string;
  address?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}

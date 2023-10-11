import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface MarketAnalysisInterface {
  id?: string;
  analyst_id: string;
  gold_type?: string;
  analysis_date?: any;
  predicted_price?: number;
  actual_price?: number;
  accuracy?: number;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface MarketAnalysisGetQueryInterface extends GetQueryInterface {
  id?: string;
  analyst_id?: string;
  gold_type?: string;
}

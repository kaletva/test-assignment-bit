export interface ITransaction {
    id: string;
    provider: string;
    amount: number;
    currency: string;
    meta: string | null;
    status: 'SUCCEDED' | 'PENDING'; 
    type: 'WRITE_OFF' | 'REPLENISH';
    plan_id: string | null;
    user_id: string;
    referral_id: string | null;
    created_at: string;
    external_id: string | null;
  }
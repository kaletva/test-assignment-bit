export interface IUsersSearchParams {
  page: number;
  search: string;
  orderBy: "tokens:asc" | "tokens:desc" | null;
}

export interface ISubscriptionPlan {
  id: string;
  type: string;
  price: number;
  currency: string;
  tokens: number;
}

export interface ISubscription {
  id: string;
  plan_id: string;
  user_id: string;
  tokens: number;
  additional_tokens: number;
  created_at: string;
  plan: ISubscriptionPlan;
}

export interface IUser {
  id: string;
  email: string;
  tg_id: string | null;
  name: string;
  password: string | null;
  avatar: string | null;
  created_at: string;
  role: string;
  subscription: ISubscription;
}

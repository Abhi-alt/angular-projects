export interface AppInitInterface {
  loading: boolean;
}

export interface AppState {
  app: AppInitInterface;
  user: UserDetailsInterface;
}

export interface UserDetailsInterface {
  email: string | null;
  user_id: string | null;
  access_token: string | null;
}

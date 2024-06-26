"use client";

import { store } from "./store";
import { Provider } from "react-redux";
import NextTopLoader from "nextjs-toploader";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      {children}
      <NextTopLoader height={77} color="#EB334A" />
    </Provider>
  );
}

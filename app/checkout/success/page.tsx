"use client";

import { Suspense, useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";

const APP_SUCCESS_URL = "mamanote://subscribe/success";

function appDeeplink(transactionId: string): string {
  return transactionId
    ? `${APP_SUCCESS_URL}?transactionId=${encodeURIComponent(transactionId)}`
    : APP_SUCCESS_URL;
}

function SuccessInner() {
  const searchParams = useSearchParams();
  const transactionId = searchParams.get("transactionId")?.trim() ?? "";
  const deeplink = useMemo(() => appDeeplink(transactionId), [transactionId]);

  useEffect(() => {
    window.location.replace(deeplink);
  }, [deeplink]);

  return (
    <main>
      <div className="card">
        <div className="logo" aria-hidden>
          ✦
        </div>
        <h1>MamaNote</h1>
        <p>Payment successful</p>
        <p style={{ marginTop: 8 }}>Please return to the app.</p>
      </div>
    </main>
  );
}

export default function CheckoutSuccessPage() {
  return (
    <Suspense
      fallback={
        <main>
          <div className="card">
            <h1>MamaNote</h1>
            <p>Payment successful</p>
            <div className="spinner" aria-label="Loading" />
          </div>
        </main>
      }
    >
      <SuccessInner />
    </Suspense>
  );
}

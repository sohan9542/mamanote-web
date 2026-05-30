"use client";

import { Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";

const APP_SUCCESS_URL = "mamanote://subscribe/success";

function SuccessInner() {
  const searchParams = useSearchParams();
  const transactionId = searchParams.get("transactionId")?.trim() ?? "";

  useEffect(() => {
    const deeplink = transactionId
      ? `${APP_SUCCESS_URL}?transactionId=${encodeURIComponent(transactionId)}`
      : APP_SUCCESS_URL;
    window.location.replace(deeplink);
  }, [transactionId]);

  return (
    <main>
      <div className="card">
        <div className="logo" aria-hidden>
          ✦
        </div>
        <h1>MamaNote</h1>
        <p>Payment successful</p>
        <p style={{ marginTop: 8 }}>Returning to the app…</p>
        <div className="spinner" aria-label="Redirecting" />
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
            <p>Returning to the app…</p>
            <div className="spinner" aria-label="Loading" />
          </div>
        </main>
      }
    >
      <SuccessInner />
    </Suspense>
  );
}

"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { initializePaddle, type Environments } from "@paddle/paddle-js";

function successUrl(transactionId: string): string {
  const base = "mamanote://subscribe/success";
  return `${base}?transactionId=${encodeURIComponent(transactionId)}`;
}

function CheckoutCard({
  title,
  body,
  loading,
  error,
}: {
  title: string;
  body: string;
  loading?: boolean;
  error?: string | null;
}) {
  return (
    <main>
      <div className="card">
        <div className="logo" aria-hidden>
          ✦
        </div>
        <h1>MamaNote</h1>
        <p>{title}</p>
        <p style={{ marginTop: 8 }}>{body}</p>
        {loading ? <div className="spinner" aria-label="Loading checkout" /> : null}
        {error ? <p className="error">{error}</p> : null}
      </div>
    </main>
  );
}

function CheckoutInner() {
  const searchParams = useSearchParams();
  const transactionId = searchParams.get("_ptxn")?.trim() ?? "";
  const [error, setError] = useState<string | null>(null);
  const [opening, setOpening] = useState(Boolean(transactionId));

  useEffect(() => {
    if (!transactionId) return;

    let cancelled = false;

    (async () => {
      try {
        const token = process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN?.trim();
        const envName =
          (process.env.NEXT_PUBLIC_PADDLE_ENV?.trim() as Environments | undefined) ||
          "sandbox";

        if (!token) {
          throw new Error("Checkout is not configured (client token missing).");
        }

        const paddle = await initializePaddle({
          environment: envName,
          token,
        });

        if (!paddle) {
          throw new Error("Paddle failed to load.");
        }

        if (cancelled) return;

        paddle.Checkout.open({
          transactionId,
          settings: {
            displayMode: "overlay",
            successUrl: successUrl(transactionId),
          },
        });

        setOpening(false);
      } catch (e) {
        if (!cancelled) {
          setOpening(false);
          setError((e as Error).message);
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [transactionId]);

  if (!transactionId) {
    return (
      <CheckoutCard
        title="Complete your subscription"
        body="Open checkout from the MamaNote app."
      />
    );
  }

  if (error) {
    return (
      <CheckoutCard
        title="Complete your subscription"
        body="We could not open checkout."
        error={error}
      />
    );
  }

  return (
    <CheckoutCard
      title="Complete your subscription"
      body={opening ? "Opening secure checkout…" : "Complete payment in the checkout window."}
      loading={opening}
    />
  );
}

export default function CheckoutPage() {
  return (
    <Suspense
      fallback={
        <CheckoutCard
          title="Complete your subscription"
          body="Loading…"
          loading
        />
      }
    >
      <CheckoutInner />
    </Suspense>
  );
}

import type { Metadata } from "next";

import { ShareActivityLog } from "@/components/share/ShareActivityLog";
import { ShareErrorState } from "@/components/share/ShareErrorState";
import {
  getSharedActivities,
  isValidShareToken,
  ShareFetchError,
  shareErrorMessage,
} from "@/lib/shared-activities";

interface Props {
  params: Promise<{ token: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { token } = await params;

  if (!isValidShareToken(token)) {
    return { title: "Invalid link — MamaNote" };
  }

  try {
    const data = await getSharedActivities(token);
    return {
      title: `${data.babyName}'s activity log — MamaNote`,
      description: `Read-only baby activity log (${data.entryCount} entries) shared via MamaNote.`,
    };
  } catch {
    return { title: "Shared activity log — MamaNote" };
  }
}

export default async function SharePage({ params }: Props) {
  const { token } = await params;

  if (!isValidShareToken(token)) {
    return (
      <ShareErrorState
        title="Invalid link"
        message="This share link doesn't look right. Check the URL or ask for a new link from the MamaNote app."
      />
    );
  }

  try {
    const data = await getSharedActivities(token);
    return <ShareActivityLog data={data} />;
  } catch (error) {
    if (error instanceof ShareFetchError) {
      return (
        <ShareErrorState
          title={error.status === 410 ? "Link expired" : "Link unavailable"}
          message={shareErrorMessage(error.status, error.message)}
        />
      );
    }

    return (
      <ShareErrorState
        title="Something went wrong"
        message="We couldn't load this activity log. Please try again in a moment."
      />
    );
  }
}

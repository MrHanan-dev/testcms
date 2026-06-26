import { resolveMediaUrl } from "@/lib/resolveMediaUrl";
import type { CmsPopup } from "@/components/cms/PopupManager";
import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";

export function serializePopups(docs: Record<string, unknown>[]): CmsPopup[] {
  return docs.map((doc) => {
    const image = doc.image as { url?: string } | string | null | undefined;
    const imageUrl =
      typeof image === "object" && image?.url
        ? resolveMediaUrl(image.url)
        : typeof image === "string"
          ? resolveMediaUrl(image)
          : undefined;

    const form = doc.form as { id?: string } | string | null | undefined;
    const formId =
      typeof form === "string" ? form : typeof form === "object" && form?.id ? String(form.id) : undefined;

    return {
      id: String(doc.id),
      title: doc.title as string | undefined,
      type: doc.type as string | undefined,
      heading: doc.heading as string | undefined,
      content: doc.content as SerializedEditorState | undefined,
      imageUrl,
      primaryButtonText: doc.primaryButtonText as string | undefined,
      primaryButtonUrl: doc.primaryButtonUrl as string | undefined,
      secondaryButtonText: doc.secondaryButtonText as string | undefined,
      secondaryButtonUrl: doc.secondaryButtonUrl as string | undefined,
      showForm: Boolean(doc.showForm),
      formId,
      trigger: doc.trigger as string | undefined,
      delaySeconds: doc.delaySeconds as number | undefined,
      scrollPercentage: doc.scrollPercentage as number | undefined,
      clickSelector: doc.clickSelector as string | undefined,
      showOnPages: doc.showOnPages as string[] | undefined,
      excludePages: doc.excludePages as string | undefined,
      showOnMobile: doc.showOnMobile as boolean | undefined,
    };
  });
}

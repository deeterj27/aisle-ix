import type { BrandVideo } from "@/lib/types";

function youtubeId(url: string): string | null {
  const m = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{6,})/
  );
  return m ? m[1] : null;
}

export function VideoBlock({ video }: { video: BrandVideo }) {
  if (video.source === "youtube") {
    const id = youtubeId(video.url);
    if (id) {
      return (
        <figure className="overflow-hidden rounded-xl border border-white/10 bg-shelf">
          <div className="aspect-video">
            <iframe
              className="h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${id}`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
          <figcaption className="px-4 py-3 text-sm text-fog">
            ▶ {video.title}
          </figcaption>
        </figure>
      );
    }
  }
  // tiktok / instagram / upload fallback: link-out tile
  const label =
    video.source === "tiktok"
      ? "watch on TikTok"
      : video.source === "instagram"
        ? "watch on Instagram"
        : "watch";
  return (
    <a
      href={video.url}
      target="_blank"
      rel="noopener noreferrer"
      className="shelf-card flex aspect-video flex-col items-center justify-center gap-3 rounded-xl border border-white/10 bg-shelf text-center"
    >
      <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/25 text-xl">
        ▶
      </span>
      <span className="px-6 text-sm text-bone">{video.title}</span>
      <span className="font-[family-name:var(--font-mono)] text-xs text-fog">
        {label} ↗
      </span>
    </a>
  );
}

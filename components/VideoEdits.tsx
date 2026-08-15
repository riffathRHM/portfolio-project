"use client";

import * as React from "react";
import { Play, Volume2 } from "lucide-react";
import { videoWork } from "@/lib/data";

export default function VideoEdits() {
    const [playing, setPlaying] = React.useState<string | null>(null);
    const videoRefs = React.useRef<Record<string, HTMLVideoElement | null>>({});

    const handleMouseEnter = (title: string) => {
        if (playing) return; // don't interrupt an actively-clicked video
        const el = videoRefs.current[title];
        if (el) {
            el.currentTime = 0;
            el.play().catch(() => { });
        }
    };

    const handleMouseLeave = (title: string) => {
        if (playing) return;
        const el = videoRefs.current[title];
        if (el) {
            el.pause();
            el.currentTime = 0;
        }
    };

    const handleClick = (title: string) => {
        const el = videoRefs.current[title];
        if (!el) return;
        setPlaying(title);
        el.muted = false;
        el.controls = true;
        el.play().catch(() => { });
    };

    return (
        <div>
            <h2 className="mb-6 mt-14 font-mono text-[16px] uppercase tracking-wider text-white">
                Video Editings
            </h2>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {videoWork.map((item) => {
                    const isPlaying = playing === item.title;

                    return (
                        <div
                            key={item.title}
                            className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-line bg-surface2"
                            onMouseEnter={() => handleMouseEnter(item.title)}
                            onMouseLeave={() => handleMouseLeave(item.title)}
                        >
                            <video
                                ref={(el) => {
                                    videoRefs.current[item.title] = el;
                                }}
                                src={item.video}
                                poster={item.poster}
                                muted
                                loop
                                playsInline
                                preload="metadata"
                                onClick={() => handleClick(item.title)}
                                className="h-full w-full cursor-pointer object-cover"
                            />

                            {!isPlaying && (
                                <>
                                    {/* Play button overlay, fades on hover since the video is previewing */}
                                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-100 transition-opacity duration-300 group-hover:opacity-0">
                                        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-bg/90 text-ink shadow-lg">
                                            <Play size={20} fill="currentColor" className="ml-0.5" />
                                        </span>
                                    </div>

                                    {/* Small "sound off" hint while previewing on hover */}
                                    <div className="pointer-events-none absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-ink/70 px-3 py-1.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                        <Volume2 size={12} className="text-bg/80" />
                                        <span className="font-mono text-[10px] uppercase tracking-wider text-bg/80">
                                            Click for sound
                                        </span>
                                    </div>

                                    {/* Caption */}
                                    <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 via-ink/40 to-transparent p-5">
                                        <p className="font-display text-lg text-bg">{item.title}</p>
                                        <p className="font-mono text-[11px] uppercase tracking-wider text-bg/70">
                                            {item.category}
                                        </p>
                                    </div>
                                </>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

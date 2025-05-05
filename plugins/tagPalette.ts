/**
 * TagPalette — Quartz emitter plugin
 * ----------------------------------
 * Scans the entire vault during `quartz build`, collects the *first* tag from
 * every note, assigns each tag a colour from a palette, and emits a single
 * JSON file (`/tag‑palette.json`) that every graph script can read to keep
 * colours consistent across pages.
 *
 * Usage in quartz.config.ts
 * -------------------------
 */

import { QuartzEmitterPlugin } from "quartz/plugins/types"
import { write } from "quartz/plugins/emitters/helpers"

interface Options {
  /** Name (without extension) of the JSON file to emit. Defaults to "tag‑palette". */
  output?: string
  /** List of hex colours to cycle through. Defaults to d3.schemeCategory10. */
  palette?: string[]
}

const DEFAULT_PALETTE = [
  "#1f77b4", // blue
  "#ff7f0e", // orange
  "#2ca02c", // green
  "#d62728", // red
  "#9467bd", // purple
  "#8c564b", // brown
  "#e377c2", // pink
  "#7f7f7f", // gray
  "#bcbd22", // olive
  "#17becf", // cyan
]

export const TagPalette: QuartzEmitterPlugin<Options> = (opts: Options = {}) => {
  const outputName = (opts.output ?? "tag-palette").replace(/\.json$/i, "")
  const palette = opts.palette ?? DEFAULT_PALETTE

  return {
    name: "TagPalette",

    /** We don’t render any pages, so return an empty component list. */
    getQuartzComponents() {
      return []
    },

    /** Run once per full build, emit `/tag‑palette.json`, and return its path. */
    async emit(ctx, content, _resources, emit) {
      const tagColours: Record<string, string> = {}
      let next = 0

      // `content` is Map<slug, ProcessedContent>
      for (const [, file] of content) {
        const firstTag: string | undefined = file.data.frontmatter?.tags?.[0]
        if (firstTag && !tagColours[firstTag]) {
          tagColours[firstTag] = palette[next % palette.length]
          next += 1
        }
      }

      // Write the JSON file via Quartz’s helper so it lands in the correct folder.
      const fp = await write({
        ctx,
        slug: outputName,
        ext: ".json",
        content: JSON.stringify(tagColours),
      })

      return [fp] // Quartz expects a list of emitted file paths
    },
  }
}


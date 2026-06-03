'use client';

import { useState } from 'react';
import type { LoadedBrief } from '../../load-brief';
import type { BriefTab } from '../../briefs-data';

interface Props {
  tabs: BriefTab[];
  briefs: LoadedBrief[];
}

export default function EpisodeTabs({ tabs, briefs }: Props) {
  const [active, setActive] = useState(tabs[0]?.slug);

  if (tabs.length === 0) return null;

  // Single-brief episodes render directly without a tab strip
  const showTabs = tabs.length > 1;
  const current = briefs.find((b) => b.slug === active) || briefs[0];

  return (
    <div>
      {showTabs && (
        <div className="flex flex-wrap gap-2 mb-8 border-b border-ink/10 pb-3">
          {tabs.map((tab) => {
            const isActive = tab.slug === active;
            return (
              <button
                key={tab.slug}
                onClick={() => setActive(tab.slug)}
                className={
                  'px-4 py-2 text-sm font-medium rounded-md transition-colors ' +
                  (isActive
                    ? 'bg-brand text-white'
                    : 'text-ink/60 hover:text-ink hover:bg-ink/5')
                }
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      )}

      {current && (
        <div
          className="brief-page"
          data-brief={current.slug}
          style={{ position: 'relative', minHeight: '50vh' }}
        >
          {/* eslint-disable-next-line react/no-danger */}
          <style dangerouslySetInnerHTML={{ __html: current.scopedStyles }} />
          {/* eslint-disable-next-line react/no-danger */}
          <div dangerouslySetInnerHTML={{ __html: current.bodyContent }} />
        </div>
      )}
    </div>
  );
}

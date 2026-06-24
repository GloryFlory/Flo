import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  Mic, Ticket, Users, BookOpen, Grid2x2, Heart, Briefcase, Plane,
  ArrowLeft, ExternalLink, Circle,
  type LucideProps,
} from 'lucide-react';
import { createServerClient } from '@/lib/supabase-server';
import ProjectInteractive from './ProjectInteractive';

// ── Logo map — projects with real images ───────────────────────────────────

const PROJECT_LOGOS: Record<string, string> = {
  gwtf:     '/podcast-logo.png',
  mac:      '/mac-logo.webp',
  flowgrid: '/flow-grid.png',
};

// ── Icon fallback map ──────────────────────────────────────────────────────

const ICON_MAP: Record<string, React.ComponentType<LucideProps>> = {
  Mic, Ticket, Users, BookOpen, Grid2x2, Heart, Briefcase, Plane,
};

// ── Helpers ────────────────────────────────────────────────────────────────

const STATUS_STYLES: Record<string, string> = {
  active:    'bg-emerald-500/20 text-emerald-300 border border-emerald-500/35',
  planning:  'bg-amber-500/20 text-amber-300 border border-amber-500/35',
  attention: 'bg-rose-500/20 text-rose-300 border border-rose-500/35',
  ongoing:   'bg-sky-500/20 text-sky-300 border border-sky-500/35',
  future:    'bg-white/10 text-white/55 border border-white/20',
};

// ── Page ───────────────────────────────────────────────────────────────────

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ project: string }>;
}) {
  const { project: projectId } = await params;

  const supabase = createServerClient();

  const [
    { data: project },
    { data: tasks },
    { data: milestones },
    { data: links },
  ] = await Promise.all([
    supabase.from('flos_projects').select('*').eq('id', projectId).single(),
    supabase.from('flos_tasks').select('id, text, priority, status').eq('project_id', projectId).order('sort_order'),
    supabase.from('flos_milestones').select('id, label, due_date, done').eq('project_id', projectId).order('sort_order'),
    supabase.from('flos_links').select('id, label, url').eq('project_id', projectId).order('sort_order'),
  ]);

  if (!project) notFound();

  const color    = project.accent_color ?? '#6b7280';
  const logoSrc  = PROJECT_LOGOS[project.id];
  const IconComp = ICON_MAP[project.icon] ?? Circle;

  return (
    <div className="min-h-screen bg-[#0f1117] text-white">

      {/* Accent top bar */}
      <div className="h-0.5 w-full" style={{ background: color }} />

      <div className="max-w-3xl mx-auto px-6 py-8">

        {/* Back */}
        <Link href="/flos"
          className="inline-flex items-center gap-1.5 text-[12px] text-white/40 hover:text-white/70 transition-colors mb-8">
          <ArrowLeft size={13} strokeWidth={1.5} /> FLOs
        </Link>

        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 overflow-hidden"
              style={{ background: logoSrc ? 'transparent' : `${color}28` }}>
              {logoSrc ? (
                <Image src={logoSrc} alt={project.name} width={48} height={48}
                  className="w-full h-full object-contain rounded-xl" priority />
              ) : (
                <IconComp size={20} strokeWidth={1.5} color={color} />
              )}
            </div>
            <div>
              <h1 className="text-xl font-medium text-white mb-2">{project.name}</h1>
              <div className="flex flex-wrap gap-2">
                <span className={`text-[11px] px-2.5 py-0.5 rounded-md font-medium ${STATUS_STYLES[project.status] ?? STATUS_STYLES.future}`}>
                  {project.status_label}
                </span>
                {(project.tags ?? []).map((tag: string) => (
                  <span key={tag} className="text-[11px] px-2.5 py-0.5 rounded-md bg-white/10 text-white/55 border border-white/15">
                    {tag}
                  </span>
                ))}
                {(project.team ?? []).map((member: string) => (
                  <span key={member} className="text-[11px] px-2.5 py-0.5 rounded-md bg-sky-500/15 text-sky-300 border border-sky-500/30">
                    {member}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Phase */}
        {project.phase && (
          <div className="mb-8 pl-4 border-l-2" style={{ borderColor: `${color}60` }}>
            <p className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Current phase</p>
            <p className="text-sm text-white/70 leading-relaxed">{project.phase}</p>
          </div>
        )}

        {/* Goal */}
        {project.goal && (
          <div className="mb-8">
            <p className="text-[10px] font-semibold text-white/40 uppercase tracking-widest mb-2">Goal</p>
            <p className="text-sm text-white/85 leading-relaxed">{project.goal}</p>
          </div>
        )}

        {/* Interactive: progress + milestones + tasks (client component) */}
        <ProjectInteractive
          projectId={projectId}
          initialTasks={tasks ?? []}
          initialMilestones={milestones ?? []}
          accentColor={color}
        />

        {/* Context */}
        {project.description && (
          <div className="mb-8">
            <p className="text-[10px] font-semibold text-white/40 uppercase tracking-widest mb-2">Context</p>
            <p className="text-sm text-white/60 leading-relaxed">{project.description}</p>
          </div>
        )}

        {/* Notes */}
        {project.notes && (
          <div className="mb-8">
            <p className="text-[10px] font-semibold text-white/40 uppercase tracking-widest mb-2">Notes</p>
            <div className="border-l-2 pl-4" style={{ borderColor: `${color}50` }}>
              <p className="text-[13px] text-white/55 leading-relaxed">{project.notes}</p>
            </div>
          </div>
        )}

        {/* Links */}
        {(links ?? []).length > 0 && (
          <div className="mb-8">
            <p className="text-[10px] font-semibold text-white/40 uppercase tracking-widest mb-3">Links</p>
            <div className="flex flex-col gap-1.5">
              {(links ?? []).map((link: { id: string; label: string; url: string }) => (
                <a key={link.id} href={link.url}
                  target={link.url.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white/85 transition-colors group w-fit">
                  <ExternalLink size={12} strokeWidth={1.5} className="text-white/35 group-hover:text-white/60 flex-shrink-0" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="pt-6 border-t border-white/[0.12] flex items-center justify-between">
          <Link href="/flos"
            className="text-[11px] text-white/35 hover:text-white/60 transition-colors flex items-center gap-1.5">
            <ArrowLeft size={12} strokeWidth={1.5} /> Back to FLOs
          </Link>
          <p className="text-[11px] text-white/30">FLOs · {project.name}</p>
        </div>

      </div>
    </div>
  );
}

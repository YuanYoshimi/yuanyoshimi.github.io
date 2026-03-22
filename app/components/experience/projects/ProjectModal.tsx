'use client';

import { useEffect } from 'react';
import { usePortalStore } from '@stores';

const ProjectModal = () => {
  const selectedProject = usePortalStore((state) => state.selectedProject);
  const setSelectedProject = usePortalStore((state) => state.setSelectedProject);

  const isOpen = selectedProject !== null;

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [setSelectedProject]);

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={() => setSelectedProject(null)}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.4)',
          zIndex: 50,
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
          transition: 'opacity 0.3s ease',
        }}
      />

      {/* Panel */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          height: '100vh',
          width: 'min(480px, 90vw)',
          background: '#0a0a0a',
          borderLeft: '1px solid rgba(255,255,255,0.12)',
          zIndex: 51,
          display: 'flex',
          flexDirection: 'column',
          padding: '2.5rem',
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.4s cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        {/* Close button */}
        <button
          onClick={() => setSelectedProject(null)}
          style={{
            alignSelf: 'flex-end',
            background: 'none',
            border: '1px solid rgba(255,255,255,0.2)',
            color: 'white',
            width: '2rem',
            height: '2rem',
            borderRadius: '50%',
            cursor: 'pointer',
            fontSize: '1rem',
            lineHeight: 1,
            marginBottom: '2rem',
            flexShrink: 0,
          }}
        >
          ✕
        </button>

        {selectedProject && (
          <>
            {/* Date badge */}
            <span style={{
              fontSize: '0.7rem',
              letterSpacing: '0.1em',
              color: 'rgba(255,255,255,0.45)',
              border: '1px solid rgba(255,255,255,0.15)',
              padding: '0.25rem 0.6rem',
              alignSelf: 'flex-start',
              marginBottom: '1.2rem',
              fontFamily: 'var(--font-vercetti)',
            }}>
              {selectedProject.date.toUpperCase()}
            </span>

            {/* Title */}
            <h2 style={{
              fontFamily: 'var(--font-soria)',
              fontSize: 'clamp(1.6rem, 4vw, 2.2rem)',
              color: 'white',
              margin: '0 0 1.5rem 0',
              lineHeight: 1.15,
            }}>
              {selectedProject.title}
            </h2>

            {/* Divider */}
            <div style={{
              width: '100%',
              height: '1px',
              background: 'rgba(255,255,255,0.1)',
              marginBottom: '1.5rem',
            }} />

            {/* Description */}
            <p style={{
              fontFamily: 'var(--font-vercetti)',
              fontSize: '0.9rem',
              color: 'rgba(255,255,255,0.7)',
              lineHeight: 1.7,
              margin: 0,
              flex: 1,
            }}>
              {selectedProject.longDescription ?? selectedProject.subtext}
            </p>

            {/* Link button */}
            {selectedProject.url && (
              <a
                href={selectedProject.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginTop: '2.5rem',
                  padding: '0.75rem 1.5rem',
                  background: 'white',
                  color: 'black',
                  fontFamily: 'var(--font-vercetti)',
                  fontSize: '0.85rem',
                  letterSpacing: '0.08em',
                  textDecoration: 'none',
                  alignSelf: 'flex-start',
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
              >
                VIEW PROJECT ↗
              </a>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default ProjectModal;

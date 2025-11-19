'use client';

import React, { useState } from 'react';

interface SocialShareProps {
    url: string;
    title: string;
}

export const SocialShare: React.FC<SocialShareProps> = ({ url, title }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(url);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    const shareLinks = [
        {
            name: 'Twitter',
            icon: (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
            ),
            href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
            color: 'hover:text-[#1DA1F2]',
        },
        {
            name: 'Reddit',
            icon: (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.003 0c6.627 0 12 5.373 12 12s-5.373 12-12 12-12-5.373-12-12 5.373-12 12-12zm6.066 9.645c.178-.208.299-.477.299-.77 0-1.096-1.258-1.861-2.509-1.253-.367.18-.663.487-.848.856-1.684-.657-3.53-.987-5.435-.987-1.905 0-3.751.33-5.435.987-.185-.369-.481-.676-.848-.856-1.251-.608-2.509.157-2.509 1.253 0 .293.121.562.299.77-.442.866-.694 1.856-.694 2.925 0 4.513 4.629 7.698 9.189 7.698 4.56 0 9.189-3.185 9.189-7.698 0-1.069-.252-2.059-.694-2.925zM12 15.562c-1.656 0-3-1.344-3-3s1.344-3 3-3 3 1.344 3 3-1.344 3-3 3zm-4.965-5.5c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1z" clipRule="evenodd" />
                </svg>
            ),
            href: `https://www.reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
            color: 'hover:text-[#FF4500]',
        },
        {
            name: 'Facebook',
            icon: (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
            ),
            href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
            color: 'hover:text-[#1877F2]',
        },
    ];

    return (
        <div className="flex items-center gap-4 py-4 border-y border-gold-primary/20 my-8">
            <span className="text-sm font-bold text-text-primary uppercase tracking-wider">Share:</span>

            {/* Copy Link Button */}
            <button
                onClick={handleCopy}
                className="group flex items-center gap-2 px-3 py-1.5 rounded-sm border border-gold-primary/30 bg-bg-secondary hover:bg-gold-primary/10 hover:border-gold-primary transition-all duration-300"
                title="Copy Link"
            >
                {copied ? (
                    <>
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-xs font-medium text-green-600">Copied!</span>
                    </>
                ) : (
                    <>
                        <svg className="w-4 h-4 text-text-secondary group-hover:text-gold-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                        </svg>
                        <span className="text-xs font-medium text-text-secondary group-hover:text-gold-dark">Copy Link</span>
                    </>
                )}
            </button>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
                {shareLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-2 rounded-full bg-bg-secondary border border-transparent hover:border-gold-primary/30 text-text-muted transition-all duration-300 ${link.color}`}
                        title={`Share on ${link.name}`}
                    >
                        {link.icon}
                    </a>
                ))}
            </div>
        </div>
    );
};

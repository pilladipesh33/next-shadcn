'use client';

import { Oswald } from 'next/font/google';
import styles from './page.module.scss';
import Link from 'next/link';
import { BookDashed, Github } from 'lucide-react';
import { cn } from '@/lib/utils';

const oswald = Oswald({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <div className={cn(styles.base, styles.one)}></div>
        <div className={cn(styles.base, styles.two)}></div>
        <div className={cn(styles.base, styles.three)}></div>
        <div className={oswald.className}>
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>Next-Shadcn</h1>
            <p className={styles.bodyText}>
              This is a Next.js app with Shadcn/UI and Typescript setup.
            </p>
            <div className={styles.iconContainer}>
              <Link
                href={'https://github.com/pilladipesh33/next-shadcn'}
                target='_blank'
              >
                <Github className={styles.icon} />
              </Link>
              <Link
                href={
                  'https://github.com/new?template_name=next-shadcn&template_owner=pilladipesh33'
                }
                target='_blank'
              >
                <BookDashed className={styles.icon} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

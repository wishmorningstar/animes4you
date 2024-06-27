'use client'

import { NextUIProvider } from '@nextui-org/react'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <NextUIProvider>
            <ProgressBar
                height="4px"
                color="#9241e2"
                options={{ showSpinner: false }}
                shallowRouting
            />
            {children}
        </NextUIProvider>
    )
}
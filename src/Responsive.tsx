//Responsive.ts
import React from 'react';
import { useMediaQuery } from 'react-responsive';

type Props = {
    desktopContainer: React.ReactElement,
    mobileContainer: React.ReactElement,
    tabletContainer: React.ReactElement
}

export const ResponsiveContainer = ({ desktopContainer, mobileContainer, tabletContainer }: Props) => {
    const isDesktop = useMediaQuery({ minWidth: 1025 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
    const isMobile = useMediaQuery({ maxWidth: 767 });

    if (isDesktop) {
        return desktopContainer;
    } else if (isTablet) {
        return tabletContainer;
    } else if (isMobile) {
        return mobileContainer;
    }
}

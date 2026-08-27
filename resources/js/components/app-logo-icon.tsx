import type { ImgHTMLAttributes } from 'react';

export default function AppLogoIcon(
    props: ImgHTMLAttributes<HTMLImageElement>
) {
    return (
        <img
            src="/images/dmhma-alumni-logo.png"
            alt="DMHMA Alumni"
            {...props}
        />
    );
}

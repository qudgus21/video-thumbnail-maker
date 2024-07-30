import { useState } from 'react';
import VideoUpload from '../components/VideoUpload';
import ThumbnailGenerator from '../components/ThumbnailGenerator';
import { Inter } from 'next/font/google';
import { Box, Typography } from '@mui/material';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    const [videoSrc, setVideoSrc] = useState<string | null>(null);

    const handleVideoUpload = (src: string) => {
        setVideoSrc(src);
    };

    return (
        <Box className={`min-h-screen flex flex-col items-center justify-center p-12 ${inter.className}`} sx={{ bgcolor: 'grey.100' }}>
            <Typography variant="h3" component="h1" gutterBottom>
                Video Thumbnail Maker
            </Typography>
            <VideoUpload onVideoUpload={handleVideoUpload} />
            <ThumbnailGenerator videoSrc={videoSrc} />
        </Box>
    );
}

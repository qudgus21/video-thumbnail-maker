import { useState, useRef, useEffect } from 'react';
import { Box, Button, TextField, Typography, MenuItem, Select, SelectChangeEvent } from '@mui/material';

interface ThumbnailGeneratorProps {
    videoSrc: string | null;
}

const ThumbnailGenerator: React.FC<ThumbnailGeneratorProps> = ({ videoSrc }) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    const [thumbnailSrc, setThumbnailSrc] = useState<string | null>(null);
    const [currentTime, setCurrentTime] = useState<number>(0);
    const [inputMinutes, setInputMinutes] = useState<number>(0);
    const [inputSeconds, setInputSeconds] = useState<number>(0);
    const [format, setFormat] = useState<string>('png');
    const [width, setWidth] = useState<number | string>('auto');
    const [height, setHeight] = useState<number | string>('auto');

    // 비디오가 현재 재생 중일 때마다 호출되는 함수
    const handleTimeUpdate = () => {
        const video = videoRef.current;
        if (video) {
            setCurrentTime(video.currentTime);
            const minutes = Math.floor(video.currentTime / 60);
            const seconds = Math.floor(video.currentTime % 60);
            setInputMinutes(minutes);
            setInputSeconds(seconds);
        }
    };

    // 입력된 분 변경 함수
    const handleMinutesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputMinutes(Number(event.target.value));
        updateVideoTime(Number(event.target.value), inputSeconds);
    };

    // 입력된 초 변경 함수
    const handleSecondsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputSeconds(Number(event.target.value));
        updateVideoTime(inputMinutes, Number(event.target.value));
    };

    // 분과 초를 바탕으로 비디오 시간 업데이트 함수
    const updateVideoTime = (minutes: number, seconds: number) => {
        const video = videoRef.current;
        if (video) {
            const time = minutes * 60 + seconds;
            video.currentTime = time;
        }
    };

    // 포맷 변경 함수
    const handleFormatChange = (event: SelectChangeEvent<string>) => {
        setFormat(event.target.value as string);
    };

    // 너비 변경 함수
    const handleWidthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setWidth(event.target.value === '' ? 'auto' : Number(event.target.value));
    };

    // 높이 변경 함수
    const handleHeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setHeight(event.target.value === '' ? 'auto' : Number(event.target.value));
    };

    // 썸네일 생성 함수
    const generateThumbnail = (time: number) => {
        const video = videoRef.current;
        if (video) {
            video.currentTime = time;
            video.onseeked = () => {
                const canvas = document.createElement('canvas');
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;
                const ctx = canvas.getContext('2d');
                if (ctx) {
                    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                    setThumbnailSrc(canvas.toDataURL());
                }
            };
        }
    };

    // 썸네일 다운로드 함수
    const downloadThumbnail = () => {
        if (thumbnailSrc) {
            const canvas = document.createElement('canvas');
            const img = new Image();
            img.src = thumbnailSrc;
            img.onload = () => {
                canvas.width = width === 'auto' ? img.width : Number(width);
                canvas.height = height === 'auto' ? img.height : Number(height);
                const ctx = canvas.getContext('2d');
                if (ctx) {
                    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                    canvas.toBlob((blob) => {
                        if (blob) {
                            const link = document.createElement('a');
                            link.href = URL.createObjectURL(blob);
                            link.download = `thumbnail.${format}`;
                            link.click();
                        }
                    }, `image/${format}`);
                }
            };
        }
    };

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.addEventListener('timeupdate', handleTimeUpdate);
        }
        return () => {
            if (videoRef.current) {
                videoRef.current.removeEventListener('timeupdate', handleTimeUpdate);
            }
        };
    }, [videoSrc]);

    return (
        <Box display="flex" flexDirection="column" alignItems="center" p={2} mt={2} border={1} borderRadius={1} borderColor="grey.300">
            {videoSrc ? (
                <>
                    <Box
                        width="640px" // Set a fixed width for the video container
                        height="360px" // Set a fixed height for the video container
                        overflow="hidden" // Prevents overflow
                    >
                        <video
                            ref={videoRef}
                            src={videoSrc}
                            controls
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }} // Ensure the video fits the container
                        />
                    </Box>
                    <Box display="flex" alignItems="center" mb={2} mt={2}>
                        <TextField
                            type="string"
                            value={inputMinutes}
                            onChange={handleMinutesChange}
                            label="Minutes"
                            variant="outlined"
                            size="small"
                            sx={{ mr: 1 }}
                            inputProps={{ min: 0, step: 1 }}
                        />
                        <TextField
                            type="string"
                            value={inputSeconds}
                            onChange={handleSecondsChange}
                            label="Seconds"
                            variant="outlined"
                            size="small"
                            sx={{ mr: 1 }}
                            inputProps={{ min: 0, step: 1 }}
                        />
                        <Button variant="contained" color="primary" onClick={() => generateThumbnail(currentTime)}>
                            Generate Thumbnail
                        </Button>
                    </Box>
                    {thumbnailSrc && (
                        <Box mt={2} display="flex" flexDirection="column" alignItems="center">
                            <img src={thumbnailSrc} alt="Thumbnail" style={{ border: '1px solid grey', borderRadius: '4px', maxWidth: '100%' }} />
                            <Box display="flex" alignItems="center" mt={2}>
                                <Select value={format} onChange={handleFormatChange}  className='w-[100px]'>
                                    <MenuItem value="png">PNG</MenuItem>
                                    <MenuItem value="jpeg">JPEG</MenuItem>
                                    <MenuItem value="jpg">JPG</MenuItem>
                                    <MenuItem value="webp">WEBP</MenuItem>
                                </Select>
                                <TextField
                                    type="number"
                                    value={width}
                                    onChange={handleWidthChange}
                                    label="Width"
                                    variant="outlined"
                                    size="small"
                                    sx={{ mx: 2 }}
                                />
                                <TextField
                                    type="number"
                                    value={height}
                                    onChange={handleHeightChange}
                                    label="Height"
                                    variant="outlined"
                                    size="small"
                                    sx={{ mr: 2 }}
                                />
                                <Button variant="contained" color="primary" onClick={downloadThumbnail}>
                                    Download Thumbnail
                                </Button>
                            </Box>
                        </Box>
                    )}
                </>
            ) : (
                <Box width="100%" height="400px" display="flex" alignItems="center" justifyContent="center" bgcolor="grey.200" p={5} borderRadius={1}>
                    <Typography variant="h6" color="textSecondary">
                        Video preview will appear here
                    </Typography>
                </Box>
            )}
        </Box>
    );
};

export default ThumbnailGenerator;

import { Box, Button } from '@mui/material';

interface VideoUploadProps {
    onVideoUpload: (src: string) => void;
}

const VideoUpload: React.FC<VideoUploadProps> = ({ onVideoUpload }) => {
    const handleVideoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const url = URL.createObjectURL(file);
            onVideoUpload(url);
        }
    };

    return (
        <Box display="flex" flexDirection="column" alignItems="center" p={2} border={1} borderRadius={1} borderColor="grey.300">
            <input
                type="file"
                accept="video/*"
                style={{ display: 'none' }}
                id="video-upload"
                onChange={handleVideoUpload}
            />
            <label htmlFor="video-upload">
                <Button variant="contained" color="primary" component="span">
                    upload video
                </Button>
            </label>
        </Box>
    );
};

export default VideoUpload;

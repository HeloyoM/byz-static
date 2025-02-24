import { useEffect, useRef } from "react"

const UploadWidget = ({ setPublicId }) => {
    const uploadButtonRef = useRef(null);
    const cloudinaryRef = useRef(undefined)

    const uwConfig = {
        cloudName: 'traceback',
        uploadPreset: 'bylpreset'
    }


    useEffect(() => {
        if (window.cloudinary) {

            cloudinaryRef.current = window.cloudinary.createUploadWidget(
                uwConfig,
                (error, result) => {
                    if (!error && result && result.event === 'success') {
                        console.log('Upload successful:', result.info);
                        setPublicId(result.info.public_id);
                    }
                }
            );

            const handleUploadClick = () => {
                if (cloudinaryRef.current) {
                    cloudinaryRef.current.open();
                }
            };

            const buttonElement = uploadButtonRef.current;
            buttonElement.addEventListener('click', handleUploadClick);

            return () => {
                buttonElement.removeEventListener('click', handleUploadClick);
            };

        }

    }, [])


    return (
        <button
            ref={uploadButtonRef}
            id="upload_widget"
            className="cloudinary-button"
        >
            Upload
        </button>
    );
}

export default UploadWidget;
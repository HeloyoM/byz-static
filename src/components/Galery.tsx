import React from 'react';
import { Grid2 } from "@mui/material";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { getImagesResource } from 'api/media';
import { AdvancedImage, placeholder, responsive } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import '../App.css';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

const Galery = () => {
    const [publicIds, setPublicIds] = React.useState<any[]>([]);

    const cld = new Cloudinary({ cloud: { cloudName: 'traceback' } });

    React.useEffect(() => {
        if (!!publicIds.length) return

        const resources = localStorage.getItem(`resources`);

        if (resources) {

            const resourcesObj = JSON.parse(resources);
            setPublicIds(extractPublicIds(resourcesObj));

        } else loadUploadedImages();

    }, [publicIds])

    const loadUploadedImages = async () => {
        const data = await getImagesResource();

        localStorage.setItem("resources", JSON.stringify(data.resources));

        setPublicIds(extractPublicIds(data.resources));
    }

    const extractPublicIds = (resources: any) => (resources.map((r: any) => r.public_id))

    const chunkArray = (arr: string[], chunkSize: number = 2) => {
        const result = [];
        for (let i = 0; i < arr.length; i += chunkSize) {
            result.push(arr.slice(i, i + chunkSize));
        }
        return result;
    }

    const [chunk1, chunk2, chunk3] = chunkArray(publicIds, 3)

    if (!publicIds.length) return <></>

    return (
        <Grid2 container spacing={1} className="galery">
            <Grid2 size={3} spacing={20}>
                {chunk1.map((c, i) => (
                    <AdvancedImage
                        key={i}
                        style={{ willChange: "scroll-position", width: 200, height: 200, repeat: 'none', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
                        cldImg={cld.image(c)}
                        plugins={[responsive(), placeholder()]}
                    />
                ))}
            </Grid2>
            <Grid2 size={3}>
                {chunk2.map((c, i) => (
                    <AdvancedImage
                        key={i}
                        style={{ willChange: "scroll-position", margin: 5, width: 200, height: 200, repeat: 'none', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
                        cldImg={cld.image(c)}
                        plugins={[responsive(), placeholder()]}
                    />
                ))}
            </Grid2>
            <Grid2 size={3}>
                {chunk2.map((c, i) => (
                    <AdvancedImage
                        key={i}
                        style={{ willChange: "scroll-position", margin: 5, width: 200, height: 200, repeat: 'none', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
                        cldImg={cld.image(c)}
                        plugins={[responsive(), placeholder()]}
                    />
                ))}
            </Grid2>
            <Grid2 size={3}>
                {chunk3.map((c, i) => (
                    <AdvancedImage
                        key={i}
                        style={{ willChange: "scroll-position", margin: 5, width: 200, height: 200, repeat: 'none', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
                        cldImg={cld.image(c)}
                        plugins={[responsive(), placeholder()]}
                    />
                ))}
            </Grid2>
        </Grid2>
    )
}

export default Galery;

import * as React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import AppServerMsgContext from '../../contexes/AppServerMsg';
import emojys from '../utils/emojys';
import { Toast } from '../../enum/Toast.enum';

export default function AppToast() {
    const { updateServerMsgContext, serverMsg } = React.useContext(AppServerMsgContext)

    React.useEffect(() => {
        switch (serverMsg) {
            case Toast.VIDEO_UPLOADED:
                toast.success(Toast.VIDEO_UPLOADED);
                break;
            default:
                break;
        }

        setTimeout(() => {
            updateServerMsgContext('')
        }, 5000)
    }, [serverMsg])

    return (
        <Toaster
            position="top-center"
            reverseOrder={false}
            gutter={8}
            containerClassName=""
            containerStyle={{}}
            toastOptions={{
                className: '',
                success: {
                    icon: emojys.article,
                    duration: 4000,
                    style: {
                        border: '2px solid green',
                        background: '#fff',
                        color: '#000'
                    }
                },
                error: {
                    icon: emojys.error,
                    duration: 5000,
                    style: {
                        background: '#000',
                        color: '#fff',
                        border: '2px solid red'
                    }
                },
            }}
        />
    )
}
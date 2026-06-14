import { ReactNode } from 'react';
import {IcSpinner} from '../icons/IcSpinner';

type Props = {
    loading?: boolean;
    children?: ReactNode;
}
const ButonField = ({loading, children}: Props)   => {
    return (
        <div className="btn-main">
            {
                !loading ? children : <div style = {{display: 'flex', alignItems: 'center', columnGap: '.5rem', color: '#fff'}}>
                    <IcSpinner width='32px' height='32px' />
                    {children}
                </div>
            }
            </div>
    )
} 

export default ButonField;
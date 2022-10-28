'use client'

import { FC } from 'react'
import {RecoilRoot} from 'recoil'

const Context: FC<{children: any}> = ({children}) => {
return (
    <RecoilRoot>
            {children}
    </RecoilRoot>
)
}
export default Context
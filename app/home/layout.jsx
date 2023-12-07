

import BarraMenu from '@components/BarraMenu';

const HomeLayout = ({ children }) => {

    return (<>
        <BarraMenu />
        {children}

    </>
    )
}

export default HomeLayout;
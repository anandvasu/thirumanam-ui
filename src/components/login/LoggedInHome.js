import React from 'react';
import Aux from '../../hoc/Aux';
import Footer from '../../components/footer/Footer';
import TopMenu from '../../components/menu/TopMenu';
import QuickSearch from '../../components/search/QuickSearch';

import Profiles from '../profiles/Profiles';

const loggedInHome = ( props ) => (
    <Aux>
        <div className="hs10" />
        <TopMenu /> 
        <div className="hs10" />
        <QuickSearch />
        <div className="hs10" />
        <Profiles />
        <div className="hs20" />
        <Footer />
    </Aux>
);

export default loggedInHome;
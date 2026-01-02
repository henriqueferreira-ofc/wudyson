import React, { useEffect, useState } from 'react';
import GlassContainer from './GlassContainer';
import ProfileHeader from './ProfileHeader';
import ActionGrid from './ActionGrid';
import SaveContactButton from './SaveContactButton';
import FeaturedProperty from './FeaturedProperty';
import Footer from './Footer';

const Home: React.FC = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        // Trigger animation after mount
        setLoaded(true);
    }, []);

    return (
        <div className={`
      relative z-10 w-full max-w-[400px] px-4
      opacity-100
    `}>
            <GlassContainer className="w-full flex flex-col items-center min-h-[80vh]">
                <ProfileHeader />
                <ActionGrid />
                <SaveContactButton />
                <FeaturedProperty />
                <div className="flex-grow" />
                <Footer />
            </GlassContainer>
        </div>
    );
};

export default Home;
